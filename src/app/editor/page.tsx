"use client"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useCVStore } from "@/store/cvStore"
import EditorLayout from "@/components/editor/EditorLayout"

export default function EditorPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  const { loadCV } = useCVStore()

  useEffect(() => {
    if (!id) return
    fetch(`/api/cvs/${id}`)
      .then((r) => r.json())
      .then((resume) => {
        if (resume?.data) loadCV(resume.data)
      })
  }, [id])

  return <EditorLayout />
}