import { Badge, LeaderboardEntry, Grade } from '../types/learning';

export const ALL_BADGES: Badge[] = [
  {
    id: 'first_loop',
    title: 'First Loop Completed',
    description: 'Complete your first full diagnostic and follow-up learning cycle.',
    iconName: 'RotateCcw',
    category: 'milestone',
  },
  {
    id: 'misconception_master',
    title: 'Misconception Overcomer',
    description: 'Turn a misconception into mastery by correctly answering the follow-up question.',
    iconName: 'Sparkles',
    category: 'mastery',
  },
  {
    id: 'physics_explorer',
    title: 'Newtonian Explorer',
    description: 'Solve Force and Motion challenges and demonstrate zero net force understanding.',
    iconName: 'Compass',
    category: 'mastery',
  },
  {
    id: 'chemical_conservationist',
    title: 'Conservation Chemist',
    description: 'Demonstrate that atoms and mass are strictly conserved in chemical reactions.',
    iconName: 'FlaskConical',
    category: 'mastery',
  },
  {
    id: 'algebra_tactician',
    title: 'Algebra Tactician',
    description: 'Accurately solve two-step linear equations and distribute negative signs.',
    iconName: 'Calculator',
    category: 'mastery',
  },
  {
    id: 'deep_thinker',
    title: 'Deep Thinker',
    description: 'Provide detailed step-by-step reasoning on 3 or more diagnostic problems.',
    iconName: 'Brain',
    category: 'engagement',
  },
  {
    id: 'stem_champion',
    title: 'STEM Champion',
    description: 'Attain an overall accuracy of 80% or higher with at least 4 submissions.',
    iconName: 'Trophy',
    category: 'milestone',
  },
];

/**
 * Demonstration profiles for presentation/competition simulation preview only.
 * IMPORTANT: These profiles are fictional. They MUST NEVER be displayed as real student records
 * in the live leaderboard. When viewed in Demo Data mode, they are clearly tagged as fictional.
 */
export const DEMO_FICTIONAL_PROFILES: (Omit<LeaderboardEntry, 'isCurrentUser'> & { isFictional: true })[] = [
  {
    id: 'demo-fictional-1',
    name: 'Maya Chen [Demo Profile]',
    grade: 'Grade 9',
    points: 1250,
    conceptsMastered: 6,
    streak: 5,
    isFictional: true,
  },
  {
    id: 'demo-fictional-2',
    name: 'Liam Patel [Demo Profile]',
    grade: 'Grade 8',
    points: 980,
    conceptsMastered: 5,
    streak: 4,
    isFictional: true,
  },
  {
    id: 'demo-fictional-3',
    name: 'Zara Al-Mansoor [Demo Profile]',
    grade: 'Grade 9',
    points: 820,
    conceptsMastered: 4,
    streak: 3,
    isFictional: true,
  },
  {
    id: 'demo-fictional-4',
    name: 'Noah Jackson [Demo Profile]',
    grade: 'Grade 8',
    points: 650,
    conceptsMastered: 3,
    streak: 2,
    isFictional: true,
  },
  {
    id: 'demo-fictional-5',
    name: 'Chloe Dubois [Demo Profile]',
    grade: 'Grade 9',
    points: 520,
    conceptsMastered: 2,
    streak: 2,
    isFictional: true,
  },
];

/**
 * Backwards compatibility alias. Explicitly marked as fictional demo data.
 */
export const PEER_LEADERBOARD = DEMO_FICTIONAL_PROFILES;

/**
 * Calculates student level from XP points
 */
export function calculateLevel(points: number): { level: number; title: string; nextLevelPoints: number; currentLevelFloor: number } {
  if (points < 200) {
    return { level: 1, title: 'STEM Explorer', nextLevelPoints: 200, currentLevelFloor: 0 };
  } else if (points < 500) {
    return { level: 2, title: 'Reasoning Apprentice', nextLevelPoints: 500, currentLevelFloor: 200 };
  } else if (points < 900) {
    return { level: 3, title: 'Concept Investigator', nextLevelPoints: 900, currentLevelFloor: 500 };
  } else if (points < 1400) {
    return { level: 4, title: 'Misconception Master', nextLevelPoints: 1400, currentLevelFloor: 900 };
  } else {
    return { level: 5, title: 'STEM Innovator', nextLevelPoints: 2000, currentLevelFloor: 1400 };
  }
}
