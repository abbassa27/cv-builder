'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  ResumeData,
  LayoutType,
  ExperienceLayout,
  SectionVisibility,
  Experience,
  Education,
  Certificate,
  LanguageEntry,
} from './types';
import { SAMPLE_RESUME } from './constants';
import { v4 as uuidv4 } from 'uuid';

interface ResumeStore {
  resume: ResumeData;
  color: string;
  layout: LayoutType;
  font: string;
  templateId: string;
  experienceLayout: ExperienceLayout;
  sectionVisibility: SectionVisibility;
  sectionOrder: string[];

  setResume: (data: Partial<ResumeData>) => void;
  setColor: (color: string) => void;
  setLayout: (layout: LayoutType) => void;
  setFont: (font: string) => void;
  setTemplateId: (id: string) => void;
  setExperienceLayout: (layout: ExperienceLayout) => void;
  setSectionVisibility: (key: keyof SectionVisibility, value: boolean) => void;
  setSectionOrder: (order: string[]) => void;

  updateExperience: (id: string, data: Partial<Experience>) => void;
  addExperience: () => void;
  removeExperience: (id: string) => void;

  updateEducation: (id: string, data: Partial<Education>) => void;
  addEducation: () => void;
  removeEducation: (id: string) => void;

  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;

  addLanguage: () => void;
  updateLanguage: (id: string, data: Partial<LanguageEntry>) => void;
  removeLanguage: (id: string) => void;

  addInterest: (interest: string) => void;
  removeInterest: (interest: string) => void;

  addCertificate: () => void;
  updateCertificate: (id: string, data: Partial<Certificate>) => void;
  removeCertificate: (id: string) => void;

  loadSampleData: () => void;
  resetResume: () => void;
}

const emptyResume: ResumeData = {
  id: '',
  firstName: '',
  lastName: '',
  jobTitle: '',
  subtitle: '',
  photo: '',
  contacts: [
    { id: '1', icon: 'email', value: '' },
    { id: '2', icon: 'phone', value: '' },
    { id: '3', icon: 'location', value: '' },
  ],
  aboutMe: '',
  experiences: [],
  educations: [],
  skills: [],
  languages: [],
  interests: [],
  certificates: [],
  projects: [],
  awards: [],
  courses: [],
};

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      resume: { ...emptyResume, id: uuidv4() },
      color: '#3b82f6',
      layout: 'single' as LayoutType,
      font: 'Inter',
      templateId: 'classic',
      experienceLayout: 'default' as ExperienceLayout,
      sectionVisibility: {
        aboutMe: true,
        experiences: true,
        educations: true,
        skills: true,
        languages: true,
        interests: true,
        certificates: false,
        projects: false,
        awards: false,
        courses: false,
      },
      sectionOrder: [
        'aboutMe',
        'experiences',
        'educations',
        'skills',
        'languages',
        'interests',
        'certificates',
        'projects',
        'awards',
        'courses',
      ],

      setResume: (data) =>
        set((state) => ({ resume: { ...state.resume, ...data } })),
      setColor: (color) => set({ color }),
      setLayout: (layout) => set({ layout }),
      setFont: (font) => set({ font }),
      setTemplateId: (id) => set({ templateId: id }),
      setExperienceLayout: (layout) => set({ experienceLayout: layout }),
      setSectionVisibility: (key, value) =>
        set((state) => ({
          sectionVisibility: { ...state.sectionVisibility, [key]: value },
        })),
      setSectionOrder: (order) => set({ sectionOrder: order }),

      updateExperience: (id, data) =>
        set((state) => ({
          resume: {
            ...state.resume,
            experiences: state.resume.experiences.map((e) =>
              e.id === id ? { ...e, ...data } : e
            ),
          },
        })),
      addExperience: () =>
        set((state) => ({
          resume: {
            ...state.resume,
            experiences: [
              ...state.resume.experiences,
              {
                id: uuidv4(),
                title: '',
                company: '',
                location: '',
                duration: '',
                description: '',
              },
            ],
          },
        })),
      removeExperience: (id) =>
        set((state) => ({
          resume: {
            ...state.resume,
            experiences: state.resume.experiences.filter((e) => e.id !== id),
          },
        })),

      updateEducation: (id, data) =>
        set((state) => ({
          resume: {
            ...state.resume,
            educations: state.resume.educations.map((e) =>
              e.id === id ? { ...e, ...data } : e
            ),
          },
        })),
      addEducation: () =>
        set((state) => ({
          resume: {
            ...state.resume,
            educations: [
              ...state.resume.educations,
              {
                id: uuidv4(),
                institution: '',
                degree: '',
                location: '',
                duration: '',
                description: '',
              },
            ],
          },
        })),
      removeEducation: (id) =>
        set((state) => ({
          resume: {
            ...state.resume,
            educations: state.resume.educations.filter((e) => e.id !== id),
          },
        })),

      addSkill: (skill) =>
        set((state) => ({
          resume: {
            ...state.resume,
            skills: [...state.resume.skills, skill],
          },
        })),
      removeSkill: (skill) =>
        set((state) => ({
          resume: {
            ...state.resume,
            skills: state.resume.skills.filter((s) => s !== skill),
          },
        })),

      addLanguage: () =>
        set((state) => ({
          resume: {
            ...state.resume,
            languages: [
              ...state.resume.languages,
              { id: uuidv4(), name: '', level: 'Professional' },
            ],
          },
        })),
      updateLanguage: (id, data) =>
        set((state) => ({
          resume: {
            ...state.resume,
            languages: state.resume.languages.map((l) =>
              l.id === id ? { ...l, ...data } : l
            ),
          },
        })),
      removeLanguage: (id) =>
        set((state) => ({
          resume: {
            ...state.resume,
            languages: state.resume.languages.filter((l) => l.id !== id),
          },
        })),

      addInterest: (interest) =>
        set((state) => ({
          resume: {
            ...state.resume,
            interests: [...state.resume.interests, interest],
          },
        })),
      removeInterest: (interest) =>
        set((state) => ({
          resume: {
            ...state.resume,
            interests: state.resume.interests.filter((i) => i !== interest),
          },
        })),

      addCertificate: () =>
        set((state) => ({
          resume: {
            ...state.resume,
            certificates: [
              ...state.resume.certificates,
              { id: uuidv4(), name: '', issuer: '' },
            ],
          },
        })),
      updateCertificate: (id, data) =>
        set((state) => ({
          resume: {
            ...state.resume,
            certificates: state.resume.certificates.map((c) =>
              c.id === id ? { ...c, ...data } : c
            ),
          },
        })),
      removeCertificate: (id) =>
        set((state) => ({
          resume: {
            ...state.resume,
            certificates: state.resume.certificates.filter((c) => c.id !== id),
          },
        })),

      loadSampleData: () =>
        set({ resume: { ...SAMPLE_RESUME, id: uuidv4() } }),
      resetResume: () =>
        set({ resume: { ...emptyResume, id: uuidv4() } }),
    }),
    {
      name: 'cviya-resume-storage',
    }
  )
);
