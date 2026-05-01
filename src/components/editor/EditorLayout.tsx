"use client"
import EditorForm from "./EditorForm"
import LivePreview from "./LivePreview"

export default function EditorLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-950">
      <div className="w-1/2 overflow-y-auto border-r border-gray-800 bg-gray-900">
        <EditorForm />
      </div>
      <div className="w-1/2 overflow-y-auto bg-gray-800 flex items-start justify-center p-8">
        <LivePreview />
      </div>
    </div>
  )
}
