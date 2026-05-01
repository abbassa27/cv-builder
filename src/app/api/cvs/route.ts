import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export async function GET() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const resumes = await prisma.resume.findMany({
    where: { userId: session.user.id },
    orderBy: { updatedAt: "desc" },
    select: { id: true, title: true, templateId: true, updatedAt: true },
  })

  return NextResponse.json(resumes)
}

export async function POST(req: Request) {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()

  const resume = await prisma.resume.create({
    data: {
  userId: session.user.id,
  title: body.title || "CV جديد",
  templateId: body.templateId || "classic",
  data: body.data || {},
  color: body.color || "#6366f1",
  font: body.font || "font-sans",
},
  })

  return NextResponse.json(resume)
}