import React from 'react';
import { useLearning } from '../context/LearningContext';
import { JUDGE_DEMO_PRESETS } from '../data/questionBank';
import { Sparkles, X, ArrowRight } from 'lucide-react';

export const JudgeDemoModal: React.FC = () => {
  const { isJudgeDemoModalOpen, setIsJudgeDemoModalOpen, loadJudgeDemoPreset, isLoading } = useLearning();

  if (!isJudgeDemoModalOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="judge-demo-modal-title"
      aria-describedby="judge-demo-modal-desc"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-indigo-50/80 via-white to-slate-50">
          <div className="flex items-center gap-2.5">
            <div
              aria-hidden="true"
              className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs"
            >
              <Sparkles className="w-5 h-5 text-indigo-100" />
            </div>
            <div>
              <h3 id="judge-demo-modal-title" className="text-base font-bold text-slate-900">
                Competition Judge Demo Presets
              </h3>
              <p id="judge-demo-modal-desc" className="text-xs text-slate-500">
                Select a verified scenario to test diagnostic accuracy and anti-cross-contamination.
              </p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close judge demo presets modal"
            onClick={() => setIsJudgeDemoModalOpen(false)}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors focus-visible:outline-indigo-600"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Presets List */}
        <div role="list" aria-label="Demo presets" className="p-6 space-y-3 max-h-[60vh] overflow-y-auto">
          {JUDGE_DEMO_PRESETS.map((preset) => (
            <div
              key={preset.id}
              role="listitem"
              className="p-4 rounded-2xl border border-slate-200/90 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span className="text-indigo-900 font-bold">{preset.grade}</span>
                  <span aria-hidden="true">·</span>
                  <span>{preset.subject}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {preset.title}
                </h4>
                <p className="text-xs text-slate-600 italic line-clamp-2">
                  {preset.studentReasoning ? `"${preset.studentReasoning}"` : '(Empty reasoning provided - tests honest uncertainty handling)'}
                </p>
              </div>

              <button
                type="button"
                disabled={isLoading}
                aria-label={`Load demo preset: ${preset.title}`}
                onClick={() => loadJudgeDemoPreset(preset)}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all whitespace-nowrap shrink-0 flex items-center justify-center gap-1.5 disabled:opacity-50 shadow-xs focus-visible:outline-indigo-600"
              >
                <span>Run Preset</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            aria-label="Close modal dialog"
            onClick={() => setIsJudgeDemoModalOpen(false)}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-xl transition-colors focus-visible:outline-indigo-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
