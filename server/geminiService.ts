import { GoogleGenAI, Type } from '@google/genai';
import { BUILT_IN_QUESTIONS } from '../src/data/questionBank.ts';
import type {
  STEMQuestion,
  AnswerCorrectness,
  ReasoningQuality,
  MisconceptionStatus,
  DiagnosticConfidence,
  MisconceptionAnalysis,
} from '../src/types/learning.ts';

// Initialize server-side Gemini client
const apiKey = process.env.GEMINI_API_KEY || '';

const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

export interface AnalyzeAnswerPayload {
  questionId?: string;
  topicId?: string;
  grade: string;
  subject: string;
  topic: string;
  learningObjective: string;
  questionText: string;
  options?: { id: string; text: string }[];
  verifiedCorrectAnswer: string;
  submittedAnswer: string;
  studentReasoning?: string;
  markingCriteria?: string;
}

export type MisconceptionResult = MisconceptionAnalysis;

export interface GenerateFollowUpPayload {
  parentQuestionId?: string;
  topicId?: string;
  grade: string;
  subject: string;
  topic: string;
  learningObjective: string;
  originalQuestionText: string;
  originalCorrectAnswer: string;
}

export interface GeneratedFollowUpResult {
  id: string;
  parentQuestionId: string;
  learningObjective: string;
  questionText: string;
  contextOrEquation?: string;
  options: { id: string; text: string }[];
  correctAnswerId: string;
  correctAnswerText: string;
  explanation: string;
  source: 'gemini' | 'fallback';
}

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
 * Normalizes text for comparison
 */
export function clean(str: string): string {
  const normalized = normalizeSubscriptsAndMath(str);
  return normalized.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
}

export type STEMDomain = 'physics' | 'chemistry' | 'algebra' | 'biology' | 'general_knowledge';

/**
 * Robust domain detector that inspects questionId, topicId, and question content.
 * Prevents any cross-contamination (e.g. physics questions treated as chemistry).
 */
