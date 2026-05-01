"use client"
import Link from "next/link"
import { authClient } from "@/lib/auth-client"

export default function Navbar() {
  const { data: session } = authClient.useSession()

  return (
    <nav dir="rtl" className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-indigo-600">CV Builder</Link>
        <div className="flex items-center gap-4">
          {session ? (
            <Link href="/create-cv"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2 rounded-full transition">
              افتح المحرر
            </Link>
          ) : (
            <button
              onClick={() => authClient.signIn.social({ provider: "google" })}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2 rounded-full transition">
              ابدأ مجاناً
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}