import type { STEMQuestion } from '../../types/learning.ts';

export const BIOLOGY_QUESTIONS: STEMQuestion[] = [
  // -------------------------------------------------------------
  // 1. Asexual Reproduction - Binary Fission
  // -------------------------------------------------------------
  {
    id: 'bio-01',
    grade: 'Grade 8',
    subject: 'Biology',
    topic: 'Reproduction',
    subtopic: 'Asexual Reproduction in Single-Celled Organisms',
    topicId: 'biology_reproduction',
    topicTitle: 'Reproduction in Living Organisms',
    difficulty: 'Beginner',
    learningObjective: 'Describe binary fission in Amoeba and distinguish it from sexual reproduction.',
    questionText: 'An Amoeba reproduces through binary fission. Which of the following statements correctly describes the genetic makeup of the resulting daughter cells compared to the parent cell?',
    contextOrEquation: 'Amoeba -> Karyokinesis (nuclear division) -> Cytokinesis (cytoplasmic division) -> 2 Daughter cells',
    options: [
      { id: 'A', text: 'The daughter cells are genetically identical to each other and to the parent cell.' },
      { id: 'B', text: 'Each daughter cell receives only half the chromosomes of the parent cell.' },
      { id: 'C', text: 'The daughter cells inherit a blend of genes from two distinct parent organisms.' },
      { id: 'D', text: 'One daughter cell receives all the genetic material while the other contains only cytoplasm.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'The daughter cells are genetically identical to each other and to the parent cell.',
    conceptualExplanation: 'Binary fission is an asexual reproductive process involving mitotic division. The parent single cell replicates its DNA and divides equally into two genetically identical daughter cells (clones). No gametes, meiosis, or fertilization are involved.',
    workedSolution: 'Step 1: Identify the mode of reproduction (binary fission = asexual). Step 2: In asexual reproduction, genetic material is duplicated via mitosis without crossing over from another parent. Step 3: Conclude that both offspring possess identical genomes to the parent.',
    expectedReasoning: 'Binary fission involves a single parent duplicating its nuclear material and dividing into two identical cells, meaning genetic variation between parent and offspring is zero under normal conditions.',
    hint: 'Think about whether gametes or two parents are involved in binary fission.',
    markingCriteria: 'Must select option A. Identifies that asexual binary fission produces identical clones without halving chromosome number.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Confusing Mitotic Division with Meiotic Halving',
        explanation: 'Believing that any cell division halves chromosomes, confusing asexual reproduction with gamete formation.',
        typicalReasoningQuote: 'Because the parent cell splits into two, each half gets only half the chromosomes.'
      },
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Assuming All Reproduction Involves Two Parents',
        explanation: 'Failing to distinguish sexual reproduction from asexual reproduction.',
        typicalReasoningQuote: 'All organisms need male and female parents to reproduce.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-01-fu',
      questionText: 'If a parent bacterium divides by binary fission every 20 minutes, how many genetically identical bacteria will exist from one parent after 60 minutes in ideal conditions?',
      options: [
        { id: 'A', text: '3 bacteria' },
        { id: 'B', text: '6 bacteria' },
        { id: 'C', text: '8 bacteria' },
        { id: 'D', text: '16 bacteria' },
      ],
      correctAnswerId: 'C',
      correctAnswerText: '8 bacteria',
      explanation: 'After 20 min: 2 cells. After 40 min: 4 cells. After 60 min (3 generations): 2^3 = 8 cells, all genetically identical.'
    }
  },

  // -------------------------------------------------------------
  // 2. Budding in Hydra and Yeast
  // -------------------------------------------------------------
  {
    id: 'bio-02',
    grade: 'Grade 8',
    subject: 'Biology',
    topic: 'Reproduction',
    subtopic: 'Budding in Yeast and Hydra',
    topicId: 'biology_reproduction',
    topicTitle: 'Reproduction in Living Organisms',
    difficulty: 'Beginner',
    learningObjective: 'Explain how budding occurs in Hydra and yeast as an asexual mechanism.',
    questionText: 'Under microscopic observation, a small outgrowth is seen developing on the side of a mature Hydra. Eventually, it forms tentacles and detaches as an independent organism. What reproductive process is this?',
    contextOrEquation: 'Parent Hydra -> Localized cell proliferation (bud) -> Development of mouth/tentacles -> Detachment',
    options: [
      { id: 'A', text: 'Spore formation' },
      { id: 'B', text: 'Budding' },
      { id: 'C', text: 'Fragmentation' },
      { id: 'D', text: 'Sexual conjugation' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Budding',
    conceptualExplanation: 'Budding is a form of asexual reproduction where a new individual develops from an outgrowth or bud due to repeated cell division at one specific site. Once mature, the bud detaches to live independently.',
    workedSolution: 'Step 1: Note that the outgrowth develops on a single parent body. Step 2: The outgrowth grows, matures, and pinches off. Step 3: By definition, an outgrowth forming an offspring is budding.',
    expectedReasoning: 'Outgrowth from repeated mitotic division at one localized body point characterizes budding in Hydra and yeast.',
    hint: 'Notice that an outgrowth (a "bud") forms on the parent body before detaching.',
    markingCriteria: 'Must select option B (Budding). Distinguishes budding from breaking into random pieces (fragmentation) or dispersing spores.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Confusing Budding with Fragmentation',
        explanation: 'Thinking that any separation of an organism is fragmentation, missing that budding starts as a specific specialized localized outgrowth.',
        typicalReasoningQuote: 'Because a piece broke off from the adult, it must be fragmentation.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-02-fu',
      questionText: 'How does budding in single-celled yeast differ visually from binary fission in Amoeba?',
      options: [
        { id: 'A', text: 'In yeast, the parent and daughter cells are always equal in size from the start.' },
        { id: 'B', text: 'In yeast, a small protuberance forms on the parent cell, creating unequal cytoplasmic division initially.' },
        { id: 'C', text: 'Yeast produces seeds whereas Amoeba produces spores.' },
        { id: 'D', text: 'Yeast reproduces sexually while Amoeba reproduces asexually.' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'In yeast, a small protuberance forms on the parent cell, creating unequal cytoplasmic division initially.',
      explanation: 'Binary fission divides the cytoplasm into two roughly equal halves, whereas budding produces a smaller daughter bud attached to the larger parent cell initially.'
    }
  },

  // -------------------------------------------------------------
  // 3. Fragmentation vs Regeneration
  // -------------------------------------------------------------
  {
    id: 'bio-03',
    grade: 'Grade 9',
    subject: 'Biology',
    topic: 'Reproduction',
    subtopic: 'Fragmentation in Spirogyra vs Planaria',
    topicId: 'biology_reproduction',
    topicTitle: 'Reproduction in Living Organisms',
    difficulty: 'Intermediate',
    learningObjective: 'Differentiate true reproductive fragmentation from healing/regeneration.',
    questionText: 'When a filament of Spirogyra matures, it breaks naturally into smaller pieces, and each piece grows into a complete new filament. Why is fragmentation an effective reproductive method for Spirogyra but NOT for complex animals like humans?',
    contextOrEquation: 'Spirogyra: Simple multicellular filamentous green alga with unspecialized, identical repeating cells',
    options: [
      { id: 'A', text: 'Spirogyra has a simple cellular organization where each cell can divide and form the whole body.' },
      { id: 'B', text: 'Spirogyra cells have no nucleus or chromosomes, making division instant.' },
      { id: 'C', text: 'Humans reproduce only by spores, which prevents tissue regeneration.' },
      { id: 'D', text: 'Complex animals lack mitosis in all body cells.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Spirogyra has a simple cellular organization where each cell can divide and form the whole body.',
    conceptualExplanation: 'In simple multicellular organisms like Spirogyra, the body structure is relatively uniform and cells are not organized into complex organ systems. Each fragment possesses cells capable of dividing to reconstitute the entire filament. Complex organisms have specialized tissues and organs that cannot be regenerated from an arbitrary slice.',
    workedSolution: 'Step 1: Examine the tissue complexity of Spirogyra (simple linear chain of nearly identical vegetative cells). Step 2: Compare with organ-level specialization in higher organisms. Step 3: Conclude that low cellular differentiation allows each fragment to survive and proliferate.',
    expectedReasoning: 'Simple cellular organization allows fragments with non-specialized cells to grow into complete individuals, whereas organ-system level organization requires specialized embryonic development.',
    hint: 'Consider the level of tissue differentiation: does an alga have complex internal organs?',
    markingCriteria: 'Selects A. Highlights simple cellular organization as prerequisite for reproductive fragmentation.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Believing Algae are Non-Cellular or Lack Nuclei',
        explanation: 'Mistaking eukaryotic algae for acellular or non-nucleated matter.',
        typicalReasoningQuote: 'Spirogyra does not have true cells or nuclei so it can just split anywhere.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-03-fu',
      questionText: 'If a lizard sheds its tail to escape a predator, why is this regeneration considered healing/defense rather than reproduction?',
      options: [
        { id: 'A', text: 'Because a new complete lizard does not grow from the severed tail.' },
        { id: 'B', text: 'Because the tail does not contain any living cells.' },
        { id: 'C', text: 'Because reptiles are incapable of cell division.' },
        { id: 'D', text: 'Because the process requires gametes.' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Because a new complete lizard does not grow from the severed tail.',
      explanation: 'Reproduction must generate a new individual organism. Replacing a lost body part restores the existing organism but does not yield a second lizard from the tail.'
    }
  },

  // -------------------------------------------------------------
  // 4. Plant Reproductive Structures (Flower Anatomy)
  // -------------------------------------------------------------
  {
    id: 'bio-04',
    grade: 'Grade 8',
    subject: 'Biology',
    topic: 'Reproduction',
    subtopic: 'Angiosperm Flower Anatomy',
    topicId: 'biology_reproduction',
    topicTitle: 'Reproduction in Living Organisms',
    difficulty: 'Beginner',
    learningObjective: 'Identify the male and female reproductive structures of a flowering plant.',
    questionText: 'A student dissects a hibiscus flower. Which pair correctly matches the male reproductive organ and the female reproductive organ of the flower?',
    contextOrEquation: 'Stamen (Anther + Filament) vs Pistil/Carpel (Stigma + Style + Ovary)',
    options: [
      { id: 'A', text: 'Male: Sepal | Female: Petal' },
      { id: 'B', text: 'Male: Stamen (Anther and Filament) | Female: Pistil/Carpel (Stigma, Style, and Ovary)' },
      { id: 'C', text: 'Male: Stigma and Style | Female: Anther and Filament' },
      { id: 'D', text: 'Male: Ovule | Female: Pollen grain' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Male: Stamen (Anther and Filament) | Female: Pistil/Carpel (Stigma, Style, and Ovary)',
    conceptualExplanation: 'The male reproductive unit is the stamen, consisting of the pollen-bearing anther supported by a filament. The female reproductive unit is the pistil (or carpel), consisting of the receptive stigma, the slender style, and the basal ovary containing ovules.',
    workedSolution: 'Step 1: Stamen produces pollen (male gametes). Step 2: Carpel/pistil contains the ovary with female ovules. Step 3: Match components to their correct anatomical names.',
    expectedReasoning: 'Stamen = anther + filament (male). Carpel/Pistil = stigma + style + ovary (female).',
    hint: 'Remember: "Stamen" has "men" (male); "Carpel" or "Pistil" houses the ovary with eggs.',
    markingCriteria: 'Must select option B. Accurately attributes stamen to male and pistil/carpel to female.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Inverted Flower Sex Organs',
        explanation: 'Swapping anther/filament with stigma/style.',
        typicalReasoningQuote: 'Pollen lands on anthers so anthers must be female.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-04-fu',
      questionText: 'Where are the female gametes (egg cells) produced inside a flowering plant?',
      options: [
        { id: 'A', text: 'Inside the pollen sacs of the anther' },
        { id: 'B', text: 'Inside the ovules located within the ovary' },
        { id: 'C', text: 'On the brightly colored petals' },
        { id: 'D', text: 'Inside the vascular bundles of the stem' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'Inside the ovules located within the ovary',
      explanation: 'The ovules within the ovary develop the female gametophyte containing the egg cell.'
    }
  },

  // -------------------------------------------------------------
  // 5. Pollination Mechanisms: Self vs Cross
  // -------------------------------------------------------------
  {
    id: 'bio-05',
    grade: 'Grade 8',
    subject: 'Biology',
    topic: 'Reproduction',
    subtopic: 'Pollination and Genetic Diversity',
    topicId: 'biology_reproduction',
    topicTitle: 'Reproduction in Living Organisms',
    difficulty: 'Intermediate',
    learningObjective: 'Distinguish between self-pollination and cross-pollination and compare their evolutionary advantages.',
    questionText: 'A crop breeder wants to cultivate plants with high disease resistance and adaptability to changing weather. Why is cross-pollination generally more advantageous for this goal than continuous self-pollination?',
    contextOrEquation: 'Self-pollination: Pollen transfers within same flower/plant -> High homozygosity. Cross-pollination: Pollen transfers between distinct plants -> Genetic recombination.',
    options: [
      { id: 'A', text: 'Cross-pollination introduces new genetic combinations, enhancing variation and adaptability.' },
      { id: 'B', text: 'Cross-pollination eliminates the need for fertilization.' },
      { id: 'C', text: 'Self-pollination always produces sterile seeds.' },
      { id: 'D', text: 'Cross-pollination guarantees that all offspring are genetically identical to the pollen donor.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Cross-pollination introduces new genetic combinations, enhancing variation and adaptability.',
    conceptualExplanation: 'Cross-pollination combines alleles from two genetically distinct parent plants. This genetic recombination increases diversity in the offspring population, providing raw material for natural selection and disease resistance.',
    workedSolution: 'Step 1: Identify that environmental adaptability requires genetic diversity. Step 2: Cross-pollination brings together different gene variants. Step 3: Self-pollination preserves existing traits but reduces variation over generations.',
    expectedReasoning: 'Gene flow and allele mixing between different parent plants yields diverse genotypes, aiding population resilience against diseases.',
    hint: 'Think about genetic variety: which mechanism mixes traits from two different parent plants?',
    markingCriteria: 'Must select option A.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Belief that Self-Pollination Fails to Produce Viable Seeds',
        explanation: 'Assuming self-pollination is defective rather than a viable self-sufficient strategy.',
        typicalReasoningQuote: 'Plants cannot fertilize their own eggs, so self-pollinated seeds never grow.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-05-fu',
      questionText: 'Which floral feature is most typically associated with wind-pollinated flowers rather than insect-pollinated flowers?',
      options: [
        { id: 'A', text: 'Large, brightly colored petals and sweet nectar' },
        { id: 'B', text: 'Feathery, exposed stigmas and light, non-sticky pollen in large quantities' },
        { id: 'C', text: 'Strong aromatic fragrances released at night' },
        { id: 'D', text: 'Sticky pollen grains with barbed hooks' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'Feathery, exposed stigmas and light, non-sticky pollen in large quantities',
      explanation: 'Wind pollination relies on air currents, requiring light buoyant pollen and feathery stigmas to maximize airborne pollen capture.'
    }
  },

  // -------------------------------------------------------------
  // 6. Fertilization and Fruit/Seed Formation
  // -------------------------------------------------------------
  {
    id: 'bio-06',
    grade: 'Grade 8',
    subject: 'Biology',
    topic: 'Reproduction',
    subtopic: 'Post-Fertilization Changes in Plants',
    topicId: 'biology_reproduction',
    topicTitle: 'Reproduction in Living Organisms',
    difficulty: 'Intermediate',
    learningObjective: 'Track post-fertilization transformations: ovary into fruit, ovule into seed.',
    questionText: 'After successful fertilization in an apple blossom, what do the ovary and the fertilized ovules transform into, respectively?',
    contextOrEquation: 'Post-fertilization: Ovary -> Fruit wall/flesh | Fertilized Ovule -> Seed (with embryo)',
    options: [
      { id: 'A', text: 'Ovary becomes the seed; ovules become the fruit.' },
      { id: 'B', text: 'Ovary becomes the fruit; ovules become the seeds.' },
      { id: 'C', text: 'Ovary withers away; ovules become petals.' },
      { id: 'D', text: 'Ovary becomes pollen; ovules become the nectar.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Ovary becomes the fruit; ovules become the seeds.',
    conceptualExplanation: 'Following syngamy (fertilization), the zygote within the ovule develops into an embryo, and the ovule ripens into a protective seed. The surrounding ovary wall swells and ripens into the fruit, which shields the seeds and aids dispersal.',
    workedSolution: 'Step 1: Locate the ovules inside the ovary. Step 2: After sperm fertilizes egg, ovule matures into a seed. Step 3: The surrounding ovary ripens into the fruit.',
    expectedReasoning: 'Ovary ripens into fruit; ovules mature into seeds.',
    hint: 'Think about where seeds are found: inside the fruit, just as ovules were inside the ovary.',
    markingCriteria: 'Must select option B. Accurately pairs ovary -> fruit and ovule -> seed.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Inverting Fruit and Seed Precursors',
        explanation: 'Confusing the outer container (ovary) with inner contents (ovules).',
        typicalReasoningQuote: 'The small ovule grows into the big fruit on the outside.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-06-fu',
      questionText: 'What is the primary biological function of the fruit from the perspective of plant survival?',
      options: [
        { id: 'A', text: 'To provide food exclusively for humans' },
        { id: 'B', text: 'To protect the developing seeds and assist in their dispersal' },
        { id: 'C', text: 'To attract pollinators like bees for pollination' },
        { id: 'D', text: 'To absorb carbon dioxide from the soil' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'To protect the developing seeds and assist in their dispersal',
      explanation: 'Fruits protect seeds from physical and climatic damage and facilitate seed dispersal by animals, wind, or water.'
    }
  },

  // -------------------------------------------------------------
  // 7. Human Male Reproductive System Anatomy
  // -------------------------------------------------------------
  {
    id: 'bio-07',
    grade: 'Grade 8',
    subject: 'Biology',
    topic: 'Reproduction',
    subtopic: 'Human Male Reproductive Anatomy',
    topicId: 'biology_reproduction',
    topicTitle: 'Reproduction in Living Organisms',
    difficulty: 'Intermediate',
    learningObjective: 'Explain the physiological role of the scrotum in human spermatogenesis.',
    questionText: 'In human males, the testes are located outside the abdominal cavity in a pouch called the scrotum. Why is this external position physiologically essential for healthy reproduction?',
    contextOrEquation: 'Optimal spermatogenesis temperature: ~2 to 2.5 °C lower than core body temperature (37 °C)',
    options: [
      { id: 'A', text: 'It maintains a temperature 2–2.5 °C lower than core body temperature, required for sperm production.' },
      { id: 'B', text: 'It allows direct exposure of sperm to atmospheric oxygen for cellular respiration.' },
      { id: 'C', text: 'It prevents the male hormone testosterone from entering the blood circulation.' },
      { id: 'D', text: 'It keeps the testes at a higher temperature than the rest of the body to speed up meiosis.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'It maintains a temperature 2–2.5 °C lower than core body temperature, required for sperm production.',
    conceptualExplanation: 'Human spermatogenesis (the formation and maturation of viable sperm) is temperature-sensitive. The normal internal body temperature of 37 °C impairs sperm development. The scrotum holds the testes outside the body cavity, maintaining an optimal cooler temperature of around 34.5–35 °C.',
    workedSolution: 'Step 1: Identify that sperm cells are heat-sensitive during meiosis. Step 2: The external scrotal pouch allows heat dissipation. Step 3: Temperature is kept ~2–2.5 °C below normal core body temperature.',
    expectedReasoning: 'Lower scrotal temperature is required for proper spermatogenesis enzyme activity and viable sperm cell maturation.',
    hint: 'Think about temperature: are sperm more viable in warmer or slightly cooler conditions than core body temperature?',
    markingCriteria: 'Must select option A. Explains the temperature differential required for spermatogenesis.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'D',
        misconceptionTitle: 'Belief that Warmer is Always Better for Cellular Reactions',
        explanation: 'Applying the general chemistry rule that higher heat speeds up reactions, ignoring enzyme denaturing and sperm sensitivity.',
        typicalReasoningQuote: 'Higher temperatures speed up chemical reactions, so testes stay outside to get warmer.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-07-fu',
      questionText: 'Which tube transports mature sperm from the testes/epididymis toward the urethra?',
      options: [
        { id: 'A', text: 'Ureter' },
        { id: 'B', text: 'Vas deferens (sperm duct)' },
        { id: 'C', text: 'Fallopian tube' },
        { id: 'D', text: 'Seminal vesicle' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'Vas deferens (sperm duct)',
      explanation: 'The vas deferens carries sperm from the epididymis to the urethra. Ureters carry urine from kidneys to bladder.'
    }
  },

  // -------------------------------------------------------------
  // 8. Human Female Reproductive System & Fertilization Site
  // -------------------------------------------------------------
  {
    id: 'bio-08',
    grade: 'Grade 8',
    subject: 'Biology',
    topic: 'Reproduction',
    subtopic: 'Human Female Reproductive Anatomy and Fertilization',
    topicId: 'biology_reproduction',
    topicTitle: 'Reproduction in Living Organisms',
    difficulty: 'Intermediate',
    learningObjective: 'Identify the exact anatomical site of fertilization and implantation in the human female reproductive tract.',
    questionText: 'In human reproduction, where does fertilization of the ovum by a sperm typically take place, and where does the developing embryo implant?',
    contextOrEquation: 'Ovulation -> Ampulla of Fallopian Tube (Fertilization) -> Cleavage / Morula / Blastocyst -> Uterine endometrium (Implantation)',
    options: [
      { id: 'A', text: 'Fertilization occurs in the uterus; implantation occurs in the ovary.' },
      { id: 'B', text: 'Fertilization occurs in the Fallopian tube (oviduct); implantation occurs in the uterine wall.' },
      { id: 'C', text: 'Fertilization occurs in the vagina; implantation occurs in the Fallopian tube.' },
      { id: 'D', text: 'Fertilization and implantation both occur inside the ovary.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Fertilization occurs in the Fallopian tube (oviduct); implantation occurs in the uterine wall.',
    conceptualExplanation: 'Following ovulation, the ovum is swept into the Fallopian tube (oviduct), where fertilization by sperm normally occurs. The resulting zygote begins cell division as it travels down the tube into the uterus, where it implants into the vascular uterine lining (endometrium).',
    workedSolution: 'Step 1: Trace the path of the ovum after release from the ovary into the Fallopian tube. Step 2: Sperm meets ovum in the upper Fallopian tube (fertilization). Step 3: Dividing blastocyst travels into the uterus for implantation.',
    expectedReasoning: 'Fertilization takes place in the Fallopian tube; subsequent embryonic implantation occurs in the endometrium of the uterus.',
    hint: 'Fertilization occurs during transit in the tube, but embryonic growth happens in the womb (uterus).',
    markingCriteria: 'Must select option B. Distinguishes the site of gamete fusion from the site of gestational attachment.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Assuming Fertilization Occurs in the Uterus',
        explanation: 'Believing the uterus does everything, including initial gamete fusion.',
        typicalReasoningQuote: 'Because babies grow in the uterus, sperm must fertilize the egg right inside the uterus.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-08-fu',
      questionText: 'What is the specialized vascular organ that develops to exchange nutrients, gases, and wastes between mother and developing fetus?',
      options: [
        { id: 'A', text: 'Placenta' },
        { id: 'B', text: 'Amniotic fluid' },
        { id: 'C', text: 'Cervix' },
        { id: 'D', text: 'Ovary' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Placenta',
      explanation: 'The placenta is the temporary organ that facilitates selective nutrient, oxygen, and metabolic waste transfer between maternal and fetal blood supplies without direct mixing.'
    }
  },

  // -------------------------------------------------------------
  // 9. Puberty & Hormonal Regulation
  // -------------------------------------------------------------
  {
    id: 'bio-09',
    grade: 'Grade 8',
    subject: 'Biology',
    topic: 'Reproduction',
    subtopic: 'Endocrine Control of Puberty',
    topicId: 'biology_reproduction',
    topicTitle: 'Reproduction in Living Organisms',
    difficulty: 'Intermediate',
    learningObjective: 'Identify the primary sex hormones responsible for secondary sexual characteristics in males and females.',
    questionText: 'During puberty, secondary sexual characteristics develop under the regulation of hormones released by the gonads. Which pair correctly identifies the primary male and female sex hormones responsible for these changes?',
    contextOrEquation: 'Pituitary gland -> LH & FSH -> Testes (Testosterone) & Ovaries (Estrogen and Progesterone)',
    options: [
      { id: 'A', text: 'Male: Insulin | Female: Glucagon' },
      { id: 'B', text: 'Male: Testosterone | Female: Estrogen' },
      { id: 'C', text: 'Male: Adrenaline | Female: Thyroxine' },
      { id: 'D', text: 'Male: Estrogen | Female: Testosterone' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Male: Testosterone | Female: Estrogen',
    conceptualExplanation: 'Testosterone is secreted by the Leydig cells in testes, stimulating male secondary sexual characteristics (deepening of voice, facial hair, muscle mass). Estrogen is secreted by ovarian follicles, stimulating female secondary characteristics (breast development, widened hips, menstrual cycle onset).',
    workedSolution: 'Step 1: Testes produce testosterone. Step 2: Ovaries produce estrogen. Step 3: Match testosterone to male puberty changes and estrogen to female puberty changes.',
    expectedReasoning: 'Testosterone governs male secondary sexual development; estrogen governs female secondary sexual maturation.',
    hint: 'Look for hormones produced by the gonads (testes and ovaries), not the pancreas or adrenals.',
    markingCriteria: 'Must select option B.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Confusing Metabolic Hormones with Reproductive Hormones',
        explanation: 'Selecting insulin/glucagon which regulate blood glucose levels rather than sex characteristics.',
        typicalReasoningQuote: 'Insulin makes the body grow bigger during teenage years.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-09-fu',
      questionText: 'Which "master gland" situated at the base of the brain secretes hormones that trigger the testes and ovaries to produce sex hormones at puberty?',
      options: [
        { id: 'A', text: 'Pituitary gland' },
        { id: 'B', text: 'Thyroid gland' },
        { id: 'C', text: 'Adrenal cortex' },
        { id: 'D', text: 'Pancreas' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Pituitary gland',
      explanation: 'The anterior pituitary gland releases gonadotropins (LH and FSH) which stimulate the gonads to synthesize sex steroids.'
    }
  },

  // -------------------------------------------------------------
  // 10. Menstrual Cycle and Ovulation Timing
  // -------------------------------------------------------------
  {
    id: 'bio-10',
    grade: 'Grade 9',
    subject: 'Biology',
    topic: 'Reproduction',
    subtopic: 'Human Menstrual Cycle and Ovulation',
    topicId: 'biology_reproduction',
    topicTitle: 'Reproduction in Living Organisms',
    difficulty: 'Advanced',
    learningObjective: 'Explain what triggers menstruation and identify the approximate timing of ovulation in a 28-day cycle.',
    questionText: 'In a healthy human female with a typical 28-day menstrual cycle, what biological event causes menstruation (the shedding of the uterine lining) when fertilization does NOT occur?',
    contextOrEquation: 'Corpus luteum degenerates -> Sharp drop in Progesterone & Estrogen -> Breakdown of endometrial lining (Menstruation)',
    options: [
      { id: 'A', text: 'A sudden, massive spike in progesterone levels that bursts the uterine blood vessels.' },
      { id: 'B', text: 'A sharp drop in progesterone and estrogen levels as the unfertilized corpus luteum degenerates.' },
      { id: 'C', text: 'The immediate release of a new egg on day 1 that destroys the old lining.' },
      { id: 'D', text: 'A bacterial infection of the endometrium that occurs every four weeks.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'A sharp drop in progesterone and estrogen levels as the unfertilized corpus luteum degenerates.',
    conceptualExplanation: 'Progesterone maintains the thickened, vascularized uterine lining. If an egg is not fertilized, the corpus luteum degenerates, leading to a precipitous decline in progesterone and estrogen. Deprived of hormonal support, the endometrial lining breaks down and is shed as menstrual flow.',
    workedSolution: 'Step 1: Progesterone is the pregnancy-maintaining hormone. Step 2: Without fertilization, the corpus luteum stops producing progesterone. Step 3: Low progesterone causes endometrial tissue ischemia and sloughing.',
    expectedReasoning: 'Withdrawal of progesterone and estrogen removes the trophic support for the endometrial lining, triggering menstruation.',
    hint: 'Which hormone supports the uterine lining, and what happens to its concentration if pregnancy does not occur?',
    markingCriteria: 'Must select option B. Recognizes hormonal withdrawal as the physiological trigger of menstruation.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Believing Hormone Peaks Cause Tissue Breakdown',
        explanation: 'Assuming high hormone levels cause bleeding rather than hormonal withdrawal/drop.',
        typicalReasoningQuote: 'Too much progesterone builds up until it overflows and bursts as bleeding.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-10-fu',
      questionText: 'Around which day of a standard 28-day menstrual cycle does ovulation (release of the egg from the ovary) typically occur?',
      options: [
        { id: 'A', text: 'Day 1' },
        { id: 'B', text: 'Day 5' },
        { id: 'C', text: 'Day 14' },
        { id: 'D', text: 'Day 28' },
      ],
      correctAnswerId: 'C',
      correctAnswerText: 'Day 14',
      explanation: 'In a regular 28-day cycle, the LH surge triggers ovulation approximately midway through the cycle, around Day 14.'
    }
  },

  // -------------------------------------------------------------
  // 11. Plant Cell vs Animal Cell Organelles
  // -------------------------------------------------------------
  {
    id: 'bio-11',
    grade: 'Grade 8',
    subject: 'Biology',
    topic: 'Cell Structure and Function',
    subtopic: 'Plant and Animal Cell Organelle Comparison',
    topicId: 'biology_cell_structure',
    topicTitle: 'Cellular Basis of Life',
    difficulty: 'Beginner',
    learningObjective: 'Identify organelles unique to plant cells compared to animal cells.',
    questionText: 'A student looks at an unknown cell under a light microscope and identifies a rigid cellulose cell wall, large central vacuole, and green chloroplasts. Which type of cell is this?',
    contextOrEquation: 'Cell wall + Chloroplasts + Large central vacuole = Diagnostic of Plant Cells',
    options: [
      { id: 'A', text: 'Human cheek epithelial cell' },
      { id: 'B', text: 'Onion root or leaf mesophyll plant cell' },
      { id: 'C', text: 'Amoeba protozoan cell' },
      { id: 'D', text: 'Bovine red blood cell' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Onion root or leaf mesophyll plant cell',
    conceptualExplanation: 'Plant cells possess three distinctive structural features absent in typical animal cells: a rigid cellulose cell wall for structural support, chloroplasts containing chlorophyll for photosynthesis, and a large permanent central vacuole for maintaining turgor pressure.',
    workedSolution: 'Step 1: Check presence of cell wall (rules out animal cells). Step 2: Check presence of chloroplasts (rules out cheek and red blood cells). Step 3: Conclude that this is a plant cell.',
    expectedReasoning: 'Cellulose cell walls, chloroplasts, and a large central vacuole are hallmarks of plant cells.',
    hint: 'Which kingdom of organisms photosynthesizes and requires rigid cellulose walls?',
    markingCriteria: 'Must select option B.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Confusing Animal Cheek Cells with Plant Cells',
        explanation: 'Failing to remember cheek cells lack cell walls and chloroplasts.',
        typicalReasoningQuote: 'Cheek cells form a strong lining so they must have rigid cell walls and vacuoles.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-11-fu',
      questionText: 'What is the function of the cell membrane, which is present in BOTH plant and animal cells?',
      options: [
        { id: 'A', text: 'To synthesize glucose from sunlight' },
        { id: 'B', text: 'To selectively regulate substances entering and leaving the cell' },
        { id: 'C', text: 'To store hereditary DNA inside chromosomes' },
        { id: 'D', text: 'To provide an impermeable, completely solid outer shell' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'To selectively regulate substances entering and leaving the cell',
      explanation: 'The plasma membrane is a selectively permeable phospholipid bilayer regulating transport into and out of all living cells.'
    }
  },

  // -------------------------------------------------------------
  // 12. Osmosis in Plant and Animal Cells
  // -------------------------------------------------------------
  {
    id: 'bio-12',
    grade: 'Grade 9',
    subject: 'Biology',
    topic: 'Cell Structure and Function',
    subtopic: 'Osmosis, Turgidity, and Plasmolysis',
    topicId: 'biology_cell_structure',
    topicTitle: 'Cellular Basis of Life',
    difficulty: 'Intermediate',
    learningObjective: 'Predict the outcome when plant and animal cells are placed in pure water (hypotonic solution).',
    questionText: 'If a human red blood cell and an Elodea plant cell are both placed into pure distilled water, what will happen to each cell?',
    contextOrEquation: 'Hypotonic medium: Net water influx via osmosis. Animal cell lacks cell wall; plant cell has rigid cellulose cell wall.',
    options: [
      { id: 'A', text: 'Both cells will shrink and dehydrate.' },
      { id: 'B', text: 'The red blood cell will swell and burst (lyse), while the plant cell will become turgid without bursting.' },
      { id: 'C', text: 'The plant cell will burst, while the red blood cell will remain unchanged.' },
      { id: 'D', text: 'Neither cell will experience any net movement of water.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'The red blood cell will swell and burst (lyse), while the plant cell will become turgid without bursting.',
    conceptualExplanation: 'In pure water (hypotonic relative to cytoplasm), water moves down its water potential gradient into both cells via osmosis. The animal red blood cell has only a flexible plasma membrane, so it swells and bursts (osmotic lysis). The plant cell has a rigid cellulose cell wall that exerts wall pressure opposing osmotic pressure, making the cell firm (turgid) without bursting.',
    workedSolution: 'Step 1: Distilled water has higher water potential than cytoplasm -> water enters cells. Step 2: Animal cell lacks a cell wall -> membrane ruptures. Step 3: Plant cell wall withstands turgor pressure -> cell stays intact.',
    expectedReasoning: 'Osmotic influx causes animal cells to lyse due to lack of a wall, while plant cell walls generate mechanical turgor pressure preventing lysis.',
    hint: 'Which cell has a rigid outer wall that can resist high internal pressure?',
    markingCriteria: 'Must select option B. Distinguishes plant cell turgor from animal cell lysis in hypotonic media.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Inverted Osmotic Vulnerability',
        explanation: 'Believing the plant cell wall is weak or brittle, or that animal cells have protective shells.',
        typicalReasoningQuote: 'Plant cells are fragile so they explode, while animal blood cells have tough skins.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-12-fu',
      questionText: 'What term describes a plant cell when placed in a concentrated salt solution, where water leaves the vacuole and the cytoplasm pulls away from the cell wall?',
      options: [
        { id: 'A', text: 'Plasmolysis' },
        { id: 'B', text: 'Turgidity' },
        { id: 'C', text: 'Lysis' },
        { id: 'D', text: 'Fermentation' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Plasmolysis',
      explanation: 'In a hypertonic solution, water leaves the plant cell by exosmosis, causing the protoplast to shrink away from the rigid cell wall in a process called plasmolysis.'
    }
  },

  // -------------------------------------------------------------
  // 13. Mitochondria and Cellular Respiration
  // -------------------------------------------------------------
  {
    id: 'bio-13',
    grade: 'Grade 8',
    subject: 'Biology',
    topic: 'Cell Structure and Function',
    subtopic: 'Mitochondria as the Powerhouse',
    topicId: 'biology_cell_structure',
    topicTitle: 'Cellular Basis of Life',
    difficulty: 'Beginner',
    learningObjective: 'Explain why mitochondria are termed the "powerhouse of the cell".',
    questionText: 'Why are mitochondria commonly referred to as the "powerhouse of the cell"?',
    contextOrEquation: 'C6H12O6 + 6O2 -> 6CO2 + 6H2O + Energy (ATP)',
    options: [
      { id: 'A', text: 'They produce digestive enzymes to break down old organelles.' },
      { id: 'B', text: 'They release energy from glucose during cellular respiration and store it as ATP.' },
      { id: 'C', text: 'They capture sunlight directly to create glucose during daylight.' },
      { id: 'D', text: 'They build proteins from messenger RNA instructions.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'They release energy from glucose during cellular respiration and store it as ATP.',
    conceptualExplanation: 'Mitochondria are the sites of aerobic cellular respiration. They break down fuel molecules (pyruvate derived from glucose) using oxygen to generate adenosine triphosphate (ATP), the universal chemical energy currency used to drive cellular work.',
    workedSolution: 'Step 1: Cellular respiration converts glucose energy into chemical energy. Step 2: This energy is packaged in ATP molecules within mitochondria. Step 3: Match description to option B.',
    expectedReasoning: 'Aerobic oxidation of nutrients inside mitochondria synthesizes ATP for cellular metabolic processes.',
    hint: 'What high-energy molecule is created during aerobic respiration?',
    markingCriteria: 'Must select option B.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Confusing Mitochondria with Chloroplasts',
        explanation: 'Thinking mitochondria absorb sunlight like chloroplasts.',
        typicalReasoningQuote: 'Mitochondria absorb solar power like tiny power stations.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-13-fu',
      questionText: 'Which human cells would you expect to contain the greatest concentration of mitochondria?',
      options: [
        { id: 'A', text: 'Active cardiac muscle cells in the heart' },
        { id: 'B', text: 'Dead epidermal skin cells' },
        { id: 'C', text: 'Fat storage cells in adipose tissue' },
        { id: 'D', text: 'Bone mineral matrix cells' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Active cardiac muscle cells in the heart',
      explanation: 'Cardiac muscle contracts continuously throughout life, requiring enormous amounts of ATP supplied by a high density of mitochondria.'
    }
  },

  // -------------------------------------------------------------
  // 14. Chloroplasts and Photosynthesis
  // -------------------------------------------------------------
  {
    id: 'bio-14',
    grade: 'Grade 8',
    subject: 'Biology',
    topic: 'Cell Structure and Function',
    subtopic: 'Chloroplasts and Photosynthetic Inputs/Outputs',
    topicId: 'biology_cell_structure',
    topicTitle: 'Cellular Basis of Life',
    difficulty: 'Intermediate',
    learningObjective: 'Identify the chemical inputs and outputs of photosynthesis in chloroplasts.',
    questionText: 'During photosynthesis in plant chloroplasts, what inorganic reactants are converted into chemical energy, and what gas is released as a byproduct?',
    contextOrEquation: '6CO2 + 6H2O + Light Energy -> C6H12O6 + 6O2',
    options: [
      { id: 'A', text: 'Reactants: Oxygen and Glucose | Byproduct: Carbon dioxide' },
      { id: 'B', text: 'Reactants: Carbon dioxide and Water | Byproduct: Oxygen' },
      { id: 'C', text: 'Reactants: Nitrogen and Water | Byproduct: Methane' },
      { id: 'D', text: 'Reactants: Carbon monoxide and Hydrogen | Byproduct: Nitrogen' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Reactants: Carbon dioxide and Water | Byproduct: Oxygen',
    conceptualExplanation: 'Chloroplasts contain chlorophyll pigments that absorb light. Plants take up water (H2O) through roots and carbon dioxide (CO2) through stomata. Light energy splits water (photolysis), releasing oxygen (O2) into the air and driving synthesis of glucose (C6H12O6).',
    workedSolution: 'Step 1: Recall the balanced photosynthetic equation. Step 2: Reactants are CO2 and H2O. Step 3: Products are glucose (food) and oxygen gas byproduct.',
    expectedReasoning: 'Photosynthesis consumes CO2 and H2O with light energy, synthesizing glucose and releasing O2.',
    hint: 'What gas do plants absorb from air, and what gas do they release that animals breathe?',
    markingCriteria: 'Must select option B. Accurately pairs reactants and products of photosynthesis.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Inverting Photosynthesis with Respiration',
        explanation: 'Confusing the inputs of photosynthesis with the inputs of cellular respiration.',
        typicalReasoningQuote: 'Plants breathe in oxygen just like humans do to make sugar.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-14-fu',
      questionText: 'What green pigment in chloroplasts is responsible for absorbing light energy for photosynthesis?',
      options: [
        { id: 'A', text: 'Hemoglobin' },
        { id: 'B', text: 'Chlorophyll' },
        { id: 'C', text: 'Carotene' },
        { id: 'D', text: 'Melanin' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'Chlorophyll',
      explanation: 'Chlorophyll absorbs blue and red wavelengths of light while reflecting green light, giving plant foliage its green hue.'
    }
  },

  // -------------------------------------------------------------
  // 15. Bacteria vs Viruses: Structure and Treatment
  // -------------------------------------------------------------
  {
    id: 'bio-15',
    grade: 'Grade 8',
    subject: 'Biology',
    topic: 'Microorganisms',
    subtopic: 'Bacterial vs Viral Infections and Antibiotic Action',
    topicId: 'biology_microorganisms',
    topicTitle: 'Microbiology and Health',
    difficulty: 'Intermediate',
    learningObjective: 'Explain why antibiotics cure bacterial infections but are ineffective against viral diseases like influenza or the common cold.',
    questionText: 'A patient with the common cold (caused by a rhinovirus) demands a prescription for penicillin, an antibiotic. Why will penicillin be completely ineffective in treating this viral illness?',
    contextOrEquation: 'Bacteria: Living prokaryotes with cell walls, ribosomes, and metabolic machinery. Viruses: Non-cellular genetic material in a protein capsid requiring host machinery.',
    options: [
      { id: 'A', text: 'Antibiotics target bacterial structures like cell walls and metabolic pathways, which viruses completely lack.' },
      { id: 'B', text: 'Viruses are simply too large for antibiotic molecules to penetrate.' },
      { id: 'C', text: 'Penicillin only kills viruses that have already entered the blood, not the nose.' },
      { id: 'D', text: 'Antibiotics boost viral replication by providing them with nutrients.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Antibiotics target bacterial structures like cell walls and metabolic pathways, which viruses completely lack.',
    conceptualExplanation: 'Antibiotics specifically inhibit bacterial biochemical pathways, such as peptidoglycan cell wall synthesis (penicillin) or bacterial ribosomes. Viruses are acellular particles consisting only of nucleic acid wrapped in a protein coat; they lack cell walls, ribosomes, and independent metabolism, using human host cellular machinery instead. Therefore, antibiotics have no biochemical target in viruses.',
    workedSolution: 'Step 1: Identify that antibiotics target cellular bacterial mechanisms (e.g., cell wall synthesis). Step 2: Note that viruses are acellular and do not have cell walls or independent ribosomes. Step 3: Conclude that antibiotics cannot disrupt viruses.',
    expectedReasoning: 'Viruses lack bacterial targets such as peptidoglycan cell walls and bacterial ribosomes, rendering antibiotics therapeutically ineffective.',
    hint: 'Do viruses have bacterial cell walls or independent metabolism?',
    markingCriteria: 'Must select option A. Explains the absence of biological antibiotic targets in viruses.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Belief that Viruses are Giant Microbes',
        explanation: 'Failing to realize viruses are significantly smaller than bacteria.',
        typicalReasoningQuote: 'Viruses are tough giant bugs so small medicines cannot hurt them.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-15-fu',
      questionText: 'What medical intervention stimulates the human immune system to produce memory cells and antibodies against specific viruses BEFORE exposure?',
      options: [
        { id: 'A', text: 'Vaccines' },
        { id: 'B', text: 'Antacids' },
        { id: 'C', text: 'Painkillers (Analgesics)' },
        { id: 'D', text: 'Steroids' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Vaccines',
      explanation: 'Vaccines introduce weakened or inactive antigens to prime B and T lymphocytes, conferring active acquired immunity.'
    }
  },

  // -------------------------------------------------------------
  // 16. Beneficial Microorganisms: Fermentation
  // -------------------------------------------------------------
  {
    id: 'bio-16',
    grade: 'Grade 8',
    subject: 'Biology',
    topic: 'Microorganisms',
    subtopic: 'Beneficial Microbes and Anaerobic Fermentation',
    topicId: 'biology_microorganisms',
    topicTitle: 'Microbiology and Health',
    difficulty: 'Beginner',
    learningObjective: 'Describe the biological role of yeast in bread making and alcohol fermentation.',
    questionText: 'When baker\'s yeast is mixed into bread dough with warm water and sugar, the dough rises noticeably over an hour. Which gas produced by the yeast causes the dough to swell with porous pockets?',
    contextOrEquation: 'C6H12O6 (Glucose) --[Yeast Enzymes]--> 2 C2H5OH (Ethanol) + 2 CO2 (Carbon dioxide) + Energy',
    options: [
      { id: 'A', text: 'Oxygen' },
      { id: 'B', text: 'Carbon dioxide' },
      { id: 'C', text: 'Nitrogen' },
      { id: 'D', text: 'Hydrogen sulfide' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Carbon dioxide',
    conceptualExplanation: 'Yeast undergoes anaerobic respiration (alcoholic fermentation) in the dough, breaking down sugar into ethanol and carbon dioxide (CO2) gas. As the CO2 gas bubbles expand and become trapped in the gluten matrix, the dough rises. During baking, the heat evaporates the ethanol and sets the spongy bread texture.',
    workedSolution: 'Step 1: Write fermentation reaction: Sugar -> Ethanol + CO2. Step 2: The trapped gas is carbon dioxide. Step 3: Carbon dioxide expansion causes dough to rise.',
    expectedReasoning: 'Fermentation of sugars by yeast releases CO2 gas bubbles that inflate the dough.',
    hint: 'Which gas is released when yeast ferments sugar without oxygen?',
    markingCriteria: 'Must select option B (Carbon dioxide).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Believing Yeast Generates Oxygen',
        explanation: 'Confusing respiration products with photosynthetic products.',
        typicalReasoningQuote: 'Living microbes always produce oxygen to make the air pockets in bread.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-16-fu',
      questionText: 'Which bacterium is responsible for curdling milk into yogurt by converting lactose sugar into lactic acid?',
      options: [
        { id: 'A', text: 'Lactobacillus' },
        { id: 'B', text: 'Salmonella' },
        { id: 'C', text: 'Escherichia coli' },
        { id: 'D', text: 'Streptococcus pneumoniae' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Lactobacillus',
      explanation: 'Lactobacillus converts lactose to lactic acid, which lowers milk pH and coagulates the milk protein (casein) into curd.'
    }
  },

  // -------------------------------------------------------------
  // 17. Mendelian Genetics and Punnett Squares
  // -------------------------------------------------------------
  {
    id: 'bio-17',
    grade: 'Grade 9',
    subject: 'Biology',
    topic: 'Heredity and Genetics',
    subtopic: 'Monohybrid Cross and Dominance',
    topicId: 'biology_genetics',
    topicTitle: 'Heredity and Evolution',
    difficulty: 'Intermediate',
    learningObjective: 'Use a Punnett square to predict phenotypic and genotypic ratios of a monohybrid cross.',
    questionText: 'In pea plants, tall stem height (T) is completely dominant over dwarf stem height (t). If two heterozygous tall pea plants (Tt x Tt) are crossed, what is the expected ratio of tall plants to dwarf plants among the offspring?',
    contextOrEquation: 'Cross: Tt x Tt -> Punnett: TT, Tt, Tt, tt. Genotypic ratio: 1 TT : 2 Tt : 1 tt.',
    options: [
      { id: 'A', text: '4 tall : 0 dwarf (100% tall)' },
      { id: 'B', text: '3 tall : 1 dwarf' },
      { id: 'C', text: '1 tall : 1 dwarf' },
      { id: 'D', text: '1 tall : 3 dwarf' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: '3 tall : 1 dwarf',
    conceptualExplanation: 'In a monohybrid cross between two heterozygotes (Tt x Tt), gametes T and t combine to yield: 1 TT (homozygous tall), 2 Tt (heterozygous tall), and 1 tt (homozygous dwarf). Because T is dominant, both TT and Tt appear tall (1 + 2 = 3). Only tt displays the dwarf phenotype (1). The phenotypic ratio is 3 tall : 1 dwarf.',
    workedSolution: 'Step 1: Set up 2x2 Punnett square for Tt x Tt. Step 2: Offspring genotypes: TT (1/4), Tt (2/4), tt (1/4). Step 3: Phenotypes: TT and Tt are tall (3/4); tt is dwarf (1/4). Ratio = 3:1.',
    expectedReasoning: 'Dominance of T over t means three out of four genetic combinations (TT, Tt, Tt) produce tall phenotypes, yielding a 3:1 phenotypic ratio.',
    hint: 'Remember that heterozygous plants (Tt) carry the dominant trait and appear tall.',
    markingCriteria: 'Must select option B. Distinguishes genotypic ratio (1:2:1) from phenotypic ratio (3:1).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Confusing Heterozygous Cross with Test Cross',
        explanation: 'Believing two alleles always produce a 50/50 split (1:1) in all crosses.',
        typicalReasoningQuote: 'Since there are two alleles T and t, half should be tall and half short.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-17-fu',
      questionText: 'What term describes an organism that possesses two identical alleles for a specific gene (such as TT or tt)?',
      options: [
        { id: 'A', text: 'Homozygous' },
        { id: 'B', text: 'Heterozygous' },
        { id: 'C', text: 'Hybrid' },
        { id: 'D', text: 'Phenotypic' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Homozygous',
      explanation: 'Homozygous refers to having identical alleles (TT or tt). Heterozygous refers to having two different alleles (Tt).'
    }
  },

  // -------------------------------------------------------------
  // 18. Human Circulatory System: Double Circulation
  // -------------------------------------------------------------
  {
    id: 'bio-18',
    grade: 'Grade 9',
    subject: 'Biology',
    topic: 'Human Physiology',
    subtopic: 'Double Circulation in the Human Heart',
    topicId: 'biology_physiology',
    topicTitle: 'Life Processes in Animals',
    difficulty: 'Advanced',
    learningObjective: 'Trace the flow of deoxygenated and oxygenated blood through the pulmonary and systemic circuits.',
    questionText: 'Which chamber of the human heart pumps oxygenated blood under the highest pressure into the aorta to supply the entire body, and why is its muscular wall the thickest?',
    contextOrEquation: 'Right atrium -> Right ventricle -> Lungs -> Left atrium -> Left ventricle -> Systemic Aorta',
    options: [
      { id: 'A', text: 'Right atrium, because it collects blood returning from all parts of the body.' },
      { id: 'B', text: 'Right ventricle, because it must pump blood through the lungs against high gravity.' },
      { id: 'C', text: 'Left ventricle, because it must generate enough pressure to overcome systemic vascular resistance and pump blood throughout the entire body.' },
      { id: 'D', text: 'Left atrium, because it receives blood directly from the pulmonary veins.' },
    ],
    correctAnswerId: 'C',
    correctAnswerText: 'Left ventricle, because it must generate enough pressure to overcome systemic vascular resistance and pump blood throughout the entire body.',
    conceptualExplanation: 'The left ventricle has the thickest myocardial myocardium because it powers systemic circulation. While the right ventricle pumps blood only a short distance to the lungs under low pulmonary resistance, the left ventricle must generate high hydrostatic pressure (~120 mmHg) to push blood through the aorta to all organ systems.',
    workedSolution: 'Step 1: Identify that left side of heart handles oxygenated blood. Step 2: Compare pumping destination: right ventricle pumps to nearby lungs; left ventricle pumps to entire body. Step 3: Pumping to the whole body requires highest pressure and thickest muscle.',
    expectedReasoning: 'The left ventricle pumps against high total peripheral systemic resistance across the entire body, requiring the thickest myocardial wall.',
    hint: 'Which chamber sends oxygenated blood to your head, arms, torso, and legs?',
    markingCriteria: 'Must select option C.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Confusing Pulmonary with Systemic Pressure',
        explanation: 'Thinking the lungs need higher pressure, unaware that delicate lung capillaries would burst under high pressure.',
        typicalReasoningQuote: 'The right ventricle works harder because pumping air through the lungs takes more force.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-18-fu',
      questionText: 'Which blood vessels carry oxygenated blood from the lungs BACK into the left atrium of the heart?',
      options: [
        { id: 'A', text: 'Pulmonary veins' },
        { id: 'B', text: 'Pulmonary arteries' },
        { id: 'C', text: 'Vena cava' },
        { id: 'D', text: 'Coronary arteries' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Pulmonary veins',
      explanation: 'Pulmonary veins are the only veins in the adult body that carry oxygenated blood, transporting it from alveolar capillaries back to the left atrium.'
    }
  },

  // -------------------------------------------------------------
  // 19. Trophic Levels and 10% Energy Transfer Law
  // -------------------------------------------------------------
  {
    id: 'bio-19',
    grade: 'Grade 8',
    subject: 'Biology',
    topic: 'Ecosystems and Environment',
    subtopic: 'Trophic Levels and Lindeman\'s 10% Energy Rule',
    topicId: 'biology_ecosystems',
    topicTitle: 'Ecology and Environment',
    difficulty: 'Intermediate',
    learningObjective: 'Apply Lindeman\'s 10% energy transfer rule to calculate energy availability across successive trophic levels.',
    questionText: 'In a grassland ecosystem, grass (producers) captures 20,000 Joules of solar energy. According to the 10% energy transfer law, how much energy will be available to a snake that acts as a secondary consumer (Grass -> Grasshopper -> Frog -> Snake)?',
    contextOrEquation: 'Trophic chain: Producer (20,000 J) -> Primary Consumer (10%) -> Secondary Consumer (10%) -> Tertiary Consumer (10%)',
    options: [
      { id: 'A', text: '2,000 Joules' },
      { id: 'B', text: '200 Joules' },
      { id: 'C', text: '20 Joules' },
      { id: 'D', text: '20,000 Joules (energy is completely conserved)' },
    ],
    correctAnswerId: 'C',
    correctAnswerText: '20 Joules',
    conceptualExplanation: 'Only approximately 10% of energy at one trophic level is transferred to the next; 90% is dissipated as metabolic heat, respiration, and unconsumed matter. Trophic Level 1 (Grass): 20,000 J. Trophic Level 2 (Grasshopper, 1° consumer): 2,000 J. Trophic Level 3 (Frog, 2° consumer): 200 J. Trophic Level 4 (Snake, 3° consumer in this 4-step chain): 20 J.',
    workedSolution: 'Step 1: Grass = 20,000 J. Step 2: Grasshopper = 20,000 x 0.10 = 2,000 J. Step 3: Frog = 2,000 x 0.10 = 200 J. Step 4: Snake = 200 x 0.10 = 20 J.',
    expectedReasoning: 'Applying 10% transfer at each step: 20,000 -> 2,000 -> 200 -> 20 J.',
    hint: 'Carefully count the number of energy transfer steps from grass to snake.',
    markingCriteria: 'Must select option C (20 Joules). Accurately applies 10% reduction across each step.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Stopping at the First Consumer Level',
        explanation: 'Applying the 10% rule only once regardless of the number of links in the food chain.',
        typicalReasoningQuote: '10% of 20,000 is 2,000 so the snake gets 2,000 Joules.'
      },
      {
        answerIdOrPattern: 'D',
        misconceptionTitle: 'Confusing Conservation of Energy with Trophic Transfer',
        explanation: 'Believing 100% of chemical energy passes up food chains without thermodynamic heat losses.',
        typicalReasoningQuote: 'Energy cannot be created or destroyed, so all 20,000 Joules stay in the ecosystem.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-19-fu',
      questionText: 'Why do food chains in nature rarely exceed 4 or 5 trophic levels?',
      options: [
        { id: 'A', text: 'Because top carnivores are too friendly to hunt more animals.' },
        { id: 'B', text: 'Because so much energy is lost as heat at each step that too little remains to support higher levels.' },
        { id: 'C', text: 'Because organisms run out of oxygen at higher trophic levels.' },
        { id: 'D', text: 'Because predators reproduce much faster than plants.' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'Because so much energy is lost as heat at each step that too little remains to support higher levels.',
      explanation: 'With 90% energy loss at each transition, available energy drops exponentially, making a 5th or 6th consumer level energetically unsustainable.'
    }
  },

  // -------------------------------------------------------------
  // 20. Plant Reproduction - Spore Formation in Rhizopus
  // -------------------------------------------------------------
  {
    id: 'bio-20',
    grade: 'Grade 8',
    subject: 'Biology',
    topic: 'Reproduction',
    subtopic: 'Spore Formation in Fungi (Rhizopus)',
    topicId: 'biology_reproduction',
    topicTitle: 'Reproduction in Living Organisms',
    difficulty: 'Intermediate',
    learningObjective: 'Describe spore formation in bread mold (Rhizopus) and explain how spores survive harsh conditions.',
    questionText: 'A piece of moist bread left in a dark cabinet develops a black cottony growth of Rhizopus (bread mold). Fine vertical stalks develop swollen black knobs at their tips. What are these knobs, and how do they aid reproduction?',
    contextOrEquation: 'Hyphae -> Sporangiophores -> Sporangia (housing thick-walled resistant spores) -> Spore dispersal',
    options: [
      { id: 'A', text: 'They are flowers containing nectar that attracts insects for cross-pollination.' },
      { id: 'B', text: 'They are sporangia containing thousands of microscopic spores protected by thick walls that can survive harsh conditions until landing on moist food.' },
      { id: 'C', text: 'They are seeds with large cotyledons and embryonic leaves.' },
      { id: 'D', text: 'They are root nodules containing nitrogen-fixing bacteria.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'They are sporangia containing thousands of microscopic spores protected by thick walls that can survive harsh conditions until landing on moist food.',
    conceptualExplanation: 'In fungi like Rhizopus, the black spherical structures are sporangia borne atop aerial hyphae (sporangiophores). Inside the sporangium, spores develop. Spores have thick, resistant outer coats that shield them from desiccation and extreme temperatures until they land on a suitable moist substrate and germinate.',
    workedSolution: 'Step 1: Identify Rhizopus as a fungus. Step 2: The knobs are sporangia. Step 3: Sporangia contain asexual spores with protective walls for airborne dispersal.',
    expectedReasoning: 'Fungal sporangia package resistant spores that disperse through the air to colonize new organic substrates.',
    hint: 'Fungi do not have flowers or seeds; what tiny resistant single-celled units do they release?',
    markingCriteria: 'Must select option B. Accurately identifies sporangia and the protective role of spores.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Confusing Fungal Spores with Plant Seeds',
        explanation: 'Treating spores and seeds as identical multicellular embryonic structures.',
        typicalReasoningQuote: 'Mold drops seeds on bread just like apple trees drop seeds on the ground.'
      }
    ],
    fallbackFollowUp: {
      id: 'bio-20-fu',
      questionText: 'What environmental factor is most critical for airborne Rhizopus spores to break dormancy and germinate into hyphae?',
      options: [
        { id: 'A', text: 'Bright direct sunlight' },
        { id: 'B', text: 'Moisture and organic nutrients' },
        { id: 'C', text: 'Freezing temperatures' },
        { id: 'D', text: 'High wind speed' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'Moisture and organic nutrients',
      explanation: 'Moisture and accessible organic matter (such as carbohydrates in bread) trigger spore hydration, enzymatic activation, and germ tube growth.'
    }
  }
];
