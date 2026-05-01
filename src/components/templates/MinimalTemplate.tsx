import { CVData } from "@/store/cvStore"

export default function MinimalTemplate({ data, color = "#6366f1" }: { data: CVData; color?: string }) {
  const { personal, experience, education, skills } = data
  return (
    <div className="p-12 font-sans text-sm text-gray-800" dir="rtl">
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-light tracking-wide">{personal.name || "اسمك الكامل"}</h1>
          <p className="text-gray-400 mt-1 text-base">{personal.title || "المسمى الوظيفي"}</p>
          <div className="flex gap-5 mt-3 text-xs text-gray-400">
            {personal.email    && <span>{personal.email}</span>}
            {personal.phone    && <span>{personal.phone}</span>}
            {personal.location && <span>{personal.location}</span>}
          </div>
        </div>
        {personal.photo && (
          <img
            src={personal.photo}
            className="w-16 h-16 rounded-full object-cover flex-shrink-0 opacity-90"
            style={{ border: `1px solid ${color}` }}
          />
        )}
      </div>
      {personal.summary && (
        <div className="mb-7">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color }}>ملخص</h2>
          <p className="text-gray-600 leading-relaxed">{personal.summary}</p>
        </div>
      )}
      {experience.length > 0 && (
        <div className="mb-7">
          <h2 className="text-xs uppercase tracking-widest mb-3" style={{ color }}>خبرة</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between">
                <span className="font-medium">{exp.role}</span>
                <span className="text-gray-400 text-xs">{exp.from} — {exp.current ? "حتى الآن" : exp.to}</span>
              </div>
              <p className="text-gray-400 text-xs">{exp.company}</p>
              <p className="text-gray-600 mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div className="mb-7">
          <h2 className="text-xs uppercase tracking-widest mb-3" style={{ color }}>تعليم</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-2 flex justify-between">
              <div>
                <span className="font-medium">{edu.degree}</span>
                <p className="text-gray-400 text-xs">{edu.school}</p>
              </div>
              <span className="text-gray-400 text-xs">{edu.year}</span>
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div>
          <h2 className="text-xs uppercase tracking-widest mb-3" style={{ color }}>مهارات</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="text-xs border-b" style={{ borderColor: color }}>{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}