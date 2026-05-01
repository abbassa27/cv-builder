"use client"
import { useCVStore } from "@/store/cvStore"

export default function EducationForm() {
  const { data, addEducation, updateEducation, removeEducation } = useCVStore()

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-gray-800 text-sm">التعليم</h2>
        <button onClick={addEducation}
          className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg transition">
          + إضافة
        </button>
      </div>

      {data.education.length === 0 && (
        <p className="text-center text-gray-400 text-sm py-8">لا يوجد تعليم مضاف</p>
      )}

      {data.education.map((edu, i) => (
        <div key={edu.id} className="border border-gray-200 rounded-xl p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-indigo-600">شهادة {i + 1}</span>
            <button onClick={() => removeEducation(edu.id)}
              className="text-xs text-red-400 hover:text-red-600">حذف</button>
          </div>
          {[
            { key: "school", label: "المؤسسة التعليمية", placeholder: "جامعة وهران" },
            { key: "degree", label: "الشهادة",           placeholder: "بكالوريوس علوم الحاسوب" },
            { key: "year",   label: "سنة التخرج",       placeholder: "2022" },
          ].map((f) => (
            <div key={f.key}>
              <label className="text-xs text-gray-500 block mb-1">{f.label}</label>
              <input
                value={edu[f.key as keyof typeof edu]}
                onChange={(e) => updateEducation(edu.id, f.key, e.target.value)}
                placeholder={f.placeholder}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}