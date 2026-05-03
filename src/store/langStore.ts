// # NEW FEATURE START
import { create } from "zustand"
import { persist } from "zustand/middleware"

type Lang = "ar" | "fr"

type LangStore = {
  lang: Lang
  setLang: (l: Lang) => void
}

export const useLangStore = create<LangStore>()(
  persist(
    (set) => ({
      lang: "ar",
      setLang: (lang) => set({ lang }),
    }),
    {
      name: "cv-lang", // localStorage key
    }
  )
)
// # NEW FEATURE END