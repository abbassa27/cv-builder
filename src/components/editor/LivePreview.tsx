"use client"
import { useRef } from "react"
import { useReactToPrint } from "react-to-print"
import { useCVStore } from "@/store/cvStore"
import ClassicTemplate from "@/components/templates/ClassicTemplate"

export default function LivePreview() {
  const { data, color = "#6366f1", font = "font-sans" } = useCVStore()
  const previewRef = useRef(null)

  const handlePrint = useReactToPrint({
    contentRef: previewRef,
    documentTitle: data.personal.name || "cv",
  })

  return (
    <div className="flex flex-col items-center gap-4 w-full overflow-y-auto py-4 px-4">
      <button
        onClick={() => handlePrint()}
        className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-2 rounded-lg transition w-[210mm] max-w-full"
      >
        ⬇ تصدير PDF
      </button>
      <div
        ref={previewRef}
        className={`w-[210mm] min-h-[297mm] bg-white shadow-2xl ${font}`}
      >
        <ClassicTemplate data={data} color={color} />
      </div>
    </div>
  )
}