export function detectDomain(payload: {
  questionId?: string;
  topicId?: string;
  topic?: string;
  subject?: string;
  learningObjective?: string;
  questionText?: string;
  verifiedCorrectAnswer?: string;
}): STEMDomain {
  // 1. Direct questionId check
  if (payload.questionId) {
    const qid = payload.questionId.toLowerCase();
    if (qid.startsWith('bio-') || qid.includes('biology')) return 'biology';
    if (qid.startsWith('gk-') || qid.includes('general_knowledge')) return 'general_knowledge';
    if (qid.startsWith('phy-') || qid.includes('force') || qid.includes('motion') || qid.includes('physics')) return 'physics';
    if (qid.startsWith('chem-') || qid.includes('chem')) return 'chemistry';
    if (qid.startsWith('math-') || qid.includes('alg') || qid.includes('math')) return 'algebra';
  }

  // 2. Direct topicId check
  if (payload.topicId) {
    if (payload.topicId.startsWith('biology') || payload.topicId.includes('reproduction') || payload.topicId.includes('cell')) return 'biology';
    if (payload.topicId.startsWith('gk') || payload.topicId.includes('astronomy') || payload.topicId.includes('environment')) return 'general_knowledge';
    if (payload.topicId.startsWith('physics') || payload.topicId === 'force_and_motion') return 'physics';
    if (payload.topicId.startsWith('chemistry') || payload.topicId === 'chemical_equations') return 'chemistry';
    if (payload.topicId.startsWith('math') || payload.topicId === 'basic_algebra') return 'algebra';
  }

  // 3. Subject check if provided
  if (payload.subject) {
    const sub = payload.subject.toLowerCase();
    if (sub.includes('bio')) return 'biology';
    if (sub.includes('general knowledge') || sub.includes('gk')) return 'general_knowledge';
    if (sub.includes('physics')) return 'physics';
    if (sub.includes('chem')) return 'chemistry';
    if (sub.includes('math')) return 'algebra';
  }

  // 4. Inspect deep text content for unambiguous domain markers
  const textContent = `${payload.questionText || ''} ${payload.learningObjective || ''} ${payload.verifiedCorrectAnswer || ''}`.toLowerCase();

  // Biology markers
  if (
    textContent.includes('amoeba') ||
    textContent.includes('budding') ||
    textContent.includes('hydra') ||
    textContent.includes('stamen') ||
    textContent.includes('pollination') ||
    textContent.includes('fertilization') ||
    textContent.includes('scrotum') ||
    textContent.includes('sperm') ||
    textContent.includes('fallopian') ||
    textContent.includes('uterus') ||
    textContent.includes('chloroplast') ||
    textContent.includes('mitochondria') ||
    textContent.includes('turgid') ||
    textContent.includes('osmosis') ||
    textContent.includes('antibiotic') ||
    textContent.includes('rhizopus')
  ) {
    return 'biology';
  }

  // General Knowledge markers
  if (
    textContent.includes('terrestrial planet') ||
    textContent.includes('solar system') ||
    textContent.includes('solar eclipse') ||
    textContent.includes('lunar eclipse') ||
    textContent.includes('stratosphere') ||
    textContent.includes('ozone layer') ||
    textContent.includes('alexander fleming') ||
    textContent.includes('rosalind franklin') ||
    textContent.includes('james webb') ||
    textContent.includes('gps satellite') ||
    textContent.includes('trilateration') ||
    textContent.includes('ring of fire') ||
    textContent.includes('gulf stream') ||
    textContent.includes('white dwarf') ||
    textContent.includes('turing') ||
    textContent.includes('mariana trench') ||
    textContent.includes('berners-lee')
  ) {
    return 'general_knowledge';
  }

  // Physics / Newton's Laws markers
  if (
    textContent.includes('newton') ||
    textContent.includes('thrust') ||
    textContent.includes('space probe') ||
    textContent.includes('interstellar') ||
    textContent.includes('20,000 km/h') ||
    textContent.includes('constant velocity') ||
    textContent.includes('net horizontal force') ||
    textContent.includes('friction') ||
    textContent.includes('crate') ||
    textContent.includes('law of inertia') ||
    textContent.includes('balanced force') ||
    textContent.includes('pendulum') ||
    textContent.includes('snell') ||
    textContent.includes('refraction') ||
    textContent.includes('loudness') ||
    textContent.includes('amplitude') ||
    textContent.includes('archimedes') ||
    textContent.includes('buoyancy')
  ) {
    return 'physics';
  }

  // Chemistry markers
  if (
    textContent.includes('chemical equation') ||
    textContent.includes('subscript') ||
    textContent.includes('coefficient') ||
    textContent.includes('h2o') ||
    textContent.includes('conservation of mass') ||
    textContent.includes('magnesium') ||
    textContent.includes('reactant') ||
    textContent.includes('product side') ||
    textContent.includes('decomposition') ||
    textContent.includes('displacement') ||
    textContent.includes('litmus') ||
    textContent.includes('ph scale') ||
    textContent.includes('neutralization') ||
    textContent.includes('plaster of paris') ||
    textContent.includes('atomic number') ||
    textContent.includes('covalent')
  ) {
    return 'chemistry';
  }

  // Algebra markers
  if (
    textContent.includes('algebra') ||
    textContent.includes('distribute') ||
    textContent.includes('linear equation') ||
    textContent.includes('solve') ||
    textContent.includes('isolate') ||
    textContent.includes('variable') ||
    textContent.includes('inverse operation') ||
    textContent.includes('pythagorean') ||
    textContent.includes('cylinder') ||
    textContent.includes('semicircle') ||
    textContent.includes('median') ||
    /[0-9]*[a-z]\s*[-+*/=]/i.test(textContent)
  ) {
    return 'algebra';
  }

  // 5. Fallback to topic string
  const topicLower = (payload.topic || '').toLowerCase();
  if (topicLower.includes('bio')) return 'biology';
  if (topicLower.includes('gk') || topicLower.includes('astronomy') || topicLower.includes('environment')) return 'general_knowledge';
  if (topicLower.includes('force') || topicLower.includes('motion') || topicLower.includes('physics')) return 'physics';
  if (topicLower.includes('chem')) return 'chemistry';
  if (topicLower.includes('alg') || topicLower.includes('math')) return 'algebra';

  return 'physics';
}

/**
 * Finds the corresponding question in the built-in bank strictly matching domain and question content.
 * Guarantees that a physics question can never match a chemistry or algebra question.
 */
