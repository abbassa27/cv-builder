import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const resume = await prisma.resume.findFirst({
    where: { id, userId: session.user.id },
  })

  if (!resume) return NextResponse.json({ error: "Not found" }, { status: 404 })

  return NextResponse.json(resume)
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()

  const resume = await prisma.resume.update({
    where: { id },
    data: { title: body.title, templateId: body.templateId, data: body.data },
  })

  return NextResponse.json(resume)
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  await prisma.resume.delete({ where: { id } })

  return NextResponse.json({ success: true })
}