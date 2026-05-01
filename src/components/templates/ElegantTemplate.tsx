import { CVData } from "@/store/cvStore"

export default function ElegantTemplate({ data, color = "#6366f1" }: { data: CVData; color?: string }) {
  const { personal, experience, education, skills } = data
  return (
    <div className="p-12 font-serif text-sm text-gray-800" dir="rtl">
      <div className="text-center mb-8 pb-6 border-b" style={{ borderColor: color }}>
        {personal.photo && (
          <img
            src={personal.photo}
            className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2"
            style={{ borderColor: color }}
          />
        )}
        <h1 className="text-3xl font-bold tracking-widest uppercase">{personal.name || "اسمك الكامل"}</h1>
        <p className="text-gray-500 mt-2 italic">{personal.title || "المسمى الوظيفي"}</p>
        <div className="flex justify-center gap-6 mt-3 text-xs text-gray-400">
          {personal.email    && <span>{personal.email}</span>}
          {personal.phone    && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
        </div>
      </div>
      {personal.summary && (
        <div className="mb-7 text-center">
          <p className="text-gray-600 leading-relaxed italic">{personal.summary}</p>
        </div>
      )}
      {experience.length > 0 && (
        <div className="mb-7">
          <h2 className="text-center text-xs uppercase tracking-widest mb-4" style={{ color }}>— الخبرة العملية —</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4 text-center">
              <span className="font-bold">{exp.role}</span>
              <p className="text-gray-500 text-xs">{exp.company} | {exp.from} — {exp.current ? "حتى الآن" : exp.to}</p>
              <p className="text-gray-600 mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div className="mb-7">
          <h2 className="text-center text-xs uppercase tracking-widest mb-4" style={{ color }}>— التعليم —</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-2 text-center">
              <span className="font-bold">{edu.degree}</span>
              <p className="text-gray-500 text-xs">{edu.school} — {edu.year}</p>
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div>
          <h2 className="text-center text-xs uppercase tracking-widest mb-3" style={{ color }}>— المهارات —</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span key={skill} className="text-xs px-3 py-1 border rounded-full" style={{ borderColor: color, color }}>{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}