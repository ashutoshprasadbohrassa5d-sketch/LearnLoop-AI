import React, { useState } from 'react';
import { useLearning } from '../context/LearningContext';
import { TOPIC_METADATA } from '../data/questionBank';
import {
  BarChart2,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  ArrowRight,
  Sparkles,
  Trophy,
  Award,
  Compass,
  FlaskConical,
  Calculator,
  Brain,
  History,
} from 'lucide-react';

export const ProgressDashboard: React.FC = () => {
  const {
    progress,
    overallAccuracy,
    resetProgress,
    startLearningSession,
    setStage,
    points,
    levelInfo,
    badges,
    leaderboard,
    myRank,
    totalVerifiedParticipants,
    studentPrivacy,
  } = useLearning();

  const [activeTab, setActiveTab] = useState<'overview' | 'badges' | 'history'>('overview');

  const followUpAccuracy =
    progress.followUpAttempts > 0
      ? Math.round((progress.followUpCorrect / progress.followUpAttempts) * 100)
      : 0;

  const iconMap: Record<string, React.ReactNode> = {
    RotateCcw: <RotateCcw className="w-5 h-5 text-indigo-600" />,
    Sparkles: <Sparkles className="w-5 h-5 text-indigo-600" />,
    Compass: <Compass className="w-5 h-5 text-indigo-600" />,
    FlaskConical: <FlaskConical className="w-5 h-5 text-indigo-600" />,
    Calculator: <Calculator className="w-5 h-5 text-indigo-600" />,
    Brain: <Brain className="w-5 h-5 text-indigo-600" />,
    Trophy: <Trophy className="w-5 h-5 text-indigo-600" />,
  };

  const topicStats = TOPIC_METADATA.map((topic) => {
    const attempts = progress.history.filter((h) => h.topicId === topic.id);
    const correctCount = attempts.filter((h) => h.isCorrect).length;
    const followUps = attempts.filter((h) => h.followUpAttempt);
    const followUpsCorrect = followUps.filter((h) => h.followUpAttempt?.isCorrect).length;

    const totalTopicSubmissions = attempts.length + followUps.length;
    const totalTopicCorrect = correctCount + followUpsCorrect;
    const accuracy =
      totalTopicSubmissions > 0 ? Math.round((totalTopicCorrect / totalTopicSubmissions) * 100) : 0;

    let status: 'not_started' | 'needs_practice' | 'mastered' = 'not_started';
    if (totalTopicSubmissions > 0) {
      if (followUpsCorrect >= 1 && accuracy >= 60) {
        status = 'mastered';
      } else {
        status = 'needs_practice';
      }
    }

    return {
      ...topic,
      attemptsCount: attempts.length,
      accuracy,
      followUpsCorrect,
      status,
    };
  });

  const unlockedCount = badges.filter((b) => b.unlocked).length;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700">
            <BarChart2 className="w-4 h-4 text-indigo-600" />
            <span>Learning Dashboard & Analytics</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Student Analytics & Concept Mastery
          </h1>
          <p className="text-sm text-slate-600 mt-0.5">
            Real-time tracking of diagnostic attempts, misconception resolution, milestone badges, and class rankings.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setStage('leaderboard')}
            aria-label="View STEM Leaderboard"
            className="px-3.5 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-2xs"
          >
            <Trophy className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>
              {myRank !== null
                ? `Rank #${myRank}${totalVerifiedParticipants > 1 ? ` of ${totalVerifiedParticipants}` : ' (Solo Pioneer)'}`
                : 'Rank: Private'}
            </span>
          </button>
          <button
            onClick={() => {
              if (confirm('Are you sure you want to reset your session progress?')) {
                resetProgress();
              }
            }}
            className="px-3.5 py-1.5 text-xs font-medium text-slate-500 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Progress</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl border border-slate-200/90 bg-white shadow-xs space-y-1">
          <div className="text-xs font-semibold text-slate-500">Overall Accuracy</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
            {overallAccuracy}%
          </div>
          <div className="text-[11px] text-slate-500">
            {progress.totalCorrectSubmissions} of {progress.totalAnsweredSubmissions} answers verified
          </div>
        </div>

        <div className="p-5 rounded-3xl border border-slate-200/90 bg-white shadow-xs space-y-1">
          <div className="text-xs font-semibold text-slate-500">Follow-Up Transfer</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 font-mono tabular-nums">
            {followUpAccuracy}%
          </div>
          <div className="text-[11px] text-slate-500">
            {progress.followUpCorrect} of {progress.followUpAttempts} follow-ups mastered
          </div>
        </div>

        <div className="p-5 rounded-3xl border border-slate-200/90 bg-white shadow-xs space-y-1">
          <div className="text-xs font-semibold text-slate-500">Total Mastery XP</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
            {points}
          </div>
          <div className="text-[11px] text-indigo-700 font-semibold">
            Level {levelInfo.level} ({levelInfo.title})
          </div>
        </div>

        <div className="p-5 rounded-3xl border border-slate-200/90 bg-white shadow-xs space-y-1">
          <div className="text-xs font-semibold text-slate-500">Milestone Badges</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 font-mono tabular-nums">
            {unlockedCount} / {badges.length}
          </div>
          <div className="text-[11px] text-slate-500">
            {badges.length - unlockedCount} remaining to earn
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
            activeTab === 'overview'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Topic Mastery Matrix
        </button>
        <button
          onClick={() => setActiveTab('badges')}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 ${
            activeTab === 'badges'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>Milestone Badges ({unlockedCount})</span>
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 ${
            activeTab === 'history'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <History className="w-3.5 h-3.5" />
          <span>Diagnostic History ({progress.history.length})</span>
        </button>
      </div>

      {/* Tab 1: Topic Mastery Matrix */}
      {activeTab === 'overview' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topicStats.map((topic) => (
              <div
                key={topic.id}
                className="p-5 rounded-3xl border border-slate-200/90 bg-white shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                    <span>{topic.subject}</span>
                    <span
                      className={`font-semibold ${
                        topic.status === 'mastered'
                          ? 'text-emerald-700'
                          : topic.status === 'needs_practice'
                          ? 'text-amber-700'
                          : 'text-slate-400'
                      }`}
                    >
                      {topic.status === 'mastered'
                        ? 'Mastered'
                        : topic.status === 'needs_practice'
                        ? 'Needs Practice'
                        : 'Not Started'}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900">{topic.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-2">{topic.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-500 font-mono tabular-nums">
                    {topic.attemptsCount > 0 ? `${topic.accuracy}% accuracy` : '0 attempts'}
                  </div>

                  <button
                    onClick={() => startLearningSession(topic.id)}
                    className="px-3 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors flex items-center gap-1"
                  >
                    <span>Practice</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick link to verified STEM leaderboard */}
          <div className="p-6 rounded-3xl border border-slate-200/90 bg-white shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                Verified STEM Leaderboard
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {myRank !== null
                  ? totalVerifiedParticipants === 1
                    ? 'You are the pioneer participant in your cohort!'
                    : `You are currently ranked #${myRank} of ${totalVerifiedParticipants} verified students!`
                  : 'Leaderboard participation is currently private.'}
              </h3>
              <p className="text-xs text-slate-600">
                {myRank !== null
                  ? 'Rankings update dynamically from verified STEM diagnostic challenges and transfer problem results.'
                  : 'Enable public participation in the Leaderboard tab to display your pseudonym.'}
              </p>
            </div>

            <button
              onClick={() => setStage('leaderboard')}
              aria-label="Open STEM Leaderboard"
              className="px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-xs focus-visible:outline-indigo-600"
            >
              <Trophy className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Open Leaderboard</span>
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Milestone Badges Showcase */}
      {activeTab === 'badges' && (
        <div className="space-y-4 animate-in fade-in">
          <div className="text-xs text-slate-500">
            Earn badges by diagnosing misconceptions, showing detailed reasoning, and solving follow-up transfer questions.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {badges.map((b) => (
              <div
                key={b.id}
                className={`p-5 rounded-3xl border transition-all flex items-start gap-4 ${
                  b.unlocked
                    ? 'border-indigo-200 bg-white shadow-xs'
                    : 'border-slate-200/80 bg-slate-50/50 opacity-50'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                    b.unlocked
                      ? 'bg-indigo-50 text-indigo-700 shadow-xs'
                      : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  {iconMap[b.iconName] || <Award className="w-6 h-6" />}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900">{b.title}</h3>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        b.unlocked
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {b.unlocked ? 'Unlocked' : 'Locked'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Diagnostic History */}
      {activeTab === 'history' && (
        <div className="space-y-4 animate-in fade-in">
          {progress.history.length === 0 ? (
            <div className="p-8 rounded-3xl border border-slate-200/90 bg-white text-center space-y-3">
              <p className="text-xs text-slate-500">No diagnostic attempts recorded yet.</p>
              <button
                onClick={() => startLearningSession()}
                className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors"
              >
                Start Diagnostic
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {progress.history.map((record) => (
                <div
                  key={record.id}
                  className="p-5 rounded-3xl border border-slate-200/90 bg-white shadow-xs space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 font-medium text-slate-500">
                      <span className="font-semibold text-slate-900">{record.topicTitle}</span>
                      <span aria-hidden="true">·</span>
                      <span>{record.grade}</span>
                      <span aria-hidden="true">·</span>
                      <span>
                        {new Date(record.timestamp).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`font-semibold flex items-center gap-1 ${
                          record.isCorrect ? 'text-emerald-700' : 'text-amber-700'
                        }`}
                      >
                        {record.isCorrect ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Correct (+80 XP)</span>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>Needs Review</span>
                          </>
                        )}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-400 font-mono text-[11px]">
                        {record.source === 'gemini' ? 'Gemini AI' : 'Fallback'}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs font-medium text-slate-800">{record.questionText}</p>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                    <div>
                      <span className="font-semibold text-slate-700">Submitted: </span>
                      <span className="text-slate-900 font-mono">{record.submittedAnswer}</span>
                    </div>
                    {record.studentReasoning && (
                      <div>
                        <span className="font-semibold text-slate-700">Reasoning: </span>
                        <span className="italic text-slate-600">"{record.studentReasoning}"</span>
                      </div>
                    )}
                    {record.misconception && (
                      <div className="text-amber-900 pt-1 font-semibold">
                        <span>Identified Misconception: </span>
                        <span>{record.misconception}</span>
                      </div>
                    )}
                  </div>

                  {record.followUpAttempt && (
                    <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1 border-t border-slate-100">
                      <span className="font-semibold text-slate-700">Follow-Up Test:</span>
                      <span
                        className={
                          record.followUpAttempt.isCorrect
                            ? 'text-emerald-700 font-semibold'
                            : 'text-amber-700'
                        }
                      >
                        {record.followUpAttempt.isCorrect
                          ? 'Concept Transfer Mastered (+120 XP)'
                          : 'Needs Further Practice'}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
