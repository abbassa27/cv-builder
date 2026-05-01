import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import ClassicTemplate from "@/components/templates/ClassicTemplate"
import { CVData } from "@/store/cvStore"

export default async function PublicCVPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const resume = await prisma.resume.findFirst({
    where: { 
      shareSlug: slug, 
      isPublic: true 
    }
  })

  if (!resume) return notFound()

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl">
        {/* ✅ هذا السطر فقط يتغير */}
        <ClassicTemplate data={resume.data as unknown as CVData} color="#6366f1" />
      </div>
    </div>
  )
}