"use client"

import { useRouter } from "next/navigation"
import { useCVStore } from "@/store/cvStore"
import { THEME_COLORS, TEMPLATE_INFO, FONTS } from "@/lib/cviya-constants"

export default function BuilderPage() {
  const router = useRouter()
  const { templateId, setTemplate, color, setColor, font, setFont, loadCV, data } = useCVStore()

  const handleStartExample = () => {
    loadCV({
      personal: {
        name: "أحمد المنصوري",
        title: "مهندس برمجيات",
        email: "ahmed@email.com",
        photo: "",
        phone: "0512345678",
        location: "الرياض، السعودية",
        summary: "مهندس برمجيات طموح وذو خبرة واسعة في تطوير تطبيقات الويب والموبايل.",
      },
      experience: [
        {
          id: "1",
          company: "شركة التقنية المتقدمة",
          role: "مهندس برمجيات أول",
          from: "يناير 2023",
          to: "حتى الآن",
          current: true,
          description: "قيادة فريق من 5 مطورين لتطوير منصة إلكترونية تخدم أكثر من 50,000 مستخدم. تحسين أداء النظام بنسبة 72%.",
        },
        {
          id: "2",
          company: "حلول رقمية",
          role: "مطور واجهات أمامية",
          from: "مارس 2021",
          to: "ديسمبر 2022",
          current: false,
          description: "تطوير واجهات مستخدم تفاعلية باستخدام React وNext.js. تحسين معدل التحويل بنسبة 35%.",
        },
      ],
      education: [
        { id: "1", school: "جامعة الملك سعود", degree: "بكالوريوس علوم الحاسب", year: "2015 - 2019" },
        { id: "2", school: "جامعة الملك عبدالعزيز", degree: "ماجستير علوم البيانات", year: "2020 - 2022" },
      ],
      skills: ["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Docker", "GraphQL"],
      languages: [
        { id: "1", name: "العربية", level: "لغة أم" },
        { id: "2", name: "English", level: "Fluent" },
        { id: "3", name: "Français", level: "Professional" },
      ],
      interests: ["البرمجة", "القراءة", "السفر", "الرياضة", "التصوير"],
    })
    router.push("/editor")
  }

  const handleStartBlank = () => {
    router.push("/editor")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/30 to-white">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">أنشئ سيرتك الذاتية</h1>
          <p className="text-gray-500 mt-2">اختر القالب والأسلوب ثم ابدأ التحرير</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-8">
          {/* Start Mode */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">ابدأ بـ</label>
            <div className="flex gap-3">
              <button
                onClick={handleStartExample}
                className="flex-1 p-4 rounded-xl border-2 border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all text-center"
              >
                <div className="text-2xl mb-1">📋</div>
                <div className="font-semibold text-sm">مثال</div>
                <div className="text-xs text-gray-500">بيانات تجريبية</div>
              </button>
              <button
                onClick={handleStartBlank}
                className="flex-1 p-4 rounded-xl border-2 border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all text-center"
              >
                <div className="text-2xl mb-1">📄</div>
                <div className="font-semibold text-sm">فارغ</div>
                <div className="text-xs text-gray-500">قالب فارغ</div>
              </button>
            </div>
          </div>

          {/* Template Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">القالب</label>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {TEMPLATE_INFO.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTemplate(t.id)}
                  className={`p-3 rounded-xl border-2 transition-all text-center ${
                    templateId === t.id
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="text-xs font-medium truncate">{t.nameAr}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection (23 colors) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">اللون ({THEME_COLORS.length} لون)</label>
            <div className="flex gap-2 flex-wrap">
              {THEME_COLORS.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c.value)}
                  title={c.name}
                  className={`w-8 h-8 rounded-full transition-all ${
                    color === c.value
                      ? "ring-2 ring-offset-2 ring-indigo-500 scale-110"
                      : "hover:scale-110"
                  }`}
                  style={{ backgroundColor: c.value }}
                />
              ))}
            </div>
          </div>

          {/* Font Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">الخط</label>
            <div className="grid grid-cols-3 gap-3">
              {FONTS.map((f) => (
                <button
                  key={f.name}
                  onClick={() => setFont(f.name)}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    font === f.name
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className={`text-lg font-semibold ${f.name}`}>Aa</div>
                  <div className="text-xs text-gray-600 font-medium mt-1">{f.label}</div>
                  <div className="text-xs text-gray-400">{f.descriptionAr}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={handleStartBlank}
            className="w-full py-4 text-lg font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
          >
            ✏️ ابدأ البناء
          </button>

          <div className="text-center text-sm text-gray-400 flex items-center justify-center gap-4">
            <span className="text-green-500">●</span> Free forever
            <span>·</span>
            <span>مجاني للأبد</span>
          </div>
        </div>
      </div>
    </div>
  )
}
