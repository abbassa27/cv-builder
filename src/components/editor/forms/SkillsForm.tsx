"use client"
import { useState } from "react"
import { useCVStore } from "@/store/cvStore"

export default function SkillsForm() {
  const { data, addSkill, removeSkill } = useCVStore()
  const [input, setInput] = useState("")

  const handleAdd = () => {
    const trimmed = input.trim()
    if (trimmed && !data.skills.includes(trimmed)) {
      addSkill(trimmed)
      setInput("")
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-gray-800 text-sm">المهارات</h2>

      <div className="flex gap-2">
        <input value={input} onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="مثال: React, Python..."
          className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <button onClick={handleAdd}
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 rounded-lg transition">
          +
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill) => (
          <span key={skill}
            className="flex items-center gap-1 bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1.5 rounded-full">
            {skill}
            <button onClick={() => removeSkill(skill)}
              className="text-indigo-400 hover:text-red-500 font-bold leading-none">×</button>
          </span>
        ))}
      </div>
    </div>
  )
}