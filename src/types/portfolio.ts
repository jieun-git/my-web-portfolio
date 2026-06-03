export interface Profile {
  name: string;
  nameEn: string;
  role: string;
  email: string;
  phone: string;
  education: string;
  intro: string[];
  blog: string;
  github: string;
}

export interface Strength {
  title: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  tech?: string[];
  current?: boolean;
  isIntern?: boolean;
}

export interface ProjectSection {
  title: string;
  items: string[];
}

export interface ProjectData {
  id: string;
  name: string;
  period: string;
  description: string;
  details: string[];
  tech: string[];
  achievements?: string[];
  status?: 'active' | 'completed';
  sections?: ProjectSection[];
  images?: string[];
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
}
