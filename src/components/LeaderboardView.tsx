import React, { useState } from 'react';
import { useLearning } from '../context/LearningContext';
import {
  Trophy,
  Medal,
  Award,
  Flame,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Lock,
  Eye,
  EyeOff,
  UserCheck,
  Users,
  Sparkles,
} from 'lucide-react';
import { Grade } from '../types/learning';

export const LeaderboardView: React.FC = () => {
  const {
    leaderboard,
    liveLeaderboard,
    demoLeaderboard,
    leaderboardMode,
    setLeaderboardMode,
    points,
    levelInfo,
    currentStreak,
    conceptsMasteredCount,
    studentPrivacy,
    updateStudentPrivacy,
    startLearningSession,
  } = useLearning();

  const [gradeFilter, setGradeFilter] = useState<'All' | Grade>('All');
  const [isEditingPseudonym, setIsEditingPseudonym] = useState(false);
  const [pseudonymInput, setPseudonymInput] = useState(studentPrivacy.displayName);

  const activeList = leaderboardMode === 'demo' ? demoLeaderboard : liveLeaderboard;

  const filteredLeaderboard = activeList.filter((entry) => {
    if (gradeFilter === 'All') return true;
    return entry.grade === gradeFilter;
  });

  const isDemo = leaderboardMode === 'demo';
  const isOptedOut = !studentPrivacy.optInLeaderboard;
  const verifiedPeersCount = liveLeaderboard.filter((e) => !e.isCurrentUser).length;

  const handleSavePseudonym = (e: React.FormEvent) => {
    e.preventDefault();
    if (pseudonymInput.trim()) {
      updateStudentPrivacy({ displayName: pseudonymInput.trim() });
    }
    setIsEditingPseudonym(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700">
            <Trophy className="w-4 h-4 text-indigo-600" aria-hidden="true" />
            <span>STEM Achievement Rankings</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Grade 8 & 9 STEM Leaderboard
          </h1>
          <p className="text-sm text-slate-600 mt-0.5">
            Rankings calculated strictly from verified diagnostic evaluations, misconception overcomings, and transfer challenges.
          </p>
        </div>

        <button
          onClick={() => startLearningSession()}
          aria-label="Earn more points by answering questions"
          className="px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-xs flex items-center gap-1.5 whitespace-nowrap shrink-0 focus-visible:outline-indigo-600"
        >
          <span>Solve Challenges (+XP)</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>

      {/* Mode Switcher Tabs: Live Verified vs Fictional Demo Preview */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-2 bg-slate-100 rounded-2xl border border-slate-200">
        <div
          role="tablist"
          aria-label="Leaderboard data source"
          className="flex items-center gap-1.5"
        >
          <button
            type="button"
            role="tab"
            aria-selected={!isDemo}
            onClick={() => setLeaderboardMode('live')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              !isDemo
                ? 'bg-white text-indigo-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
            <span>Verified Live Data</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
              Real
            </span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={isDemo}
            onClick={() => setLeaderboardMode('demo')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              isDemo
                ? 'bg-white text-indigo-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" aria-hidden="true" />
            <span>Demo Data Preview</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
              Simulated
            </span>
          </button>
        </div>

        <div className="text-xs text-slate-500 px-2 font-medium">
          {!isDemo
            ? 'Populated exclusively from actual student activity'
            : 'Fictional demo dataset for presentation testing'}
        </div>
      </div>

      {/* Prominent Demo Mode Warning Banner */}
      {isDemo && (
        <div
          role="alert"
          aria-live="polite"
          className="p-4 rounded-2xl border-2 border-amber-300 bg-amber-50 text-amber-950 space-y-1 animate-in fade-in"
        >
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-900">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
            <span>Demo Data Mode Active — Fictional Profiles</span>
          </div>
          <p className="text-xs text-amber-900 leading-relaxed">
            All peer profiles, mastery counts, XP, and streaks displayed in this tab are <strong>fictional demonstration data</strong> created strictly for interface testing and competition review. None of these records represent real students.
          </p>
        </div>
      )}

      {/* Student Privacy & Participation Control Card */}
      <div
        role="region"
        aria-label="Student Privacy and Participation Settings"
        className="p-5 rounded-3xl border border-slate-200/90 bg-white shadow-xs space-y-4"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
              <Lock className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
              <span>Student Privacy & Leaderboard Participation</span>
            </div>
            <p className="text-xs text-slate-500">
              LearnLoop protects your privacy. Choose your pseudonym and decide whether your score is visible on the public board.
            </p>
          </div>

          {/* Opt-in / Opt-out Toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-pressed={studentPrivacy.optInLeaderboard}
              aria-label={`Toggle leaderboard visibility: currently ${studentPrivacy.optInLeaderboard ? 'Public with pseudonym' : 'Private'}`}
              onClick={() =>
                updateStudentPrivacy({ optInLeaderboard: !studentPrivacy.optInLeaderboard })
              }
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                studentPrivacy.optInLeaderboard
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                  : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200'
              }`}
            >
              {studentPrivacy.optInLeaderboard ? (
                <>
                  <Eye className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                  <span>Public (Pseudonym)</span>
                </>
              ) : (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                  <span>Private (Opted Out)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Display Pseudonym Editor */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium">Your Display Pseudonym:</span>
            {!isEditingPseudonym ? (
              <span className="font-bold text-indigo-950 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100">
                {studentPrivacy.displayName}
              </span>
            ) : (
              <form onSubmit={handleSavePseudonym} className="flex items-center gap-2">
                <input
                  type="text"
                  value={pseudonymInput}
                  onChange={(e) => setPseudonymInput(e.target.value)}
                  maxLength={30}
                  aria-label="Edit display pseudonym"
                  placeholder="e.g., CuriousQuark"
                  className="px-2.5 py-1 rounded-lg border border-indigo-300 text-xs font-bold text-slate-900 outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="px-2.5 py-1 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 text-xs"
                >
                  Save
                </button>
              </form>
            )}
          </div>

          {!isEditingPseudonym && (
            <button
              type="button"
              onClick={() => {
                setPseudonymInput(studentPrivacy.displayName);
                setIsEditingPseudonym(true);
              }}
              className="text-indigo-600 hover:text-indigo-800 font-semibold underline underline-offset-2"
            >
              Change Pseudonym
            </button>
          )}
        </div>
      </div>

      {/* Current Student Verified Highlight Card */}
      <div
        role="region"
        aria-label="Your Verified Progress Summary"
        className="p-6 rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50/70 via-white to-slate-50 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4">
          <div
            aria-hidden="true"
            className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-extrabold text-lg flex items-center justify-center font-mono shadow-sm"
          >
            L{levelInfo.level}
          </div>
          <div className="space-y-0.5">
            <div className="text-xs font-semibold text-indigo-800">
              Verified Status: {levelInfo.title}
            </div>
            <div className="text-lg font-bold text-slate-900">
              You have <span className="text-indigo-600 font-mono tabular-nums">{points} XP</span> points
            </div>
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <span>{conceptsMasteredCount} concepts mastered</span>
              <span aria-hidden="true">·</span>
              <span>{currentStreak}x current streak</span>
            </div>
          </div>
        </div>

        {/* Level progress bar */}
        <div className="w-full sm:w-64 space-y-1.5">
          <div className="flex justify-between text-[11px] text-slate-500 font-mono">
            <span>{points} XP</span>
            <span>{levelInfo.nextLevelPoints} XP</span>
          </div>
          <div
            role="progressbar"
            aria-valuenow={points}
            aria-valuemin={levelInfo.currentLevelFloor}
            aria-valuemax={levelInfo.nextLevelPoints}
            aria-label="Experience points toward next level"
            className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden"
          >
            <div
              className="h-full bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full transition-all duration-500"
              style={{
                width: `${Math.min(
                  100,
                  Math.max(
                    5,
                    ((points - levelInfo.currentLevelFloor) /
                      (levelInfo.nextLevelPoints - levelInfo.currentLevelFloor)) *
                      100
                  )
                )}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div
          role="tablist"
          aria-label="Grade filter"
          className="flex items-center gap-1.5 text-xs font-medium"
        >
          {(['All', 'Grade 8', 'Grade 9'] as const).map((g) => (
            <button
              key={g}
              type="button"
              role="tab"
              aria-selected={gradeFilter === g}
              onClick={() => setGradeFilter(g)}
              className={`px-3 py-1.5 rounded-xl transition-colors ${
                gradeFilter === g
                  ? 'bg-slate-900 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {g === 'All' ? 'All Grades' : g}
            </button>
          ))}
        </div>

        <div className="text-xs text-slate-500 font-medium">
          Showing {filteredLeaderboard.length} ranking{filteredLeaderboard.length === 1 ? '' : 's'}
        </div>
      </div>

      {/* Leaderboard Table / Cards */}
      <div
        role="region"
        aria-label="Rankings Table"
        className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-xs divide-y divide-slate-100"
      >
        {filteredLeaderboard.length > 0 ? (
          filteredLeaderboard.map((entry, index) => {
            const rank = index + 1;
            const isMe = entry.isCurrentUser;
            const isFictional = entry.isFictional;

            return (
              <div
                key={entry.id}
                className={`p-4 sm:p-5 flex items-center justify-between gap-4 transition-colors ${
                  isMe
                    ? 'bg-indigo-50/60 font-medium'
                    : isFictional
                    ? 'bg-slate-50/30 hover:bg-slate-50/60'
                    : 'hover:bg-slate-50/60'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Rank Number / Icon */}
                  <div
                    aria-label={`Rank ${rank}`}
                    className="w-8 flex items-center justify-center font-mono font-bold text-sm"
                  >
                    {rank === 1 ? (
                      <Trophy className="w-5 h-5 text-amber-500" aria-hidden="true" />
                    ) : rank === 2 ? (
                      <Medal className="w-5 h-5 text-slate-400" aria-hidden="true" />
                    ) : rank === 3 ? (
                      <Award className="w-5 h-5 text-amber-700" aria-hidden="true" />
                    ) : (
                      <span className="text-slate-500 tabular-nums">#{rank}</span>
                    )}
                  </div>

                  {/* Avatar / Name */}
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900">{entry.name}</span>
                      {isMe && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 uppercase">
                          You
                        </span>
                      )}
                      {isFictional && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 uppercase font-semibold">
                          Fictional Demo
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-500">
                      <span>{entry.grade}</span>
                      <span aria-hidden="true"> · </span>
                      <span>{entry.conceptsMastered} concepts mastered</span>
                      {entry.verifiedAt && (
                        <>
                          <span aria-hidden="true"> · </span>
                          <span className="text-emerald-700 font-medium">Verified Active</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Score / Streak */}
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                    <Flame className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                    <span>{entry.streak}x streak</span>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-extrabold text-slate-900 font-mono tabular-nums">
                      {entry.points} XP
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          /* Empty State when student opted out or no peers match filter */
          <div className="p-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <EyeOff className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-sm font-bold text-slate-800">No Visible Leaderboard Entries</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              {isOptedOut
                ? 'Leaderboard participation is currently paused. Enable participation above to display your pseudonym and verified achievements on the board.'
                : 'No student records match the selected grade filter.'}
            </p>
          </div>
        )}
      </div>

      {/* Honest Empty State for Cohort Participation (Requirement 6) */}
      {!isDemo && verifiedPeersCount === 0 && !isOptedOut && (
        <div
          role="status"
          aria-live="polite"
          className="p-6 rounded-3xl border border-dashed border-indigo-200 bg-indigo-50/40 text-center space-y-2 animate-in fade-in"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mx-auto">
            <Users className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">
            Awaiting Additional Cohort Participants
          </h3>
          <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
            You are currently the first active student in this verified cohort! Rankings will automatically populate as more classmates complete diagnostic questions and misconception challenges. LearnLoop AI never fabricates classmates or fictional competitors.
          </p>
        </div>
      )}
    </div>
  );
};
