import type { STEMQuestion, Subject } from '../../types/learning.ts';
import { BIOLOGY_QUESTIONS } from './biology.ts';
import { PHYSICS_QUESTIONS } from './physics.ts';
import { CHEMISTRY_QUESTIONS } from './chemistry.ts';
import { MATH_QUESTIONS } from './math.ts';
import { GK_QUESTIONS } from './gk.ts';

export {
  BIOLOGY_QUESTIONS,
  PHYSICS_QUESTIONS,
  CHEMISTRY_QUESTIONS,
  MATH_QUESTIONS,
  GK_QUESTIONS,
};

export const ALL_MODULAR_QUESTIONS: STEMQuestion[] = [
  ...BIOLOGY_QUESTIONS,
  ...PHYSICS_QUESTIONS,
  ...CHEMISTRY_QUESTIONS,
  ...MATH_QUESTIONS,
  ...GK_QUESTIONS,
];

export interface SubjectCurriculumMetadata {
  subject: Subject;
  displayName: string;
  icon: string;
  description: string;
  totalQuestions: number;
  topics: {
    id: string;
    title: string;
    description: string;
    questionCount: number;
  }[];
}

export const MODULAR_CURRICULUM_METADATA: SubjectCurriculumMetadata[] = [
  {
    subject: 'Biology',
    displayName: 'Biology & Life Sciences',
    icon: 'Dna',
    description: 'Reproduction, cell structure & function, microbiology, human physiology, genetics, and ecology.',
    totalQuestions: BIOLOGY_QUESTIONS.length,
    topics: [
      {
        id: 'biology_reproduction',
        title: 'Reproduction in Living Organisms',
        description: 'Asexual (binary fission, budding, fragmentation, spores) and sexual reproduction in plants and humans.',
        questionCount: BIOLOGY_QUESTIONS.filter(q => q.topicId === 'biology_reproduction').length,
      },
      {
        id: 'biology_cell_structure',
        title: 'Cellular Basis of Life',
        description: 'Plant and animal organelles, cell wall vs membrane, osmosis, turgidity, mitochondria, and chloroplasts.',
        questionCount: BIOLOGY_QUESTIONS.filter(q => q.topicId === 'biology_cell_structure').length,
      },
      {
        id: 'biology_microorganisms',
        title: 'Microbiology and Health',
        description: 'Bacteria, viruses, antibiotics, vaccines, fermentation in yeast, and beneficial bacteria.',
        questionCount: BIOLOGY_QUESTIONS.filter(q => q.topicId === 'biology_microorganisms').length,
      },
      {
        id: 'biology_genetics',
        title: 'Heredity and Evolution',
        description: 'Mendelian genetics, Punnett squares, dominant and recessive alleles, and phenotypic ratios.',
        questionCount: BIOLOGY_QUESTIONS.filter(q => q.topicId === 'biology_genetics').length,
      },
      {
        id: 'biology_physiology',
        title: 'Life Processes in Animals',
        description: 'Human double circulatory system, chamber pressures, and respiratory/vascular exchange.',
        questionCount: BIOLOGY_QUESTIONS.filter(q => q.topicId === 'biology_physiology').length,
      },
      {
        id: 'biology_ecosystems',
        title: 'Ecology and Environment',
        description: 'Trophic food webs, energy pyramids, and Lindeman’s 10% ecological energy transfer rule.',
        questionCount: BIOLOGY_QUESTIONS.filter(q => q.topicId === 'biology_ecosystems').length,
      },
    ],
  },
  {
    subject: 'Physics',
    displayName: 'Physics & Mechanics',
    icon: 'Compass',
    description: "Newton's laws, gravitation, work/energy, optics, sound acoustics, electricity, and fluid pressure.",
    totalQuestions: PHYSICS_QUESTIONS.length,
    topics: [
      {
        id: 'physics_force_motion',
        title: 'Force and Laws of Motion',
        description: "Newton's 1st, 2nd, and 3rd laws, net force, friction, inertia, and simple harmonic pendulums.",
        questionCount: PHYSICS_QUESTIONS.filter(q => q.topicId === 'physics_force_motion').length,
      },
      {
        id: 'physics_gravitation',
        title: 'Gravitation and Celestial Mechanics',
        description: 'Mass vs weight, gravitational acceleration, free fall, and lunar gravity.',
        questionCount: PHYSICS_QUESTIONS.filter(q => q.topicId === 'physics_gravitation').length,
      },
      {
        id: 'physics_work_energy',
        title: 'Work, Energy, and Power',
        description: 'Work done (W = F·d·cosθ), kinetic energy, potential energy, and mechanical conservation.',
        questionCount: PHYSICS_QUESTIONS.filter(q => q.topicId === 'physics_work_energy').length,
      },
      {
        id: 'physics_light_optics',
        title: 'Optics and Wave Nature of Light',
        description: 'Laws of reflection, plane/curved mirrors, refraction, Snell’s law, and dispersion through prisms.',
        questionCount: PHYSICS_QUESTIONS.filter(q => q.topicId === 'physics_light_optics').length,
      },
      {
        id: 'physics_sound',
        title: 'Sound Waves and Acoustics',
        description: 'Medium requirements, speed across phases of matter, pitch (frequency), and loudness (amplitude).',
        questionCount: PHYSICS_QUESTIONS.filter(q => q.topicId === 'physics_sound').length,
      },
      {
        id: 'physics_electricity',
        title: 'Electricity and Electric Circuits',
        description: 'Ohm’s law (V = IR), series vs parallel circuits, and electromagnets.',
        questionCount: PHYSICS_QUESTIONS.filter(q => q.topicId === 'physics_electricity').length,
      },
      {
        id: 'physics_pressure',
        title: 'Pressure, Fluids, and Archimedes Principle',
        description: 'Pressure = F/A, hydrostatic depth pressure (hρg), buoyancy, and Archimedes’ principle.',
        questionCount: PHYSICS_QUESTIONS.filter(q => q.topicId === 'physics_pressure').length,
      },
    ],
  },
  {
    subject: 'Chemistry',
    displayName: 'Chemistry & Matter',
    icon: 'FlaskConical',
    description: 'Reaction equations, acids & bases, pH, metals & non-metals, corrosion, and atomic structure.',
    totalQuestions: CHEMISTRY_QUESTIONS.length,
    topics: [
      {
        id: 'chemistry_reactions',
        title: 'Chemical Reactions and Equations',
        description: 'Conservation of mass, decomposition, displacement, double displacement, and redox.',
        questionCount: CHEMISTRY_QUESTIONS.filter(q => q.topicId === 'chemistry_reactions').length,
      },
      {
        id: 'chemistry_acids_bases',
        title: 'Acids, Bases, and Salts',
        description: 'pH scale, chemical indicators, neutralization, antacids, and Plaster of Paris.',
        questionCount: CHEMISTRY_QUESTIONS.filter(q => q.topicId === 'chemistry_acids_bases').length,
      },
      {
        id: 'chemistry_metals',
        title: 'Metals, Non-Metals, and Reactivity',
        description: 'Malleability, ductility, metal vs non-metal oxides, reactivity series, and rusting of iron.',
        questionCount: CHEMISTRY_QUESTIONS.filter(q => q.topicId === 'chemistry_metals').length,
      },
      {
        id: 'chemistry_atomic_structure',
        title: 'Atomic Structure and Periodic Table',
        description: 'Protons, neutrons, electrons, Bohr shell configurations (2, 8, 8), isotopes, and periodic trends.',
        questionCount: CHEMISTRY_QUESTIONS.filter(q => q.topicId === 'chemistry_atomic_structure').length,
      },
      {
        id: 'chemistry_bonding',
        title: 'Chemical Bonding and Molecular Structure',
        description: 'Ionic electron transfer vs covalent electron sharing, and electrical conductivity.',
        questionCount: CHEMISTRY_QUESTIONS.filter(q => q.topicId === 'chemistry_bonding').length,
      },
      {
        id: 'chemistry_matter',
        title: 'Matter, Changes, and Separation',
        description: 'Physical vs chemical changes, phase changes, and conservation of substance identity.',
        questionCount: CHEMISTRY_QUESTIONS.filter(q => q.topicId === 'chemistry_matter').length,
      },
    ],
  },
  {
    subject: 'Mathematics',
    displayName: 'Mathematics & Algebra',
    icon: 'Calculator',
    description: 'Linear equations, exponents, algebraic identities, geometry, mensuration, and statistics.',
    totalQuestions: MATH_QUESTIONS.length,
    topics: [
      {
        id: 'math_linear_equations',
        title: 'Linear Equations in One Variable',
        description: 'Multi-step equations with negative distribution, fractions, systems, and inequalities.',
        questionCount: MATH_QUESTIONS.filter(q => q.topicId === 'math_linear_equations').length,
      },
      {
        id: 'math_exponents',
        title: 'Exponents, Powers, and Radicals',
        description: 'Laws of exponents, zero and negative exponents, scientific notation, and surd simplification.',
        questionCount: MATH_QUESTIONS.filter(q => q.topicId === 'math_exponents').length,
      },
      {
        id: 'math_identities',
        title: 'Algebraic Expressions, Identities, and Factorization',
        description: 'Identities (a ± b)², difference of squares, and complete polynomial factorization.',
        questionCount: MATH_QUESTIONS.filter(q => q.topicId === 'math_identities').length,
      },
      {
        id: 'math_geometry',
        title: 'Lines, Angles, and Triangles',
        description: 'Transversals on parallel lines, Pythagorean theorem, and regular polygon angles.',
        questionCount: MATH_QUESTIONS.filter(q => q.topicId === 'math_geometry').length,
      },
      {
        id: 'math_mensuration',
        title: 'Mensuration: Perimeter, Area, and Volume',
        description: 'Semicircle perimeters, circle areas, cylinder volume/surface area, and cuboids.',
        questionCount: MATH_QUESTIONS.filter(q => q.topicId === 'math_mensuration').length,
      },
      {
        id: 'math_statistics',
        title: 'Statistics, Data Handling, and Probability',
        description: 'Median, mode, mean, and theoretical compound probability with dice.',
        questionCount: MATH_QUESTIONS.filter(q => q.topicId === 'math_statistics').length,
      },
      {
        id: 'math_commercial',
        title: 'Commercial Mathematics and Percentages',
        description: 'Profit/loss percentage on cost price, simple vs compound interest, and inverse proportion.',
        questionCount: MATH_QUESTIONS.filter(q => q.topicId === 'math_commercial').length,
      },
    ],
  },
  {
    subject: 'General Knowledge',
    displayName: 'General Knowledge & Discoveries',
    icon: 'Globe',
    description: 'Astronomy, earth systems, scientific inventions, medical milestones, and modern technologies.',
    totalQuestions: GK_QUESTIONS.length,
    topics: [
      {
        id: 'gk_astronomy',
        title: 'Space, Astronomy, and Earth Science',
        description: 'Planetary classification, solar and lunar eclipses, JWST, Apollo 11, and stellar life cycles.',
        questionCount: GK_QUESTIONS.filter(q => q.topicId === 'gk_astronomy').length,
      },
      {
        id: 'gk_environment',
        title: 'Ecology, Atmosphere, and Planet Earth',
        description: 'Atmospheric layers, ozone layer, greenhouse effect, Pacific Ring of Fire, and the Gulf Stream.',
        questionCount: GK_QUESTIONS.filter(q => q.topicId === 'gk_environment').length,
      },
      {
        id: 'gk_discoveries',
        title: 'Great Discoveries and Innovations in STEM',
        description: 'Penicillin by Fleming, DNA Photo 51, Faraday induction, and smallpox eradication.',
        questionCount: GK_QUESTIONS.filter(q => q.topicId === 'gk_discoveries').length,
      },
      {
        id: 'gk_technology',
        title: 'Modern Technology, Computing, and Daily Science',
        description: 'GPS trilateration, fiber optics, machine learning neural nets, and reverse osmosis.',
        questionCount: GK_QUESTIONS.filter(q => q.topicId === 'gk_technology').length,
      },
      {
        id: 'gk_nepal_geography',
        title: 'Geography, Heritage, and Institutions of Nepal',
        description: 'Mount Sagarmatha (8848.86 m), major river basins (Koshi, Gandaki, Karnali), Chitwan National Park, and Lumbini World Heritage.',
        questionCount: GK_QUESTIONS.filter(q => q.topicId === 'gk_nepal_geography').length,
      },
      {
        id: 'gk_nepal_governance',
        title: 'Constitution, Governance, and Civic Systems of Nepal',
        description: 'Constitution of Nepal 2072 BS, 7 Provinces, bicameral parliament, and SAARC Secretariat in Kathmandu.',
        questionCount: GK_QUESTIONS.filter(q => q.topicId === 'gk_nepal_governance').length,
      },
      {
        id: 'gk_geography',
        title: 'World Geography, Landforms, and Exploration',
        description: 'Challenger Deep, global oceans, and continental landforms.',
        questionCount: GK_QUESTIONS.filter(q => q.topicId === 'gk_geography').length,
      },
    ],
  },
];
