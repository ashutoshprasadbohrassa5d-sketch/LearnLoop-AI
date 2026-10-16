import React from 'react';
import { LearningProvider, useLearning } from './context/LearningContext';
import { Navbar } from './components/Navbar';
import { HomeDashboard } from './components/HomeDashboard';
import { TopicSetup } from './components/TopicSetup';
import { DiagnosticScreen } from './components/DiagnosticScreen';
import { FeedbackScreen } from './components/FeedbackScreen';
import { FollowUpScreen } from './components/FollowUpScreen';
import { ProgressDashboard } from './components/ProgressDashboard';
import { LeaderboardView } from './components/LeaderboardView';
import { JudgeDemoModal } from './components/JudgeDemoModal';
import { Award, X, Sparkles, Mail } from 'lucide-react';

const BadgeCelebrationToast: React.FC = () => {
  const { recentBadgeEarned, dismissBadgeCelebration, setStage } = useLearning();

  if (!recentBadgeEarned) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-white rounded-2xl border-2 border-indigo-500 shadow-xl p-4 flex items-start gap-3.5 animate-in slide-in-from-bottom-5 duration-300">
      <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-800 shrink-0">
        <Award className="w-6 h-6" />
      </div>
      <div className="space-y-1 flex-1">
        <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>New Badge Unlocked!</span>
        </div>
        <div className="text-sm font-extrabold text-slate-900 leading-tight">
          {recentBadgeEarned.title}
        </div>
        <div className="text-xs text-slate-600 line-clamp-2">
          {recentBadgeEarned.description}
        </div>
        <button
          onClick={() => {
            dismissBadgeCelebration();
            setStage('progress');
          }}
          className="text-xs font-semibold text-indigo-700 hover:text-indigo-800 underline pt-1 block"
        >
          View all badges →
        </button>
      </div>
      <button
        onClick={dismissBadgeCelebration}
        className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

const MainContent: React.FC = () => {
  const { stage } = useLearning();

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {stage === 'home' && <HomeDashboard />}
      {stage === 'topics' && <TopicSetup />}
      {stage === 'diagnostic' && <DiagnosticScreen />}
      {stage === 'feedback' && <FeedbackScreen />}
      {stage === 'followup' && <FollowUpScreen />}
      {stage === 'progress' && <ProgressDashboard />}
      {stage === 'leaderboard' && <LeaderboardView />}
      <JudgeDemoModal />
      <BadgeCelebrationToast />
    </main>
  );
};

export default function App() {
  return (
    <LearningProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
        <Navbar />
        <div className="flex-1">
          <MainContent />
        </div>
        <footer className="border-t border-slate-200 bg-white py-8 mt-12" role="contentinfo">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
              <span className="font-bold text-slate-800 text-sm tracking-tight">LearnLoop AI</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span>Understand your mistakes. Master the concept.</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span className="text-slate-400">Grade 8 & 9 Middle School STEM</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 bg-slate-50 border border-slate-200/90 rounded-2xl px-4 py-2.5 text-center sm:text-right shadow-2xs">
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="text-slate-500 font-medium">Contact & Possession:</span>
                <span className="font-bold text-slate-900">Ashutosh Prasad Bohara</span>
              </div>
              <span className="hidden sm:inline text-slate-300" aria-hidden="true">|</span>
              <a
                href="mailto:ashutoshprasadbohra.ssa.5d@gmail.com"
                className="inline-flex items-center gap-1.5 font-semibold text-indigo-700 hover:text-indigo-900 underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                aria-label="Email Ashutosh Prasad Bohara at ashutoshprasadbohra.ssa.5d@gmail.com"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
                <span>ashutoshprasadbohra.ssa.5d@gmail.com</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </LearningProvider>
  );
}
