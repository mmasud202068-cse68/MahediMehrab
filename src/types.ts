export type ThemeMode = 'dark' | 'light' | 'eye-protect';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Robotics & Hardware' | 'Web & Software' | 'IoT & Systems';
  labOrCourse: string;
  description: string;
  fullDescription: string;
  keyContributions: string[];
  technologies: string[];
  image: string;
  gallery?: string[];
  specs?: { label: string; value: string }[];
  challengesSolved?: string[];
  systemMetrics?: { label: string; value: string; detail?: string }[];
  badge?: string;
  awardMention?: string;
  hasInteractiveDemo?: boolean;
}

export interface Award {
  id: string;
  title: string;
  team: string;
  event: string;
  year: string;
  rank: string;
  category: string;
  description: string;
  badgeType: 'gold' | 'silver' | 'bronze' | 'special';
  featuredImage?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  concentration: string;
  timeline: string;
  status: string;
  highlights: string[];
}

export interface Sponsor {
  name: string;
  role: string;
  type: string;
  tag: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  iconName: 'facebook' | 'instagram' | 'github' | 'linkedin' | 'mail';
  accentColor: string;
}

export interface SkillDomain {
  domain: string;
  icon: string;
  description: string;
  skills: string[];
}
