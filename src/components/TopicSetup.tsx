import React from 'react';
import { useLearning } from '../context/LearningContext';
import { Grade, Subject } from '../types/learning';
import { TOPIC_METADATA } from '../data/questionBank';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';

export const TopicSetup: React.FC = () => {
  const {
    grade,
    setGrade,
    subject,
    setSubject,
    activeTopicId,
    setActiveTopicId,
    startLearningSession,
  } = useLearning();

  const handleStart = (topicId: string) => {
    setActiveTopicId(topicId);
    startLearningSession(topicId);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700">
          <BookOpen className="w-4 h-4" />
          <span>Curriculum Modules</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Select Grade, Subject & Topic
        </h1>
        <p className="text-sm text-slate-600">
          Choose your learning pathway. Every module tests key learning objectives and checks whether your conceptual reasoning holds up.
        </p>
      </div>

      {/* Selectors Container */}
      <div className="p-6 rounded-3xl border border-slate-200/90 bg-white shadow-xs space-y-6">
        {/* Grade Selector */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Target Grade Level
          </label>
          <div className="grid grid-cols-2 gap-3">
            {(['Grade 8', 'Grade 9'] as Grade[]).map((g) => (
              <button
                key={g}
                onClick={() => setGrade(g)}
                className={`py-3 px-4 rounded-2xl text-sm font-semibold border transition-all text-center ${
                  grade === g
                    ? 'border-indigo-600 bg-indigo-50/70 text-indigo-950 shadow-xs'
                    : 'border-slate-200/90 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Subject Selector */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Subject Discipline
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
            {(['Biology', 'Physics', 'Chemistry', 'Mathematics', 'General Knowledge'] as Subject[]).map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSubject(s);
                  // Auto-select first matching topic for newly selected subject
                  const firstMatch = TOPIC_METADATA.find(t => t.subject === s);
                  if (firstMatch) {
                    setActiveTopicId(firstMatch.id);
                  }
                }}
                className={`py-2.5 px-3 rounded-2xl text-xs sm:text-sm font-semibold border transition-all text-center ${
                  subject === s
                    ? 'border-indigo-600 bg-indigo-50/80 text-indigo-950 font-bold shadow-xs ring-1 ring-indigo-500/30'
                    : 'border-slate-200/90 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Topic List matching selection */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Layers className="w-4 h-4 text-indigo-600" />
          <span>Curriculum Modules for {grade} {subject}</span>
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {(
            TOPIC_METADATA.filter(t => t.subject === subject || (subject === 'Science' && ['Science', 'Physics', 'Chemistry', 'Biology'].includes(t.subject))).length > 0
              ? TOPIC_METADATA.filter(t => t.subject === subject || (subject === 'Science' && ['Science', 'Physics', 'Chemistry', 'Biology'].includes(t.subject)))
              : TOPIC_METADATA
          ).map((topic) => {
            const isSelected = activeTopicId === topic.id;
            const matchesSubject = topic.subject === subject;

            return (
              <div
                key={topic.id}
                className={`p-6 rounded-3xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-50/30 shadow-xs ring-1 ring-indigo-500/20'
                    : 'border-slate-200/90 bg-white hover:border-indigo-200'
                } ${!matchesSubject ? 'opacity-70' : ''}`}
              >
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span className="font-semibold text-indigo-900">{topic.subject}</span>
                    <span aria-hidden="true">·</span>
                    <span>{topic.grades.join(' & ')}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {topic.description}
                  </p>
                </div>

                <button
                  onClick={() => handleStart(topic.id)}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-xs transition-all whitespace-nowrap shrink-0 flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                >
                  <span>Begin Diagnostic</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
