import type { STEMQuestion } from '../../types/learning.ts';

export const PHYSICS_QUESTIONS: STEMQuestion[] = [
  // -------------------------------------------------------------
  // 1. Newton's First Law (Law of Inertia)
  // -------------------------------------------------------------
  {
    id: 'phy-01',
    grade: 'Grade 8',
    subject: 'Physics',
    topic: 'Force and Motion',
    subtopic: "Newton's First Law and Inertia",
    topicId: 'physics_force_motion',
    topicTitle: 'Force and Laws of Motion',
    difficulty: 'Beginner',
    learningObjective: "Apply Newton's First Law: recognize that an object moving at constant velocity has zero net unbalanced force.",
    questionText: 'A spacecraft is coasting through deep interstellar space far from any gravitational bodies at a constant velocity of 25,000 km/h in a straight line. What net forward thrust must its engines continuously fire to maintain this speed?',
    contextOrEquation: 'v = 25,000 km/h (constant velocity, straight line, deep space vacuum)',
    options: [
      { id: 'A', text: 'Zero forward thrust is required.' },
      { id: 'B', text: 'A continuous thrust equal to the spacecraft’s mass times its velocity.' },
      { id: 'C', text: 'A small continuous thrust to overcome the resistance of empty space.' },
      { id: 'D', text: 'A thrust that increases linearly with time.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Zero forward thrust is required.',
    conceptualExplanation: "According to Newton's First Law of Motion, an object in motion maintains its velocity unless an unbalanced external force acts upon it. In the vacuum of deep space, there is zero friction or air resistance, so no net force is needed to sustain constant motion.",
    workedSolution: 'Step 1: Check acceleration: constant velocity means a = 0 m/s². Step 2: Apply Newton’s Second Law: F_net = m * a = m * 0 = 0 N. Step 3: Conclude zero thrust is required to keep moving at constant velocity.',
    expectedReasoning: 'In the absence of opposing frictional or gravitational forces, an object continues moving at constant velocity without requiring continuous forward force.',
    hint: 'Does maintaining a constant speed in a vacuum require any acceleration?',
    markingCriteria: 'Must select option A. Identifies that F_net = 0 when acceleration is zero.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Aristotelian Misconception: Sustained Motion Requires Sustained Force',
        explanation: 'Equating force directly with velocity rather than rate of change of velocity (acceleration).',
        typicalReasoningQuote: 'To keep moving fast, the engines must keep firing, otherwise it will run out of push and stop.'
      },
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Vacuum Resistance Fallacy',
        explanation: 'Believing the vacuum of space has intrinsic drag that requires opposing engine thrust.',
        typicalReasoningQuote: 'Space still has vacuum resistance that pushes back against the spaceship.'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-01-fu',
      questionText: 'A puck glides across a frictionless air table at 5 m/s. If no horizontal force is applied, what will be its speed after 10 seconds?',
      options: [
        { id: 'A', text: '0 m/s (it will stop)' },
        { id: 'B', text: '5 m/s' },
        { id: 'C', text: '2.5 m/s' },
        { id: 'D', text: '50 m/s' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: '5 m/s',
      explanation: 'With no friction or air resistance, the net force is zero, meaning velocity remains constant at 5 m/s.'
    }
  },

  // -------------------------------------------------------------
  // 2. Newton's Second Law: Calculation of Acceleration (F = ma)
  // -------------------------------------------------------------
  {
    id: 'phy-02',
    grade: 'Grade 9',
    subject: 'Physics',
    topic: 'Force and Motion',
    subtopic: "Newton's Second Law (F = ma)",
    topicId: 'physics_force_motion',
    topicTitle: 'Force and Laws of Motion',
    difficulty: 'Intermediate',
    learningObjective: 'Calculate acceleration when multiple collinear forces act on a known mass.',
    questionText: 'A wooden crate of mass 20 kg rests on a smooth floor. Two forces act horizontally: Force 1 pushes to the right with 70 N, and Force 2 pushes to the left with 30 N. If friction is negligible, what is the acceleration of the crate?',
    contextOrEquation: 'm = 20 kg; F_right = 70 N; F_left = 30 N; F_net = m * a',
    options: [
      { id: 'A', text: '5.0 m/s² to the right' },
      { id: 'B', text: '2.0 m/s² to the right' },
      { id: 'C', text: '0.5 m/s² to the right' },
      { id: 'D', text: '2.0 m/s² to the left' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: '2.0 m/s² to the right',
    conceptualExplanation: "Net force is the vector sum: F_net = 70 N - 30 N = 40 N to the right. Applying Newton's Second Law: a = F_net / m = 40 N / 20 kg = 2.0 m/s² in the direction of the net force (to the right).",
    workedSolution: 'Step 1: Determine net force: F_net = 70 N - 30 N = 40 N (to the right). Step 2: Use Newton’s Second Law: a = F_net / m. Step 3: Compute a = 40 N / 20 kg = 2.0 m/s² to the right.',
    expectedReasoning: 'Vector sum of opposing forces gives net force (40 N right). Dividing by mass (20 kg) yields acceleration of 2.0 m/s² right.',
    hint: 'Find the net unbalanced force first by subtracting the opposing forces, then divide by mass.',
    markingCriteria: 'Must select option B (2.0 m/s² to the right).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Adding Opposing Forces Instead of Subtracting',
        explanation: 'Adding magnitudes (70 + 30 = 100 N) without considering opposing directional vectors: 100 / 20 = 5 m/s².',
        typicalReasoningQuote: 'Total force is 70 + 30 = 100 N, and 100 divided by 20 gives 5 m/s².'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-02-fu',
      questionText: 'If the mass of the crate is doubled to 40 kg while the net force remains 40 N, what happens to the acceleration?',
      options: [
        { id: 'A', text: 'It doubles to 4.0 m/s²' },
        { id: 'B', text: 'It halves to 1.0 m/s²' },
        { id: 'C', text: 'It remains 2.0 m/s²' },
        { id: 'D', text: 'It drops to zero' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'It halves to 1.0 m/s²',
      explanation: 'By a = F_net / m, acceleration is inversely proportional to mass. Doubling mass cuts acceleration in half: 40 N / 40 kg = 1.0 m/s².'
    }
  },

  // -------------------------------------------------------------
  // 3. Newton's Third Law (Action-Reaction Pairs)
  // -------------------------------------------------------------
  {
    id: 'phy-03',
    grade: 'Grade 8',
    subject: 'Physics',
    topic: 'Force and Motion',
    subtopic: "Newton's Third Law (Action-Reaction)",
    topicId: 'physics_force_motion',
    topicTitle: 'Force and Laws of Motion',
    difficulty: 'Intermediate',
    learningObjective: "Identify Newton's third law action-reaction pairs and explain why they never cancel each other out.",
    questionText: 'A massive freight truck collides head-on with a tiny compact car. How does the magnitude of the force exerted by the truck on the car compare to the magnitude of the force exerted by the car on the truck during the collision?',
    contextOrEquation: "Newton's Third Law: F_(truck on car) = -F_(car on truck)",
    options: [
      { id: 'A', text: 'The truck exerts a much larger force on the car because the truck has much greater mass and momentum.' },
      { id: 'B', text: 'The car exerts a larger force on the truck because the car suffers more damage.' },
      { id: 'C', text: 'The force exerted by the truck on the car is exactly equal in magnitude to the force exerted by the car on the truck.' },
      { id: 'D', text: 'The forces are equal only if both vehicles were traveling at the same speed.' },
    ],
    correctAnswerId: 'C',
    correctAnswerText: 'The force exerted by the truck on the car is exactly equal in magnitude to the force exerted by the car on the truck.',
    conceptualExplanation: "Newton's Third Law dictates that whenever object A exerts a force on object B, object B simultaneously exerts an equal and opposite force on object A. The forces are identical in magnitude. The car experiences much greater acceleration and damage because of its smaller mass (a = F / m), NOT because the force on it was greater.",
    workedSolution: 'Step 1: Identify the interacting pair (truck and car). Step 2: Apply Newton\'s Third Law: action and reaction forces are strictly equal in magnitude and opposite in direction. Step 3: Conclude forces are exactly equal.',
    expectedReasoning: 'Action-reaction forces are universally equal in magnitude regardless of the masses or velocities of the colliding bodies.',
    hint: "Think about Newton's Third Law: can one interacting body exert more contact force than the other?",
    markingCriteria: 'Must select option C. Recognizes that interaction contact forces are equal despite different masses.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Larger Mass Means Larger Exerted Force in Collision',
        explanation: 'Confusing force with mass or damage. The smaller car experiences greater acceleration (a = F/m) and deformation, leading students to mistakenly believe it felt a larger force.',
        typicalReasoningQuote: 'The big truck has much more mass, so it must hit the small car with a way bigger force.'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-03-fu',
      questionText: 'Why do Newton’s third law action and reaction forces never cancel each other out to produce zero motion?',
      options: [
        { id: 'A', text: 'Because action happens before reaction.' },
        { id: 'B', text: 'Because action and reaction act on two different objects.' },
        { id: 'C', text: 'Because reaction force is always slightly smaller than action force.' },
        { id: 'D', text: 'Because friction always removes the reaction force.' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'Because action and reaction act on two different objects.',
      explanation: 'Forces can only cancel when they act on the SAME object. Action and reaction act on separate bodies, so they cannot cancel each other.'
    }
  },

  // -------------------------------------------------------------
  // 4. Mass vs Weight and Gravitational Field
  // -------------------------------------------------------------
  {
    id: 'phy-04',
    grade: 'Grade 8',
    subject: 'Physics',
    topic: 'Gravitation',
    subtopic: 'Mass vs Weight on Earth and Moon',
    topicId: 'physics_gravitation',
    topicTitle: 'Gravitation and Celestial Mechanics',
    difficulty: 'Beginner',
    learningObjective: 'Differentiate between mass (invariant scalar) and weight (gravitational force W = mg).',
    questionText: 'An astronaut has a mass of 60 kg on Earth, where g = 9.8 m/s². On the Moon, the gravitational acceleration is approximately 1/6 that of Earth (~1.63 m/s²). What are the astronaut’s mass and weight on the Moon?',
    contextOrEquation: 'Mass is invariant. Weight = m * g. g_moon ≈ 1.63 m/s².',
    options: [
      { id: 'A', text: 'Mass = 10 kg; Weight = 98 N' },
      { id: 'B', text: 'Mass = 60 kg; Weight ≈ 98 N' },
      { id: 'C', text: 'Mass = 60 kg; Weight = 588 N' },
      { id: 'D', text: 'Mass = 10 kg; Weight = 588 N' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Mass = 60 kg; Weight ≈ 98 N',
    conceptualExplanation: 'Mass is the amount of matter in an object and is constant regardless of location (60 kg on Earth and on the Moon). Weight is the downward gravitational force: W = m * g. On the Moon: W = 60 kg * (9.8 / 6) m/s² ≈ 98 N.',
    workedSolution: 'Step 1: Mass is invariant: m = 60 kg. Step 2: Calculate lunar weight: W_moon = m * g_moon = 60 kg * 1.633 m/s² ≈ 98 N. Step 3: Match to option B.',
    expectedReasoning: 'Mass does not change when changing celestial bodies; weight changes proportionally with local gravitational acceleration g.',
    hint: 'Mass is the amount of matter (unchanged anywhere); weight is the force of gravity pulling on that mass.',
    markingCriteria: 'Must select option B. Keeps mass constant at 60 kg and calculates weight ~98 N.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Believing Mass Decreases with Lower Gravity',
        explanation: 'Treating mass and weight as identical interchangeable properties.',
        typicalReasoningQuote: 'Because gravity on the moon is 1/6, the astronaut has 1/6 the mass (10 kg).'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-04-fu',
      questionText: 'What instrument measures mass by balancing against standard known masses, unaffected by changes in local gravity?',
      options: [
        { id: 'A', text: 'A spring balance' },
        { id: 'B', text: 'A beam balance (two-pan balance)' },
        { id: 'C', text: 'A bathroom scale with calibrated spring' },
        { id: 'D', text: 'A pressure gauge' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'A beam balance (two-pan balance)',
      explanation: 'A beam balance compares two masses subject to the same local gravity on both pans, so gravity cancels out, measuring true mass anywhere.'
    }
  },

  // -------------------------------------------------------------
  // 5. Work Done: Force and Displacement Vectors
  // -------------------------------------------------------------
  {
    id: 'phy-05',
    grade: 'Grade 9',
    subject: 'Physics',
    topic: 'Work, Energy, and Power',
    subtopic: 'Calculation of Work Done (W = F * d * cos θ)',
    topicId: 'physics_work_energy',
    topicTitle: 'Work, Energy, and Power',
    difficulty: 'Intermediate',
    learningObjective: 'Calculate physical work done and identify scenarios where mechanical work is strictly zero.',
    questionText: 'A porter carries a heavy suitcase of mass 30 kg on his head while walking horizontally across a flat train platform at constant velocity for 50 meters. What is the work done by the vertical upward lifting force of the porter on the suitcase during this horizontal walk?',
    contextOrEquation: 'W = F * d * cos(θ); Vertical upward force F = mg (up); Displacement d (horizontal) -> θ = 90°',
    options: [
      { id: 'A', text: '14,700 Joules' },
      { id: 'B', text: '1,500 Joules' },
      { id: 'C', text: '0 Joules' },
      { id: 'D', text: '300 Joules' },
    ],
    correctAnswerId: 'C',
    correctAnswerText: '0 Joules',
    conceptualExplanation: "In physics, work is defined as W = F * d * cos(θ), where θ is the angle between the applied force vector and the displacement vector. The porter exerts an upward force against gravity, but the suitcase moves horizontally. The angle between upward force and horizontal displacement is 90°. Since cos(90°) = 0, the work done on the suitcase by the vertical supporting force is zero.",
    workedSolution: 'Step 1: Identify direction of force: vertically upward (θ = 90° relative to ground). Step 2: Identify direction of displacement: horizontal (along the platform). Step 3: Compute W = F * d * cos(90°) = F * d * 0 = 0 J.',
    expectedReasoning: 'When force is perpendicular to displacement (cos 90° = 0), zero work is performed by that force.',
    hint: 'Check the angle between the upward holding force and the horizontal walking direction.',
    markingCriteria: 'Must select option C (0 Joules). Distinguishes physiological fatigue from mechanical work.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Confusing Physiological Effort with Mechanical Work',
        explanation: 'Multiplying mass * g * distance (30 * 9.8 * 50 = 14,700 J) without considering the 90° angle between force and displacement.',
        typicalReasoningQuote: 'The porter is sweating and carrying weight over 50 meters, so work is force times distance: 294 N * 50 m = 14,700 J.'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-05-fu',
      questionText: 'Under which of the following conditions is positive mechanical work done on an object?',
      options: [
        { id: 'A', text: 'Holding a heavy barbell completely stationary overhead' },
        { id: 'B', text: 'Pushing a stalled car forward in the same direction it moves' },
        { id: 'C', text: 'A satellite orbiting Earth in a circular orbit under perpendicular gravity' },
        { id: 'D', text: 'Pushing firmly against an immovable concrete wall for an hour' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'Pushing a stalled car forward in the same direction it moves',
      explanation: 'Work is positive when force and displacement are in the same direction (θ = 0°, cos 0° = 1, displacement > 0).'
    }
  },

  // -------------------------------------------------------------
  // 6. Conservation of Mechanical Energy: Pendulum / Free Fall
  // -------------------------------------------------------------
  {
    id: 'phy-06',
    grade: 'Grade 9',
    subject: 'Physics',
    topic: 'Work, Energy, and Power',
    subtopic: 'Conservation of Mechanical Energy (KE + PE = constant)',
    topicId: 'physics_work_energy',
    topicTitle: 'Work, Energy, and Power',
    difficulty: 'Intermediate',
    learningObjective: 'Apply the conservation of mechanical energy to determine velocity at the lowest point of free fall.',
    questionText: 'A metal ball of mass 2 kg is dropped from rest from a height of 5 meters above the ground. Ignoring air resistance and taking g = 10 m/s², what will be its kinetic energy and speed right before striking the ground?',
    contextOrEquation: 'PE_initial = m * g * h; KE_final = PE_initial; KE = 1/2 * m * v²',
    options: [
      { id: 'A', text: 'KE = 100 J; speed = 10 m/s' },
      { id: 'B', text: 'KE = 50 J; speed = 5 m/s' },
      { id: 'C', text: 'KE = 100 J; speed = 100 m/s' },
      { id: 'D', text: 'KE = 20 J; speed = 2 m/s' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'KE = 100 J; speed = 10 m/s',
    conceptualExplanation: 'By the law of conservation of mechanical energy, total initial mechanical energy equals total final mechanical energy. At height h = 5 m, initial KE = 0, so total energy is PE = m * g * h = 2 kg * 10 m/s² * 5 m = 100 J. Just before impact, PE = 0, so all energy is converted to KE = 100 J. Using KE = 1/2 * m * v²: 100 = 1/2 * 2 * v² => v² = 100 => v = 10 m/s.',
    workedSolution: 'Step 1: Calculate initial potential energy: PE = mgh = 2 * 10 * 5 = 100 J. Step 2: At ground, KE = PE_initial = 100 J. Step 3: Solve for speed: 100 = 0.5 * 2 * v² => v² = 100 => v = 10 m/s.',
    expectedReasoning: 'All initial gravitational potential energy converts to kinetic energy at ground level; equating 1/2 m v² = m g h gives v = sqrt(2gh) = 10 m/s.',
    hint: 'Use PE = mgh at the top, then set that equal to KE = 1/2 mv² at the bottom.',
    markingCriteria: 'Must select option A (KE = 100 J, speed = 10 m/s).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Halving Energy Calculation',
        explanation: 'Forgetting the mass factor or halving the total energy arbitrarily.',
        typicalReasoningQuote: 'Energy gets split in half during the fall, so KE is 50 J.'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-06-fu',
      questionText: 'If a 4 kg ball is dropped from the same height of 5 meters (neglecting air resistance), what will its impact speed be?',
      options: [
        { id: 'A', text: '20 m/s' },
        { id: 'B', text: '10 m/s' },
        { id: 'C', text: '5 m/s' },
        { id: 'D', text: '40 m/s' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: '10 m/s',
      explanation: 'Since v = sqrt(2gh), impact speed is completely independent of mass when air resistance is negligible. Both light and heavy objects strike the ground at 10 m/s.'
    }
  },

  // -------------------------------------------------------------
  // 7. Law of Reflection and Plane Mirrors
  // -------------------------------------------------------------
  {
    id: 'phy-07',
    grade: 'Grade 8',
    subject: 'Physics',
    topic: 'Light and Optics',
    subtopic: 'Reflection from Plane Mirrors',
    topicId: 'physics_light_optics',
    topicTitle: 'Optics and Wave Nature of Light',
    difficulty: 'Beginner',
    learningObjective: 'State the laws of reflection and describe the image characteristics formed by a plane mirror.',
    questionText: 'A light ray strikes a flat, polished plane mirror with an angle of incidence of 35° relative to the normal line. Which of the following correctly gives the angle of reflection and describes the image formed by the plane mirror?',
    contextOrEquation: 'Law of reflection: angle of incidence (i) = angle of reflection (r) relative to the normal line',
    options: [
      { id: 'A', text: 'Angle of reflection = 55°; image is real, inverted, and magnified.' },
      { id: 'B', text: 'Angle of reflection = 35°; image is virtual, erect, same size as object, and laterally inverted.' },
      { id: 'C', text: 'Angle of reflection = 70°; image is real and inverted.' },
      { id: 'D', text: 'Angle of reflection = 35°; image is real and can be projected on a screen.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Angle of reflection = 35°; image is virtual, erect, same size as object, and laterally inverted.',
    conceptualExplanation: 'According to the first law of reflection, the angle of reflection equals the angle of incidence (r = i = 35°). Plane mirrors always form virtual images (light rays appear to diverge from behind the mirror without actually passing through), which are upright (erect), identical in size to the object, and laterally inverted (left-to-right reversed).',
    workedSolution: 'Step 1: Apply law of reflection: r = i = 35°. Step 2: Plane mirror image properties: virtual, erect, same size, same distance behind mirror, laterally inverted. Step 3: Select option B.',
    expectedReasoning: 'Angle of reflection matches angle of incidence (35°); plane mirror images are always virtual, erect, and laterally inverted.',
    hint: 'The angle of reflection equals the angle of incidence; plane mirror images cannot be focused onto a physical screen.',
    markingCriteria: 'Must select option B.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Measuring from Mirror Surface Instead of the Normal',
        explanation: 'Confusing the glancing angle with the angle of incidence/reflection: 90° - 35° = 55°.',
        typicalReasoningQuote: 'The angle of reflection is measured from the mirror glass, which is 90 - 35 = 55 degrees.'
      },
      {
        answerIdOrPattern: 'D',
        misconceptionTitle: 'Believing Plane Mirror Images Are Real',
        explanation: 'Failing to understand that virtual images cannot be captured on a paper or projector screen.',
        typicalReasoningQuote: 'Because I can clearly see my face in the mirror, the image must be real.'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-07-fu',
      questionText: 'If you stand 2.0 meters in front of a flat plane mirror, what is the distance between you and your reflected image?',
      options: [
        { id: 'A', text: '2.0 meters' },
        { id: 'B', text: '4.0 meters' },
        { id: 'C', text: '1.0 meter' },
        { id: 'D', text: '8.0 meters' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: '4.0 meters',
      explanation: 'The image appears 2.0 meters behind the mirror. Distance from observer to image = 2.0 m + 2.0 m = 4.0 meters.'
    }
  },

  // -------------------------------------------------------------
  // 8. Refraction and Snell's Law / Optical Density
  // -------------------------------------------------------------
  {
    id: 'phy-08',
    grade: 'Grade 9',
    subject: 'Physics',
    topic: 'Light and Optics',
    subtopic: 'Refraction and Bending Towards/Away from the Normal',
    topicId: 'physics_light_optics',
    topicTitle: 'Optics and Wave Nature of Light',
    difficulty: 'Intermediate',
    learningObjective: 'Predict how light bends when crossing the boundary between media of different optical densities.',
    questionText: 'A beam of light travels from air (optically rarer, refractive index n1 = 1.0) obliquely into a block of crown glass (optically denser, refractive index n2 = 1.52). What happens to the speed of light and the direction of the ray inside the glass?',
    contextOrEquation: 'v = c / n; Snell\'s Law: n1 * sin(θ1) = n2 * sin(θ2); Optically denser medium -> Speed decreases, bends towards the normal',
    options: [
      { id: 'A', text: 'Speed increases; ray bends away from the normal.' },
      { id: 'B', text: 'Speed decreases; ray bends towards the normal.' },
      { id: 'C', text: 'Speed decreases; ray bends away from the normal.' },
      { id: 'D', text: 'Speed remains constant; ray continues without any deviation.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Speed decreases; ray bends towards the normal.',
    conceptualExplanation: 'When light enters an optically denser medium (higher refractive index), its phase velocity decreases (v = c / n). Because the leading edge of the light wave slows down first, the ray bends towards the normal line perpendicular to the interface.',
    workedSolution: 'Step 1: Glass has n = 1.52 > 1.0, so light speed decreases: v = c / 1.52. Step 2: From Snell\'s law: sin(θ2) = (1.0 / 1.52) * sin(θ1), meaning θ2 < θ1. Step 3: Smaller angle with normal means ray bends toward normal.',
    expectedReasoning: 'Light slows down in optically denser media, causing the ray to refract towards the normal.',
    hint: 'Think of a car with wheels hitting mud on one side: it slows down and swerves toward the normal.',
    markingCriteria: 'Must select option B. Accurately links decreased speed to bending towards the normal.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Believing Higher Refractive Index Accelerates Light',
        explanation: 'Thinking higher index gives "more energy" and speeds up the wave.',
        typicalReasoningQuote: 'Glass concentrates the light rays so the speed increases.'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-08-fu',
      questionText: 'What optical phenomenon occurs when light inside water approaches the air boundary at an angle of incidence greater than the critical angle?',
      options: [
        { id: 'A', text: 'Total internal reflection' },
        { id: 'B', text: 'Complete absorption' },
        { id: 'C', text: 'Polarization without reflection' },
        { id: 'D', text: 'Photoelectric emission' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Total internal reflection',
      explanation: 'When angle of incidence in the denser medium exceeds the critical angle, all light is reflected back into the denser medium (total internal reflection).'
    }
  },

  // -------------------------------------------------------------
  // 9. Sound Waves: Medium Requirement and Speed Comparison
  // -------------------------------------------------------------
  {
    id: 'phy-09',
    grade: 'Grade 8',
    subject: 'Physics',
    topic: 'Sound',
    subtopic: 'Propagation of Sound Waves and Medium Requirements',
    topicId: 'physics_sound',
    topicTitle: 'Sound Waves and Acoustics',
    difficulty: 'Beginner',
    learningObjective: 'Explain why sound requires a material medium and compare its speed across solids, liquids, and gases.',
    questionText: 'An electric bell is ringing inside a sealed glass jar. When a vacuum pump evacuates all the air from the jar, the sound of the bell fades until it cannot be heard at all, even though the hammer is still seen striking the gong. Why?',
    contextOrEquation: 'Sound is a mechanical longitudinal wave requiring particle collisions for propagation. Vacuum = zero particles.',
    options: [
      { id: 'A', text: 'Sound is an electromagnetic wave that requires light to travel.' },
      { id: 'B', text: 'Sound is a mechanical wave that requires a material medium (particles) to propagate, and cannot travel through a vacuum.' },
      { id: 'C', text: 'The glass absorbs all the sound waves when air is removed.' },
      { id: 'D', text: 'The vacuum reduces the frequency of the sound below human hearing.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Sound is a mechanical wave that requires a material medium (particles) to propagate, and cannot travel through a vacuum.',
    conceptualExplanation: 'Sound waves are mechanical longitudinal waves consisting of compressions and rarefactions. They propagate by transferring kinetic energy through collisions of adjacent matter particles. In a vacuum, there are no particles to vibrate and transmit compressions, so sound cannot travel.',
    workedSolution: 'Step 1: Identify nature of sound: mechanical wave. Step 2: Mechanical waves require vibrating matter particles. Step 3: Evacuation creates a vacuum with no particles, preventing sound transmission.',
    expectedReasoning: 'Sound is a mechanical wave that requires a material medium of particles and cannot propagate through a vacuum.',
    hint: 'Think about what vibrates to carry sound from the bell to your ears: does a vacuum have air particles?',
    markingCriteria: 'Must select option B.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Confusing Sound with Light (Electromagnetic Waves)',
        explanation: 'Assuming sound behaves like light and can travel freely through outer space or a vacuum.',
        typicalReasoningQuote: 'Light travels through a vacuum and sound travels through glass, so sound should travel through a vacuum too.'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-09-fu',
      questionText: 'Through which of the following media does sound travel with the FASTEST speed?',
      options: [
        { id: 'A', text: 'Air at 20 °C (~343 m/s)' },
        { id: 'B', text: 'Fresh water (~1,480 m/s)' },
        { id: 'C', text: 'Solid steel (~5,100 m/s)' },
        { id: 'D', text: 'Helium gas (~965 m/s)' },
      ],
      correctAnswerId: 'C',
      correctAnswerText: 'Solid steel (~5,100 m/s)',
      explanation: 'Because atoms in solids are bonded closely together with high elastic modulus, mechanical compression waves propagate fastest in solids (v_solid > v_liquid > v_gas).'
    }
  },

  // -------------------------------------------------------------
  // 10. Sound: Frequency vs Pitch and Amplitude vs Loudness
  // -------------------------------------------------------------
  {
    id: 'phy-10',
    grade: 'Grade 8',
    subject: 'Physics',
    topic: 'Sound',
    subtopic: 'Pitch (Frequency) and Loudness (Amplitude)',
    topicId: 'physics_sound',
    topicTitle: 'Sound Waves and Acoustics',
    difficulty: 'Intermediate',
    learningObjective: 'Correlate pitch with wave frequency and loudness with wave amplitude.',
    questionText: 'A guitarist tightens a guitar string and then plucks it very gently. How do the pitch and the loudness of the sound compare to when the loose string was plucked hard?',
    contextOrEquation: 'Tighter string -> Higher frequency -> Higher pitch. Gentle pluck -> Smaller amplitude -> Softer loudness.',
    options: [
      { id: 'A', text: 'Higher pitch (due to higher frequency) and softer loudness (due to smaller amplitude).' },
      { id: 'B', text: 'Lower pitch (due to smaller amplitude) and louder sound (due to higher frequency).' },
      { id: 'C', text: 'Higher pitch and louder sound, because frequency and amplitude are always identical.' },
      { id: 'D', text: 'Same pitch and same loudness, because it is the same guitar.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Higher pitch (due to higher frequency) and softer loudness (due to smaller amplitude).',
    conceptualExplanation: 'Pitch is determined by wave frequency (vibrations per second, Hz): tighter tension increases the wave speed and fundamental frequency, yielding a higher pitch. Loudness is determined by wave amplitude: plucking gently imparts less energy, producing smaller wave amplitudes and therefore a softer (quieter) sound.',
    workedSolution: 'Step 1: Tightening string increases tension -> higher frequency -> higher pitch. Step 2: Plucking gently decreases displacement amplitude -> lower energy -> softer loudness. Step 3: Combine: higher pitch, softer sound.',
    expectedReasoning: 'Frequency determines pitch (Hz), whereas wave amplitude governs subjective loudness (dB).',
    hint: 'Tightening a string makes it squeak higher; plucking gently makes it quieter.',
    markingCriteria: 'Must select option A. Decouples pitch (frequency) from loudness (amplitude).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Conflating Pitch with Loudness',
        explanation: 'Assuming high pitch always means loud and low pitch always means quiet.',
        typicalReasoningQuote: 'Higher pitch means the sound has more power so it must be louder.'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-10-fu',
      questionText: 'What is the typical audible frequency range of hearing for a healthy human ear?',
      options: [
        { id: 'A', text: '20 Hz to 20,000 Hz' },
        { id: 'B', text: '1 Hz to 100 Hz' },
        { id: 'C', text: '20,000 Hz to 2,000,000 Hz' },
        { id: 'D', text: '0 Hz to 10 Hz' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '20 Hz to 20,000 Hz',
      explanation: 'Human auditory perception spans approximately 20 Hz (lowest infrasonic boundary) to 20,000 Hz (ultrasonic boundary).'
    }
  },

  // -------------------------------------------------------------
  // 11. Ohm's Law and Series Circuits
  // -------------------------------------------------------------
  {
    id: 'phy-11',
    grade: 'Grade 9',
    subject: 'Physics',
    topic: 'Electricity and Magnetism',
    subtopic: "Ohm's Law (V = IR) and Series Circuits",
    topicId: 'physics_electricity',
    topicTitle: 'Electricity and Electric Circuits',
    difficulty: 'Intermediate',
    learningObjective: 'Calculate total resistance and current in a series DC circuit using Ohm’s Law.',
    questionText: 'Two resistors with resistances R1 = 4 Ω and R2 = 6 Ω are connected in series across a 20 V battery. What is the total equivalent resistance of the circuit and the current flowing through each resistor?',
    contextOrEquation: 'Series circuit: R_eq = R1 + R2; Ohm\'s Law: I = V / R_eq; Current is identical throughout a single series branch.',
    options: [
      { id: 'A', text: 'R_eq = 10 Ω; Current = 2 A through both resistors' },
      { id: 'B', text: 'R_eq = 2.4 Ω; Current = 8.33 A' },
      { id: 'C', text: 'R_eq = 10 Ω; Current = 5 A through R1 and 3.33 A through R2' },
      { id: 'D', text: 'R_eq = 24 Ω; Current = 0.83 A' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'R_eq = 10 Ω; Current = 2 A through both resistors',
    conceptualExplanation: 'In a series circuit, resistors add linearly: R_eq = R1 + R2 = 4 Ω + 6 Ω = 10 Ω. By Ohm’s Law, the total current supplied by the battery is I = V / R_eq = 20 V / 10 Ω = 2 A. In a series loop without branches, the charge conservation rule dictates that the same 2 A current flows sequentially through every component.',
    workedSolution: 'Step 1: Calculate series equivalent resistance: R_eq = 4 + 6 = 10 Ω. Step 2: Apply Ohm\'s Law: I = V / R = 20 / 10 = 2 A. Step 3: Current in a single series loop is identical everywhere: 2 A.',
    expectedReasoning: 'Resistances add in series (10 Ω); current is conserved along a single path, giving I = 20 V / 10 Ω = 2 A.',
    hint: 'Add the resistances directly for a series connection, then use I = V / R.',
    markingCriteria: 'Must select option A. Uses R_eq = 10 Ω and I = 2 A.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Believing Current Gets Used Up Along a Circuit',
        explanation: 'Thinking current splits or diminishes as it encounters each resistor in series.',
        typicalReasoningQuote: 'Current gets used up by the first resistor, so R1 gets more current and R2 gets less.'
      },
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Using Parallel Formula for Series Circuit',
        explanation: 'Using 1/R = 1/4 + 1/6 = 5/12 -> R = 2.4 Ω instead of series addition.',
        typicalReasoningQuote: 'Resistors always combine by product over sum: (4 * 6) / (4 + 6) = 2.4 ohms.'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-11-fu',
      questionText: 'What is the voltage drop across the 6 Ω resistor in this series circuit?',
      options: [
        { id: 'A', text: '8 V' },
        { id: 'B', text: '12 V' },
        { id: 'C', text: '20 V' },
        { id: 'D', text: '6 V' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: '12 V',
      explanation: 'Using V = I * R: V2 = 2 A * 6 Ω = 12 V. (Note: 8 V + 12 V = 20 V total).'
    }
  },

  // -------------------------------------------------------------
  // 12. Parallel Circuits: Voltage and Equivalent Resistance
  // -------------------------------------------------------------
  {
    id: 'phy-12',
    grade: 'Grade 9',
    subject: 'Physics',
    topic: 'Electricity and Magnetism',
    subtopic: 'Parallel Circuits and Household Wiring',
    topicId: 'physics_electricity',
    topicTitle: 'Electricity and Electric Circuits',
    difficulty: 'Intermediate',
    learningObjective: 'Explain why household electrical appliances are wired in parallel rather than in series.',
    questionText: 'Why are lighting and household electrical appliances always connected in parallel circuits rather than in series?',
    contextOrEquation: 'Parallel: Full mains voltage across each branch; independent branch operation (one switch off does not break others)',
    options: [
      { id: 'A', text: 'Each appliance gets the full source voltage and can be switched on/off independently without affecting others.' },
      { id: 'B', text: 'Parallel wiring increases total circuit resistance so less electric power is consumed.' },
      { id: 'C', text: 'In parallel wiring, all appliances share a single current so if one burns out, all others receive extra current.' },
      { id: 'D', text: 'Parallel circuits require only a single wire instead of neutral and live wires.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Each appliance gets the full source voltage and can be switched on/off independently without affecting others.',
    conceptualExplanation: 'In a parallel arrangement, each appliance connects directly across the full mains voltage (e.g., 120 V or 230 V). Each branch has its own switch; switching off or burning out one appliance does not disrupt the circuit for the other branches. In contrast, in a series circuit, if one bulb blows out, the entire circuit is broken and all devices turn off.',
    workedSolution: 'Step 1: In parallel circuits, voltage across all branches is equal to source voltage. Step 2: Each branch operates independently. Step 3: Conclude option A is the practical reason for parallel home wiring.',
    expectedReasoning: 'Parallel connections supply equal voltage to all devices and allow independent operation.',
    hint: 'What happens in old holiday string lights when one bulb burns out and they are wired in series?',
    markingCriteria: 'Must select option A.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Believing Parallel Wiring Increases Total Resistance',
        explanation: 'Failing to realize that adding parallel branches lowers total equivalent resistance: 1/R_eq = 1/R1 + 1/R2.',
        typicalReasoningQuote: 'Adding more wires in parallel must add more resistance to the house.'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-12-fu',
      questionText: 'What is the equivalent resistance of two identical 10 Ω resistors connected in parallel?',
      options: [
        { id: 'A', text: '20 Ω' },
        { id: 'B', text: '5 Ω' },
        { id: 'C', text: '10 Ω' },
        { id: 'D', text: '100 Ω' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: '5 Ω',
      explanation: 'For identical parallel resistors: R_eq = R / N = 10 Ω / 2 = 5 Ω.'
    }
  },

  // -------------------------------------------------------------
  // 13. Magnetic Effect of Electric Current (Electromagnets)
  // -------------------------------------------------------------
  {
    id: 'phy-13',
    grade: 'Grade 8',
    subject: 'Physics',
    topic: 'Electricity and Magnetism',
    subtopic: 'Electromagnets and Right-Hand Grip Rule',
    topicId: 'physics_electricity',
    topicTitle: 'Electricity and Electric Circuits',
    difficulty: 'Beginner',
    learningObjective: 'Describe how an electromagnet works and identify methods to increase its magnetic strength.',
    questionText: 'A student wraps insulated copper wire around an iron nail and connects it to a battery to create an electromagnet. Which combination of modifications will significantly INCREASE the lifting strength of this electromagnet?',
    contextOrEquation: 'B ∝ n * I (Magnetic field strength increases with number of turns per unit length n and current I)',
    options: [
      { id: 'A', text: 'Increasing the number of wire coils and increasing the current from the battery.' },
      { id: 'B', text: 'Removing the iron core and replacing it with a wooden dowel.' },
      { id: 'C', text: 'Decreasing the number of wire coils and using a dead battery.' },
      { id: 'D', text: 'Reversing the battery terminals while reducing the number of coils.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Increasing the number of wire coils and increasing the current from the battery.',
    conceptualExplanation: 'The magnetic field strength B of a solenoid/electromagnet is directly proportional to the number of turns of wire (N) and the electric current (I) flowing through it: B ∝ N * I. A ferromagnetic core like soft iron also dramatically concentrates magnetic flux. Therefore, adding more turns of wire and increasing the current makes the electromagnet stronger.',
    workedSolution: 'Step 1: Recall factors affecting electromagnet strength: B ∝ N * I. Step 2: More turns of coil = stronger field. Step 3: Greater electric current = stronger field. Step 4: Combine both to get option A.',
    expectedReasoning: 'Increasing coil density and current maximizes magnetic flux density in the ferromagnetic core.',
    hint: 'How can you put more magnetic loops of wire and more electric charge flow into the nail?',
    markingCriteria: 'Must select option A.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Believing Core Material Does Not Matter',
        explanation: 'Failing to recognize that ferromagnetic materials (iron) amplify the magnetic field thousands of times compared to wood or plastic.',
        typicalReasoningQuote: 'Any core works the same as long as copper wire is wrapped around it.'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-13-fu',
      questionText: 'What happens to the magnetic field of an electromagnet the instant the electrical circuit is switched off?',
      options: [
        { id: 'A', text: 'It remains permanently magnetized forever.' },
        { id: 'B', text: 'The magnetic field disappears almost immediately.' },
        { id: 'C', text: 'The magnetic field reverses polarity automatically.' },
        { id: 'D', text: 'It turns into an electrostatic charge.' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'The magnetic field disappears almost immediately.',
      explanation: 'Electromagnets are temporary magnets: when the electric current ceases, the magnetic field collapses.'
    }
  },

  // -------------------------------------------------------------
  // 14. Pressure in Solids: Pressure = Force / Area
  // -------------------------------------------------------------
  {
    id: 'phy-14',
    grade: 'Grade 8',
    subject: 'Physics',
    topic: 'Pressure and Fluids',
    subtopic: 'Pressure in Solids (P = F / A)',
    topicId: 'physics_pressure',
    topicTitle: 'Pressure, Fluids, and Archimedes Principle',
    difficulty: 'Beginner',
    learningObjective: 'Apply P = F / A to explain why a sharp knife cuts vegetables much more easily than a blunt knife.',
    questionText: 'Why can a sharp knife slice through a firm carrot with much less applied effort than a dull, blunt knife?',
    contextOrEquation: 'P = F / A; Smaller contact area A produces a vastly higher pressure P for the same applied force F.',
    options: [
      { id: 'A', text: 'A sharp knife has a tiny blade contact area, generating much higher pressure for the same pushing force.' },
      { id: 'B', text: 'A sharp knife has greater mass, so its weight provides extra downward force.' },
      { id: 'C', text: 'A sharp knife heats up and melts the vegetable fibers via thermal conduction.' },
      { id: 'D', text: 'A blunt knife exerts greater pressure because its surface area is wider.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'A sharp knife has a tiny blade contact area, generating much higher pressure for the same pushing force.',
    conceptualExplanation: 'Pressure is defined as force per unit area: P = F / A. A sharp knife has a finely honed edge with an extremely small surface area (A). When a person exerts a force (F), dividing by this tiny area yields a very high localized pressure (P), which easily ruptures and shears through plant cellular tissue.',
    workedSolution: 'Step 1: Write formula: P = F / A. Step 2: Note that sharp knife has very small contact area A. Step 3: As A -> 0, P becomes very large for the same applied force F.',
    expectedReasoning: 'Pressure is inversely proportional to contact area; minimizing area dramatically amplifies pressure.',
    hint: 'Think about the formula Pressure = Force / Area: what happens when Area gets very small?',
    markingCriteria: 'Must select option A.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'D',
        misconceptionTitle: 'Direct Proportionality Misconception (Confusing Area with Pressure)',
        explanation: 'Thinking larger contact area creates larger pressure.',
        typicalReasoningQuote: 'A blunt knife has more area so it can apply more pressure on the carrot.'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-14-fu',
      questionText: 'Why do heavy construction vehicles and military tanks use wide continuous caterpillar tracks rather than standard narrow rubber wheels?',
      options: [
        { id: 'A', text: 'To increase the pressure on the ground so they grip deeper.' },
        { id: 'B', text: 'To increase the surface area in contact with ground, decreasing pressure and preventing sinking into soft mud.' },
        { id: 'C', text: 'To make the vehicle move faster on highways.' },
        { id: 'D', text: 'To eliminate all friction with the ground.' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'To increase the surface area in contact with ground, decreasing pressure and preventing sinking into soft mud.',
      explanation: 'Distributing weight over a large track surface area reduces ground pressure (P = F / A), preventing heavy machinery from sinking.'
    }
  },

  // -------------------------------------------------------------
  // 15. Liquid Pressure and Depth (P = h * rho * g)
  // -------------------------------------------------------------
  {
    id: 'phy-15',
    grade: 'Grade 9',
    subject: 'Physics',
    topic: 'Pressure and Fluids',
    subtopic: 'Hydrostatic Pressure with Depth (P = hρg)',
    topicId: 'physics_pressure',
    topicTitle: 'Pressure, Fluids, and Archimedes Principle',
    difficulty: 'Intermediate',
    learningObjective: 'Explain why hydroelectric dams are built much thicker at the bottom than at the top.',
    questionText: 'Engineers designing a concrete hydroelectric dam construct the base of the dam wall with a much greater thickness than the top. What hydrostatic principle dictates this tapered structural design?',
    contextOrEquation: 'Hydrostatic pressure: P = h * ρ * g (Pressure increases linearly with liquid depth h)',
    options: [
      { id: 'A', text: 'Liquid pressure increases directly with depth, so the water exerts much greater lateral force at the bottom.' },
      { id: 'B', text: 'Water at the bottom of the reservoir is colder, making it weigh ten times more.' },
      { id: 'C', text: 'Fish gather at the bottom and push against the dam walls.' },
      { id: 'D', text: 'To prevent sunlight from penetrating the deep foundation of the dam.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Liquid pressure increases directly with depth, so the water exerts much greater lateral force at the bottom.',
    conceptualExplanation: 'Hydrostatic pressure in a fluid is given by P = h * ρ * g, where h is the vertical depth below the free surface, ρ is fluid density, and g is gravitational acceleration. Because pressure increases in direct proportion to depth, the lateral thrust exerted by the water on the dam wall is greatest at the deepest point, requiring a much thicker foundation to withstand the shear stress.',
    workedSolution: 'Step 1: Formula for fluid pressure at depth: P = h * ρ * g. Step 2: At the bottom, h is maximal -> P is maximal. Step 3: The dam wall must be thickest at the bottom to withstand this maximum hydrostatic pressure.',
    expectedReasoning: 'Fluid pressure is directly proportional to depth (P = h * ρ * g), necessitating reinforced structural thickness at the base.',
    hint: 'Does water pressure increase or decrease as you dive deeper underwater?',
    markingCriteria: 'Must select option A.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Believing Temperature Changes Explain Massive Pressure',
        explanation: 'Attributing hydrostatic pressure to thermal contraction rather than the weight of the water column above.',
        typicalReasoningQuote: 'Cold water is super dense and heavy so it pushes harder.'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-15-fu',
      questionText: 'If a submarine dives from a depth of 50 meters to a depth of 150 meters, what happens to the hydrostatic pressure exerted by seawater on its hull?',
      options: [
        { id: 'A', text: 'It triples (increases by a factor of 3).' },
        { id: 'B', text: 'It remains exactly the same.' },
        { id: 'C', text: 'It drops to one-third.' },
        { id: 'D', text: 'It increases by a factor of 9.' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'It triples (increases by a factor of 3).',
      explanation: 'Since P = h * ρ * g is directly linear with depth h, tripling the depth from 50 m to 150 m triples the water pressure.'
    }
  },

  // -------------------------------------------------------------
  // 16. Buoyancy and Archimedes' Principle
  // -------------------------------------------------------------
  {
    id: 'phy-16',
    grade: 'Grade 9',
    subject: 'Physics',
    topic: 'Pressure and Fluids',
    subtopic: "Archimedes' Principle and Flotation",
    topicId: 'physics_pressure',
    topicTitle: 'Pressure, Fluids, and Archimedes Principle',
    difficulty: 'Advanced',
    learningObjective: "State Archimedes' Principle and explain how an iron ship floats while an iron nail sinks.",
    questionText: 'A solid iron nail sinks instantly in water, yet a massive cargo ship made of thousands of tons of steel floats easily on the ocean. What explains this difference according to Archimedes\' Principle?',
    contextOrEquation: 'Archimedes\' Principle: Buoyant force = weight of displaced fluid. Flotation requires average density < fluid density.',
    options: [
      { id: 'A', text: 'The hollow shape of the ship displaces a huge volume of water, making its average density less than water.' },
      { id: 'B', text: 'Salt ocean water has no gravity acting upon steel ships.' },
      { id: 'C', text: 'The nail is sharper, so it punctures the surface tension of the water.' },
      { id: 'D', text: 'The ship has engines that constantly blow air downwards to push it up.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'The hollow shape of the ship displaces a huge volume of water, making its average density less than water.',
    conceptualExplanation: "Archimedes' Principle states that any object immersed in a fluid experiences an upward buoyant force equal to the weight of fluid it displaces. An iron nail is solid, so its density (7.8 g/cm³) is greater than water (1.0 g/cm³), and the buoyant force is less than its weight. A ship is hollowed out with large air compartments; its total mass divided by its huge total volume yields an average density less than water, allowing it to displace enough water weight to balance its total weight.",
    workedSolution: 'Step 1: Solid iron density ~7.8 g/cm³ > water density 1.0 g/cm³ -> nail sinks. Step 2: Ship contains massive air volume within its hull. Step 3: Average density = Total Mass / Total Volume < 1.0 g/cm³. Step 4: Upward buoyant force equals weight of ship.',
    expectedReasoning: 'Hollow construction provides high volume displacement, lowering average density below that of water and providing sufficient buoyant force.',
    hint: 'Think about what fills most of the interior space inside a ship: solid steel or air?',
    markingCriteria: 'Must select option A. Explains the role of displaced fluid volume and average density.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Confusing Surface Tension with Buoyancy',
        explanation: 'Thinking flotation is governed by surface tension rather than Archimedes buoyant force.',
        typicalReasoningQuote: 'The nail is sharp and cuts through the water skin, while the flat ship sits on top of the surface skin.'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-16-fu',
      questionText: 'A block of wood weighs 15 N in air. When placed in water, it floats. What is the magnitude of the upward buoyant force acting on the floating wooden block?',
      options: [
        { id: 'A', text: 'Exactly 15 N' },
        { id: 'B', text: 'Less than 15 N' },
        { id: 'C', text: 'Greater than 15 N' },
        { id: 'D', text: '0 N' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Exactly 15 N',
      explanation: 'For any floating object at rest, upward buoyant force perfectly balances downward gravitational weight (F_buoyant = W = 15 N).'
    }
  },

  // -------------------------------------------------------------
  // 17. Dispersion of Light and Prisms
  // -------------------------------------------------------------
  {
    id: 'phy-17',
    grade: 'Grade 8',
    subject: 'Physics',
    topic: 'Light and Optics',
    subtopic: 'Dispersion of White Light through a Triangular Prism',
    topicId: 'physics_light_optics',
    topicTitle: 'Optics and Wave Nature of Light',
    difficulty: 'Intermediate',
    learningObjective: 'Explain dispersion of white light into a spectrum and identify which color bends the most.',
    questionText: 'When a narrow beam of white sunlight passes through a glass triangular prism, it splits into a spectrum of colors (VIBGYOR). Which color of visible light undergoes the greatest deviation (bends the most), and why?',
    contextOrEquation: 'In glass: Violet has the shortest wavelength, highest refractive index n_violet, and slowest speed -> bends most. Red has longest wavelength, lowest n_red, and fastest speed -> bends least.',
    options: [
      { id: 'A', text: 'Red light bends the most because it has the longest wavelength.' },
      { id: 'B', text: 'Violet light bends the most because it travels slowest in glass and experiences the highest refractive index.' },
      { id: 'C', text: 'Green light bends the most because it is in the exact middle of the spectrum.' },
      { id: 'D', text: 'All colors bend by the exact same angle because glass is transparent.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Violet light bends the most because it travels slowest in glass and experiences the highest refractive index.',
    conceptualExplanation: 'Dispersion occurs because the refractive index of glass varies with wavelength (Cauchy’s dispersion formula). Violet light has the shortest wavelength (~400 nm) in the visible spectrum. It interacts more strongly with the electrons in glass, slowing down more than any other color (n_violet > n_red). Because violet experiences the largest drop in speed, it bends through the greatest angle of deviation.',
    workedSolution: 'Step 1: In glass, speed of violet is less than speed of red. Step 2: Refractive index for violet is greater than for red (n_v > n_r). Step 3: By Snell\'s law, greater n yields larger angle of deviation -> violet bends the most.',
    expectedReasoning: 'Shorter wavelength violet light slows down most in glass, experiencing the greatest refractive index and angular deviation.',
    hint: 'Look at the rainbow order VIBGYOR: Violet is at the bottom (bent the most); Red is at the top.',
    markingCriteria: 'Must select option B. Accurately links violet light to maximum refraction/deviation.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Inverted Dispersion Hierarchy',
        explanation: 'Thinking red bends the most because it is listed first or has longer wavelength.',
        typicalReasoningQuote: 'Red is the strongest color with the most energy, so it gets pushed down the most.'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-17-fu',
      questionText: 'Who first demonstrated with two inverted prisms that white light is composed of the spectral colors rather than the prism adding colors?',
      options: [
        { id: 'A', text: 'Sir Isaac Newton' },
        { id: 'B', text: 'Galileo Galilei' },
        { id: 'C', text: 'Albert Einstein' },
        { id: 'D', text: 'Thomas Edison' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Sir Isaac Newton',
      explanation: 'In 1666, Isaac Newton passed the colored spectrum from one prism through a second upside-down prism to recombine them into white light, proving white light is composite.'
    }
  },

  // -------------------------------------------------------------
  // 18. Friction: Types and Advantages/Disadvantages
  // -------------------------------------------------------------
  {
    id: 'phy-18',
    grade: 'Grade 8',
    subject: 'Physics',
    topic: 'Force and Motion',
    subtopic: 'Frictional Forces: Static, Sliding, and Rolling',
    topicId: 'physics_force_motion',
    topicTitle: 'Force and Laws of Motion',
    difficulty: 'Beginner',
    learningObjective: 'Compare static, sliding (kinetic), and rolling friction in order of magnitude.',
    questionText: 'When attempting to move a heavy steel filing cabinet across a flat tile floor, which type of friction is the largest and requires the most effort to overcome?',
    contextOrEquation: 'f_static(max) > f_sliding > f_rolling',
    options: [
      { id: 'A', text: 'Static friction (the friction resisting the start of motion)' },
      { id: 'B', text: 'Sliding (kinetic) friction (while it is already moving)' },
      { id: 'C', text: 'Rolling friction (if wheels were installed)' },
      { id: 'D', text: 'All three forms of friction are always strictly identical.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Static friction (the friction resisting the start of motion)',
    conceptualExplanation: 'Static friction is the interlocking of microscopic surface irregularities (asperities) when two surfaces are at rest relative to each other. Because the microscopic contact points have time to settle and form adhesive bonds, the maximum static friction coefficient (μ_s) is always greater than the kinetic/sliding friction coefficient (μ_k). Rolling friction is smallest because the contact area is tiny and momentary.',
    workedSolution: 'Step 1: Recall hierarchy: Static (max) > Sliding > Rolling. Step 2: Getting an object moving from rest requires overcoming maximum static friction. Step 3: Conclude static friction is the largest.',
    expectedReasoning: 'Microscopic interlocking has settled at rest, giving static friction the highest threshold before motion begins.',
    hint: 'Is it harder to get a heavy couch to start moving from rest, or to keep it sliding once already moving?',
    markingCriteria: 'Must select option A.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Believing Moving Objects Face Greater Friction',
        explanation: 'Thinking moving fast creates more friction than resting stationary.',
        typicalReasoningQuote: 'Moving creates wind and heat, so sliding friction must be bigger than resting friction.'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-18-fu',
      questionText: 'Why do ball bearings installed in bicycle wheel hubs reduce energy waste from friction?',
      options: [
        { id: 'A', text: 'They replace sliding friction with rolling friction, which is much smaller.' },
        { id: 'B', text: 'They eliminate the downward force of gravity completely.' },
        { id: 'C', text: 'They generate an electric repulsion between the axle and frame.' },
        { id: 'D', text: 'They increase the contact surface area tenfold.' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'They replace sliding friction with rolling friction, which is much smaller.',
      explanation: 'Ball bearings convert sliding friction between surfaces into rolling friction, drastically lowering frictional resistance.'
    }
  },

  // -------------------------------------------------------------
  // 19. Curved Mirrors: Concave Mirror Ray Tracing
  // -------------------------------------------------------------
  {
    id: 'phy-19',
    grade: 'Grade 9',
    subject: 'Physics',
    topic: 'Light and Optics',
    subtopic: 'Concave Mirror Image Formation',
    topicId: 'physics_light_optics',
    topicTitle: 'Optics and Wave Nature of Light',
    difficulty: 'Advanced',
    learningObjective: 'Determine the nature, orientation, and size of an image formed by a concave mirror when an object is placed between the pole and focus.',
    questionText: 'A dentist uses a small concave mirror to examine a patient’s tooth. When the tooth is placed very close to the mirror, between the mirror’s pole (P) and principal focus (F), what kind of image is produced?',
    contextOrEquation: 'Concave mirror ray tracing: Object between Pole (P) and Focus (F) -> Virtual, Erect (Upright), and Magnified (Enlarged) behind the mirror',
    options: [
      { id: 'A', text: 'Real, inverted, and diminished' },
      { id: 'B', text: 'Virtual, erect (upright), and magnified (enlarged)' },
      { id: 'C', text: 'Real, inverted, and magnified' },
      { id: 'D', text: 'Virtual, inverted, and same size' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Virtual, erect (upright), and magnified (enlarged)',
    conceptualExplanation: 'When an object is placed inside the focal length of a concave mirror (between P and F), reflected rays diverge upon reflection. Traced backward behind the mirror, they appear to intersect, forming a virtual, upright (erect), and significantly magnified image. This allows the dentist to see an enlarged view of the tooth.',
    workedSolution: 'Step 1: Identify object position: inside focal length (between P and F). Step 2: Reflected rays diverge in front of mirror. Step 3: Extensions behind mirror converge to form a virtual, upright, magnified image.',
    expectedReasoning: 'Placing an object within the focal length of a converging concave mirror produces a virtual, upright, enlarged image.',
    hint: 'Dentists need to see teeth larger and right-side up, not upside down!',
    markingCriteria: 'Must select option B. Correctly identifies virtual, erect, and magnified.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Assuming Concave Mirrors Only Make Real/Inverted Images',
        explanation: 'Forgetting that within the focal length, concave mirrors switch from real/inverted to virtual/erect/magnified.',
        typicalReasoningQuote: 'Concave mirrors always produce real and upside-down images.'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-19-fu',
      questionText: 'What kind of mirror is always installed as the passenger-side rearview mirror in automobiles to provide a wide field of view with diminished upright images?',
      options: [
        { id: 'A', text: 'Convex mirror' },
        { id: 'B', text: 'Concave mirror' },
        { id: 'C', text: 'Plane mirror' },
        { id: 'D', text: 'Cylindrical mirror' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Convex mirror',
      explanation: 'Convex mirrors curve outwards, always forming virtual, upright, and diminished images, providing drivers with a much wider panoramic field of view.'
    }
  },

  // -------------------------------------------------------------
  // 20. Simple Harmonic Motion and Simple Pendulum
  // -------------------------------------------------------------
  {
    id: 'phy-20',
    grade: 'Grade 9',
    subject: 'Physics',
    topic: 'Force and Motion',
    subtopic: 'Period of a Simple Pendulum',
    topicId: 'physics_force_motion',
    topicTitle: 'Force and Laws of Motion',
    difficulty: 'Intermediate',
    learningObjective: 'Identify the factors that determine the time period of a simple pendulum (T = 2π√(L/g)).',
    questionText: 'A grandfather clock keeps time using a simple pendulum. If the clock starts running too slow (each swing takes too much time), what adjustment should be made to the pendulum bob to speed up the clock?',
    contextOrEquation: 'T = 2π * √(L / g); To decrease period T (make it oscillate faster), decrease length L.',
    options: [
      { id: 'A', text: 'Shorten the length of the pendulum by screwing the bob upwards.' },
      { id: 'B', text: 'Lengthen the pendulum rod downwards.' },
      { id: 'C', text: 'Replace the bob with one that has twice the mass without changing length.' },
      { id: 'D', text: 'Pull the bob to a much larger release angle.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Shorten the length of the pendulum by screwing the bob upwards.',
    conceptualExplanation: 'The time period of a simple pendulum for small angles is T = 2π * √(L / g). The period depends solely on length (L) and gravitational acceleration (g), and is independent of the bob’s mass. If the clock is running slow, its period T is too long. To decrease T (so swings occur faster), the effective length L must be shortened.',
    workedSolution: 'Step 1: Clock running slow means period T is too large. Step 2: From T = 2π * √(L / g), T is directly proportional to √L. Step 3: To decrease T, decrease length L by raising the bob.',
    expectedReasoning: 'Period of oscillation decreases when length is reduced, shortening time per swing and speeding up the clock.',
    hint: 'Shorter pendulums swing back and forth faster than long pendulums.',
    markingCriteria: 'Must select option A. Applies T ∝ √L.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Believing Pendulum Period Depends on Bob Mass',
        explanation: 'Assuming a heavier bob swings faster due to greater gravity force, ignoring that inertia also increases equally (m cancels out).',
        typicalReasoningQuote: 'A heavier weight pulls harder on the string so it will swing faster.'
      }
    ],
    fallbackFollowUp: {
      id: 'phy-20-fu',
      questionText: 'If the length of a simple pendulum is made four times longer (4L), what happens to its time period T?',
      options: [
        { id: 'A', text: 'It doubles (2T)' },
        { id: 'B', text: 'It quadruples (4T)' },
        { id: 'C', text: 'It halves (T/2)' },
        { id: 'D', text: 'It remains unchanged' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'It doubles (2T)',
      explanation: 'Since T ∝ √L, multiplying length by 4 multiplies the period by √4 = 2.'
    }
  }
];
