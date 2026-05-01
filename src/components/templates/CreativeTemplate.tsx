import { CVData } from "@/store/cvStore"

export default function CreativeTemplate({ data, color = "#6366f1" }: { data: CVData; color?: string }) {
  const { personal, experience, education, skills } = data
  return (
    <div className="font-sans text-sm text-gray-900 min-h-[297mm]" dir="rtl">
      {/* Header جريء */}
      <div className="p-10 text-white relative overflow-hidden" style={{ backgroundColor: color }}>
        <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
        <div className="absolute left-20 bottom-[-30px] w-24 h-24 rounded-full bg-white/10" />
        <div className="flex justify-between items-center relative z-10">
          <div>
            <h1 className="text-4xl font-black">{personal.name || "اسمك الكامل"}</h1>
            <p className="text-white/80 text-lg mt-1">{personal.title || "المسمى الوظيفي"}</p>
            <div className="flex gap-5 mt-4 text-xs text-white/70 flex-wrap">
              {personal.email    && <span>✉ {personal.email}</span>}
              {personal.phone    && <span>📞 {personal.phone}</span>}
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
        {personal.summary && (
          <div className="bg-gray-50 rounded-xl p-5">
            <h2 className="font-black text-base mb-2" style={{ color }}>✦ الملخص</h2>
            <p className="text-gray-700 leading-relaxed">{personal.summary}</p>
          </div>
        )}
        {experience.length > 0 && (
          <div>
            <h2 className="font-black text-base mb-4" style={{ color }}>✦ الخبرة العملية</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-5 flex gap-4">
                <div className="w-2 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: color }} />
                <div>
                  <div className="flex justify-between">
                    <span className="font-bold">{exp.role}</span>
                    <span className="text-gray-400 text-xs">{exp.from} — {exp.current ? "حتى الآن" : exp.to}</span>
                  </div>
                  <p className="text-gray-500 text-xs">{exp.company}</p>
                  <p className="text-gray-700 mt-1">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex gap-8">
          {education.length > 0 && (
            <div className="flex-1">
              <h2 className="font-black text-base mb-3" style={{ color }}>✦ التعليم</h2>
              {education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <span className="font-semibold">{edu.degree}</span>
                  <p className="text-gray-500 text-xs">{edu.school} — {edu.year}</p>
                </div>
              ))}
            </div>
          )}
          {skills.length > 0 && (
            <div className="flex-1">
              <h2 className="font-black text-base mb-3" style={{ color }}>✦ المهارات</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-lg text-xs text-white font-semibold" style={{ backgroundColor: color }}>{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}