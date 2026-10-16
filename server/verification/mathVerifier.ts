import { DeterministicCheckResult } from './types.ts';
import { cleanAlphanumeric, normalizeUnicodeAndSymbols } from './inputValidator.ts';

/**
 * Parses simple numerical fraction or decimal without using eval()
 */
export function parseNumberOrFraction(str: string): number | null {
  if (!str) return null;
  const cleaned = str.trim().replace(/,/g, '');

  // Match simple fraction "a/b"
  const fracMatch = cleaned.match(/^([+-]?\d+(?:\.\d+)?)\s*\/\s*([+-]?\d+(?:\.\d+)?)$/);
  if (fracMatch) {
    const num = parseFloat(fracMatch[1]);
    const den = parseFloat(fracMatch[2]);
    if (den !== 0 && !isNaN(num) && !isNaN(den)) {
      return num / den;
    }
    return null;
  }

  // Match decimal or integer
  const numMatch = cleaned.match(/^[+-]?\d+(?:\.\d+)?$/);
  if (numMatch) {
    const val = parseFloat(numMatch[0]);
    return isNaN(val) ? null : val;
  }

  return null;
}

/**
 * Extracts variable value from expressions like "x = 7", "p = 5", "y = -2", "7", "x is 7"
 */
export function extractVariableSolution(text: string): { variable?: string; value: number | null; raw: string } {
  const norm = normalizeUnicodeAndSymbols(text).trim();

  // Pattern: "x = 7" or "x = 21/3" or "x = -2"
  const eqMatch = norm.match(/([a-zA-Z])\s*=\s*([+-]?[0-9./]+)/);
  if (eqMatch) {
    const val = parseNumberOrFraction(eqMatch[2]);
    return { variable: eqMatch[1].toLowerCase(), value: val, raw: eqMatch[2] };
  }

  // Pattern: "x is 7"
  const isMatch = norm.match(/([a-zA-Z])\s+is\s+([+-]?[0-9./]+)/i);
  if (isMatch) {
    const val = parseNumberOrFraction(isMatch[2]);
    return { variable: isMatch[1].toLowerCase(), value: val, raw: isMatch[2] };
  }

  // Standalone number or fraction
  const directVal = parseNumberOrFraction(norm);
  if (directVal !== null) {
    return { value: directVal, raw: norm };
  }

  return { value: null, raw: norm };
}

/**
 * Deterministic Mathematics Verifier
 */
