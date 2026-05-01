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
      <body className={geist.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
