// # NEW FEATURE START

import { useLangStore } from "@/store/langStore"

/**
 * Supported languages
 */
export type Lang = "ar" | "fr"

/**
 * Translation schema (type-safe)
 */
type TranslationSchema = {
  skills: string
  add: string

  education: string
  noEducation: string
  certificate: string
  delete: string
  school: string
  degree: string
  year: string

  experience: string
  noExperience: string
  company: string
  role: string
  from: string
  to: string
  description: string
  current: string

  interests: string
  languages: string
  personal: string

  name: string
  title: string
  email: string
  phone: string
  location: string
  summary: string
}

/**
 * Translations object
 */
export const translations: Record<Lang, TranslationSchema> = {
  ar: {
    skills: "المهارات",
    add: "إضافة",

    education: "التعليم",
    noEducation: "لا يوجد تعليم مضاف",
    certificate: "شهادة",
    delete: "حذف",
    school: "المؤسسة التعليمية",
    degree: "الشهادة",
    year: "سنة التخرج",

    experience: "الخبرات المهنية",
    noExperience: "لا توجد خبرات بعد",
    company: "اسم الشركة",
    role: "المسمى الوظيفي",
    from: "من",
    to: "إلى",
    description: "الوصف",
    current: "أعمل هنا حالياً",

    interests: "الاهتمامات",
    languages: "اللغات",
    personal: "المعلومات الشخصية",

    name: "الاسم الكامل",
    title: "المسمى الوظيفي",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    location: "الموقع",
    summary: "نبذة شخصية",
  },

  fr: {
    skills: "Compétences",
    add: "Ajouter",

    education: "Éducation",
    noEducation: "Aucune formation ajoutée",
    certificate: "Diplôme",
    delete: "Supprimer",
    school: "Établissement",
    degree: "Diplôme",
    year: "Année",

    experience: "Expérience professionnelle",
    noExperience: "Aucune expérience",
    company: "Entreprise",
    role: "Poste",
    from: "De",
    to: "À",
    description: "Description",
    current: "J’y travaille actuellement",

    interests: "Centres d’intérêt",
    languages: "Langues",
    personal: "Informations personnelles",

    name: "Nom complet",
    title: "Poste",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    summary: "Résumé",
  },
}

/**
 * Main hook
 * usage: const t = useT()
 */
export const useT = () => {
  const lang = useLangStore((s) => s.lang)
  return translations[lang]
}

/**
 * Optional helper (non-hook usage)
 * useful for server / utils
 */
export const getT = (lang: Lang) => {
  return translations[lang]
}

// # NEW FEATURE END