export function verifyMathResponse(payload: {
  questionId?: string;
  questionText: string;
  verifiedCorrectAnswer: string;
  submittedAnswer: string;
  studentReasoning: string;
  options?: { id: string; text: string }[];
}): DeterministicCheckResult {
  const submittedNorm = normalizeUnicodeAndSymbols(payload.submittedAnswer).trim();
  const verifiedNorm = normalizeUnicodeAndSymbols(payload.verifiedCorrectAnswer).trim();
  const reasoning = normalizeUnicodeAndSymbols(payload.studentReasoning || '').trim();
  const rLower = reasoning.toLowerCase();

  // 1. Check exact match or option match
  const sClean = cleanAlphanumeric(submittedNorm);
  const vClean = cleanAlphanumeric(verifiedNorm);

  if (sClean === vClean) {
    return {
      matched: true,
      correctness: 'correct',
      reasoningQuality: reasoning.length > 5 ? 'sound' : 'not_provided',
      misconceptionStatus: 'none_evident',
      detectedMisconceptionTitle: null,
      confidence: 'high',
      evidenceQuote: reasoning.slice(0, 100) || null,
      explanation: `Mathematically accurate response. Your result exactly matches the verified solution (${verifiedNorm}).`,
    };
  }

  // Check options
  if (payload.options && payload.options.length > 0) {
    const matchedOpt = payload.options.find(
      (o) => cleanAlphanumeric(o.id) === sClean || cleanAlphanumeric(o.text) === sClean
    );
    const verifiedOpt = payload.options.find(
      (o) => cleanAlphanumeric(o.id) === vClean || cleanAlphanumeric(o.text) === vClean
    );

    if (matchedOpt && verifiedOpt && matchedOpt.id === verifiedOpt.id) {
      return {
        matched: true,
        correctness: 'correct',
        reasoningQuality: reasoning.length > 5 ? 'sound' : 'not_provided',
        misconceptionStatus: 'none_evident',
        detectedMisconceptionTitle: null,
        confidence: 'high',
        evidenceQuote: reasoning.slice(0, 100) || null,
        explanation: `Correct option selected (${matchedOpt.id}: ${matchedOpt.text}).`,
      };
    }
  }

  // 2. Numerical & Algebraic equivalence
  const submittedVar = extractVariableSolution(submittedNorm);
  const verifiedVar = extractVariableSolution(verifiedNorm);

  if (submittedVar.value !== null && verifiedVar.value !== null) {
    const diff = Math.abs(submittedVar.value - verifiedVar.value);
    const isEquivalent = diff < 0.0001;

    if (isEquivalent) {
      const isSoundMethod =
        rLower.includes('add') ||
        rLower.includes('subtract') ||
        rLower.includes('divide') ||
        rLower.includes('multiply') ||
        rLower.includes('inverse') ||
        rLower.includes('isolate');

      return {
        matched: true,
        correctness: 'correct',
        reasoningQuality: isSoundMethod ? 'sound' : reasoning.length > 5 ? 'partially_sound' : 'not_provided',
        misconceptionStatus: 'none_evident',
        detectedMisconceptionTitle: null,
        confidence: 'high',
        evidenceQuote: reasoning.slice(0, 100) || null,
        explanation: `Valid mathematical solution! You correctly calculated ${verifiedNorm}.`,
      };
    }
  }

  // 3. Known Algebra Misconceptions & Reasoning checks
  // A. Linear Equation 3x - 7 = 14 regression check
  if (
    payload.questionText.includes('3x - 7 = 14') ||
    payload.questionId === 'g8-math-alg-01'
  ) {
    // If student arrived at x = 7 using inverse operations:
    if (
      (submittedVar.value === 7 || sClean === '7' || sClean === 'x7') &&
      (rLower.includes('add 7') || rLower.includes('plus 7') || rLower.includes('adding 7')) &&
      (rLower.includes('divide by 3') || rLower.includes('divided by 3') || rLower.includes('/ 3'))
    ) {
      return {
        matched: true,
        correctness: 'correct',
        reasoningQuality: 'sound',
        misconceptionStatus: 'none_evident',
        detectedMisconceptionTitle: null,
        confidence: 'high',
        evidenceQuote: reasoning.slice(0, 120),
        explanation: 'Accurate mathematical solution! You correctly applied inverse operations by first adding 7 to both sides (3x = 21) and then dividing both sides by 3 to obtain x = 7.',
      };
    }

    // Check genuine sign reversal error (subtracting 7 instead of adding 7): 14 - 7 = 7 => 3x = 7 => x = 7/3
    if (
      (rLower.includes('subtract 7') || rLower.includes('subtracted 7') || rLower.includes('14 - 7')) &&
      !rLower.includes('add 7')
    ) {
      return {
        matched: true,
        correctness: 'incorrect',
        reasoningQuality: 'flawed',
        misconceptionStatus: 'demonstrated',
        detectedMisconceptionTitle: 'Sign Reversal Error in Inverse Operations',
        confidence: 'high',
        evidenceQuote: reasoning.slice(0, 120),
        explanation: 'In the equation 3x - 7 = 14, the term -7 is being subtracted. The inverse operation of subtraction is addition, so you must ADD 7 to both sides (giving 3x = 21), rather than subtracting 7.',
        suggestedNextStep: 'To cancel a subtracted constant, always perform the inverse operation: add that constant to both sides.',
      };
    }
  }

  // B. Distributive Negative Sign Check: e.g. -2(3x - 4)
  if (
    payload.questionText.includes('-2(3x - 4)') ||
    payload.questionText.includes('5 - 2(3x - 4)') ||
    payload.questionId === 'math-01' ||
    payload.questionId === 'g9-math-alg-02'
  ) {
    if (
      (rLower.includes('5 - 8') || rLower.includes('-6x - 3') || rLower.includes('2 * 4 = 8')) &&
      (rLower.includes('-8') || rLower.includes('minus 8'))
    ) {
      return {
        matched: true,
        correctness: 'incorrect',
        reasoningQuality: 'flawed',
        misconceptionStatus: 'demonstrated',
        detectedMisconceptionTitle: 'Negative Sign Dropping on Second Distributed Term',
        confidence: 'high',
        evidenceQuote: reasoning.slice(0, 120),
        explanation: 'When distributing a negative factor across parentheses: -2 × 3x = -6x, and -2 × (-4) = +8 (a negative multiplied by a negative yields a positive). Dropping the negative sign on the second term yields an incorrect constant.',
        suggestedNextStep: 'Remember the sign rule when distributing: (-a) × (-b) = +ab.',
      };
    }
  }

  // C. Pythagorean Theorem Check: e.g. 13^2 - 5^2 = 144 => 12
  if (
    payload.questionText.includes('Pythagorean') ||
    payload.questionText.includes('13-meter rescue ladder') ||
    payload.questionId === 'math-08'
  ) {
    if (sClean === '8' || sClean === '8meters' || rLower.includes('13 - 5 = 8')) {
      return {
        matched: true,
        correctness: 'incorrect',
        reasoningQuality: 'flawed',
        misconceptionStatus: 'demonstrated',
        detectedMisconceptionTitle: 'Linear Subtraction Instead of Pythagorean Squared Formula',
        confidence: 'high',
        evidenceQuote: reasoning.slice(0, 120),
        explanation: 'In right-angled triangles, lengths cannot be subtracted linearly (13 - 5 = 8). You must use the Pythagorean theorem: a² + b² = c² => 5² + b² = 13² => 25 + b² = 169 => b² = 144 => b = 12 meters.',
        suggestedNextStep: 'Always square the hypotenuse and the given leg before subtracting: b = √(c² - a²).',
      };
    }
  }

  return {
    matched: false,
    correctness: 'undetermined',
    reasoningQuality: 'insufficient',
    misconceptionStatus: 'insufficient_evidence',
    detectedMisconceptionTitle: null,
    confidence: 'low',
    evidenceQuote: null,
    explanation: '',
  };
}
