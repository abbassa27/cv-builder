"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react"

type Lang = "ar" | "fr"

type ContextType = {
  lang: Lang
  setLang: (l: Lang) => void
}

const EditorLangContext = createContext<ContextType | null>(null)

export function EditorLangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar")

  // optional persistence
  useEffect(() => {
    const saved = localStorage.getItem("editor-lang") as Lang
    if (saved) setLang(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem("editor-lang", lang)
  }, [lang])

  return (
    <EditorLangContext.Provider value={{ lang, setLang }}>
      {children}
    </EditorLangContext.Provider>
  )
}

export function useEditorLang() {
  const ctx = useContext(EditorLangContext)
  if (!ctx) throw new Error("useEditorLang must be used inside provider")
  return ctx
}