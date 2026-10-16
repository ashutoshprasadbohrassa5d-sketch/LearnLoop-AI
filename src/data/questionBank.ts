import type { STEMQuestion } from '../types/learning.ts';
import { ALL_MODULAR_QUESTIONS, MODULAR_CURRICULUM_METADATA } from './questions/index.ts';

const ORIGINAL_CORE_QUESTIONS: STEMQuestion[] = [
  // =========================================================================
  // GRADE 8 SCIENCE: FORCE AND MOTION
  // =========================================================================
  {
    id: 'g8-sci-force-01',
    grade: 'Grade 8',
    subject: 'Science',
    topicId: 'force_and_motion',
    topicTitle: 'Force and Motion',
    learningObjective: "Apply Newton's First Law: understand that an object moving at constant velocity has zero net force acting upon it.",
    questionText: 'A deep space probe is traveling through interstellar space far from any planets or stars at a constant velocity of 20,000 km/h in a straight line. What continuous forward engine thrust is required to keep it moving at this constant speed?',
    contextOrEquation: 'v = 20,000 km/h (constant, straight line, deep space vacuum)',
    options: [
      { id: 'A', text: 'Zero forward thrust is required.' },
      { id: 'B', text: 'A continuous thrust equal to the probe\'s weight.' },
      { id: 'C', text: 'A small continuous thrust to overcome the vacuum of space.' },
      { id: 'D', text: 'A thrust proportional to its speed (20,000 N).' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Zero forward thrust is required.',
    conceptualExplanation: "According to Newton's First Law of Motion (Law of Inertia), an object in motion will continue moving at a constant velocity unless acted upon by an unbalanced external force. Because deep space has no friction or air resistance, no continuous force is required to sustain motion.",
    markingCriteria: "Correct answer is A (Zero forward thrust). Any answer claiming that sustained motion requires a continuous forward force represents the classic Aristotelian misconception.",
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Motion Requires Continuous Force (Aristotelian Trap)',
        explanation: 'Believing that any constant motion requires a continuous driving force, rather than recognizing that force is only needed to CHANGE motion (accelerate).',
        typicalReasoningQuote: 'To keep moving at 20,000 km/h the engines must stay on or else the probe will slow down and stop.'
      },
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Confusing Space Vacuum with Friction',
        explanation: 'Believing the vacuum of space exerts resistance or drag that must be overcome.',
        typicalReasoningQuote: 'Space still has resistance so a small thrust is needed to keep it from stopping.'
      },
      {
        answerIdOrPattern: 'D',
        misconceptionTitle: 'Proportional Speed-Force Equivalence',
        explanation: 'Equating force directly with velocity (F = v) instead of acceleration (F = ma).',
        typicalReasoningQuote: 'Faster objects need greater force to maintain their speed.'
      }
    ],
    fallbackFollowUp: {
      id: 'g8-sci-force-01-fu',
      questionText: 'A hockey puck is gliding across frictionless horizontal ice at a constant speed of 8 m/s toward the goal. What is the net horizontal force acting on the puck while it glides?',
      contextOrEquation: 'Frictionless surface, constant velocity = 8 m/s',
      options: [
        { id: 'A', text: '8 Newtons in the direction of motion' },
        { id: 'B', text: '0 Newtons (forces are balanced)' },
        { id: 'C', text: 'A forward force that gradually decreases' },
        { id: 'D', text: 'A force equal to the player\'s original push' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: '0 Newtons (forces are balanced)',
      explanation: 'On a frictionless surface, no horizontal force is acting to speed up or slow down the puck. Its acceleration is 0 m/s², so by F = ma, the net horizontal force is strictly 0 N.'
    }
  },
  {
    id: 'g8-sci-force-02',
    grade: 'Grade 8',
    subject: 'Science',
    topicId: 'force_and_motion',
    topicTitle: 'Force and Motion',
    learningObjective: "Distinguish between balanced forces and unbalanced forces in terms of net acceleration.",
    questionText: 'Two students push a heavy crate across a carpeted floor. Student 1 pushes to the right with 45 N. Student 2 pushes to the right with 35 N. The carpet exerts a frictional force of 80 N to the left. What happens to the crate?',
    contextOrEquation: 'Rightward forces: 45 N + 35 N. Leftward force: 80 N.',
    options: [
      { id: 'A', text: 'The crate accelerates to the right because two people are pushing it.' },
      { id: 'B', text: 'The crate moves with constant velocity or stays at rest because net force is 0 N.' },
      { id: 'C', text: 'The crate moves backward because friction overcomes human pushing.' },
      { id: 'D', text: 'The crate accelerates because 45 N > 35 N.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'The crate moves with constant velocity or stays at rest because net force is 0 N.',
    conceptualExplanation: "Net force is calculated by vector sum: (45 N + 35 N) - 80 N = 80 N - 80 N = 0 N. When net force is 0 N, forces are balanced, meaning there is zero acceleration (it remains at rest if stationary, or maintains constant velocity).",
    markingCriteria: "Correct answer is B. Students must calculate net force: 45 + 35 - 80 = 0 N.",
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Agent Count Fallacy',
        explanation: 'Assuming multiple people pushing automatically overpowers friction without calculating total magnitudes.',
        typicalReasoningQuote: 'Two people pushing must beat friction since there are two forces on one side.'
      }
    ],
    fallbackFollowUp: {
      id: 'g8-sci-force-02-fu',
      questionText: 'A skydiver is falling through the air. Gravity pulls them downward with 600 N, and upward air resistance equals 600 N. Which statement describes their vertical motion?',
      contextOrEquation: 'F_gravity = 600 N (down), F_drag = 600 N (up)',
      options: [
        { id: 'A', text: 'They immediately freeze in mid-air and stop moving.' },
        { id: 'B', text: 'They continue falling at a constant speed (terminal velocity).' },
        { id: 'C', text: 'They accelerate downward because gravity is always dominant.' },
        { id: 'D', text: 'They begin accelerating upward.' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'They continue falling at a constant speed (terminal velocity).',
      explanation: 'Balanced forces (600 N down and 600 N up) mean zero net force and zero acceleration. Because the skydiver was already moving downward, they continue downward at a constant speed (terminal velocity).'
    }
  },

  // =========================================================================
  // GRADE 8 & 9 SCIENCE: CHEMICAL EQUATIONS
  // =========================================================================
  {
    id: 'g8-sci-chem-01',
    grade: 'Grade 8',
    subject: 'Science',
    topicId: 'chemical_equations',
    topicTitle: 'Chemical Equations',
    learningObjective: "Balance chemical equations by modifying coefficients without altering chemical subscripts.",
    questionText: 'A student is trying to balance the chemical equation for the formation of water: H₂ + O₂ → H₂O. To balance the oxygen atoms, which method is scientifically correct?',
    contextOrEquation: 'H₂ + O₂ → H₂O',
    options: [
      { id: 'A', text: 'Change H₂O into H₂O₂ by changing the subscript to 2.' },
      { id: 'B', text: 'Change O₂ into O by removing the subscript on oxygen.' },
      { id: 'C', text: 'Place a coefficient of 2 in front of H₂O and 2 in front of H₂: 2H₂ + O₂ → 2H₂O.' },
      { id: 'D', text: 'Add an extra + O on the product side: H₂ + O₂ → H₂O + O.' },
    ],
    correctAnswerId: 'C',
    correctAnswerText: 'Place a coefficient of 2 in front of H₂O and 2 in front of H₂: 2H₂ + O₂ → 2H₂O.',
    conceptualExplanation: "Subscripts define the chemical identity of a compound (H₂O is water, H₂O₂ is toxic hydrogen peroxide). When balancing equations, you may ONLY change coefficients (the numbers in front of molecules), which specify the number of molecules reacting, never the subscripts.",
    markingCriteria: "Correct answer is C. Option A is the classic subscript-altering error which changes chemical identity.",
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Subscript Modification Fallacy',
        explanation: 'Altering molecular subscripts to force atom counts to match, unaware that this creates an entirely different chemical substance.',
        typicalReasoningQuote: 'I just changed H2O to H2O2 so both sides have 2 oxygens.'
      },
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Diatomic Gas Subscript Removal',
        explanation: 'Removing subscripts from stable diatomic gases (like O2) to simplify balancing.',
        typicalReasoningQuote: 'Just make it H2 + O -> H2O so oxygen is balanced directly.'
      }
    ],
    fallbackFollowUp: {
      id: 'g8-sci-chem-01-fu',
      questionText: 'Consider the reaction for ammonia synthesis: N₂ + H₂ → NH₃. Which balanced equation correctly conserves all nitrogen and hydrogen atoms?',
      contextOrEquation: 'N₂ + H₂ → NH₃',
      options: [
        { id: 'A', text: 'N₂ + H₃ → N₂H₃' },
        { id: 'B', text: 'N₂ + 3H₂ → 2NH₃' },
        { id: 'C', text: 'N₂ + H₂ → NH₂' },
        { id: 'D', text: '2N₂ + 3H₂ → 4NH₃' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'N₂ + 3H₂ → 2NH₃',
      explanation: 'Reactants: 2 N atoms, 6 H atoms (3 × 2). Products: 2 N atoms (2 × 1), 6 H atoms (2 × 3). Subscripts were preserved and coefficients properly balance both sides.'
    }
  },
  {
    id: 'g9-sci-chem-02',
    grade: 'Grade 9',
    subject: 'Science',
    topicId: 'chemical_equations',
    topicTitle: 'Chemical Equations',
    learningObjective: "Apply the Law of Conservation of Mass to determine reactant and product mass relationships in closed systems.",
    questionText: 'A student burns 12 g of solid magnesium ribbon in 8 g of pure oxygen gas inside a sealed, airtight glass flask. A white powder (magnesium oxide, MgO) is formed. What will the total mass inside the flask be after the reaction is complete?',
    contextOrEquation: '2Mg(s) + O₂(g) → 2MgO(s) in a sealed flask. 12 g Mg + 8 g O₂.',
    options: [
      { id: 'A', text: 'Less than 20 g because some mass turned into bright light and heat.' },
      { id: 'B', text: 'Exactly 20 g, because atoms cannot be created or destroyed in a chemical reaction.' },
      { id: 'C', text: 'More than 20 g because the oxide compound is denser than gas.' },
      { id: 'D', text: '12 g, because the oxygen gas evaporates away.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Exactly 20 g, because atoms cannot be created or destroyed in a chemical reaction.',
    conceptualExplanation: "The Law of Conservation of Mass states that in any closed system, mass cannot be created or destroyed during a chemical reaction. The atoms are merely rearranged into new chemical bonds. Therefore, Total Mass of Reactants (12 g + 8 g = 20 g) = Total Mass of Products (20 g).",
    markingCriteria: "Correct answer is B (Exactly 20 g). Option A represents the misconception that energy emission (light/heat) consumes chemical mass in non-nuclear reactions.",
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Mass-Energy Loss Misconception in Chemical Reactions',
        explanation: 'Believing that light and heat given off in combustion reactions causes measurable mass loss in a closed container.',
        typicalReasoningQuote: 'Since there was a bright flame and heat released, some mass escaped as energy.'
      },
      {
        answerIdOrPattern: 'D',
        misconceptionTitle: 'Invisible Gas Mass Disregard',
        explanation: 'Believing that gases do not have mass or that sealed gas escapes.',
        typicalReasoningQuote: 'Gas has no weight so only the magnesium remains.'
      }
    ],
    fallbackFollowUp: {
      id: 'g9-sci-chem-02-fu',
      questionText: 'In a sealed plastic bottle, 50 g of vinegar reacts with 10 g of baking soda to produce carbon dioxide gas and a sodium acetate solution. The bottle expands but remains completely sealed. What is the total mass of the bottle and its contents after fizzing stops?',
      contextOrEquation: '50 g vinegar + 10 g baking soda in a sealed bottle',
      options: [
        { id: 'A', text: 'Less than 60 g because gas bubbles have negative weight.' },
        { id: 'B', text: 'Exactly 60 g plus the bottle mass, because no gas escaped the sealed system.' },
        { id: 'C', text: '50 g because baking soda dissolved into nothing.' },
        { id: 'D', text: '40 g due to the pressure inside.' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'Exactly 60 g plus the bottle mass, because no gas escaped the sealed system.',
      explanation: 'Because the bottle remained sealed, all produced carbon dioxide gas was trapped inside. Mass of reactants = mass of products (50 g + 10 g = 60 g).'
    }
  },

  // =========================================================================
  // GRADE 8 & 9 MATHEMATICS: BASIC ALGEBRA
  // =========================================================================
  {
    id: 'g8-math-alg-01',
    grade: 'Grade 8',
    subject: 'Mathematics',
    topicId: 'basic_algebra',
    topicTitle: 'Basic Algebra',
    learningObjective: "Solve two-step linear equations using inverse operations in the correct reverse order of operations.",
    questionText: 'Solve for x: 3x - 7 = 14. What is the first inverse operation you should perform to isolate the variable term efficiently, and what is the final value of x?',
    contextOrEquation: '3x - 7 = 14',
    options: [
      { id: 'A', text: 'Add 7 to both sides, then divide by 3: x = 7' },
      { id: 'B', text: 'Subtract 7 from both sides, then divide by 3: x = 7/3' },
      { id: 'C', text: 'Divide both sides by 3 first: x - 7 = 4.67' },
      { id: 'D', text: 'Multiply both sides by 3: x = 49' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Add 7 to both sides, then divide by 3: x = 7',
    conceptualExplanation: "To solve linear equations, undo operations in reverse order of operations (reverse PEMDAS). First, undo subtraction by adding 7 to both sides: 3x - 7 + 7 = 14 + 7 → 3x = 21. Next, undo multiplication by dividing both sides by 3: x = 21 / 3 = 7.",
    markingCriteria: "Correct answer is A (x = 7). Option B fails inverse sign logic (subtracting instead of adding 7).",
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Sign Reversal Confusion (Incorrect Inverse)',
        explanation: 'Subtracting a term that is already being subtracted instead of using addition to cancel it.',
        typicalReasoningQuote: 'Since there is a 7, I subtracted 7 from 14 to get 7, then divided by 3.'
      },
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Order of Inverse Operations Violation',
        explanation: 'Attempting to divide before clearing additive constants without distributing to all terms.',
        typicalReasoningQuote: 'I divided everything by 3 first because 3 is next to x.'
      }
    ],
    fallbackFollowUp: {
      id: 'g8-math-alg-01-fu',
      questionText: 'Solve for y in the equation: 4y - 9 = 23. What is the value of y?',
      contextOrEquation: '4y - 9 = 23',
      options: [
        { id: 'A', text: 'y = 3.5' },
        { id: 'B', text: 'y = 8' },
        { id: 'C', text: 'y = 32' },
        { id: 'D', text: 'y = 14' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'y = 8',
      explanation: 'Step 1: Add 9 to both sides: 4y = 23 + 9 = 32. Step 2: Divide both sides by 4: y = 32 / 4 = 8.'
    }
  },
  {
    id: 'g9-math-alg-02',
    grade: 'Grade 9',
    subject: 'Mathematics',
    topicId: 'basic_algebra',
    topicTitle: 'Basic Algebra',
    learningObjective: "Correctly distribute negative coefficients across parentheses in multi-step algebraic expressions.",
    questionText: 'Simplify the algebraic expression by expanding the parentheses: 5 - 2(3x - 4). Which expression is completely simplified?',
    contextOrEquation: '5 - 2(3x - 4)',
    options: [
      { id: 'A', text: '-6x + 13' },
      { id: 'B', text: '-6x - 3' },
      { id: 'C', text: '9x - 12' },
      { id: 'D', text: '-6x - 8' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: '-6x + 13',
    conceptualExplanation: "The distributive property requires multiplying both terms inside by -2: (-2 × 3x) = -6x, and (-2 × -4) = +8 (negative times negative is positive). Then combine constant terms: 5 + 8 = 13. The simplified result is -6x + 13.",
    markingCriteria: "Correct answer is A (-6x + 13). Option B represents the common failure to distribute the negative sign to the second term (-2 * -4 = -8 error).",
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Negative Sign Dropping on Second Distributed Term',
        explanation: 'Multiplying -2 by 3x to get -6x, but forgetting that -2 × -4 yields POSITIVE 8, resulting in 5 - 8 = -3.',
        typicalReasoningQuote: 'I distributed 2 to get 6x - 8, so 5 - 6x - 8 = -6x - 3.'
      },
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Pre-Subtraction Priority Error',
        explanation: 'Subtracting 5 - 2 first to get 3, then multiplying 3(3x - 4) = 9x - 12, violating multiplication-before-subtraction order of operations.',
        typicalReasoningQuote: 'First I did 5 minus 2 which is 3, then 3 times 3x minus 4.'
      }
    ],
    fallbackFollowUp: {
      id: 'g9-math-alg-02-fu',
      questionText: 'Simplify the expression: 7 - 3(2x - 5). Which expression is correct?',
      contextOrEquation: '7 - 3(2x - 5)',
      options: [
        { id: 'A', text: '-6x - 8' },
        { id: 'B', text: '-6x + 22' },
        { id: 'C', text: '8x - 20' },
        { id: 'D', text: '-6x - 15' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: '-6x + 22',
      explanation: 'Distribute -3 to both terms: -3 × 2x = -6x, and -3 × -5 = +15. Then combine constants: 7 + 15 = 22. Result: -6x + 22.'
    }
  },
  {
    id: 'g9-sci-force-03',
    grade: 'Grade 9',
    subject: 'Science',
    topicId: 'force_and_motion',
    topicTitle: 'Force and Motion',
    learningObjective: "Apply Newton's Second Law (F = ma) to predict how changing mass or force alters acceleration.",
    questionText: 'A toy racecar of mass m accelerates at 6 m/s² when pushed by a net force F. If you double the mass of the car to 2m and triple the net force to 3F, what will the car\'s new acceleration be?',
    contextOrEquation: 'F = ma → a = F / m. Original a = 6 m/s². New Force = 3F, New Mass = 2m.',
    options: [
      { id: 'A', text: '9 m/s²' },
      { id: 'B', text: '18 m/s²' },
      { id: 'C', text: '4 m/s²' },
      { id: 'D', text: '36 m/s²' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: '9 m/s²',
    conceptualExplanation: "By Newton's Second Law, a = F_net / m. When force is multiplied by 3 and mass is multiplied by 2, the new acceleration is a' = (3F) / (2m) = (3/2) × (F/m) = 1.5 × 6 m/s² = 9 m/s².",
    markingCriteria: "Correct answer is A (9 m/s²). Option B multiplies by 3 without dividing by 2; Option C inverts the ratio.",
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Inertia Neglect (Ignoring Mass Increase)',
        explanation: 'Only scaling acceleration with force (3 × 6 = 18) while forgetting that doubling mass halves the acceleration.',
        typicalReasoningQuote: 'Triple the force means 3 times 6, which is 18 m/s².'
      }
    ],
    fallbackFollowUp: {
      id: 'g9-sci-force-03-fu',
      questionText: 'A shopping cart accelerates at 4 m/s² under a net force F. If you double the force to 2F and quadruple the mass to 4m, what is the new acceleration?',
      contextOrEquation: 'a = F/m = 4 m/s². New Force = 2F, New Mass = 4m.',
      options: [
        { id: 'A', text: '8 m/s²' },
        { id: 'B', text: '2 m/s²' },
        { id: 'C', text: '16 m/s²' },
        { id: 'D', text: '1 m/s²' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: '2 m/s²',
      explanation: 'New acceleration = (2F) / (4m) = (2/4) × (F/m) = 0.5 × 4 m/s² = 2 m/s².'
    }
  },
  {
    id: 'g8-math-alg-03',
    grade: 'Grade 8',
    subject: 'Mathematics',
    topicId: 'basic_algebra',
    topicTitle: 'Basic Algebra',
    learningObjective: "Solve equations with variables on both sides by collecting variable terms onto one side.",
    questionText: 'Solve for x: 5x + 3 = 2x + 18. What is the value of x?',
    contextOrEquation: '5x + 3 = 2x + 18',
    options: [
      { id: 'A', text: 'x = 5' },
      { id: 'B', text: 'x = 3' },
      { id: 'C', text: 'x = 7' },
      { id: 'D', text: 'x = 21/7 = 3' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'x = 5',
    conceptualExplanation: "Subtract 2x from both sides to combine variables: 5x - 2x + 3 = 18 → 3x + 3 = 18. Subtract 3 from both sides: 3x = 15. Divide by 3: x = 15 / 3 = 5.",
    markingCriteria: "Correct answer is A (x = 5). Option C adds 2x to 5x (getting 7x = 21).",
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Adding Instead of Subtracting Opposite Variable',
        explanation: 'Adding 2x to 5x across the equals sign instead of using subtraction to eliminate 2x from the right side.',
        typicalReasoningQuote: 'I added 5x and 2x to get 7x, and 18 + 3 = 21, so 21 / 7 = 3 (or 7).'
      }
    ],
    fallbackFollowUp: {
      id: 'g8-math-alg-03-fu',
      questionText: 'Solve for p: 6p - 4 = 2p + 16. What is the value of p?',
      contextOrEquation: '6p - 4 = 2p + 16',
      options: [
        { id: 'A', text: 'p = 2.5' },
        { id: 'B', text: 'p = 5' },
        { id: 'C', text: 'p = 20' },
        { id: 'D', text: 'p = 10' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'p = 5',
      explanation: 'Subtract 2p from both sides: 4p - 4 = 16. Add 4: 4p = 20. Divide by 4: p = 5.'
    }
  }
];

export const BUILT_IN_QUESTIONS: STEMQuestion[] = [
  ...ORIGINAL_CORE_QUESTIONS,
  ...ALL_MODULAR_QUESTIONS,
];

// Curated Judge Demo presets to demonstrate misconception diagnosis in seconds
export interface JudgeDemoPreset {
  id: string;
  title: string;
  subject: string;
  grade: string;
  questionId: string;
  selectedOptionId: string;
  studentReasoning: string;
  expectedMisconceptionTitle: string;
  expectedConfidence: 'high' | 'medium' | 'low' | 'insufficient_evidence';
}

export const JUDGE_DEMO_PRESETS: JudgeDemoPreset[] = [
  {
    id: 'preset-aristotle-force',
    title: 'Force & Motion: Aristotelian Thrust Trap',
    grade: 'Grade 8',
    subject: 'Science',
    questionId: 'g8-sci-force-01',
    selectedOptionId: 'B',
    studentReasoning: 'To keep moving at 20,000 km/h in space the engines have to keep firing continuously, otherwise the rocket will run out of push and coast to a complete stop.',
    expectedMisconceptionTitle: 'Motion Requires Continuous Force (Law of Inertia violation)',
    expectedConfidence: 'high'
  },
  {
    id: 'preset-subscript-chem',
    title: 'Chemical Equations: Subscript Altering Error',
    grade: 'Grade 8',
    subject: 'Science',
    questionId: 'g8-sci-chem-01',
    selectedOptionId: 'A',
    studentReasoning: 'There are 2 oxygens on the left and only 1 in H2O on the right, so the simplest thing is to put a small 2 after O to make H2O2.',
    expectedMisconceptionTitle: 'Subscript Modification Fallacy (Altering Molecular Identity)',
    expectedConfidence: 'high'
  },
  {
    id: 'preset-negative-distributive',
    title: 'Algebra: Distributing Negative Signs Trap',
    grade: 'Grade 9',
    subject: 'Mathematics',
    questionId: 'g9-math-alg-02',
    selectedOptionId: 'B',
    studentReasoning: 'I multiplied -2 by 3x to get -6x, and then 2 times 4 is 8, so I did 5 - 8 = -3, giving -6x - 3.',
    expectedMisconceptionTitle: 'Negative Sign Dropping on Second Distributed Term',
    expectedConfidence: 'high'
  },
  {
    id: 'preset-algebra-inverse-correct',
    title: 'Algebra: Valid Inverse Operations (3x - 7 = 14)',
    grade: 'Grade 8',
    subject: 'Mathematics',
    questionId: 'g8-math-alg-01',
    selectedOptionId: 'A',
    studentReasoning: 'Add 7 to both sides, then divide by 3.',
    expectedMisconceptionTitle: 'None (Accurate Mathematical Solution)',
    expectedConfidence: 'insufficient_evidence'
  },
  {
    id: 'preset-chem-conservation-correct',
    title: 'Chemistry: Conservation of Atoms (2H₂ + O₂ → 2H₂O)',
    grade: 'Grade 8',
    subject: 'Science',
    questionId: 'g8-sci-chem-01',
    selectedOptionId: 'C',
    studentReasoning: 'I chose this because I wanted to balance out the RHS and LHS with the number of atoms of each element without affecting the molecular form of elements, which cannot be changed.',
    expectedMisconceptionTitle: 'None (Accurate Conservation of Atoms)',
    expectedConfidence: 'insufficient_evidence'
  },
  {
    id: 'preset-empty-reasoning',
    title: 'Empty Reasoning: Honest Uncertainty Test',
    grade: 'Grade 8',
    subject: 'Science',
    questionId: 'g8-sci-force-01',
    selectedOptionId: 'C',
    studentReasoning: '', // Empty reasoning
    expectedMisconceptionTitle: 'None (Explicit Insufficient Evidence)',
    expectedConfidence: 'insufficient_evidence'
  }
];

export const TOPIC_METADATA = [
  {
    id: 'force_and_motion',
    title: 'Force and Motion (Core Benchmark)',
    subject: 'Physics' as const,
    grades: ['Grade 8', 'Grade 9'] as const,
    description: "Newton's laws, net forces, friction, and constant velocity vs acceleration.",
    icon: 'Compass'
  },
  {
    id: 'chemical_equations',
    title: 'Chemical Equations (Core Benchmark)',
    subject: 'Chemistry' as const,
    grades: ['Grade 8', 'Grade 9'] as const,
    description: "Conservation of mass, reactant/product balancing, and coefficient rules.",
    icon: 'FlaskConical'
  },
  {
    id: 'basic_algebra',
    title: 'Basic Algebra (Core Benchmark)',
    subject: 'Mathematics' as const,
    grades: ['Grade 8', 'Grade 9'] as const,
    description: "Multi-step linear equations, distribution with negative signs, and variable isolation.",
    icon: 'Calculator'
  },
  ...MODULAR_CURRICULUM_METADATA.flatMap((subj) =>
    subj.topics.map((t) => ({
      id: t.id,
      title: t.title,
      subject: subj.subject,
      grades: ['Grade 8', 'Grade 9'] as const,
      description: t.description,
      icon: subj.icon,
    }))
  ),
];
