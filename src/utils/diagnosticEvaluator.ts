/**
 * Diagnostic Evaluator Utility
 * Provides deterministic answer verification and misconception evaluation.
 * Used across client context and server fallbacks to ensure consistency.
 */

import type {
  AnswerCorrectness,
  ReasoningQuality,
  MisconceptionStatus,
  DiagnosticConfidence,
  ConfidenceLevel,
  MisconceptionAnalysis,
} from '../types/learning';

export interface EvaluationPayload {
  questionId?: string;
  topicId?: string;
  grade?: string;
  subject?: string;
  topic?: string;
  learningObjective?: string;
  questionText?: string;
  verifiedCorrectAnswer: string;
  submittedAnswer: string;
  studentReasoning?: string;
  options?: { id: string; text: string }[];
  markingCriteria?: string;
  conceptualExplanation?: string;
  commonMisconceptions?: {
    answerIdOrPattern: string;
    misconceptionTitle: string;
    explanation: string;
    typicalReasoningQuote: string;
  }[];
}

export type EvaluationResult = MisconceptionAnalysis;

/**
 * Normalizes unicode subscripts, superscripts, arrows, and dashes to standard ASCII
 */
export function normalizeSubscriptsAndMath(str: string): string {
  const map: Record<string, string> = {
    '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
    '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
    '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
    '⁺': '+', '⁻': '-',
    '→': '->', '⟶': '->', '–': '-', '—': '-', '−': '-'
  };
  return (str || '').replace(/[₀-₉⁰-⁹⁺⁻→⟶–—−]/g, (ch) => map[ch] || ch);
}

/**
 * Cleans string for normalized comparison
 */
export function clean(str: string): string {
  const normalized = normalizeSubscriptsAndMath(str);
  return normalized.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
}

/**
 * Authoritative answer correctness verification.
 * Accepts exact matches, option IDs, option text, numerical equivalence,
 * algebraic variable equations (e.g. "x = 7", "7", "x=7", "X = 7", "21/3"),
 * chemical formulas with subscripts, and science communicative equivalence.
 */
