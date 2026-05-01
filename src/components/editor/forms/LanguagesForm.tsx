"use client"
import { useState } from "react"
import { useCVStore } from "@/store/cvStore"

const levels = ["مبتدئ", "متوسط", "جيد", "جيد جداً", "متقدم", "أصلي"]

export default function LanguagesForm() {
  const { data, addLanguage, updateLanguage, removeLanguage } = useCVStore()

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-gray-800 text-sm mb-3">اللغات</h2>
      {data.languages.map((lang) => (
        <div key={lang.id} className="border border-gray-200 rounded-xl p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-gray-500">لغة</span>
            <button onClick={() => removeLanguage(lang.id)} className="text-red-400 text-xs hover:text-red-600">✕ حذف</button>
          </div>
          <input
            value={lang.name}
            onChange={(e) => updateLanguage(lang.id, "name", e.target.value)}
            placeholder="مثال: العربية، الإنجليزية"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <select
  value={lang.level}
  onChange={(e) => updateLanguage(lang.id, "level", e.target.value)}
  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
>
  {levels.map((l) => (
    <option key={l} value={l} className="text-gray-800 bg-white">{l}</option>
  ))}
</select>
        </div>
      ))}
      <button onClick={addLanguage}
        className="w-full border-2 border-dashed border-gray-300 rounded-xl py-3 text-sm text-gray-500 hover:border-indigo-400 hover:text-indigo-500 transition">
        + إضافة لغة
      </button>
    </div>
  )
}