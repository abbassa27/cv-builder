"use client"
import { useRef } from "react"
import { useCVStore } from "@/store/cvStore"

const fields = [
  { key: "name",     label: "الاسم الكامل",     placeholder: "أحمد بن علي" },
  { key: "title",    label: "المسمى الوظيفي",   placeholder: "مطور واجهات أمامية" },
  { key: "email",    label: "البريد الإلكتروني", placeholder: "ahmed@email.com" },
  { key: "phone",    label: "رقم الهاتف",       placeholder: "+213 555 000 000" },
  { key: "location", label: "الموقع",           placeholder: "وهران، الجزائر" },
]

export default function PersonalForm() {
  const { data, updatePersonal } = useCVStore()
  const fileRef = useRef<HTMLInputElement>(null)

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => updatePersonal("photo", reader.result as string)
    reader.readAsDataURL(file)
  }

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-gray-800 text-sm mb-3">المعلومات الشخصية</h2>

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
          <button onClick={() => fileRef.current?.click()} className="text-xs text-indigo-600 font-medium hover:underline">
            {data.personal.photo ? "تغيير الصورة" : "رفع صورة شخصية"}
          </button>
          {data.personal.photo && (
            <button onClick={() => updatePersonal("photo", "")} className="block text-xs text-red-400 hover:underline mt-1">
              حذف الصورة
            </button>
          )}
          <p className="text-xs text-gray-400 mt-1">JPG, PNG — بحد أقصى 2MB</p>
        </div>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
      </div>

      {fields.map((f) => (
        <div key={f.key}>
          <label className="text-xs font-medium text-gray-600 block mb-1">{f.label}</label>
          <input
            value={data.personal[f.key as keyof typeof data.personal]}
            onChange={(e) => updatePersonal(f.key, e.target.value)}
            placeholder={f.placeholder}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>
      ))}
      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1">نبذة شخصية</label>
        <textarea
          rows={4}
          value={data.personal.summary}
          onChange={(e) => updatePersonal("summary", e.target.value)}
          placeholder="اكتب نبذة مختصرة عن نفسك..."
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
        />
      </div>
    </div>
  )
}