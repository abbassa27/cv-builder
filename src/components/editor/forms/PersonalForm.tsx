"use client"
import { useCVStore } from "@/store/cvStore"

const fields = [
  { key: "name",     label: "الاسم الكامل",    placeholder: "أحمد بن علي" },
  { key: "title",    label: "المسمى الوظيفي",  placeholder: "مطور واجهات أمامية" },
  { key: "email",    label: "البريد الإلكتروني", placeholder: "ahmed@email.com" },
  { key: "phone",    label: "رقم الهاتف",      placeholder: "+213 555 000 000" },
  { key: "location", label: "الموقع",          placeholder: "وهران، الجزائر" },
]

export default function PersonalForm() {
  const { data, updatePersonal } = useCVStore()

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-gray-800 text-sm mb-3">المعلومات الشخصية</h2>
      {fields.map((f) => (
        <div key={f.key}>
          <label className="text-xs font-medium text-gray-600 block mb-1">{f.label}</label>
          <input
            value={data.personal[f.key as keyof typeof data.personal]}
            onChange={(e) => updatePersonal(f.key, e.target.value)}
            placeholder={f.placeholder}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
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
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
        />
      </div>
    </div>
  )
}