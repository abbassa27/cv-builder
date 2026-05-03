"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { authClient } from "@/lib/auth-client"
import Image from "next/image"

export default function Navbar() {
  const { data: session } = authClient.useSession()
  const [showModal, setShowModal] = useState(false)
  const pathname = usePathname()

  const backRoutes: Record<string, { label: string; href: string }> = {
    "/editor":    { label: "→ لوحة التحكم", href: "/dashboard" },
    "/create-cv": { label: "→ لوحة التحكم", href: "/dashboard" },
    "/dashboard": { label: "→ الرئيسية",    href: "/" },
  }
  const backBtn = backRoutes[pathname]

  return (
    <>
      <nav dir="rtl" className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* يسار: لوغو + روابط */}
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-black text-indigo-600">CV Builder</Link>
            {backBtn ? (
              <Link href={backBtn.href}
                className="text-sm text-gray-400 hover:text-indigo-600 font-medium transition flex items-center gap-1">
                {backBtn.label}
              </Link>
            ) : (
              <>
                <Link href="/templates"
                  className="text-sm text-gray-500 hover:text-indigo-600 font-medium transition hidden sm:block">
                  القوالب
                </Link>
                <Link href="/builder"
                  className="text-sm text-gray-500 hover:text-indigo-600 font-medium transition hidden sm:block">
                  أنشئ سيرتك
                </Link>
              </>
            )}
          </div>

          {/* يمين: أزرار المستخدم */}
          <div className="flex items-center gap-3">
            {session ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name || ""}
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-indigo-200"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
                      {session.user.name?.charAt(0)}
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-700 hidden sm:block">
                    {session.user.name}
                  </span>
                </div>
                <Link href="/dashboard"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-full transition">
                  لوحة التحكم
                </Link>
                <Link href="/create-cv"
                  className="border border-indigo-300 hover:bg-indigo-50 text-indigo-600 text-sm font-medium px-4 py-2 rounded-full transition">
                  + إنشاء سيرة
                </Link>
                <button
                  onClick={() => authClient.signOut()}
                  className="text-gray-400 hover:text-red-500 text-xs transition">
                  خروج
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowModal(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2 rounded-full transition">
                تسجيل الدخول
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm mx-4 text-center"
            onClick={(e) => e.stopPropagation()}>
            <div className="text-4xl mb-2">📄</div>
            <h2 className="text-xl font-black text-gray-900 mb-1">مرحباً بك</h2>
            <p className="text-gray-500 text-sm mb-6">سجّل دخولك لبدء إنشاء سيرتك الذاتية</p>
            <button
              onClick={() => {
                setShowModal(false)
                authClient.signIn.social({ provider: "google" })
              }}
              className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-xl py-3 px-4 transition font-medium text-gray-700"
            >
              <svg width="20" height="20" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                <path fill="none" d="M0 0h48v48H0z"/>
              </svg>
              متابعة مع Google
            </button>
            <button onClick={() => setShowModal(false)}
              className="mt-4 text-xs text-gray-400 hover:text-gray-600 transition">
              إلغاء
            </button>
          </div>
        </div>
      )}
    </>
  )
}