// # NEW FEATURE START
import { EditorLangProvider } from "@/components/editor/EditorLangContext"
import EditorLayout from "@/components/editor/EditorLayout"
// # NEW FEATURE END

export default function Page() {
  return (
    <EditorLangProvider>
      {/* FIX: replace EditorContent */}
      <EditorLayout />
    </EditorLangProvider>
  )
}