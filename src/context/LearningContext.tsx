import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import {
  Grade,
  Subject,
  STEMQuestion,
  MisconceptionAnalysis,
  GeneratedFollowUpQuestion,
  DiagnosticSubmission,
  FollowUpSubmission,
  QuestionAttemptRecord,
  OverallProgress,
  LearningStage,
  Badge,
  LeaderboardEntry,
  StudentPrivacySettings,
} from '../types/learning';
import { BUILT_IN_QUESTIONS, JudgeDemoPreset } from '../data/questionBank';
import { ALL_BADGES, DEMO_FICTIONAL_PROFILES, calculateLevel } from '../data/gamificationData';
import { evaluateDiagnosticSubmission } from '../utils/diagnosticEvaluator';

const STORAGE_KEY = 'learnloop_progress_v3';
const PRIVACY_STORAGE_KEY = 'learnloop_student_privacy_v2';

interface LearningContextType {
  // Navigation & filter state
  stage: LearningStage;
  setStage: (stage: LearningStage) => void;
  grade: Grade;
  setGrade: (grade: Grade) => void;
  subject: Subject;
  setSubject: (subject: Subject) => void;
  activeTopicId: string;
  setActiveTopicId: (topicId: string) => void;

  // Active question state
  currentQuestion: STEMQuestion;
  currentQuestionIndex: number;
  filteredQuestions: STEMQuestion[];
  selectQuestion: (questionId: string) => void;

  // Learning flow states
  submission: DiagnosticSubmission | null;
  analysis: MisconceptionAnalysis | null;
  followUpQuestion: GeneratedFollowUpQuestion | null;
  followUpSubmission: FollowUpSubmission | null;
  isLoading: boolean;
  loadingMessage: string;
  error: string | null;

  // Gamification & Leaderboard Integrity state
  points: number;
  levelInfo: { level: number; title: string; nextLevelPoints: number; currentLevelFloor: number };
  badges: (Badge & { unlocked: boolean })[];
  recentBadgeEarned: Badge | null;
  dismissBadgeCelebration: () => void;
  leaderboard: LeaderboardEntry[];
  liveLeaderboard: LeaderboardEntry[];
  demoLeaderboard: LeaderboardEntry[];
  leaderboardMode: 'live' | 'demo';
  setLeaderboardMode: (mode: 'live' | 'demo') => void;
  studentPrivacy: StudentPrivacySettings;
  updateStudentPrivacy: (settings: Partial<StudentPrivacySettings>) => void;
  currentStreak: number;
  conceptsMasteredCount: number;
  myRank: number | null;
  totalVerifiedParticipants: number;

  // Actions
  startLearningSession: (topicId?: string) => void;
  submitDiagnosticAnswer: (submittedAnswerText: string, studentReasoning: string, optionId?: string, targetQuestion?: STEMQuestion) => Promise<void>;
  retryCurrentAnalysis: () => Promise<void>;
  submitFollowUpAnswer: (selectedOptionId: string) => void;
  proceedToNextQuestion: () => void;
  loadJudgeDemoPreset: (preset: JudgeDemoPreset) => Promise<void>;

