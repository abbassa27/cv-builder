"use client"

import { CVData } from "@/store/cvStore"

// # NEW FEATURE START
import { useT } from "@/lib/i18n"
import { useLangStore } from "@/store/langStore"
// # NEW FEATURE END

export default function ClassicTemplate({
  data,
  color = "#6366f1",
  experienceLayout = "default",
}: {
  data: CVData
  color?: string
  experienceLayout?: string
}) {
  const { personal, experience, education, skills, languages, interests } = data

  // # NEW FEATURE START
  const t = useT()
  const lang = useLangStore((s) => s.lang)
  const isFR = lang === "fr"
  // # NEW FEATURE END

  return (
    <div
      className="p-10 font-sans text-gray-900 text-sm"
      // # NEW FEATURE START
      dir={lang === "ar" ? "rtl" : "ltr"}
      // # NEW FEATURE END
    >
      <div
        className="border-b-2 pb-4 mb-6 flex justify-between items-start"
        style={{ borderColor: color }}
      >
        <div className="flex-1">
          <h1 className="text-3xl font-bold" style={{ color }}>
            {personal.name || (isFR ? "Nom complet" : "اسمك الكامل")}
          </h1>

          <p className="text-gray-500 text-lg mt-1">
            {personal.title || (isFR ? "Poste" : "المسمى الوظيفي")}
          </p>

          <div className="flex gap-4 mt-2 text-xs text-gray-500 flex-wrap">
            {personal.email && <span>✉ {personal.email}</span>}
            {personal.phone && <span>📞 {personal.phone}</span>}
            {personal.location && <span>📍 {personal.location}</span>}
          </div>
        </div>

        {personal.photo && (
          <img
            src={personal.photo}
            className="w-20 h-20 rounded-full object-cover border-2 mr-4 flex-shrink-0"
            style={{ borderColor: color }}
          />
        )}
      </div>

      {/* SUMMARY */}
      {personal.summary && (
        <div className="mb-6">
          <h2
            className="text-base font-bold mb-2 pb-1"
            style={{ color, borderBottom: `2px solid ${color}` }}
          >
            {t.summary}
          </h2>
          <p className="text-gray-700 leading-relaxed">{personal.summary}</p>
        </div>
      )}

      {/* EXPERIENCE */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-base font-bold mb-3 pb-1"
            style={{ color, borderBottom: `2px solid ${color}` }}
          >
            {t.experience}
          </h2>

          {experienceLayout === "timeline" ? (
            <div className="relative">
              <div className="absolute top-0 bottom-0 right-[6px] w-[2px]" style={{ backgroundColor: color + "30" }} />
              {experience.map((exp) => (
                <div key={exp.id} className="mb-4 relative pr-6">
                  <div className="absolute right-0 top-1 w-3 h-3 rounded-full border-2" style={{ borderColor: color, backgroundColor: "#fff" }} />
                  <span className="font-semibold">{exp.role || (isFR ? "Poste" : "المسمى الوظيفي")}</span>
                  <p className="text-xs" style={{ color }}>{exp.company} • {exp.from} — {exp.current ? (isFR ? "Présent" : "حتى الآن") : exp.to}</p>
                  {exp.description && <p className="text-gray-700 mt-1">{exp.description}</p>}
                </div>
              ))}
            </div>
          ) : experienceLayout === "card" ? (
            experience.map((exp) => (
              <div key={exp.id} className="mb-3 rounded-lg border p-3" style={{ borderColor: color + "30" }}>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-semibold">{exp.role || (isFR ? "Poste" : "المسمى الوظيفي")}</span>
                    <p className="text-xs" style={{ color }}>{exp.company}</p>
                  </div>
                  <span className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: color + "15", color }}>{exp.from} — {exp.current ? (isFR ? "Présent" : "حتى الآن") : exp.to}</span>
                </div>
                {exp.description && <p className="text-gray-700 mt-1.5">{exp.description}</p>}
              </div>
            ))
          ) : experienceLayout === "compact" ? (
            experience.map((exp) => (
              <div key={exp.id} className="mb-2 flex gap-3 text-sm">
                <span className="font-medium text-gray-400 w-24 flex-shrink-0 text-xs">{exp.from} — {exp.current ? (isFR ? "Présent" : "حتى الآن") : exp.to}</span>
                <div className="flex-1">
                  <span className="font-semibold">{exp.role}</span>
                  <span style={{ color }}> @ {exp.company}</span>
                  {exp.description && <p className="text-gray-600 mt-0.5 text-xs">{exp.description}</p>}
                </div>
              </div>
            ))
          ) : experienceLayout === "modern" ? (
            experience.map((exp) => (
              <div key={exp.id} className="mb-4 border-r-2 pr-3" style={{ borderColor: color }}>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{exp.role || (isFR ? "Poste" : "المسمى الوظيفي")}</span>
                  <span className="text-xs px-1.5 py-0.5 rounded-full" style={{ backgroundColor: color + "15", color }}>{exp.from} — {exp.current ? (isFR ? "Présent" : "حتى الآن") : exp.to}</span>
                </div>
                <p className="text-gray-500 text-xs">{exp.company}</p>
                {exp.description && <p className="text-gray-700 mt-1">{exp.description}</p>}
              </div>
            ))
          ) : experienceLayout === "journey" ? (
            experience.map((exp, idx) => (
              <div key={exp.id} className="flex gap-3 mb-3">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[8px] font-bold" style={{ backgroundColor: color }}>{idx + 1}</div>
                  {idx < experience.length - 1 && <div className="flex-1 w-[1px] mt-1" style={{ backgroundColor: color + "30" }} />}
                </div>
                <div className="flex-1 pb-2">
                  <span className="font-semibold">{exp.role}</span>
                  <p className="text-xs" style={{ color }}>{exp.company} • {exp.from} — {exp.current ? (isFR ? "Présent" : "حتى الآن") : exp.to}</p>
                  {exp.description && <p className="text-gray-700 mt-1">{exp.description}</p>}
                </div>
              </div>
            ))
          ) : experienceLayout === "stepladder" ? (
            experience.map((exp, idx) => (
              <div key={exp.id} style={{ marginRight: `${idx * 12}px` }} className="mb-2">
                <div className="rounded-lg p-2" style={{ backgroundColor: color + "08", borderRight: `3px solid ${color}` }}>
                  <span className="font-semibold">{exp.role}</span>
                  <p className="text-xs" style={{ color }}>{exp.company} • {exp.from} — {exp.current ? (isFR ? "Présent" : "حتى الآن") : exp.to}</p>
                  {exp.description && <p className="text-gray-700 mt-1">{exp.description}</p>}
                </div>
              </div>
            ))
          ) : experienceLayout === "creative" ? (
            <div className="grid grid-cols-2 gap-2">
              {experience.map((exp) => (
                <div key={exp.id} className="rounded-lg p-2.5 border" style={{ borderColor: color + "20" }}>
                  <div className="w-full h-1 rounded-full mb-2" style={{ backgroundColor: color }} />
                  <span className="font-semibold text-xs">{exp.role}</span>
                  <p className="text-[10px]" style={{ color }}>{exp.company}</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">{exp.from} — {exp.current ? (isFR ? "Présent" : "حتى الآن") : exp.to}</p>
                  {exp.description && <p className="text-gray-600 mt-1 text-xs line-clamp-3">{exp.description}</p>}
                </div>
              ))}
            </div>
          ) : (
            experience.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between">
                  <span className="font-semibold">
                    {exp.role || (isFR ? "Poste" : "المسمى الوظيفي")}
                  </span>
                  <span className="text-gray-500 text-xs">
                    {exp.from} — {exp.current ? (isFR ? "Présent" : "حتى الآن") : exp.to}
                  </span>
                </div>
                <p className="text-gray-500">{exp.company}</p>
                <p className="text-gray-700 mt-1">{exp.description}</p>
              </div>
            ))
          )}
        </div>
      )}

      {/* EDUCATION */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-base font-bold mb-3 pb-1"
            style={{ color, borderBottom: `2px solid ${color}` }}
          >
            {t.education}
          </h2>

          {education.map((edu) => (
            <div key={edu.id} className="mb-2 flex justify-between">
              <div>
                <span className="font-semibold">{edu.degree}</span>
                <p className="text-gray-500">{edu.school}</p>
              </div>
              <span className="text-gray-500 text-xs">{edu.year}</span>
            </div>
          ))}
        </div>
      )}

      {/* SKILLS */}
      {skills.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-base font-bold mb-3 pb-1"
            style={{ color, borderBottom: `2px solid ${color}` }}
          >
            {t.skills}
          </h2>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full text-xs text-white"
                style={{ backgroundColor: color }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* LANGUAGES */}
      {languages.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-base font-bold mb-3 pb-1"
            style={{ color, borderBottom: `2px solid ${color}` }}
          >
            {t.languages}
          </h2>

          <div className="flex flex-wrap gap-3">
            {languages.map((langItem) => (
              <div key={langItem.id} className="flex items-center gap-2">
                <span className="font-medium text-xs">{langItem.name}</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full text-white"
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

      {/* INTERESTS */}
      {interests.length > 0 && (
        <div>
          <h2
            className="text-base font-bold mb-3 pb-1"
            style={{ color, borderBottom: `2px solid ${color}` }}
          >
            {t.interests}
          </h2>

          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 rounded-full text-xs border"
                style={{ borderColor: color, color }}
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}