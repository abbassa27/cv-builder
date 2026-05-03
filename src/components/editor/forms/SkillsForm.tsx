"use client"
import { useState } from "react"
import { useCVStore } from "@/store/cvStore"

// # NEW FEATURE START
import { useT } from "@/lib/i18n"
// # NEW FEATURE END

export default function SkillsForm() {
  const { data, addSkill, removeSkill } = useCVStore()
  const [input, setInput] = useState("")

  // # NEW FEATURE START
  const t = useT()
  // # NEW FEATURE END

  const handleAdd = () => {
    const trimmed = input.trim()
    if (trimmed && !data.skills.includes(trimmed)) {
      addSkill(trimmed)
      setInput("")
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-gray-800 text-sm">
        {/* # NEW FEATURE */}
        {t.skills}
      </h2>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          // # NEW FEATURE START
          placeholder={
            t.skills === "Compétences"
              ? "Ex: React, Python..."
              : "مثال: React, Python..."
          }
          // # NEW FEATURE END
          className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <button
          onClick={handleAdd}
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 rounded-lg transition"
        >
          +
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill) => (
          <span
            key={skill}
            className="flex items-center gap-1 bg-indigo-50 text-indigo-700 text-xs text-gray-800 bg-white font-medium px-3 py-1.5 rounded-full"
          >
            {skill}
            <button
              onClick={() => removeSkill(skill)}
              className="text-indigo-400 hover:text-red-500 font-bold leading-none"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  )
}