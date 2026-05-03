export const dynamic = "force-dynamic"
import { Suspense } from "react"
import { EditorLangProvider } from "@/components/editor/EditorLangContext"
import EditorClient from "./EditorClient"

export default function Page() {
  return (
    <EditorLangProvider>
      <Suspense>
        <EditorClient />
      </Suspense>
    </EditorLangProvider>
  )
}
