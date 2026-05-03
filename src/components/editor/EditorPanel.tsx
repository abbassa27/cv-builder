'use client';

import { useState } from 'react';
import { useResumeStore } from '@/lib/store';
import ProfileSection from './ProfileSection';
import AboutMeSection from './AboutMeSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import LanguagesSection from './LanguagesSection';
import InterestsSection from './InterestsSection';
import CertificatesSection from './CertificatesSection';

interface SectionConfig {
  key: string;
  label: string;
  count?: number;
  component: React.ReactNode;
  hidden?: boolean;
}

export default function EditorPanel() {
  const { resume, sectionVisibility, setSectionVisibility } = useResumeStore();
  const [expanded, setExpanded] = useState<string>('profile');

  const toggle = (key: string) => {
    setExpanded(expanded === key ? '' : key);
  };

  const sections: SectionConfig[] = [
    { key: 'profile', label: 'الملف الشخصي', component: <ProfileSection /> },
    { key: 'aboutMe', label: 'نبذة شخصية', component: <AboutMeSection />, hidden: !sectionVisibility.aboutMe },
    { key: 'experiences', label: 'الخبرات المهنية', count: resume.experiences.length, component: <ExperienceSection />, hidden: !sectionVisibility.experiences },
    { key: 'educations', label: 'التعليم', count: resume.educations.length, component: <EducationSection />, hidden: !sectionVisibility.educations },
    { key: 'skills', label: 'المهارات', count: resume.skills.length, component: <SkillsSection />, hidden: !sectionVisibility.skills },
    { key: 'languages', label: 'اللغات', count: resume.languages.length, component: <LanguagesSection />, hidden: !sectionVisibility.languages },
    { key: 'interests', label: 'الاهتمامات', count: resume.interests.length, component: <InterestsSection />, hidden: !sectionVisibility.interests },
    { key: 'certificates', label: 'الشهادات', count: resume.certificates.length, component: <CertificatesSection />, hidden: !sectionVisibility.certificates },
  ];

  const hiddenSections = [
    { key: 'certificates', label: 'الشهادات' },
    { key: 'projects', label: 'المشاريع' },
    { key: 'courses', label: 'الدورات' },
    { key: 'awards', label: 'الجوائز' },
  ].filter((s) => !sectionVisibility[s.key as keyof typeof sectionVisibility]);

  return (
    <div className="divide-y divide-gray-100">
      {sections
        .filter((s) => !s.hidden)
        .map((section) => (
          <div key={section.key}>
            <button
              onClick={() => toggle(section.key)}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    expanded === section.key ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <h3 className="font-semibold text-sm text-gray-900">{section.label}</h3>
                {section.count !== undefined && (
                  <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500">
                    {section.count}
                  </span>
                )}
              </div>
            </button>
            {expanded === section.key && (
              <div className="px-4 pb-4">{section.component}</div>
            )}
          </div>
        ))}

      {/* Hidden sections */}
      {hiddenSections.length > 0 && (
        <div className="px-4 py-4">
          <p className="text-xs font-medium text-gray-400 mb-2 uppercase">أقسام مخفية</p>
          <div className="flex flex-wrap gap-2">
            {hiddenSections.map((s) => (
              <button
                key={s.key}
                onClick={() =>
                  setSectionVisibility(s.key as keyof typeof sectionVisibility, true)
                }
                className="px-3 py-1.5 text-xs rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                + {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
