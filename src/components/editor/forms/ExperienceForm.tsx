"use client"
import { useCVStore } from "@/store/cvStore"

export default function ExperienceForm() {
  const { data, addExperience, updateExperience, removeExperience } = useCVStore()

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-gray-800 text-sm">الخبرات المهنية</h2>
        <button onClick={addExperience}
          className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg transition">
          + إضافة
        </button>
      </div>

      {data.experience.length === 0 && (
        <p className="text-center text-gray-400 text-sm py-8">لا توجد خبرات بعد</p>
      )}

      {data.experience.map((exp, i) => (
        <div key={exp.id} className="border border-gray-200 rounded-xl p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-indigo-600">خبرة {i + 1}</span>
            <button onClick={() => removeExperience(exp.id)}
              className="text-xs text-red-400 hover:text-red-600">حذف</button>
          </div>
          {[
            { key: "company", label: "اسم الشركة", placeholder: "شركة X" },
            { key: "role",    label: "المسمى الوظيفي", placeholder: "مطور Full Stack" },
            { key: "from",    label: "من", placeholder: "2022" },
            { key: "to",      label: "إلى", placeholder: "2024" },
          ].map((f) => (
            <div key={f.key}>
              <label className="text-xs text-gray-500 block mb-1">{f.label}</label>
              <input
                value={exp[f.key as keyof typeof exp] as string}
                onChange={(e) => updateExperience(exp.id, f.key, e.target.value)}
                placeholder={f.placeholder}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
          ))}
          <div>
            <label className="text-xs text-gray-500 block mb-1">الوصف</label>
            <textarea rows={3} value={exp.description}
              onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
            />
          </div>
          <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
            <input type="checkbox" checked={exp.current}
              onChange={(e) => updateExperience(exp.id, "current", e.target.checked)}
              className="rounded" />
            أعمل هنا حالياً
          </label>
        </div>
      ))}
    </div>
  )
}