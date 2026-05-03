"use client"
import Link from "next/link"

import PersonalForm from "./forms/PersonalForm"
import ExperienceForm from "./forms/ExperienceForm"
import EducationForm from "./forms/EducationForm"
import SkillsForm from "./forms/SkillsForm"

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

        <h1 className="text-white font-bold text-xl">
          محرر السيرة الذاتية
        </h1>

        <div className="w-20" />
      </div>

      <PersonalForm />
      <ExperienceForm />
      <EducationForm />
      <SkillsForm />
    </div>
  )
}