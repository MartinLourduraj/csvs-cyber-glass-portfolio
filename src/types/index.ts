export type ThemeMode = 'cyber-blue' | 'crimson-red' | 'fusion' | 'midnight-black';

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Healthcare' | 'Web Applications' | 'Enterprise Software' | 'Automation';
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  status: 'Enterprise Production' | 'Public Open Source' | 'Active Deployment';
  githubUrl?: string;
  liveUrl?: string;
  accentColor: 'blue' | 'red' | 'cyan' | 'purple';
  metrics?: { label: string; value: string }[];
  screenshots: { title: string; caption: string; mockType: 'hms-dashboard' | 'clinical-lab' | 'doctor-portal' | 'billing-suite' | 'architecture' }[];
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud & DevOps' | 'Development Tools' | 'AI & Automation';
  proficiencyTier: 'Architect Level' | 'Advanced Production' | 'Specialist';
  description: string;
  iconName: string;
}

export interface TimelineMilestone {
  year: string;
  period: string;
  role: string;
  entity: string;
  location: string;
  description: string;
  highlights: string[];
  badge: string;
  type: 'founding' | 'deployment' | 'open-source' | 'engineering';
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeCode: string;
  description: string;
  verificationUrl?: string;
  impactMetric: string;
}

export interface GitHubRepoData {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  updatedAt: string;
  topics: string[];
}
