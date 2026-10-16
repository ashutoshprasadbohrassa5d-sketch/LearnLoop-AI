import React, { useState } from 'react';
import { STEMQuestion } from '../types/learning';
import { Play, RotateCcw, Sparkles, Scale, Atom, Compass, CheckCircle2 } from 'lucide-react';

interface ConceptVisualizerProps {
  question: STEMQuestion;
  mode?: 'interactive' | 'static';
}

export const ConceptVisualizer: React.FC<ConceptVisualizerProps> = ({ question }) => {
  const topicId = question.topicId;

  // State for Physics simulation
  const [isSimulatingPhysics, setIsSimulatingPhysics] = useState(false);
  // State for Math balance steps
  const [algebraStep, setAlgebraStep] = useState<number>(0);
  // State for Chemistry atom counts
  const [chemView, setChemView] = useState<'equation' | 'atoms'>('equation');

  // =========================================================================
  // 1. PHYSICS / FORCE AND MOTION VISUALIZER
  // =========================================================================
  if (topicId === 'force_and_motion') {
    return (
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 p-4 text-white overflow-hidden shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-indigo-400" />
            <span className="font-semibold tracking-wide text-slate-200">
              Interactive Physics Diagram: Newton's First Law
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsSimulatingPhysics(!isSimulatingPhysics)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-400/30 text-[11px] font-medium transition-colors"
          >
            {isSimulatingPhysics ? <RotateCcw className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            <span>{isSimulatingPhysics ? 'Reset Vacuum State' : 'Simulate Coasting in Vacuum'}</span>
          </button>
        </div>

        {/* Space Vacuum Simulation Canvas */}
        <div className="relative h-36 w-full flex items-center justify-center my-3 bg-slate-950/80 rounded-xl border border-slate-800/80 overflow-hidden">
          {/* Distant Starfield Background */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-4 left-10 w-1 h-1 bg-white rounded-full animate-ping" />
            <div className="absolute top-12 left-1/3 w-1.5 h-1.5 bg-indigo-200 rounded-full" />
            <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-sky-200 rounded-full" />
            <div className="absolute top-6 right-16 w-0.5 h-0.5 bg-white rounded-full" />
            <div className="absolute bottom-4 left-1/4 w-1 h-1 bg-slate-400 rounded-full" />
          </div>

          {/* Drifting Spacecraft / Object */}
          <div
            className={`flex flex-col items-center transition-transform duration-1000 ${
              isSimulatingPhysics ? 'translate-x-16 sm:translate-x-28' : 'translate-x-0'
            }`}
          >
            {/* SVG Probe */}
            <svg className="w-24 h-14 drop-shadow-md" viewBox="0 0 100 50" fill="none">
              {/* Solar Panels */}
              <rect x="5" y="18" width="22" height="14" rx="2" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1" />
              <rect x="73" y="18" width="22" height="14" rx="2" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1" />
              <line x1="27" y1="25" x2="35" y2="25" stroke="#94a3b8" strokeWidth="2" />
              <line x1="65" y1="25" x2="73" y2="25" stroke="#94a3b8" strokeWidth="2" />

              {/* Main Body */}
              <rect x="35" y="12" width="30" height="26" rx="4" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" />
              {/* Antenna */}
              <path d="M50 12 L50 4 M44 4 L56 4" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              {/* Core Sensor Lens */}
              <circle cx="50" cy="25" r="5" fill="#0f172a" stroke="#818cf8" strokeWidth="1.5" />

              {/* Thruster Nozzle (Inactive / Cold) */}
              <polygon points="35,20 28,17 28,33 35,30" fill="#64748b" />
            </svg>

            {/* Velocity Vector Arrow */}
            <div className="flex items-center gap-1.5 mt-1 text-[11px] font-mono text-sky-300">
              <span>Velocity: 20,000 km/h</span>
              <svg className="w-12 h-3" viewBox="0 0 48 12">
                <line x1="0" y1="6" x2="42" y2="6" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />
                <polygon points="42,2 48,6 42,10" fill="#38bdf8" />
              </svg>
            </div>
          </div>

          {/* Status Indicator Overlays */}
          <div className="absolute top-2 left-2 flex flex-col gap-1 text-[10px] font-mono">
            <span className="text-slate-400">Environment: Vacuum (Zero Friction)</span>
            <span className="text-amber-300 font-semibold">Engine Thrust: 0 N (Inactive)</span>
          </div>

          <div className="absolute top-2 right-2 text-right text-[10px] font-mono">
            <span className="text-emerald-400 font-bold">Net Force (F_net): 0 N</span>
            <div className="text-slate-400">Acceleration: 0 m/s²</div>
          </div>
        </div>

        {/* Physics Key Concept Callout */}
        <div className="p-3 rounded-xl bg-slate-850/80 border border-slate-750 text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
          <div>
            <strong className="text-white">Newton's First Law (Law of Inertia):</strong> An object in motion stays in motion at a constant velocity unless acted upon by an unbalanced external force. Because space has no friction or air resistance, zero continuous forward thrust is required to sustain speed.
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. MATHEMATICS / BASIC ALGEBRA VISUALIZER
  // =========================================================================
  if (topicId === 'basic_algebra') {
    return (
      <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
          <div className="flex items-center gap-2 text-slate-800">
            <Scale className="w-4 h-4 text-indigo-600" />
            <span className="font-semibold tracking-wide">
              Algebra Equation Balance: Inverse Operations
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setAlgebraStep(0)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${
                algebraStep === 0 ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Original Equation
            </button>
            <button
              type="button"
              onClick={() => setAlgebraStep(1)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${
                algebraStep === 1 ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Step 1 (+7)
            </button>
            <button
              type="button"
              onClick={() => setAlgebraStep(2)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${
                algebraStep === 2 ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Step 2 (÷3)
            </button>
          </div>
        </div>

        {/* Step-by-Step Balance Scale & Equation Transformation */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col items-center justify-center gap-3">
          <div className="font-mono text-base sm:text-lg font-bold text-slate-900 tracking-wider">
            {algebraStep === 0 && (
              <span className="text-slate-900">
                <span className="text-indigo-600">3x</span> - 7 = <span className="text-emerald-700">14</span>
              </span>
            )}
            {algebraStep === 1 && (
              <span className="text-slate-900">
                <span className="text-indigo-600">3x</span> - 7 <span className="text-amber-600 font-extrabold">+ 7</span> = 14 <span className="text-amber-600 font-extrabold">+ 7</span>
                <span className="block text-center text-sm font-semibold text-slate-600 mt-1">
                  → <span className="text-indigo-600">3x</span> = <span className="text-emerald-700 font-bold">21</span>
                </span>
              </span>
            )}
            {algebraStep === 2 && (
              <span className="text-slate-900">
                <span className="text-indigo-600">3x</span> / 3 = 21 / 3
                <span className="block text-center text-base font-extrabold text-emerald-700 mt-1">
                  → x = 7
                </span>
              </span>
            )}
          </div>

          {/* Visual Balance Bar */}
          <div className="w-full max-w-sm flex items-center justify-between text-xs font-mono text-slate-600 px-4 pt-1">
            <div className="p-2 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-900 font-semibold text-center w-28">
              {algebraStep === 0 && 'Left: 3x - 7'}
              {algebraStep === 1 && 'Left: 3x'}
              {algebraStep === 2 && 'Left: x'}
            </div>
            <div className="flex flex-col items-center">
              <span className="text-base font-extrabold text-slate-400">=</span>
              <span className="text-[10px] text-slate-400 uppercase">balanced</span>
            </div>
            <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold text-center w-28">
              {algebraStep === 0 && 'Right: 14'}
              {algebraStep === 1 && 'Right: 21'}
              {algebraStep === 2 && 'Right: 7'}
            </div>
          </div>
        </div>

        {/* Inverse Operation Explanation */}
        <div className="p-3 rounded-xl bg-indigo-50/50 border border-indigo-100 text-xs text-slate-700 flex items-start gap-2.5 leading-relaxed">
          <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
          <div>
            <strong>Inverse Operation Principle:</strong> To isolate the variable $x$, apply inverse operations. First cancel subtraction by adding $7$ to <em>both sides</em> ($3x = 21$), then cancel multiplication by dividing <em>both sides</em> by $3$ ($x = 7$).
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 3. CHEMISTRY / CHEMICAL EQUATIONS VISUALIZER
  // =========================================================================
  if (topicId === 'chemical_equations') {
    return (
      <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
          <div className="flex items-center gap-2 text-slate-800">
            <Atom className="w-4 h-4 text-indigo-600" />
            <span className="font-semibold tracking-wide">
              Chemical Balancing: Conservation of Atoms
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setChemView('equation')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${
                chemView === 'equation' ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Balanced Equation
            </button>
            <button
              type="button"
              onClick={() => setChemView('atoms')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${
                chemView === 'atoms' ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Atom Inventory
            </button>
          </div>
        </div>

        {/* Reaction Equation / Atoms Inventory Display */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center gap-3">
          {chemView === 'equation' ? (
            <div className="font-mono text-base sm:text-lg font-bold text-slate-900 tracking-wide text-center">
              <span className="text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-lg">2</span>H₂ +{' '}
              <span className="text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-lg">1</span>O₂ →{' '}
              <span className="text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-lg">2</span>H₂O
            </div>
          ) : (
            <div className="w-full grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                <div className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Reactants (Left)</div>
                <div className="flex justify-between text-slate-800"><span>Hydrogen (H):</span> <span className="font-bold text-indigo-700">4 atoms</span></div>
                <div className="flex justify-between text-slate-800"><span>Oxygen (O):</span> <span className="font-bold text-indigo-700">2 atoms</span></div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                <div className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Products (Right)</div>
                <div className="flex justify-between text-slate-800"><span>Hydrogen (H):</span> <span className="font-bold text-indigo-700">4 atoms</span></div>
                <div className="flex justify-between text-slate-800"><span>Oxygen (O):</span> <span className="font-bold text-indigo-700">2 atoms</span></div>
              </div>
            </div>
          )}

          {/* Subscript vs Coefficient Rule Marker */}
          <div className="flex items-center gap-4 text-[11px] text-slate-600 pt-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" />
              <span><strong>Coefficients:</strong> Adjust to balance (allowed)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
              <span><strong>Subscripts:</strong> Chemical identity (never alter)</span>
            </div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs text-slate-700 flex items-start gap-2.5 leading-relaxed">
          <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
          <div>
            <strong>Conservation of Mass:</strong> Matter cannot be created or destroyed. Changing subscripts alters the substance into something else (e.g., H₂O₂ is toxic hydrogen peroxide, not water). Only change coefficients!
          </div>
        </div>
      </div>
    );
  }

  return null;
};
