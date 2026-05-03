"use client"

// # NEW FEATURE START
import { useLangStore } from "@/store/langStore"

export default function LanguageSwitcher() {
  const { lang, setLang } = useLangStore()

  return (
    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
      <button
        onClick={() => setLang("ar")}
        className={`px-3 py-1.5 text-xs rounded-lg transition ${
          lang === "ar"
            ? "bg-indigo-600 text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        🇸🇦 AR
      </button>

      <button
        onClick={() => setLang("fr")}
        className={`px-3 py-1.5 text-xs rounded-lg transition ${
          lang === "fr"
            ? "bg-indigo-600 text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        🇫🇷 FR
      </button>
    </div>
  )
}
// # NEW FEATURE END