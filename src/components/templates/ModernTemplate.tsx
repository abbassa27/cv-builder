"use client"

import { CVData } from "@/store/cvStore"

// # NEW FEATURE START
import { useT } from "@/lib/i18n"
import { useLangStore } from "@/store/langStore"
// # NEW FEATURE END

export default function ModernTemplate({
  data,
  color = "#6366f1",
}: {
  data: CVData
  color?: string
}) {
  const { personal, experience, education, skills, languages, interests } = data

  // # NEW FEATURE START
  const t = useT()
  const lang = useLangStore((s) => s.lang)
  const isFR = lang === "fr"
  // # NEW FEATURE END

  return (
    <div
      className="flex font-sans text-sm text-gray-900 min-h-[297mm]"
      // # NEW FEATURE START
      dir={lang === "ar" ? "rtl" : "ltr"}
      // # NEW FEATURE END
    >
      {/* SIDEBAR */}
      <div
        className="w-1/3 p-6 text-white flex flex-col gap-6"
        style={{ backgroundColor: color }}
      >
        {personal.photo && (
          <div className="flex justify-center">
            <img
              src={personal.photo}
              className="w-24 h-24 rounded-full object-cover border-4 border-white/40"
            />
          </div>
        )}

        <div>
          <h1 className="text-2xl font-bold">
            {personal.name || (isFR ? "Nom complet" : "اسمك الكامل")}
          </h1>

          <p className="text-white/80 mt-1">
            {personal.title || (isFR ? "Poste" : "المسمى الوظيفي")}
          </p>
        </div>

        <div className="flex flex-col gap-2 text-xs text-white/90">
          {personal.email && <span>✉ {personal.email}</span>}
          {personal.phone && <span>📞 {personal.phone}</span>}
          {personal.location && <span>📍 {personal.location}</span>}
        </div>

        {/* SKILLS */}
        {skills.length > 0 && (
          <div>
            <h2 className="font-bold text-sm mb-2 border-b border-white/30 pb-1">
              {t.skills}
            </h2>

            <div className="flex flex-col gap-1">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white/20 rounded px-2 py-1 text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* LANGUAGES */}
        {languages.length > 0 && (
          <div>
            <h2 className="font-bold text-sm mb-2 border-b border-white/30 pb-1">
              {t.languages}
            </h2>

            <div className="flex flex-col gap-2">
              {languages.map((langItem) => (
                <div
                  key={langItem.id}
                  className="flex justify-between items-center"
                >
                  <span className="text-xs">
                    {langItem.name}
                  </span>

                  <span className="text-xs bg-white/20 rounded px-2 py-0.5">
                    {
  {
    beginner: "Débutant",
    intermediate: "Intermédiaire",
    good: "Bon",
    very_good: "Très bon",
    advanced: "Avancé",
    native: "Natif",

    // دعم القديم
    "مبتدئ": "Débutant",
    "متوسط": "Intermédiaire",
    "جيد": "Bon",
    "جيد جداً": "Très bon",
    "متقدم": "Avancé",
    "أصلي": "Natif",
  }[langItem.level] || langItem.level
}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INTERESTS */}
        {interests.length > 0 && (
          <div>
            <h2 className="font-bold text-sm mb-2 border-b border-white/30 pb-1">
              {t.interests}
            </h2>

            <div className="flex flex-wrap gap-1">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="text-xs bg-white/20 rounded px-2 py-0.5"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="w-2/3 p-8 flex flex-col gap-6">

        {/* SUMMARY */}
        {personal.summary && (
          <div>
            <h2 className="font-bold text-base mb-2" style={{ color }}>
              {t.summary}
            </h2>

            <p className="text-gray-700 leading-relaxed">
              {personal.summary}
            </p>
          </div>
        )}

        {/* EXPERIENCE */}
        {experience.length > 0 && (
          <div>
            <h2 className="font-bold text-base mb-3" style={{ color }}>
              {t.experience}
            </h2>

            {experience.map((exp) => (
              <div
                key={exp.id}
                className="mb-4 border-r-2 pr-3"
                style={{ borderColor: color }}
              >
                <div className="flex justify-between">
                  <span className="font-semibold">
                    {exp.role}
                  </span>

                  <span className="text-gray-400 text-xs">
                    {exp.from} —{" "}
                    {exp.current
                      ? (isFR ? "Présent" : "حتى الآن")
                      : exp.to}
                  </span>
                </div>

                <p className="text-gray-500">
                  {exp.company}
                </p>

                <p className="text-gray-700 mt-1">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* EDUCATION */}
        {education.length > 0 && (
          <div>
            <h2 className="font-bold text-base mb-3" style={{ color }}>
              {t.education}
            </h2>

            {education.map((edu) => (
              <div
                key={edu.id}
                className="mb-2 flex justify-between"
              >
                <div>
                  <span className="font-semibold">
                    {edu.degree}
                  </span>

                  <p className="text-gray-500">
                    {edu.school}
                  </p>
                </div>

                <span className="text-gray-400 text-xs">
                  {edu.year}
                </span>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}