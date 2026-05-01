import { CVData } from "@/store/cvStore"

export default function TimelineTemplate({ data, color = "#6366f1" }: { data: CVData; color?: string }) {
  const { personal, experience, education, skills, languages, interests } = data
  return (
    <div className="p-10 font-sans text-sm text-gray-900" dir="rtl">
      <div className="flex justify-between items-start mb-8 pb-4 border-b-4" style={{ borderColor: color }}>
        <div className="flex items-center gap-4">
          {personal.photo && (
            <img src={personal.photo} className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2" style={{ borderColor: color }} />
          )}
          <div>
            <h1 className="text-3xl font-black">{personal.name || "اسمك الكامل"}</h1>
            <p className="mt-1" style={{ color }}>{personal.title || "المسمى الوظيفي"}</p>
          </div>
        </div>
        <div className="text-left flex flex-col gap-1 text-xs text-gray-500">
          {personal.email    && <span>{personal.email}</span>}
          {personal.phone    && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
        </div>
      </div>
      {personal.summary && (
        <div className="mb-8 p-4 rounded-lg" style={{ backgroundColor: `${color}15` }}>
          <p className="text-gray-700 leading-relaxed">{personal.summary}</p>
        </div>
      )}
      {experience.length > 0 && (
        <div className="mb-8">
          <h2 className="font-black text-base mb-5" style={{ color }}>الخبرة العملية</h2>
          <div className="relative border-r-2" style={{ borderColor: color }}>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-5 pr-6 relative">
                <div className="absolute right-[-5px] top-1 w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                <div className="flex justify-between">
                  <span className="font-bold">{exp.role}</span>
                  <span className="text-gray-400 text-xs">{exp.from} — {exp.current ? "حتى الآن" : exp.to}</span>
                </div>
                <p className="text-gray-500 text-xs">{exp.company}</p>
                <p className="text-gray-700 mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex gap-8 mb-8">
        {education.length > 0 && (
          <div className="flex-1">
            <h2 className="font-black text-base mb-3" style={{ color }}>التعليم</h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-3 border-r-2 pr-4" style={{ borderColor: color }}>
                <span className="font-semibold">{edu.degree}</span>
                <p className="text-gray-500 text-xs">{edu.school} — {edu.year}</p>
              </div>
            ))}
          </div>
        )}
        {skills.length > 0 && (
          <div className="flex-1">
            <h2 className="font-black text-base mb-3" style={{ color }}>المهارات</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full text-xs border font-medium" style={{ borderColor: color, color }}>{skill}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-8">
        {languages.length > 0 && (
          <div className="flex-1">
            <h2 className="font-black text-base mb-3" style={{ color }}>اللغات</h2>
            <div className="flex flex-col gap-2">
              {languages.map((lang) => (
                <div key={lang.id} className="flex justify-between items-center border-r-2 pr-4" style={{ borderColor: color }}>
                  <span className="font-medium text-xs">{lang.name}</span>
                  <span className="text-xs text-gray-500">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {interests.length > 0 && (
          <div className="flex-1">
            <h2 className="font-black text-base mb-3" style={{ color }}>الاهتمامات</h2>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span key={interest} className="px-3 py-1 rounded-full text-xs border font-medium" style={{ borderColor: color, color }}>{interest}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}