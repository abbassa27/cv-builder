"use client"
import { useRef, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useReactToPrint } from "react-to-print"
import { useCVStore } from "@/store/cvStore"
import ClassicTemplate from "@/components/templates/ClassicTemplate"

export default function LivePreview() {
  const { data, templateId, isDirty } = useCVStore()
  const previewRef = useRef(null)
  const searchParams = useSearchParams()
  const [saving, setSaving] = useState(false)
  const [sharing, setSharing] = useState(false)
  const [savedId, setSavedId] = useState<string | null>(null)
  const [msg, setMsg] = useState<string | null>(null)

  useEffect(() => {
    const id = searchParams.get("id")
    if (id) setSavedId(id)
  }, [searchParams])

  const handlePrint = useReactToPrint({
    contentRef: previewRef,
    documentTitle: data.personal.name || "cv",
  })

  const handleSave = async () => {
    setSaving(true)
    setMsg(null)
    try {
      const payload = { title: data.personal.name || "CV جديد", templateId, data }
      let res
      if (savedId) {
        res = await fetch(`/api/cvs/${savedId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      } else {
        res = await fetch("/api/cvs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      }
      if (!res.ok) throw new Error()
      const json = await res.json()
      setSavedId(json.id)
      setMsg("✅ تم الحفظ بنجاح")
    } catch {
      setMsg("❌ فشل الحفظ، حاول مجدداً")
    } finally {
      setSaving(false)
      setTimeout(() => setMsg(null), 3000)
    }
  }

  const handleShare = async () => {
    if (!savedId) {
      setMsg("💾 احفظ السيرة أولاً")
      setTimeout(() => setMsg(null), 3000)
      return
    }
    setSharing(true)
    try {
      const res = await fetch(`/api/cvs/${savedId}/share`, { method: "POST" })
      const json = await res.json()
      const url = `${window.location.origin}/cv/${json.slug}`
      await navigator.clipboard.writeText(url)
      setMsg("🔗 تم نسخ الرابط!")
    } catch {
      setMsg("❌ فشل إنشاء الرابط")
    } finally {
      setSharing(false)
      setTimeout(() => setMsg(null), 4000)
    }
  }

  return (
    <div className="flex flex-col items-center gap-3 w-full overflow-y-auto py-4 px-4">

      {/* أزرار */}
      <div className="flex gap-3 w-[210mm] max-w-full">
        <button onClick={handleSave} disabled={saving}
          className={`flex-1 text-sm font-medium px-4 py-2 rounded-lg transition ${
            saving
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : isDirty
              ? "bg-indigo-600 hover:bg-indigo-700 text-white"
              : "bg-indigo-100 text-indigo-400 cursor-default"
          }`}>
          {saving ? "⏳ جار الحفظ..." : "💾 حفظ"}
        </button>

        <button onClick={handleShare} disabled={sharing}
          className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
          {sharing ? "⏳..." : "🔗 مشاركة"}
        </button>

        <button onClick={() => handlePrint()}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
          ⬇ PDF
        </button>
      </div>

      {/* رسالة */}
      {msg && (
        <div className={`text-sm font-medium px-4 py-2 rounded-lg ${
          msg.startsWith("✅") || msg.startsWith("🔗")
            ? "bg-green-50 text-green-700"
            : msg.startsWith("💾")
            ? "bg-yellow-50 text-yellow-700"
            : "bg-red-50 text-red-600"
        }`}>
          {msg}
        </div>
      )}

      {/* Preview A4 */}
      <div ref={previewRef} className="w-[210mm] min-h-[297mm] bg-white shadow-2xl">
        <ClassicTemplate data={data} color="#6366f1" />
      </div>
    </div>
  )
}