export type ProjectCategory = 
  | 'All' 
  | 'Data Science' 
  | 'AI/ML' 
  | 'Backend Development' 
  | 'Computer Vision' 
  | 'Automation';

export interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  displayCategory: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  isInternal?: boolean;
  isCollaborative?: boolean;
  note?: string;
  featured?: boolean;
  technicalHighlights?: string[];
}

export interface SkillItem {
  name: string;
  iconName?: string;
  note?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  dates: string;
  isCurrent?: boolean;
  location?: string;
  description: string;
  keyContributions: string[];
  technologies: string[];
}

export interface AchievementEntry {
  id: string;
  title: string;
  organization: string;
  year?: string;
  category: 'Conference' | 'Hackathon' | 'Publication' | 'Recognition';
  description: string;
  url?: string;
  linkText?: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  specialization: string;
  period: string;
  location?: string;
  notes?: string[];
}

export interface CoreAttribute {
  title: string;
  description: string;
  metric?: string;
}

export interface ProfileData {
  name: string;
  initials: string;
  roleHeadline: string;
  supportingTitle: string;
  supportingDescription: string;
  availability: {
    status: boolean;
    text: string;
    subtext: string;
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
    location: string;
  };
  resume: {
    filePath: string;
    fileName: string;
    lastUpdated?: string;
    available: boolean;
  };
  about: {
    lead: string;
    paragraphs: string[];
    coreAttributes: CoreAttribute[];
  };
  education: EducationEntry[];
}
