# LearnLoop AI: Gemini-Powered Adaptive Learning Implementation Plan

## 1. Project Inspection & Architectural Assessment

### Current Workspace State
- **Framework & Runtime**: React 19 SPA running on Vite 8 with TypeScript and Tailwind CSS v4 (`@tailwindcss/vite`).
- **Installed Full-Stack Packages**:
  - `@google/genai` (v2.4.0): Official Google Gen AI TypeScript SDK.
  - `express` (v4.21.2) & `@types/express`: Production-grade Node.js server framework.
  - `dotenv` (v17.2.3): Environment configuration loader.
  - `tsx` (v4.21.0): TypeScript execute engine for running server TypeScript files directly.
  - `lucide-react` (v0.546.0): Iconography.
- **Server-Side API Capability**:
  - In Vite dev mode, we configure server middleware directly in `vite.config.ts` (or mount an Express API router via Vite's `configureServer` hook). This runs directly on port 3000 without port collisions and handles `/api/analyze-answer` and `/api/generate-followup`.
  - For production and deployment, `server.ts` boots Express, serves the static build from `dist`, and handles the same `/api/*` endpoints.
  - **Security Guarantee**: Because the `@google/genai` client runs exclusively inside the server middleware / Express route, `process.env.GEMINI_API_KEY` is never bundled into client JavaScript or sent to the browser.

---

## 2. Gemini Integration & Security Architecture

### Model Selection
- **Chosen Model**: `gemini-3.8-flash`
- **Rationale**:
  - It is the recommended model for fast, structured reasoning and educational dialogue tasks in the `@google/genai` SDK.
  - Supports strict JSON schema outputs (`responseSchema` with `Type.OBJECT`, `Type.STRING`, etc.) for deterministic parsing.
  - Delivers sub-1.5s latency, ideal for interactive student learning loops.
  - Does not require a paid model gate, ensuring uninterrupted evaluation.

### API Key & Secrets Handling
- Secret Name: `GEMINI_API_KEY` stored in server environment (`.env`).
- Initialization pattern:
  ```ts
  import { GoogleGenAI } from '@google/genai';
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
  });
  ```
- **Safety Measures**:
  - Request body size limits (50KB cap).
  - 10-second timeout on model calls.
  - Input validation: verifies question, verifiedAnswer, submittedAnswer, grade, and subject before dispatching to Gemini.
  - No client-side exposure: zero `VITE_GEMINI_API_KEY` or window secrets.

---

## 3. Misconception-Aware Analysis Engine

### Diagnostic Request Payload
```ts
interface DiagnosticAnalysisRequest {
  grade: 'Grade 8' | 'Grade 9';
  subject: 'Science' | 'Mathematics';
  topic: string;
  learningObjective: string;
  questionText: string;
  options?: string[];
  verifiedCorrectAnswer: string;
  submittedAnswer: string;
  studentReasoning?: string;
  markingCriteria?: string;
}
```

### Strict JSON Response Schema
```ts
interface DiagnosticAnalysisResponse {
  isCorrect: boolean;
  conceptualExplanation: string;
  possibleMisconception: string | null;
  confidence: 'high' | 'medium' | 'low' | 'insufficient_evidence';
  evidenceQuote: string | null;
  nextLearningStep: string;
  source: 'gemini' | 'fallback';
}
```

### Educational Evidence Rules
1. **Rule 1 (Answer Truth)**: Correctness is governed strictly by whether `submittedAnswer` matches `verifiedCorrectAnswer` (or mathematical/chemical equivalence). The model cannot alter the trusted answer key.
2. **Rule 2 (Misconception Proof)**: An incorrect answer alone is NEVER sufficient proof of a specific cognitive misconception.
   - If `studentReasoning` is empty or trivial (e.g. "I guessed", "because it is"), `possibleMisconception` is set to `null` and `confidence` is set to `insufficient_evidence`.
   - If `studentReasoning` reveals a documented fallacy (e.g., believing continuous force is required for constant velocity, or subtracting instead of adding inverse terms in algebra), `possibleMisconception` explicitly names and explains the cognitive gap, quotes the student's reasoning as `evidenceQuote`, and sets `confidence` to `high` or `medium`.
3. **Rule 3 (Constructive Remediation)**: `nextLearningStep` provides a targeted 1-sentence actionable strategy for the student.

---

## 4. Adaptive Follow-Up Question Generation

### Generation & Validation Pipeline
1. Prompt instructs `gemini-3.8-flash` to craft a new question testing the exact same `learningObjective` using a fresh physical/mathematical scenario.
2. Validation checks:
   - Must contain question text, 4 options, a valid correct answer matching one of the options, and a clear explanation.
   - Levenshtein/word-overlap check rejects questions that merely duplicate or lightly paraphrase the original diagnostic question.
   - For mathematical calculations (e.g. linear equations), server evaluates the equation to confirm the correct answer before sending to client.
3. Fallback: If generated question is invalid or repeats, server automatically substitutes a verified paired follow-up question from the built-in curriculum bank.
4. Correct answer is held until the student submits their follow-up response.

---

## 5. Built-in Question Bank & Fallback System

### Curriculum Coverage (Grade 8 & 9)
1. **Science - Force and Motion**:
   - Newton's First Law (inertia vs. continuous force requirement).
   - Balanced vs. unbalanced forces ($F_{\text{net}} = 0$ at constant velocity).
   - Friction and motion.
2. **Science - Chemical Equations**:
   - Law of Conservation of Mass (atoms cannot be created or destroyed).
   - Balancing coefficients vs. altering chemical subscripts (e.g., $2\text{H}_2\text{O}$ vs $\text{H}_2\text{O}_2$).
   - Reactants and products.
3. **Mathematics - Basic Algebra**:
   - Two-step linear equations (e.g., $3x - 7 = 14$).
   - Distributive property with negative signs (e.g., $-2(x - 5)$).
   - Combining like terms across equation sides.

### Resilient Fallback Guarantees
- Built-in deterministic misconception diagnosis if Gemini API is unreachable, times out, or returns invalid schema.
- Clear visual indicator:
  - `AI Analysis (Gemini 3.8 Flash)` with subtle green indicator.
  - `Curriculum Fallback Diagnosis` with clear neutral indicator.
- Student-friendly error alerts with a persistent **Retry Analysis** button that preserves student inputs.

---

## 6. Progress Dashboard & Metric Calculations

- **Single-Count Submissions**: Progress increments only after a student submits their answer. Retries do not increment question attempt counts.
- **Accuracy Formula**:
  $$\text{Accuracy} = \left(\frac{\text{Total Correct Submissions}}{\text{Total Answered Submissions}}\right) \times 100$$
  Enforced identically across:
  - Header & Home KPI cards
  - Topic progress badges
  - Session completion summary
- **State Persistence**: Saved in `localStorage` under `learnloop_progress_v2` with migration safety.

---

## 7. Files to Modify & Create

1. `metadata.json`: Set name to "LearnLoop AI", description, and major capability `MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API`.
2. `index.html`: Update title, meta description, and import Plus Jakarta Sans / Outfit Google Fonts.
3. `server/geminiService.ts`: `@google/genai` integration with strict JSON schemas, timeouts, and validation.
4. `server/apiRouter.ts`: Express API router handling `/api/analyze-answer` and `/api/generate-followup`.
5. `vite.config.ts`: Mount the API router in Vite's development server using `configureServer`.
6. `server.ts`: Production entry point with Express serving `dist` and the API router.
7. `src/data/questionBank.ts`: Comprehensive 18+ question bank with verified answers, common misconceptions, and paired follow-ups.
8. `src/types/learning.ts`: Core TypeScript definitions for questions, student responses, feedback, and progress.
9. `src/context/LearningContext.tsx`: React state provider for the 6-stage learning cycle, API interaction, retries, and progress metrics.
10. `src/components/Navbar.tsx`: 3-zone clean top bar (wordmark, navigation, Judge Quick Demo toggle).
11. `src/components/HomeDashboard.tsx`: Hero banner, learning statistics, and quick topic launcher.
12. `src/components/TopicSetup.tsx`: Grade and subject topic browser with curriculum indicators.
13. `src/components/DiagnosticScreen.tsx`: Hybrid input, reasoning explanation field, and Judge Demo presets.
14. `src/components/FeedbackScreen.tsx`: Detailed diagnosis, evidence citations, confidence qualification, and source badge.
15. `src/components/FollowUpScreen.tsx`: Novel transfer problem testing root concept with instant feedback.
16. `src/components/ProgressDashboard.tsx`: Analytics, mastery matrix, and misconception log.
17. `src/tests/learningLoop.test.ts`: Automated test script validating all 10 required test cases.