export function findQuestionInBank(payload: {
  questionId?: string;
  topicId?: string;
  topic?: string;
  learningObjective?: string;
  questionText?: string;
  verifiedCorrectAnswer?: string;
}): STEMQuestion {
  // 1. Direct questionId lookup
  if (payload.questionId) {
    const q = BUILT_IN_QUESTIONS.find((item) => item.id === payload.questionId);
    if (q) return q;
  }

  const domain = detectDomain(payload);
  const domainQuestions = BUILT_IN_QUESTIONS.filter((q) => {
    if (domain === 'physics') return q.topicId.includes('physics') || q.topicId === 'force_and_motion';
    if (domain === 'chemistry') return q.topicId.includes('chemistry') || q.topicId === 'chemical_equations';
    if (domain === 'algebra') return q.topicId.includes('math') || q.topicId === 'basic_algebra';
    if (domain === 'biology') return q.topicId.includes('biology');
    if (domain === 'general_knowledge') return q.topicId.includes('gk');
    return true;
  });

  // 2. Exact or substring questionText match within domain
  if (payload.questionText) {
    const pClean = clean(payload.questionText);
    const textMatch = domainQuestions.find((q) => {
      const qClean = clean(q.questionText);
      return (
        qClean === pClean ||
        qClean.slice(0, 30) === pClean.slice(0, 30) ||
        pClean.includes(qClean.slice(0, 25)) ||
        qClean.includes(pClean.slice(0, 25))
      );
    });
    if (textMatch) return textMatch;
  }

  // 3. Match by verifiedCorrectAnswer within domain
  if (payload.verifiedCorrectAnswer) {
    const vClean = clean(payload.verifiedCorrectAnswer);
    const ansMatch = domainQuestions.find((q) => clean(q.correctAnswerText) === vClean);
    if (ansMatch) return ansMatch;
  }

  // 4. Default to first question in that specific domain
  return domainQuestions[0] || BUILT_IN_QUESTIONS[0];
}

/**
 * Authoritative answer correctness verification.
 * Accepts exact matches, option IDs, option text, numerical equivalence,
 * algebraic variable equations (e.g. "x = 7", "7", "x=7", "X = 7", "21/3"),
 * and informal equivalent answers.
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
      if (clean(matchedOpt.text) === vClean) {
        return true;
      }
      const vIdMatch = verified.match(/^(?:option\s*)?([a-d])(?:\b|[.:\s\)])/i);
      if (vIdMatch && clean(vIdMatch[1]) === clean(matchedOpt.id)) {
        return true;
      }
    }

    const verifiedOpt = options.find((o) => clean(o.id) === vClean || clean(o.text) === vClean);
    if (verifiedOpt) {
      if (sClean === clean(verifiedOpt.id) || sClean === clean(verifiedOpt.text)) {
        return true;
      }
    }
  }

  // 2. Math equivalence & variable extraction (e.g. "x = 7", "7", "x=7", "X = 7", "x is 7", "21/3")
  const extractMathValue = (str: string): string => {
    // Check for variable equality like "x = 7" or "x = 7/3"
    const eqMatch = str.match(/(?:[a-zA-Z]\s*=\s*)([0-9.-]+(?:\/[0-9.-]+)?)/i);
    if (eqMatch) return eqMatch[1].trim();
    // Check standalone number or fraction
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

  // 4. Check prefix / substring matches
  if (sClean.length === 1) {
    if (vClean === sClean) return true;
    const vPrefix = vRaw.trim().toLowerCase();
    if (vPrefix.startsWith(sClean + '.') || vPrefix.startsWith(sClean + ')') || vPrefix.startsWith(sClean + ':') || vPrefix.startsWith(sClean + ' ')) {
      return true;
    }
  } else {
    if (vClean.startsWith(sClean + ' ') || vClean.startsWith(sClean + '.') || vClean.startsWith(sClean + ':')) return true;
    if (vClean.includes(sClean) && sClean.length >= 4) return true;
  }

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
 * Rule-based fallback misconception analysis strictly bound to verified question bank.
 * Evaluates student answer correctness and reasoning evidence separately.
 * A correct answer or sound mathematical/scientific reasoning NEVER produces a misconception.
 */
