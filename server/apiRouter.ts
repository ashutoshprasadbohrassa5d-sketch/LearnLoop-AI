import express from 'express';
import {
  analyzeStudentAnswer,
  generateFollowUpQuestion,
  fallbackAnalyzeAnswer,
  fallbackGetFollowUp,
} from './geminiService.ts';

export const apiRouter = express.Router();

// Body parser for JSON with safety limit
apiRouter.use(express.json({ limit: '50kb' }));

/**
 * Health check endpoint: reports system health and whether Gemini key is set, without exposing it
 */
apiRouter.get('/health', (_req, res) => {
  const hasKey = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim() !== '');
  res.json({
    status: 'ok',
    service: 'LearnLoop AI Analysis API',
    model: 'gemini-3.8-flash',
    aiEnabled: hasKey,
    timestamp: new Date().toISOString(),
  });
});

/**
 * Endpoint: POST /api/analyze-answer
 * Analyzes a student's answer and optional reasoning for cognitive misconceptions
 */
apiRouter.post('/analyze-answer', async (req, res) => {
  try {
    const {
      questionId,
      topicId,
      grade,
      subject,
      topic,
      learningObjective,
      questionText,
      options,
      verifiedCorrectAnswer,
      submittedAnswer,
      studentReasoning,
      markingCriteria,
    } = req.body;

    // Strict input validation
    if (!questionText || !verifiedCorrectAnswer || submittedAnswer === undefined || submittedAnswer === null) {
      return res.status(400).json({
        error: 'Missing required parameters: questionText, verifiedCorrectAnswer, and submittedAnswer are required.',
      });
    }

    const payload = {
      questionId,
      topicId,
      grade: grade || 'Grade 8',
      subject: subject || 'Science',
      topic: topic || 'STEM',
      learningObjective: learningObjective || 'Master foundational concept',
      questionText,
      options,
      verifiedCorrectAnswer: String(verifiedCorrectAnswer),
      submittedAnswer: String(submittedAnswer).trim(),
      studentReasoning: typeof studentReasoning === 'string' ? studentReasoning : '',
      markingCriteria,
    };

    const result = await analyzeStudentAnswer(payload);
    return res.json(result);
  } catch (err: any) {
    console.error('Error in /api/analyze-answer:', err);
    // If any unhandled exception occurs, return deterministic safe fallback
    const fallback = fallbackAnalyzeAnswer(req.body);
    return res.json(fallback);
  }
});

/**
 * Endpoint: POST /api/generate-followup
 * Generates an adaptive follow-up question testing the same learning objective
 */
apiRouter.post('/generate-followup', async (req, res) => {
  try {
    const {
      parentQuestionId,
      topicId,
      grade,
      subject,
      topic,
      learningObjective,
      originalQuestionText,
      originalCorrectAnswer,
    } = req.body;

    if (!originalQuestionText || !learningObjective) {
      return res.status(400).json({
        error: 'Missing required parameters: originalQuestionText and learningObjective are required.',
      });
    }

    const payload = {
      parentQuestionId,
      topicId,
      grade: grade || 'Grade 8',
      subject: subject || 'Science',
      topic: topic || 'STEM',
      learningObjective,
      originalQuestionText,
      originalCorrectAnswer: originalCorrectAnswer || '',
    };

    const result = await generateFollowUpQuestion(payload);
    return res.json(result);
  } catch (err: any) {
    console.error('Error in /api/generate-followup:', err);
    const fallback = fallbackGetFollowUp(req.body);
    return res.json(fallback);
  }
});
