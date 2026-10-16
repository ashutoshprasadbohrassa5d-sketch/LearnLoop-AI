import type { STEMQuestion } from '../../types/learning.ts';

export const CHEMISTRY_QUESTIONS: STEMQuestion[] = [
  // -------------------------------------------------------------
  // 1. Balancing Chemical Equations & Conservation of Mass
  // -------------------------------------------------------------
  {
    id: 'chem-01',
    grade: 'Grade 8',
    subject: 'Chemistry',
    topic: 'Chemical Reactions and Equations',
    subtopic: 'Balancing Equations and Conservation of Mass',
    topicId: 'chemistry_reactions',
    topicTitle: 'Chemical Reactions and Equations',
    difficulty: 'Beginner',
    learningObjective: 'Apply the Law of Conservation of Mass by balancing stoichiometric coefficients without altering molecular subscripts.',
    questionText: 'When hydrogen gas reacts with oxygen gas to synthesize water, which balanced chemical equation accurately obeys the Law of Conservation of Mass?',
    contextOrEquation: 'Unbalanced skeleton: H₂ + O₂ → H₂O',
    options: [
      { id: 'A', text: 'H₂ + O₂ → H₂O₂' },
      { id: 'B', text: 'H₂ + O₂ → H₂O' },
      { id: 'C', text: '2H₂ + O₂ → 2H₂O' },
      { id: 'D', text: '2H₂ + 2O₂ → 2H₂O' },
    ],
    correctAnswerId: 'C',
    correctAnswerText: '2H₂ + O₂ → 2H₂O',
    conceptualExplanation: 'The Law of Conservation of Mass dictates that atoms are neither created nor destroyed during a chemical reaction. On the reactant side of 2H₂ + O₂: there are 4 H atoms and 2 O atoms. On the product side of 2H₂O: there are 2 × 2 = 4 H atoms and 2 × 1 = 2 O atoms. Changing subscripts (like writing H₂O₂) creates hydrogen peroxide, a completely different compound, which is chemically incorrect.',
    workedSolution: 'Step 1: Count initial atoms in H₂ + O₂ → H₂O: LHS = 2 H, 2 O; RHS = 2 H, 1 O. Step 2: Place coefficient 2 before H₂O to balance O: H₂ + O₂ → 2H₂O (RHS has 4 H, 2 O). Step 3: Place coefficient 2 before H₂ on LHS to balance H: 2H₂ + O₂ → 2H₂O. LHS = 4 H, 2 O; RHS = 4 H, 2 O.',
    expectedReasoning: 'Coefficients must balance the number of each type of atom across the reaction arrow without changing molecular identity (subscripts).',
    hint: 'Never change the small subscript numbers inside chemical formulas; only adjust the large coefficients in front.',
    markingCriteria: 'Must select option C (2H₂ + O₂ → 2H₂O).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Changing Subscripts to Balance Equations',
        explanation: 'Modifying chemical subscripts (turning water H₂O into hydrogen peroxide H₂O₂) rather than adjusting stoichiometric coefficients.',
        typicalReasoningQuote: 'I just added a 2 to oxygen in H₂O to get H₂O₂ so both sides have 2 oxygens.'
      },
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Ignoring Unbalanced Oxygen Atoms',
        explanation: 'Failing to verify that the diatomic oxygen reactant (O₂) yields only one oxygen atom in H₂O.',
        typicalReasoningQuote: 'One hydrogen molecule and one oxygen molecule make one water molecule.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-01-fu',
      questionText: 'What is the correct coefficient for magnesium (Mg) when balancing: _ Mg + O₂ → 2 MgO?',
      options: [
        { id: 'A', text: '1' },
        { id: 'B', text: '2' },
        { id: 'C', text: '3' },
        { id: 'D', text: '4' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: '2',
      explanation: 'On the product side, 2 MgO contains 2 Mg atoms and 2 O atoms. Therefore, 2 atoms of Mg are needed on the reactant side: 2 Mg + O₂ → 2 MgO.'
    }
  },

  // -------------------------------------------------------------
  // 2. Types of Chemical Reactions: Thermal Decomposition
  // -------------------------------------------------------------
  {
    id: 'chem-02',
    grade: 'Grade 9',
    subject: 'Chemistry',
    topic: 'Chemical Reactions and Equations',
    subtopic: 'Decomposition Reactions (Thermal)',
    topicId: 'chemistry_reactions',
    topicTitle: 'Chemical Reactions and Equations',
    difficulty: 'Intermediate',
    learningObjective: 'Identify thermal decomposition of calcium carbonate and write its balanced reaction products.',
    questionText: 'When solid limestone (calcium carbonate, CaCO₃) is strongly heated in a lime kiln, it breaks down into a solid white residue and a gas that turns limewater milky. What type of reaction is this, and what are the products?',
    contextOrEquation: 'CaCO₃(s) --[Heat]--> CaO(s) + CO₂(g)',
    options: [
      { id: 'A', text: 'Combination reaction; products are Calcium and Carbon monoxide' },
      { id: 'B', text: 'Thermal decomposition reaction; products are Quicklime (CaO) and Carbon dioxide (CO₂)' },
      { id: 'C', text: 'Displacement reaction; products are Calcium carbide and Oxygen' },
      { id: 'D', text: 'Neutralization reaction; products are Calcium chloride and Water' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Thermal decomposition reaction; products are Quicklime (CaO) and Carbon dioxide (CO₂)',
    conceptualExplanation: 'A decomposition reaction is one in which a single reactant breaks down into two or more simpler products upon application of energy. When heat energy is used, it is termed thermal decomposition. Heating CaCO₃ yields solid calcium oxide (quicklime, CaO) and carbon dioxide gas (CO₂), which precipitates calcium carbonate in limewater: Ca(OH)₂ + CO₂ → CaCO₃(s) + H₂O.',
    workedSolution: 'Step 1: One single reactant (CaCO₃) yields two products (CaO and CO₂). Step 2: Heat energy is supplied (thermal). Step 3: Conclude that this is a thermal decomposition reaction.',
    expectedReasoning: 'A single compound breaking down under heat into simpler substances is a thermal decomposition reaction.',
    hint: 'A single compound splits into two smaller substances when heated.',
    markingCriteria: 'Must select option B.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Confusing Decomposition with Combination',
        explanation: 'Flipping the direction of the reaction, treating breakdown as synthesis.',
        typicalReasoningQuote: 'Heat combines limestone with oxygen to create new rocks.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-02-fu',
      questionText: 'What type of decomposition occurs when electric current is passed through acidified water to yield hydrogen and oxygen gases?',
      options: [
        { id: 'A', text: 'Electrolytic decomposition (Electrolysis)' },
        { id: 'B', text: 'Photochemical decomposition' },
        { id: 'C', text: 'Thermal cracking' },
        { id: 'D', text: 'Precipitation' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Electrolytic decomposition (Electrolysis)',
      explanation: 'When electrical energy drives the decomposition of a substance (such as 2H₂O → 2H₂ + O₂), it is termed electrolysis.'
    }
  },

  // -------------------------------------------------------------
  // 3. Single Displacement and the Reactivity Series
  // -------------------------------------------------------------
  {
    id: 'chem-03',
    grade: 'Grade 8',
    subject: 'Chemistry',
    topic: 'Metals and Non-Metals',
    subtopic: 'Displacement Reactions and Reactivity Series',
    topicId: 'chemistry_metals',
    topicTitle: 'Metals, Non-Metals, and Reactivity',
    difficulty: 'Intermediate',
    learningObjective: 'Predict whether a displacement reaction occurs based on the metal reactivity series.',
    questionText: 'A shiny iron nail is placed into a test tube containing blue copper(II) sulfate solution (CuSO₄). Over an hour, the blue color fades to pale green and a reddish-brown coating forms on the nail. What happened?',
    contextOrEquation: 'Reactivity series: Fe > Cu. Reaction: Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)',
    options: [
      { id: 'A', text: 'Iron is more reactive than copper, so iron displaces copper from CuSO₄, forming green FeSO₄ and depositing elemental copper.' },
      { id: 'B', text: 'Copper is more reactive than iron, so copper oxidizes the iron nail into rust.' },
      { id: 'C', text: 'Copper sulfate evaporates, leaving dyed blue iron crystals.' },
      { id: 'D', text: 'No chemical reaction occurred; this is purely a physical color change.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Iron is more reactive than copper, so iron displaces copper from CuSO₄, forming green FeSO₄ and depositing elemental copper.',
    conceptualExplanation: 'In the reactivity series of metals, iron (Fe) is placed above copper (Cu), meaning iron is more electropositive and readily loses electrons. Fe displaces Cu²⁺ ions from solution: Fe(s) + Cu²⁺(aq) → Fe²⁺(aq) + Cu(s). The blue Cu²⁺ ions are replaced by pale green Fe²⁺ ions, while metallic copper deposits as a reddish-brown layer on the iron nail.',
    workedSolution: 'Step 1: Check reactivity: Fe is higher than Cu. Step 2: A more reactive metal displaces a less reactive metal from its salt solution. Step 3: Fe displaces Cu to form FeSO₄ (pale green) and Cu (red-brown deposit).',
    expectedReasoning: 'Higher position in the reactivity series allows iron to displace copper ions, forming ferrous sulfate and elemental copper.',
    hint: 'Which metal is higher on the reactivity series: iron or copper?',
    markingCriteria: 'Must select option A.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Inverted Reactivity Series Order',
        explanation: 'Believing copper is more reactive than iron because copper is widely used in plumbing and wires.',
        typicalReasoningQuote: 'Copper is a better conductor of electricity, so copper must be more reactive than iron.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-03-fu',
      questionText: 'What would happen if a piece of solid copper wire were placed into a solution of ferrous sulfate (FeSO₄)?',
      options: [
        { id: 'A', text: 'No reaction occurs because copper is less reactive than iron.' },
        { id: 'B', text: 'Iron metal precipitates instantly.' },
        { id: 'C', text: 'The solution turns dark purple.' },
        { id: 'D', text: 'Hydrogen gas bubbles vigorously.' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'No reaction occurs because copper is less reactive than iron.',
      explanation: 'Since copper is less reactive than iron, it cannot displace iron from FeSO₄; no reaction takes place.'
    }
  },

  // -------------------------------------------------------------
  // 4. Double Displacement and Precipitation Reactions
  // -------------------------------------------------------------
  {
    id: 'chem-04',
    grade: 'Grade 9',
    subject: 'Chemistry',
    topic: 'Chemical Reactions and Equations',
    subtopic: 'Double Displacement and Precipitation',
    topicId: 'chemistry_reactions',
    topicTitle: 'Chemical Reactions and Equations',
    difficulty: 'Intermediate',
    learningObjective: 'Identify double displacement reactions where mutually exchanged ions form an insoluble precipitate.',
    questionText: 'When clear colorless sodium sulfate solution (Na₂SO₄) is mixed with clear colorless barium chloride solution (BaCl₂), an immediate thick white solid forms that settles to the bottom. What is the insoluble white precipitate?',
    contextOrEquation: 'Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s)↓ + 2NaCl(aq)',
    options: [
      { id: 'A', text: 'Sodium chloride (NaCl)' },
      { id: 'B', text: 'Barium sulfate (BaSO₄)' },
      { id: 'C', text: 'Sodium oxide (Na₂O)' },
      { id: 'D', text: 'Chlorine gas (Cl₂)' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Barium sulfate (BaSO₄)',
    conceptualExplanation: 'This is a double displacement (metathesis) reaction in which cations and anions exchange partners: Ba²⁺ ions combine with SO₄²⁻ ions to form barium sulfate (BaSO₄), which is insoluble in water and precipitates out as a dense white solid. Sodium chloride remains dissolved in the aqueous supernatant.',
    workedSolution: 'Step 1: Write ions present: Na⁺, SO₄²⁻, Ba²⁺, Cl⁻. Step 2: Swap ion partners: Ba²⁺ + SO₄²⁻ → BaSO₄, and Na⁺ + Cl⁻ → NaCl. Step 3: NaCl is highly water-soluble; BaSO₄ is insoluble and precipitates as the white solid.',
    expectedReasoning: 'Barium ions and sulfate ions precipitate as insoluble BaSO₄ while sodium and chloride remain aqueous.',
    hint: 'Sodium chloride (table salt) dissolves easily in water, so what is the other compound formed?',
    markingCriteria: 'Must select option B (Barium sulfate).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Selecting Soluble Table Salt as the Precipitate',
        explanation: 'Forgetting that NaCl is extremely soluble in water and does not precipitate.',
        typicalReasoningQuote: 'NaCl is salt and salt is a solid powder, so NaCl is the white precipitate.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-04-fu',
      questionText: 'What general chemical term describes any chemical reaction where two compounds exchange ionic partners to produce an insoluble solid?',
      options: [
        { id: 'A', text: 'Precipitation reaction' },
        { id: 'B', text: 'Combustion reaction' },
        { id: 'C', text: 'Electrolysis' },
        { id: 'D', text: 'Sublimation' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Precipitation reaction',
      explanation: 'A precipitation reaction is a reaction between two soluble salts forming an insoluble solid product called a precipitate.'
    }
  },

  // -------------------------------------------------------------
  // 5. Redox Reactions: Oxidation and Reduction
  // -------------------------------------------------------------
  {
    id: 'chem-05',
    grade: 'Grade 9',
    subject: 'Chemistry',
    topic: 'Chemical Reactions and Equations',
    subtopic: 'Oxidation and Reduction (Redox)',
    topicId: 'chemistry_reactions',
    topicTitle: 'Chemical Reactions and Equations',
    difficulty: 'Advanced',
    learningObjective: 'Define oxidation and reduction in terms of oxygen gain/loss and identify the oxidizing/reducing agents.',
    questionText: 'In the reaction: CuO + H₂ --[Heat]--> Cu + H₂O, which substance is oxidized, which is reduced, and what is the reducing agent?',
    contextOrEquation: 'CuO loses oxygen -> Reduced to Cu. H₂ gains oxygen -> Oxidized to H₂O.',
    options: [
      { id: 'A', text: 'H₂ is oxidized; CuO is reduced; H₂ is the reducing agent.' },
      { id: 'B', text: 'CuO is oxidized; H₂ is reduced; CuO is the reducing agent.' },
      { id: 'C', text: 'Both CuO and H₂ are oxidized simultaneously.' },
      { id: 'D', text: 'Copper is neither oxidized nor reduced because it is a metal.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'H₂ is oxidized; CuO is reduced; H₂ is the reducing agent.',
    conceptualExplanation: 'Oxidation is the gain of oxygen (or loss of electrons), while reduction is the loss of oxygen (or gain of electrons). Here, CuO loses oxygen to become Cu, so CuO is reduced. H₂ gains oxygen to become H₂O, so H₂ is oxidized. The substance that undergoes oxidation (H₂) causes the reduction of the other substance, making H₂ the reducing agent.',
    workedSolution: 'Step 1: Track oxygen: CuO → Cu (lost oxygen = reduction). Step 2: H₂ → H₂O (gained oxygen = oxidation). Step 3: The substance oxidized is H₂. The reducing agent is the substance that gets oxidized (H₂). Match to option A.',
    expectedReasoning: 'Loss of oxygen represents reduction (CuO to Cu); gain of oxygen represents oxidation (H₂ to H₂O); the oxidized species acts as reducing agent.',
    hint: 'Oxidation = Gain of Oxygen. Reduction = Loss of Oxygen. The substance that gains oxygen is oxidized and acts as the reducing agent.',
    markingCriteria: 'Must select option A. Correctly pairs oxidized species, reduced species, and reducing agent.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Inverting Oxidized and Reduced Species',
        explanation: 'Confusing loss of oxygen with oxidation.',
        typicalReasoningQuote: 'Copper gets oxidized because it is left as pure metal.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-05-fu',
      questionText: 'In terms of electrons (OIL RIG), what do oxidation and reduction mean?',
      options: [
        { id: 'A', text: 'Oxidation is Loss of electrons; Reduction is Gain of electrons.' },
        { id: 'B', text: 'Oxidation is Gain of electrons; Reduction is Loss of electrons.' },
        { id: 'C', text: 'Both involve only proton transfer.' },
        { id: 'D', text: 'Oxidation creates neutrons; reduction destroys them.' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Oxidation is Loss of electrons; Reduction is Gain of electrons.',
      explanation: 'OIL RIG: Oxidation Is Loss of electrons, Reduction Is Gain of electrons.'
    }
  },

  // -------------------------------------------------------------
  // 6. Acids, Bases, and the pH Scale
  // -------------------------------------------------------------
  {
    id: 'chem-06',
    grade: 'Grade 8',
    subject: 'Chemistry',
    topic: 'Acids, Bases, and Salts',
    subtopic: 'The pH Scale and Hydrogen Ion Concentration',
    topicId: 'chemistry_acids_bases',
    topicTitle: 'Acids, Bases, and Salts',
    difficulty: 'Beginner',
    learningObjective: 'Interpret the pH scale from 0 to 14 in terms of acidity, neutrality, and alkalinity.',
    questionText: 'A laboratory assistant tests four aqueous solutions and records their pH values: Solution W = 1.5, Solution X = 7.0, Solution Y = 8.5, and Solution Z = 13.5. Which solution has the highest concentration of hydrogen ions (H⁺) and is the strongest acid?',
    contextOrEquation: 'pH = -log₁₀[H⁺]; pH < 7 is acidic; Lower pH = Higher [H⁺] concentration; pH 7 is neutral; pH > 7 is basic.',
    options: [
      { id: 'A', text: 'Solution Z (pH = 13.5)' },
      { id: 'B', text: 'Solution X (pH = 7.0)' },
      { id: 'C', text: 'Solution W (pH = 1.5)' },
      { id: 'D', text: 'Solution Y (pH = 8.5)' },
    ],
    correctAnswerId: 'C',
    correctAnswerText: 'Solution W (pH = 1.5)',
    conceptualExplanation: 'The pH scale is inversely logarithmic to hydrogen ion concentration [H⁺]. A pH below 7 indicates an acidic solution, and the lower the pH value, the higher the [H⁺] concentration. Therefore, Solution W with pH = 1.5 is strongly acidic and contains the greatest concentration of H⁺ ions. A pH of 13.5 is strongly alkaline (high OH⁻, extremely low H⁺).',
    workedSolution: 'Step 1: Check pH definitions: <7 = acid, 7 = neutral, >7 = base. Step 2: The lower the pH number, the stronger the acid. Step 3: Lowest pH value is 1.5 (Solution W), which has the highest [H⁺] concentration.',
    expectedReasoning: 'pH is inversely related to hydrogen ion concentration; lower pH values denote stronger acids with higher [H⁺].',
    hint: 'Remember that pH is an inverse scale: small numbers mean strong acids with lots of H⁺ ions!',
    markingCriteria: 'Must select option C (Solution W, pH = 1.5).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Assuming Higher pH Number Equals Stronger Acid',
        explanation: 'Treating the pH scale like a thermometer where higher numbers mean "more acidic".',
        typicalReasoningQuote: '13.5 is the biggest number on the scale, so it must be the most powerful acid.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-06-fu',
      questionText: 'What is the pH of pure neutral water at 25 °C?',
      options: [
        { id: 'A', text: '0' },
        { id: 'B', text: '7' },
        { id: 'C', text: '14' },
        { id: 'D', text: '1' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: '7',
      explanation: 'At 25 °C, pure water has [H⁺] = [OH⁻] = 10⁻⁷ M, resulting in a neutral pH of exactly 7.'
    }
  },

  // -------------------------------------------------------------
  // 7. Acid-Base Indicators: Litmus and Phenolphthalein
  // -------------------------------------------------------------
  {
    id: 'chem-07',
    grade: 'Grade 8',
    subject: 'Chemistry',
    topic: 'Acids, Bases, and Salts',
    subtopic: 'Color Changes with Chemical Indicators',
    topicId: 'chemistry_acids_bases',
    topicTitle: 'Acids, Bases, and Salts',
    difficulty: 'Beginner',
    learningObjective: 'Predict the color transitions of litmus paper and phenolphthalein in acidic versus basic solutions.',
    questionText: 'A colorless liquid turns red litmus paper blue and causes phenolphthalein indicator to turn from colorless to vivid pink. Is this liquid acidic, basic, or neutral, and which substance could it be?',
    contextOrEquation: 'Acid: Blue litmus turns Red; Phenolphthalein remains colorless. Base: Red litmus turns Blue; Phenolphthalein turns Pink.',
    options: [
      { id: 'A', text: 'Acidic; Dilute hydrochloric acid (HCl)' },
      { id: 'B', text: 'Basic; Dilute sodium hydroxide (NaOH)' },
      { id: 'C', text: 'Neutral; Pure distilled water' },
      { id: 'D', text: 'Acidic; Lemon juice (citric acid)' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Basic; Dilute sodium hydroxide (NaOH)',
    conceptualExplanation: 'Bases turn red litmus paper blue and turn colorless phenolphthalein into a bright pink/magenta color. Acids, in contrast, turn blue litmus red and leave phenolphthalein colorless. Therefore, the liquid is basic, matching sodium hydroxide (NaOH).',
    workedSolution: 'Step 1: Red litmus -> Blue indicates an alkaline/basic substance. Step 2: Phenolphthalein -> Pink confirms a basic pH (> 8.2). Step 3: NaOH is a strong base. Match to option B.',
    expectedReasoning: 'Red litmus turning blue and phenolphthalein turning pink are definitive indicators of a basic solution.',
    hint: 'Remember: Blue for Base! Bases turn litmus Blue and phenolphthalein Pink.',
    markingCriteria: 'Must select option B.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Inverting Indicator Color Rules',
        explanation: 'Thinking acids turn litmus blue and phenolphthalein pink.',
        typicalReasoningQuote: 'Strong acids are reactive so they make the liquid turn bright pink.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-07-fu',
      questionText: 'What color does blue litmus paper turn when dipped into vinegar (acetic acid)?',
      options: [
        { id: 'A', text: 'Red' },
        { id: 'B', text: 'Remains blue' },
        { id: 'C', text: 'Turns green' },
        { id: 'D', text: 'Turns bright yellow' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Red',
      explanation: 'Acids donate H⁺ ions, turning blue litmus paper red.'
    }
  },

  // -------------------------------------------------------------
  // 8. Neutralization Reactions and Antacids
  // -------------------------------------------------------------
  {
    id: 'chem-08',
    grade: 'Grade 8',
    subject: 'Chemistry',
    topic: 'Acids, Bases, and Salts',
    subtopic: 'Neutralization Reactions and Applications',
    topicId: 'chemistry_acids_bases',
    topicTitle: 'Acids, Bases, and Salts',
    difficulty: 'Intermediate',
    learningObjective: 'Write the general formula for a neutralization reaction and explain how antacids relieve stomach hyperacidity.',
    questionText: 'When a person experiences severe heartburn due to excessive hydrochloric acid (HCl) secretion in the stomach, they often take milk of magnesia (magnesium hydroxide, Mg(OH)₂). What type of reaction occurs in the stomach, and what products are formed?',
    contextOrEquation: '2HCl(aq) + Mg(OH)₂(s) → MgCl₂(aq) + 2H₂O(l) (Acid + Base → Salt + Water)',
    options: [
      { id: 'A', text: 'Combustion reaction producing magnesium gas and chlorine vapor.' },
      { id: 'B', text: 'Neutralization reaction producing magnesium chloride (salt) and water.' },
      { id: 'C', text: 'Thermal decomposition producing toxic magnesium oxide.' },
      { id: 'D', text: 'Precipitation of pure magnesium metal.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Neutralization reaction producing magnesium chloride (salt) and water.',
    conceptualExplanation: 'Neutralization is a reaction between an acid and a base to form a salt and water: H⁺(aq) + OH⁻(aq) → H₂O(l). Magnesium hydroxide is a mild, non-corrosive base (antacid) that reacts with excess stomach acid (HCl) to produce magnesium chloride salt (MgCl₂) and water, raising the stomach pH to a comfortable, neutral level.',
    workedSolution: 'Step 1: Identify reactants: HCl (acid) and Mg(OH)₂ (base). Step 2: Reaction: Acid + Base → Salt + Water. Step 3: 2HCl + Mg(OH)₂ → MgCl₂ + 2H₂O (neutralization).',
    expectedReasoning: 'Acid reacting with a basic hydroxide is a classic neutralization reaction generating a salt and water.',
    hint: 'Acid + Base always produces Salt + Water.',
    markingCriteria: 'Must select option B.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Confusing Neutralization with Combustion',
        explanation: 'Believing the burning sensation of heartburn implies actual combustion inside the stomach.',
        typicalReasoningQuote: 'Heartburn is a fire in the stomach so taking medicine burns off the acid.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-08-fu',
      questionText: 'Which weak base is widely used as household baking soda and in fire extinguishers to neutralize acids?',
      options: [
        { id: 'A', text: 'Sodium hydrogen carbonate (NaHCO₃)' },
        { id: 'B', text: 'Sulfuric acid (H₂SO₄)' },
        { id: 'C', text: 'Sodium hydroxide (NaOH)' },
        { id: 'D', text: 'Calcium chloride (CaCl₂)' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Sodium hydrogen carbonate (NaHCO₃)',
      explanation: 'Sodium hydrogen carbonate (baking soda, NaHCO₃) is a safe mild base that neutralizes acids while releasing CO₂ gas.'
    }
  },

  // -------------------------------------------------------------
  // 9. Metals vs Non-Metals: Physical and Chemical Properties
  // -------------------------------------------------------------
  {
    id: 'chem-09',
    grade: 'Grade 8',
    subject: 'Chemistry',
    topic: 'Metals and Non-Metals',
    subtopic: 'Physical Properties: Malleability and Ductility',
    topicId: 'chemistry_metals',
    topicTitle: 'Metals, Non-Metals, and Reactivity',
    difficulty: 'Beginner',
    learningObjective: 'Define malleability and ductility and distinguish them from brittleness.',
    questionText: 'Aluminum can be beaten with a hammer into ultra-thin foil used to wrap food, and copper can be drawn into long, slender electrical wires. Which terms describe these two physical properties, respectively?',
    contextOrEquation: 'Malleability: property of being beaten into thin sheets. Ductility: property of being drawn into wires.',
    options: [
      { id: 'A', text: 'Ductility (sheets) and Malleability (wires)' },
      { id: 'B', text: 'Malleability (sheets) and Ductility (wires)' },
      { id: 'C', text: 'Sonority and Brittleness' },
      { id: 'D', text: 'Viscosity and Elasticity' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Malleability (sheets) and Ductility (wires)',
    conceptualExplanation: 'Malleability is the physical property of a metal allowing it to be hammered, rolled, or pressed into thin sheets without shattering. Ductility is the physical property allowing a metal to be stretched and drawn under tensile stress into long, thin wires. Both properties stem from metallic bonding, where positive metal ions slide past each other within a delocalized "sea of electrons".',
    workedSolution: 'Step 1: Beating into sheets = Malleability (think "mallet"). Step 2: Drawing into wires = Ductility. Step 3: Match order to option B.',
    expectedReasoning: 'Malleability allows deformation into thin foils; ductility allows tensile stretching into wires.',
    hint: 'Think of a mallet hitting metal into a sheet: Mallet -> Malleability.',
    markingCriteria: 'Must select option B.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Swapping Malleability and Ductility',
        explanation: 'Inverting the definitions of sheets and wires.',
        typicalReasoningQuote: 'Ductility means ducking under pressure into flat sheets.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-09-fu',
      questionText: 'Which metal is a liquid at normal room temperature (25 °C)?',
      options: [
        { id: 'A', text: 'Mercury (Hg)' },
        { id: 'B', text: 'Iron (Fe)' },
        { id: 'C', text: 'Sodium (Na)' },
        { id: 'D', text: 'Lead (Pb)' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Mercury (Hg)',
      explanation: 'Mercury has a melting point of -38.8 °C and is the only pure metal that is liquid at standard room temperature.'
    }
  },

  // -------------------------------------------------------------
  // 10. Oxides of Metals vs Non-Metals
  // -------------------------------------------------------------
  {
    id: 'chem-10',
    grade: 'Grade 8',
    subject: 'Chemistry',
    topic: 'Metals and Non-Metals',
    subtopic: 'Acidic vs Basic Oxides',
    topicId: 'chemistry_metals',
    topicTitle: 'Metals, Non-Metals, and Reactivity',
    difficulty: 'Intermediate',
    learningObjective: 'Contrast the acidic/basic nature of metallic oxides versus non-metallic oxides in water.',
    questionText: 'When magnesium ribbon is burned in air, white magnesium oxide powder (MgO) forms. When sulfur powder is burned, sulfur dioxide gas (SO₂) forms. Each product is dissolved in water and tested with litmus paper. What are the results?',
    contextOrEquation: 'MgO + H₂O → Mg(OH)₂ (basic, turns red litmus blue). SO₂ + H₂O → H₂SO₃ (acidic, turns blue litmus red).',
    options: [
      { id: 'A', text: 'Both oxide solutions are strictly neutral (pH 7).' },
      { id: 'B', text: 'MgO in water is basic (turns red litmus blue); SO₂ in water is acidic (turns blue litmus red).' },
      { id: 'C', text: 'MgO in water is acidic; SO₂ in water is basic.' },
      { id: 'D', text: 'Both oxide solutions are strong acids that bleach litmus paper white.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'MgO in water is basic (turns red litmus blue); SO₂ in water is acidic (turns blue litmus red).',
    conceptualExplanation: 'In general, metal oxides are basic oxides: when dissolved in water, MgO forms magnesium hydroxide (Mg(OH)₂), a basic solution that turns red litmus blue. In contrast, non-metal oxides are acidic oxides: when dissolved in water, SO₂ forms sulfurous acid (H₂SO₃), an acidic solution that turns blue litmus red.',
    workedSolution: 'Step 1: Magnesium is a metal -> metal oxides are basic -> MgO forms basic Mg(OH)₂ -> red litmus turns blue. Step 2: Sulfur is a non-metal -> non-metal oxides are acidic -> SO₂ forms acidic H₂SO₃ -> blue litmus turns red. Step 3: Match to option B.',
    expectedReasoning: 'Metallic oxides form basic hydroxides in water, whereas non-metallic oxides form oxyacids.',
    hint: 'Metals form basic oxides; non-metals form acidic oxides.',
    markingCriteria: 'Must select option B.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Inverted Oxide Character',
        explanation: 'Swapping basic metal oxides with acidic non-metal oxides.',
        typicalReasoningQuote: 'Magnesium burns so brightly it must be an acid, while sulfur smells like bath soap so it is a base.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-10-fu',
      questionText: 'What term describes oxides like aluminum oxide (Al₂O₃) and zinc oxide (ZnO) that react with BOTH acids and bases to produce salt and water?',
      options: [
        { id: 'A', text: 'Amphoteric oxides' },
        { id: 'B', text: 'Neutral oxides' },
        { id: 'C', text: 'Peroxides' },
        { id: 'D', text: 'Superoxides' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Amphoteric oxides',
      explanation: 'Amphoteric oxides exhibit both acidic and basic behaviors, reacting with both acids and strong bases.'
    }
  },

  // -------------------------------------------------------------
  // 11. Corrosion and Rusting of Iron
  // -------------------------------------------------------------
  {
    id: 'chem-11',
    grade: 'Grade 8',
    subject: 'Chemistry',
    topic: 'Metals and Non-Metals',
    subtopic: 'Conditions for Rusting of Iron and Galvanization',
    topicId: 'chemistry_metals',
    topicTitle: 'Metals, Non-Metals, and Reactivity',
    difficulty: 'Intermediate',
    learningObjective: 'State the two essential environmental factors required for iron to rust and explain galvanization.',
    questionText: 'Three iron nails are set up: Tube 1 has nail in boiled distilled water sealed with an oil layer (no oxygen). Tube 2 has nail with anhydrous calcium chloride drying agent (no water vapor). Tube 3 has nail exposed to both air and tap water. Which nail will rust, and what is the chemical nature of rust?',
    contextOrEquation: 'Rusting equation: 4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O (Hydrated iron(III) oxide)',
    options: [
      { id: 'A', text: 'Nails in all three tubes will rust equally fast.' },
      { id: 'B', text: 'Only the nail in Tube 3 will rust, because BOTH oxygen and moisture are required; rust is hydrated iron(III) oxide.' },
      { id: 'C', text: 'Only the nail in Tube 1 will rust because water is the only requirement.' },
      { id: 'D', text: 'Only the nail in Tube 2 will rust because dry air accelerates iron oxidation.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Only the nail in Tube 3 will rust, because BOTH oxygen and moisture are required; rust is hydrated iron(III) oxide.',
    conceptualExplanation: 'Rusting of iron is an electrochemical process requiring the simultaneous presence of both oxygen (O₂) and water (moisture). In Tube 1, boiling expelled dissolved oxygen and the oil layer prevented re-entry. In Tube 2, the drying agent removed all water vapor. Only in Tube 3 are both oxygen and water present. The flaky reddish-brown rust is hydrated iron(III) oxide, Fe₂O₃·xH₂O.',
    workedSolution: 'Step 1: Check Tube 1 (water only, no O₂) -> No rust. Step 2: Check Tube 2 (air only, no H₂O) -> No rust. Step 3: Check Tube 3 (both O₂ and H₂O present) -> Rust forms. Step 4: Rust formula is Fe₂O₃·xH₂O.',
    expectedReasoning: 'Both oxygen and moisture are indispensable for rusting; absence of either halts iron oxidation.',
    hint: 'Can iron rust in bone-dry desert air without water, or in boiled water without any dissolved air?',
    markingCriteria: 'Must select option B.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Believing Water Alone Causes Rusting',
        explanation: 'Failing to recognize that dissolved oxygen gas is the oxidizing agent in the rusting reaction.',
        typicalReasoningQuote: 'Iron gets wet and that is all it takes to make rust.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-11-fu',
      questionText: 'What protective method coats iron or steel with a thin sacrificial layer of zinc to prevent rusting?',
      options: [
        { id: 'A', text: 'Galvanization' },
        { id: 'B', text: 'Electrolysis' },
        { id: 'C', text: 'Annealing' },
        { id: 'D', text: 'Vulcanization' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Galvanization',
      explanation: 'Galvanization coats iron with zinc; zinc oxidizes first, forming a protective barrier and sacrificially protecting the iron even if scratched.'
    }
  },

  // -------------------------------------------------------------
  // 12. Atomic Structure: Protons, Neutrons, and Electrons
  // -------------------------------------------------------------
  {
    id: 'chem-12',
    grade: 'Grade 9',
    subject: 'Chemistry',
    topic: 'Atomic Structure and Periodic Table',
    subtopic: 'Atomic Number, Mass Number, and Subatomic Particles',
    topicId: 'chemistry_atomic_structure',
    topicTitle: 'Atomic Structure and Periodic Table',
    difficulty: 'Intermediate',
    learningObjective: 'Calculate the number of protons, neutrons, and electrons in an atom from its atomic number (Z) and mass number (A).',
    questionText: 'An atom of aluminum is represented by the isotopic notation ²⁷₁₃Al. How many protons, electrons, and neutrons are present in this neutral aluminum atom?',
    contextOrEquation: 'Atomic number Z = 13 (protons = electrons in neutral atom). Mass number A = 27. Neutrons N = A - Z.',
    options: [
      { id: 'A', text: '13 protons, 13 electrons, and 14 neutrons' },
      { id: 'B', text: '13 protons, 14 electrons, and 27 neutrons' },
      { id: 'C', text: '27 protons, 27 electrons, and 13 neutrons' },
      { id: 'D', text: '14 protons, 13 electrons, and 13 neutrons' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: '13 protons, 13 electrons, and 14 neutrons',
    conceptualExplanation: 'In isotopic notation ᴬ_Z X: the subscript Z (13) is the atomic number, which equals the number of protons. For a neutral atom, number of electrons equals protons (13). The superscript A (27) is the mass number, which is the sum of protons and neutrons (A = P + N). Therefore, neutrons N = A - Z = 27 - 13 = 14 neutrons.',
    workedSolution: 'Step 1: Atomic number Z = 13 -> Protons = 13. Step 2: Neutral atom -> Electrons = 13. Step 3: Mass number A = 27 -> Neutrons = 27 - 13 = 14. Step 4: Protons: 13, Electrons: 13, Neutrons: 14.',
    expectedReasoning: 'Protons and electrons equal the atomic number (13); subtracting atomic number from mass number yields neutrons (14).',
    hint: 'Subtract the bottom number from the top number to find the neutrons: 27 - 13 = ?',
    markingCriteria: 'Must select option A (13 protons, 13 electrons, 14 neutrons).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Confusing Mass Number with Neutron Count',
        explanation: 'Assuming the mass number itself is the number of neutrons.',
        typicalReasoningQuote: 'The top number 27 tells you how many neutrons are in the nucleus.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-12-fu',
      questionText: 'If this neutral aluminum atom loses 3 valence electrons to form an Al³⁺ cation, how many protons and electrons will the ion have?',
      options: [
        { id: 'A', text: '13 protons and 10 electrons' },
        { id: 'B', text: '10 protons and 13 electrons' },
        { id: 'C', text: '10 protons and 10 electrons' },
        { id: 'D', text: '16 protons and 13 electrons' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '13 protons and 10 electrons',
      explanation: 'Ionization involves only electrons: losing 3 electrons leaves 13 - 3 = 10 electrons, while the nucleus still retains all 13 protons.'
    }
  },

  // -------------------------------------------------------------
  // 13. Electron Configuration and Octet Rule
  // -------------------------------------------------------------
  {
    id: 'chem-13',
    grade: 'Grade 9',
    subject: 'Chemistry',
    topic: 'Atomic Structure and Periodic Table',
    subtopic: 'Bohr Electron Shell Configuration (2, 8, 8)',
    topicId: 'chemistry_atomic_structure',
    topicTitle: 'Atomic Structure and Periodic Table',
    difficulty: 'Intermediate',
    learningObjective: 'Write Bohr electron shell configurations for elements up to atomic number 20 and deduce valency.',
    questionText: 'Chlorine has an atomic number of 17. What is its Bohr electron shell configuration across shells K, L, and M, and what is its chemical valency?',
    contextOrEquation: '2n² rule: K max = 2, L max = 8, M fills with remainder up to 8. Valency = 8 - valence electrons (for group 17).',
    options: [
      { id: 'A', text: 'Configuration: 2, 8, 7 | Valency = 1' },
      { id: 'B', text: 'Configuration: 2, 7, 8 | Valency = 7' },
      { id: 'C', text: 'Configuration: 2, 15 | Valency = 2' },
      { id: 'D', text: 'Configuration: 8, 8, 1 | Valency = 1' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Configuration: 2, 8, 7 | Valency = 1',
    conceptualExplanation: 'Electrons fill shells according to increasing energy levels: K shell holds up to 2 electrons, L shell holds up to 8 electrons, and the remaining 7 electrons enter the M shell (2 + 8 + 7 = 17). To achieve a stable noble gas octet (8 valence electrons), chlorine needs to gain 1 electron. Therefore, its combining capacity (valency) is 1.',
    workedSolution: 'Step 1: Total electrons = 17. Step 2: Fill K shell: 2 electrons. Step 3: Fill L shell: 8 electrons. Step 4: Remaining 17 - 10 = 7 enter M shell -> (2, 8, 7). Step 5: Valency = 8 - 7 = 1.',
    expectedReasoning: 'Bohr shell capacity rules yield 2, 8, 7 configuration; needing 1 electron to complete an octet defines a valency of 1.',
    hint: 'The first shell holds 2, the second holds 8. How many are left out of 17?',
    markingCriteria: 'Must select option A (2, 8, 7 and valency 1).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Confusing Valence Electrons with Valency',
        explanation: 'Confusing the number of outer shell electrons (7) with valency (combining capacity, 1).',
        typicalReasoningQuote: 'Because chlorine has 7 electrons in its outer shell, its valency must be 7.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-13-fu',
      questionText: 'What is the electron shell configuration of the noble gas Argon (atomic number 18)?',
      options: [
        { id: 'A', text: '2, 8, 8' },
        { id: 'B', text: '2, 16' },
        { id: 'C', text: '8, 8, 2' },
        { id: 'D', text: '2, 8, 6, 2' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '2, 8, 8',
      explanation: 'Argon has 18 electrons arranged as K=2, L=8, M=8, presenting a complete and chemically unreactive stable octet.'
    }
  },

  // -------------------------------------------------------------
  // 14. Isotopes and Chemical Properties
  // -------------------------------------------------------------
  {
    id: 'chem-14',
    grade: 'Grade 9',
    subject: 'Chemistry',
    topic: 'Atomic Structure and Periodic Table',
    subtopic: 'Isotopes: Identical Chemistry vs Different Mass',
    topicId: 'chemistry_atomic_structure',
    topicTitle: 'Atomic Structure and Periodic Table',
    difficulty: 'Intermediate',
    learningObjective: 'Explain why isotopes of the same element have identical chemical properties despite different atomic masses.',
    questionText: 'Carbon-12 (¹²₆C) and Carbon-14 (¹⁴₆C) are two isotopes of carbon. Why do both isotopes exhibit identical chemical reactions (such as burning in oxygen to form CO₂)?',
    contextOrEquation: 'Isotopes: Same atomic number Z (same protons and electrons), different mass number A (different neutrons). Chemical reactions depend on valence electrons.',
    options: [
      { id: 'A', text: 'They have the identical number of valence electrons and identical electron configuration.' },
      { id: 'B', text: 'They contain the same number of neutrons in their nuclei.' },
      { id: 'C', text: 'Neutrons are the particles that participate in chemical bonding.' },
      { id: 'D', text: 'Both isotopes have identical radioactivity and nuclear decay rates.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'They have the identical number of valence electrons and identical electron configuration.',
    conceptualExplanation: 'Chemical properties and bonding behavior are determined exclusively by the electronic structure—specifically the number and arrangement of valence electrons. Isotopes have identical atomic numbers (Z = 6), meaning they have the exact same number of electrons (6) arranged as (2, 4). The difference in neutron count (6 vs 8) affects nuclear mass and physical density, but does not alter chemical reactivity.',
    workedSolution: 'Step 1: Identify that isotopes have the same number of protons and electrons (Z = 6). Step 2: Chemical reactions involve valence electrons in chemical bonds. Step 3: Identical electron configurations lead to identical chemical reactivity.',
    expectedReasoning: 'Chemical properties depend on valence electrons, which are identical across all isotopes of an element.',
    hint: 'Do chemical reactions involve the nucleus (neutrons) or the outer electrons?',
    markingCriteria: 'Must select option A.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Believing Isotopes Have the Same Neutrons',
        explanation: 'Failing to remember that the defining difference between isotopes IS the neutron count.',
        typicalReasoningQuote: 'All carbon atoms must have the exact same number of neutrons.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-14-fu',
      questionText: 'Which isotope of uranium is fissile and used as fuel in nuclear fission power reactors?',
      options: [
        { id: 'A', text: 'Uranium-235' },
        { id: 'B', text: 'Uranium-238' },
        { id: 'C', text: 'Uranium-234' },
        { id: 'D', text: 'Uranium-239' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Uranium-235',
      explanation: 'Uranium-235 easily undergoes nuclear fission when bombarded by thermal neutrons, sustaining a nuclear chain reaction.'
    }
  },

  // -------------------------------------------------------------
  // 15. Periodic Table Trends: Atomic Radius across Period and Group
  // -------------------------------------------------------------
  {
    id: 'chem-15',
    grade: 'Grade 9',
    subject: 'Chemistry',
    topic: 'Atomic Structure and Periodic Table',
    subtopic: 'Periodic Trends in Atomic Size',
    topicId: 'chemistry_atomic_structure',
    topicTitle: 'Atomic Structure and Periodic Table',
    difficulty: 'Advanced',
    learningObjective: 'Explain why atomic radius decreases from left to right across a period in the Modern Periodic Table.',
    questionText: 'Moving from left to right across Period 3 of the Periodic Table (from Sodium to Chlorine), what happens to the atomic radius of the atoms, and why?',
    contextOrEquation: 'Across a period: Nuclear charge (Z) increases while electrons are added to the same principal shell -> Greater effective nuclear attraction pulls electrons closer.',
    options: [
      { id: 'A', text: 'Atomic radius increases because each element has more electrons.' },
      { id: 'B', text: 'Atomic radius decreases because increasing nuclear charge pulls the valence shell closer to the nucleus.' },
      { id: 'C', text: 'Atomic radius remains constant because the number of shells is identical.' },
      { id: 'D', text: 'Atomic radius doubles because of increased electron-electron repulsion.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Atomic radius decreases because increasing nuclear charge pulls the valence shell closer to the nucleus.',
    conceptualExplanation: 'Across a period, electrons are added to the same principal energy shell (n = 3 for Period 3), meaning shielding remains relatively constant. Concurrently, the nuclear charge increases by one proton with each successive element (from +11 for Na to +17 for Cl). The stronger electrostatic pull of the positive nucleus draws the electron cloud inward, causing the atomic radius to steadily decrease from left to right.',
    workedSolution: 'Step 1: Check shell level: all Period 3 elements use shells K, L, M (no new shells added). Step 2: Protons increase from 11 (Na) to 17 (Cl). Step 3: Greater positive charge pulls electrons inward. Step 4: Atomic radius decreases across the period.',
    expectedReasoning: 'Increasing nuclear charge without adding new electron shells increases effective nuclear pull, contracting the atomic radius.',
    hint: 'More positive protons in the nucleus pull the outer electrons closer inward.',
    markingCriteria: 'Must select option B. Explains contraction of electron cloud due to increasing nuclear charge.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'More Particles Means Larger Size Misconception',
        explanation: 'Intuitively assuming that having more protons and electrons must physically make the atom bigger.',
        typicalReasoningQuote: 'Chlorine has 17 electrons while sodium only has 11, so chlorine must be much bigger.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-15-fu',
      questionText: 'What happens to atomic radius as you move DOWN a vertical group (such as Group 1 from Lithium to Cesium)?',
      options: [
        { id: 'A', text: 'Atomic radius increases because a new electron shell is added at each period.' },
        { id: 'B', text: 'Atomic radius decreases because gravity is stronger.' },
        { id: 'C', text: 'Atomic radius stays strictly identical.' },
        { id: 'D', text: 'Atomic radius decreases due to nuclear condensation.' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Atomic radius increases because a new electron shell is added at each period.',
      explanation: 'Descending a group adds an entirely new electron shell at each step, significantly increasing the distance between nucleus and outer electrons.'
    }
  },

  // -------------------------------------------------------------
  // 16. Chemical Bonding: Ionic vs Covalent
  // -------------------------------------------------------------
  {
    id: 'chem-16',
    grade: 'Grade 9',
    subject: 'Chemistry',
    topic: 'Chemical Bonding and Compounds',
    subtopic: 'Ionic vs Covalent Bonding Mechanism',
    topicId: 'chemistry_bonding',
    topicTitle: 'Chemical Bonding and Molecular Structure',
    difficulty: 'Intermediate',
    learningObjective: 'Differentiate ionic bonding (electron transfer) from covalent bonding (electron sharing).',
    questionText: 'When sodium reacts with chlorine, sodium chloride (NaCl) is formed. When carbon reacts with oxygen, carbon dioxide (CO₂) is formed. Which statement correctly identifies the bonding type in each compound?',
    contextOrEquation: 'Metal + Non-metal -> Complete electron transfer -> Ionic bond (NaCl). Non-metal + Non-metal -> Shared electron pairs -> Covalent bond (CO₂).',
    options: [
      { id: 'A', text: 'NaCl is ionic (electron transfer); CO₂ is covalent (electron sharing).' },
      { id: 'B', text: 'NaCl is covalent (electron sharing); CO₂ is ionic (electron transfer).' },
      { id: 'C', text: 'Both compounds are metallic with delocalized free electrons.' },
      { id: 'D', text: 'Both compounds are purely ionic.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'NaCl is ionic (electron transfer); CO₂ is covalent (electron sharing).',
    conceptualExplanation: 'In NaCl, highly electropositive metal sodium transfers one electron to electronegative non-metal chlorine, forming Na⁺ and Cl⁻ ions held together by strong electrostatic attraction (ionic bond). In CO₂, non-metal carbon and non-metal oxygen share pairs of electrons to achieve stable octets, forming polar covalent double bonds (O=C=O).',
    workedSolution: 'Step 1: Na is metal, Cl is non-metal -> electron transfer -> Ionic bond. Step 2: C and O are both non-metals -> electron sharing -> Covalent bond. Step 3: Match to option A.',
    expectedReasoning: 'Transfer of electrons between metal and non-metal forms an ionic lattice; sharing of electron pairs between non-metals forms covalent molecules.',
    hint: 'Metal + Non-metal forms ionic bonds; Non-metal + Non-metal shares electrons in covalent bonds.',
    markingCriteria: 'Must select option A.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Inverted Bonding Mechanism',
        explanation: 'Confusing electron transfer with electron sharing across compound classes.',
        typicalReasoningQuote: 'Salt shares electrons because both atoms need each other, while gases transfer electrons.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-16-fu',
      questionText: 'Why does solid sodium chloride NOT conduct electricity, whereas molten or aqueous sodium chloride conducts electricity very well?',
      options: [
        { id: 'A', text: 'In solid state, ions are locked in fixed positions in the lattice, but in molten/aqueous states, free ions are mobile to carry charge.' },
        { id: 'B', text: 'Water turns the salt into pure metallic copper.' },
        { id: 'C', text: 'Solid salt has no electrons whatsoever.' },
        { id: 'D', text: 'Water creates radioactive particles that carry electric current.' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'In solid state, ions are locked in fixed positions in the lattice, but in molten/aqueous states, free ions are mobile to carry charge.',
      explanation: 'Electrical conduction in electrolytes requires mobile charge carriers. In the solid lattice, ions are fixed; when melted or dissolved, ions move freely.'
    }
  },

  // -------------------------------------------------------------
  // 17. Physical vs Chemical Changes
  // -------------------------------------------------------------
  {
    id: 'chem-17',
    grade: 'Grade 8',
    subject: 'Chemistry',
    topic: 'Matter and Its Changes',
    subtopic: 'Distinguishing Physical and Chemical Changes',
    topicId: 'chemistry_matter',
    topicTitle: 'Matter, Changes, and Separation',
    difficulty: 'Beginner',
    learningObjective: 'Distinguish between physical changes (reversible, no new substance) and chemical changes (irreversible, new substance formed).',
    questionText: 'Consider four events: (1) Melting an ice cube, (2) Burning a wooden matchstick, (3) Dissolving sugar in hot tea, and (4) Iron rusting on an outdoor gate. Which of these are CHEMICAL changes?',
    contextOrEquation: 'Physical change: Molecular identity unchanged (Phase change, dissolving). Chemical change: Chemical bonds broken/formed, new substances created (Combustion, oxidation).',
    options: [
      { id: 'A', text: 'Events (1) and (3) only' },
      { id: 'B', text: 'Events (2) and (4) only' },
      { id: 'C', text: 'Events (1), (2), and (3)' },
      { id: 'D', text: 'All four events are chemical changes.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Events (2) and (4) only',
    conceptualExplanation: 'In melting ice (1) and dissolving sugar (3), no new chemical substances are formed; water remains H₂O and sugar remains C₁₂H₂₂O₁₁ (physical changes). In burning wood (2), combustion irreversibly turns cellulose into CO₂, H₂O, and carbon ash. In rusting (4), iron chemically combines with oxygen and water to form hydrated iron(III) oxide (chemical changes). Therefore, only (2) and (4) are chemical changes.',
    workedSolution: 'Step 1: Check (1) Melting ice: phase change = physical. Step 2: Check (2) Burning wood: combustion = chemical. Step 3: Check (3) Dissolving sugar: reversible physical dissolution. Step 4: Check (4) Rusting: chemical oxidation. Step 5: (2) and (4) are chemical.',
    expectedReasoning: 'Chemical changes produce fundamentally new substances through bond rearrangement, as in combustion (2) and oxidation (4).',
    hint: 'A chemical change creates completely new chemical substances that cannot be undone simply by freezing or evaporating.',
    markingCriteria: 'Must select option B (Events 2 and 4 only).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Confusing Dissolving and Phase Changes with Chemical Reactions',
        explanation: 'Thinking that disappearing sugar or melting ice represents chemical bond destruction.',
        typicalReasoningQuote: 'Sugar disappears in water so its molecules are destroyed, making it chemical.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-17-fu',
      questionText: 'When a wax candle burns, what happens in terms of physical and chemical changes?',
      options: [
        { id: 'A', text: 'Melting of wax is a physical change, while combustion of wax vapor into CO₂ and H₂O is a chemical change.' },
        { id: 'B', text: 'Only physical changes occur because wax can be cooled.' },
        { id: 'C', text: 'Only chemical changes occur because heat is produced.' },
        { id: 'D', text: 'Nuclear fusion takes place in the flame.' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Melting of wax is a physical change, while combustion of wax vapor into CO₂ and H₂O is a chemical change.',
      explanation: 'Wax melting is a physical change of state, while the flame burns vaporized hydrocarbons into CO₂ and water vapor, a chemical change.'
    }
  },

  // -------------------------------------------------------------
  // 18. Plaster of Paris and Gypsum
  // -------------------------------------------------------------
  {
    id: 'chem-18',
    grade: 'Grade 9',
    subject: 'Chemistry',
    topic: 'Acids, Bases, and Salts',
    subtopic: 'Preparation and Setting of Plaster of Paris',
    topicId: 'chemistry_acids_bases',
    topicTitle: 'Acids, Bases, and Salts',
    difficulty: 'Intermediate',
    learningObjective: 'State the chemical formula of Plaster of Paris and explain the hydration setting process.',
    questionText: 'Doctors use Plaster of Paris (POP) casts to immobilize fractured bones. When POP powder is mixed with water, it sets into a hard, rigid mass. What is the chemical formula of Plaster of Paris and what hard substance does it form upon setting?',
    contextOrEquation: 'CaSO₄·½H₂O (POP) + 1½H₂O → CaSO₄·2H₂O (Gypsum hard solid)',
    options: [
      { id: 'A', text: 'POP is CaSO₄·½H₂O (calcium sulfate hemihydrate); upon adding water it sets into hard Gypsum (CaSO₄·2H₂O).' },
      { id: 'B', text: 'POP is CaCO₃ (chalk); upon adding water it turns into quicklime.' },
      { id: 'C', text: 'POP is CuSO₄·5H₂O (blue vitriol); it turns into white copper sulfate.' },
      { id: 'D', text: 'POP is pure metallic calcium powder that freezes with water.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'POP is CaSO₄·½H₂O (calcium sulfate hemihydrate); upon adding water it sets into hard Gypsum (CaSO₄·2H₂O).',
    conceptualExplanation: 'Plaster of Paris is calcium sulfate hemihydrate, CaSO₄·½H₂O (two formula units share one water molecule: (CaSO₄)₂·H₂O). When mixed with water, it rehydrates via an exothermic reaction into crystalline calcium sulfate dihydrate (gypsum, CaSO₄·2H₂O), which interlocks into a hard, rigid solid within 10 to 15 minutes.',
    workedSolution: 'Step 1: Chemical formula for POP is CaSO₄·½H₂O. Step 2: Reaction with water: CaSO₄·½H₂O + 1½ H₂O → CaSO₄·2H₂O. Step 3: The hard solid product is gypsum. Match to option A.',
    expectedReasoning: 'Hydration of calcium sulfate hemihydrate (POP) crystallizes into interlocking calcium sulfate dihydrate (gypsum).',
    hint: 'Look for calcium sulfate hemihydrate (half a water molecule) turning into gypsum (two water molecules).',
    markingCriteria: 'Must select option A.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Confusing Plaster of Paris with Chalk/Limestone',
        explanation: 'Believing plaster is made from calcium carbonate rather than calcium sulfate.',
        typicalReasoningQuote: 'Plaster is white like chalk so it is calcium carbonate.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-18-fu',
      questionText: 'At what temperature must gypsum be heated to manufacture Plaster of Paris without losing all water of crystallization?',
      options: [
        { id: 'A', text: '373 K (100 °C)' },
        { id: 'B', text: '1000 K' },
        { id: 'C', text: '273 K (0 °C)' },
        { id: 'D', text: '5000 K' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '373 K (100 °C)',
      explanation: 'Carefully heating gypsum at 373 K (100 °C) drives off 1.5 water molecules to form hemihydrate; heating above 393 K produces dead-burnt plaster (anhydrous CaSO₄).'
    }
  },

  // -------------------------------------------------------------
  // 19. Chemical Reactions: Exothermic vs Endothermic
  // -------------------------------------------------------------
  {
    id: 'chem-19',
    grade: 'Grade 8',
    subject: 'Chemistry',
    topic: 'Chemical Reactions and Equations',
    subtopic: 'Exothermic vs Endothermic Reactions',
    topicId: 'chemistry_reactions',
    topicTitle: 'Chemical Reactions and Equations',
    difficulty: 'Beginner',
    learningObjective: 'Classify reactions as exothermic or endothermic based on thermal energy release or absorption.',
    questionText: 'When a lump of quicklime (calcium oxide, CaO) is added to a beaker of cold water, the mixture boils violently and the beaker becomes scalding hot to the touch. What type of reaction is this, and what is the chemical equation?',
    contextOrEquation: 'CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat energy (ΔH < 0)',
    options: [
      { id: 'A', text: 'Endothermic reaction; it absorbs thermal energy from the surroundings.' },
      { id: 'B', text: 'Exothermic reaction; it releases a large amount of heat energy.' },
      { id: 'C', text: 'Nuclear fusion reaction; it destroys atomic nuclei.' },
      { id: 'D', text: 'Sublimation reaction; the liquid turns directly to solid.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Exothermic reaction; it releases a large amount of heat energy.',
    conceptualExplanation: 'An exothermic reaction is a chemical process that releases energy in the form of heat to its surroundings (ΔH is negative). The slaking of lime (CaO + H₂O → Ca(OH)₂ + Heat) is vigorously exothermic, forming calcium hydroxide (slaked lime) and releasing sufficient thermal energy to heat the water to boiling.',
    workedSolution: 'Step 1: Scalding hot beaker means thermal energy was released into the surroundings. Step 2: Reactions that release heat are exothermic. Step 3: Match to option B.',
    expectedReasoning: 'Heat release causing elevated temperature in the surroundings identifies the process as an exothermic reaction.',
    hint: 'Exo = "Exit" (heat exits/is released); Endo = "Enter" (heat enters/is absorbed).',
    markingCriteria: 'Must select option B.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Confusing Exothermic and Endothermic Direction',
        explanation: 'Thinking that because water got hot, it absorbed heat and must be termed endothermic.',
        typicalReasoningQuote: 'The water got hot so it took in heat, which means endothermic.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-19-fu',
      questionText: 'Which of the following biological processes is an exothermic reaction that continuously supplies energy to our body cells?',
      options: [
        { id: 'A', text: 'Cellular respiration' },
        { id: 'B', text: 'Photosynthesis in green plants' },
        { id: 'C', text: 'Evaporation of sweat' },
        { id: 'D', text: 'Melting of ice' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Cellular respiration',
      explanation: 'Cellular respiration breaks down glucose with oxygen to release heat and ATP energy: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy (exothermic).'
    }
  },

  // -------------------------------------------------------------
  // 20. Gas Evolution Tests: Hydrogen, Oxygen, and Carbon Dioxide
  // -------------------------------------------------------------
  {
    id: 'chem-20',
    grade: 'Grade 8',
    subject: 'Chemistry',
    topic: 'Chemical Reactions and Equations',
    subtopic: 'Confirmatory Gas Identification Tests',
    topicId: 'chemistry_reactions',
    topicTitle: 'Chemical Reactions and Equations',
    difficulty: 'Intermediate',
    learningObjective: 'Identify the characteristic diagnostic test for Hydrogen (pop sound), Oxygen (relights splint), and Carbon Dioxide (turns limewater milky).',
    questionText: 'A piece of zinc granule is dropped into dilute sulfuric acid. Bubbles of a colorless, odorless gas evolve. When a burning wooden splint is brought near the mouth of the test tube, the gas burns with a distinctive "pop" sound. What gas is this?',
    contextOrEquation: 'Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)↑; 2H₂ + O₂ → 2H₂O + "pop" sound explosion',
    options: [
      { id: 'A', text: 'Oxygen gas (O₂)' },
      { id: 'B', text: 'Hydrogen gas (H₂)' },
      { id: 'C', text: 'Carbon dioxide gas (CO₂)' },
      { id: 'D', text: 'Chlorine gas (Cl₂)' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Hydrogen gas (H₂)',
    conceptualExplanation: 'When an active metal reacts with a dilute acid, it displaces hydrogen to liberate hydrogen gas: Metal + Acid → Metal Salt + H₂(g). The diagnostic confirmatory test for hydrogen gas is bringing a burning flame near the gas: it burns rapidly with oxygen in a miniature explosion, producing a characteristic sharp "pop" sound.',
    workedSolution: 'Step 1: Metal + Acid produces hydrogen gas (Zn + H₂SO₄ → ZnSO₄ + H₂). Step 2: The classic "pop" sound test with a flame is the diagnostic test for hydrogen gas. Step 3: Conclude option B is hydrogen.',
    expectedReasoning: 'Reaction of zinc with sulfuric acid evolves hydrogen gas, diagnosed by its combustion with a characteristic "pop" sound.',
    hint: 'Which flammable gas makes a distinctive "pop" sound when ignited?',
    markingCriteria: 'Must select option B (Hydrogen gas).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Confusing Hydrogen Test with Oxygen Test',
        explanation: 'Confusing the "pop" sound of burning hydrogen with the relighting of a glowing splint in oxygen.',
        typicalReasoningQuote: 'Oxygen is needed for fire, so fire popping means it is pure oxygen.'
      },
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Confusing Acid Bubbles with Carbon Dioxide',
        explanation: 'Assuming any gas bubbles produced by acids are carbon dioxide, forgetting that CO₂ comes only from carbonates/bicarbonates, not pure metals.',
        typicalReasoningQuote: 'Acids always bubble out carbon dioxide gas.'
      }
    ],
    fallbackFollowUp: {
      id: 'chem-20-fu',
      questionText: 'What test confirms the presence of carbon dioxide gas (CO₂)?',
      options: [
        { id: 'A', text: 'It burns with a pop sound.' },
        { id: 'B', text: 'It relights a glowing splint.' },
        { id: 'C', text: 'It turns clear limewater milky due to the formation of calcium carbonate precipitate.' },
        { id: 'D', text: 'It has a pungent rotten egg odor.' },
      ],
      correctAnswerId: 'C',
      correctAnswerText: 'It turns clear limewater milky due to the formation of calcium carbonate precipitate.',
      explanation: 'Passing CO₂ gas through limewater forms an insoluble white precipitate of calcium carbonate (Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O), turning the solution milky.'
    }
  }
];
