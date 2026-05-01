import { create } from "zustand"

export interface CVData {
  personal: {
    name: string; title: string; email: string; photo: string
    phone: string; location: string; summary: string
  }
  experience: { id: string; company: string; role: string; from: string; to: string; current: boolean; description: string }[]
  education:  { id: string; school: string; degree: string; year: string }[]
  skills:     string[]
  languages:  { id: string; name: string; level: string }[]
  interests:  string[]
}

const defaultCV: CVData = {
  personal:   { name: "", title: "", email: "", photo: "", phone: "", location: "", summary: "" },
  experience: [],
  education:  [],
  skills:     [],
  languages:  [],
  interests:  [],
}

interface CVStore {
  data: CVData
  templateId: string
  color: string
  font: string
  isDirty: boolean
  updatePersonal:    (field: string, value: string) => void
  addExperience:     () => void
  updateExperience:  (id: string, field: string, value: string | boolean) => void
  removeExperience:  (id: string) => void
  addEducation:      () => void
  updateEducation:   (id: string, field: string, value: string) => void
  removeEducation:   (id: string) => void
  addSkill:          (skill: string) => void
  removeSkill:       (skill: string) => void
  addLanguage:       () => void
  updateLanguage:    (id: string, field: string, value: string) => void
  removeLanguage:    (id: string) => void
  addInterest:       (interest: string) => void
  removeInterest:    (interest: string) => void
  setTemplate:       (id: string) => void
  setColor:          (color: string) => void
  setFont:           (font: string) => void
  loadCV:            (data: CVData) => void
  reset:             () => void
}

export const useCVStore = create<CVStore>((set) => ({
  data: defaultCV,
  templateId: "classic",
  color: "#6366f1",
  font: "font-sans",
  isDirty: false,

  updatePersonal: (field, value) =>
    set((s) => ({ isDirty: true, data: { ...s.data, personal: { ...s.data.personal, [field]: value } } })),

  addExperience: () =>
    set((s) => ({ isDirty: true, data: { ...s.data, experience: [...s.data.experience,
      { id: crypto.randomUUID(), company: "", role: "", from: "", to: "", current: false, description: "" }] } })),

  updateExperience: (id, field, value) =>
    set((s) => ({ isDirty: true, data: { ...s.data,
      experience: s.data.experience.map((e) => e.id === id ? { ...e, [field]: value } : e) } })),

  removeExperience: (id) =>
    set((s) => ({ isDirty: true, data: { ...s.data, experience: s.data.experience.filter((e) => e.id !== id) } })),

  addEducation: () =>
    set((s) => ({ isDirty: true, data: { ...s.data, education: [...s.data.education,
      { id: crypto.randomUUID(), school: "", degree: "", year: "" }] } })),

  updateEducation: (id, field, value) =>
    set((s) => ({ isDirty: true, data: { ...s.data,
      education: s.data.education.map((e) => e.id === id ? { ...e, [field]: value } : e) } })),

  removeEducation: (id) =>
    set((s) => ({ isDirty: true, data: { ...s.data, education: s.data.education.filter((e) => e.id !== id) } })),

  addSkill: (skill) =>
    set((s) => ({ isDirty: true, data: { ...s.data, skills: [...s.data.skills, skill] } })),

  removeSkill: (skill) =>
    set((s) => ({ isDirty: true, data: { ...s.data, skills: s.data.skills.filter((sk) => sk !== skill) } })),

  addLanguage: () =>
    set((s) => ({ isDirty: true, data: { ...s.data, languages: [...s.data.languages,
      { id: crypto.randomUUID(), name: "", level: "متوسط" }] } })),

  updateLanguage: (id, field, value) =>
    set((s) => ({ isDirty: true, data: { ...s.data,
      languages: s.data.languages.map((l) => l.id === id ? { ...l, [field]: value } : l) } })),

  removeLanguage: (id) =>
    set((s) => ({ isDirty: true, data: { ...s.data, languages: s.data.languages.filter((l) => l.id !== id) } })),

  addInterest: (interest) =>
    set((s) => ({ isDirty: true, data: { ...s.data, interests: [...s.data.interests, interest] } })),

  removeInterest: (interest) =>
    set((s) => ({ isDirty: true, data: { ...s.data, interests: s.data.interests.filter((i) => i !== interest) } })),

  setTemplate: (id) => set({ templateId: id }),
  setColor:    (color) => set({ color }),
  setFont:     (font) => set({ font }),
  loadCV:      (data) => set({ data, isDirty: false }),
  reset:       () => set({ data: defaultCV, templateId: "classic", color: "#6366f1", font: "font-sans", isDirty: false }),
}))