"use client"
import { useState } from "react"
import { useCVStore } from "@/store/cvStore"

export default function SkillsSection() {
  const { data, addSkill, removeSkill } = useCVStore()
  const [input, setInput] = useState("")
  const handleAdd = () => {
    if (input.trim()) { addSkill(input.trim()); setInput("") }
  }
  return (
    <div className="p-6 border-b border-gray-700">
      <h2 className="text-white font-bold text-lg mb-4">المهارات</h2>
      <div className="flex gap-2 mb-3">
        <input value={input} onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="أضف مهارة..."
          className="flex-1 bg-gray-800 text-white text-sm rounded-lg px-3 py-2 border border-gray-700 focus:border-blue-500 focus:outline-none" />
        <button onClick={handleAdd} className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 rounded-lg">+</button>
      </div>
      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill) => (
          <span key={skill} className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
            {skill}
            <button onClick={() => removeSkill(skill)} className="text-gray-400 hover:text-red-400 ml-1">×</button>
          </span>
        ))}
      </div>
    </div>
  )
}
