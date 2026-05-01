import { CVData } from "@/store/cvStore"

export default function ModernTemplate({ data, color = "#6366f1" }: { data: CVData; color?: string }) {
  const { personal, experience, education, skills } = data
  return (
    <div className="flex font-sans text-sm text-gray-900 min-h-[297mm]" dir="rtl">
      {/* شريط جانبي */}
      <div className="w-1/3 p-6 text-white flex flex-col gap-6" style={{ backgroundColor: color }}>
        {/* الصورة */}
        {personal.photo && (
          <div className="flex justify-center">
            <img
              src={personal.photo}
              className="w-24 h-24 rounded-full object-cover border-4 border-white/40"
            />
          </div>
        )}
        <div>
          <h1 className="text-2xl font-bold">{personal.name || "اسمك الكامل"}</h1>
          <p className="text-white/80 mt-1">{personal.title || "المسمى الوظيفي"}</p>
        </div>
        <div className="flex flex-col gap-2 text-xs text-white/90">
          {personal.email    && <span>✉ {personal.email}</span>}
          {personal.phone    && <span>📞 {personal.phone}</span>}
          {personal.location && <span>📍 {personal.location}</span>}
        </div>
        {skills.length > 0 && (
          <div>
            <h2 className="font-bold text-sm mb-2 border-b border-white/30 pb-1">المهارات</h2>
            <div className="flex flex-col gap-1">
              {skills.map((skill) => (
                <span key={skill} className="bg-white/20 rounded px-2 py-1 text-xs">{skill}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* المحتوى */}
      <div className="w-2/3 p-8 flex flex-col gap-6">
        {personal.summary && (
          <div>
            <h2 className="font-bold text-base mb-2" style={{ color }}>الملخص المهني</h2>
            <p className="text-gray-700 leading-relaxed">{personal.summary}</p>
          </div>
        )}
        {experience.length > 0 && (
          <div>
            <h2 className="font-bold text-base mb-3" style={{ color }}>الخبرة العملية</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-4 border-r-2 pr-3" style={{ borderColor: color }}>
                <div className="flex justify-between">
                  <span className="font-semibold">{exp.role}</span>
                  <span className="text-gray-400 text-xs">{exp.from} — {exp.current ? "حتى الآن" : exp.to}</span>
                </div>
                <p className="text-gray-500">{exp.company}</p>
                <p className="text-gray-700 mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        )}
        {education.length > 0 && (
          <div>
            <h2 className="font-bold text-base mb-3" style={{ color }}>التعليم</h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-2 flex justify-between">
                <div>
                  <span className="font-semibold">{edu.degree}</span>
                  <p className="text-gray-500">{edu.school}</p>
                </div>
                <span className="text-gray-400 text-xs">{edu.year}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}