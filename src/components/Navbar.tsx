import React from 'react';
import { useLearning } from '../context/LearningContext';
import { LearnLoopLogo } from './LearnLoopLogo';
import { Sparkles, BarChart2, BookOpen, Home, Play, Trophy } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { stage, setStage, startLearningSession, setIsJudgeDemoModalOpen, progress } = useLearning();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(15,23,42,0.03)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Distinctive Brand Mark */}
        <button
          onClick={() => setStage('home')}
          className="group transition-opacity hover:opacity-90 whitespace-nowrap shrink-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl"
        >
          <LearnLoopLogo size="md" />
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-slate-50/80 p-1 rounded-xl border border-slate-200/60">
          <button
            onClick={() => setStage('home')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap shrink-0 ${
              stage === 'home'
                ? 'bg-white text-indigo-900 font-semibold shadow-xs border border-slate-200/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
            }`}
          >
            <Home className="w-4 h-4 text-indigo-600" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setStage('topics')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap shrink-0 ${
              stage === 'topics'
                ? 'bg-white text-indigo-900 font-semibold shadow-xs border border-slate-200/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
            }`}
          >
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span>Curriculum</span>
          </button>
          <button
            onClick={() => setStage('progress')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap shrink-0 ${
              stage === 'progress'
                ? 'bg-white text-indigo-900 font-semibold shadow-xs border border-slate-200/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
            }`}
          >
            <BarChart2 className="w-4 h-4 text-indigo-600" />
            <span>Progress ({progress.totalAnsweredSubmissions})</span>
          </button>
          <button
            onClick={() => setStage('leaderboard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap shrink-0 ${
              stage === 'leaderboard'
                ? 'bg-white text-indigo-900 font-semibold shadow-xs border border-slate-200/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
            }`}
          >
            <Trophy className="w-4 h-4 text-indigo-600" />
            <span>Leaderboard</span>
          </button>
          <button
            onClick={() => setIsJudgeDemoModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-indigo-700 hover:text-indigo-900 hover:bg-indigo-50/60 transition-colors whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="font-semibold">Judge Demo</span>
          </button>
        </nav>

        {/* Zone 3: XP Counter & Primary CTA */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => setStage('leaderboard')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50/80 border border-indigo-200/80 text-indigo-950 text-xs font-semibold hover:bg-indigo-100/80 transition-colors shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            <span className="font-mono tabular-nums">{progress.points} XP</span>
          </button>
          <button
            onClick={() => setIsJudgeDemoModalOpen(true)}
            className="md:hidden px-2.5 py-1.5 text-xs font-semibold text-indigo-700 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors"
            title="Judge Quick Demo"
          >
            Demo
          </button>
          <button
            onClick={() => startLearningSession()}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs transition-all whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Start Learning</span>
          </button>
        </div>
      </div>
    </header>
  );
};
