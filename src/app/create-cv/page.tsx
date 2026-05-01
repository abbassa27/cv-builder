"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCVStore } from "@/store/cvStore"

const templates = [
  { id: "classic", label: "كلاسيك", desc: "تصميم نظيف واحترافي" },
  { id: "modern",  label: "عصري",   desc: "تصميم حديث وجذاب" },
  { id: "minimal", label: "بسيط",   desc: "تصميم مينيمال أنيق" },
]

const colors = [
  "#6366f1","#3b82f6","#8b5cf6","#ec4899",
  "#10b981","#f59e0b","#ef4444","#1e293b",
]

const fonts = [
  { id: "font-sans",  label: "Geist",   desc: "عصري ونظيف" },
  { id: "font-serif", label: "Serif",   desc: "كلاسيكي وأنيق" },
  { id: "font-mono",  label: "Mono",    desc: "تقني ومميز" },
]

export default function CreateCVPage() {
  const router = useRouter()
  const { setTemplate, setColor, setFont, reset } = useCVStore()
  const [selectedTemplate, setSelectedTemplate] = useState("classic")
  const [selectedColor, setSelectedColor]       = useState("#6366f1")
  const [selectedFont, setSelectedFont]         = useState("font-sans")
  const [startType, setStartType]               = useState<"empty"|"example">("empty")

 const handleStart = () => {
  reset()
  setTemplate(selectedTemplate)
  setColor(selectedColor)
  setFont(selectedFont)
  router.push("/editor?from=create")
}

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Right: CV Preview */}
        <div className="lg:col-span-2 flex items-center justify-center">
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 border-4 transition-all duration-300"
            style={{ borderColor: selectedColor }}
          >
            {/* Header */}
            <div className="flex items-center gap-4 pb-4 border-b" style={{ borderColor: selectedColor + "40" }}>
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-3xl">👤</div>
              <div>
                <div className="h-5 w-36 rounded mb-1" style={{ backgroundColor: selectedColor }}></div>
                <div className="h-3 w-24 bg-gray-200 rounded"></div>
                <div className="flex gap-3 mt-1">
                  <div className="h-2 w-20 bg-gray-100 rounded"></div>
                  <div className="h-2 w-16 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>
            {/* Sections */}
            {["الخبرة المهنية", "التعليم", "المهارات"].map((s) => (
              <div key={s} className="mt-4">
                <div className="h-3 w-28 rounded mb-2 font-bold" style={{ backgroundColor: selectedColor }}></div>
                <div className="space-y-1">
                  <div className="h-2 w-full bg-gray-100 rounded"></div>
                  <div className="h-2 w-4/5 bg-gray-100 rounded"></div>
                  <div className="h-2 w-3/5 bg-gray-100 rounded"></div>
                </div>
              </div>
            ))}
            {/* Badge */}
            <div className="mt-6 text-center">
              <span className="text-xs text-white px-3 py-1 rounded-full" style={{ backgroundColor: selectedColor }}>
                ✦ {templates.find(t => t.id === selectedTemplate)?.label}
              </span>
            </div>
          </div>
        </div>

        {/* Left: Controls */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-black text-gray-900">أنشئ سيرتك الذاتية</h1>
            <p className="text-gray-500 text-sm mt-1">اختر القالب والتخطيط والأسلوب</p>
          </div>

          {/* Start type */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">ابدأ بـ</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: "empty", label: "فارغ", icon: "📄" },
                { id: "example", label: "مثال", icon: "✨" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setStartType(t.id as "empty"|"example")}
                  className={`border-2 rounded-xl py-3 text-sm font-medium transition flex flex-col items-center gap-1
                    ${startType === t.id ? "border-indigo-500 bg-indigo-50 text-indigo-700" : "border-gray-200 text-gray-600 hover:border-gray-300"}`}
                >
                  <span className="text-xl">{t.icon}</span>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Templates */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">القالب</p>
            <div className="space-y-2">
              {templates.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTemplate(t.id)}
                  className={`w-full border-2 rounded-xl px-4 py-3 text-right transition flex justify-between items-center
                    ${selectedTemplate === t.id ? "border-indigo-500 bg-indigo-50" : "border-gray-200 hover:border-gray-300"}`}
                >
                  <span className="text-sm font-medium text-gray-800">{t.label}</span>
                  <span className="text-xs text-gray-400">{t.desc}</span>
                  {selectedTemplate === t.id && <span className="text-indigo-500 text-lg mr-2">✓</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">اللون</p>
            <div className="flex flex-wrap gap-2">
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className="w-8 h-8 rounded-full border-4 transition"
                  style={{
                    backgroundColor: c,
                    borderColor: selectedColor === c ? c : "transparent",
                    outline: selectedColor === c ? `2px solid ${c}` : "none",
                    outlineOffset: "2px",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Font */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">الخط</p>
            <div className="space-y-2">
              {fonts.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFont(f.id)}
                  className={`w-full border-2 rounded-xl px-4 py-3 text-right transition flex justify-between items-center
                    ${selectedFont === f.id ? "border-indigo-500 bg-indigo-50" : "border-gray-200 hover:border-gray-300"}`}
                >
                  <span className="text-sm font-medium text-gray-800">{f.label}</span>
                  <span className="text-xs text-gray-400">{f.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleStart}
            className="w-full text-white font-bold py-4 rounded-2xl text-lg transition shadow-lg"
            style={{ backgroundColor: selectedColor }}
          >
            🚀 ابدأ البناء
          </button>
          <p className="text-center text-xs text-gray-400">✅ مجاني للأبد — بدون بطاقة بنكية</p>
        </div>
      </div>
    </div>
  )
}
