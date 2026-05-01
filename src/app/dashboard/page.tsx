"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { authClient } from "@/lib/auth-client"

interface Resume {
  id: string
  title: string
  templateId: string
  updatedAt: string
}

export default function DashboardPage() {
  const { data: session } = authClient.useSession()
  const [resumes, setResumes] = useState<Resume[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/cvs")
      .then((r) => r.json())
      .then((data) => setResumes(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false))
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm("هل تريد حذف هذه السيرة؟")) return
    await fetch(`/api/cvs/${id}`, { method: "DELETE" })
    setResumes((prev) => prev.filter((r) => r.id !== id))
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-gray-900">
            مرحباً، {session?.user.name?.split(" ")[0]} 👋
          </h1>
          <p className="text-gray-500 mt-1">إدارة سيرك الذاتية</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "إجمالي السير", value: resumes.length, icon: "📄" },
            { label: "آخر تعديل",    value: resumes[0] ? new Date(resumes[0].updatedAt).toLocaleDateString("ar") : "—", icon: "🕐" },
            { label: "المستخدم",     value: session?.user.name?.split(" ")[0] || "—", icon: "👤" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-2xl font-black text-gray-900">{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CVs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* زر إنشاء */}
          <Link href="/editor"
            className="bg-white border-2 border-dashed border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 transition group">
            <div className="w-12 h-12 rounded-full bg-indigo-100 group-hover:bg-indigo-200 flex items-center justify-center text-2xl transition">+</div>
            <span className="text-sm font-medium text-gray-500 group-hover:text-indigo-600 transition">إنشاء سيرة جديدة</span>
          </Link>

          {/* Loading */}
          {loading && (
            <div className="col-span-2 flex items-center justify-center py-12 text-gray-400 text-sm">
              ⏳ جار التحميل...
            </div>
          )}

          {/* CV Cards */}
          {!loading && resumes.map((cv) => (
            <div key={cv.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
              <div className="h-36 flex items-center justify-center bg-indigo-50">
                <div className="text-center">
                  <div className="w-16 h-1 rounded mx-auto mb-2 bg-indigo-400"></div>
                  <div className="w-12 h-1 rounded mx-auto mb-1 bg-gray-200"></div>
                  <div className="w-14 h-1 rounded mx-auto bg-gray-200"></div>
                  <div className="mt-2 text-xs font-bold text-indigo-600">{cv.title}</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm">{cv.title}</h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  آخر تعديل: {new Date(cv.updatedAt).toLocaleDateString("ar")}
                </p>
                <div className="flex gap-2 mt-3">
                  <Link href={`/editor?id=${cv.id}`}
                    className="flex-1 text-center text-xs font-medium text-white py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition">
                    تعديل
                  </Link>
                  <button onClick={() => handleDelete(cv.id)}
                    className="flex-1 text-center text-xs font-medium text-gray-600 border border-gray-200 hover:bg-red-50 hover:text-red-500 hover:border-red-200 py-2 rounded-lg transition">
                    حذف
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* فارغ */}
          {!loading && resumes.length === 0 && (
            <div className="col-span-2 text-center py-12 text-gray-400 text-sm">
              لا توجد سير بعد — أنشئ أولى سيرك! 👆
            </div>
          )}
        </div>
      </div>
    </div>
  )
}