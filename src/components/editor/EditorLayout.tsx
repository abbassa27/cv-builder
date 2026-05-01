"use client"
import { useState } from "react"
import PersonalForm from "./forms/PersonalForm"
import ExperienceForm from "./forms/ExperienceForm"
import EducationForm from "./forms/EducationForm"
import SkillsForm from "./forms/SkillsForm"
import LanguagesForm from "./forms/LanguagesForm"
import InterestsForm from "./forms/InterestsForm"
import LivePreview from "./LivePreview"

const tabs = [
  { id: "personal",   label: "👤 شخصي" },
  { id: "experience", label: "💼 خبرات" },
  { id: "education",  label: "🎓 تعليم" },
  { id: "skills",     label: "⚡ مهارات" },
  { id: "languages",  label: "🌐 لغات" },
  { id: "interests",  label: "❤️ اهتمامات" },
]

export default function EditorLayout() {
  const [activeTab, setActiveTab] = useState("personal")

  return (
    <div dir="rtl" className="flex h-screen pt-16 overflow-hidden bg-gray-50">

      {/* Sidebar */}
      <div className="w-[420px] flex flex-col border-l border-gray-200 bg-white shadow-sm">
        {/* Tabs — scrollable */}
        <div className="flex overflow-x-auto border-b border-gray-200 scrollbar-hide">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-3 py-3 text-xs font-medium transition whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto p-5">
          {activeTab === "personal"   && <PersonalForm />}
          {activeTab === "experience" && <ExperienceForm />}
          {activeTab === "education"  && <EducationForm />}
          {activeTab === "skills"     && <SkillsForm />}
          {activeTab === "languages"  && <LanguagesForm />}
          {activeTab === "interests"  && <InterestsForm />}
        </div>
      </div>

      {/* Preview */}
      <div className="flex-1 overflow-y-auto bg-gray-100 flex flex-col items-center py-8 px-4">
        <LivePreview />
      </div>
    </div>
  )
}