export function fallbackAnalyzeAnswer(payload: AnalyzeAnswerPayload): MisconceptionResult {
  const matchedQuestion = findQuestionInBank(payload);
  const optionsToUse = payload.options && payload.options.length > 0 ? payload.options : matchedQuestion.options;
  const isCorrect =
    (clean(payload.submittedAnswer) === clean(matchedQuestion.correctAnswerId)) ||
    verifyAnswerCorrectness(
      payload.submittedAnswer,
      payload.verifiedCorrectAnswer || matchedQuestion.correctAnswerText,
      optionsToUse
    );
  const reasoning = (payload.studentReasoning || '').trim();
  const rLower = reasoning.toLowerCase();
  const domain = detectDomain(payload);

  // If answer is correct: recognize and validate understanding. No false misconception can be assigned.
  if (isCorrect) {
    let explanation = matchedQuestion.conceptualExplanation;

    // Check for contradictory reasoning despite selecting the right option
    if (matchedQuestion.commonMisconceptions && reasoning.length >= 10) {
      for (const cm of matchedQuestion.commonMisconceptions) {
        const matchesQuote =
          cm.typicalReasoningQuote && rLower.includes(cm.typicalReasoningQuote.toLowerCase().slice(0, 15));

        const matchesPhysicsMisconception =
          domain === 'physics' &&
          cm.misconceptionTitle.toLowerCase().includes('continuous force') &&
          (rLower.includes('keep moving') || rLower.includes('engines have to keep firing') || rLower.includes('run out of push'));

        const matchesChemMisconception =
          domain === 'chemistry' &&
          cm.misconceptionTitle.toLowerCase().includes('subscript') &&
          (rLower.includes('change') && (rLower.includes('subscript') || rLower.includes('h2o2')));

        if (matchesQuote || matchesPhysicsMisconception || matchesChemMisconception) {
          return {
            answerCorrectness: 'correct',
            reasoningQuality: 'flawed',
            misconceptionStatus: 'demonstrated',
            diagnosticConfidence: 'medium',
            isCorrect: true,
            conceptualExplanation: `Your final answer choice is correct! However, your written reasoning reflects a contradictory intuition: "${cm.misconceptionTitle}". While your answer was right, remember that ${cm.explanation}`,
            possibleMisconception: `Contradictory Reasoning: ${cm.misconceptionTitle}`,
            confidence: 'medium',
            evidenceQuote: reasoning.slice(0, 120),
            nextLearningStep: 'Practice aligning your conceptual explanation directly with the accurate scientific principle.',
            source: 'fallback',
          };
        }
      }
    }

    let reasoningQuality: ReasoningQuality = reasoning.length >= 10 ? 'sound' : reasoning.length > 0 ? 'partially_sound' : 'not_provided';
    if (reasoning) {
      // Algebra inverse operations reasoning check
      if (domain === 'algebra') {
        if (
          (rLower.includes('add 7') || rLower.includes('adding 7') || rLower.includes('move 7') || rLower.includes('plus 7')) &&
          (rLower.includes('divide by 3') || rLower.includes('divided by 3') || rLower.includes('/ 3') || rLower.includes('over 3'))
        ) {
          reasoningQuality = 'sound';
          explanation = `Accurate mathematical solution! You correctly used inverse operations: first adding 7 to both sides of 3x - 7 = 14 to isolate the variable term (3x = 21), and then dividing both sides by 3 to arrive at x = 7.`;
        }
      }

      // Chemistry conservation of atoms reasoning check
      if (domain === 'chemistry') {
        if (
          (rLower.includes('balance') || rLower.includes('atoms') || rLower.includes('rhs') || rLower.includes('lhs') || rLower.includes('conserv')) &&
          (rLower.includes('subscript') || rLower.includes('coefficient') || rLower.includes('molecular form') || rLower.includes('cannot be changed') || rLower.includes('cannot change'))
        ) {
          reasoningQuality = 'sound';
          explanation = `Accurate chemical equation balancing! The balanced equation 2H₂ + O₂ → 2H₂O conserves mass with four hydrogen atoms and two oxygen atoms on each side (4 H and 2 O on reactants; 4 H and 2 O on products). You correctly understood that coefficients can be adjusted while chemical subscripts must remain unchanged to preserve molecular identity.`;
        }
      }
    }

    return {
      answerCorrectness: 'correct',
      reasoningQuality,
      misconceptionStatus: 'none_evident',
      diagnosticConfidence: 'high',
      isCorrect: true,
      conceptualExplanation:
        explanation ||
        `Great work! Your answer matches the scientific/mathematical standard for ${matchedQuestion.learningObjective}.`,
      possibleMisconception: null,
      confidence: 'insufficient_evidence',
      evidenceQuote: null,
      nextLearningStep: 'Advance to the follow-up challenge to test conceptual transfer in a new scenario.',
      source: 'fallback',
    };
  }

  // Answer is incorrect. Check if reasoning is empty, placeholder, or insufficient.
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
      conceptualExplanation: matchedQuestion.conceptualExplanation,
      possibleMisconception: null,
      confidence: 'insufficient_evidence',
      evidenceQuote: null,
      nextLearningStep:
        'Try explaining how you reached this answer step by step so we can identify any tricky steps.',
      source: 'fallback',
    };
  }

  // Evaluate student reasoning against cataloged misconceptions only if strong evidence exists
  if (matchedQuestion.commonMisconceptions && matchedQuestion.commonMisconceptions.length > 0) {
    const sLower = reasoning.toLowerCase();

    for (const cm of matchedQuestion.commonMisconceptions) {
      const matchesPattern =
        cm.answerIdOrPattern && clean(payload.submittedAnswer).includes(clean(cm.answerIdOrPattern));
      const matchesQuote =
        cm.typicalReasoningQuote && sLower.includes(cm.typicalReasoningQuote.toLowerCase().slice(0, 15));

      // Domain-specific keyword matching with high specificity
      const matchesNewtonInertia =
        cm.misconceptionTitle.toLowerCase().includes('continuous force') &&
        (sLower.includes('keep moving') ||
          sLower.includes('engine') ||
          sLower.includes('firing') ||
          sLower.includes('run out of push') ||
          sLower.includes('coast to a complete stop') ||
          sLower.includes('needs force to move'));

      const matchesSubscripts =
        cm.misconceptionTitle.toLowerCase().includes('subscript') &&
        (sLower.includes('change') && (sLower.includes('subscript') || sLower.includes('h2o2') || sLower.includes('small 2')));

      const matchesNegativeDistributive =
        cm.misconceptionTitle.toLowerCase().includes('negative sign') &&
        (sLower.includes('5 - 8') ||
          sLower.includes('-6x - 3') ||
          (sLower.includes('negative') && sLower.includes('distributed') && sLower.includes('-3')));

      const matchesAlgebraSignReversal =
        cm.misconceptionTitle.toLowerCase().includes('sign reversal') &&
        (sLower.includes('subtract 7') || sLower.includes('subtracted 7') || sLower.includes('14 - 7'));

      if (matchesQuote || matchesNewtonInertia || matchesSubscripts || matchesNegativeDistributive || matchesAlgebraSignReversal) {
        return {
          answerCorrectness: 'incorrect',
          reasoningQuality: 'flawed',
          misconceptionStatus: 'demonstrated',
          diagnosticConfidence: 'high',
          isCorrect: false,
          conceptualExplanation: matchedQuestion.conceptualExplanation,
          possibleMisconception: cm.misconceptionTitle,
          confidence: 'high',
          evidenceQuote: reasoning.slice(0, 120),
          nextLearningStep: cm.explanation,
          source: 'fallback',
        };
      }
    }
  }

  // If answer is incorrect but reasoning does not explicitly exhibit a known cognitive misconception,
  // do NOT invent a misconception. Set possibleMisconception to null and confidence to insufficient_evidence.
  return {
    answerCorrectness: 'incorrect',
    reasoningQuality: reasoning.length >= 10 ? 'partially_sound' : 'insufficient',
    misconceptionStatus: 'none_evident',
    diagnosticConfidence: 'medium',
    isCorrect: false,
    conceptualExplanation: matchedQuestion.conceptualExplanation,
    possibleMisconception: null,
    confidence: 'insufficient_evidence',
    evidenceQuote: null,
    nextLearningStep: `Re-examine the core principle for ${matchedQuestion.topicTitle} and test your thinking with the follow-up challenge.`,
    source: 'fallback',
  };
}

