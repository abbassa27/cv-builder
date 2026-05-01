"use client"
import { useCVStore } from "@/store/cvStore"

export default function EducationSection() {
  const { data, addEducation, updateEducation, removeEducation } = useCVStore()
  return (
    <div className="p-6 border-b border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-bold text-lg">التعليم</h2>
        <button onClick={addEducation} className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg">+ إضافة</button>
      </div>
      {data.education.map((edu) => (
        <div key={edu.id} className="bg-gray-800 rounded-xl p-4 mb-3 border border-gray-700">
          <div className="grid grid-cols-2 gap-2 mb-2">
            {([ ["degree","الشهادة"], ["school","المؤسسة"], ["year","السنة"] ] as [string,string][]).map(([key, label]) => (
              <div key={key}>
                <label className="text-gray-400 text-xs mb-1 block">{label}</label>
                <input value={edu[key as keyof typeof edu]}
                  onChange={(e) => updateEducation(edu.id, key, e.target.value)}
                  className="w-full bg-gray-700 text-white text-sm rounded-lg px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none" />
              </div>
            ))}
          </div>
          <button onClick={() => removeEducation(edu.id)} className="text-red-400 text-xs hover:text-red-300">حذف</button>
        </div>
      ))}
    </div>
  )
}
