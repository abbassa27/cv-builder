"use client"
import { useCVStore } from "@/store/cvStore"

// # NEW FEATURE START
import { useT } from "@/lib/i18n"
import { useLangStore } from "@/store/langStore"
// # NEW FEATURE END

export default function EducationForm() {
  const { data, addEducation, updateEducation, removeEducation } = useCVStore()

  // # NEW FEATURE START
  const t = useT()
  const lang = useLangStore((s) => s.lang)
  const isFR = lang === "fr"

  const fields = [
    {
      key: "school",
      label: t.school,
      placeholder: isFR ? "Université d'Oran" : "جامعة وهران",
    },
    {
      key: "degree",
      label: t.degree,
      placeholder: isFR
        ? "Licence en informatique"
        : "بكالوريوس علوم الحاسوب",
    },
    {
      key: "year",
      label: t.year,
      placeholder: "2022",
    },
  ]
  // # NEW FEATURE END

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-gray-800 text-sm">
          {/* # NEW FEATURE */}
          {t.education}
        </h2>

        <button
          onClick={addEducation}
          className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg transition"
        >
          {/* # NEW FEATURE */}
          + {isFR ? "Ajouter" : "إضافة"}
        </button>
      </div>

      {data.education.length === 0 && (
        <p className="text-center text-gray-400 text-sm py-8">
          {/* # NEW FEATURE */}
          {t.noEducation}
        </p>
      )}

      {data.education.map((edu, i) => (
        <div key={edu.id} className="border border-gray-200 rounded-xl p-4 space-y-3">

          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-indigo-600">
              {/* # NEW FEATURE */}
              {isFR ? `Diplôme ${i + 1}` : `شهادة ${i + 1}`}
            </span>

            <button
              onClick={() => removeEducation(edu.id)}
              className="text-xs text-red-400 hover:text-red-600"
            >
              {/* # NEW FEATURE */}
              {t.delete}
            </button>
          </div>

          {fields.map((f) => (
            <div key={f.key}>
              <label className="text-xs text-gray-500 block mb-1">
                {f.label}
              </label>

              <input
                value={edu[f.key as keyof typeof edu]}
                onChange={(e) =>
                  updateEducation(edu.id, f.key, e.target.value)
                }
                placeholder={f.placeholder}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}