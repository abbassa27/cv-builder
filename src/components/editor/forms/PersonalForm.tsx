"use client"
import { useRef } from "react"
import { useCVStore } from "@/store/cvStore"

// # NEW FEATURE START
import { useT } from "@/lib/i18n"
// # NEW FEATURE END

export default function PersonalForm() {
  const { data, updatePersonal } = useCVStore()
  const fileRef = useRef<HTMLInputElement>(null)

  // # NEW FEATURE START
  const t = useT()
  const isFR = t.name === "Nom complet"
  // # NEW FEATURE END

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => updatePersonal("photo", reader.result as string)
    reader.readAsDataURL(file)
  }

  // # NEW FEATURE START
  const fields = [
    {
      key: "name",
      label: t.name,
      placeholder: isFR ? "Jean Dupont" : "أحمد بن علي",
    },
    {
      key: "title",
      label: t.title,
      placeholder: isFR ? "Développeur Frontend" : "مطور واجهات أمامية",
    },
    {
      key: "email",
      label: t.email,
      placeholder: "example@email.com",
    },
    {
      key: "phone",
      label: t.phone,
      placeholder: "+213 555 000 000",
    },
    {
      key: "location",
      label: t.location,
      placeholder: isFR ? "Oran, Algérie" : "وهران، الجزائر",
    },
  ]
  // # NEW FEATURE END

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-gray-800 text-sm mb-3">
        {/* # NEW FEATURE */}
        {t.personal}
      </h2>

      {/* الصورة الشخصية */}
      <div className="flex items-center gap-4">
        <div
          onClick={() => fileRef.current?.click()}
          className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer overflow-hidden hover:border-indigo-400 transition"
        >
          {data.personal.photo
            ? <img src={data.personal.photo} className="w-full h-full object-cover" />
            : <span className="text-2xl">👤</span>
          }
        </div>

        <div>
          <button
            onClick={() => fileRef.current?.click()}
            className="text-xs text-indigo-600 font-medium hover:underline"
          >
            {/* # NEW FEATURE */}
            {data.personal.photo
              ? (isFR ? "Changer la photo" : "تغيير الصورة")
              : (isFR ? "Télécharger une photo" : "رفع صورة شخصية")}
          </button>

          {data.personal.photo && (
            <button
              onClick={() => updatePersonal("photo", "")}
              className="block text-xs text-red-400 hover:underline mt-1"
            >
              {/* # NEW FEATURE */}
              {isFR ? "Supprimer la photo" : "حذف الصورة"}
            </button>
          )}

          <p className="text-xs text-gray-400 mt-1">
            {/* # NEW FEATURE */}
            {isFR
              ? "JPG, PNG — max 2MB"
              : "JPG, PNG — بحد أقصى 2MB"}
          </p>
        </div>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handlePhoto}
        />
      </div>

      {fields.map((f) => (
        <div key={f.key}>
          <label className="text-xs font-medium text-gray-600 block mb-1">
            {f.label}
          </label>
          <input
            value={data.personal[f.key as keyof typeof data.personal]}
            onChange={(e) => updatePersonal(f.key, e.target.value)}
            placeholder={f.placeholder}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>
      ))}

      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1">
          {/* # NEW FEATURE */}
          {t.summary}
        </label>
        <textarea
          rows={4}
          value={data.personal.summary}
          onChange={(e) => updatePersonal("summary", e.target.value)}
          placeholder={
            // # NEW FEATURE
            isFR
              ? "Écrivez un court résumé sur vous..."
              : "اكتب نبذة مختصرة عن نفسك..."
          }
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
        />
      </div>
    </div>
  )
}