import React, { useState } from 'react';
import { useLearning } from '../context/LearningContext';
import { ArrowRight, Sparkles, Loader2, Lightbulb } from 'lucide-react';
import { ConceptVisualizer } from './ConceptVisualizer';

export const DiagnosticScreen: React.FC = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    filteredQuestions,
    submitDiagnosticAnswer,
    isLoading,
    loadingMessage,
    error,
    setIsJudgeDemoModalOpen,
  } = useLearning();

  const [inputMode, setInputMode] = useState<'multiple_choice' | 'typed'>('multiple_choice');
  const [selectedOptionId, setSelectedOptionId] = useState<string>('');
  const [typedAnswer, setTypedAnswer] = useState<string>('');
  const [studentReasoning, setStudentReasoning] = useState<string>('');
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    let answerText = '';
    if (inputMode === 'multiple_choice') {
      if (!selectedOptionId) {
        setValidationError('Please select one of the answer options before submitting.');
        return;
      }
      const opt = currentQuestion.options.find((o) => o.id === selectedOptionId);
      answerText = opt ? opt.text : selectedOptionId;
    } else {
      if (!typedAnswer.trim()) {
        setValidationError('Please enter your answer in the field below.');
        return;
      }
      answerText = typedAnswer.trim();
    }

    await submitDiagnosticAnswer(
      answerText,
      studentReasoning,
      selectedOptionId || undefined,
      currentQuestion
    );
  };

  const addSentenceStarter = (starter: string) => {
    setStudentReasoning((prev) => (prev ? `${prev} ${starter}` : starter));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Question Header & Context */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-700">{currentQuestion.grade}</span>
          <span aria-hidden="true">·</span>
          <span>{currentQuestion.subject}</span>
          <span aria-hidden="true">·</span>
          <span className="text-indigo-900 font-semibold">{currentQuestion.topicTitle}</span>
        </div>
        <div className="font-mono tabular-nums text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
          Question {currentQuestionIndex + 1} of {filteredQuestions.length}
        </div>
      </div>

      {/* Main Question Card */}
      <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white shadow-xs space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 border border-indigo-200/80 px-2.5 py-0.5 rounded-md">
              Diagnostic Question
            </span>
            <span className="text-xs text-slate-500 font-medium truncate">
              {currentQuestion.learningObjective}
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {currentQuestion.questionText}
          </h2>

          {currentQuestion.contextOrEquation && (
            <div className="p-3.5 rounded-xl bg-slate-900 text-indigo-200 font-mono text-xs sm:text-sm tabular-nums border border-slate-800 shadow-inner">
              {currentQuestion.contextOrEquation}
            </div>
          )}

          {/* Interactive STEM Concept Graphic */}
          <ConceptVisualizer question={currentQuestion} />
        </div>

        {/* Input Modality Switcher */}
        <div className="space-y-3 pt-3 border-t border-slate-100" id="answer-input-container">
          <div className="flex items-center justify-between">
            <span id="answer-mode-label" className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Select or Type Your Answer
            </span>
            <div
              role="tablist"
              aria-labelledby="answer-mode-label"
              className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl text-xs font-medium"
            >
              <button
                type="button"
                role="tab"
                id="tab-multiple-choice"
                aria-selected={inputMode === 'multiple_choice'}
                aria-controls="panel-multiple-choice"
                onClick={() => setInputMode('multiple_choice')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  inputMode === 'multiple_choice'
                    ? 'bg-white text-indigo-950 font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Multiple Choice
              </button>
              <button
                type="button"
                role="tab"
                id="tab-typed"
                aria-selected={inputMode === 'typed'}
                aria-controls="panel-typed"
                onClick={() => setInputMode('typed')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  inputMode === 'typed'
                    ? 'bg-white text-indigo-950 font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Free Text Input
              </button>
            </div>
          </div>

          {inputMode === 'multiple_choice' ? (
            <div
              id="panel-multiple-choice"
              role="radiogroup"
              aria-labelledby="answer-mode-label"
              className="space-y-2.5"
            >
              {currentQuestion.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    aria-label={`Option ${opt.id}: ${opt.text}`}
                    onClick={() => {
                      setSelectedOptionId(opt.id);
                      setValidationError(null);
                    }}
                    className={`w-full p-4 rounded-2xl border text-left text-sm transition-all flex items-start gap-3.5 focus-visible:outline-indigo-600 ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/60 text-slate-900 shadow-xs ring-1 ring-indigo-500/20'
                        : 'border-slate-200/90 bg-white hover:bg-slate-50/80 text-slate-700'
                    }`}
                  >
                    <div
                      aria-hidden="true"
                      className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 font-mono transition-colors ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-xs'
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
          ) : (
            <div id="panel-typed" role="region" aria-labelledby="answer-mode-label" className="space-y-2">
              <label htmlFor="typed-answer-input" className="sr-only">
                Enter your exact solution
              </label>
              <input
                id="typed-answer-input"
                type="text"
                value={typedAnswer}
                aria-label="Enter your exact solution, equation, or value"
                aria-invalid={Boolean(validationError && !typedAnswer.trim())}
                aria-describedby={validationError ? "validation-error-msg" : undefined}
                onChange={(e) => {
                  setTypedAnswer(e.target.value);
                  setValidationError(null);
                }}
                placeholder="Type your exact solution (e.g., x = 7, 2H₂ + O₂ → 2H₂O, or 0 N)..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 font-mono"
              />
            </div>
          )}
        </div>

        {/* Explain Your Reasoning (Key Diagnostic Differentiator) */}
        <div className="space-y-2.5 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <label
              htmlFor="student-reasoning-input"
              className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5"
            >
              <span>Explain Your Reasoning</span>
              <span className="text-[11px] font-normal text-slate-500 lowercase">
                (evaluated for cognitive misconceptions)
              </span>
            </label>
          </div>

          <p id="reasoning-helper-text" className="text-xs text-slate-500">
            Explain step-by-step why you chose this answer. Gemini diagnoses your logic to catch misconceptions before they turn into bad habits.
          </p>

          <textarea
            id="student-reasoning-input"
            rows={3}
            value={studentReasoning}
            aria-label="Explain your step-by-step reasoning"
            aria-describedby="reasoning-helper-text"
            onChange={(e) => setStudentReasoning(e.target.value)}
            placeholder="I chose this because... / My first step was... / I balanced the atoms by..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 leading-relaxed"
          />

          {/* Quick Sentence Starters */}
          <div
            role="group"
            aria-label="Reasoning sentence starters"
            className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500"
          >
            <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
              <Lightbulb className="w-3 h-3 text-amber-500" aria-hidden="true" />
              <span>Prompt starters:</span>
            </span>
            <button
              type="button"
              aria-label="Insert starter: To balance the atoms without changing subscripts"
              onClick={() => addSentenceStarter('To balance the RHS and LHS atoms without changing subscripts,')}
              className="px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-[11px]"
            >
              "To balance the atoms without changing subscripts..."
            </button>
            <button
              type="button"
              aria-label="Insert starter: Add 7 to both sides, then divide by 3"
              onClick={() => addSentenceStarter('Add 7 to both sides, then divide by 3.')}
              className="px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-[11px]"
            >
              "Add 7 to both sides, then divide by 3"
            </button>
            <button
              type="button"
              aria-label="Insert starter: Because in a frictionless vacuum"
              onClick={() => addSentenceStarter('Because without unbalanced force in a vacuum,')}
              className="px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-[11px]"
            >
              "Because in a frictionless vacuum..."
            </button>
          </div>
        </div>

        {/* Validation or Error Message */}
        {validationError && (
          <div
            id="validation-error-msg"
            role="alert"
            aria-live="assertive"
            className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium"
          >
            {validationError}
          </div>
        )}

        {/* Action Row */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            aria-label="Open Judge Demo Presets dialog to test verified cases"
            onClick={() => setIsJudgeDemoModalOpen(true)}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100/80 rounded-xl transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-indigo-600"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>Judge Demo Presets</span>
          </button>

          <button
            type="button"
            disabled={isLoading}
            aria-busy={isLoading}
            aria-label="Submit answer and reasoning for AI diagnostic evaluation"
            onClick={handleSubmit}
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                <span>Evaluating Thinking...</span>
              </>
            ) : (
              <>
                <span>Submit Answer & Reasoning</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Loading Overlay State */}
      {isLoading && (
        <div
          role="status"
          aria-live="polite"
          className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950 text-xs flex items-center gap-3 animate-in fade-in"
        >
          <Loader2 className="w-4 h-4 text-indigo-600 animate-spin shrink-0" aria-hidden="true" />
          <span className="font-medium">{loadingMessage}</span>
        </div>
      )}
    </div>
  );
};
