"use client"

import { useState } from "react"
import Link from "next/link"
import { TEMPLATE_INFO } from "@/lib/cviya-constants"

export default function TemplatesPage() {
  const [filter, setFilter] = useState<"all" | "single" | "two-col">("all")

  const filtered = TEMPLATE_INFO.filter((t) => {
    if (filter === "all") return true
    if (filter === "single") return t.tag === "Single" || t.tag === "Minimal"
    return t.tag !== "Single" && t.tag !== "Minimal"
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 border border-indigo-200 mb-4">
            ✨ {TEMPLATE_INFO.length} قوالب احترافية
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            قوالب السيرة الذاتية
          </h1>
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
            اختر من مجموعتنا من القوالب المصممة بشكل احترافي والمتوافقة مع ATS.
            كل قالب قابل للتخصيص بالكامل وجاهز لمساعدتك في الحصول على وظيفة أحلامك.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900">تصفح القوالب</h2>
              <p className="text-sm text-gray-500">{filtered.length} قالب متوفر</p>
            </div>
            <div className="flex gap-2">
              {(["all", "single", "two-col"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    filter === f
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {f === "all" ? "الكل" : f === "single" ? "عمود واحد" : "عمودين"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((template) => (
              <Link
                key={template.id}
                href={`/editor?template=${template.id}`}
                className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-indigo-300 transition-all duration-300"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center">
                  <div className="w-full max-w-[200px] bg-white rounded-lg shadow-lg p-4 text-[8px] leading-tight">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100" />
                      <div>
                        <div className="font-bold text-[10px]">أحمد المنصوري</div>
                        <div className="text-indigo-600 text-[7px]">مهندس برمجيات</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="font-bold text-indigo-600 text-[8px] border-b border-indigo-200 pb-0.5 mb-1">نبذة شخصية</div>
                        <div className="h-4 bg-gray-100 rounded" />
                      </div>
                      <div>
                        <div className="font-bold text-indigo-600 text-[8px] border-b border-indigo-200 pb-0.5 mb-1">الخبرات</div>
                        <div className="space-y-1">
                          <div className="h-3 bg-gray-100 rounded" />
                          <div className="h-3 bg-gray-100 rounded w-4/5" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-indigo-600 text-[8px] border-b border-indigo-200 pb-0.5 mb-1">المهارات</div>
                        <div className="flex gap-1 flex-wrap">
                          <span className="px-1 py-0.5 bg-indigo-50 rounded text-[6px]">React</span>
                          <span className="px-1 py-0.5 bg-indigo-50 rounded text-[6px]">Node.js</span>
                          <span className="px-1 py-0.5 bg-indigo-50 rounded text-[6px]">Python</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{template.nameAr}</h3>
                  <p className="text-sm text-gray-500 mt-1">{template.descriptionAr}</p>
                  <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                    {template.tag}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
