"use client"

import { CVData } from "@/store/cvStore"

// # NEW FEATURE START
import { useT } from "@/lib/i18n"
import { useLangStore } from "@/store/langStore"
// # NEW FEATURE END

export default function CreativeTemplate({
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
        className="p-10 text-white relative overflow-hidden"
        style={{ backgroundColor: color }}
      >
        <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
        <div className="absolute left-20 bottom-[-30px] w-24 h-24 rounded-full bg-white/10" />

        <div className="flex justify-between items-center relative z-10">
          <div>
            <h1 className="text-4xl font-black">
              {personal.name || (isFR ? "Nom complet" : "اسمك الكامل")}
            </h1>

            <p className="text-white/80 text-lg mt-1">
              {personal.title || (isFR ? "Poste" : "المسمى الوظيفي")}
            </p>

            <div className="flex gap-5 mt-4 text-xs text-white/70 flex-wrap">
              {personal.email && <span>✉ {personal.email}</span>}
              {personal.phone && <span>📞 {personal.phone}</span>}
              {personal.location && <span>📍 {personal.location}</span>}
            </div>
          </div>

          {personal.photo && (
            <img
              src={personal.photo}
              className="w-24 h-24 rounded-full object-cover border-4 border-white/40 flex-shrink-0"
            />
          )}
        </div>
      </div>

      <div className="p-10 flex flex-col gap-7">

        {/* SUMMARY */}
        {personal.summary && (
          <div className="bg-gray-50 rounded-xl p-5">
            <h2 className="font-black text-base mb-2" style={{ color }}>
              ✦ {t.summary}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {personal.summary}
            </p>
          </div>
        )}

        {/* EXPERIENCE */}
        {experience.length > 0 && (
          <div>
            <h2 className="font-black text-base mb-4" style={{ color }}>
              ✦ {t.experience}
            </h2>

            {experience.map((exp) => (
              <div key={exp.id} className="mb-5 flex gap-4">
                <div
                  className="w-2 rounded-full mt-1 flex-shrink-0"
                  style={{ backgroundColor: color }}
                />

                <div>
                  <div className="flex justify-between">
                    <span className="font-bold">{exp.role}</span>

                    <span className="text-gray-400 text-xs">
                      {exp.from} —{" "}
                      {exp.current
                        ? (isFR ? "Présent" : "حتى الآن")
                        : exp.to}
                    </span>
                  </div>

                  <p className="text-gray-500 text-xs">
                    {exp.company}
                  </p>

                  <p className="text-gray-700 mt-1">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-8">

          {/* EDUCATION */}
          {education.length > 0 && (
            <div className="flex-1">
              <h2 className="font-black text-base mb-3" style={{ color }}>
                ✦ {t.education}
              </h2>

              {education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <span className="font-semibold">{edu.degree}</span>
                  <p className="text-gray-500 text-xs">
                    {edu.school} — {edu.year}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* SKILLS */}
          {skills.length > 0 && (
            <div className="flex-1">
              <h2 className="font-black text-base mb-3" style={{ color }}>
                ✦ {t.skills}
              </h2>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg text-xs text-white font-semibold"
                    style={{ backgroundColor: color }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        <div className="flex gap-8">

          {/* LANGUAGES */}
          {languages.length > 0 && (
            <div className="flex-1">
              <h2 className="font-black text-base mb-3" style={{ color }}>
                ✦ {t.languages}
              </h2>

              <div className="flex flex-col gap-2">
                {languages.map((langItem) => (
                  <div
                    key={langItem.id}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm font-medium">
                      {langItem.name}
                    </span>

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
            <div className="flex-1">
              <h2 className="font-black text-base mb-3" style={{ color }}>
                ✦ {t.interests}
              </h2>

              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-lg text-xs bg-gray-50 border"
                    style={{ borderColor: color, color }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  )
}