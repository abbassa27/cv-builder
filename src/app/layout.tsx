import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/landing/Navbar"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CV Builder",
  description: "أنشئ سيرتك الذاتية الاحترافية مجاناً",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* 🔥 FIX: Mobile viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className={`${geist.className} antialiased`}>
        {/* 🔥 FIX: Layout wrapper */}
        <div className="min-h-screen flex flex-col overflow-x-hidden">

          <Navbar />

          {/* 🔥 FIX: prevent navbar overlap */}
          <main className="flex-1 pt-16">
            {children}
          </main>

        </div>
      </body>
    </html>
  )
}