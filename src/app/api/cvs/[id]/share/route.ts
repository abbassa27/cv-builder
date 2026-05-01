import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { nanoid } from "nanoid"

export async function POST(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const resume = await prisma.resume.update({
    where: { id, userId: session.user.id },
    data: { shareSlug: nanoid(10), isPublic: true },
  })

  return NextResponse.json({ slug: resume.shareSlug })
}