import React from 'react';

interface LearnLoopLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  subtitle?: string;
}

export const LearnLoopLogo: React.FC<LearnLoopLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  subtitle,
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }[size];

  const textSize = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Infinity-Loop Logo Mark */}
      <div className={`relative ${iconDimensions} rounded-xl bg-gradient-to-tr from-indigo-900 via-indigo-700 to-blue-600 p-[1.5px] shadow-sm flex items-center justify-center shrink-0`}>
        <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center overflow-hidden">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4/5 h-4/5"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ll-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="50%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
            {/* Elegant Continuous Loop Curve (Learn Loop) */}
            <path
              d="M12 20C12 15.58 15.58 12 20 12C23.2 12 25.96 13.88 27.24 16.6L27.5 17.2L20 20L12.5 17.2C12.18 18.08 12 19.02 12 20ZM28 20C28 24.42 24.42 28 20 28C16.8 28 14.04 26.12 12.76 23.4L12.5 22.8L20 20L27.5 22.8C27.82 21.92 28 20.98 28 20Z"
              fill="url(#ll-grad)"
              opacity="0.25"
            />
            <path
              d="M14 15C10.5 15 8 17.5 8 20C8 22.5 10.5 25 14 25C17.5 25 21 20 21 20C21 20 24.5 15 28 15C31.5 15 34 17.5 34 20C34 22.5 31.5 25 28 25C24.5 25 21 20 21 20C21 20 17.5 15 14 15Z"
              stroke="url(#ll-grad)"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Sparkle Node for Intelligent Discovery */}
            <circle cx="21" cy="20" r="2.2" fill="#ffffff" />
            <circle cx="8" cy="20" r="1.5" fill="#38bdf8" />
            <circle cx="34" cy="20" r="1.5" fill="#818cf8" />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col text-left leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`${textSize} font-extrabold tracking-tight text-slate-900`}>
              LearnLoop
            </span>
            <span className="text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-50 border border-indigo-200 text-indigo-700 uppercase font-mono">
              AI
            </span>
          </div>
          {subtitle ? (
            <span className="text-[11px] font-medium text-slate-500 mt-1">{subtitle}</span>
          ) : (
            <span className="text-[11px] font-medium text-slate-500 mt-0.5 hidden sm:inline">
              Adaptive STEM Diagnostics · Gr 8–9
            </span>
          )}
        </div>
      )}
    </div>
  );
};
