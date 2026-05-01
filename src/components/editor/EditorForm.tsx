"use client"
import Link from "next/link"
import PersonalSection from "./sections/PersonalSection"
import ExperienceSection from "./sections/ExperienceSection"
import EducationSection from "./sections/EducationSection"
import SkillsSection from "./sections/SkillsSection"

export default function EditorForm() {
  return (
    <div dir="rtl">
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        <Link
          href="/"
          className="text-gray-400 hover:text-white text-sm flex items-center gap-1 transition"
        >
          ← الرئيسية
        </Link>
        <h1 className="text-white font-bold text-xl">محرر السيرة الذاتية</h1>
        <div className="w-20" /> {/* spacer للتوسيط */}
      </div>
      <PersonalSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
    </div>
  )
}