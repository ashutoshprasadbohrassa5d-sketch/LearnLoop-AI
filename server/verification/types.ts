export type AnswerCorrectness = 'correct' | 'partially_correct' | 'incorrect' | 'undetermined';
export type ReasoningQuality = 'sound' | 'partially_sound' | 'flawed' | 'insufficient' | 'not_provided';
export type MisconceptionStatus = 'demonstrated' | 'suspected' | 'none_evident' | 'insufficient_evidence';
export type DiagnosticConfidence = 'high' | 'medium' | 'low' | 'unavailable';

export interface InputValidationResult {
  isValid: boolean;
  normalizedSubmitted: string;
  normalizedReasoning: string;
  isReasoningEmpty: boolean;
  isReasoningVague: boolean;
  selectedOptionId?: string;
  formattingNotes: string[];
  error?: string;
}

export interface DeterministicCheckResult {
  matched: boolean;
  correctness: AnswerCorrectness;
  reasoningQuality: ReasoningQuality;
  misconceptionStatus: MisconceptionStatus;
  detectedMisconceptionTitle: string | null;
  confidence: DiagnosticConfidence;
  evidenceQuote: string | null;
  explanation: string;
  calculationErrorDetected?: boolean;
  verifiedSteps?: string;
  suggestedNextStep?: string;
}

export interface AssessmentDiagnosticResult {
  answerCorrectness: AnswerCorrectness;
  reasoningQuality: ReasoningQuality;
  misconceptionStatus: MisconceptionStatus;
  diagnosticConfidence: DiagnosticConfidence;
  isCorrect: boolean;
  conceptualExplanation: string;
  possibleMisconception: string | null;
  confidence: 'high' | 'medium' | 'low' | 'insufficient_evidence';
  evidenceQuote: string | null;
  nextLearningStep: string;
  source: 'gemini' | 'deterministic' | 'fallback';
  clarificationPrompt?: string | null;
  calculationErrorDetected?: boolean;
}
