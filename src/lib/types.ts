export interface ContactLink {
  id: string;
  icon: string;
  value: string;
  href?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  logo?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  duration: string;
  description: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  link?: string;
}

export interface Award {
  id: string;
  title: string;
  year: string;
  issuer: string;
  description: string;
}

export interface LanguageEntry {
  id: string;
  name: string;
  level: string;
}

export interface ResumeData {
  id: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  subtitle?: string;
  photo?: string;
  contacts: ContactLink[];
  aboutMe: string;
  experiences: Experience[];
  educations: Education[];
  skills: string[];
  languages: LanguageEntry[];
  interests: string[];
  certificates: Certificate[];
  projects: Project[];
  awards: Award[];
  courses: string[];
}

export type LayoutType =
  | 'single'
  | 'left'
  | 'right'
  | 'left-header'
  | 'right-header'
  | 'header'
  | 'split';

export type ExperienceLayout =
  | 'default'
  | 'timeline'
  | 'card'
  | 'traditional'
  | 'journey'
  | 'modern'
  | 'compact'
  | 'stepladder'
  | 'creative';

export interface TemplateConfig {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  layout: LayoutType;
  tag: string;
}

export interface ThemeColor {
  name: string;
  value: string;
  bg: string;
  text: string;
  light: string;
}

export type SectionVisibility = {
  aboutMe: boolean;
  experiences: boolean;
  educations: boolean;
  skills: boolean;
  languages: boolean;
  interests: boolean;
  certificates: boolean;
  projects: boolean;
  awards: boolean;
  courses: boolean;
};
