import React, { useState } from 'react';
import { useLearning } from '../context/LearningContext';
import { CheckCircle2, XCircle, ArrowRight, Sparkles, ShieldCheck, BarChart2, Target } from 'lucide-react';

export const FollowUpScreen: React.FC = () => {
  const {
    followUpQuestion,
    followUpSubmission,
    submitFollowUpAnswer,
    proceedToNextQuestion,
    setStage,
    currentQuestionIndex,
    filteredQuestions,
  } = useLearning();

  const [selectedOptionId, setSelectedOptionId] = useState<string>('');
  const [validationError, setValidationError] = useState<string | null>(null);

  if (!followUpQuestion) {
    return (
      <div className="text-center p-12 space-y-4">
        <p className="text-sm text-slate-600">No follow-up challenge available.</p>
        <button
          onClick={() => setStage('diagnostic')}
          className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-xl"
        >
          Return to Question
        </button>
      </div>
    );
  }

  const isSubmitted = Boolean(followUpSubmission);
  const isCorrect = followUpSubmission?.isCorrect;
  const isAi = followUpQuestion.source === 'gemini';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOptionId) {
      setValidationError('Please select an option before submitting your answer.');
      return;
    }
    setValidationError(null);
    submitFollowUpAnswer(selectedOptionId);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-indigo-700">Adaptive Transfer Challenge</span>
          <span aria-hidden="true">·</span>
          <span>Targeting Same Learning Objective</span>
        </div>

        {/* Source Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-slate-200/90 text-slate-700 text-xs font-medium shadow-2xs">
          {isAi ? (
            <>
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>AI-Generated Follow-Up</span>
            </>
          ) : (
            <>
              <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
              <span>Curriculum Paired Follow-Up</span>
            </>
          )}
        </div>
      </div>

      {/* Question Card */}
      <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white shadow-xs space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 border border-indigo-200/80 px-2.5 py-0.5 rounded-md">
              Concept Transfer Test
            </span>
            <span className="text-xs text-slate-500 font-medium truncate">
              {followUpQuestion.learningObjective}
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {followUpQuestion.questionText}
          </h2>

          {followUpQuestion.contextOrEquation && (
            <div className="p-3.5 rounded-xl bg-slate-900 text-indigo-200 font-mono text-xs sm:text-sm tabular-nums border border-slate-800 shadow-inner">
              {followUpQuestion.contextOrEquation}
            </div>
          )}
        </div>

        {/* Options */}
        <div className="space-y-2.5 pt-2 border-t border-slate-100">
          <label id="followup-options-label" className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Select the Correct Answer
          </label>

          <div role="radiogroup" aria-labelledby="followup-options-label" className="space-y-2">
            {followUpQuestion.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              const isTargetCorrect = opt.id === followUpQuestion.correctAnswerId;

              let cardStyle = 'border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700';
              if (!isSubmitted && isSelected) {
                cardStyle = 'border-indigo-600 bg-indigo-50/60 text-slate-900 shadow-xs ring-1 ring-indigo-500/20';
              } else if (isSubmitted) {
                if (isTargetCorrect) {
                  cardStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium';
                } else if (isSelected && !isTargetCorrect) {
                  cardStyle = 'border-rose-400 bg-rose-50 text-rose-950';
                } else {
                  cardStyle = 'border-slate-200 bg-slate-50/50 text-slate-400';
                }
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  aria-label={`Option ${opt.id}: ${opt.text}`}
                  disabled={isSubmitted}
                  onClick={() => {
                    setSelectedOptionId(opt.id);
                    setValidationError(null);
                  }}
                  className={`w-full p-4 rounded-2xl border text-left text-sm transition-all flex items-start gap-3.5 focus-visible:outline-indigo-600 ${cardStyle}`}
                >
                  <div
                    aria-hidden="true"
                    className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 font-mono ${
                      !isSubmitted && isSelected
                        ? 'bg-indigo-600 text-white'
                        : isSubmitted && isTargetCorrect
                        ? 'bg-emerald-600 text-white'
                        : isSubmitted && isSelected
                        ? 'bg-rose-600 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {opt.id}
                  </div>
                  <span className="pt-0.5 leading-relaxed font-medium">{opt.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        {validationError && (
          <div
            role="alert"
            aria-live="assertive"
            className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium"
          >
            {validationError}
          </div>
        )}

        {/* Submit or Post-Submission Feedback */}
        {!isSubmitted ? (
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              onClick={handleSubmit}
              aria-label="Submit answer to follow-up transfer challenge"
              className="px-6 py-2.5 text-xs font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-xs transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
            >
              <span>Submit Answer (+120 XP)</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        ) : (
          <div className="pt-4 border-t border-slate-100 space-y-4 animate-in fade-in">
            {/* Outcome banner */}
            <div
              role="status"
              aria-live="polite"
              className={`p-4 rounded-2xl border flex items-center gap-3.5 ${
                isCorrect
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-950'
                  : 'border-amber-200 bg-amber-50 text-amber-950'
              }`}
            >
              {isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />
              ) : (
                <XCircle className="w-5 h-5 text-amber-600 shrink-0" aria-hidden="true" />
              )}
              <div className="text-xs">
                <span className="font-bold">
                  {isCorrect
                    ? 'Concept Mastered!'
                    : 'Not quite yet — review the explanation below.'}
                </span>{' '}
                <span>
                  {isCorrect
                    ? 'You successfully transferred your understanding to a new scenario without falling for the misconception!'
                    : 'The correct answer is Option ' + followUpQuestion.correctAnswerId + '.'}
                </span>
              </div>
            </div>

            {/* Explanation */}
            <div
              aria-label="Follow-up challenge explanation"
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-xs text-slate-700"
            >
              <div className="font-bold text-slate-900">Why this is correct:</div>
              <p className="leading-relaxed">{followUpQuestion.explanation}</p>
            </div>

            {/* Next step buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                onClick={() => setStage('progress')}
                aria-label="View overall learning progress and mastery metrics"
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-indigo-600"
              >
                <BarChart2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>View Progress</span>
              </button>

              <button
                onClick={proceedToNextQuestion}
                aria-label="Proceed to the next question in topic or finish"
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
              >
                <span>
                  {currentQuestionIndex + 1 < filteredQuestions.length
                    ? 'Next Question in Topic'
                    : 'Complete Topic & View Mastery'}
                </span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
