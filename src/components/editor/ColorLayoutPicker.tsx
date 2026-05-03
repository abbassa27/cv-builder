"use client"

import { useState } from "react"
import { useCVStore } from "@/store/cvStore"
import { THEME_COLORS, EXPERIENCE_LAYOUTS, type ExperienceLayoutId } from "@/lib/cviya-constants"

export default function ColorLayoutPicker() {
  const { color, setColor } = useCVStore()
  const [activePanel, setActivePanel] = useState<"colors" | "expLayout" | null>(null)
  const [expLayout, setExpLayout] = useState<ExperienceLayoutId>("default")

  const togglePanel = (panel: "colors" | "expLayout") => {
    setActivePanel(activePanel === panel ? null : panel)
  }

  return (
    <div className="relative">
      {/* Popup panels */}
      {activePanel && (
        <div className="absolute bottom-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-lg z-40 p-4 mb-2 max-h-60 overflow-y-auto">
          {activePanel === "colors" && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">اختر اللون ({THEME_COLORS.length})</h4>
              <div className="flex flex-wrap gap-2">
                {THEME_COLORS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => { setColor(c.value); setActivePanel(null) }}
                    title={c.name}
                    className={`w-7 h-7 rounded-full transition-all ${
                      color === c.value ? "ring-2 ring-offset-2 ring-indigo-500 scale-110" : "hover:scale-110"
                    }`}
                    style={{ backgroundColor: c.value }}
                  />
                ))}
              </div>
            </div>
          )}
          {activePanel === "expLayout" && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">تخطيط الخبرات ({EXPERIENCE_LAYOUTS.length})</h4>
              <div className="flex flex-wrap gap-2">
                {EXPERIENCE_LAYOUTS.map((el) => (
                  <button
                    key={el.id}
                    onClick={() => { setExpLayout(el.id); setActivePanel(null) }}
                    className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                      expLayout === el.id
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {el.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Toolbar buttons */}
      <div className="flex items-center gap-2 p-2 bg-gray-50 border-t border-gray-100 rounded-b-xl">
        <button
          onClick={() => togglePanel("colors")}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-100 transition-colors"
        >
          <span className="w-4 h-4 rounded-full border border-gray-200" style={{ backgroundColor: color }} />
          <span className="text-gray-600 text-xs">اللون</span>
        </button>
        <button
          onClick={() => togglePanel("expLayout")}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors"
        >
          📋 <span className="text-xs">تخطيط الخبرات</span>
        </button>
      </div>
    </div>
  )
}
