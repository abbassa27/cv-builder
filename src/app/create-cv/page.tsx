"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCVStore, CVData } from "@/store/cvStore"
import ClassicTemplate from "@/components/templates/ClassicTemplate"
import ModernTemplate from "@/components/templates/ModernTemplate"
import MinimalTemplate from "@/components/templates/MinimalTemplate"
import CreativeTemplate from "@/components/templates/CreativeTemplate"
import ElegantTemplate from "@/components/templates/ElegantTemplate"
import BoldTemplate from "@/components/templates/BoldTemplate"
import TimelineTemplate from "@/components/templates/TimelineTemplate"

const PREVIEWS: Record<string, React.ComponentType<{ data: CVData; color?: string }>> = {
  classic:  ClassicTemplate,
  modern:   ModernTemplate,
  minimal:  MinimalTemplate,
  creative: CreativeTemplate,
  elegant:  ElegantTemplate,
  bold:     BoldTemplate,
  timeline: TimelineTemplate,
}

const exampleData: CVData = {
  personal: {
    name: "محمد أحمد",
    title: "مطور ويب",
    email: "m@example.com",
    phone: "0550000000",
    location: "الجزائر",
    summary: "مطور ويب متخصص في بناء تطبيقات حديثة وسريعة.",
    photo: "https://i.pravatar.cc/150?img=59",
  },
  experience: [{ id: "1", role: "مطور Full Stack", company: "شركة التقنية", from: "2022", to: "2024", current: false, description: "تطوير تطبيقات ويب باستخدام Next.js و TypeScript." }],
  education:  [{ id: "1", degree: "بكالوريوس علوم الحاسوب", school: "جامعة وهران", year: "2022" }],
  skills:     ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
  languages:  [
    { id: "1", name: "العربية",  level: "اللغة الأم" },
    { id: "2", name: "الإنجليزية", level: "متقدم" },
    { id: "3", name: "الفرنسية", level: "متوسط" },
  ],
  interests:  ["البرمجة", "تصميم UI", "الذكاء الاصطناعي"],
}

const templates = [
  { id: "classic",  label: "كلاسيك",   desc: "تصميم نظيف واحترافي" },
  { id: "modern",   label: "عصري",     desc: "شريط جانبي ملوّن" },
  { id: "minimal",  label: "بسيط",     desc: "تصميم مينيمال أنيق" },
  { id: "creative", label: "إبداعي",   desc: "تصميم جريء ومميز" },
  { id: "elegant",  label: "أنيق",     desc: "طابع راقٍ وكلاسيكي" },
  { id: "bold",     label: "جريء",     desc: "ألوان قوية وعناوين كبيرة" },
  { id: "timeline", label: "تايملاين", desc: "خبرة بشكل زمني" },
]

const colors = [
  "#6366f1","#3b82f6","#8b5cf6","#ec4899",
  "#10b981","#f59e0b","#ef4444","#1e293b",
]

const fonts = [
  { id: "font-sans",  label: "Geist", desc: "عصري ونظيف" },
  { id: "font-serif", label: "Serif", desc: "كلاسيكي وأنيق" },
  { id: "font-mono",  label: "Mono",  desc: "تقني ومميز" },
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
    if (startType === "example") {
      useCVStore.getState().loadCV(exampleData)
    }
    router.push("/editor?from=create")
  }

  const PreviewComponent = PREVIEWS[selectedTemplate] ?? ClassicTemplate

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Right: CV Preview */}
        <div className="lg:col-span-2 flex items-center justify-center">
          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl border-4 transition-all duration-300"
            style={{ borderColor: selectedColor, width: "480px", height: "678px" }}

          >
            <div
              className={`absolute top-0 left-0 bg-white ${selectedFont}`}
              style={{ width: "794px", transformOrigin: "top left", transform: "scale(0.604)", pointerEvents: "none" }}

            >
              <PreviewComponent data={exampleData} color={selectedColor} />
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
                { id: "empty",   label: "فارغ",  icon: "📄" },
                { id: "example", label: "مثال",  icon: "✨" },
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