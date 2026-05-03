'use client';

import { useResumeStore } from '@/lib/store';
import type { Experience, ExperienceLayout } from '@/lib/types';

interface PreviewSectionsProps {
  mainOnly?: boolean;
}

export default function PreviewSections({ mainOnly }: PreviewSectionsProps) {
  const { resume, color, sectionVisibility, experienceLayout } = useResumeStore();

  const sectionTitle = (title: string) => (
    <h2
      className="text-[12px] font-bold uppercase tracking-wide pb-1 mb-2 border-b-2"
      style={{ color, borderColor: color }}
    >
      {title}
    </h2>
  );

  return (
    <div className="space-y-4">
      {/* About Me */}
      {sectionVisibility.aboutMe && resume.aboutMe && (
        <div>
          {sectionTitle('نبذة شخصية')}
          <div
            className="text-[9.5px] text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: resume.aboutMe }}
          />
        </div>
      )}

      {/* Experiences */}
      {sectionVisibility.experiences && resume.experiences.length > 0 && (
        <div>
          {sectionTitle('الخبرات المهنية')}
          <ExperienceList experiences={resume.experiences} layout={experienceLayout} color={color} />
        </div>
      )}

      {/* Education */}
      {sectionVisibility.educations && resume.educations.length > 0 && (
        <div>
          {sectionTitle('التعليم')}
          <div className="space-y-3">
            {resume.educations.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[11px] font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-[9px] text-gray-600">{edu.institution}</p>
                  </div>
                  <div className="text-[8px] text-gray-400 text-left flex-shrink-0">
                    <div>{edu.duration}</div>
                    {edu.location && <div>{edu.location}</div>}
                  </div>
                </div>
                {edu.description && (
                  <p className="text-[9px] text-gray-500 mt-1">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills (non-sidebar layouts only) */}
      {!mainOnly && sectionVisibility.skills && resume.skills.length > 0 && (
        <div>
          {sectionTitle('المهارات')}
          <div className="flex flex-wrap gap-1.5">
            {resume.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded text-[9px]"
                style={{ backgroundColor: color + '15', color }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Languages (non-sidebar layouts only) */}
      {!mainOnly && sectionVisibility.languages && resume.languages.length > 0 && (
        <div>
          {sectionTitle('اللغات')}
          <div className="grid grid-cols-2 gap-2">
            {resume.languages.map((lang) => (
              <div key={lang.id} className="flex justify-between text-[9px]">
                <span className="font-medium text-gray-700">{lang.name}</span>
                <span className="text-gray-400">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interests (non-sidebar layouts only) */}
      {!mainOnly && sectionVisibility.interests && resume.interests.length > 0 && (
        <div>
          {sectionTitle('الاهتمامات')}
          <div className="flex flex-wrap gap-1.5">
            {resume.interests.map((interest) => (
              <span
                key={interest}
                className="px-2 py-0.5 rounded text-[9px] bg-gray-100 text-gray-600"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Certificates (non-sidebar layouts only) */}
      {!mainOnly && sectionVisibility.certificates && resume.certificates.length > 0 && (
        <div>
          {sectionTitle('الشهادات')}
          <div className="space-y-1">
            {resume.certificates.map((cert) => (
              <div key={cert.id} className="text-[9px]">
                <span className="font-medium text-gray-700">{cert.name}</span>
                {cert.issuer && <span className="text-gray-400"> — {cert.issuer}</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ExperienceList({
  experiences,
  layout,
  color,
}: {
  experiences: Experience[];
  layout: ExperienceLayout;
  color: string;
}) {
  switch (layout) {
    case 'timeline':
      return <TimelineLayout experiences={experiences} color={color} />;
    case 'card':
      return <CardLayout experiences={experiences} color={color} />;
    case 'traditional':
      return <TraditionalLayout experiences={experiences} color={color} />;
    case 'journey':
      return <JourneyLayout experiences={experiences} color={color} />;
    case 'modern':
      return <ModernLayout experiences={experiences} color={color} />;
    case 'compact':
      return <CompactLayout experiences={experiences} color={color} />;
    case 'stepladder':
      return <StepladderLayout experiences={experiences} color={color} />;
    case 'creative':
      return <CreativeLayout experiences={experiences} color={color} />;
    default:
      return <DefaultLayout experiences={experiences} color={color} />;
  }
}

function DefaultLayout({ experiences, color }: { experiences: Experience[]; color: string }) {
  return (
    <div className="space-y-3">
      {experiences.map((exp) => (
        <div key={exp.id}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-[11px] font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-[9px]" style={{ color }}>{exp.company}</p>
            </div>
            <div className="text-[8px] text-gray-400 text-left flex-shrink-0">
              <div>{exp.duration}</div>
              {exp.location && <div>{exp.location}</div>}
            </div>
          </div>
          {exp.description && (
            <div
              className="text-[9px] text-gray-600 mt-1"
              dangerouslySetInnerHTML={{ __html: exp.description }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function TimelineLayout({ experiences, color }: { experiences: Experience[]; color: string }) {
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 right-[6px] w-[2px]" style={{ backgroundColor: color + '30' }} />
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pr-6">
            <div className="absolute right-0 top-1 w-3 h-3 rounded-full border-2" style={{ borderColor: color, backgroundColor: '#fff' }} />
            <div>
              <h3 className="text-[11px] font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-[9px]" style={{ color }}>{exp.company} • {exp.duration}</p>
              {exp.location && <p className="text-[8px] text-gray-400">{exp.location}</p>}
            </div>
            {exp.description && (
              <div className="text-[9px] text-gray-600 mt-1" dangerouslySetInnerHTML={{ __html: exp.description }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CardLayout({ experiences, color }: { experiences: Experience[]; color: string }) {
  return (
    <div className="space-y-2">
      {experiences.map((exp) => (
        <div key={exp.id} className="rounded-lg border p-3" style={{ borderColor: color + '30' }}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-[11px] font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-[9px]" style={{ color }}>{exp.company}</p>
            </div>
            <span className="text-[8px] px-1.5 py-0.5 rounded" style={{ backgroundColor: color + '15', color }}>
              {exp.duration}
            </span>
          </div>
          {exp.description && (
            <div className="text-[9px] text-gray-600 mt-1.5" dangerouslySetInnerHTML={{ __html: exp.description }} />
          )}
        </div>
      ))}
    </div>
  );
}

function TraditionalLayout({ experiences }: { experiences: Experience[]; color: string }) {
  return (
    <div className="space-y-3">
      {experiences.map((exp) => (
        <div key={exp.id}>
          <h3 className="text-[11px] font-bold text-gray-900 uppercase">{exp.title}</h3>
          <p className="text-[9px] text-gray-500">{exp.company} | {exp.location} | {exp.duration}</p>
          {exp.description && (
            <div className="text-[9px] text-gray-600 mt-1" dangerouslySetInnerHTML={{ __html: exp.description }} />
          )}
        </div>
      ))}
    </div>
  );
}

function JourneyLayout({ experiences, color }: { experiences: Experience[]; color: string }) {
  return (
    <div className="space-y-3">
      {experiences.map((exp, idx) => (
        <div key={exp.id} className="flex gap-3">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[8px] font-bold" style={{ backgroundColor: color }}>
              {idx + 1}
            </div>
            {idx < experiences.length - 1 && <div className="flex-1 w-[1px] mt-1" style={{ backgroundColor: color + '30' }} />}
          </div>
          <div className="flex-1 pb-2">
            <h3 className="text-[11px] font-semibold text-gray-900">{exp.title}</h3>
            <p className="text-[9px]" style={{ color }}>{exp.company} • {exp.duration}</p>
            {exp.description && (
              <div className="text-[9px] text-gray-600 mt-1" dangerouslySetInnerHTML={{ __html: exp.description }} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function ModernLayout({ experiences, color }: { experiences: Experience[]; color: string }) {
  return (
    <div className="space-y-3">
      {experiences.map((exp) => (
        <div key={exp.id} className="border-r-2 pr-3" style={{ borderColor: color }}>
          <div className="flex items-center gap-2">
            <h3 className="text-[11px] font-semibold text-gray-900">{exp.title}</h3>
            <span className="text-[7px] px-1.5 py-0.5 rounded-full" style={{ backgroundColor: color + '15', color }}>
              {exp.duration}
            </span>
          </div>
          <p className="text-[9px] text-gray-500">{exp.company} — {exp.location}</p>
          {exp.description && (
            <div className="text-[9px] text-gray-600 mt-1" dangerouslySetInnerHTML={{ __html: exp.description }} />
          )}
        </div>
      ))}
    </div>
  );
}

function CompactLayout({ experiences, color }: { experiences: Experience[]; color: string }) {
  return (
    <div className="space-y-1.5">
      {experiences.map((exp) => (
        <div key={exp.id} className="flex gap-3 text-[9px]">
          <span className="font-medium text-gray-400 w-24 flex-shrink-0">{exp.duration}</span>
          <div className="flex-1">
            <span className="font-semibold text-gray-900">{exp.title}</span>
            <span style={{ color }}> @ {exp.company}</span>
            {exp.description && (
              <div className="text-gray-600 mt-0.5" dangerouslySetInnerHTML={{ __html: exp.description }} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function StepladderLayout({ experiences, color }: { experiences: Experience[]; color: string }) {
  return (
    <div className="space-y-2">
      {experiences.map((exp, idx) => (
        <div key={exp.id} style={{ marginRight: `${idx * 12}px` }}>
          <div className="rounded-lg p-2" style={{ backgroundColor: color + '08', borderRight: `3px solid ${color}` }}>
            <h3 className="text-[11px] font-semibold text-gray-900">{exp.title}</h3>
            <p className="text-[9px]" style={{ color }}>{exp.company} • {exp.duration}</p>
            {exp.description && (
              <div className="text-[9px] text-gray-600 mt-1" dangerouslySetInnerHTML={{ __html: exp.description }} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function CreativeLayout({ experiences, color }: { experiences: Experience[]; color: string }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {experiences.map((exp) => (
        <div key={exp.id} className="rounded-lg p-2.5 border" style={{ borderColor: color + '20' }}>
          <div className="w-full h-1 rounded-full mb-2" style={{ backgroundColor: color }} />
          <h3 className="text-[10px] font-semibold text-gray-900">{exp.title}</h3>
          <p className="text-[8px]" style={{ color }}>{exp.company}</p>
          <p className="text-[7px] text-gray-400 mt-0.5">{exp.duration}</p>
          {exp.description && (
            <div className="text-[8px] text-gray-600 mt-1 line-clamp-3" dangerouslySetInnerHTML={{ __html: exp.description }} />
          )}
        </div>
      ))}
    </div>
  );
}
