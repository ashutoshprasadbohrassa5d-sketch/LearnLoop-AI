import { InputValidationResult } from './types.ts';

/**
 * Normalizes unicode mathematical symbols, subscripts, superscripts, arrows, and dashes
 */
export function normalizeUnicodeAndSymbols(str: string): string {
  if (!str) return '';
  const subscriptMap: Record<string, string> = {
    '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
    '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
    '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
    '⁺': '+', '⁻': '-',
    '→': '->', '⟶': '->', '–': '-', '—': '-', '−': '-',
    '×': '*', '÷': '/', '≤': '<=', '≥': '>=', '≠': '!='
  };

  return str.replace(/[₀-₉⁰-⁹⁺⁻→⟶–—−×÷≤≥≠]/g, (ch) => subscriptMap[ch] || ch);
}

/**
 * Strips formatting punctuation and spaces for string comparison
 */
export function cleanAlphanumeric(str: string): string {
  const norm = normalizeUnicodeAndSymbols(str);
  return norm.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
}

/**
 * Extracts single option letter (A, B, C, D) if submitted text is formatted as an option choice
 */
export function extractOptionId(submitted: string): string | undefined {
  const trimmed = submitted.trim();
  const match = trimmed.match(/^(?:option\s*)?([A-Da-d])(?:\b|[.:\s\)]|$)/i);
  if (match) {
    return match[1].toUpperCase();
  }
  return undefined;
}

/**
 * Layer 1 Input Validator
 */
export function validateAndNormalizeInput(payload: {
  questionId?: string;
  questionText?: string;
  verifiedCorrectAnswer?: string;
  submittedAnswer: string;
  studentReasoning?: string;
}): InputValidationResult {
  const notes: string[] = [];

  // Check required parameters
  if (!payload.submittedAnswer && payload.submittedAnswer !== '0') {
    return {
      isValid: false,
      normalizedSubmitted: '',
      normalizedReasoning: '',
      isReasoningEmpty: true,
      isReasoningVague: true,
      formattingNotes: ['Submitted answer is empty or null.'],
      error: 'Empty submitted answer',
    };
  }

  const rawSubmitted = String(payload.submittedAnswer);
  const normalizedSubmitted = normalizeUnicodeAndSymbols(rawSubmitted).trim();

  const rawReasoning = typeof payload.studentReasoning === 'string' ? payload.studentReasoning : '';
  const normalizedReasoning = normalizeUnicodeAndSymbols(rawReasoning).trim();

  // Check reasoning quality indicators
  const isReasoningEmpty = normalizedReasoning.length === 0;
  const vaguePatterns = /^(i don'?t know|idk|guess|guessed|just guessed|not sure|dunno|none|\.|because|why not|no idea)$/i;
  const isReasoningVague = isReasoningEmpty || normalizedReasoning.length < 8 || vaguePatterns.test(normalizedReasoning);

  if (isReasoningEmpty) {
    notes.push('Student did not provide written reasoning.');
  } else if (isReasoningVague) {
    notes.push('Student reasoning reflects uncertainty or is too brief to substantiate a cognitive model.');
  }

  const optionId = extractOptionId(normalizedSubmitted);

  return {
    isValid: true,
    normalizedSubmitted,
    normalizedReasoning,
    isReasoningEmpty,
    isReasoningVague,
    selectedOptionId: optionId,
    formattingNotes: notes,
  };
}
