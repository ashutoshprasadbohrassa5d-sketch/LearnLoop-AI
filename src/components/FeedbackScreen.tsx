import React from 'react';
import { useLearning } from '../context/LearningContext';
import { BUILT_IN_QUESTIONS } from '../data/questionBank';
import {
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Brain,
  Quote,
} from 'lucide-react';
import { ConceptVisualizer } from './ConceptVisualizer';

export const FeedbackScreen: React.FC = () => {
  const {
    currentQuestion,
    submission,
    analysis,
    followUpQuestion,
    setStage,
    retryCurrentAnalysis,
    isLoading,
    error,
  } = useLearning();

  if (!analysis || !submission) {
    return (
      <div className="text-center p-12 space-y-4">
        <p className="text-sm text-slate-600">No active submission found.</p>
        <button
          onClick={() => setStage('topics')}
          className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-xl"
        >
          Select a Topic
        </button>
      </div>
    );
  }

  const activeQuestion =
    BUILT_IN_QUESTIONS.find((q) => q.id === submission.questionId) || currentQuestion;

  const isCorrect = analysis.isCorrect;
  const isAiSource = analysis.source === 'gemini';

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Top Banner Status */}
      <div
        role="region"
        aria-label="Diagnostic evaluation summary"
        className={`p-6 rounded-3xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs ${
          isCorrect
            ? 'border-emerald-200 bg-emerald-50/70 text-emerald-950'
            : 'border-amber-200 bg-amber-50/70 text-amber-950'
        }`}
      >
        <div className="flex items-center gap-3.5">
          {isCorrect ? (
            <div
              aria-hidden="true"
              className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 shadow-xs"
            >
              <CheckCircle2 className="w-6 h-6" />
            </div>
          ) : (
            <div
              aria-hidden="true"
              className="w-11 h-11 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 shrink-0 shadow-xs"
            >
              <AlertCircle className="w-6 h-6" />
            </div>
          )}
          <div>
            <h2 className="text-lg font-bold leading-tight" aria-live="polite">
              {isCorrect ? 'Accurate Scientific & Mathematical Solution!' : 'Concept Needs Clarification'}
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-600 mt-0.5">
              <span>{activeQuestion.grade}</span>
              <span aria-hidden="true">·</span>
              <span>{activeQuestion.subject}</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-slate-800">{activeQuestion.topicTitle}</span>
            </div>
          </div>
        </div>

        {/* Source Badge */}
        <div
          role="status"
          aria-label={`Diagnostic analysis source: ${isAiSource ? 'AI Diagnostic via Gemini 3.8 Flash' : 'Curriculum Verified Fallback'}`}
          className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-xl bg-white/90 border border-slate-200/90 text-slate-700 shrink-0 shadow-2xs"
        >
          {isAiSource ? (
            <>
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
              <span className="font-semibold text-indigo-900">AI Diagnostic (Gemini 3.8 Flash)</span>
            </>
          ) : (
            <>
              <ShieldCheck className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
              <span>Curriculum Verified Fallback</span>
            </>
          )}
        </div>
      </div>

      {/* Error alert if fallback was triggered due to network timeout */}
      {error && (
        <div
          role="alert"
          aria-live="polite"
          className="p-4 rounded-2xl border border-amber-300 bg-amber-50 text-xs text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        >
          <p className="leading-relaxed">{error}</p>
          <button
            disabled={isLoading}
            aria-label="Retry AI analysis with Gemini"
            onClick={() => retryCurrentAnalysis()}
            className="px-3.5 py-1.5 text-xs font-bold text-amber-950 bg-amber-200/90 hover:bg-amber-300 rounded-xl transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-2xs focus-visible:outline-indigo-600"
          >
            <RotateCcw className="w-3 h-3" aria-hidden="true" />
            <span>Retry AI Analysis</span>
          </button>
        </div>
      )}

      {/* Side-by-Side Response Review */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Student's Submission */}
        <section
          aria-label="Your submitted response and reasoning"
          className="p-5 rounded-2xl border border-slate-200/90 bg-white space-y-2 shadow-xs"
        >
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Your Submitted Response
          </div>
          <div className="text-sm font-bold text-slate-900" aria-label={`Submitted answer: ${submission.submittedAnswerText}`}>
            {submission.submittedAnswerText}
          </div>
          {submission.studentReasoning ? (
            <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 space-y-1">
              <span className="font-semibold text-slate-800">Your Reasoning: </span>
              <p
                className="italic text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100"
                aria-label={`Student reasoning: ${submission.studentReasoning}`}
              >
                "{submission.studentReasoning}"
              </p>
            </div>
          ) : (
            <div className="pt-2 border-t border-slate-100 text-xs text-slate-400 italic">
              No reasoning explanation provided.
            </div>
          )}
        </section>

        {/* Verified Target Answer */}
        <section
          aria-label="Verified standard curriculum solution"
          className="p-5 rounded-2xl border border-slate-200/90 bg-white space-y-2 shadow-xs"
        >
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Verified Standard Solution
          </div>
          <div className="text-sm font-bold text-emerald-800" aria-label={`Correct solution: ${activeQuestion.correctAnswerText}`}>
            {activeQuestion.correctAnswerText}
          </div>
          <div className="pt-2 border-t border-slate-100 text-xs text-slate-600">
            <span className="font-semibold text-slate-800">Learning Objective: </span>
            <span>{activeQuestion.learningObjective}</span>
          </div>
        </section>
      </div>

      {/* Interactive STEM Concept Graphic */}
      <ConceptVisualizer question={activeQuestion} />

      {/* 4-Dimension Multi-Layer Verification Breakdown */}
      <section
        role="region"
        aria-label="Multi-Layer Diagnostic Breakdown"
        className="grid grid-cols-2 sm:grid-cols-4 gap-3"
      >
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            1. Answer Correctness
          </div>
          <div className="text-xs font-bold flex items-center gap-1.5">
            {isCorrect ? (
              <span className="text-emerald-700">✓ Verified Correct</span>
            ) : (
              <span className="text-amber-800">✗ Incorrect Choice</span>
            )}
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            2. Reasoning Quality
          </div>
          <div className="text-xs font-bold text-slate-800">
            {analysis.reasoningQuality === 'sound'
              ? 'Sound Scientific Logic'
              : analysis.reasoningQuality === 'flawed'
              ? 'Flawed Premise / Step'
              : analysis.reasoningQuality === 'partially_sound'
              ? 'Partially Sound'
              : submission.studentReasoning && submission.studentReasoning.length >= 8
              ? 'Explored Reasoning'
              : 'Not Provided'}
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            3. Misconception Status
          </div>
          <div className="text-xs font-bold">
            {analysis.possibleMisconception ? (
              <span className="text-amber-700">⚠ Specific Fallacy Found</span>
            ) : isCorrect ? (
              <span className="text-emerald-700">✓ No Misconception</span>
            ) : (
              <span className="text-slate-600">⚪ Insufficient Evidence</span>
            )}
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            4. Diagnostic Confidence
          </div>
          <div className="text-xs font-bold text-indigo-900">
            {analysis.confidence === 'insufficient_evidence'
              ? 'Insufficient Evidence'
              : analysis.confidence.toUpperCase()}
          </div>
        </div>
      </section>

      {/* Identified Misconception Analysis Card */}
      <section
        role="region"
        aria-label="Cognitive Misconception Diagnosis Details"
        className="p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white shadow-xs space-y-5"
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Brain className="w-4 h-4 text-indigo-600" aria-hidden="true" />
            <span>Cognitive Misconception Diagnosis</span>
          </h3>

          {/* Confidence Qualification */}
          <div
            className="text-xs font-medium text-slate-500"
            aria-label={`Diagnostic Confidence: ${
              analysis.confidence === 'insufficient_evidence'
                ? 'Insufficient Evidence'
                : analysis.confidence
            }`}
          >
            <span>Diagnostic Confidence: </span>
            <span
              className={`font-semibold ${
                analysis.confidence === 'high'
                  ? 'text-indigo-700'
                  : analysis.confidence === 'medium'
                  ? 'text-amber-700'
                  : 'text-slate-600'
              }`}
            >
              {analysis.confidence === 'insufficient_evidence'
                ? 'Insufficient Evidence'
                : analysis.confidence.toUpperCase()}
            </span>
          </div>
        </div>

        {analysis.possibleMisconception ? (
          <div className="space-y-3">
            <div
              role="alert"
              className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2"
            >
              <div className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                <span>Possible Misconception: {analysis.possibleMisconception}</span>
              </div>
              {analysis.evidenceQuote && (
                <div className="text-xs text-amber-900 pt-1 border-t border-amber-200/60">
                  <span className="font-semibold text-amber-950">Evidence in your response: </span>
                  <span className="italic bg-amber-100/90 px-1.5 py-0.5 rounded-md font-mono text-[11px]">
                    "{analysis.evidenceQuote}"
                  </span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div
            role="status"
            className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 leading-relaxed flex items-center gap-2.5"
          >
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                <span>
                  No misconceptions detected. Your reasoning accurately aligns with the scientific or mathematical principle.
                </span>
              </>
            ) : (
              <>
                <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                <span>
                  Your answer was incorrect, but the reasoning provided was insufficient to assert a specific cognitive misconception with confidence. Review the conceptual explanation below to see the accurate model.
                </span>
              </>
            )}
          </div>
        )}

        {/* Conceptual Explanation */}
        <div className="space-y-2 pt-1" aria-label="Step-by-step conceptual explanation">
          <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Step-by-Step Conceptual Explanation
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            {analysis.conceptualExplanation}
          </p>
        </div>

        {/* Next Learning Step */}
        <div
          aria-label="Recommended next learning step"
          className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-950 space-y-1"
        >
          <div className="font-bold text-indigo-900 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>Recommended Next Learning Step:</span>
          </div>
          <p className="leading-relaxed text-indigo-900 font-medium">{analysis.nextLearningStep}</p>
        </div>
      </section>

      {/* Action Navigation */}
      <div className="p-6 rounded-3xl border border-slate-200/90 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
        <button
          onClick={() => retryCurrentAnalysis()}
          disabled={isLoading}
          aria-label="Re-analyze submitted reasoning"
          className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-indigo-600"
        >
          <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Re-Analyze Reasoning</span>
        </button>

        <button
          onClick={() => setStage('followup')}
          aria-label="Attempt follow-up concept transfer challenge"
          className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
        >
          <span>Attempt Follow-Up Challenge</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
