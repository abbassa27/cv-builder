"use client"
import { useCVStore } from "@/store/cvStore"

// # NEW FEATURE START
import { useT } from "@/lib/i18n"
import { useLangStore } from "@/store/langStore"
// # NEW FEATURE END

export default function LanguagesForm() {
  const { data, addLanguage, updateLanguage, removeLanguage } = useCVStore()

  // # NEW FEATURE START
  const t = useT()
  const lang = useLangStore((s) => s.lang)
  const isFR = lang === "fr"

  const levels = [
    { key: "beginner", ar: "مبتدئ", fr: "Débutant" },
    { key: "intermediate", ar: "متوسط", fr: "Intermédiaire" },
    { key: "good", ar: "جيد", fr: "Bon" },
    { key: "very_good", ar: "جيد جداً", fr: "Très bon" },
    { key: "advanced", ar: "متقدم", fr: "Avancé" },
    { key: "native", ar: "أصلي", fr: "Natif" },
  ]
  // # NEW FEATURE END

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-gray-800 text-sm mb-3">
        {t.languages}
      </h2>

      {data.languages.map((langItem) => (
        <div key={langItem.id} className="border border-gray-200 rounded-xl p-4 space-y-3">

          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-gray-500">
              {isFR ? "Langue" : "لغة"}
            </span>

            <button
              onClick={() => removeLanguage(langItem.id)}
              className="text-red-400 text-xs hover:text-red-600"
            >
              ✕ {isFR ? "Supprimer" : "حذف"}
            </button>
          </div>

          <input
            value={langItem.name}
            onChange={(e) =>
              updateLanguage(langItem.id, "name", e.target.value)
            }
            placeholder={
              isFR
                ? "Ex: Arabe, Anglais"
                : "مثال: العربية، الإنجليزية"
            }
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />

          <select
            value={langItem.level || "intermediate"}
            onChange={(e) =>
              updateLanguage(langItem.id, "level", e.target.value)
            }
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            {levels.map((l) => (
              <option key={l.key} value={l.key}>
                {isFR ? l.fr : l.ar}
              </option>
            ))}
          </select>

        </div>
      ))}

      <button
        onClick={addLanguage}
        className="w-full border-2 border-dashed border-gray-300 rounded-xl py-3 text-sm text-gray-500 hover:border-indigo-400 hover:text-indigo-500 transition"
      >
        + {isFR ? "Ajouter une langue" : "إضافة لغة"}
      </button>
    </div>
  )
}