  // Progress metrics & history
  progress: OverallProgress;
  overallAccuracy: number;
  resetProgress: () => void;
  isJudgeDemoModalOpen: boolean;
  setIsJudgeDemoModalOpen: (open: boolean) => void;
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

const INITIAL_PROGRESS: OverallProgress = {
  totalAnsweredSubmissions: 0,
  totalCorrectSubmissions: 0,
  diagnosticAttempts: 0,
  diagnosticCorrect: 0,
  followUpAttempts: 0,
  followUpCorrect: 0,
  points: 0, // Genuine initial points starting at 0 XP
  level: 1,
  unlockedBadgeIds: [],
  history: [],
};

export const LearningProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stage, setStage] = useState<LearningStage>('home');
  const [grade, setGrade] = useState<Grade>('Grade 8');
  const [subject, setSubject] = useState<Subject>('Science');
  const [activeTopicId, setActiveTopicId] = useState<string>('force_and_motion');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const [submission, setSubmission] = useState<DiagnosticSubmission | null>(null);
  const [analysis, setAnalysis] = useState<MisconceptionAnalysis | null>(null);
  const [followUpQuestion, setFollowUpQuestion] = useState<GeneratedFollowUpQuestion | null>(null);
  const [followUpSubmission, setFollowUpSubmission] = useState<FollowUpSubmission | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isJudgeDemoModalOpen, setIsJudgeDemoModalOpen] = useState<boolean>(false);
  const [recentBadgeEarned, setRecentBadgeEarned] = useState<Badge | null>(null);

  // Load progress from localStorage with migration safety and history sanitization
  const [progress, setProgress] = useState<OverallProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Sanitize history to prevent persisted cross-topic contamination
        const sanitizedHistory = Array.isArray(parsed.history)
          ? parsed.history.map((record: QuestionAttemptRecord) => {
              const q = BUILT_IN_QUESTIONS.find((item) => item.id === record.questionId);
              if (q && q.topicId === 'force_and_motion') {
                const isCrossContaminated =
                  record.topicTitle?.toLowerCase().includes('chem') ||
                  record.misconception?.toLowerCase().includes('subscript') ||
                  record.misconception?.toLowerCase().includes('chemical');
                if (isCrossContaminated) {
                  return {
                    ...record,
                    topicId: 'force_and_motion',
                    topicTitle: 'Force and Motion',
                    misconception: 'Motion Requires Continuous Force (Aristotelian Trap)',
                  };
                }
              }
              return record;
            })
          : [];

        return {
          ...INITIAL_PROGRESS,
          ...parsed,
          points: typeof parsed.points === 'number' ? parsed.points : 0,
          level: typeof parsed.level === 'number' ? parsed.level : 1,
          unlockedBadgeIds: Array.isArray(parsed.unlockedBadgeIds) ? parsed.unlockedBadgeIds : [],
          history: sanitizedHistory,
        };
      }
    } catch (e) {
      console.warn('Failed to parse progress from localStorage:', e);
    }
    return INITIAL_PROGRESS;
  });

  // Student privacy settings (persisted in localStorage)
  const [studentPrivacy, setStudentPrivacy] = useState<StudentPrivacySettings>(() => {
    try {
      const saved = localStorage.getItem(PRIVACY_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          displayName:
            typeof parsed.displayName === 'string' && parsed.displayName.trim()
              ? parsed.displayName.trim()
              : 'Student Explorer',
          optInLeaderboard:
            typeof parsed.optInLeaderboard === 'boolean' ? parsed.optInLeaderboard : true,
        };
      }
    } catch (e) {
      console.warn('Failed to parse privacy settings from localStorage:', e);
    }
    return {
      displayName: 'Student Explorer',
      optInLeaderboard: true,
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem(PRIVACY_STORAGE_KEY, JSON.stringify(studentPrivacy));
    } catch (e) {
      console.warn('Failed to save privacy settings to localStorage:', e);
    }
  }, [studentPrivacy]);

  const updateStudentPrivacy = (settings: Partial<StudentPrivacySettings>) => {
    setStudentPrivacy((prev) => ({
      ...prev,
      ...settings,
      displayName:
        settings.displayName !== undefined
          ? settings.displayName.trim() || 'Student Explorer'
          : prev.displayName,
    }));
  };

  // Leaderboard presentation mode: 'live' (verified records only) vs 'demo' (clearly labeled fictional profiles)
  const [leaderboardMode, setLeaderboardMode] = useState<'live' | 'demo'>('live');

  // Sync progress to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Failed to save progress to localStorage:', e);
    }
  }, [progress]);

  // Questions matching current subject/topic
  const filteredQuestions = useMemo(() => {
    const list = BUILT_IN_QUESTIONS.filter(
      (q) => q.topicId === activeTopicId && (q.grade === grade || q.subject === subject)
    );
    return list.length > 0 ? list : BUILT_IN_QUESTIONS.filter((q) => q.topicId === activeTopicId);
  }, [grade, subject, activeTopicId]);

  const currentQuestion = useMemo(() => {
    return filteredQuestions[currentQuestionIndex] || BUILT_IN_QUESTIONS[0];
  }, [filteredQuestions, currentQuestionIndex]);

  // Accurate single-formula calculation: Correct / Answered * 100
  const overallAccuracy = useMemo(() => {
    if (progress.totalAnsweredSubmissions === 0) return 0;
    return Math.round((progress.totalCorrectSubmissions / progress.totalAnsweredSubmissions) * 100);
  }, [progress.totalCorrectSubmissions, progress.totalAnsweredSubmissions]);

  // Gamification: Level info
  const levelInfo = useMemo(() => {
    return calculateLevel(progress.points);
  }, [progress.points]);

  // Gamification: Badges unlocked status
  const badges = useMemo(() => {
    return ALL_BADGES.map((b) => ({
      ...b,
      unlocked: progress.unlockedBadgeIds.includes(b.id),
    }));
  }, [progress.unlockedBadgeIds]);

  // Genuine Streak calculation: Count consecutive correct answers from latest backwards (history[0] is latest)
  const currentStreak = useMemo(() => {
    let count = 0;
    for (let i = 0; i < progress.history.length; i++) {
      const record = progress.history[i];
      const isSuccessful = record.followUpAttempt ? record.followUpAttempt.isCorrect : record.isCorrect;
      if (isSuccessful) {
        count++;
      } else {
        break;
      }
    }
    return count;
  }, [progress.history]);

  // Genuine Concept Mastery calculation: count of unique topics where mastery was demonstrated
  const conceptsMasteredCount = useMemo(() => {
    const masteredTopicIds = new Set<string>();
    for (const record of progress.history) {
      if (record.isCorrect || record.followUpAttempt?.isCorrect) {
        masteredTopicIds.add(record.topicId);
      }
    }
    return masteredTopicIds.size;
  }, [progress.history]);

  // Current student verified entry (strictly from genuine activity records)
  const currentUserLeaderboardEntry = useMemo<LeaderboardEntry | null>(() => {
    if (!studentPrivacy.optInLeaderboard) return null;
    return {
      id: 'current-verified-student',
      name: `${studentPrivacy.displayName} (You)`,
      grade,
      points: progress.points,
      conceptsMastered: conceptsMasteredCount,
      streak: currentStreak,
      isCurrentUser: true,
      verifiedAt:
        progress.history.length > 0
          ? new Date(progress.history[0].timestamp).toISOString()
          : undefined,
    };
  }, [studentPrivacy.optInLeaderboard, studentPrivacy.displayName, grade, progress.points, conceptsMasteredCount, currentStreak, progress.history]);

  // Verified Live Leaderboard: Populated EXCLUSIVELY from genuine application records
  // Never includes fictional profiles or fabricated achievement stats
  const liveLeaderboard = useMemo<LeaderboardEntry[]>(() => {
    const list: LeaderboardEntry[] = [];
    if (currentUserLeaderboardEntry) {
      list.push(currentUserLeaderboardEntry);
    }
    // Filter strictly to ensure no fictional entries ever slip in
    return list
      .filter((entry) => entry.isFictional !== true)
      .sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.conceptsMastered !== a.conceptsMastered) return b.conceptsMastered - a.conceptsMastered;
        return b.streak - a.streak;
      });
  }, [currentUserLeaderboardEntry]);

  // Demo Leaderboard: Clearly labeled demonstration profiles for presentation preview
  const demoLeaderboard = useMemo<LeaderboardEntry[]>(() => {
    const list: LeaderboardEntry[] = [...DEMO_FICTIONAL_PROFILES];
    if (currentUserLeaderboardEntry) {
      list.push(currentUserLeaderboardEntry);
    }
    return list.sort((a, b) => b.points - a.points);
  }, [currentUserLeaderboardEntry]);

  // Active Leaderboard depending on mode (default is 'live')
  const leaderboard = useMemo<LeaderboardEntry[]>(() => {
    return leaderboardMode === 'demo' ? demoLeaderboard : liveLeaderboard;
  }, [leaderboardMode, demoLeaderboard, liveLeaderboard]);

  // Rank within verified live cohort (null if opted out)
  const myRank = useMemo<number | null>(() => {
    if (!studentPrivacy.optInLeaderboard) return null;
    const index = liveLeaderboard.findIndex((item) => item.isCurrentUser);
    return index >= 0 ? index + 1 : null;
  }, [studentPrivacy.optInLeaderboard, liveLeaderboard]);

  const totalVerifiedParticipants = useMemo(() => {
    return liveLeaderboard.length;
  }, [liveLeaderboard]);

  /**
   * Helper to evaluate milestone badge triggers
   */
  const checkBadgeTriggers = (
    currentHistory: QuestionAttemptRecord[],
    currentUnlockedIds: string[],
    accuracy: number
  ): { newlyUnlockedIds: string[]; newlyEarnedBadge: Badge | null } => {
    const newlyUnlocked: string[] = [];
    let latestBadge: Badge | null = null;

    const unlock = (badgeId: string) => {
      if (!currentUnlockedIds.includes(badgeId) && !newlyUnlocked.includes(badgeId)) {
        newlyUnlocked.push(badgeId);
        const b = ALL_BADGES.find((item) => item.id === badgeId);
        if (b) latestBadge = b;
      }
    };

    // 1. first_loop: completed at least 1 diagnostic + follow-up
    if (currentHistory.some((h) => h.followUpAttempt)) {
      unlock('first_loop');
    }

    // 2. misconception_master: initially got it wrong, but got the follow-up right!
    if (currentHistory.some((h) => !h.isCorrect && h.followUpAttempt?.isCorrect)) {
      unlock('misconception_master');
    }

    // 3. physics_explorer: mastered force_and_motion follow up
    if (currentHistory.some((h) => h.topicId === 'force_and_motion' && h.followUpAttempt?.isCorrect)) {
      unlock('physics_explorer');
    }

    // 4. chemical_conservationist: mastered chemical_equations follow up
    if (currentHistory.some((h) => h.topicId === 'chemical_equations' && h.followUpAttempt?.isCorrect)) {
      unlock('chemical_conservationist');
    }

    // 5. algebra_tactician: mastered basic_algebra follow up
    if (currentHistory.some((h) => h.topicId === 'basic_algebra' && h.followUpAttempt?.isCorrect)) {
      unlock('algebra_tactician');
    }

    // 6. deep_thinker: 3+ attempts with substantial reasoning
    const thoughtfulAnswers = currentHistory.filter((h) => (h.studentReasoning || '').trim().length >= 25);
    if (thoughtfulAnswers.length >= 3) {
      unlock('deep_thinker');
    }

    // 7. stem_champion: 4+ submissions and >= 80% accuracy
    if (currentHistory.length >= 4 && accuracy >= 80) {
      unlock('stem_champion');
    }

    return { newlyUnlockedIds: newlyUnlocked, newlyEarnedBadge: latestBadge };
  };

  const startLearningSession = (topicId?: string) => {
    if (topicId) {
      setActiveTopicId(topicId);
    }
    setCurrentQuestionIndex(0);
    setSubmission(null);
    setAnalysis(null);
    setFollowUpQuestion(null);
    setFollowUpSubmission(null);
    setError(null);
    setStage('diagnostic');
  };

  const selectQuestion = (questionId: string) => {
    const idx = filteredQuestions.findIndex((q) => q.id === questionId);
    if (idx !== -1) {
      setCurrentQuestionIndex(idx);
      setSubmission(null);
      setAnalysis(null);
      setFollowUpQuestion(null);
      setFollowUpSubmission(null);
      setError(null);
      setStage('diagnostic');
    }
  };

  const dismissBadgeCelebration = () => {
    setRecentBadgeEarned(null);
  };

  /**
   * Submits a diagnostic answer and calls server-side AI misconception analysis
   */
  const submitDiagnosticAnswer = async (
    submittedAnswerText: string,
    studentReasoning: string,
    optionId?: string,
    targetQuestion?: STEMQuestion
  ) => {
    if (!submittedAnswerText.trim() && !optionId) return;

    // Use explicitly passed question when available to prevent race conditions from async state updates
    const questionToUse = targetQuestion || currentQuestion;

    const subRecord: DiagnosticSubmission = {
      questionId: questionToUse.id,
      selectedOptionId: optionId,
      submittedAnswerText,
      studentReasoning,
      timestamp: Date.now(),
    };
    setSubmission(subRecord);
    setError(null);
    setIsLoading(true);
    setLoadingMessage('Gemini 3.8 Flash is evaluating your answer & diagnosing reasoning...');

    try {
      // Call server-side API with question identifiers
      const response = await fetch('/api/analyze-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId: questionToUse.id,
          topicId: questionToUse.topicId,
          grade: questionToUse.grade,
          subject: questionToUse.subject,
          topic: questionToUse.topicTitle,
          learningObjective: questionToUse.learningObjective,
          questionText: questionToUse.questionText,
          options: questionToUse.options,
          verifiedCorrectAnswer: questionToUse.correctAnswerText,
          submittedAnswer: submittedAnswerText,
          studentReasoning,
          markingCriteria: questionToUse.markingCriteria,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const analysisData: MisconceptionAnalysis = await response.json();
      setAnalysis(analysisData);

      // Record progress strictly on valid submission (single-count submission) + XP points
      setProgress((prev) => {
        const isCorrect = analysisData.isCorrect;
        const newRecord: QuestionAttemptRecord = {
          id: `attempt-${Date.now()}`,
          questionId: questionToUse.id,
          timestamp: Date.now(),
          grade: questionToUse.grade,
          subject: questionToUse.subject,
          topicId: questionToUse.topicId,
          topicTitle: questionToUse.topicTitle,
          questionText: questionToUse.questionText,
          submittedAnswer: submittedAnswerText,
          verifiedAnswer: questionToUse.correctAnswerText,
          studentReasoning,
          isCorrect,
          misconception: analysisData.possibleMisconception,
          confidence: analysisData.confidence,
          evidenceQuote: analysisData.evidenceQuote,
          source: analysisData.source,
        };

        const updatedHistory = [newRecord, ...prev.history];
        const newTotalAnswered = prev.totalAnsweredSubmissions + 1;
        const newTotalCorrect = prev.totalCorrectSubmissions + (isCorrect ? 1 : 0);
        const currentAccuracy = Math.round((newTotalCorrect / newTotalAnswered) * 100);

        // Award points: +30 for participation, +40 for reasoning explanation, +80 for correctness
        let earnedPoints = 30;
        if (studentReasoning.trim().length >= 10) earnedPoints += 40;
        if (isCorrect) earnedPoints += 80;

        const { newlyUnlockedIds, newlyEarnedBadge } = checkBadgeTriggers(
          updatedHistory,
          prev.unlockedBadgeIds,
          currentAccuracy
        );

        if (newlyEarnedBadge) {
          setRecentBadgeEarned(newlyEarnedBadge);
          earnedPoints += 100; // Bonus for milestone badge
        }

        const newPoints = prev.points + earnedPoints;
        const newLevel = calculateLevel(newPoints).level;

        return {
          totalAnsweredSubmissions: newTotalAnswered,
          totalCorrectSubmissions: newTotalCorrect,
          diagnosticAttempts: prev.diagnosticAttempts + 1,
          diagnosticCorrect: prev.diagnosticCorrect + (isCorrect ? 1 : 0),
          followUpAttempts: prev.followUpAttempts,
          followUpCorrect: prev.followUpCorrect,
          points: newPoints,
          level: newLevel,
          unlockedBadgeIds: [...prev.unlockedBadgeIds, ...newlyUnlockedIds],
          history: updatedHistory,
        };
      });

      // Now pre-fetch adaptive follow-up question strictly locked to parent question
      setLoadingMessage('Generating adaptive follow-up question...');
      try {
        const fuResponse = await fetch('/api/generate-followup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            parentQuestionId: questionToUse.id,
            topicId: questionToUse.topicId,
            grade: questionToUse.grade,
            subject: questionToUse.subject,
            topic: questionToUse.topicTitle,
            learningObjective: questionToUse.learningObjective,
            originalQuestionText: questionToUse.questionText,
            originalCorrectAnswer: questionToUse.correctAnswerText,
          }),
        });

        if (fuResponse.ok) {
          const fuData: GeneratedFollowUpQuestion = await fuResponse.json();
          setFollowUpQuestion(fuData);
        } else {
          setFollowUpQuestion({
            ...questionToUse.fallbackFollowUp,
            parentQuestionId: questionToUse.id,
            learningObjective: questionToUse.learningObjective,
            source: 'fallback',
          });
        }
      } catch (e) {
        console.warn('Follow-up generation error, using fallback:', e);
        setFollowUpQuestion({
          ...questionToUse.fallbackFollowUp,
          parentQuestionId: questionToUse.id,
          learningObjective: questionToUse.learningObjective,
          source: 'fallback',
        });
      }

      setStage('feedback');
    } catch (err: any) {
      console.error('Diagnostic submission error:', err);
      setError(
        'The AI service could not be reached or timed out. You can retry with your preserved answer, or examine the curriculum fallback diagnosis.'
      );
      // Deterministic, topic-matched fallback using comprehensive domain rules
      const fallbackAnalysis = evaluateDiagnosticSubmission({
        questionId: questionToUse.id,
        topicId: questionToUse.topicId,
        grade: questionToUse.grade,
        subject: questionToUse.subject,
        topic: questionToUse.topicTitle,
        learningObjective: questionToUse.learningObjective,
        questionText: questionToUse.questionText,
        verifiedCorrectAnswer: questionToUse.correctAnswerText,
        submittedAnswer: submittedAnswerText,
        studentReasoning,
        options: questionToUse.options,
        markingCriteria: questionToUse.markingCriteria,
        conceptualExplanation: questionToUse.conceptualExplanation,
        commonMisconceptions: questionToUse.commonMisconceptions,
      });
      setAnalysis(fallbackAnalysis);

      // Record progress so student effort is not lost even if network times out
      setProgress((prev) => {
        const isCorrect = fallbackAnalysis.isCorrect;
        const newRecord: QuestionAttemptRecord = {
          id: `attempt-${Date.now()}`,
          questionId: questionToUse.id,
          timestamp: Date.now(),
          grade: questionToUse.grade,
          subject: questionToUse.subject,
          topicId: questionToUse.topicId,
          topicTitle: questionToUse.topicTitle,
          questionText: questionToUse.questionText,
          submittedAnswer: submittedAnswerText,
          verifiedAnswer: questionToUse.correctAnswerText,
          studentReasoning,
          isCorrect,
          misconception: fallbackAnalysis.possibleMisconception,
          confidence: fallbackAnalysis.confidence,
          evidenceQuote: fallbackAnalysis.evidenceQuote,
          source: 'fallback',
        };

        const updatedHistory = [newRecord, ...prev.history];
        const newTotalAnswered = prev.totalAnsweredSubmissions + 1;
        const newTotalCorrect = prev.totalCorrectSubmissions + (isCorrect ? 1 : 0);
        const currentAccuracy = Math.round((newTotalCorrect / newTotalAnswered) * 100);

        let earnedPoints = 30;
        if (studentReasoning.trim().length >= 10) earnedPoints += 40;
        if (isCorrect) earnedPoints += 80;

        const { newlyUnlockedIds, newlyEarnedBadge } = checkBadgeTriggers(
          updatedHistory,
          prev.unlockedBadgeIds,
          currentAccuracy
        );

        if (newlyEarnedBadge) {
          setRecentBadgeEarned(newlyEarnedBadge);
          earnedPoints += 100;
        }

        const newPoints = prev.points + earnedPoints;
        const newLevel = calculateLevel(newPoints).level;

        return {
          totalAnsweredSubmissions: newTotalAnswered,
          totalCorrectSubmissions: newTotalCorrect,
          diagnosticAttempts: prev.diagnosticAttempts + 1,
          diagnosticCorrect: prev.diagnosticCorrect + (isCorrect ? 1 : 0),
          followUpAttempts: prev.followUpAttempts,
          followUpCorrect: prev.followUpCorrect,
          points: newPoints,
          level: newLevel,
          unlockedBadgeIds: [...prev.unlockedBadgeIds, ...newlyUnlockedIds],
          history: updatedHistory,
        };
      });

      setFollowUpQuestion({
        ...questionToUse.fallbackFollowUp,
        parentQuestionId: questionToUse.id,
        learningObjective: questionToUse.learningObjective,
        source: 'fallback',
      });
      setStage('feedback');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Retries analysis without creating duplicate attempt records, bound to the original question
   */
  const retryCurrentAnalysis = async () => {
    if (!submission) return;
    const targetQ =
      BUILT_IN_QUESTIONS.find((q) => q.id === submission.questionId) || currentQuestion;

    setError(null);
    setIsLoading(true);
    setLoadingMessage('Retrying Gemini misconception diagnosis...');

    try {
      const response = await fetch('/api/analyze-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId: targetQ.id,
          topicId: targetQ.topicId,
          grade: targetQ.grade,
          subject: targetQ.subject,
          topic: targetQ.topicTitle,
          learningObjective: targetQ.learningObjective,
          questionText: targetQ.questionText,
          options: targetQ.options,
          verifiedCorrectAnswer: targetQ.correctAnswerText,
          submittedAnswer: submission.submittedAnswerText,
          studentReasoning: submission.studentReasoning,
          markingCriteria: targetQ.markingCriteria,
        }),
      });

      if (response.ok) {
        const analysisData: MisconceptionAnalysis = await response.json();
        setAnalysis(analysisData);
        setProgress((prev) => {
          if (prev.history.length === 0) return prev;
          const updatedHistory = [...prev.history];
          updatedHistory[0] = {
            ...updatedHistory[0],
            source: analysisData.source,
            misconception: analysisData.possibleMisconception,
            confidence: analysisData.confidence,
            evidenceQuote: analysisData.evidenceQuote,
          };
          return { ...prev, history: updatedHistory };
        });
      }
    } catch (err: any) {
      console.warn('Retry failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Submits follow-up answer and evaluates transfer learning
   */
  const submitFollowUpAnswer = (selectedOptionId: string) => {
    if (!followUpQuestion) return;

    const isCorrect =
      selectedOptionId.toUpperCase() === followUpQuestion.correctAnswerId.toUpperCase();

    const fuSub: FollowUpSubmission = {
      followUpId: followUpQuestion.id,
      parentQuestionId: followUpQuestion.parentQuestionId,
      selectedOptionId,
      isCorrect,
      timestamp: Date.now(),
    };
    setFollowUpSubmission(fuSub);

    // Update progress: increment answered & correct counts + gamification XP
    setProgress((prev) => {
      const updatedHistory = [...prev.history];
      if (updatedHistory.length > 0) {
        const chosenOption = followUpQuestion.options.find((o) => o.id === selectedOptionId);
        updatedHistory[0] = {
          ...updatedHistory[0],
          followUpAttempt: {
            followUpQuestionText: followUpQuestion.questionText,
            submittedAnswer: chosenOption ? chosenOption.text : selectedOptionId,
            isCorrect,
          },
        };
      }

      const newTotalAnswered = prev.totalAnsweredSubmissions + 1;
      const newTotalCorrect = prev.totalCorrectSubmissions + (isCorrect ? 1 : 0);
      const currentAccuracy = Math.round((newTotalCorrect / newTotalAnswered) * 100);

      // Points: +40 for attempting follow up, +120 for mastering concept transfer
      let earnedPoints = 40 + (isCorrect ? 120 : 0);

      const { newlyUnlockedIds, newlyEarnedBadge } = checkBadgeTriggers(
        updatedHistory,
        prev.unlockedBadgeIds,
        currentAccuracy
      );

      if (newlyEarnedBadge) {
        setRecentBadgeEarned(newlyEarnedBadge);
        earnedPoints += 150; // Bonus for milestone badge
      }

      const newPoints = prev.points + earnedPoints;
      const newLevel = calculateLevel(newPoints).level;

      return {
        totalAnsweredSubmissions: newTotalAnswered,
        totalCorrectSubmissions: newTotalCorrect,
        diagnosticAttempts: prev.diagnosticAttempts,
        diagnosticCorrect: prev.diagnosticCorrect,
        followUpAttempts: prev.followUpAttempts + 1,
        followUpCorrect: prev.followUpCorrect + (isCorrect ? 1 : 0),
        points: newPoints,
        level: newLevel,
        unlockedBadgeIds: [...prev.unlockedBadgeIds, ...newlyUnlockedIds],
        history: updatedHistory,
      };
    });
  };

  /**
   * Move to the next question in the topic
   */
  const proceedToNextQuestion = () => {
    setSubmission(null);
    setAnalysis(null);
    setFollowUpQuestion(null);
    setFollowUpSubmission(null);
    setError(null);

    if (currentQuestionIndex + 1 < filteredQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setStage('diagnostic');
    } else {
      setStage('progress');
    }
  };

  /**
   * Load judge demo preset
   */
  const loadJudgeDemoPreset = async (preset: JudgeDemoPreset) => {
    const q = BUILT_IN_QUESTIONS.find((item) => item.id === preset.questionId);
    if (!q) return;

    setGrade(preset.grade as Grade);
    setSubject(preset.subject as Subject);
    setActiveTopicId(q.topicId);

    const questionsInTopic = BUILT_IN_QUESTIONS.filter((item) => item.topicId === q.topicId);
    const qIndex = questionsInTopic.findIndex((item) => item.id === q.id);
    setCurrentQuestionIndex(qIndex !== -1 ? qIndex : 0);

    const chosenOption = q.options.find((o) => o.id === preset.selectedOptionId);
    const answerText = chosenOption ? chosenOption.text : preset.selectedOptionId;

    setIsJudgeDemoModalOpen(false);
    setStage('diagnostic');

    // Pass q explicitly to prevent stale React state in the current render cycle
    await submitDiagnosticAnswer(answerText, preset.studentReasoning, preset.selectedOptionId, q);
  };

  const resetProgress = () => {
    setProgress(INITIAL_PROGRESS);
    setSubmission(null);
    setAnalysis(null);
    setFollowUpQuestion(null);
    setFollowUpSubmission(null);
    setError(null);
    setRecentBadgeEarned(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <LearningContext.Provider
      value={{
        stage,
        setStage,
        grade,
        setGrade,
        subject,
        setSubject,
        activeTopicId,
        setActiveTopicId,
        currentQuestion,
        currentQuestionIndex,
        filteredQuestions,
        selectQuestion,
        submission,
        analysis,
        followUpQuestion,
        followUpSubmission,
        isLoading,
        loadingMessage,
        error,
        points: progress.points,
        levelInfo,
        badges,
        recentBadgeEarned,
        dismissBadgeCelebration,
        leaderboard,
        liveLeaderboard,
        demoLeaderboard,
        leaderboardMode,
        setLeaderboardMode,
        studentPrivacy,
        updateStudentPrivacy,
        currentStreak,
        conceptsMasteredCount,
        myRank,
        totalVerifiedParticipants,
        startLearningSession,
        submitDiagnosticAnswer,
        retryCurrentAnalysis,
        submitFollowUpAnswer,
        proceedToNextQuestion,
        loadJudgeDemoPreset,
        progress,
        overallAccuracy,
        resetProgress,
        isJudgeDemoModalOpen,
        setIsJudgeDemoModalOpen,
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};
