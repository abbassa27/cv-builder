"use client"

import { CVData } from "@/store/cvStore"

// # NEW FEATURE START
import { useT } from "@/lib/i18n"
import { useLangStore } from "@/store/langStore"
// # NEW FEATURE END

export default function BoldTemplate({
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
      className="font-sans text-sm text-gray-900 min-h-[297mm]"
      // # NEW FEATURE START
      dir={lang === "ar" ? "rtl" : "ltr"}
      // # NEW FEATURE END
    >
      <div
        className="p-8 flex justify-between items-center"
        style={{ backgroundColor: color }}
      >
        <div>
          <h1 className="text-5xl font-black text-white">
            {personal.name || (isFR ? "Nom complet" : "اسمك الكامل")}
          </h1>

          <p className="text-white/70 text-xl mt-1">
            {personal.title || (isFR ? "Poste" : "المسمى الوظيفي")}
          </p>
        </div>

        {personal.photo && (
          <img
            src={personal.photo}
            className="w-24 h-24 rounded-full object-cover border-4 border-white/40 flex-shrink-0"
          />
        )}
      </div>

      <div className="flex gap-0">

        {/* MAIN */}
        <div className="w-2/3 p-8 flex flex-col gap-6">

          {personal.summary && (
            <div>
              <h2 className="text-2xl font-black mb-2" style={{ color }}>
                {t.summary}
              </h2>
              <p className="text-gray-700 leading-relaxed">{personal.summary}</p>
            </div>
          )}

          {experience.length > 0 && (
            <div>
              <h2 className="text-2xl font-black mb-3" style={{ color }}>
                {t.experience}
              </h2>

              {experience.map((exp) => (
                <div key={exp.id} className="mb-4">
                  <span className="font-bold text-base">{exp.role}</span>

                  <p className="text-gray-500 text-xs">
                    {exp.company} | {exp.from} —{" "}
                    {exp.current
                      ? (isFR ? "Présent" : "حتى الآن")
                      : exp.to}
                  </p>

                  <p className="text-gray-700 mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {interests.length > 0 && (
            <div>
              <h2 className="text-2xl font-black mb-3" style={{ color }}>
                {t.interests}
              </h2>

              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="w-1/3 bg-gray-50 p-6 flex flex-col gap-6">

          <div>
            <h2 className="font-black text-sm mb-3" style={{ color }}>
              {isFR ? "Contact" : "تواصل"}
            </h2>

            <div className="flex flex-col gap-2 text-xs text-gray-600">
              {personal.email && <span>✉ {personal.email}</span>}
              {personal.phone && <span>📞 {personal.phone}</span>}
              {personal.location && <span>📍 {personal.location}</span>}
            </div>
          </div>

          {education.length > 0 && (
            <div>
              <h2 className="font-black text-sm mb-3" style={{ color }}>
                {t.education}
              </h2>

              {education.map((edu) => (
                <div key={edu.id} className="mb-2">
                  <span className="font-semibold text-xs">{edu.degree}</span>
                  <p className="text-gray-400 text-xs">{edu.school}</p>
                  <p className="text-gray-400 text-xs">{edu.year}</p>
                </div>
              ))}
            </div>
          )}

          {skills.length > 0 && (
            <div>
              <h2 className="font-black text-sm mb-3" style={{ color }}>
                {t.skills}
              </h2>

              <div className="flex flex-col gap-1">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 rounded text-white"
                    style={{ backgroundColor: color }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {languages.length > 0 && (
            <div>
              <h2 className="font-black text-sm mb-3" style={{ color }}>
                {t.languages}
              </h2>

              <div className="flex flex-col gap-2">
                {languages.map((langItem) => (
                  <div
                    key={langItem.id}
                    className="flex justify-between items-center"
                  >
                    <span className="text-xs font-medium">
                      {langItem.name}
                    </span>

                    <span
                      className="text-xs text-white px-2 py-0.5 rounded"
                      style={{ backgroundColor: color }}
                    >
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

        </div>
      </div>
    </div>
  )
}