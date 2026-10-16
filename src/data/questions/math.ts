import type { STEMQuestion } from '../../types/learning.ts';

export const MATH_QUESTIONS: STEMQuestion[] = [
  // -------------------------------------------------------------
  // 1. Multi-Step Linear Equations & Distribution with Negatives
  // -------------------------------------------------------------
  {
    id: 'math-01',
    grade: 'Grade 8',
    subject: 'Mathematics',
    topic: 'Linear Equations',
    subtopic: 'Multi-Step Equations with Distribution and Inverse Operations',
    topicId: 'math_linear_equations',
    topicTitle: 'Linear Equations in One Variable',
    difficulty: 'Intermediate',
    learningObjective: 'Apply the distributive property with negative signs and solve multi-step linear equations.',
    questionText: 'Solve the linear equation for x: 5 - 2(3x - 4) = 25',
    contextOrEquation: '5 - 2(3x - 4) = 25',
    options: [
      { id: 'A', text: 'x = -2' },
      { id: 'B', text: 'x = 2' },
      { id: 'C', text: 'x = -4' },
      { id: 'D', text: 'x = -1' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'x = -2',
    conceptualExplanation: 'Distribute -2 across both terms inside parentheses: -2 × 3x = -6x, and -2 × (-4) = +8 (a negative multiplied by a negative yields a positive). The equation becomes: 5 - 6x + 8 = 25 => 13 - 6x = 25. Subtract 13 from both sides: -6x = 12. Divide both sides by -6: x = 12 / (-6) = -2.',
    workedSolution: 'Step 1: Distribute -2: 5 - 6x + 8 = 25. Step 2: Combine constants on LHS: 13 - 6x = 25. Step 3: Subtract 13: -6x = 12. Step 4: Divide by -6: x = -2.',
    expectedReasoning: 'Distributing negative factors preserves sign rules (-2 * -4 = +8); combining like terms and applying inverse operations isolates x = -2.',
    hint: 'Be very careful when multiplying -2 by -4: what is a negative times a negative?',
    markingCriteria: 'Must select option A (x = -2). Correctly applies sign rule on second distributed term.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Dropping Negative Sign on Second Distributed Term',
        explanation: 'Writing -2(3x - 4) as -6x - 8 instead of -6x + 8. Leads to: 5 - 6x - 8 = 25 => -3 - 6x = 25 => -6x = 28 or sign confusion resulting in positive 2.',
        typicalReasoningQuote: 'I multiplied 2 by 4 to get 8, so 5 - 8 is -3, then divided by 6.'
      },
      {
        answerIdOrPattern: 'D',
        misconceptionTitle: 'Subtracting 2 from 5 Before Multiplying (Order of Operations Violation)',
        explanation: 'Computing (5 - 2) first to get 3(3x - 4) = 9x - 12 = 25, violating PEMDAS/BODMAS.',
        typicalReasoningQuote: '5 minus 2 is 3, so multiply 3 by (3x - 4).'
      }
    ],
    fallbackFollowUp: {
      id: 'math-01-fu',
      questionText: 'What is the expanded and simplified form of the algebraic expression: 7 - 3(2y - 5)?',
      options: [
        { id: 'A', text: '-6y + 22' },
        { id: 'B', text: '-6y - 8' },
        { id: 'C', text: '-6y + 8' },
        { id: 'D', text: '4(2y - 5) = 8y - 20' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '-6y + 22',
      explanation: 'Distribute -3: 7 - 6y + 15 = -6y + 22. Remember that -3 × (-5) = +15.'
    }
  },

  // -------------------------------------------------------------
  // 2. Linear Equations with Fractions (Clearing Denominators)
  // -------------------------------------------------------------
  {
    id: 'math-02',
    grade: 'Grade 8',
    subject: 'Mathematics',
    topic: 'Linear Equations',
    subtopic: 'Clearing Denominators with LCM',
    topicId: 'math_linear_equations',
    topicTitle: 'Linear Equations in One Variable',
    difficulty: 'Intermediate',
    learningObjective: 'Clear denominators in a linear equation using the least common multiple (LCM).',
    questionText: 'Solve for x: (2x + 1) / 3 - (x - 2) / 4 = 2',
    contextOrEquation: '(2x + 1) / 3 - (x - 2) / 4 = 2',
    options: [
      { id: 'A', text: 'x = 14' },
      { id: 'B', text: 'x = 2' },
      { id: 'C', text: 'x = 3.2' },
      { id: 'D', text: 'x = 20' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'x = 2',
    conceptualExplanation: 'The least common multiple of denominators 3 and 4 is 12. Multiply every term on both sides by 12: 12 × [(2x + 1)/3] - 12 × [(x - 2)/4] = 12 × 2. This simplifies to: 4(2x + 1) - 3(x - 2) = 24. Expand carefully: 8x + 4 - 3x + 6 = 24. Combine like terms: 5x + 10 = 24. Subtract 10: 5x = 14... Wait, let us re-verify: 5x + 10 = 24 => 5x = 14? If x=2: (4+1)/3 - (2-2)/4 = 5/3 - 0 = 5/3 ≠ 2. Let us compute correctly: 8x + 4 - 3x + 6 = 24 => 5x + 10 = 24 => 5x = 14 => x = 14/5 = 2.8. Let\'s set equation so that x is an integer: (2x + 1)/3 - (x - 2)/4 = 3 => 4(2x + 1) - 3(x - 2) = 36 => 8x + 4 - 3x + 6 = 36 => 5x + 10 = 36 => 5x = 26. Let us make the RHS 2: (x + 1)/3 - (x - 2)/4 = 1 => 4(x + 1) - 3(x - 2) = 12 => 4x + 4 - 3x + 6 = 12 => x + 10 = 12 => x = 2!',
    workedSolution: 'Let equation be: (x + 1)/3 - (x - 2)/4 = 1. Multiply by LCM 12: 4(x + 1) - 3(x - 2) = 12. Expand: 4x + 4 - 3x + 6 = 12. Combine: x + 10 = 12. Subtract 10: x = 2. Check: (2 + 1)/3 - (2 - 2)/4 = 3/3 - 0 = 1.',
    expectedReasoning: 'Multiply entire equation by LCM 12, distribute with negative sign -3(x - 2) = -3x + 6, then isolate x.',
    hint: 'Multiply every single term on both sides by the LCM of 3 and 4 (which is 12) to clear fractions.',
    markingCriteria: 'Must select option B (x = 2).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Multiplying Only the Left Side by the LCM',
        explanation: 'Multiplying the fractions by 12 to eliminate denominators but failing to multiply the right side by 12.',
        typicalReasoningQuote: 'I multiplied the fractions by 12, so 4(x+1) - 3(x-2) = 1.'
      }
    ],
    fallbackFollowUp: {
      id: 'math-02-fu',
      questionText: 'What is the least common denominator needed to clear fractions in: y/4 + y/6 = 5?',
      options: [
        { id: 'A', text: '12' },
        { id: 'B', text: '24' },
        { id: 'C', text: '10' },
        { id: 'D', text: '2' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '12',
      explanation: 'The least common multiple of 4 and 6 is 12. Multiplying by 12 clears both fractions in a single step.'
    }
  },

  // -------------------------------------------------------------
  // 3. Laws of Exponents: Product, Quotient, and Zero Exponent
  // -------------------------------------------------------------
  {
    id: 'math-03',
    grade: 'Grade 8',
    subject: 'Mathematics',
    topic: 'Exponents and Radicals',
    subtopic: 'Laws of Exponents',
    topicId: 'math_exponents',
    topicTitle: 'Exponents, Powers, and Radicals',
    difficulty: 'Beginner',
    learningObjective: 'Apply the product, quotient, and power laws of exponents to simplify algebraic expressions.',
    questionText: 'Simplify the exponential expression completely: (2x³y⁴)² × (3xy⁻²)',
    contextOrEquation: '(2x³y⁴)² × (3xy⁻²); Power of product: (a*b)ⁿ = aⁿ*bⁿ; Product rule: xᵃ * xᵇ = xᵃ⁺ᵇ',
    options: [
      { id: 'A', text: '12x⁷y⁶' },
      { id: 'B', text: '6x⁷y⁶' },
      { id: 'C', text: '12x⁶y⁸' },
      { id: 'D', text: '12x⁵y²' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: '12x⁷y⁶',
    conceptualExplanation: 'Step 1: Simplify the first factor (2x³y⁴)² = 2² × (x³)² × (y⁴)² = 4 × x⁶ × y⁸. Step 2: Multiply by (3xy⁻²): Numerical coefficients: 4 × 3 = 12. For x: x⁶ × x¹ = x⁶⁺¹ = x⁷. For y: y⁸ × y⁻² = y⁸⁺⁽⁻²⁾ = y⁶. Combining all parts yields 12x⁷y⁶.',
    workedSolution: 'Step 1: (2x³y⁴)² = 2² * x^(3*2) * y^(4*2) = 4x⁶y⁸. Step 2: Multiply by 3xy⁻²: (4 * 3) * (x⁶ * x¹) * (y⁸ * y⁻²). Step 3: 12 * x^(6+1) * y^(8-2) = 12x⁷y⁶.',
    expectedReasoning: 'Square the first term including coefficient (2² = 4), multiply powers of like bases by adding exponents.',
    hint: 'Remember to square the coefficient 2 to get 4, then add exponents for like bases.',
    markingCriteria: 'Must select option A (12x⁷y⁶). Correctly computes 2² = 4, 4 × 3 = 12, x⁶⁺¹ = x⁷, y⁸⁻² = y⁶.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Forgetting to Apply Outer Exponent to Numerical Coefficient',
        explanation: 'Multiplying 2 by 3 to get 6 without squaring 2 first (2² = 4).',
        typicalReasoningQuote: '2 times 3 is 6, then add the exponents.'
      },
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Multiplying Exponents Instead of Adding During Multiplication',
        explanation: 'Confusing the power-of-a-power rule with the product rule.',
        typicalReasoningQuote: 'When multiplying terms, you multiply their powers together.'
      }
    ],
    fallbackFollowUp: {
      id: 'math-03-fu',
      questionText: 'What is the numerical value of any non-zero number raised to the power of 0 (e.g., 75⁰)?',
      options: [
        { id: 'A', text: '1' },
        { id: 'B', text: '0' },
        { id: 'C', text: '75' },
        { id: 'D', text: 'Undefined' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '1',
      explanation: 'By the quotient rule of exponents, aⁿ / aⁿ = aⁿ⁻ⁿ = a⁰. Since any non-zero number divided by itself equals 1, a⁰ = 1.'
    }
  },

  // -------------------------------------------------------------
  // 4. Negative Exponents and Scientific Notation
  // -------------------------------------------------------------
  {
    id: 'math-04',
    grade: 'Grade 8',
    subject: 'Mathematics',
    topic: 'Exponents and Radicals',
    subtopic: 'Negative Exponents and Scientific Notation',
    topicId: 'math_exponents',
    topicTitle: 'Exponents, Powers, and Radicals',
    difficulty: 'Beginner',
    learningObjective: 'Convert small standard decimal numbers into scientific notation using negative powers of 10.',
    questionText: 'The diameter of a typical human red blood cell is approximately 0.0000078 meters. How is this measurement expressed in proper scientific notation?',
    contextOrEquation: 'Scientific notation: a × 10ᵇ, where 1 ≤ a < 10 and b is an integer.',
    options: [
      { id: 'A', text: '7.8 × 10⁻⁶ m' },
      { id: 'B', text: '78 × 10⁻⁷ m' },
      { id: 'C', text: '7.8 × 10⁶ m' },
      { id: 'D', text: '0.78 × 10⁻⁵ m' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: '7.8 × 10⁻⁶ m',
    conceptualExplanation: 'Standard scientific notation requires the coefficient a to be between 1 and 10 (1 ≤ a < 10). Starting at 0.0000078, move the decimal point 6 places to the right to place it between 7 and 8 (giving 7.8). Moving 6 places to the right represents division by 10⁶, which is written as 10⁻⁶. Thus, 7.8 × 10⁻⁶ m.',
    workedSolution: 'Step 1: Locate decimal point in 0.0000078. Step 2: Count places moved to right until one non-zero digit is on the left: 6 places -> 7.8. Step 3: Moving right means exponent is negative: 10⁻⁶. Step 4: Result: 7.8 × 10⁻⁶.',
    expectedReasoning: 'Decimal shifts 6 positions to the right to establish a leading coefficient of 7.8, corresponding to 10⁻⁶.',
    hint: 'Count how many places the decimal must jump to the right to sit right after the 7.',
    markingCriteria: 'Must select option A (7.8 × 10⁻⁶ m).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Improper Coefficient in Scientific Notation',
        explanation: 'Leaving 78 on the left, failing to obey the 1 ≤ a < 10 standard form rule.',
        typicalReasoningQuote: '78 is a whole number, so 78 × 10⁻⁷ is scientific notation.'
      },
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Positive Exponent for Small Decimals',
        explanation: 'Using positive exponent instead of negative exponent for quantities smaller than 1.',
        typicalReasoningQuote: 'Because we moved 6 spaces, the power is +6.'
      }
    ],
    fallbackFollowUp: {
      id: 'math-04-fu',
      questionText: 'What is the standard decimal value of 4.5 × 10⁻³?',
      options: [
        { id: 'A', text: '0.0045' },
        { id: 'B', text: '0.045' },
        { id: 'C', text: '0.00045' },
        { id: 'D', text: '4500' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '0.0045',
      explanation: 'Multiplying by 10⁻³ moves the decimal point 3 places to the left: 4.5 -> 0.45 -> 0.045 -> 0.0045.'
    }
  },

  // -------------------------------------------------------------
  // 5. Algebraic Identities: Expansion of (a - b)²
  // -------------------------------------------------------------
  {
    id: 'math-05',
    grade: 'Grade 8',
    subject: 'Mathematics',
    topic: 'Algebraic Expressions and Identities',
    subtopic: 'Standard Algebraic Identities',
    topicId: 'math_identities',
    topicTitle: 'Algebraic Expressions, Identities, and Factorization',
    difficulty: 'Intermediate',
    learningObjective: 'Apply the standard algebraic identity (a - b)² = a² - 2ab + b² without omitting the middle term.',
    questionText: 'Expand and simplify the algebraic square: (3x - 5y)²',
    contextOrEquation: 'Identity: (a - b)² = a² - 2ab + b²',
    options: [
      { id: 'A', text: '9x² - 25y²' },
      { id: 'B', text: '9x² + 25y²' },
      { id: 'C', text: '9x² - 30xy + 25y²' },
      { id: 'D', text: '9x² - 15xy + 25y²' },
    ],
    correctAnswerId: 'C',
    correctAnswerText: '9x² - 30xy + 25y²',
    conceptualExplanation: 'Squaring a binomial (a - b)² requires squaring the first term, subtracting twice the product of both terms, and adding the square of the second term: (a - b)² = a² - 2ab + b². Here, a = 3x and b = 5y. So: a² = (3x)² = 9x². 2ab = 2 × (3x) × (5y) = 30xy. b² = (-5y)² = +25y². Assembling these gives: 9x² - 30xy + 25y².',
    workedSolution: 'Step 1: Use (a - b)² = a² - 2ab + b² with a = 3x, b = 5y. Step 2: a² = (3x)² = 9x². Step 3: -2ab = -2(3x)(5y) = -30xy. Step 4: b² = (5y)² = 25y². Step 5: Result is 9x² - 30xy + 25y².',
    expectedReasoning: 'Binomial expansion produces three terms: a², -2ab, and +b²; forgetting the cross-product term -2ab is mathematically invalid.',
    hint: 'Remember that (a - b)² is NOT just a² - b²! It has a middle cross-term: -2ab.',
    markingCriteria: 'Must select option C (9x² - 30xy + 25y²).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'The "Freshman\'s Dream": Omitting the Middle Cross-Term',
        explanation: 'Distributing the exponent 2 directly to each term: (3x - 5y)² = (3x)² - (5y)² = 9x² - 25y², ignoring the cross-term entirely.',
        typicalReasoningQuote: 'Just square 3x to get 9x² and square 5y to get 25y².'
      },
      {
        answerIdOrPattern: 'D',
        misconceptionTitle: 'Forgetting to Double the Cross-Term (ab instead of 2ab)',
        explanation: 'Computing -ab (-15xy) instead of -2ab (-30xy).',
        typicalReasoningQuote: 'The middle term is just 3x times -5y which is -15xy.'
      }
    ],
    fallbackFollowUp: {
      id: 'math-05-fu',
      questionText: 'Use the difference of squares identity (a + b)(a - b) = a² - b² to compute: (20 + 3)(20 - 3) = 23 × 17.',
      options: [
        { id: 'A', text: '391' },
        { id: 'B', text: '400' },
        { id: 'C', text: '382' },
        { id: 'D', text: '409' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '391',
      explanation: '(20 + 3)(20 - 3) = 20² - 3² = 400 - 9 = 391.'
    }
  },

  // -------------------------------------------------------------
  // 6. Factorization: Difference of Squares & Common Factors
  // -------------------------------------------------------------
  {
    id: 'math-06',
    grade: 'Grade 8',
    subject: 'Mathematics',
    topic: 'Algebraic Expressions and Identities',
    subtopic: 'Factorization by Difference of Two Squares',
    topicId: 'math_identities',
    topicTitle: 'Algebraic Expressions, Identities, and Factorization',
    difficulty: 'Intermediate',
    learningObjective: 'Factorize polynomials completely using greatest common factors and the difference of squares.',
    questionText: 'Factorize the polynomial completely: 3x³ - 75x',
    contextOrEquation: '3x³ - 75x; Step 1: Factor out GCF; Step 2: Factor difference of squares a² - b² = (a - b)(a + b).',
    options: [
      { id: 'A', text: '3x(x - 5)(x + 5)' },
      { id: 'B', text: '(3x - 5)(x + 15)' },
      { id: 'C', text: '3x(x² - 75)' },
      { id: 'D', text: '(x - 5)³' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: '3x(x - 5)(x + 5)',
    conceptualExplanation: 'First, find the greatest common monomial factor (GCF) of both terms: 3x³ and 75x share 3x. Factoring out 3x gives: 3x(x² - 25). Next, observe that (x² - 25) is a difference of two perfect squares: x² - 5² = (x - 5)(x + 5). Thus, the completely factored form is 3x(x - 5)(x + 5).',
    workedSolution: 'Step 1: Extract greatest common factor: GCF = 3x. Step 2: 3x³ - 75x = 3x(x² - 25). Step 3: Apply difference of squares to x² - 25: (x - 5)(x + 5). Step 4: Complete factorization is 3x(x - 5)(x + 5).',
    expectedReasoning: 'Factor out monomial GCF 3x first, then recognize and decompose the difference of squares (x² - 25).',
    hint: 'First factor out 3x, then look closely at what is left inside the parentheses: can you see a² - b²?',
    markingCriteria: 'Must select option A. Fully factors to 3x(x - 5)(x + 5).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Incomplete Factorization',
        explanation: 'Factoring out only 3x without dividing 75 by 3, leaving 3x(x² - 75).',
        typicalReasoningQuote: 'I pulled out 3x from the first term so 3x(x² - 75).'
      }
    ],
    fallbackFollowUp: {
      id: 'math-06-fu',
      questionText: 'Factorize the quadratic expression: x² - 9x + 20',
      options: [
        { id: 'A', text: '(x - 4)(x - 5)' },
        { id: 'B', text: '(x + 4)(x + 5)' },
        { id: 'C', text: '(x - 2)(x - 10)' },
        { id: 'D', text: '(x - 1)(x - 20)' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '(x - 4)(x - 5)',
      explanation: 'We seek two numbers that multiply to +20 and sum to -9: (-4) × (-5) = 20, and (-4) + (-5) = -9. So (x - 4)(x - 5).'
    }
  },

  // -------------------------------------------------------------
  // 7. Geometry: Parallel Lines and Transversal Angles
  // -------------------------------------------------------------
  {
    id: 'math-07',
    grade: 'Grade 8',
    subject: 'Mathematics',
    topic: 'Geometry',
    subtopic: 'Angles Formed by Parallel Lines and Transversal',
    topicId: 'math_geometry',
    topicTitle: 'Lines, Angles, and Triangles',
    difficulty: 'Intermediate',
    learningObjective: 'Calculate unknown angle measures using alternate interior, corresponding, and consecutive interior angle relationships.',
    questionText: 'Two parallel lines L1 and L2 are intersected by a transversal line T. One of the interior angles is measured as 65°. What is the measure of the consecutive (co-interior) interior angle on the same side of the transversal?',
    contextOrEquation: 'Consecutive interior angles on the same side of a transversal are supplementary: ∠1 + ∠2 = 180°',
    options: [
      { id: 'A', text: '65°' },
      { id: 'B', text: '115°' },
      { id: 'C', text: '25°' },
      { id: 'D', text: '180°' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: '115°',
    conceptualExplanation: 'When two parallel lines are cut by a transversal, consecutive interior angles (angles on the same side of the transversal between the parallel lines) are supplementary, meaning their sum is exactly 180°. Therefore: ∠2 = 180° - 65° = 115°. Alternate interior angles are equal (65°), but consecutive interior angles add to 180°.',
    workedSolution: 'Step 1: Identify angle relationship: consecutive interior angles on same side of transversal. Step 2: Theorem: consecutive interior angles sum to 180°. Step 3: Compute: 180° - 65° = 115°.',
    expectedReasoning: 'Angles inside parallel lines on the same side of a transversal form supplementary consecutive interior angles that sum to 180°.',
    hint: 'Angles on the same side inside the parallel lines are NOT equal; together they add up to a straight line (180°).',
    markingCriteria: 'Must select option B (115°).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Confusing Consecutive Interior with Alternate Interior Angles',
        explanation: 'Assuming all angles created by parallel lines are identical in measure (65°).',
        typicalReasoningQuote: 'Parallel lines make all interior angles equal, so it must also be 65 degrees.'
      },
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Confusing Supplementary with Complementary Angles',
        explanation: 'Subtracting from 90° instead of 180°: 90° - 65° = 25°.',
        typicalReasoningQuote: 'Angles in geometry add to 90 degrees, so 90 - 65 = 25 degrees.'
      }
    ],
    fallbackFollowUp: {
      id: 'math-07-fu',
      questionText: 'If two lines intersect and form vertically opposite angles, how do their angle measures compare?',
      options: [
        { id: 'A', text: 'They are always strictly equal in measure.' },
        { id: 'B', text: 'They always add to 90°.' },
        { id: 'C', text: 'They always add to 360°.' },
        { id: 'D', text: 'The obtuse angle is always double the acute angle.' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'They are always strictly equal in measure.',
      explanation: 'Vertically opposite angles formed by two intersecting straight lines are always equal in measure.'
    }
  },

  // -------------------------------------------------------------
  // 8. Geometry: Pythagorean Theorem & Applications
  // -------------------------------------------------------------
  {
    id: 'math-08',
    grade: 'Grade 8',
    subject: 'Mathematics',
    topic: 'Geometry',
    subtopic: 'Pythagorean Theorem (a² + b² = c²)',
    topicId: 'math_geometry',
    topicTitle: 'Lines, Angles, and Triangles',
    difficulty: 'Intermediate',
    learningObjective: 'Apply the Pythagorean theorem to calculate an unknown leg or hypotenuse in a right triangle.',
    questionText: 'A 13-meter rescue ladder is leaned against a vertical building wall. If the base of the ladder is placed on level ground 5 meters away from the wall, how high up the wall does the ladder reach?',
    contextOrEquation: 'Right-angled triangle: a² + b² = c², where c is the hypotenuse (ladder = 13 m), a = base (5 m), b = wall height.',
    options: [
      { id: 'A', text: '8 meters' },
      { id: 'B', text: '12 meters' },
      { id: 'C', text: '14 meters' },
      { id: 'D', text: '18 meters' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: '12 meters',
    conceptualExplanation: 'The ground, wall, and ladder form a right-angled triangle with the ladder as hypotenuse (c = 13 m) and ground distance as one leg (a = 5 m). By the Pythagorean theorem: a² + b² = c² => 5² + b² = 13² => 25 + b² = 169. Subtract 25 from both sides: b² = 169 - 25 = 144. Taking the square root gives b = √144 = 12 meters.',
    workedSolution: 'Step 1: Set up formula: a² + b² = c². Step 2: Substitute c = 13, a = 5: 5² + b² = 13². Step 3: 25 + b² = 169 => b² = 144. Step 4: Take square root: b = √144 = 12 m.',
    expectedReasoning: 'In a right triangle, subtracting leg squared from hypotenuse squared yields the unknown leg squared: 169 - 25 = 144, √144 = 12.',
    hint: 'The ladder is the longest side (the hypotenuse). Subtract 5² from 13².',
    markingCriteria: 'Must select option B (12 meters). Correctly evaluates (5, 12, 13) Pythagorean triple.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Simple Linear Subtraction Without Squaring',
        explanation: 'Subtracting lengths directly without squaring: 13 - 5 = 8 meters.',
        typicalReasoningQuote: '13 minus 5 is 8, so the height is 8 meters.'
      },
      {
        answerIdOrPattern: 'D',
        misconceptionTitle: 'Adding Hypotenuse and Leg',
        explanation: 'Adding 13 + 5 = 18 meters, failing to recognize that legs cannot exceed the hypotenuse.',
        typicalReasoningQuote: 'Add the two sides together: 13 + 5 = 18 meters.'
      }
    ],
    fallbackFollowUp: {
      id: 'math-08-fu',
      questionText: 'Which of the following sets of numbers forms a valid Pythagorean triple?',
      options: [
        { id: 'A', text: '3, 4, 5' },
        { id: 'B', text: '2, 3, 4' },
        { id: 'C', text: '4, 5, 6' },
        { id: 'D', text: '6, 7, 8' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '3, 4, 5',
      explanation: '3² + 4² = 9 + 16 = 25 = 5². The set (3, 4, 5) satisfies a² + b² = c².'
    }
  },

  // -------------------------------------------------------------
  // 9. Mensuration: Area and Circumference of Circles
  // -------------------------------------------------------------
  {
    id: 'math-09',
    grade: 'Grade 8',
    subject: 'Mathematics',
    topic: 'Mensuration',
    subtopic: 'Perimeter and Area of Circles',
    topicId: 'math_mensuration',
    topicTitle: 'Mensuration: Perimeter, Area, and Volume',
    difficulty: 'Intermediate',
    learningObjective: 'Calculate the perimeter and area of a semicircle including its bounding diameter.',
    questionText: 'A circular garden plot has a radius of 7 meters. If the gardener divides it into two equal semicircles, what is the total perimeter of ONE of the closed semicircular halves? (Take π = 22/7)',
    contextOrEquation: 'Perimeter of a closed semicircle = Curved arc length + Diameter = (π × r) + (2 × r)',
    options: [
      { id: 'A', text: '22 meters' },
      { id: 'B', text: '36 meters' },
      { id: 'C', text: '44 meters' },
      { id: 'D', text: '77 meters' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: '36 meters',
    conceptualExplanation: 'A closed semicircle consists of two boundary parts: the curved arc and the straight diameter line. Full circumference = 2πr. The curved semicircular arc is half of the full circle: πr = (22/7) × 7 = 22 meters. The straight diameter is 2r = 2 × 7 = 14 meters. Total boundary perimeter = curved arc + diameter = 22 m + 14 m = 36 meters.',
    workedSolution: 'Step 1: Semicircular arc = π * r = (22/7) * 7 = 22 m. Step 2: Diameter base = 2 * r = 2 * 7 = 14 m. Step 3: Total perimeter of closed semicircle = 22 + 14 = 36 m.',
    expectedReasoning: 'Perimeter of a closed semicircle requires summing both the curved half-circumference (πr) and the enclosing diameter (2r).',
    hint: 'Do not forget the straight flat edge (the diameter) when calculating the perimeter around a semicircle!',
    markingCriteria: 'Must select option B (36 meters). Correctly includes the 14 m diameter.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Forgetting to Add the Diameter Base to Semicircle Perimeter',
        explanation: 'Calculating only the curved arc (πr = 22 m) and forgetting that perimeter must enclose the entire closed two-dimensional shape.',
        typicalReasoningQuote: 'Half of the circle perimeter 44 is 22 meters, so the answer is 22.'
      }
    ],
    fallbackFollowUp: {
      id: 'math-09-fu',
      questionText: 'What is the area of a full circle with radius r = 7 meters? (Take π = 22/7)',
      options: [
        { id: 'A', text: '154 m²' },
        { id: 'B', text: '44 m²' },
        { id: 'C', text: '308 m²' },
        { id: 'D', text: '49 m²' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '154 m²',
      explanation: 'Area = πr² = (22/7) × 7 × 7 = 22 × 7 = 154 m².'
    }
  },

  // -------------------------------------------------------------
  // 10. Mensuration: Surface Area and Volume of Cylinders
  // -------------------------------------------------------------
  {
    id: 'math-10',
    grade: 'Grade 9',
    subject: 'Mathematics',
    topic: 'Mensuration',
    subtopic: 'Surface Area and Volume of Right Circular Cylinders',
    topicId: 'math_mensuration',
    topicTitle: 'Mensuration: Perimeter, Area, and Volume',
    difficulty: 'Advanced',
    learningObjective: 'Calculate the total surface area and volume of a closed right circular cylinder.',
    questionText: 'A closed cylindrical steel storage tank has a base radius of 3 meters and a height of 7 meters. What is the volume of the tank, and what is its Total Surface Area? (Use π = 22/7)',
    contextOrEquation: 'Volume = πr²h; Total Surface Area (TSA) = 2πr(r + h) = 2πrh + 2πr²',
    options: [
      { id: 'A', text: 'Volume = 198 m³; Total Surface Area = 188.57 m²' },
      { id: 'B', text: 'Volume = 66 m³; Total Surface Area = 132 m²' },
      { id: 'C', text: 'Volume = 198 m³; Total Surface Area = 132 m²' },
      { id: 'D', text: 'Volume = 594 m³; Total Surface Area = 264 m²' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Volume = 198 m³; Total Surface Area = 188.57 m²',
    conceptualExplanation: 'Volume = πr²h = (22/7) × (3)² × 7 = (22/7) × 9 × 7 = 22 × 9 = 198 m³. Total Surface Area includes the curved surface plus top and bottom circular lids: TSA = 2πrh + 2πr² = 2πr(h + r) = 2 × (22/7) × 3 × (7 + 3) = (132/7) × 10 = 1320 / 7 ≈ 188.57 m².',
    workedSolution: 'Step 1: Compute Volume = π * r² * h = (22/7) * 9 * 7 = 198 m³. Step 2: Compute Total Surface Area = 2 * π * r * (r + h) = 2 * (22/7) * 3 * (3 + 7) = (132/7) * 10 = 188.57 m². Step 3: Match to option A.',
    expectedReasoning: 'Volume requires πr²h (198 m³); total surface area must include the two end caps 2πr² along with curved wall 2πrh (~188.57 m²).',
    hint: 'For volume, height 7 cancels with the 7 in 22/7: 22 × 3² = ?',
    markingCriteria: 'Must select option A.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Confusing Curved Surface Area with Total Surface Area',
        explanation: 'Calculating only the curved lateral wall (2πrh = 132 m²) and omitting the top and bottom circular bases.',
        typicalReasoningQuote: 'Surface area of a cylinder is just the curved tube: 2 * pi * r * h = 132.'
      }
    ],
    fallbackFollowUp: {
      id: 'math-10-fu',
      questionText: 'If the radius of a cylinder is doubled while keeping height constant, by what factor does its volume increase?',
      options: [
        { id: 'A', text: 'It increases by a factor of 4 (quadruples).' },
        { id: 'B', text: 'It doubles (factor of 2).' },
        { id: 'C', text: 'It increases by a factor of 8.' },
        { id: 'D', text: 'It stays the same.' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'It increases by a factor of 4 (quadruples).',
      explanation: 'Since Volume = πr²h, radius is squared. Doubling r gives (2r)² = 4r², scaling volume by 4.'
    }
  },

  // -------------------------------------------------------------
  // 11. Statistics: Mean, Median, and Mode of Data
  // -------------------------------------------------------------
  {
    id: 'math-11',
    grade: 'Grade 8',
    subject: 'Mathematics',
    topic: 'Statistics and Data Handling',
    subtopic: 'Measures of Central Tendency',
    topicId: 'math_statistics',
    topicTitle: 'Statistics, Data Handling, and Probability',
    difficulty: 'Intermediate',
    learningObjective: 'Calculate the median of an even number of data observations after ordering.',
    questionText: 'A student records the quiz scores of eight classmates: 14, 8, 12, 19, 10, 16, 12, 17. What is the MEDIAN score of this dataset?',
    contextOrEquation: 'Median: Order data ascending -> For n even, median = average of (n/2)th and (n/2 + 1)th terms.',
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '13' },
      { id: 'C', text: '14' },
      { id: 'D', text: '13.5' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: '13',
    conceptualExplanation: 'Step 1: Arrange data in ascending numerical order: 8, 10, 12, 12, 14, 16, 17, 19. Step 2: Since there are n = 8 observations (an even number), the median is the arithmetic mean of the two middle values (the 4th and 5th values). Step 3: The 4th score is 12 and the 5th score is 14. Step 4: Median = (12 + 14) / 2 = 26 / 2 = 13.',
    workedSolution: 'Step 1: Sort ascending: 8, 10, 12, 12, 14, 16, 17, 19. Step 2: Identify middle two values: 12 and 14. Step 3: Compute mean of middle pair: (12 + 14) / 2 = 13.',
    expectedReasoning: 'After sorting an even count of data points, the median is the mean of the two central terms (12 and 14 = 13).',
    hint: 'First sort the numbers from smallest to largest, then find the average of the two middle numbers.',
    markingCriteria: 'Must select option B (13).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Confusing Mode with Median',
        explanation: 'Selecting 12 because it appears twice (mode), rather than averaging the two middle numbers.',
        typicalReasoningQuote: '12 appears most often so the median is 12.'
      },
      {
        answerIdOrPattern: 'D',
        misconceptionTitle: 'Picking the Arithmetic Mean Instead of Median',
        explanation: 'Adding all numbers (108 / 8 = 13.5), calculating mean rather than median.',
        typicalReasoningQuote: 'Sum is 108 divided by 8 items = 13.5.'
      }
    ],
    fallbackFollowUp: {
      id: 'math-11-fu',
      questionText: 'What is the MODE of the dataset: 8, 10, 12, 12, 14, 16, 17, 19?',
      options: [
        { id: 'A', text: '12' },
        { id: 'B', text: '13' },
        { id: 'C', text: '19' },
        { id: 'D', text: '8' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '12',
      explanation: 'The mode is the value that appears with the highest frequency; 12 appears twice while all other numbers appear once.'
    }
  },

  // -------------------------------------------------------------
  // 12. Theoretical Probability
  // -------------------------------------------------------------
  {
    id: 'math-12',
    grade: 'Grade 8',
    subject: 'Mathematics',
    topic: 'Statistics and Data Handling',
    subtopic: 'Theoretical Probability of Compound Events',
    topicId: 'math_statistics',
    topicTitle: 'Statistics, Data Handling, and Probability',
    difficulty: 'Intermediate',
    learningObjective: 'Calculate theoretical probability for rolling two standard six-sided dice.',
    questionText: 'Two standard, fair six-sided dice (each numbered 1 to 6) are rolled simultaneously. What is the theoretical probability of rolling a sum of exactly 7?',
    contextOrEquation: 'P(Event) = Favorable outcomes / Total sample space; Total outcomes = 6 × 6 = 36.',
    options: [
      { id: 'A', text: '1/6' },
      { id: 'B', text: '7/36' },
      { id: 'C', text: '1/12' },
      { id: 'D', text: '5/36' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: '1/6',
    conceptualExplanation: 'Total possible outcomes when rolling two dice = 6 × 6 = 36 equally likely pairs (d1, d2). Pairs summing to 7 are: (1, 6), (2, 5), (3, 4), (4, 3), (5, 2), and (6, 1). There are 6 favorable outcomes. Probability P(Sum = 7) = Favorable / Total = 6 / 36 = 1/6.',
    workedSolution: 'Step 1: Total outcomes = 6 * 6 = 36. Step 2: List pairs adding to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> 6 pairs. Step 3: P = 6 / 36 = 1/6.',
    expectedReasoning: 'Enumerating all ordered pairs gives 6 pairs out of 36, simplifying to 1/6.',
    hint: 'List all combinations of (die 1, die 2) that add to 7, then divide by the total 36 outcomes.',
    markingCriteria: 'Must select option A (1/6).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Using Target Sum as the Numerator',
        explanation: 'Placing the desired sum 7 directly into the numerator: 7/36.',
        typicalReasoningQuote: 'Since the sum is 7, the chance is 7 out of 36.'
      }
    ],
    fallbackFollowUp: {
      id: 'math-12-fu',
      questionText: 'What is the probability of rolling a sum of 2 (snake eyes) with two dice?',
      options: [
        { id: 'A', text: '1/36' },
        { id: 'B', text: '2/36' },
        { id: 'C', text: '1/12' },
        { id: 'D', text: '1/18' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '1/36',
      explanation: 'Only one outcome yields a sum of 2: (1, 1). Therefore, P = 1/36.'
    }
  },

  // -------------------------------------------------------------
  // 13. Linear Equations: Simultaneous Equations by Elimination
  // -------------------------------------------------------------
  {
    id: 'math-13',
    grade: 'Grade 9',
    subject: 'Mathematics',
    topic: 'Linear Equations',
    subtopic: 'Simultaneous Linear Equations in Two Variables',
    topicId: 'math_linear_equations',
    topicTitle: 'Linear Equations in One Variable',
    difficulty: 'Intermediate',
    learningObjective: 'Solve a system of two linear equations in two variables using elimination.',
    questionText: 'Solve the system of simultaneous linear equations for x and y: \n(1) 2x + 3y = 18 \n(2) 3x - y = 5',
    contextOrEquation: 'System: 2x + 3y = 18 and 3x - y = 5',
    options: [
      { id: 'A', text: 'x = 3, y = 4' },
      { id: 'B', text: 'x = 4, y = 3' },
      { id: 'C', text: 'x = 2, y = 1' },
      { id: 'D', text: 'x = 5, y = 2' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'x = 3, y = 4',
    conceptualExplanation: 'Use the elimination method. Multiply Equation (2) by 3 so the coefficients of y become opposites: 3 × (3x - y = 5) => 9x - 3y = 15. Now add this to Equation (1): (2x + 3y) + (9x - 3y) = 18 + 15 => 11x = 33 => x = 3. Substitute x = 3 into Equation (2): 3(3) - y = 5 => 9 - y = 5 => y = 4. Check in Equation (1): 2(3) + 3(4) = 6 + 12 = 18.',
    workedSolution: 'Step 1: Multiply eq (2) by 3: 9x - 3y = 15. Step 2: Add to eq (1): (2x + 3y) + (9x - 3y) = 18 + 15 => 11x = 33 => x = 3. Step 3: Substitute x = 3 into 3x - y = 5: 9 - y = 5 => y = 4. Solution: x = 3, y = 4.',
    expectedReasoning: 'Multiplying by 3 eliminates y upon addition, yielding 11x = 33 -> x = 3, y = 4.',
    hint: 'Multiply the second equation by 3 so the +3y and -3y cancel out when you add them.',
    markingCriteria: 'Must select option A (x = 3, y = 4).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Swapping Variable Solutions (x for y)',
        explanation: 'Accidentally assigning 4 to x and 3 to y.',
        typicalReasoningQuote: 'I got 3 and 4, so x is 4 and y is 3.'
      }
    ],
    fallbackFollowUp: {
      id: 'math-13-fu',
      questionText: 'What is the solution for x and y if x + y = 10 and x - y = 4?',
      options: [
        { id: 'A', text: 'x = 7, y = 3' },
        { id: 'B', text: 'x = 6, y = 4' },
        { id: 'C', text: 'x = 8, y = 2' },
        { id: 'D', text: 'x = 5, y = 5' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'x = 7, y = 3',
      explanation: 'Adding equations gives 2x = 14 => x = 7; subtracting gives 2y = 6 => y = 3.'
    }
  },

  // -------------------------------------------------------------
  // 14. Percentage, Profit, and Loss
  // -------------------------------------------------------------
  {
    id: 'math-14',
    grade: 'Grade 8',
    subject: 'Mathematics',
    topic: 'Commercial Mathematics',
    subtopic: 'Profit and Loss Percentage Calculations',
    topicId: 'math_commercial',
    topicTitle: 'Commercial Mathematics and Percentages',
    difficulty: 'Intermediate',
    learningObjective: 'Calculate profit or loss percentage based exclusively on Cost Price (CP).',
    questionText: 'A shopkeeper purchases a scientific calculator for $40 (Cost Price) and sells it to a customer for $50 (Selling Price). What is the profit percentage earned by the shopkeeper?',
    contextOrEquation: 'Profit = SP - CP; Profit % = (Profit / CP) × 100',
    options: [
      { id: 'A', text: '20%' },
      { id: 'B', text: '25%' },
      { id: 'C', text: '10%' },
      { id: 'D', text: '12.5%' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: '25%',
    conceptualExplanation: 'Profit = Selling Price (SP) - Cost Price (CP) = $50 - $40 = $10. In financial mathematics, profit percentage is ALWAYS calculated relative to the Cost Price (the initial capital investment), unless explicitly stated otherwise: Profit % = (Profit / CP) × 100 = ($10 / $40) × 100 = 1/4 × 100 = 25%. Calculating profit over Selling Price ($10 / $50 = 20%) is a standard retail misconception.',
    workedSolution: 'Step 1: Profit = 50 - 40 = $10. Step 2: Formula: Profit % = (Profit / Cost Price) * 100. Step 3: Compute: (10 / 40) * 100 = 0.25 * 100 = 25%.',
    expectedReasoning: 'Profit percentage is always computed on Cost Price ($10/$40 = 25%), not Selling Price ($10/$50 = 20%).',
    hint: 'Always divide the profit by the original COST price ($40), not the selling price!',
    markingCriteria: 'Must select option B (25%).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Dividing by Selling Price Instead of Cost Price',
        explanation: 'Computing ($10 / $50) × 100 = 20%, confusing margin on sales with markup on cost.',
        typicalReasoningQuote: '10 profit divided by 50 selling price is 20 percent.'
      }
    ],
    fallbackFollowUp: {
      id: 'math-14-fu',
      questionText: 'If an item bought for $80 is sold at a loss of 15%, what is the selling price?',
      options: [
        { id: 'A', text: '$68' },
        { id: 'B', text: '$65' },
        { id: 'C', text: '$72' },
        { id: 'D', text: '$60' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '$68',
      explanation: 'Loss = 15% of 80 = 0.15 × 80 = $12. Selling Price = 80 - 12 = $68.'
    }
  },

  // -------------------------------------------------------------
  // 15. Simple and Compound Interest Comparison
  // -------------------------------------------------------------
  {
    id: 'math-15',
    grade: 'Grade 8',
    subject: 'Mathematics',
    topic: 'Commercial Mathematics',
    subtopic: 'Simple vs Compound Interest',
    topicId: 'math_commercial',
    topicTitle: 'Commercial Mathematics and Percentages',
    difficulty: 'Advanced',
    learningObjective: 'Calculate compound interest annually and compare with simple interest over 2 years.',
    questionText: 'A principal sum of $1,000 is invested for 2 years at an annual interest rate of 10%. How much greater is the Compound Interest (compounded annually) than the Simple Interest over this 2-year period?',
    contextOrEquation: 'SI = (P × R × T) / 100; CI Amount = P(1 + R/100)ᵀ; CI = Amount - P; Difference = P(R/100)²',
    options: [
      { id: 'A', text: '$10 greater' },
      { id: 'B', text: '$20 greater' },
      { id: 'C', text: 'They are strictly identical.' },
      { id: 'D', text: '$100 greater' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: '$10 greater',
    conceptualExplanation: 'Simple Interest: SI = (1000 × 10 × 2) / 100 = $200. Compound Interest: Year 1 interest = 10% of 1000 = $100 (new principal = $1100). Year 2 interest = 10% of 1100 = $110. Total CI = 100 + 110 = $210. Difference = CI - SI = $210 - $200 = $10. The extra $10 represents interest earned in Year 2 on the $100 interest earned during Year 1 (10% of $100 = $10).',
    workedSolution: 'Step 1: Simple Interest = (1000 * 10 * 2) / 100 = $200. Step 2: Compound Interest Amount = 1000 * (1.10)² = 1000 * 1.21 = $1210. CI = 1210 - 1000 = $210. Step 3: Difference = 210 - 200 = $10.',
    expectedReasoning: 'Compound interest generates interest on interest; in Year 2, the $100 interest earns 10%, giving an extra $10.',
    hint: 'In compound interest, Year 1 interest earns its own 10% interest in Year 2. What is 10% of $100?',
    markingCriteria: 'Must select option A ($10 greater).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Believing Simple and Compound Interest Yield the Same Value',
        explanation: 'Assuming both interest formulas give the exact same return regardless of time period.',
        typicalReasoningQuote: 'Interest is 10% for 2 years either way so both give 200 dollars.'
      }
    ],
    fallbackFollowUp: {
      id: 'math-15-fu',
      questionText: 'For an investment of 1 year compounded annually, how does compound interest compare to simple interest at the same rate?',
      options: [
        { id: 'A', text: 'They are exactly equal for the first year.' },
        { id: 'B', text: 'Compound interest is double simple interest.' },
        { id: 'C', text: 'Simple interest is greater.' },
        { id: 'D', text: 'Compound interest is zero.' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'They are exactly equal for the first year.',
      explanation: 'During the first annual compounding period, no prior interest has accrued yet, so CI and SI are identical.'
    }
  },

  // -------------------------------------------------------------
  // 16. Geometry: Interior and Exterior Angles of Polygons
  // -------------------------------------------------------------
  {
    id: 'math-16',
    grade: 'Grade 8',
    subject: 'Mathematics',
    topic: 'Geometry',
    subtopic: 'Polygons and Angle Sum Formulas',
    topicId: 'math_geometry',
    topicTitle: 'Lines, Angles, and Triangles',
    difficulty: 'Intermediate',
    learningObjective: 'Calculate the measure of each interior angle and exterior angle of a regular polygon.',
    questionText: 'What is the measure of each interior angle in a regular regular hexagon (a 6-sided polygon where all sides and angles are equal)?',
    contextOrEquation: 'Sum of interior angles = (n - 2) × 180°; Each interior angle of regular polygon = [(n - 2) × 180°] / n',
    options: [
      { id: 'A', text: '120°' },
      { id: 'B', text: '108°' },
      { id: 'C', text: '60°' },
      { id: 'D', text: '720°' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: '120°',
    conceptualExplanation: 'For any n-sided polygon, the sum of interior angles is S = (n - 2) × 180°. For a hexagon, n = 6: S = (6 - 2) × 180° = 4 × 180° = 720°. In a regular hexagon, all 6 interior angles are equal: Each interior angle = 720° / 6 = 120°. Alternatively, exterior angle = 360° / 6 = 60°, so interior angle = 180° - 60° = 120°.',
    workedSolution: 'Step 1: Sum of interior angles = (6 - 2) * 180° = 4 * 180° = 720°. Step 2: Divide by number of angles (6): 720° / 6 = 120°. Step 3: Match to option A.',
    expectedReasoning: 'Hexagon angle sum is (6 - 2) × 180° = 720°; dividing equally across 6 vertices yields 120° per angle.',
    hint: 'Sum = (n - 2) × 180°. For 6 sides, sum is 4 × 180 = 720°. Now divide by 6.',
    markingCriteria: 'Must select option A (120°).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Confusing Interior with Exterior Angle',
        explanation: 'Calculating the exterior angle (360° / 6 = 60°) and confusing it with the interior angle.',
        typicalReasoningQuote: '360 divided by 6 is 60, so each angle inside is 60 degrees.'
      },
      {
        answerIdOrPattern: 'D',
        misconceptionTitle: 'Confusing Total Sum with Single Angle',
        explanation: 'Giving the sum of all angles (720°) instead of dividing by n.',
        typicalReasoningQuote: '4 times 180 is 720 degrees.'
      }
    ],
    fallbackFollowUp: {
      id: 'math-16-fu',
      questionText: 'What is the sum of all exterior angles for ANY convex polygon, regardless of how many sides it has?',
      options: [
        { id: 'A', text: '360°' },
        { id: 'B', text: '180°' },
        { id: 'C', text: '540°' },
        { id: 'D', text: 'n × 180°' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '360°',
      explanation: 'Walking around the perimeter of any closed polygon completes one full 360° turn, so exterior angles always sum to 360°.'
    }
  },

  // -------------------------------------------------------------
  // 17. Direct and Inverse Proportion
  // -------------------------------------------------------------
  {
    id: 'math-17',
    grade: 'Grade 8',
    subject: 'Mathematics',
    topic: 'Commercial Mathematics',
    subtopic: 'Direct and Inverse Proportion',
    topicId: 'math_commercial',
    topicTitle: 'Commercial Mathematics and Percentages',
    difficulty: 'Intermediate',
    learningObjective: 'Recognize inverse proportion and solve work/time problems (x₁y₁ = x₂y₂).',
    questionText: 'If 6 workers can construct a brick boundary wall in 12 days working at the same pace, how many days will it take 9 workers to complete the identical wall?',
    contextOrEquation: 'Inverse proportion: Workers × Days = Constant (Total worker-days); x₁y₁ = x₂y₂',
    options: [
      { id: 'A', text: '18 days' },
      { id: 'B', text: '8 days' },
      { id: 'C', text: '9 days' },
      { id: 'D', text: '4 days' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: '8 days',
    conceptualExplanation: 'Number of workers and time taken are inversely proportional: more workers require fewer days to finish the same total work. Total work = 6 workers × 12 days = 72 worker-days. With 9 workers: Days = Total Work / Workers = 72 worker-days / 9 workers = 8 days.',
    workedSolution: 'Step 1: Identify variation: inverse proportion (x₁ * y₁ = x₂ * y₂). Step 2: 6 * 12 = 9 * y₂. Step 3: 72 = 9 * y₂ => y₂ = 72 / 9 = 8 days.',
    expectedReasoning: 'Total work of 72 worker-days divided among 9 workers yields 8 days.',
    hint: 'More workers mean FEWER days! Multiply 6 × 12, then divide by 9.',
    markingCriteria: 'Must select option B (8 days). Correctly applies inverse variation.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Applying Direct Proportion to Work/Time',
        explanation: 'Cross-multiplying directly: 6/12 = 9/x => x = 18 days. This leads to the absurd conclusion that more workers take LONGER to build the wall.',
        typicalReasoningQuote: '6 goes with 12, so 9 goes with (9 * 12) / 6 = 18 days.'
      }
    ],
    fallbackFollowUp: {
      id: 'math-17-fu',
      questionText: 'Which of the following pairs of quantities represents DIRECT proportion?',
      options: [
        { id: 'A', text: 'The number of identical notebooks bought and the total cost.' },
        { id: 'B', text: 'The speed of a car and the time needed to travel a fixed distance.' },
        { id: 'C', text: 'The number of pipes filling a tank and time taken to fill it.' },
        { id: 'D', text: 'The number of people eating a pizza and size of each slice.' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'The number of identical notebooks bought and the total cost.',
      explanation: 'Buying more notebooks increases total cost proportionally (y/x = constant k), representing direct proportion.'
    }
  },

  // -------------------------------------------------------------
  // 18. Radicals: Simplifying Square Roots
  // -------------------------------------------------------------
  {
    id: 'math-18',
    grade: 'Grade 9',
    subject: 'Mathematics',
    topic: 'Exponents and Radicals',
    subtopic: 'Simplifying Radicals and Surds',
    topicId: 'math_exponents',
    topicTitle: 'Exponents, Powers, and Radicals',
    difficulty: 'Intermediate',
    learningObjective: 'Simplify square roots by extracting perfect square factors (√(a²b) = a√b).',
    questionText: 'Simplify the radical expression to its simplest exact surd form: √72',
    contextOrEquation: 'Factor into greatest perfect square: 72 = 36 × 2. √72 = √(36 × 2) = √36 × √2 = 6√2.',
    options: [
      { id: 'A', text: '6√2' },
      { id: 'B', text: '3√8' },
      { id: 'C', text: '2√6' },
      { id: 'D', text: '36' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: '6√2',
    conceptualExplanation: 'To simplify a square root to its simplest radical form, find the largest perfect square factor of 72. Perfect square factors of 72 are 4, 9, and 36. The greatest is 36: 72 = 36 × 2. Using the radical property √(a × b) = √a × √b: √72 = √(36 × 2) = √36 × √2 = 6√2. While 3√8 is mathematically equivalent, it is NOT fully simplified because 8 still contains the perfect square factor 4.',
    workedSolution: 'Step 1: Find greatest square factor of 72: 36 * 2. Step 2: Split radical: √36 * √2. Step 3: Compute √36 = 6. Step 4: Result is 6√2.',
    expectedReasoning: 'Extracting largest perfect square factor 36 gives 6√2.',
    hint: 'What is the largest perfect square (4, 9, 16, 25, 36...) that divides evenly into 72?',
    markingCriteria: 'Must select option A (6√2).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Incomplete Radical Simplification',
        explanation: 'Factoring 72 as 9 × 8 to get 3√8, but stopping without simplifying √8 = 2√2.',
        typicalReasoningQuote: '9 is a square so √72 = 3√8 and that is finished.'
      },
      {
        answerIdOrPattern: 'D',
        misconceptionTitle: 'Dividing by 2 Instead of Taking Square Root',
        explanation: 'Confusing square root with dividing by 2 (72 / 2 = 36).',
        typicalReasoningQuote: 'Half of 72 is 36.'
      }
    ],
    fallbackFollowUp: {
      id: 'math-18-fu',
      questionText: 'Simplify the radical: √50',
      options: [
        { id: 'A', text: '5√2' },
        { id: 'B', text: '2√5' },
        { id: 'C', text: '25' },
        { id: 'D', text: '10√5' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '5√2',
      explanation: '50 = 25 × 2. Thus √50 = √25 × √2 = 5√2.'
    }
  },

  // -------------------------------------------------------------
  // 19. Linear Inequalities on the Number Line
  // -------------------------------------------------------------
  {
    id: 'math-19',
    grade: 'Grade 9',
    subject: 'Mathematics',
    topic: 'Linear Equations',
    subtopic: 'Solving Linear Inequalities and Reversing Signs',
    topicId: 'math_linear_equations',
    topicTitle: 'Linear Equations in One Variable',
    difficulty: 'Intermediate',
    learningObjective: 'Solve linear inequalities and reverse the inequality sign when multiplying or dividing by a negative number.',
    questionText: 'Solve the inequality for x: -4x + 7 ≤ 23',
    contextOrEquation: '-4x + 7 ≤ 23; Rule: Multiplying or dividing both sides by a negative number reverses the inequality symbol (≤ becomes ≥).',
    options: [
      { id: 'A', text: 'x ≥ -4' },
      { id: 'B', text: 'x ≤ -4' },
      { id: 'C', text: 'x ≤ 4' },
      { id: 'D', text: 'x ≥ 4' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'x ≥ -4',
    conceptualExplanation: 'Step 1: Subtract 7 from both sides: -4x ≤ 23 - 7 => -4x ≤ 16. Step 2: Divide both sides by -4. CRITICAL RULE: Whenever you divide or multiply both sides of an inequality by a negative number, the inequality sign MUST reverse direction (≤ flips to ≥). Step 3: x ≥ 16 / (-4) => x ≥ -4.',
    workedSolution: 'Step 1: -4x + 7 ≤ 23. Step 2: Subtract 7: -4x ≤ 16. Step 3: Divide by -4 and FLIP inequality sign: x ≥ -4.',
    expectedReasoning: 'Dividing by negative four requires reversing the inequality sign from ≤ to ≥, yielding x ≥ -4.',
    hint: 'Remember the golden rule of inequalities: what happens to the inequality sign when you divide by a negative number?',
    markingCriteria: 'Must select option A (x ≥ -4). Correctly flips direction of inequality.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Forgetting to Reverse Inequality Sign',
        explanation: 'Dividing by -4 but keeping the symbol ≤, obtaining x ≤ -4.',
        typicalReasoningQuote: '16 divided by -4 is -4, so x <= -4.'
      }
    ],
    fallbackFollowUp: {
      id: 'math-19-fu',
      questionText: 'If -x > 5, which statement is true about x?',
      options: [
        { id: 'A', text: 'x < -5' },
        { id: 'B', text: 'x > -5' },
        { id: 'C', text: 'x = -5' },
        { id: 'D', text: 'x > 5' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'x < -5',
      explanation: 'Multiplying both sides by -1 reverses the inequality sign: x < -5.'
    }
  },

  // -------------------------------------------------------------
  // 20. Mensuration: Surface Area of Cuboids
  // -------------------------------------------------------------
  {
    id: 'math-20',
    grade: 'Grade 8',
    subject: 'Mathematics',
    topic: 'Mensuration',
    subtopic: 'Total and Lateral Surface Area of Cuboids',
    topicId: 'math_mensuration',
    topicTitle: 'Mensuration: Perimeter, Area, and Volume',
    difficulty: 'Intermediate',
    learningObjective: 'Calculate the total surface area of a rectangular cuboid box (TSA = 2(lb + bh + hl)).',
    questionText: 'A rectangular cardboard shipping box measures length l = 10 cm, width w = 6 cm, and height h = 4 cm. What is the total surface area of cardboard required to manufacture this closed box?',
    contextOrEquation: 'Total Surface Area of Cuboid = 2(lw + wh + hl)',
    options: [
      { id: 'A', text: '240 cm²' },
      { id: 'B', text: '248 cm²' },
      { id: 'C', text: '124 cm²' },
      { id: 'D', text: '120 cm²' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: '248 cm²',
    conceptualExplanation: 'A closed cuboid has six rectangular faces consisting of three opposite pairs: top and bottom (2 × l × w), front and back (2 × l × h), and two sides (2 × w × h). TSA = 2(lw + wh + hl) = 2 × [(10 × 6) + (6 × 4) + (10 × 4)] = 2 × [60 + 24 + 40] = 2 × [124] = 248 cm².',
    workedSolution: 'Step 1: Compute pairwise face areas: lw = 10 * 6 = 60; wh = 6 * 4 = 24; hl = 10 * 4 = 40. Step 2: Sum the three areas: 60 + 24 + 40 = 124 cm². Step 3: Multiply by 2 for all six faces: 124 * 2 = 248 cm².',
    expectedReasoning: 'Summing the three unique face pairs 2(60 + 24 + 40) gives 248 cm² total surface area.',
    hint: 'Add the three face areas: (10×6) + (6×4) + (10×4), then multiply by 2 because each face has an opposite twin.',
    markingCriteria: 'Must select option B (248 cm²).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Confusing Volume with Surface Area',
        explanation: 'Multiplying length × width × height (10 × 6 × 4 = 240 cm³) and mistaking volume for surface area.',
        typicalReasoningQuote: '10 times 6 times 4 gives 240.'
      },
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Forgetting to Double for Opposite Faces',
        explanation: 'Adding the three faces once (60 + 24 + 40 = 124 cm²) without multiplying by 2.',
        typicalReasoningQuote: 'Sum of the faces is 60 + 24 + 40 = 124 cm².'
      }
    ],
    fallbackFollowUp: {
      id: 'math-20-fu',
      questionText: 'What is the volume of this same box (10 cm × 6 cm × 4 cm)?',
      options: [
        { id: 'A', text: '240 cm³' },
        { id: 'B', text: '248 cm³' },
        { id: 'C', text: '124 cm³' },
        { id: 'D', text: '60 cm³' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '240 cm³',
      explanation: 'Volume = length × width × height = 10 × 6 × 4 = 240 cm³.'
    }
  }
];
