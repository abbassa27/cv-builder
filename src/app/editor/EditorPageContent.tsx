"use client"

import { useSearchParams } from "next/navigation"
// ضع هنا بقية الاستيرادات الموجودة عندك حالياً

export default function EditorPageContent() {
  const searchParams = useSearchParams()

  // ضع هنا منطق الصفحة الحالي كاملاً
  // مثال:
  // const from = searchParams.get("from")

  return (
    <div>
      {/* محتوى صفحة editor الحالي */}
    </div>
  )
}