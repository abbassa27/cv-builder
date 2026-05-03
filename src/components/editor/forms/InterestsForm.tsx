"use client"
import { useState } from "react"
import { useCVStore } from "@/store/cvStore"

// # NEW FEATURE START
import { useT } from "@/lib/i18n"
import { useLangStore } from "@/store/langStore"
// # NEW FEATURE END

export default function InterestsForm() {
  const { data, addInterest, removeInterest } = useCVStore()
  const [input, setInput] = useState("")

  // # NEW FEATURE START
  const t = useT()
  const lang = useLangStore((s) => s.lang)
  const isFR = lang === "fr"
  // # NEW FEATURE END

  const handleAdd = () => {
    const val = input.trim()
    if (!val || data.interests.includes(val)) return
    addInterest(val)
    setInput("")
  }

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-gray-800 text-sm mb-3">
        {/* # NEW FEATURE */}
        {t.interests}
      </h2>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder={
            // # NEW FEATURE
            isFR
              ? "Ex: lecture, programmation..."
              : "مثال: القراءة، البرمجة..."
          }
          className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />

        <button
          onClick={handleAdd}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
        >
          +
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {data.interests.map((interest) => (
          <span
            key={interest}
            className="flex items-center gap-1 bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full"
          >
            {interest}
            <button
              onClick={() => removeInterest(interest)}
              className="text-indigo-400 hover:text-red-500"
            >
              ✕
            </button>
          </span>
        ))}
      </div>
    </div>
  )
}