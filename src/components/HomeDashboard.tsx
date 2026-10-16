import React from 'react';
import { useLearning } from '../context/LearningContext';
import { TOPIC_METADATA } from '../data/questionBank';
import {
  ArrowRight,
  Compass,
  FlaskConical,
  Calculator,
  Sparkles,
  Trophy,
  Award,
  Brain,
  RotateCcw,
  Target,
  CheckCircle2,
  Zap,
  Dna,
  Globe,
  Sun,
  Volume2,
  Cpu,
  Layers,
  Heart,
  Rocket,
  Binary,
  Microscope,
} from 'lucide-react';

export const HomeDashboard: React.FC = () => {
  const {
    startLearningSession,
    setStage,
    setIsJudgeDemoModalOpen,
    progress,
    overallAccuracy,
    points,
    levelInfo,
    badges,
  } = useLearning();

  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-5 h-5 text-indigo-600" />,
    FlaskConical: <FlaskConical className="w-5 h-5 text-indigo-600" />,
    Calculator: <Calculator className="w-5 h-5 text-indigo-600" />,
    Dna: <Dna className="w-5 h-5 text-indigo-600" />,
    Globe: <Globe className="w-5 h-5 text-indigo-600" />,
    Sun: <Sun className="w-5 h-5 text-indigo-600" />,
    Volume2: <Volume2 className="w-5 h-5 text-indigo-600" />,
    Cpu: <Cpu className="w-5 h-5 text-indigo-600" />,
    Layers: <Layers className="w-5 h-5 text-indigo-600" />,
    Heart: <Heart className="w-5 h-5 text-indigo-600" />,
    Rocket: <Rocket className="w-5 h-5 text-indigo-600" />,
    Binary: <Binary className="w-5 h-5 text-indigo-600" />,
    Microscope: <Microscope className="w-5 h-5 text-indigo-600" />,
    RotateCcw: <RotateCcw className="w-5 h-5 text-indigo-600" />,
    Sparkles: <Sparkles className="w-5 h-5 text-indigo-600" />,
    Brain: <Brain className="w-5 h-5 text-indigo-600" />,
    Trophy: <Trophy className="w-5 h-5 text-indigo-600" />,
  };

  const followUpAccuracy =
    progress.followUpAttempts > 0
      ? Math.round((progress.followUpCorrect / progress.followUpAttempts) * 100)
      : 0;

  const unlockedCount = badges.filter((b) => b.unlocked).length;

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Hero Section: Navy / Indigo Foundation */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-900/10 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-8 sm:p-12 shadow-md">
        {/* Subtle geometric pattern in background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="relative max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-semibold tracking-wide">
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            <span>Grade 8 & 9 STEM Adaptive Diagnostic Platform</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Understand your mistakes. <br />
            <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-sky-200 bg-clip-text text-transparent">
              Master the concept.
            </span>
          </h1>

          <p className="text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
            LearnLoop AI evaluates not only your final answer, but analyzes your reasoning step-by-step. It identifies genuine conceptual misconceptions, explains the underlying science and math principles, and provides targeted follow-up challenges to build long-term mastery.
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={() => startLearningSession()}
              className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-sky-300 via-indigo-200 to-white hover:from-white hover:to-indigo-100 rounded-xl shadow-sm transition-all flex items-center gap-2 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
            >
              <span>Start Learning Session</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </button>
            <button
              onClick={() => setIsJudgeDemoModalOpen(true)}
              className="px-5 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 rounded-xl border border-white/15 transition-colors flex items-center gap-2 whitespace-nowrap backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-indigo-300" />
              <span>Judge Quick Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Gamification Level & XP Progress Banner */}
      <section className="p-6 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50/70 via-white to-slate-50 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-extrabold text-lg flex items-center justify-center font-mono shadow-sm shrink-0">
            L{levelInfo.level}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-900">
              <span>Level {levelInfo.level}: {levelInfo.title}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 font-mono tabular-nums">{points} XP</span>
            </div>
            <div className="text-sm font-bold text-slate-900">
              {levelInfo.nextLevelPoints - points > 0
                ? `${levelInfo.nextLevelPoints - points} XP to reach Level ${levelInfo.level + 1}`
                : 'Maximum Mastery Level Reached!'}
            </div>
            <div className="text-xs text-slate-500">
              Earn XP by explaining reasoning (+40 XP), correct answers (+80 XP), and follow-up transfer (+120 XP).
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={() => setStage('leaderboard')}
            aria-label="View STEM Leaderboard"
            className="w-full md:w-auto px-4 py-2.5 text-xs font-semibold text-indigo-700 bg-white border border-indigo-200/80 hover:bg-indigo-50/80 rounded-xl transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shadow-xs focus-visible:outline-indigo-600"
          >
            <Trophy className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>STEM Leaderboard</span>
          </button>
        </div>
      </section>

      {/* Metric Cards (Zero Pill Clutter, Clean Typographic Presence) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            Learning Progress & Diagnostic Accuracy
          </h2>
          <button
            onClick={() => setStage('progress')}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Full Analytics Dashboard →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl border border-slate-200/80 bg-white shadow-xs space-y-1">
            <div className="text-xs font-medium text-slate-500">Overall Accuracy</div>
            <div className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
              {overallAccuracy}%
            </div>
            <div className="text-xs text-slate-500">
              {progress.totalCorrectSubmissions} of {progress.totalAnsweredSubmissions} answers verified
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/80 bg-white shadow-xs space-y-1">
            <div className="text-xs font-medium text-slate-500">Diagnostic Attempts</div>
            <div className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
              {progress.diagnosticAttempts}
            </div>
            <div className="text-xs text-slate-500">
              {progress.diagnosticCorrect} correct on initial diagnosis
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/80 bg-white shadow-xs space-y-1">
            <div className="text-xs font-medium text-slate-500">Follow-Up Concept Transfer</div>
            <div className="text-3xl font-extrabold text-indigo-600 font-mono tabular-nums">
              {followUpAccuracy}%
            </div>
            <div className="text-xs text-slate-500">
              {progress.followUpCorrect} of {progress.followUpAttempts} follow-up questions mastered
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Badges Showcase */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Learning Milestone Badges
            </h2>
            <p className="text-xs text-slate-500">
              {unlockedCount} of {badges.length} badges unlocked
            </p>
          </div>
          <button
            onClick={() => setStage('progress')}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            All Badges →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
          {badges.map((b) => (
            <div
              key={b.id}
              className={`p-3.5 rounded-2xl border text-center space-y-2 transition-all ${
                b.unlocked
                  ? 'border-indigo-200 bg-white shadow-xs'
                  : 'border-slate-200/60 bg-slate-50/50 opacity-40'
              }`}
            >
              <div
                className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center ${
                  b.unlocked
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'bg-slate-200 text-slate-400'
                }`}
              >
                {iconMap[b.iconName] || <Award className="w-5 h-5" />}
              </div>
              <div className="text-[11px] font-bold text-slate-900 line-clamp-1 leading-tight">
                {b.title}
              </div>
              <div className="text-[10px] text-slate-500 line-clamp-2">
                {b.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Topics & Learning Modules */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Middle School STEM Curriculum
            </h2>
            <p className="text-xs text-slate-500">
              Interactive diagnostic question sets for Grades 8 & 9
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOPIC_METADATA.map((topic) => (
            <div
              key={topic.id}
              className="p-6 rounded-2xl border border-slate-200/80 bg-white hover:border-indigo-300 hover:shadow-sm transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                  {iconMap[topic.icon] || <Compass className="w-5 h-5 text-indigo-600" />}
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span>{topic.subject}</span>
                    <span aria-hidden="true">·</span>
                    <span>{topic.grades.join(' & ')}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mt-0.5">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {topic.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={() => startLearningSession(topic.id)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100/80 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Practice Topic (+300 XP)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
