import type { STEMQuestion } from '../../types/learning.ts';

export const GK_QUESTIONS: STEMQuestion[] = [
  // -------------------------------------------------------------
  // 1. Astronomy: Planetary Classification in the Solar System
  // -------------------------------------------------------------
  {
    id: 'gk-01',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Space and Astronomy',
    subtopic: 'Terrestrial vs Gas Giant Planets',
    topicId: 'gk_astronomy',
    topicTitle: 'Space, Astronomy, and Earth Science',
    difficulty: 'Beginner',
    learningObjective: 'Distinguish inner terrestrial rocky planets from outer gas/ice giants in our Solar System.',
    questionText: 'Which of the following lists contains ONLY inner, rocky (terrestrial) planets of our Solar System, located inside the main asteroid belt?',
    contextOrEquation: 'Inner terrestrial planets: Mercury, Venus, Earth, Mars (rocky surfaces). Asteroid belt separates from outer giants: Jupiter, Saturn, Uranus, Neptune.',
    options: [
      { id: 'A', text: 'Mercury, Venus, Earth, and Mars' },
      { id: 'B', text: 'Jupiter, Saturn, Uranus, and Neptune' },
      { id: 'C', text: 'Earth, Mars, Jupiter, and Pluto' },
      { id: 'D', text: 'Venus, Earth, Saturn, and Uranus' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Mercury, Venus, Earth, and Mars',
    conceptualExplanation: 'The Solar System is divided into inner and outer zones by the asteroid belt. The four inner planets—Mercury, Venus, Earth, and Mars—are terrestrial planets composed primarily of dense silicate rock and iron cores. The four outer planets—Jupiter, Saturn, Uranus, and Neptune—are massive gas and ice giants.',
    workedSolution: 'Step 1: Terrestrial means Earth-like, dense, solid rocky surface. Step 2: The four closest to the Sun are Mercury, Venus, Earth, and Mars. Step 3: Match to option A.',
    expectedReasoning: 'Mercury, Venus, Earth, and Mars are the four rocky inner terrestrial planets inside the asteroid belt.',
    hint: 'Think about the four planets closest to the Sun that have solid rock surfaces you can walk on.',
    markingCriteria: 'Must select option A.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Confusing Terrestrial Planets with Gas Giants',
        explanation: 'Selecting the outer giant planets instead of inner rocky ones.',
        typicalReasoningQuote: 'Jupiter and Saturn are the most famous planets so they are terrestrial.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-01-fu',
      questionText: 'Which planet is the hottest in our Solar System due to a runaway greenhouse effect from dense CO₂ atmosphere?',
      options: [
        { id: 'A', text: 'Mercury' },
        { id: 'B', text: 'Venus' },
        { id: 'C', text: 'Mars' },
        { id: 'D', text: 'Jupiter' },
      ],
      correctAnswerId: 'B',
      correctAnswerText: 'Venus',
      explanation: 'Although Mercury is closest to the Sun, Venus has an extremely thick atmosphere of 96% CO₂ trapping extreme heat (~465 °C).'
    }
  },

  // -------------------------------------------------------------
  // 2. Astronomy: Moon Phases and Solar/Lunar Eclipses
  // -------------------------------------------------------------
  {
    id: 'gk-02',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Space and Astronomy',
    subtopic: 'Alignment of Celestial Bodies during Eclipses',
    topicId: 'gk_astronomy',
    topicTitle: 'Space, Astronomy, and Earth Science',
    difficulty: 'Intermediate',
    learningObjective: 'Diagram and identify the celestial alignment during a total Solar Eclipse vs Lunar Eclipse.',
    questionText: 'During a total Solar Eclipse, which celestial body passes directly between the other two, casting its shadow upon the Earth?',
    contextOrEquation: 'Solar Eclipse: Sun -> Moon -> Earth (Moon casts shadow on Earth during New Moon). Lunar Eclipse: Sun -> Earth -> Moon (Earth shadows Moon during Full Moon).',
    options: [
      { id: 'A', text: 'The Earth passes directly between the Sun and the Moon.' },
      { id: 'B', text: 'The Moon passes directly between the Sun and the Earth.' },
      { id: 'C', text: 'The Sun passes directly between the Earth and the Moon.' },
      { id: 'D', text: 'Mars passes directly between the Earth and the Sun.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'The Moon passes directly between the Sun and the Earth.',
    conceptualExplanation: 'In a solar eclipse, the Moon moves directly along the line of sight between the Sun and the Earth. The Moon blocks the Sun\'s rays, casting its umbral shadow onto a narrow corridor of the Earth\'s surface. In contrast, during a lunar eclipse, the Earth is in the middle, blocking sunlight from reaching the Moon.',
    workedSolution: 'Step 1: "Solar eclipse" means the Sun is obscured from view on Earth. Step 2: The only body that can block the Sun from our perspective is the Moon. Step 3: Moon is positioned between Sun and Earth.',
    expectedReasoning: 'A solar eclipse occurs when the Moon moves directly between the Earth and Sun, occluding solar illumination.',
    hint: 'What blocks out the Sun during the daytime during a solar eclipse?',
    markingCriteria: 'Must select option B. Accurately identifies Sun-Moon-Earth alignment.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Confusing Solar Eclipse with Lunar Eclipse',
        explanation: 'Placing the Earth in the middle, which describes a lunar eclipse rather than a solar eclipse.',
        typicalReasoningQuote: 'Earth always casts the shadow during any eclipse.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-02-fu',
      questionText: 'During which phase of the lunar cycle can a total solar eclipse exclusively occur?',
      options: [
        { id: 'A', text: 'New Moon' },
        { id: 'B', text: 'Full Moon' },
        { id: 'C', text: 'First Quarter' },
        { id: 'D', text: 'Waxing Gibbous' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'New Moon',
      explanation: 'The Moon is situated directly on the Sun-facing side of Earth during the New Moon phase.'
    }
  },

  // -------------------------------------------------------------
  // 3. Earth Science: Atmospheric Layers and Ozone
  // -------------------------------------------------------------
  {
    id: 'gk-03',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Earth and Environmental Science',
    subtopic: 'Atmospheric Layers and the Stratospheric Ozone Layer',
    topicId: 'gk_environment',
    topicTitle: 'Ecology, Atmosphere, and Planet Earth',
    difficulty: 'Intermediate',
    learningObjective: 'Identify the layer of the atmosphere where the protective ozone layer resides and commercial airplanes fly.',
    questionText: 'Which layer of Earth\'s atmosphere contains the crucial ozone layer that absorbs harmful ultraviolet (UV) radiation, and provides calm, cloud-free air for commercial jet flights?',
    contextOrEquation: 'Troposphere (0-12 km, weather) -> Stratosphere (12-50 km, Ozone layer O₃) -> Mesosphere (50-85 km, meteors burn) -> Thermosphere (aurora, ISS)',
    options: [
      { id: 'A', text: 'Troposphere' },
      { id: 'B', text: 'Stratosphere' },
      { id: 'C', text: 'Mesosphere' },
      { id: 'D', text: 'Exosphere' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Stratosphere',
    conceptualExplanation: 'The stratosphere extends from approximately 12 km to 50 km above Earth\'s surface. It houses the ozone layer (O₃), which absorbs 97–99% of medium-frequency ultraviolet radiation (UV-B) from the Sun, shielding living tissue from DNA mutations and skin cancer. Because the stratosphere has stable, stratified air with minimal vertical convection or storm clouds, jet airliners cruise in its lower regions.',
    workedSolution: 'Step 1: Troposphere is the lowest weather layer. Step 2: The layer directly above troposphere is the stratosphere (12-50 km). Step 3: Ozone layer resides in the stratosphere. Select option B.',
    expectedReasoning: 'The ozone layer is concentrated within the stratosphere, providing critical shielding against ultraviolet solar radiation.',
    hint: 'It is the second layer of the atmosphere, located just above the troposphere where all ground weather happens.',
    markingCriteria: 'Must select option B (Stratosphere).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Confusing the Weather Layer with the Ozone Layer',
        explanation: 'Assuming the ozone layer is in the troposphere because humans breathe air in the troposphere.',
        typicalReasoningQuote: 'We breathe air in the troposphere so the ozone layer must be right there with us.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-03-fu',
      questionText: 'What international treaty, signed in 1987, successfully phased out chlorofluorocarbons (CFCs) to heal the Antarctic ozone hole?',
      options: [
        { id: 'A', text: 'The Montreal Protocol' },
        { id: 'B', text: 'The Paris Agreement' },
        { id: 'C', text: 'The Kyoto Protocol' },
        { id: 'D', text: 'The Geneva Convention' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'The Montreal Protocol',
      explanation: 'The Montreal Protocol on Substances that Deplete the Ozone Layer (1987) is universally recognized as the most successful global environmental treaty.'
    }
  },

  // -------------------------------------------------------------
  // 4. Scientific Discoveries: Penicillin and Antibiotics
  // -------------------------------------------------------------
  {
    id: 'gk-04',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Scientific Inventions and Discoveries',
    subtopic: 'Discovery of Penicillin by Alexander Fleming',
    topicId: 'gk_discoveries',
    topicTitle: 'Great Discoveries and Innovations in STEM',
    difficulty: 'Beginner',
    learningObjective: 'Identify Alexander Fleming and describe the serendipitous discovery of the first modern antibiotic, penicillin.',
    questionText: 'In 1928, Scottish microbiologist Alexander Fleming noticed that a petri dish of Staphylococcus bacteria had become contaminated with blue-green mold, and the bacteria immediately surrounding the mold had cleared and dissolved. What groundbreaking medical substance did he discover?',
    contextOrEquation: 'Penicillium notatum mold -> Secretion of antibacterial substance -> Penicillin (first mass-produced clinical antibiotic)',
    options: [
      { id: 'A', text: 'Insulin' },
      { id: 'B', text: 'Penicillin' },
      { id: 'C', text: 'Polio vaccine' },
      { id: 'D', text: 'Aspirin' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Penicillin',
    conceptualExplanation: 'Alexander Fleming discovered penicillin in 1928 at St. Mary\'s Hospital in London. A mold spore of Penicillium notatum had contaminated an open culture plate of Staphylococcus bacteria. Fleming observed a halo of bacterial lysis around the mold fungus. Howard Florey and Ernst Chain later purified penicillin for mass clinical use, revolutionizing modern medicine and saving millions of lives from bacterial infections.',
    workedSolution: 'Step 1: Identify key scientist: Alexander Fleming (1928). Step 2: Identify organism: Penicillium mold inhibiting bacteria. Step 3: The substance derived from Penicillium is the antibiotic penicillin.',
    expectedReasoning: 'Fleming\'s observation of Penicillium mold destroying bacterial cultures led to the discovery of penicillin.',
    hint: 'The name of the medicine comes directly from the mold fungus Penicillium.',
    markingCriteria: 'Must select option B (Penicillin).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Confusing Penicillin with Insulin',
        explanation: 'Confusing Banting and Best\'s discovery of insulin (1921) with Fleming\'s antibiotic discovery.',
        typicalReasoningQuote: 'Insulin was discovered in bacteria cultures in the 1920s.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-04-fu',
      questionText: 'Who discovered the smallpox vaccine in 1796, pioneering the field of immunology using cowpox lesions?',
      options: [
        { id: 'A', text: 'Edward Jenner' },
        { id: 'B', text: 'Louis Pasteur' },
        { id: 'C', text: 'Robert Koch' },
        { id: 'D', text: 'Joseph Lister' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Edward Jenner',
      explanation: 'Edward Jenner inoculated an 8-year-old boy with cowpox virus in 1796, creating the world\'s first successful vaccine against deadly smallpox.'
    }
  },

  // -------------------------------------------------------------
  // 5. Scientific Discoveries: DNA Double Helix Structure
  // -------------------------------------------------------------
  {
    id: 'gk-05',
    grade: 'Grade 9',
    subject: 'General Knowledge',
    topic: 'Scientific Inventions and Discoveries',
    subtopic: 'Discovery of the DNA Double Helix',
    topicId: 'gk_discoveries',
    topicTitle: 'Great Discoveries and Innovations in STEM',
    difficulty: 'Intermediate',
    learningObjective: 'Identify the key scientists and X-ray diffraction technique that unraveled the molecular structure of DNA.',
    questionText: 'Whose famous X-ray diffraction image, known as "Photo 51", provided the crucial empirical evidence that allowed James Watson and Francis Crick to decipher the double helix structure of DNA in 1953?',
    contextOrEquation: 'Photo 51: X-ray crystallography photograph of B-form DNA taken at King\'s College London (1952)',
    options: [
      { id: 'A', text: 'Marie Curie' },
      { id: 'B', text: 'Rosalind Franklin' },
      { id: 'C', text: 'Jane Goodall' },
      { id: 'D', text: 'Ada Lovelace' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Rosalind Franklin',
    conceptualExplanation: 'Rosalind Franklin, an expert physical chemist and X-ray crystallographer working at King\'s College London with Raymond Gosling, captured Photo 51 in May 1952. The clear X-shaped diffraction pattern provided critical mathematical parameters (helical pitch, diameter, antiparallel phosphate backbone on outside) that enabled Watson and Crick to construct their correct double helix model of DNA in 1953.',
    workedSolution: 'Step 1: Identify Photo 51 as the defining X-ray crystallographic proof of DNA\'s helical nature. Step 2: Connect Photo 51 to British crystallographer Rosalind Franklin. Step 3: Select option B.',
    expectedReasoning: 'Rosalind Franklin\'s X-ray crystallography photograph (Photo 51) revealed the helical geometry of DNA.',
    hint: 'She was a brilliant British chemist whose X-ray crystallography work at King\'s College London unlocked DNA.',
    markingCriteria: 'Must select option B (Rosalind Franklin).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Attributing All Early 20th Century Female Physics/Chemistry to Marie Curie',
        explanation: 'Selecting Marie Curie, who worked on radioactivity and discovered radium/polonium decades earlier.',
        typicalReasoningQuote: 'Marie Curie is the most famous woman scientist with X-rays.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-05-fu',
      questionText: 'What are the four chemical nitrogenous bases that form the complementary rungs of the DNA double helix?',
      options: [
        { id: 'A', text: 'Adenine (A), Thymine (T), Guanine (G), and Cytosine (C)' },
        { id: 'B', text: 'Glucose, Fructose, Sucrose, and Ribose' },
        { id: 'C', text: 'Methane, Ethane, Propane, and Butane' },
        { id: 'D', text: 'Leucine, Glycine, Valine, and Alanine' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Adenine (A), Thymine (T), Guanine (G), and Cytosine (C)',
      explanation: 'DNA consists of four bases pairing specifically via hydrogen bonds: Adenine pairs with Thymine (A-T), and Guanine pairs with Cytosine (G-C).'
    }
  },

  // -------------------------------------------------------------
  // 6. Space Exploration: Famous Missions and Telescopes
  // -------------------------------------------------------------
  {
    id: 'gk-06',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Space and Astronomy',
    subtopic: 'Space Telescopes and Deep Space Observation',
    topicId: 'gk_astronomy',
    topicTitle: 'Space, Astronomy, and Earth Science',
    difficulty: 'Intermediate',
    learningObjective: 'Identify the James Webb Space Telescope (JWST) and explain its mission observing infrared light from early galaxies.',
    questionText: 'Launched on Christmas Day 2021 and positioned at Lagrange Point 2 (L2) 1.5 million kilometers from Earth, what is humanity\'s premier space telescope, equipped with a 6.5-meter gold-coated beryllium mirror to observe the universe in infrared light?',
    contextOrEquation: 'Lagrange Point 2 (L2); Infrared astronomy; Successor to Hubble Space Telescope',
    options: [
      { id: 'A', text: 'Hubble Space Telescope' },
      { id: 'B', text: 'James Webb Space Telescope (JWST)' },
      { id: 'C', text: 'Kepler Space Telescope' },
      { id: 'D', text: 'Spitzer Space Telescope' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'James Webb Space Telescope (JWST)',
    conceptualExplanation: 'The James Webb Space Telescope (JWST) is the flagship infrared space observatory developed jointly by NASA, ESA, and CSA. Positioned at Sun-Earth L2, its massive 6.5-meter segmented primary mirror and cryogenic sunshield allow it to detect high-redshift light from the earliest stars and galaxies formed just 300 million years after the Big Bang, as well as characterize exoplanet atmospheres.',
    workedSolution: 'Step 1: Check launch date: December 2021. Step 2: Check location: L2 orbit. Step 3: Check specifications: 6.5 m gold segmented mirror for infrared. Step 4: Identifies the James Webb Space Telescope.',
    expectedReasoning: 'JWST is the next-generation infrared flagship observatory launched in late 2021 stationed at Lagrange Point 2.',
    hint: 'Named after a former NASA administrator who led during the Apollo era; launched in late 2021 with hexagonal gold mirrors.',
    markingCriteria: 'Must select option B.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Selecting the Hubble Space Telescope',
        explanation: 'Confusing JWST with the older Hubble telescope, which orbits in Low Earth Orbit (550 km) and was launched in 1990.',
        typicalReasoningQuote: 'Hubble is the main space telescope everyone knows about.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-06-fu',
      questionText: 'In 1969, who was the first human being to set foot on the surface of the Moon during the Apollo 11 mission?',
      options: [
        { id: 'A', text: 'Neil Armstrong' },
        { id: 'B', text: 'Buzz Aldrin' },
        { id: 'C', text: 'Yuri Gagarin' },
        { id: 'D', text: 'Michael Collins' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Neil Armstrong',
      explanation: 'On July 20, 1969, Neil Armstrong became the first human to step onto the lunar surface, uttering his famous words: "That\'s one small step for [a] man, one giant leap for mankind."'
    }
  },

  // -------------------------------------------------------------
  // 7. Technology: How Global Positioning System (GPS) Works
  // -------------------------------------------------------------
  {
    id: 'gk-07',
    grade: 'Grade 9',
    subject: 'General Knowledge',
    topic: 'Science in Daily Life and Technology',
    subtopic: 'GPS Principles, Trilateration, and Einstein\'s Relativity',
    topicId: 'gk_technology',
    topicTitle: 'Modern Technology, Computing, and Daily Science',
    difficulty: 'Intermediate',
    learningObjective: 'Explain how GPS receivers calculate precise 3D geographical coordinates through trilateration and relativistic time correction.',
    questionText: 'How many operational GPS satellites must a smartphone receiver detect at a minimum to determine an accurate three-dimensional position (latitude, longitude, altitude) and correct for receiver clock error?',
    contextOrEquation: 'Trilateration: 3 satellites determine (x, y, z) intersection of 3 spheres. 4th satellite solves for the smartphone\'s local clock bias (Δt).',
    options: [
      { id: 'A', text: 'At least 1 satellite' },
      { id: 'B', text: 'At least 2 satellites' },
      { id: 'C', text: 'At least 4 satellites' },
      { id: 'D', text: 'At least 24 satellites simultaneously' },
    ],
    correctAnswerId: 'C',
    correctAnswerText: 'At least 4 satellites',
    conceptualExplanation: 'GPS works by geometric trilateration. Each satellite broadcasts its precise orbit and the exact time of signal transmission using onboard atomic clocks. Distance = Speed of light × Time delay. Three satellites provide three intersecting spheres, pinpointing latitude, longitude, and elevation. However, smartphones have cheap quartz clocks that drift; a 4th satellite is mathematically required to resolve the 4 unknowns: x, y, z, and clock bias (t).',
    workedSolution: 'Step 1: Understand 3 unknowns for 3D coordinates: x (latitude), y (longitude), z (altitude). Step 2: The 4th unknown is receiver clock timing offset Δt. Step 3: Four independent equations from 4 separate satellites are required to solve 4 unknowns.',
    expectedReasoning: 'Four satellite signals are necessary to solve the system of equations for 3D spatial coordinates plus receiver clock bias.',
    hint: 'You need 3 satellites for spatial coordinates (latitude, longitude, altitude), plus 1 more to synchronize your phone\'s internal clock.',
    markingCriteria: 'Must select option C (At least 4 satellites).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Single Satellite Signal Misconception',
        explanation: 'Thinking a single satellite can measure exact position and distance directly.',
        typicalReasoningQuote: 'One satellite can take your GPS photo from space and know your location.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-07-fu',
      questionText: 'What branch of theoretical physics formulated by Albert Einstein must GPS satellites account for daily to prevent timing errors of ~38 microseconds per day?',
      options: [
        { id: 'A', text: 'Special and General Relativity (time dilation)' },
        { id: 'B', text: 'Quantum tunneling' },
        { id: 'C', text: 'String theory' },
        { id: 'D', text: 'Thermodynamics of black holes' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Special and General Relativity (time dilation)',
      explanation: 'Due to orbital speed (special relativity slows satellite clocks by 7 μs/day) and weaker gravity at altitude (general relativity speeds up satellite clocks by 45 μs/day), clocks tick 38 μs faster per day, requiring relativistic adjustments.'
    }
  },

  // -------------------------------------------------------------
  // 8. Environmental Science: Greenhouse Gases and Global Warming
  // -------------------------------------------------------------
  {
    id: 'gk-08',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Earth and Environmental Science',
    subtopic: 'Greenhouse Effect and Infrared Trapping',
    topicId: 'gk_environment',
    topicTitle: 'Ecology, Atmosphere, and Planet Earth',
    difficulty: 'Intermediate',
    learningObjective: 'Explain the physical mechanism of the natural greenhouse effect and identify the primary human-generated greenhouse gas.',
    questionText: 'What physical mechanism describes how greenhouse gases like carbon dioxide (CO₂) and methane (CH₄) warm Earth\'s lower atmosphere?',
    contextOrEquation: 'Solar shortwave UV/visible radiation passes through atmosphere -> Earth absorbs and re-emits as longwave infrared (thermal heat) -> Greenhouse gas molecules absorb and re-radiate infrared in all directions.',
    options: [
      { id: 'A', text: 'They reflect all incoming sunlight back into outer space before it reaches the ground.' },
      { id: 'B', text: 'They allow incoming visible solar radiation to pass through, but absorb outgoing longwave infrared radiation emitted by Earth and re-radiate it back downwards.' },
      { id: 'C', text: 'They create a solid glass dome in the stratosphere that prevents wind from escaping.' },
      { id: 'D', text: 'They react with atmospheric nitrogen to generate open chemical fires.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'They allow incoming visible solar radiation to pass through, but absorb outgoing longwave infrared radiation emitted by Earth and re-radiate it back downwards.',
    conceptualExplanation: 'Greenhouse gases are transparent to incoming shortwave solar radiation (visible light), allowing it to heat Earth\'s surface. The warmed ground re-radiates this energy at longer, infrared wavelengths. Polyatomic molecules like CO₂, CH₄, and H₂O vapor have vibrational modes that absorb this infrared radiation and re-emit it in all directions, trapping heat in the troposphere.',
    workedSolution: 'Step 1: Solar radiation enters as shortwave visible light. Step 2: Earth absorbs light and radiates back longwave infrared (heat). Step 3: Greenhouse gases absorb this infrared heat and re-radiate it back to Earth.',
    expectedReasoning: 'Greenhouse gases selectively absorb longwave terrestrial infrared radiation and re-radiate thermal energy toward the surface.',
    hint: 'Shortwave sunlight gets in easily, but longwave infrared heat struggles to get back out.',
    markingCriteria: 'Must select option B.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Confusing Greenhouse Warming with Solar Reflection',
        explanation: 'Thinking greenhouse gases block incoming sunlight, which would cause cooling rather than warming.',
        typicalReasoningQuote: 'Greenhouse gases catch the sunlight directly in the upper sky.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-08-fu',
      questionText: 'Which greenhouse gas is emitted in large quantities by livestock digestive systems (enteric fermentation) and rice paddy cultivation?',
      options: [
        { id: 'A', text: 'Methane (CH₄)' },
        { id: 'B', text: 'Argon (Ar)' },
        { id: 'C', text: 'Helium (He)' },
        { id: 'D', text: 'Oxygen (O₂)' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Methane (CH₄)',
      explanation: 'Methanogenic anaerobic bacteria in the rumen of ruminant livestock and submerged waterlogged rice paddies produce significant quantities of methane (CH₄).'
    }
  },

  // -------------------------------------------------------------
  // 9. Earth Science: Plate Tectonics and Continental Drift
  // -------------------------------------------------------------
  {
    id: 'gk-09',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Earth and Environmental Science',
    subtopic: 'Plate Tectonics, Subduction, and the Ring of Fire',
    topicId: 'gk_environment',
    topicTitle: 'Ecology, Atmosphere, and Planet Earth',
    difficulty: 'Intermediate',
    learningObjective: 'Identify the Ring of Fire and describe how tectonic plate boundaries trigger earthquakes and volcanism.',
    questionText: 'What horseshoe-shaped geological basin encircling the Pacific Ocean experiences over 75% of the world\'s active volcanoes and 90% of all earthquakes due to active plate subduction zones?',
    contextOrEquation: 'Pacific Plate subducting beneath surrounding continental and oceanic plates -> Pacific Ring of Fire',
    options: [
      { id: 'A', text: 'The Mid-Atlantic Ridge' },
      { id: 'B', text: 'The Pacific Ring of Fire' },
      { id: 'C', text: 'The Great Rift Valley' },
      { id: 'D', text: 'The Bermuda Triangle' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'The Pacific Ring of Fire',
    conceptualExplanation: 'The Pacific Ring of Fire is a 40,000-kilometer path along the edges of the Pacific Ocean basin characterized by active tectonic plate boundaries (subduction zones and transform faults). Denser oceanic plates are driven beneath lighter continental plates, melting rock into magma and creating deep ocean trenches, volcanic island arcs, and recurrent megathrust earthquakes.',
    workedSolution: 'Step 1: Basin encircles the Pacific Ocean. Step 2: Generates >75% of volcanoes and 90% of earthquakes. Step 3: Named the "Ring of Fire".',
    expectedReasoning: 'Subduction along the margins of the Pacific Plate creates the volcanically and seismically active Pacific Ring of Fire.',
    hint: 'It is a famous ring named after fire encircling the Pacific Ocean.',
    markingCriteria: 'Must select option B (The Pacific Ring of Fire).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Selecting the Mid-Atlantic Ridge',
        explanation: 'Confusing the divergent boundary in the Atlantic Ocean with the convergent subduction zone encircling the Pacific.',
        typicalReasoningQuote: 'The Atlantic ocean ridge has underwater volcanoes so that is the ring of fire.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-09-fu',
      questionText: 'Who proposed the scientific hypothesis of Continental Drift in 1912, suggesting all continents once formed the supercontinent Pangaea?',
      options: [
        { id: 'A', text: 'Alfred Wegener' },
        { id: 'B', text: 'Charles Darwin' },
        { id: 'C', text: 'James Hutton' },
        { id: 'D', text: 'Charles Lyell' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Alfred Wegener',
      explanation: 'German meteorologist and geophysicist Alfred Wegener published the Continental Drift hypothesis in 1912, supported by matching fossil and rock strata across separated continents.'
    }
  },

  // -------------------------------------------------------------
  // 10. Technology: Fiber Optics and Total Internal Reflection
  // -------------------------------------------------------------
  {
    id: 'gk-10',
    grade: 'Grade 9',
    subject: 'General Knowledge',
    topic: 'Science in Daily Life and Technology',
    subtopic: 'Fiber Optic Telecommunications and Physics of TIR',
    topicId: 'gk_technology',
    topicTitle: 'Modern Technology, Computing, and Daily Science',
    difficulty: 'Intermediate',
    learningObjective: 'Explain how high-speed fiber optic internet cables transmit data using total internal reflection.',
    questionText: 'High-speed undersea internet cables transmit terabits of data per second across oceans using pulses of laser light inside flexible glass fiber strands. What fundamental optical physics principle keeps the light trapped inside the glass core without escaping?',
    contextOrEquation: 'Glass core (n_core) > Glass cladding (n_cladding); Angle of incidence > critical angle -> Total Internal Reflection (TIR)',
    options: [
      { id: 'A', text: 'Total Internal Reflection' },
      { id: 'B', text: 'Diffuse reflection from silver mirror paint' },
      { id: 'C', text: 'Photoelectric electron conduction' },
      { id: 'D', text: 'Magnetic shielding' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Total Internal Reflection',
    conceptualExplanation: 'Optical fibers consist of a high refractive index central glass core surrounded by a lower refractive index glass cladding. Light is introduced into the core at an angle greater than the critical angle. Because light is traveling from an optically denser to rarer medium at an angle exceeding the critical angle, 100% of the light is reflected back inside the core with zero refractive loss (total internal reflection).',
    workedSolution: 'Step 1: Light is transmitted through a glass core surrounded by lower-index cladding. Step 2: When angle of incidence exceeds critical angle, light cannot escape into the cladding. Step 3: It undergoes successive total internal reflections along the entire fiber length.',
    expectedReasoning: 'Light pulses remain confined inside the fiber core due to repeated total internal reflection at the core-cladding interface.',
    hint: 'When light hits a boundary at a steep angle from a denser medium, it bounces completely back inside: Total ... Reflection.',
    markingCriteria: 'Must select option A (Total Internal Reflection).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Believing Wires Have Internal Mirrors Painted on Them',
        explanation: 'Assuming fibers are hollow tubes coated with physical metallic mirror paint.',
        typicalReasoningQuote: 'The inside of the wire is lined with silver mirrors so the light bounces off.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-10-fu',
      questionText: 'Why do fiber optic internet signals travel with significantly less attenuation (signal loss) and higher bandwidth than electrical signals in copper wires?',
      options: [
        { id: 'A', text: 'Photons suffer zero electrical resistance (Ohmic heating) and are immune to electromagnetic interference.' },
        { id: 'B', text: 'Light travels faster than the speed of light in glass.' },
        { id: 'C', text: 'Glass conducts electricity better than copper.' },
        { id: 'D', text: 'Copper cables melt when transmitting digital numbers.' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Photons suffer zero electrical resistance (Ohmic heating) and are immune to electromagnetic interference.',
      explanation: 'Photons do not experience electrical resistance or generate electromagnetic cross-talk, enabling high bandwidth over vast distances.'
    }
  },

  // -------------------------------------------------------------
  // 11. Scientific Inventions: The Electric Generator & Faraday
  // -------------------------------------------------------------
  {
    id: 'gk-11',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Scientific Inventions and Discoveries',
    subtopic: 'Electromagnetic Induction and Michael Faraday',
    topicId: 'gk_discoveries',
    topicTitle: 'Great Discoveries and Innovations in STEM',
    difficulty: 'Intermediate',
    learningObjective: 'Identify Michael Faraday and describe how electromagnetic induction converts mechanical motion into electricity.',
    questionText: 'In 1831, which scientist discovered that moving a magnet relative to a closed coil of copper wire induces an electric current, laying the foundation for modern power plants, electric generators, and transformers?',
    contextOrEquation: 'Faraday\'s Law of Electromagnetic Induction: Induced EMF = -N (dΦ/dt)',
    options: [
      { id: 'A', text: 'Thomas Edison' },
      { id: 'B', text: 'Michael Faraday' },
      { id: 'C', text: 'Alexander Graham Bell' },
      { id: 'D', text: 'James Watt' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Michael Faraday',
    conceptualExplanation: 'Michael Faraday discovered electromagnetic induction in 1831. He demonstrated that changing the magnetic flux through a conducting circuit induces an electromotive force (EMF) and drives an electric current. This foundational discovery enabled mechanical energy (from steam turbines, hydroelectric dams, or wind turbines) to be converted into large-scale electrical energy.',
    workedSolution: 'Step 1: Focus on the discovery: electromagnetic induction (magnet + coil = electric current). Step 2: The scientist who discovered this in 1831 was Michael Faraday. Step 3: Match to option B.',
    expectedReasoning: 'Michael Faraday established the law of electromagnetic induction, creating the first dynamo generator.',
    hint: 'He is the English scientist whose law is called "Faraday\'s Law of Induction".',
    markingCriteria: 'Must select option B (Michael Faraday).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Attributing All Electricity Inventions to Thomas Edison',
        explanation: 'Selecting Edison, who commercialized the incandescent light bulb and DC power grids, but did not discover induction.',
        typicalReasoningQuote: 'Edison invented electricity and light bulbs.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-11-fu',
      questionText: 'Which visionary engineer developed alternating current (AC) motors and multiphase power systems that triumphed over Edison\'s direct current (DC)?',
      options: [
        { id: 'A', text: 'Nikola Tesla' },
        { id: 'B', text: 'Guglielmo Marconi' },
        { id: 'C', text: 'Henry Ford' },
        { id: 'D', text: 'Samuel Morse' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Nikola Tesla',
      explanation: 'Nikola Tesla patented the AC induction motor and polyphase transmission system, backed by George Westinghouse, winning the "War of the Currents".'
    }
  },

  // -------------------------------------------------------------
  // 12. Geography & Earth Systems: Ocean Currents and Climate
  // -------------------------------------------------------------
  {
    id: 'gk-12',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Earth and Environmental Science',
    subtopic: 'Thermohaline Circulation and Ocean Currents',
    topicId: 'gk_environment',
    topicTitle: 'Ecology, Atmosphere, and Planet Earth',
    difficulty: 'Intermediate',
    learningObjective: 'Explain how the Gulf Stream warm ocean current moderates the climate of Western Europe.',
    questionText: 'Why does Western Europe (such as the United Kingdom and Norway) enjoy a much milder, temperate climate compared to regions at the exact same northern latitude in Eastern Canada (such as Labrador)?',
    contextOrEquation: 'Gulf Stream / North Atlantic Drift carries warm tropical water from the Gulf of Mexico across the Atlantic to Western Europe.',
    options: [
      { id: 'A', text: 'The warm Gulf Stream ocean current transports tropical thermal energy northeastward across the Atlantic.' },
      { id: 'B', text: 'Europe is closer to the equator than Canada.' },
      { id: 'C', text: 'Volcanoes in Iceland continuously heat the air across all of Europe.' },
      { id: 'D', text: 'The Earth tilts closer to the Sun on the European side.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'The warm Gulf Stream ocean current transports tropical thermal energy northeastward across the Atlantic.',
    conceptualExplanation: 'The Gulf Stream and its continuation, the North Atlantic Drift, is a powerful warm western boundary ocean current driven by wind patterns and thermohaline density gradients. It transports vast quantities of warm tropical water from the Caribbean and Gulf of Mexico toward Western Europe, releasing heat into prevailing westerly winds and moderating winter temperatures.',
    workedSolution: 'Step 1: Check latitude: London and Labrador are at similar latitudes (~51-54° N). Step 2: Note climate disparity: London is temperate while Labrador is subarctic/frozen. Step 3: Identify the oceanic heat conveyor: the warm Gulf Stream / North Atlantic Drift.',
    expectedReasoning: 'Heat transport via the warm Gulf Stream and North Atlantic Current keeps Western European maritime climates significantly milder.',
    hint: 'What warm ocean current flows from the Gulf of Mexico across the Atlantic Ocean toward Europe?',
    markingCriteria: 'Must select option A.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Assuming Latitude Disparity',
        explanation: 'Failing to realize that the UK is at the same latitude as sub-polar regions of Canada.',
        typicalReasoningQuote: 'England is much closer to the equator so of course it is warmer.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-12-fu',
      questionText: 'What cyclical ocean-atmosphere phenomenon in the tropical Pacific Ocean temporarily warms global sea surface temperatures and disrupts global weather patterns?',
      options: [
        { id: 'A', text: 'El Niño (ENSO)' },
        { id: 'B', text: 'Tsunamis' },
        { id: 'C', text: 'The Coriolis Effect' },
        { id: 'D', text: 'Monsoon inversion' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'El Niño (ENSO)',
      explanation: 'El Niño (the warm phase of the El Niño-Southern Oscillation) features weakened trade winds and unusually warm water in the central and eastern tropical Pacific.'
    }
  },

  // -------------------------------------------------------------
  // 13. Astronomy: Life Cycle of Stars
  // -------------------------------------------------------------
  {
    id: 'gk-13',
    grade: 'Grade 9',
    subject: 'General Knowledge',
    topic: 'Space and Astronomy',
    subtopic: 'Stellar Evolution and Supernovae',
    topicId: 'gk_astronomy',
    topicTitle: 'Space, Astronomy, and Earth Science',
    difficulty: 'Intermediate',
    learningObjective: 'Describe the life cycle and ultimate fate of a medium-mass star like our Sun compared to a massive star.',
    questionText: 'What will be the final remnants and end stage of our Sun when it exhausts all its hydrogen and helium nuclear fuel in approximately 5 billion years?',
    contextOrEquation: 'Main sequence star (~1 solar mass) -> Red Giant -> Planetary Nebula -> White Dwarf (no supernova or black hole)',
    options: [
      { id: 'A', text: 'It will explode in a supernova and collapse into a supermassive black hole.' },
      { id: 'B', text: 'It will expand into a Red Giant, eject its outer gas layers as a Planetary Nebula, and leave behind a dense White Dwarf core.' },
      { id: 'C', text: 'It will turn into a green comet and fly away from the galaxy.' },
      { id: 'D', text: 'It will immediately cool down into a hollow block of ice.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'It will expand into a Red Giant, eject its outer gas layers as a Planetary Nebula, and leave behind a dense White Dwarf core.',
    conceptualExplanation: 'Our Sun is an average-mass G-type main sequence star (~1 solar mass). Stars below the Chandrasekhar limit (~1.44 solar masses) do not possess sufficient gravitational force to trigger a supernova. Instead, after fusing hydrogen in its core, the Sun will expand into a Red Giant, fuse helium into carbon and oxygen, gently shed its outer gaseous envelope as a planetary nebula, and leave an Earth-sized, carbon-oxygen degenerate white dwarf core.',
    workedSolution: 'Step 1: Check solar mass: ~1 M_sun. Step 2: Black holes and supernovae require progenitor stars greater than ~8-20 solar masses. Step 3: Medium-mass stars end as white dwarfs surrounded by a planetary nebula.',
    expectedReasoning: 'Stars with masses comparable to the Sun culminate as red giants, shed a planetary nebula, and leave a cooling white dwarf.',
    hint: 'Our Sun is not heavy enough to form a black hole; it ends as a white dwarf.',
    markingCriteria: 'Must select option B.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Believing All Dying Stars Become Black Holes',
        explanation: 'Assuming every star ends with a supernova explosion and black hole.',
        typicalReasoningQuote: 'All stars blow up into supernovas and turn into black holes when they die.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-13-fu',
      questionText: 'What nuclear reaction powers our Sun during its stable main-sequence stage?',
      options: [
        { id: 'A', text: 'Nuclear fusion of hydrogen nuclei into helium' },
        { id: 'B', text: 'Nuclear fission of uranium into barium' },
        { id: 'C', text: 'Combustion of kerosene and oxygen' },
        { id: 'D', text: 'Radioactive decay of radium' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Nuclear fusion of hydrogen nuclei into helium',
      explanation: 'Under extreme core temperatures and pressures, four hydrogen protons fuse into one helium nucleus via the proton-proton chain, releasing enormous energy.'
    }
  },

  // -------------------------------------------------------------
  // 14. Daily Science: Clean Water Purification & Reverse Osmosis
  // -------------------------------------------------------------
  {
    id: 'gk-14',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Science in Daily Life and Technology',
    subtopic: 'Water Purification and Desalination Technologies',
    topicId: 'gk_technology',
    topicTitle: 'Modern Technology, Computing, and Daily Science',
    difficulty: 'Intermediate',
    learningObjective: 'Explain how Reverse Osmosis (RO) purifies drinking water by reversing natural osmotic flow under external pressure.',
    questionText: 'How does a household or municipal Reverse Osmosis (RO) water filtration system desalinate water and remove microscopic contaminants?',
    contextOrEquation: 'Applied hydrostatic pressure > Osmotic pressure -> Water molecules are forced backwards through a semipermeable membrane, leaving salts and contaminants behind.',
    options: [
      { id: 'A', text: 'It applies external pressure greater than osmotic pressure, forcing water molecules backwards through a semipermeable membrane while blocking dissolved salts and microbes.' },
      { id: 'B', text: 'It boils the water into steam and freezes it with liquid nitrogen.' },
      { id: 'C', text: 'It uses giant magnets to attract all water molecules while repelling all germs.' },
      { id: 'D', text: 'It adds chlorine bleach until all dissolved salts dissolve into air.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'It applies external pressure greater than osmotic pressure, forcing water molecules backwards through a semipermeable membrane while blocking dissolved salts and microbes.',
    conceptualExplanation: 'In natural osmosis, water flows spontaneously from a dilute solution to a concentrated solution across a semipermeable membrane. Reverse Osmosis (RO) applies high mechanical pressure to the concentrated (contaminated/saline) side, overcoming natural osmotic pressure. This forces pure H₂O molecules backwards through microscopic pore membranes (~0.0001 microns), leaving dissolved salts, heavy metals, and bacteria behind on the rejected brine side.',
    workedSolution: 'Step 1: Recall natural osmosis: water moves towards higher solute concentration. Step 2: "Reverse" osmosis requires high external pressure. Step 3: Pure water is forced through a semipermeable membrane, blocking dissolved impurities.',
    expectedReasoning: 'Applying pressure exceeding osmotic pressure drives water through a semipermeable membrane against the concentration gradient.',
    hint: 'Notice the word "Reverse": pressure forces water backwards through a microscopic filter membrane.',
    markingCriteria: 'Must select option A.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Magnetic Water Purification Fallacy',
        explanation: 'Believing water is magnetic and can be sorted by magnets.',
        typicalReasoningQuote: 'Magnets pull clean water through the filter.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-14-fu',
      questionText: 'Which halogen chemical is universally added in municipal water treatment plants to kill residual pathogenic bacteria and viruses?',
      options: [
        { id: 'A', text: 'Chlorine' },
        { id: 'B', text: 'Neon' },
        { id: 'C', text: 'Helium' },
        { id: 'D', text: 'Sodium' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Chlorine',
      explanation: 'Chlorination (forming hypochlorous acid) destroys microbial cell walls and enzymes, providing long-lasting disinfection in tap water pipelines.'
    }
  },

  // -------------------------------------------------------------
  // 15. Technology: Artificial Intelligence and Machine Learning
  // -------------------------------------------------------------
  {
    id: 'gk-15',
    grade: 'Grade 9',
    subject: 'General Knowledge',
    topic: 'Science in Daily Life and Technology',
    subtopic: 'Machine Learning and Artificial Neural Networks',
    topicId: 'gk_technology',
    topicTitle: 'Modern Technology, Computing, and Daily Science',
    difficulty: 'Intermediate',
    learningObjective: 'Define Machine Learning and explain how Artificial Neural Networks learn patterns from data.',
    questionText: 'What fundamental characteristic distinguishes modern Machine Learning (such as deep neural networks) from traditional rule-based computer programming?',
    contextOrEquation: 'Traditional programming: Humans write explicit rules + data -> Output. Machine Learning: Algorithms adjust internal statistical weights based on data + desired output -> Learned model/rules.',
    options: [
      { id: 'A', text: 'Instead of following hand-coded explicit rules for every scenario, machine learning algorithms train on vast datasets to learn underlying patterns and adjust statistical weights.' },
      { id: 'B', text: 'Machine learning computers possess biological human brain cells and emotions.' },
      { id: 'C', text: 'Machine learning does not use electricity or digital silicon chips.' },
      { id: 'D', text: 'Traditional programs learn from mistakes, whereas AI programs can never make errors.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Instead of following hand-coded explicit rules for every scenario, machine learning algorithms train on vast datasets to learn underlying patterns and adjust statistical weights.',
    conceptualExplanation: 'In traditional software engineering, programmers manually specify explicit logical if-then rules for every condition. In machine learning, algorithms (such as deep artificial neural networks) are fed large datasets. During the training phase (e.g., using backpropagation and gradient descent), the model automatically optimizes millions or billions of internal parameters (weights and biases) to accurately generalize and recognize patterns in novel inputs.',
    workedSolution: 'Step 1: Traditional programming = hand-coded explicit rules. Step 2: Machine learning = learning statistical patterns directly from data. Step 3: Match description to option A.',
    expectedReasoning: 'Machine learning adjusts statistical model parameters from training data rather than relying on exhaustive hand-coded if-then rules.',
    hint: 'Does a developer write every single rule by hand, or does the AI learn statistical patterns from examples?',
    markingCriteria: 'Must select option A.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Anthropomorphic Fallacy (Sentient AI)',
        explanation: 'Believing AI has human emotions or biological consciousness rather than mathematical statistical models.',
        typicalReasoningQuote: 'AI has real feelings and thinks with its own biological mind.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-15-fu',
      questionText: 'Who is widely regarded as the "Father of Computer Science and Artificial Intelligence" for conceiving the Universal Turing Machine and the Turing Test?',
      options: [
        { id: 'A', text: 'Alan Turing' },
        { id: 'B', text: 'Bill Gates' },
        { id: 'C', text: 'Steve Jobs' },
        { id: 'D', text: 'Tim Berners-Lee' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Alan Turing',
      explanation: 'British mathematician Alan Turing developed the conceptual foundations of theoretical computing (Turing machines), broke the Enigma code, and introduced the Turing Test for machine intelligence.'
    }
  },

  // -------------------------------------------------------------
  // 16. Renewable Energy: Solar Photovoltaics vs Wind Energy
  // -------------------------------------------------------------
  {
    id: 'gk-16',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Earth and Environmental Science',
    subtopic: 'Renewable Energy Technologies and the Photoelectric Effect',
    topicId: 'gk_environment',
    topicTitle: 'Ecology, Atmosphere, and Planet Earth',
    difficulty: 'Beginner',
    learningObjective: 'Describe how solar photovoltaic panels convert sunlight directly into electricity via the photovoltaic effect.',
    questionText: 'How do solar photovoltaic (PV) panels generate electricity when exposed to sunlight?',
    contextOrEquation: 'Photons strike semiconductor silicon p-n junction -> Excite valence electrons into conduction band -> Internal electric field creates DC current.',
    options: [
      { id: 'A', text: 'Sunlight heats water inside the panel to turn a miniature steam turbine.' },
      { id: 'B', text: 'Photons of light knock electrons free from silicon atoms in the semiconductor, generating an electric current (the photovoltaic effect).' },
      { id: 'C', text: 'Solar panels collect oxygen from the sun and burn it as fuel.' },
      { id: 'D', text: 'Solar panels reflect sunlight onto neighboring houses to power them with reflected heat.' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Photons of light knock electrons free from silicon atoms in the semiconductor, generating an electric current (the photovoltaic effect).',
    conceptualExplanation: 'Solar panels operate on the photovoltaic effect. When photons of light with energy greater than the bandgap hit the semiconductor silicon wafer, their energy is absorbed and excites bound electrons into the conduction band. The internal electric field at the p-n junction drives these free electrons in a single direction, establishing a direct electric current (DC).',
    workedSolution: 'Step 1: Identify that PV panels are solid-state semiconductors (no moving parts or steam). Step 2: Light photons liberate electrons from silicon atoms. Step 3: Flow of liberated electrons constitutes electric current.',
    expectedReasoning: 'Photons hitting silicon semiconductors liberate electrons to produce an electric current via the photovoltaic effect.',
    hint: 'There are no boiling water pipes or spinning engines inside flat solar panels; light knocks electrons loose directly.',
    markingCriteria: 'Must select option B.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Confusing Solar Photovoltaic with Solar Thermal Steam Turbines',
        explanation: 'Thinking rooftop black panels contain boiling water and miniature turbines.',
        typicalReasoningQuote: 'Solar panels get hot and boil water inside to spin tiny generators.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-16-fu',
      questionText: 'What type of electrical current is produced natively by solar panels and batteries, which an inverter must convert into Alternating Current (AC) for household appliances?',
      options: [
        { id: 'A', text: 'Direct Current (DC)' },
        { id: 'B', text: 'Three-Phase Current' },
        { id: 'C', text: 'Static Electrostatic Charge' },
        { id: 'D', text: 'High-frequency microwave current' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Direct Current (DC)',
      explanation: 'Solar panels and chemical batteries output Direct Current (DC), flowing in a single continuous direction.'
    }
  },

  // -------------------------------------------------------------
  // 17. Scientific Discoveries: Vaccination and Eradication of Smallpox
  // -------------------------------------------------------------
  {
    id: 'gk-17',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Scientific Inventions and Discoveries',
    subtopic: 'Global Disease Eradication Milestones',
    topicId: 'gk_discoveries',
    topicTitle: 'Great Discoveries and Innovations in STEM',
    difficulty: 'Beginner',
    learningObjective: 'Identify smallpox as the first and only human infectious disease officially eradicated from the planet through global vaccination.',
    questionText: 'Which devastating human viral disease, which killed hundreds of millions of people throughout human history, was officially declared completely eradicated worldwide by the World Health Organization (WHO) in 1980 through global vaccination campaigns?',
    contextOrEquation: 'Variola virus (Smallpox) -> Global bifurcated needle vaccination campaign -> 1980 WHO certification of total global eradication',
    options: [
      { id: 'A', text: 'Smallpox' },
      { id: 'B', text: 'Influenza' },
      { id: 'C', text: 'Malaria' },
      { id: 'D', text: 'Tuberculosis' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Smallpox',
    conceptualExplanation: 'Smallpox, caused by the Variola virus, was one of history\'s deadliest scourges with a 30% fatality rate. Because smallpox had no animal reservoir, produced obvious pustular symptoms, and was combated with an effective heat-stable vaccine, the WHO\'s coordinated global ring-vaccination campaign succeeded in completely eradicating it from the human population by 1980.',
    workedSolution: 'Step 1: Check disease status: officially declared totally eradicated in 1980. Step 2: The only human infectious disease successfully eradicated to date is smallpox (rinderpest in cattle was also eradicated). Step 3: Match to option A.',
    expectedReasoning: 'Smallpox is the historic milestone of global public health as the only human infectious pathogen eradicated by vaccination.',
    hint: 'It caused painful skin pustules and pox scars, and was officially stamped out worldwide by 1980.',
    markingCriteria: 'Must select option A (Smallpox).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Believing the Flu or Colds Have Been Eradicated',
        explanation: 'Failing to realize that influenza mutates rapidly and circulates every winter season.',
        typicalReasoningQuote: 'Flu shots eradicated influenza years ago.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-17-fu',
      questionText: 'Who developed the first safe and effective injectable polio vaccine in the 1950s and famously chose not to patent it so children worldwide could receive it affordably?',
      options: [
        { id: 'A', text: 'Jonas Salk' },
        { id: 'B', text: 'Albert Sabin' },
        { id: 'C', text: 'Louis Pasteur' },
        { id: 'D', text: 'Alexander Fleming' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Jonas Salk',
      explanation: 'Dr. Jonas Salk developed the inactivated polio vaccine in 1955. When asked who owned the patent, he famously replied: "The people, I would say. There is no patent. Could you patent the sun?"'
    }
  },

  // -------------------------------------------------------------
  // 18. Earth Systems: The Water Cycle and Cloud Formation
  // -------------------------------------------------------------
  {
    id: 'gk-18',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Earth and Environmental Science',
    subtopic: 'Thermodynamics of the Hydrological Cycle',
    topicId: 'gk_environment',
    topicTitle: 'Ecology, Atmosphere, and Planet Earth',
    difficulty: 'Beginner',
    learningObjective: 'Identify the thermodynamic phase changes in the water cycle: evaporation, condensation, and precipitation.',
    questionText: 'When warm, moist air rises into the higher atmosphere, it expands and cools. What physical process causes the invisible water vapor to transform into tiny visible liquid water droplets, forming clouds?',
    contextOrEquation: 'Water vapor (gas) cools to its dew point -> Condensation onto microscopic aerosol particles (cloud condensation nuclei) -> Clouds (liquid water droplets/ice crystals)',
    options: [
      { id: 'A', text: 'Evaporation' },
      { id: 'B', text: 'Condensation' },
      { id: 'C', text: 'Transpiration' },
      { id: 'D', text: 'Sublimation' },
    ],
    correctAnswerId: 'B',
    correctAnswerText: 'Condensation',
    conceptualExplanation: 'Clouds are NOT made of water vapor (water vapor is an invisible gas). When rising air cools below its dew point temperature, the saturation vapor pressure drops and water molecules lose kinetic energy. They undergo condensation—transitioning from gaseous water vapor into microscopic liquid water droplets or ice crystals suspended around airborne dust and salt particles (cloud condensation nuclei).',
    workedSolution: 'Step 1: Gas (water vapor) transitions to liquid (cloud droplets). Step 2: Phase change from gas to liquid is called condensation. Step 3: Match to option B.',
    expectedReasoning: 'Cooling of air below the dew point causes gaseous water vapor to condense into liquid cloud droplets.',
    hint: 'Think about water droplets that form on the cold outside of a glass of ice water on a humid day: that is ...?',
    markingCriteria: 'Must select option B (Condensation).',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'A',
        misconceptionTitle: 'Believing Clouds Are Made of Gaseous Water Vapor',
        explanation: 'Failing to realize that water vapor is transparent and invisible; visible clouds are made of liquid droplets or ice crystals.',
        typicalReasoningQuote: 'Clouds are just rising steam from evaporation.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-18-fu',
      questionText: 'What term describes the release of water vapor into the atmosphere directly from the pores (stomata) of plant leaves?',
      options: [
        { id: 'A', text: 'Transpiration' },
        { id: 'B', text: 'Precipitation' },
        { id: 'C', text: 'Infiltration' },
        { id: 'D', text: 'Percolation' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Transpiration',
      explanation: 'Transpiration is the biological process where plant roots absorb water from soil and release it as vapor through leaf stomata.'
    }
  },

  // -------------------------------------------------------------
  // 19. World Geography: Major Oceans and The Deepest Point
  // -------------------------------------------------------------
  {
    id: 'gk-19',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'World Geography and Earth Systems',
    subtopic: 'Oceanography and Challenger Deep',
    topicId: 'gk_geography',
    topicTitle: 'World Geography, Landforms, and Exploration',
    difficulty: 'Beginner',
    learningObjective: 'Identify the deepest oceanic trench on Earth and the ocean in which it is located.',
    questionText: 'What is the deepest known location in Earth\'s oceans, plunging to an extreme depth of nearly 11,000 meters (36,000 feet) below sea level?',
    contextOrEquation: 'Challenger Deep, located at the southern end of the Mariana Trench in the western Pacific Ocean (~10,994 m depth)',
    options: [
      { id: 'A', text: 'The Mariana Trench (Challenger Deep) in the Pacific Ocean' },
      { id: 'B', text: 'The Puerto Rico Trench in the Atlantic Ocean' },
      { id: 'C', text: 'The Java Trench in the Indian Ocean' },
      { id: 'D', text: 'The Grand Canyon in North America' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'The Mariana Trench (Challenger Deep) in the Pacific Ocean',
    conceptualExplanation: 'Challenger Deep in the Mariana Trench, situated in the western Pacific Ocean east of the Philippines, is the deepest surveyed point in Earth\'s seabed. Reaching a depth of approximately 10,994 meters (nearly 11 km), it is so deep that if Mount Everest (8,849 m) were placed at the bottom, its summit would still be submerged under more than 2 kilometers of water.',
    workedSolution: 'Step 1: Deepest trench on Earth is the Mariana Trench. Step 2: Specific deepest abyss is Challenger Deep. Step 3: Located in the Pacific Ocean.',
    expectedReasoning: 'Challenger Deep within the Mariana Trench in the Pacific Ocean is Earth\'s deepest oceanic point at ~11,000 m.',
    hint: 'It is a trench in the Pacific Ocean that could easily submerge Mount Everest with room to spare.',
    markingCriteria: 'Must select option A.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Selecting Atlantic Ocean Trenches',
        explanation: 'Confusing the Atlantic\'s Puerto Rico Trench (~8,376 m) with the far deeper Pacific Mariana Trench (~10,994 m).',
        typicalReasoningQuote: 'The Atlantic ocean is where the Titanic sank so it has the deepest trenches.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-19-fu',
      questionText: 'What is the world\'s largest ocean by surface area and volume, covering more area than all of Earth\'s landmasses combined?',
      options: [
        { id: 'A', text: 'The Pacific Ocean' },
        { id: 'B', text: 'The Atlantic Ocean' },
        { id: 'C', text: 'The Indian Ocean' },
        { id: 'D', text: 'The Arctic Ocean' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'The Pacific Ocean',
      explanation: 'The Pacific Ocean spans over 165 million square kilometers, making it larger than all the continental land area on Earth combined.'
    }
  },

  // -------------------------------------------------------------
  // 20. Technology: The Internet and World Wide Web Origin
  // -------------------------------------------------------------
  {
    id: 'gk-20',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Science in Daily Life and Technology',
    subtopic: 'Invention of the World Wide Web at CERN',
    topicId: 'gk_technology',
    topicTitle: 'Modern Technology, Computing, and Daily Science',
    difficulty: 'Beginner',
    learningObjective: 'Distinguish the Internet from the World Wide Web and identify Tim Berners-Lee as the inventor of the Web.',
    questionText: 'In 1989, while working at the CERN physics research laboratory in Switzerland, which British scientist invented the World Wide Web (HTML, HTTP, and URLs) to help scientists share research papers?',
    contextOrEquation: 'Tim Berners-Lee at CERN (1989) -> HTML + HTTP + URI/URL + WorldWideWeb browser/server',
    options: [
      { id: 'A', text: 'Sir Tim Berners-Lee' },
      { id: 'B', text: 'Bill Gates' },
      { id: 'C', text: 'Mark Zuckerberg' },
      { id: 'D', text: 'Steve Jobs' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Sir Tim Berners-Lee',
    conceptualExplanation: 'Sir Tim Berners-Lee invented the World Wide Web in 1989 at CERN. While the underlying physical network (the Internet with ARPANET and TCP/IP) already existed to connect computers, Berners-Lee invented the application layer: HyperText Markup Language (HTML), HyperText Transfer Protocol (HTTP), Uniform Resource Identifiers (URIs/URLs), and the first web browser and web server.',
    workedSolution: 'Step 1: Identify key scientist at CERN in 1989. Step 2: The inventor of HTML, HTTP, and the World Wide Web was Tim Berners-Lee. Step 3: Match to option A.',
    expectedReasoning: 'Tim Berners-Lee invented the World Wide Web protocols (HTML, HTTP, URLs) at CERN in 1989.',
    hint: 'He is a British computer scientist knighted by Queen Elizabeth II for inventing the Web at CERN.',
    markingCriteria: 'Must select option A.',
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Confusing the Web with Commercial Software Founders',
        explanation: 'Attributing the invention of the Web to commercial PC founders like Bill Gates.',
        typicalReasoningQuote: 'Bill Gates made Windows so he invented the World Wide Web.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-20-fu',
      questionText: 'What was the revolutionary decision made by CERN and Tim Berners-Lee in 1993 that allowed the World Wide Web to become free and accessible to the entire world?',
      options: [
        { id: 'A', text: 'They made the source code of the Web open and royalty-free for anyone to use without licensing fees.' },
        { id: 'B', text: 'They sold it to Microsoft for $1 billion.' },
        { id: 'C', text: 'They restricted web access exclusively to licensed universities.' },
        { id: 'D', text: 'They shut down the internet every night at midnight.' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'They made the source code of the Web open and royalty-free for anyone to use without licensing fees.',
      explanation: 'On April 30, 1993, CERN put the World Wide Web software in the public domain royalty-free, sparking the global internet revolution.'
    }
  },

  // -------------------------------------------------------------
  // 21. Nepal Geography: Mount Sagarmatha (Everest) and Tectonic Origin
  // -------------------------------------------------------------
  {
    id: 'gk-21',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Nepal Geography and Landforms',
    subtopic: 'Mount Sagarmatha (Everest) and Himalayan Orogeny',
    topicId: 'gk_nepal_geography',
    topicTitle: 'Geography, Heritage, and Institutions of Nepal',
    difficulty: 'Beginner',
    learningObjective: "Identify Mount Sagarmatha (Everest) as Earth's highest peak, its official elevation (8,848.86 m), and its geological origin in tectonic plate collision.",
    questionText: "Mount Sagarmatha (Everest), situated in the Mahalangur Himal range on the border between Nepal and China (Tibet), is the highest mountain on Earth above sea level. What is its official surveyed elevation, and which tectonic plate collision formed the Himalayas?",
    contextOrEquation: "Official elevation jointly declared in Dec 2020: 8,848.86 m (29,031.7 ft). Tectonic collision: Indian Plate converging into the Eurasian Plate.",
    options: [
      { id: 'A', text: '8,848.86 meters; formed by the ongoing continental collision of the Indian Plate into the Eurasian Plate.' },
      { id: 'B', text: '8,611.00 meters; formed by the volcanic eruption of the Pacific Plate.' },
      { id: 'C', text: '8,091.00 meters; formed by glacial rifting in the African Rift Valley.' },
      { id: 'D', text: '9,250.50 meters; formed by asteroid impact cratering.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: '8,848.86 meters; formed by the ongoing continental collision of the Indian Plate into the Eurasian Plate.',
    conceptualExplanation: "Mount Sagarmatha's official height was jointly surveyed and announced by the governments of Nepal and China in December 2020 as 8,848.86 meters (29,031.7 feet). The Himalayan mountain range was created by the continental-continental collision between the northward-drifting Indian tectonic plate and the massive Eurasian plate that began approximately 50 million years ago and continues to uplift the mountains today.",
    workedSolution: "Step 1: Identify Mount Sagarmatha's verified elevation: 8,848.86 m (superseding the older 8,848 m estimate). Step 2: Identify the tectonic mechanism: collision of the Indian Plate pushing into the Eurasian Plate. Step 3: Match to option A.",
    expectedReasoning: "Sagarmatha stands at 8,848.86 m and was uplifted by the convergent collision between the Indian and Eurasian tectonic plates.",
    hint: "Think about the joint 2020 Nepal-China survey and the two continental plates that collided to form the Himalayas.",
    markingCriteria: "Must select option A. Correctly identifies elevation (8,848.86 m) and Indian-Eurasian plate collision.",
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Confusing Sagarmatha with K2',
        explanation: 'Selecting 8,611 m (which is K2 / Mount Godwin-Austen in the Karakoram range).',
        typicalReasoningQuote: '8,611 meters is the height of Mount Everest.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-21-fu',
      questionText: 'In which protected UNESCO World Heritage national park of Nepal is Mount Sagarmatha located?',
      options: [
        { id: 'A', text: 'Sagarmatha National Park' },
        { id: 'B', text: 'Chitwan National Park' },
        { id: 'C', text: 'Bardiya National Park' },
        { id: 'D', text: 'Rara National Park' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Sagarmatha National Park',
      explanation: 'Sagarmatha National Park in the Solukhumbu district was established in 1976 and inscribed as a UNESCO World Heritage natural site in 1979.'
    }
  },

  // -------------------------------------------------------------
  // 22. Nepal Rivers: Hydrology & Hydroelectric Potential
  // -------------------------------------------------------------
  {
    id: 'gk-22',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Nepal Rivers and Hydrology',
    subtopic: 'Major River Basins and Clean Hydropower Potential',
    topicId: 'gk_nepal_geography',
    topicTitle: 'Geography, Heritage, and Institutions of Nepal',
    difficulty: 'Intermediate',
    learningObjective: "Explain how Nepal's three major river basins (Koshi, Gandaki, Karnali) provide immense clean hydroelectric potential due to steep elevation gradients.",
    questionText: "Nepal possesses vast clean renewable hydroelectric energy potential estimated at over 80,000 MW. Which physical geographic factor of Nepal's major river basins (Koshi, Gandaki/Narayani, and Karnali) makes them exceptionally suitable for run-of-the-river hydroelectric power generation?",
    contextOrEquation: "Hydroelectric power: P = η × ρ × g × Q × H (Power is directly proportional to hydraulic head 'H' and flow rate 'Q').",
    options: [
      { id: 'A', text: 'Extremely steep elevation gradients (high hydraulic head) as snow-fed perennial Himalayan rivers descend rapidly from high mountains to the southern plains.' },
      { id: 'B', text: 'Stagnant, slow-moving coastal waters with high tidal oscillations.' },
      { id: 'C', text: 'Artificial thermal heating of the rivers by subterranean nuclear reactors.' },
      { id: 'D', text: 'Complete absence of seasonal rainfall, preventing water volume fluctuations.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Extremely steep elevation gradients (high hydraulic head) as snow-fed perennial Himalayan rivers descend rapidly from high mountains to the southern plains.',
    conceptualExplanation: "Hydroelectric power generation is directly proportional to water flow volume (Q) and hydraulic head (H, the vertical drop). Nepal's rivers originate in high Himalayan glaciers and snowfields and descend thousands of meters across short horizontal distances into the Terai plains. This steep gradient provides tremendous gravitational potential energy to spin water turbines efficiently.",
    workedSolution: "Step 1: Hydroelectric formula: Power = flow rate × height drop × gravity × efficiency. Step 2: Nepal has snow-fed perennial rivers flowing down steep mountains. Step 3: High drop (head) + strong perennial flow = world-class hydropower potential.",
    expectedReasoning: "Steep topography creates a massive vertical drop (hydraulic head), which maximizes kinetic energy generation in run-of-the-river hydroelectric power plants.",
    hint: "What gives water high energy: falling from a steep height or sitting flat?",
    markingCriteria: "Must select option A.",
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Confusing Mountain Hydropower with Ocean Tidal Power',
        explanation: 'Assuming Nepal uses ocean tidal energy despite being a landlocked nation.',
        typicalReasoningQuote: 'Tidal waves on the coast make the electricity in Nepal.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-22-fu',
      questionText: 'Which is the longest river flowing entirely within the geographic borders of Nepal?',
      options: [
        { id: 'A', text: 'Karnali River' },
        { id: 'B', text: 'Bagmati River' },
        { id: 'C', text: 'Mechi River' },
        { id: 'D', text: 'Bishnumati River' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Karnali River',
      explanation: 'The Karnali River is Nepal’s longest river (approx. 507 km within Nepal) originating from the Tibetan plateau near Lake Manasarovar.'
    }
  },

  // -------------------------------------------------------------
  // 23. Nepal Constitution & Civic Institutions
  // -------------------------------------------------------------
  {
    id: 'gk-23',
    grade: 'Grade 9',
    subject: 'General Knowledge',
    topic: 'Nepal Constitution and Civic Institutions',
    subtopic: 'Federal Democratic Republic Structure and 7 Provinces',
    topicId: 'gk_nepal_governance',
    topicTitle: 'Constitution, Governance, and Civic Systems of Nepal',
    difficulty: 'Intermediate',
    learningObjective: "Understand the structure of Nepal's Constitution (promulgated in 2072 BS / 2015 CE) establishing a Federal Democratic Republic with 7 Provinces.",
    questionText: "The Constitution of Nepal, promulgated by the Constituent Assembly on Ashoj 3, 2072 BS (September 20, 2015 CE), established Nepal as a Federal Democratic Republic. How many provinces constitute the federal structure of Nepal, and what type of parliament exists at the federal level?",
    contextOrEquation: "Constitution of Nepal 2072: 7 Provinces, 753 Local Levels, Bicameral Federal Parliament (House of Representatives + National Assembly).",
    options: [
      { id: 'A', text: '7 Provinces with a bicameral Federal Parliament (House of Representatives / Pratinidhi Sabha and National Assembly / Rastriya Sabha).' },
      { id: 'B', text: '5 Development Regions with a unicameral absolute monarchy council.' },
      { id: 'C', text: '14 Zones with a single appointed legislative chamber.' },
      { id: 'D', text: '75 Administrative Districts with no provincial governments.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: '7 Provinces with a bicameral Federal Parliament (House of Representatives / Pratinidhi Sabha and National Assembly / Rastriya Sabha).',
    conceptualExplanation: "The Constitution of Nepal (2072 BS / 2015 CE) restructured Nepal from a unitary state into a three-tier federal governance model: Federal, Provincial (7 Provinces), and Local (753 Local Governments). At the federal legislative level, it established a bicameral parliament consisting of the House of Representatives (Pratinidhi Sabha, 275 members) and the National Assembly (Rastriya Sabha, 59 members).",
    workedSolution: "Step 1: Recall the constitutional restructuring of 2015 (2072 BS). Step 2: Nepal was divided into 7 provinces (Koshi, Madhesh, Bagmati, Gandaki, Lumbini, Karnali, Sudurpashchim). Step 3: Federal legislature is bicameral (Pratinidhi Sabha + Rastriya Sabha). Match to option A.",
    expectedReasoning: "The 2072 Constitution created 7 provinces and a bicameral parliament (Pratinidhi Sabha and Rastriya Sabha).",
    hint: "Koshi, Madhesh, Bagmati, Gandaki, Lumbini, Karnali, Sudurpashchim—how many provinces are these?",
    markingCriteria: "Must select option A. Identifies 7 provinces and bicameral federal legislature.",
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Confusing New Federal Provinces with Old 5 Development Regions',
        explanation: 'Citing the pre-2015 administrative division of 5 Development Regions (Eastern, Central, Western, Mid-Western, Far-Western).',
        typicalReasoningQuote: 'Nepal has 5 development regions created by King Birendra.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-23-fu',
      questionText: 'On which Nepali calendar date was the Constitution of Nepal formally promulgated by the Constituent Assembly?',
      options: [
        { id: 'A', text: 'Ashoj 3, 2072 BS' },
        { id: 'B', text: 'Baishakh 1, 2063 BS' },
        { id: 'C', text: 'Magh 1, 2070 BS' },
        { id: 'D', text: 'Chaitra 26, 2046 BS' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Ashoj 3, 2072 BS',
      explanation: 'Ashoj 3 is celebrated annually across Nepal as Constitution Day (Samvidhan Diwas).'
    }
  },

  // -------------------------------------------------------------
  // 24. Nepal Biodiversity: Chitwan National Park Conservation
  // -------------------------------------------------------------
  {
    id: 'gk-24',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Nepal Biodiversity and Protected Areas',
    subtopic: 'Chitwan National Park and Wildlife Conservation',
    topicId: 'gk_nepal_geography',
    topicTitle: 'Geography, Heritage, and Institutions of Nepal',
    difficulty: 'Beginner',
    learningObjective: "Recognize Chitwan National Park as Nepal's first national park (1973), a UNESCO World Heritage site, and a global success in conserving the Greater One-horned Rhinoceros.",
    questionText: "Established in 1973 in the subtropical Terai lowlands, which protected area was Nepal's first national park (inscribed as a UNESCO World Heritage Natural Site in 1984) celebrated globally for successfully conserving the endangered Greater One-horned Rhinoceros (Rhinoceros unicornis) and Royal Bengal Tiger?",
    contextOrEquation: "Chitwan National Park (established 1973, UNESCO 1984, 952.63 km²): world model for rhino and tiger population recovery.",
    options: [
      { id: 'A', text: 'Chitwan National Park' },
      { id: 'B', text: 'Rara National Park' },
      { id: 'C', text: 'Langtang National Park' },
      { id: 'D', text: 'Shey Phoksundo National Park' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Chitwan National Park',
    conceptualExplanation: "Chitwan National Park, established in 1973, was Nepal's first national park. Covering over 952 km² of sal forest and alluvial grassland in the inner Terai, it was recognized as a UNESCO World Heritage Natural Site in 1984. Through strict anti-poaching patrols and community buffer zone management, Nepal achieved multiple 'Zero Poaching' years, restoring its Greater One-horned Rhino population to over 750 individuals.",
    workedSolution: "Step 1: Check characteristics: Nepal's first national park (1973), Terai lowland habitat, UNESCO World Heritage site for one-horned rhinos. Step 2: Identify Chitwan National Park. Step 3: Match to option A.",
    expectedReasoning: "Chitwan National Park is Nepal's first national park and world-renowned sanctuary for the greater one-horned rhinoceros.",
    hint: "Which famous park in the southern Terai is famous for elephant safaris and one-horned rhinos?",
    markingCriteria: "Must select option A (Chitwan National Park).",
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Confusing Lowland Subtropical Parks with Alpine Lake Parks',
        explanation: 'Selecting Rara National Park, which protects an alpine lake in Mugu rather than subtropical rhinos.',
        typicalReasoningQuote: 'Rara is the biggest lake so it was the first national park.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-24-fu',
      questionText: 'What innovative conservation policy in Nepal allocates 30% to 50% of national park tourism revenue directly to surrounding local communities for schools, roads, and healthcare?',
      options: [
        { id: 'A', text: 'Buffer Zone Management Program' },
        { id: 'B', text: 'Total Deforestation Mandate' },
        { id: 'C', text: 'Commercial Hunting Concession' },
        { id: 'D', text: 'Private Land Enclosure Act' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Buffer Zone Management Program',
      explanation: 'Nepal’s Buffer Zone legislation shares 30-50% of park revenues with local communities, transforming local villagers into active wildlife protectors.'
    }
  },

  // -------------------------------------------------------------
  // 25. Nepal Cultural Heritage: Lumbini & Ashoka Pillar
  // -------------------------------------------------------------
  {
    id: 'gk-25',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Nepal Cultural Heritage and World History',
    subtopic: 'Lumbini: Birthplace of Lord Buddha',
    topicId: 'gk_nepal_geography',
    topicTitle: 'Geography, Heritage, and Institutions of Nepal',
    difficulty: 'Beginner',
    learningObjective: "Identify Lumbini in Rupandehi District as the birthplace of Siddhartha Gautama (Lord Buddha) and understand the historical significance of the Ashoka Pillar.",
    questionText: "In Rupandehi District of southern Nepal, which UNESCO World Heritage cultural site marks the sacred birthplace of Prince Siddhartha Gautama (Lord Buddha in 623 BCE), authenticated by an ancient stone pillar and Brahmi inscription erected by Mauryan Emperor Ashoka in 249 BCE?",
    contextOrEquation: "Lumbini, Rupandehi (UNESCO 1997): Mayadevi Temple, Marker Stone, Holy Pushkarini Pond, and Ashoka Pillar with Brahmi inscription: 'Hida Budhe Jate Sakyamuniti' (Here the Buddha, sage of the Shakyas, was born).",
    options: [
      { id: 'A', text: 'Lumbini' },
      { id: 'B', text: 'Janakpurdham' },
      { id: 'C', text: 'Muktinath' },
      { id: 'D', text: 'Pashupatinath' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Lumbini',
    conceptualExplanation: "Lumbini, located in the Rupandehi district of Lumbini Province in Nepal, is the birthplace of Siddhartha Gautama, who achieved enlightenment as the Buddha. In 249 BCE, Emperor Ashoka of India visited Lumbini and erected a sandstone pillar bearing an inscription in Brahmi script stating: 'Hida Budhe Jate Sakyamuniti' ('Here was born the Buddha, the sage of the Sakyas'). Lumbini was designated a UNESCO World Heritage site in 1997.",
    workedSolution: "Step 1: Historical site query: birthplace of Siddhartha Gautama (Lord Buddha). Step 2: The archaeological site with Emperor Ashoka's inscription pillar is Lumbini in Rupandehi, Nepal. Step 3: Match to option A.",
    expectedReasoning: "Lumbini is universally recognized as the birthplace of Lord Buddha, attested by Emperor Ashoka's pillar inscription.",
    hint: "It is located in the southern plains of Rupandehi and named a UNESCO World Heritage site in 1997.",
    markingCriteria: "Must select option A (Lumbini).",
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Confusing Buddhist Heritage with Janakpurdham',
        explanation: 'Selecting Janakpurdham (the historic capital of Mithila associated with King Janak and Goddess Sita) instead of Lumbini.',
        typicalReasoningQuote: 'Janakpur is where Buddha was born.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-25-fu',
      questionText: 'What sacred body of water at Lumbini is revered as the pond where Queen Mayadevi bathed before giving birth to Prince Siddhartha?',
      options: [
        { id: 'A', text: 'Pushkarini Pond' },
        { id: 'B', text: 'Phewa Lake' },
        { id: 'C', text: 'Gosainkunda' },
        { id: 'D', text: 'Tilicho Lake' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Pushkarini Pond',
      explanation: 'The sacred Pushkarini Pond is situated beside the Mayadevi Temple in the sacred garden of Lumbini.'
    }
  },

  // -------------------------------------------------------------
  // 26. International Organizations: SAARC Secretariat in Nepal
  // -------------------------------------------------------------
  {
    id: 'gk-26',
    grade: 'Grade 9',
    subject: 'General Knowledge',
    topic: 'International and Regional Organizations',
    subtopic: 'SAARC Secretariat and Diplomatic Cooperation',
    topicId: 'gk_nepal_governance',
    topicTitle: 'Constitution, Governance, and Civic Systems of Nepal',
    difficulty: 'Intermediate',
    learningObjective: "Identify SAARC (South Asian Association for Regional Cooperation) and know that its permanent Secretariat is located in Kathmandu, Nepal.",
    questionText: "Which regional intergovernmental organization comprising eight South Asian nations (Afghanistan, Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan, and Sri Lanka) was founded in 1985 and maintains its permanent Secretariat headquarters in Kathmandu, Nepal?",
    contextOrEquation: "SAARC founded in Dhaka (1985); Permanent Secretariat inaugurated in Kathmandu, Nepal on January 16, 1987.",
    options: [
      { id: 'A', text: 'SAARC (South Asian Association for Regional Cooperation)' },
      { id: 'B', text: 'ASEAN (Association of Southeast Asian Nations)' },
      { id: 'C', text: 'BIMSTEC (Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation)' },
      { id: 'D', text: 'OPEC (Organization of the Petroleum Exporting Countries)' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'SAARC (South Asian Association for Regional Cooperation)',
    conceptualExplanation: "The South Asian Association for Regional Cooperation (SAARC) was established when its Charter was signed in Dhaka on December 8, 1985. The permanent Secretariat of the association was established in Kathmandu, Nepal, on January 16, 1987. Its objective is to promote the welfare of the peoples of South Asia, accelerate economic growth, and foster mutual assistance in fields of agriculture, culture, and science.",
    workedSolution: "Step 1: Check membership: 8 South Asian nations. Step 2: Check Secretariat headquarters: Kathmandu, Nepal. Step 3: Match to SAARC (option A).",
    expectedReasoning: "SAARC is the 8-nation South Asian regional organization headquartered in Kathmandu, Nepal.",
    hint: "It has 8 South Asian members and its headquarters building is in Tridevi Marg, Thamel, Kathmandu.",
    markingCriteria: "Must select option A.",
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Confusing SAARC with ASEAN',
        explanation: 'Selecting ASEAN, which represents Southeast Asian nations (Indonesia, Thailand, Vietnam, etc.) and is headquartered in Jakarta.',
        typicalReasoningQuote: 'ASEAN represents all Asian countries including Nepal.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-26-fu',
      questionText: 'In which year was Nepal formally admitted as a full member state of the United Nations (UN)?',
      options: [
        { id: 'A', text: '1955' },
        { id: 'B', text: '1945' },
        { id: 'C', text: '1975' },
        { id: 'D', text: '1990' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: '1955',
      explanation: 'Nepal was admitted to the United Nations on December 14, 1955, and has since been one of the world’s largest contributors to UN peacekeeping operations.'
    }
  },

  // -------------------------------------------------------------
  // 27. Digital Literacy & Cybersecurity: Two-Factor Authentication
  // -------------------------------------------------------------
  {
    id: 'gk-27',
    grade: 'Grade 8',
    subject: 'General Knowledge',
    topic: 'Digital Literacy, AI, and Cybersecurity',
    subtopic: 'Machine Learning Models vs Heuristics & Two-Factor Authentication',
    topicId: 'gk_technology',
    topicTitle: 'Modern Technology, Computing, and Daily Science',
    difficulty: 'Intermediate',
    learningObjective: "Distinguish modern AI/machine learning (pattern recognition trained on datasets) from static rules, and identify two-factor authentication (2FA) as a vital cybersecurity practice.",
    questionText: "Why is Two-Factor Authentication (2FA) vastly more secure against phishing scams and password theft than relying solely on a single text password?",
    contextOrEquation: "Authentication factors: 1. Something you know (password) + 2. Something you have (authenticator app OTP / hardware security key) or Something you are (biometrics).",
    options: [
      { id: 'A', text: 'Even if an attacker steals your password, they cannot access your account without a second independent verification factor (such as an authenticator app token or physical security key).' },
      { id: 'B', text: '2FA completely encrypts the entire public internet so no data packets can ever be intercepted.' },
      { id: 'C', text: '2FA changes your computer\'s IP address every 30 seconds.' },
      { id: 'D', text: '2FA automatically deletes your account if you enter the wrong password once.' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Even if an attacker steals your password, they cannot access your account without a second independent verification factor (such as an authenticator app token or physical security key).',
    conceptualExplanation: "Single-factor authentication relies only on 'something you know' (a password), which can be compromised through data breaches, keyloggers, or phishing websites. Two-Factor Authentication (2FA) requires two distinct forms of evidence before granting access—typically combining 'something you know' (password) with 'something you have' (a time-based one-time code on your mobile device or a physical FIDO security key). An attacker with only the password remains locked out.",
    workedSolution: "Step 1: Identify the vulnerability of single-factor passwords (phishing, data leaks). Step 2: Analyze how 2FA works: requires a secondary physical or cryptographic factor. Step 3: An attacker with stolen credentials cannot breach the second factor. Match to option A.",
    expectedReasoning: "Requiring two distinct credential types prevents account compromise even if the primary password is leaked.",
    hint: "If a hacker tricks you into giving them your password, what stops them from logging in if you have 2FA turned on?",
    markingCriteria: "Must select option A.",
    commonMisconceptions: [
      {
        answerIdOrPattern: 'B',
        misconceptionTitle: 'Believing 2FA Encrypts the Entire Internet',
        explanation: 'Confusing user identity authentication protocols with global network layer transport encryption.',
        typicalReasoningQuote: '2FA creates an unhackable shield around the whole internet.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-27-fu',
      questionText: 'What type of cyberattack involves fraudulent emails or fake websites that mimic legitimate services (like banks or email providers) to trick users into typing in their passwords?',
      options: [
        { id: 'A', text: 'Phishing' },
        { id: 'B', text: 'DDoS (Distributed Denial of Service)' },
        { id: 'C', text: 'Buffer Overflow' },
        { id: 'D', text: 'Crypto Mining' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Phishing',
      explanation: 'Phishing is social engineering where cybercriminals masquerade as trustworthy entities to deceive victims into exposing sensitive credentials.'
    }
  },

  // -------------------------------------------------------------
  // 28. Logical Reasoning & Everyday Problem Solving
  // -------------------------------------------------------------
  {
    id: 'gk-28',
    grade: 'Grade 9',
    subject: 'General Knowledge',
    topic: 'Logical Reasoning and Everyday Problem Solving',
    subtopic: 'Deductive Logic and Proportional Reasoning',
    topicId: 'gk_technology',
    topicTitle: 'Modern Technology, Computing, and Daily Science',
    difficulty: 'Intermediate',
    learningObjective: "Apply deductive logic and proportional reasoning to resolve real-world efficiency and optimization problems.",
    questionText: "Five remote mountain health posts (A, B, C, D, and E) are supplied by individual solar power arrays. Testing reveals: Array A generates more daily electricity than B, but less than C. Array D generates less electricity than B. Array E generates more electricity than C. Which solar array generates the MEDIAN (middle) amount of electrical power?",
    contextOrEquation: "Deductive inequalities: A > B, C > A, B > D, E > C. Chain: E > C > A > B > D.",
    options: [
      { id: 'A', text: 'Array A' },
      { id: 'B', text: 'Array B' },
      { id: 'C', text: 'Array C' },
      { id: 'D', text: 'Array D' },
    ],
    correctAnswerId: 'A',
    correctAnswerText: 'Array A',
    conceptualExplanation: "We can translate the relationship statements into a strict ordered ranking: 1. 'A generates more than B, but less than C' -> C > A > B. 2. 'D generates less than B' -> B > D, giving C > A > B > D. 3. 'E generates more than C' -> E > C, giving the complete sequence: E > C > A > B > D. With five values ordered from largest to smallest, the 3rd value (the median / middle element) is Array A.",
    workedSolution: "Step 1: 'A > B and A < C' means C > A > B. Step 2: 'D < B' means B > D, so C > A > B > D. Step 3: 'E > C' means E is highest: E > C > A > B > D. Step 4: The 5 positions from top to bottom are: 1st=E, 2nd=C, 3rd=A, 4th=B, 5th=D. The median (middle) position is the 3rd element: Array A.",
    expectedReasoning: "Chaining the inequalities gives E > C > A > B > D. The third of five sorted elements is the median, which is A.",
    hint: "Line up all 5 arrays from greatest power to least power, and find the one right in the middle (3rd of 5).",
    markingCriteria: "Must select option A (Array A).",
    commonMisconceptions: [
      {
        answerIdOrPattern: 'C',
        misconceptionTitle: 'Confusing Median with Second Highest Element',
        explanation: 'Picking C, which is second highest (rank 2 of 5), rather than the middle rank (rank 3 of 5).',
        typicalReasoningQuote: 'C is greater than A, so C is in the middle of the arrays.'
      }
    ],
    fallbackFollowUp: {
      id: 'gk-28-fu',
      questionText: 'In the sequence: E > C > A > B > D, which array generates the least electrical energy (minimum)?',
      options: [
        { id: 'A', text: 'Array D' },
        { id: 'B', text: 'Array B' },
        { id: 'C', text: 'Array A' },
        { id: 'D', text: 'Array E' },
      ],
      correctAnswerId: 'A',
      correctAnswerText: 'Array D',
      explanation: 'Array D is placed at the end of the inequality chain (B > D), making it the lowest producer of energy.'
    }
  }
];
