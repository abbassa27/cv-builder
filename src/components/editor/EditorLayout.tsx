"use client"

import { useState } from "react"
import PersonalForm from "./forms/PersonalForm"
import ExperienceForm from "./forms/ExperienceForm"
import EducationForm from "./forms/EducationForm"
import SkillsForm from "./forms/SkillsForm"
import LanguagesForm from "./forms/LanguagesForm"
import InterestsForm from "./forms/InterestsForm"
import LivePreview from "./LivePreview"
import ColorLayoutPicker from "./ColorLayoutPicker"

import { useLangStore } from "@/store/langStore"
import { useT } from "@/lib/i18n"
import LanguageSwitcher from "@/components/LanguageSwitcher"

export default function EditorLayout() {
  const [activeTab, setActiveTab] = useState("personal")

  const lang = useLangStore((s) => s.lang)
  const t = useT()

  const isRTL = lang === "ar"

  const tabs = [
    { id: "personal",   label: `👤 ${t.personal}` },
    { id: "experience", label: `💼 ${t.experience}` },
    { id: "education",  label: `🎓 ${t.education}` },
    { id: "skills",     label: `⚡ ${t.skills}` },
    { id: "languages",  label: `🌐 ${t.languages}` },
    { id: "interests",  label: `❤️ ${t.interests}` },
  ]

  return (
    <div className="flex h-screen pt-16 overflow-hidden bg-gray-50">

      {/* 🔥 الحل الحقيقي: ترتيب العناصر */}
      {isRTL ? (
        <>
          {/* Sidebar RIGHT */}
          <div className="w-[540px] flex flex-col border-l border-gray-200 bg-white shadow-sm">
            <div className="flex justify-end p-3">
              <LanguageSwitcher />
            </div>

            <div className="flex overflow-x-auto border-b border-gray-200 scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 px-3 py-3 text-xs font-medium transition whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-b-2 border-indigo-600 text-indigo-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {activeTab === "personal"   && <PersonalForm />}
              {activeTab === "experience" && <ExperienceForm />}
              {activeTab === "education"  && <EducationForm />}
              {activeTab === "skills"     && <SkillsForm />}
              {activeTab === "languages"  && <LanguagesForm />}
              {activeTab === "interests"  && <InterestsForm />}
            </div>
            <ColorLayoutPicker />
          </div>

          {/* Preview LEFT */}
          <div className="flex-1 overflow-y-auto bg-gray-100 flex flex-col items-center py-8 px-4">
            <LivePreview />
          </div>
        </>
      ) : (
        <>
          {/* Sidebar LEFT */}
          <div className="w-[850px] flex flex-col border-l border-gray-200 bg-white shadow-sm">
            <div className="flex justify-end p-3">
              <LanguageSwitcher />
            </div>

            <div className="flex overflow-x-auto border-b border-gray-200 scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 px-3 py-3 text-xs font-medium transition whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-b-2 border-indigo-600 text-indigo-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {activeTab === "personal"   && <PersonalForm />}
              {activeTab === "experience" && <ExperienceForm />}
              {activeTab === "education"  && <EducationForm />}
              {activeTab === "skills"     && <SkillsForm />}
              {activeTab === "languages"  && <LanguagesForm />}
              {activeTab === "interests"  && <InterestsForm />}
            </div>
            <ColorLayoutPicker />
          </div>

          {/* Preview RIGHT */}
          <div className="flex-1 overflow-y-auto bg-gray-100 flex flex-col items-center py-8 px-4">
            <LivePreview />
          </div>
        </>
      )}
    </div>
  )
}