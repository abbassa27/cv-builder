import { Suspense } from "react"
import EditorClient from "./EditorClient"

export const dynamic = "force-dynamic" // # NEW FEATURE

export default function EditorPage() {
  return (
    <Suspense fallback={<div>Loading editor...</div>}>
      <EditorClient />
    </Suspense>
  )
}