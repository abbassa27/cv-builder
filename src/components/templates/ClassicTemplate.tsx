import { CVData } from "@/store/cvStore"

export default function ClassicTemplate({ data, color = "#6366f1" }: { data: CVData; color?: string }) {
  const { personal, experience, education, skills, languages, interests } = data
  return (
    <div className="p-10 font-sans text-gray-900 text-sm" dir="rtl">
      <div className="border-b-2 pb-4 mb-6 flex justify-between items-start" style={{ borderColor: color }}>
        <div className="flex-1">
          <h1 className="text-3xl font-bold" style={{ color }}>{personal.name || "اسمك الكامل"}</h1>
          <p className="text-gray-500 text-lg mt-1">{personal.title || "المسمى الوظيفي"}</p>
          <div className="flex gap-4 mt-2 text-xs text-gray-500 flex-wrap">
            {personal.email    && <span>✉ {personal.email}</span>}
            {personal.phone    && <span>📞 {personal.phone}</span>}
            {personal.location && <span>📍 {personal.location}</span>}
          </div>
        </div>
        {personal.photo && (
          <img src={personal.photo} className="w-20 h-20 rounded-full object-cover border-2 mr-4 flex-shrink-0" style={{ borderColor: color }} />
        )}
      </div>

      {personal.summary && (
        <div className="mb-6">
          <h2 className="text-base font-bold mb-2 pb-1" style={{ color, borderBottom: `2px solid ${color}` }}>الملخص المهني</h2>
          <p className="text-gray-700 leading-relaxed">{personal.summary}</p>
        </div>
      )}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold mb-3 pb-1" style={{ color, borderBottom: `2px solid ${color}` }}>الخبرة العملية</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between">
                <span className="font-semibold">{exp.role || "المسمى الوظيفي"}</span>
                <span className="text-gray-500 text-xs">{exp.from} — {exp.current ? "حتى الآن" : exp.to}</span>
              </div>
              <p className="text-gray-500">{exp.company}</p>
              <p className="text-gray-700 mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold mb-3 pb-1" style={{ color, borderBottom: `2px solid ${color}` }}>التعليم</h2>
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
      {skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold mb-3 pb-1" style={{ color, borderBottom: `2px solid ${color}` }}>المهارات</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: color }}>{skill}</span>
            ))}
          </div>
        </div>
      )}
      {languages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold mb-3 pb-1" style={{ color, borderBottom: `2px solid ${color}` }}>اللغات</h2>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <div key={lang.id} className="flex items-center gap-2">
                <span className="font-medium text-xs">{lang.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: color }}>{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {interests.length > 0 && (
        <div>
          <h2 className="text-base font-bold mb-3 pb-1" style={{ color, borderBottom: `2px solid ${color}` }}>الاهتمامات</h2>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span key={interest} className="px-3 py-1 rounded-full text-xs border" style={{ borderColor: color, color }}>{interest}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}