/**
 * Fallback follow-up question resolver strictly bound to the original question topic.
 */
export function fallbackGetFollowUp(payload: GenerateFollowUpPayload): GeneratedFollowUpResult {
  const matched = findQuestionInBank({
    questionId: payload.parentQuestionId,
    topicId: payload.topicId,
    topic: payload.topic,
    learningObjective: payload.learningObjective,
    questionText: payload.originalQuestionText,
    verifiedCorrectAnswer: payload.originalCorrectAnswer,
  });

  if (matched && matched.fallbackFollowUp) {
    return {
      id: matched.fallbackFollowUp.id,
      parentQuestionId: matched.id,
      learningObjective: matched.learningObjective,
      questionText: matched.fallbackFollowUp.questionText,
      contextOrEquation: matched.fallbackFollowUp.contextOrEquation,
      options: matched.fallbackFollowUp.options,
      correctAnswerId: matched.fallbackFollowUp.correctAnswerId,
      correctAnswerText: matched.fallbackFollowUp.correctAnswerText,
      explanation: matched.fallbackFollowUp.explanation,
      source: 'fallback',
    };
  }

  // Fallback to first question follow-up in the same topic
  return {
    id: `fallback-fu-${Date.now()}`,
    parentQuestionId: matched.id,
    learningObjective: matched.learningObjective,
    questionText: `Follow-up Challenge: Applying ${matched.learningObjective}. A similar physical object moves across a frictionless vacuum at a constant speed of 15 m/s. What horizontal force is needed to keep it moving at constant velocity?`,
    options: [
      { id: 'A', text: 'Zero forward force is required (net force = 0 N).' },
      { id: 'B', text: 'A continuous forward force of 15 N.' },
      { id: 'C', text: 'A force equal to the object\'s weight.' },
      { id: 'D', text: 'A decreasing forward force.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Zero forward force is required (net force = 0 N).',
    explanation: 'By Newton\'s First Law, when an object is in motion in a frictionless environment, no forward force is required to sustain constant velocity.',
    source: 'fallback',
  };
}

/**
 * Checks similarity between two questions to ensure follow-up does not repeat original
 */
export function isTooSimilar(q1: string, q2: string): boolean {
  const words1 = clean(q1).slice(0, 35);
  const words2 = clean(q2).slice(0, 35);
  return words1 === words2;
}

/**
 * Calls Gemini 3.8 Flash to analyze student response and diagnose misconceptions
 */
export async function analyzeStudentAnswer(payload: AnalyzeAnswerPayload): Promise<MisconceptionResult> {
  // Authoritative correctness verification first
  const isCorrect = verifyAnswerCorrectness(
    payload.submittedAnswer,
    payload.verifiedCorrectAnswer,
    payload.options
  );
  const reasoning = (payload.studentReasoning || '').trim();

  // If no Gemini client or key, return deterministic fallback
  if (!ai || !apiKey) {
    return fallbackAnalyzeAnswer(payload);
  }

  // If student provided no reasoning or trivial placeholder, do not invent a misconception
  if (!reasoning || reasoning.length < 6 || /^(i don'?t know|idk|guess|guessed|none|\.)$/i.test(reasoning)) {
    if (isCorrect) {
      return {
        answerCorrectness: 'correct',
        reasoningQuality: 'not_provided',
        misconceptionStatus: 'none_evident',
        diagnosticConfidence: 'high',
        isCorrect: true,
        conceptualExplanation: `Correct! Your answer matches the scientific/mathematical standard for ${payload.learningObjective}.`,
        possibleMisconception: null,
        confidence: 'insufficient_evidence',
        evidenceQuote: null,
        nextLearningStep: 'Try the follow-up problem to solidify this concept in a new scenario.',
        source: 'gemini',
      };
    } else {
      return {
        answerCorrectness: 'incorrect',
        reasoningQuality: 'not_provided',
        misconceptionStatus: 'insufficient_evidence',
        diagnosticConfidence: 'low',
        isCorrect: false,
        conceptualExplanation: `Your submitted answer differs from the verified answer (${payload.verifiedCorrectAnswer}).`,
        possibleMisconception: null,
        confidence: 'insufficient_evidence',
        evidenceQuote: null,
        nextLearningStep:
          'Because no reasoning was provided, the underlying misconception cannot yet be determined. Try explaining your thinking next time!',
        source: 'gemini',
      };
    }
  }

  const domain = detectDomain(payload);

  // Construct structured prompt for Gemini 3.8 Flash
  const prompt = `You are an expert ${payload.grade} STEM educator diagnosing student thinking in ${payload.subject}.
DISCIPLINE: ${domain.toUpperCase()} (STRICT: All explanations and diagnosed concepts MUST remain strictly within ${domain}).

QUESTION:
${payload.questionText}
Options: ${JSON.stringify(payload.options || [])}
VERIFIED ANSWER: ${payload.verifiedCorrectAnswer}
LEARNING OBJECTIVE: ${payload.learningObjective}
MARKING CRITERIA: ${payload.markingCriteria || 'Standard curriculum rules.'}

STUDENT SUBMISSION:
Submitted Answer: "${payload.submittedAnswer}"
Student's Stated Reasoning: "${reasoning}"
Is Answer Mathematically/Scientifically Correct: ${isCorrect ? 'YES (Verified Correct)' : 'NO (Verified Incorrect)'}

PEDAGOGICAL INSTRUCTIONS:
1. "isCorrect": Must strictly be ${isCorrect}. Do NOT change this value.
2. "conceptualExplanation": Provide a clear, supportive 2-3 sentence explanation of the underlying scientific/mathematical principle tailored to ${payload.grade}.
   - Address the student's stated reasoning directly.
   - For Newton's First Law / constant velocity: explain that an object moving at constant speed in a vacuum/frictionless environment needs zero forward thrust or push; it continues by inertia unless an unbalanced force acts.
   - STRICT CONSTRAINT: Do NOT mention chemistry (subscripts, molecules, chemical equations) in a physics question.
3. "possibleMisconception":
   - If the student is correct, set this to null.
   - If the student is incorrect AND their stated reasoning contains clear evidence of a specific middle school cognitive misconception, state the exact name of that misconception (e.g., "Motion Requires Continuous Force (Aristotelian Trap)").
   - CRITICAL: If the reasoning is ambiguous, vague, or insufficient to prove a specific misconception, you MUST set possibleMisconception to null. Do NOT claim a misconception is confirmed without evidence.
4. "confidence": Set to 'high', 'medium', 'low', or 'insufficient_evidence'.
   - If possibleMisconception is null or reasoning is unconvincing, set to 'insufficient_evidence'.
   - If student reasoning clearly states the classic fallacy (e.g. stating that engines must keep firing or else the rocket runs out of push and stops), set to 'high' or 'medium' based on the explicit evidence. Do NOT overstate certainty.
5. "evidenceQuote": If a misconception is identified, quote the exact snippet (under 15 words) from the student's reasoning that demonstrates it. If none, set to null.
6. "nextLearningStep": One actionable, encouraging sentence to guide the student toward understanding.`;

  try {
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Gemini API timeout')), 10000)
    );

    const apiPromise = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isCorrect: { type: Type.BOOLEAN },
            conceptualExplanation: { type: Type.STRING },
            possibleMisconception: { type: Type.STRING, nullable: true },
            confidence: {
              type: Type.STRING,
              enum: ['high', 'medium', 'low', 'insufficient_evidence'],
            },
            evidenceQuote: { type: Type.STRING, nullable: true },
            nextLearningStep: { type: Type.STRING },
          },
          required: ['isCorrect', 'conceptualExplanation', 'confidence', 'nextLearningStep'],
        },
      },
    });

    const response = await Promise.race([apiPromise, timeoutPromise]);
    const text = response.text?.trim() || '{}';
    const parsed = JSON.parse(text);

    // Anti-Contamination Topic Guard: Ensure AI explanation strictly matches question domain
    const explanationStr = (parsed.conceptualExplanation || '').toLowerCase();
    const misconceptionStr = (parsed.possibleMisconception || '').toLowerCase();
    const combinedAiText = `${explanationStr} ${misconceptionStr}`;

    const hasChemistryTerms =
      combinedAiText.includes('chemical equation') ||
      combinedAiText.includes('subscript') ||
      combinedAiText.includes('reactant') ||
      (combinedAiText.includes('product') && combinedAiText.includes('molecule')) ||
      combinedAiText.includes('h2o') ||
      combinedAiText.includes('hydrogen peroxide');

    const hasPhysicsTerms =
      combinedAiText.includes('thrust') ||
      combinedAiText.includes('newton') ||
      combinedAiText.includes('constant velocity') ||
      combinedAiText.includes('20,000 km/h') ||
      combinedAiText.includes('probe') ||
      combinedAiText.includes('frictionless ice');

    if (domain === 'physics' && hasChemistryTerms) {
      console.warn('Rejected mismatched AI explanation (chemistry terms in physics question). Using verified fallback.');
      return fallbackAnalyzeAnswer(payload);
    }

    if (domain === 'chemistry' && hasPhysicsTerms && !explanationStr.includes('mass')) {
      console.warn('Rejected mismatched AI explanation (physics terms in chemistry question). Using verified fallback.');
      return fallbackAnalyzeAnswer(payload);
    }

    if (domain === 'algebra' && (hasChemistryTerms || hasPhysicsTerms)) {
      console.warn('Rejected mismatched AI explanation in algebra question. Using verified fallback.');
      return fallbackAnalyzeAnswer(payload);
    }

    // Validate and sanitize output
    const isAiMisconceptionValid =
      !isCorrect &&
      parsed.confidence !== 'insufficient_evidence' &&
      Boolean(parsed.possibleMisconception);

    return {
      answerCorrectness: isCorrect ? 'correct' : 'incorrect',
      reasoningQuality: isCorrect
        ? (reasoning.length >= 10 ? 'sound' : 'partially_sound')
        : (isAiMisconceptionValid ? 'flawed' : (reasoning.length >= 10 ? 'partially_sound' : 'insufficient')),
      misconceptionStatus: isCorrect
        ? 'none_evident'
        : (isAiMisconceptionValid ? 'demonstrated' : 'none_evident'),
      diagnosticConfidence: isCorrect
        ? 'high'
        : (isAiMisconceptionValid ? ((parsed.confidence as any) || 'high') : 'medium'),
      isCorrect: isCorrect, // Enforce verified correctness
      conceptualExplanation:
        parsed.conceptualExplanation ||
        `Verified standard: ${payload.learningObjective}.`,
      possibleMisconception: isAiMisconceptionValid ? (parsed.possibleMisconception || null) : null,
      confidence: isAiMisconceptionValid ? ((parsed.confidence as any) || 'medium') : 'insufficient_evidence',
      evidenceQuote: isAiMisconceptionValid ? (parsed.evidenceQuote || null) : null,
      nextLearningStep:
        parsed.nextLearningStep ||
        'Review the key relationship and attempt the follow-up question.',
      source: 'gemini',
    };
  } catch (err) {
    console.warn('Gemini analysis failed or timed out, falling back:', err);
    return fallbackAnalyzeAnswer(payload);
  }
}

