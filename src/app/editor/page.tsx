import { Suspense } from "react"
import EditorPageContent from "./EditorPageContent"

export default function EditorPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        جاري التحميل...
      </div>
    }>
      <EditorPageContent />
    </Suspense>
  )
}