export function verifyAnswerCorrectness(
  submitted: string,
  verified: string,
  options?: { id: string; text: string }[]
): boolean {
  if (!submitted || !verified) return false;
  const sRaw = submitted.trim();
  const vRaw = verified.trim();
  const sClean = clean(submitted);
  const vClean = clean(verified);

  if (sClean === vClean) return true;

  // 1. Check option ID / option text matches
  if (options && options.length > 0) {
    const cleanId = sClean.replace(/^option/, '');
    const matchedOpt = options.find((o) => clean(o.id) === cleanId || clean(o.id) === sClean);
    if (matchedOpt) {
      if (clean(matchedOpt.text) === vClean || vClean.includes(clean(matchedOpt.id))) {
        return true;
      }
    }

    const verifiedOpt = options.find((o) => clean(o.id) === vClean || clean(o.text) === vClean);
    if (verifiedOpt) {
      if (sClean === clean(verifiedOpt.id) || sClean === clean(verifiedOpt.text)) {
        return true;
      }
      if (clean(verifiedOpt.text).includes(sClean) && sClean.length >= 2) {
        return true;
      }
    }
  }

  // 2. Math equivalence & variable extraction (e.g. "x = 7", "7", "x=7", "X = 7", "x is 7", "21/3")
  const extractMathValue = (str: string): string => {
    const eqMatch = str.match(/(?:[a-zA-Z]\s*=\s*)([0-9.-]+(?:\/[0-9.-]+)?)/i);
    if (eqMatch) return eqMatch[1].trim();
    const numMatch = str.match(/(?:^|\s|=)([0-9.-]+(?:\/[0-9.-]+)?)(?:\s*(?:g|grams?|n|newtons?|km\/h|m\/s)?)?$/i);
    if (numMatch) return numMatch[1].trim();
    return '';
  };

  const vVal = extractMathValue(vRaw);
  const sVal = extractMathValue(sRaw);
  if (vVal && sVal) {
    if (vVal === sVal) return true;
    try {
      const evalFrac = (f: string) => {
        if (f.includes('/')) {
          const [n, d] = f.split('/').map(Number);
          return d !== 0 ? n / d : NaN;
        }
        return Number(f);
      };
      if (Math.abs(evalFrac(vVal) - evalFrac(sVal)) < 0.0001) return true;
    } catch {
      // ignore
    }
  }

  // 3. Variable equality substring matching like "x = 7" vs "Add 7...: x = 7"
  const sEq = sRaw.toLowerCase().replace(/\s+/g, '');
  const vEq = vRaw.toLowerCase().replace(/\s+/g, '');
  if (vEq.includes(sEq) && sEq.length >= 2) return true;
  if (sEq.includes(vEq) && vEq.length >= 2) return true;

  const vTargetEqMatch = vRaw.match(/([a-zA-Z]\s*=\s*[^,\n:]+)/i);
  if (vTargetEqMatch) {
    const targetEq = vTargetEqMatch[1].toLowerCase().replace(/\s+/g, '');
    if (targetEq === sEq) return true;
    const targetNum = targetEq.replace(/^[a-z]=/, '');
    if (targetNum === sEq || targetNum === sVal) return true;
  }

  // 4. Substring inclusion if substantial (>= 3 chars)
  if (sClean.length === 1 && vClean.startsWith(sClean)) return true;
  if (vClean.startsWith(sClean + ' ') || vClean.startsWith(sClean + '.') || vClean.startsWith(sClean + ':')) return true;
  if (vClean.includes(sClean) && sClean.length >= 3) return true;

  // 5. Chemical equation equivalence (e.g. "2H₂ + O₂ → 2H₂O", "2H2 + O2 -> 2H2O", "2 H2 + O2 -> 2 H2O")
  const sNormEq = normalizeSubscriptsAndMath(sRaw).replace(/\s+/g, '').toLowerCase();
  const vNormEq = normalizeSubscriptsAndMath(vRaw).replace(/\s+/g, '').toLowerCase();
  if (vNormEq.includes(sNormEq) && sNormEq.length >= 5) return true;
  if (sNormEq.includes(vNormEq) && vNormEq.length >= 5) return true;

  // 6. Science communicative equivalence
  if (
    (vClean.includes('zeroforwardthrust') || vClean.includes('zeronetforce') || vClean.includes('0n')) &&
    (sClean === '0' || sClean === '0n' || sClean === 'zero' || sClean.includes('zeroforward') || sClean.includes('zerothrust') || sClean.includes('noforwardforce'))
  ) {
    return true;
  }

  return false;
}

/**
 * Evaluates student answer deterministically based on curriculum rules and evidence.
 */
