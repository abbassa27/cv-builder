"use client"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useCVStore } from "@/store/cvStore"
import EditorLayout from "@/components/editor/EditorLayout"

export default function EditorPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  const from = searchParams.get("from")
  const { loadCV, reset, setColor, setFont } = useCVStore()

  useEffect(() => {
    if (id) {
      // تعديل سيرة موجودة
      fetch(`/api/cvs/${id}`)
        .then((r) => r.json())
        .then((resume) => {
          if (resume?.data) loadCV(resume.data)
          if (resume?.color) setColor(resume.color)
          if (resume?.font) setFont(resume.font)
        })
    } else if (from === "create") {
      // قادم من create-cv — لا تمسح (الإعدادات محفوظة في Store)
      return
    } else {
      // فتح مباشر لـ /editor — امسح كل شيء
      reset()
    }
  }, [id, from])  // ← أضفنا from هنا

  return <EditorLayout />
}