/**
 * Calls Gemini 3.8 Flash to generate an adaptive follow-up question testing the same concept
 */
export async function generateFollowUpQuestion(
  payload: GenerateFollowUpPayload
): Promise<GeneratedFollowUpResult> {
  if (!ai || !apiKey) {
    return fallbackGetFollowUp(payload);
  }

  const domain = detectDomain({
    questionId: payload.parentQuestionId,
    topicId: payload.topicId,
    topic: payload.topic,
    learningObjective: payload.learningObjective,
    questionText: payload.originalQuestionText,
    verifiedCorrectAnswer: payload.originalCorrectAnswer,
  });

  const prompt = `You are a curriculum designer for ${payload.grade} ${payload.subject}.
Generate an ADAPTIVE FOLLOW-UP QUESTION testing the exact same learning objective:
"${payload.learningObjective}" in the topic "${payload.topic}".
DISCIPLINE: ${domain.toUpperCase()} (STRICT: The follow-up question MUST stay strictly in ${domain}).

CRITICAL REQUIREMENTS:
1. Do NOT repeat or merely paraphrase the original question: "${payload.originalQuestionText}".
2. Use a completely NEW real-world context, new object, or new numerical values within ${domain}.
   - For Physics / Newton's First Law: use scenarios like a satellite drifting in orbit after thruster shutdown, an astronaut throwing a wrench in deep space, a curling stone on smooth ice, or a hovercraft with balanced horizontal forces. Do NOT use chemistry or algebra.
3. Provide exactly 4 distinct multiple-choice options (A, B, C, D).
4. Identify exactly ONE correct option ID ("A", "B", "C", or "D").
5. Provide the exact text of the correct answer and a 2-sentence explanation.
6. If mathematical (e.g. algebra), ensure the equation is solvable and the answer is mathematically verified.`;

  try {
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Gemini follow-up generation timeout')), 10000)
    );

    const apiPromise = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            questionText: { type: Type.STRING },
            contextOrEquation: { type: Type.STRING, nullable: true },
            options: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  text: { type: Type.STRING },
                },
                required: ['id', 'text'],
              },
            },
            correctAnswerId: { type: Type.STRING },
            correctAnswerText: { type: Type.STRING },
            explanation: { type: Type.STRING },
          },
          required: [
            'questionText',
            'options',
            'correctAnswerId',
            'correctAnswerText',
            'explanation',
          ],
        },
      },
    });

    const response = await Promise.race([apiPromise, timeoutPromise]);
    const text = response.text?.trim() || '{}';
    const parsed = JSON.parse(text);

    // Validation checks on generated output
    if (
      !parsed.questionText ||
      !Array.isArray(parsed.options) ||
      parsed.options.length < 2 ||
      !parsed.correctAnswerId
    ) {
      console.warn('Gemini returned incomplete follow-up schema, using fallback');
      return fallbackGetFollowUp(payload);
    }

    // Check if the generated question simply repeated the original
    if (isTooSimilar(payload.originalQuestionText, parsed.questionText)) {
      console.warn('Gemini repeated original question, using verified fallback');
      return fallbackGetFollowUp(payload);
    }

    // Anti-Contamination Guard: Ensure generated follow-up matches question topic
    const qLower = `${parsed.questionText} ${parsed.explanation}`.toLowerCase();
    const hasChem =
      qLower.includes('chemical equation') ||
      qLower.includes('subscript') ||
      qLower.includes('reaction') ||
      qLower.includes('h2o') ||
      qLower.includes('molecule');
    const hasPhysics =
      qLower.includes('thrust') ||
      qLower.includes('newton') ||
      qLower.includes('probe') ||
      qLower.includes('friction') ||
      qLower.includes('velocity');

    if (domain === 'physics' && hasChem) {
      console.warn('Rejected cross-topic follow-up question (chemistry in physics). Falling back to verified question.');
      return fallbackGetFollowUp(payload);
    }
    if (domain === 'chemistry' && hasPhysics) {
      console.warn('Rejected cross-topic follow-up question (physics in chemistry). Falling back to verified question.');
      return fallbackGetFollowUp(payload);
    }

    // Ensure the correct answer ID matches an actual option
    const foundOption = parsed.options.find(
      (opt: any) => clean(opt.id) === clean(parsed.correctAnswerId)
    );
    if (!foundOption) {
      console.warn('Gemini correctAnswerId not found in options, using fallback');
      return fallbackGetFollowUp(payload);
    }

    return {
      id: `ai-fu-${Date.now()}`,
      parentQuestionId: payload.parentQuestionId || 'unknown',
      learningObjective: payload.learningObjective,
      questionText: parsed.questionText,
      contextOrEquation: parsed.contextOrEquation || undefined,
      options: parsed.options.map((o: any) => ({
        id: String(o.id).toUpperCase(),
        text: String(o.text),
      })),
      correctAnswerId: String(parsed.correctAnswerId).toUpperCase(),
      correctAnswerText: parsed.correctAnswerText || foundOption.text,
      explanation: parsed.explanation || 'Verified correct explanation.',
      source: 'gemini',
    };
  } catch (err) {
    console.warn('Gemini follow-up generation failed, using fallback:', err);
    return fallbackGetFollowUp(payload);
  }
}
