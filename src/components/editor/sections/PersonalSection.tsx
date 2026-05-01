"use client"
import { useCVStore } from "@/store/cvStore"

export default function PersonalSection() {
  const { data, updatePersonal } = useCVStore()
  const { personal } = data
  const fields = [
    { key: "name", label: "الاسم الكامل", placeholder: "محمد أحمد" },
    { key: "title", label: "المسمى الوظيفي", placeholder: "مطور ويب" },
    { key: "email", label: "البريد الإلكتروني", placeholder: "email@example.com" },
    { key: "phone", label: "رقم الهاتف", placeholder: "+213 555 123 456" },
    { key: "location", label: "الموقع", placeholder: "الجزائر، وهران" },
  ]
  return (
    <div className="p-6 border-b border-gray-700">
      <h2 className="text-white font-bold text-lg mb-4">المعلومات الشخصية</h2>
      <div className="grid grid-cols-2 gap-3">
        {fields.map((f) => (
          <div key={f.key}>
            <label className="text-gray-400 text-xs mb-1 block">{f.label}</label>
            <input
              value={personal[f.key as keyof typeof personal]}
              onChange={(e) => updatePersonal(f.key, e.target.value)}
              placeholder={f.placeholder}
              className="w-full bg-gray-800 text-white text-sm rounded-lg px-3 py-2 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
          </div>
        ))}
      </div>
      <div className="mt-3">
        <label className="text-gray-400 text-xs mb-1 block">الملخص المهني</label>
        <textarea
          value={personal.summary}
          onChange={(e) => updatePersonal("summary", e.target.value)}
          placeholder="اكتب ملخصاً مختصراً عن نفسك..."
          rows={3}
          className="w-full bg-gray-800 text-white text-sm rounded-lg px-3 py-2 border border-gray-700 focus:border-blue-500 focus:outline-none resize-none"
        />
      </div>
    </div>
  )
}
