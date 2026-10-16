export type Grade = 'Grade 8' | 'Grade 9';
export type Subject =
  | 'Biology'
  | 'Physics'
  | 'Chemistry'
  | 'Mathematics'
  | 'General Knowledge'
  | 'Science';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type ConfidenceLevel = 'high' | 'medium' | 'low' | 'insufficient_evidence';

export interface STEMQuestion {
  id: string;
  grade: Grade;
  subject: Subject;
  topicId: string;
  topicTitle: string;
  topic?: string;
  subtopic?: string;
  difficulty?: Difficulty;
  learningObjective: string;
  questionText: string;
  contextOrEquation?: string;
  options: { id: string; text: string }[];
  correctAnswerId: string;
  correctAnswerText: string;
  conceptualExplanation: string;
  workedSolution?: string;
  expectedReasoning?: string;
  hint?: string;
  markingCriteria: string;
  // Known cognitive misconceptions mapped by typical student choices / explanations
  commonMisconceptions: {
    answerIdOrPattern: string;
    misconceptionTitle: string;
    explanation: string;
    typicalReasoningQuote: string;
  }[];
  // Trusted paired built-in follow-up question
  fallbackFollowUp: {
    id: string;
    questionText: string;
    contextOrEquation?: string;
    options: { id: string; text: string }[];
    correctAnswerId: string;
    correctAnswerText: string;
    explanation: string;
  };
}

export type AnswerCorrectness = 'correct' | 'partially_correct' | 'incorrect' | 'undetermined';
export type ReasoningQuality = 'sound' | 'partially_sound' | 'flawed' | 'insufficient' | 'not_provided';
export type MisconceptionStatus = 'demonstrated' | 'suspected' | 'none_evident' | 'insufficient_evidence';
export type DiagnosticConfidence = 'high' | 'medium' | 'low' | 'unavailable';

export interface MisconceptionAnalysis {
  // Four distinct assessment dimensions
  answerCorrectness: AnswerCorrectness;
  reasoningQuality: ReasoningQuality;
  misconceptionStatus: MisconceptionStatus;
  diagnosticConfidence: DiagnosticConfidence;

  // Backward-compatible core properties
  isCorrect: boolean;
  conceptualExplanation: string;
  possibleMisconception: string | null;
  confidence: ConfidenceLevel;
  evidenceQuote: string | null;
  nextLearningStep: string;
  source: 'gemini' | 'fallback';

  // Rich diagnostic details
  clarificationPrompt?: string | null;
  verifiedAnswerCriteria?: string;
  calculationErrorDetected?: boolean;
}

export interface GeneratedFollowUpQuestion {
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

export interface DiagnosticSubmission {
  questionId: string;
  selectedOptionId?: string;
  typedAnswer?: string;
  submittedAnswerText: string;
  studentReasoning: string;
  timestamp: number;
}

export interface FollowUpSubmission {
  followUpId: string;
  parentQuestionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
  timestamp: number;
}

export interface QuestionAttemptRecord {
  id: string;
  questionId?: string;
  timestamp: number;
  grade: Grade;
  subject: Subject;
  topicId: string;
  topicTitle: string;
  questionText: string;
  submittedAnswer: string;
  verifiedAnswer: string;
  studentReasoning: string;
  isCorrect: boolean;
  misconception: string | null;
  confidence: ConfidenceLevel;
  evidenceQuote: string | null;
  source: 'gemini' | 'fallback';
  followUpAttempt?: {
    followUpQuestionText: string;
    submittedAnswer: string;
    isCorrect: boolean;
  };
}

export interface TopicProgress {
  topicId: string;
  topicTitle: string;
  subject: Subject;
  grade: Grade;
  diagnosticsAttempted: number;
  diagnosticsCorrect: number;
  followUpsAttempted: number;
  followUpsCorrect: number;
  mastered: boolean;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'milestone' | 'mastery' | 'engagement';
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  grade: Grade;
  points: number;
  conceptsMastered: number;
  streak: number;
  isCurrentUser?: boolean;
  isFictional?: boolean; // True only for explicitly labeled demonstration profiles
  verifiedAt?: string;   // ISO timestamp of verified activity
}

export interface StudentPrivacySettings {
  displayName: string;
  optInLeaderboard: boolean;
}

export interface OverallProgress {
  totalAnsweredSubmissions: number; // Sum of unique diagnostic + follow-up submissions
  totalCorrectSubmissions: number;
  diagnosticAttempts: number;
  diagnosticCorrect: number;
  followUpAttempts: number;
  followUpCorrect: number;
  points: number;
  level: number;
  unlockedBadgeIds: string[];
  history: QuestionAttemptRecord[];
}

export type LearningStage =
  | 'home'
  | 'topics'
  | 'diagnostic'
  | 'feedback'
  | 'followup'
  | 'progress'
  | 'leaderboard';