export function evaluateDiagnosticSubmission(payload: EvaluationPayload): EvaluationResult {
  const isCorrect = verifyAnswerCorrectness(
    payload.submittedAnswer,
    payload.verifiedCorrectAnswer,
    payload.options
  );
  const reasoning = (payload.studentReasoning || '').trim();
  const rLower = reasoning.toLowerCase();
  const topicTitle = payload.topic || 'STEM';
  const defaultExplanation =
    payload.conceptualExplanation ||
    `According to ${topicTitle} standards, the verified target solution is: ${payload.verifiedCorrectAnswer}.`;

  // Domain detection
  const isChemistry =
    (payload.topicId && payload.topicId.includes('chem')) ||
    topicTitle.toLowerCase().includes('chem') ||
    (payload.learningObjective || '').toLowerCase().includes('subscript') ||
    (payload.questionText || '').toLowerCase().includes('h₂') ||
    (payload.questionText || '').toLowerCase().includes('h2');

  const isAlgebra =
    (payload.topicId && payload.topicId.includes('alg')) ||
    topicTitle.toLowerCase().includes('algebra') ||
    (payload.learningObjective || '').toLowerCase().includes('equation') ||
    (payload.learningObjective || '').toLowerCase().includes('inverse operations');

  const isPhysics =
    (payload.topicId && payload.topicId.includes('force')) ||
    topicTitle.toLowerCase().includes('force') ||
    (payload.learningObjective || '').toLowerCase().includes('newton') ||
    (payload.learningObjective || '').toLowerCase().includes('inertia');

  // CASE 1: Answer is verified CORRECT
  if (isCorrect) {
    let explanation = defaultExplanation;

    // Check for contradictory reasoning despite selecting the right option
    if (payload.commonMisconceptions && reasoning.length >= 10) {
      for (const cm of payload.commonMisconceptions) {
        const matchesQuote =
          cm.typicalReasoningQuote && rLower.includes(cm.typicalReasoningQuote.toLowerCase().slice(0, 15));
        
        const matchesPhysicsMisconception =
          isPhysics &&
          cm.misconceptionTitle.toLowerCase().includes('continuous force') &&
          (rLower.includes('keep moving') || rLower.includes('engines have to keep firing') || rLower.includes('run out of push'));

        const matchesChemMisconception =
          isChemistry &&
          cm.misconceptionTitle.toLowerCase().includes('subscript') &&
          (rLower.includes('change') && (rLower.includes('subscript') || rLower.includes('h2o2')));

        if (matchesQuote || matchesPhysicsMisconception || matchesChemMisconception) {
          return {
            answerCorrectness: 'correct',
            reasoningQuality: 'flawed',
            misconceptionStatus: 'demonstrated',
            diagnosticConfidence: 'medium',
            isCorrect: true,
            conceptualExplanation: `Your final answer choice is correct! However, your written reasoning reflects a contradictory intuition: "${cm.misconceptionTitle}". ${cm.explanation} Make sure your conceptual explanation matches your chosen answer!`,
            possibleMisconception: `Contradictory Reasoning: ${cm.misconceptionTitle}`,
            confidence: 'medium',
            evidenceQuote: reasoning.slice(0, 120),
            nextLearningStep: 'Practice connecting the accurate scientific principle directly to your written justification.',
            source: 'fallback',
          };
        }
      }
    }

    // Sound reasoning validation for Algebra
    let reasoningQuality: ReasoningQuality = reasoning.length >= 10 ? 'sound' : reasoning.length > 0 ? 'partially_sound' : 'not_provided';
    if (isAlgebra && reasoning) {
      if (
        (rLower.includes('add 7') || rLower.includes('adding 7') || rLower.includes('move 7') || rLower.includes('plus 7')) &&
        (rLower.includes('divide by 3') || rLower.includes('divided by 3') || rLower.includes('/ 3') || rLower.includes('over 3'))
      ) {
        reasoningQuality = 'sound';
        explanation =
          'Accurate mathematical solution! You correctly used inverse operations: first adding 7 to both sides of 3x - 7 = 14 to isolate the variable term (3x = 21), and then dividing both sides by 3 to arrive at x = 7.';
      }
    }

    // Sound reasoning validation for Chemical Equations
    if (isChemistry && reasoning) {
      if (
        (rLower.includes('balance') || rLower.includes('atoms') || rLower.includes('rhs') || rLower.includes('lhs') || rLower.includes('conserv')) &&
        (rLower.includes('subscript') || rLower.includes('coefficient') || rLower.includes('molecular form') || rLower.includes('cannot be changed') || rLower.includes('cannot change'))
      ) {
        reasoningQuality = 'sound';
        explanation =
          'Accurate chemical equation balancing! The balanced equation 2H₂ + O₂ → 2H₂O conserves mass with 4 hydrogen atoms and 2 oxygen atoms on each side. You correctly understood that coefficients can be adjusted while chemical subscripts must remain unchanged to preserve molecular identity.';
      }
    }

    return {
      answerCorrectness: 'correct',
      reasoningQuality,
      misconceptionStatus: 'none_evident',
      diagnosticConfidence: 'high',
      isCorrect: true,
      conceptualExplanation: explanation,
      possibleMisconception: null,
      confidence: 'insufficient_evidence',
      evidenceQuote: null,
      nextLearningStep: 'Advance to the follow-up challenge to test conceptual transfer in a new scenario.',
      source: 'fallback',
    };
  }

  // CASE 2: Answer is INCORRECT. Check reasoning evidence.
  const isReasoningVague =
    !reasoning ||
    reasoning.length < 8 ||
    /^(i don'?t know|idk|guess|guessed|i guessed|just guessed|just a guess|none|\.|not sure|because)$/i.test(reasoning);

  if (isReasoningVague) {
    return {
      answerCorrectness: 'incorrect',
      reasoningQuality: reasoning.length === 0 ? 'not_provided' : 'insufficient',
      misconceptionStatus: 'insufficient_evidence',
      diagnosticConfidence: 'low',
      isCorrect: false,
      conceptualExplanation: defaultExplanation,
      possibleMisconception: null,
      confidence: 'insufficient_evidence',
      evidenceQuote: null,
      nextLearningStep:
        'Try explaining how you reached this answer step by step so we can identify any tricky steps.',
      source: 'fallback',
    };
  }

  // Evaluate against cataloged misconceptions only when explicit evidence exists
  if (payload.commonMisconceptions && payload.commonMisconceptions.length > 0) {
    for (const cm of payload.commonMisconceptions) {
      const matchesPattern =
        cm.answerIdOrPattern && clean(payload.submittedAnswer).includes(clean(cm.answerIdOrPattern));
      const matchesQuote =
        cm.typicalReasoningQuote && rLower.includes(cm.typicalReasoningQuote.toLowerCase().slice(0, 15));

      const matchesNewtonInertia =
        isPhysics &&
        cm.misconceptionTitle.toLowerCase().includes('continuous force') &&
        (rLower.includes('keep moving') ||
          rLower.includes('engine') ||
          rLower.includes('firing') ||
          rLower.includes('run out of push') ||
          rLower.includes('coast to a complete stop') ||
          rLower.includes('needs force to move'));

      const matchesSubscripts =
        isChemistry &&
        cm.misconceptionTitle.toLowerCase().includes('subscript') &&
        (rLower.includes('change') && (rLower.includes('subscript') || rLower.includes('h2o2') || rLower.includes('small 2')));

      const matchesNegativeDistributive =
        isAlgebra &&
        cm.misconceptionTitle.toLowerCase().includes('negative sign') &&
        (rLower.includes('5 - 8') ||
          rLower.includes('-6x - 3') ||
          (rLower.includes('negative') && rLower.includes('distributed') && rLower.includes('-3')));

      const matchesAlgebraSignReversal =
        isAlgebra &&
        cm.misconceptionTitle.toLowerCase().includes('sign reversal') &&
        (rLower.includes('subtract 7') || rLower.includes('subtracted 7') || rLower.includes('14 - 7'));

      if (matchesQuote || matchesNewtonInertia || matchesSubscripts || matchesNegativeDistributive || matchesAlgebraSignReversal) {
        return {
          answerCorrectness: 'incorrect',
          reasoningQuality: 'flawed',
          misconceptionStatus: 'demonstrated',
          diagnosticConfidence: 'high',
          isCorrect: false,
          conceptualExplanation: defaultExplanation,
          possibleMisconception: cm.misconceptionTitle,
          confidence: 'high',
          evidenceQuote: reasoning.slice(0, 120),
          nextLearningStep: cm.explanation,
          source: 'fallback',
        };
      }
    }
  }

  // Incorrect answer with non-matching reasoning: DO NOT invent a misconception
  return {
    answerCorrectness: 'incorrect',
    reasoningQuality: reasoning.length >= 10 ? 'partially_sound' : 'insufficient',
    misconceptionStatus: 'none_evident',
    diagnosticConfidence: 'medium',
    isCorrect: false,
    conceptualExplanation: defaultExplanation,
    possibleMisconception: null,
    confidence: 'insufficient_evidence',
    evidenceQuote: null,
    nextLearningStep: `Re-examine the core principle for ${topicTitle} and test your thinking with the follow-up challenge.`,
    source: 'fallback',
  };
}
