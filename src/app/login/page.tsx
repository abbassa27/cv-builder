"use client"
import { authClient } from "@/lib/auth-client"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950" dir="rtl">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-white mb-2">مرحباً بك</h1>
        <p className="text-gray-400 mb-8">سجّل دخولك لبدء إنشاء سيرتك الذاتية</p>
        <button
          onClick={() => authClient.signIn.social({ provider: "google", callbackURL: "/dashboard" })}
          className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 font-medium rounded-xl py-3 hover:bg-gray-100 transition cursor-pointer"
        >
          المتابعة مع Google
        </button>
      </div>
    </div>
  )
}
