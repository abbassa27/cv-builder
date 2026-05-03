'use client';

import { useResumeStore } from '@/lib/store';

interface PreviewHeaderProps {
  headerMode?: boolean;
  sidebarMode?: boolean;
}

export default function PreviewHeader({ headerMode, sidebarMode }: PreviewHeaderProps) {
  const { resume, color } = useResumeStore();

  if (sidebarMode) {
    return (
      <div className="text-center mb-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold mb-2">
          {resume.firstName?.[0] || ''}
          {resume.lastName?.[0] || ''}
        </div>
        <h1 className="text-base font-bold">
          {resume.firstName} {resume.lastName}
        </h1>
        <p className="text-[10px] opacity-80 mt-0.5">{resume.jobTitle}</p>
      </div>
    );
  }

  if (headerMode) {
    return (
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold flex-shrink-0">
          {resume.firstName?.[0] || ''}
          {resume.lastName?.[0] || ''}
        </div>
        <div>
          <h1 className="text-2xl font-bold">
            {resume.firstName} {resume.lastName}
          </h1>
          <p className="text-sm opacity-80">{resume.jobTitle}</p>
          <div className="flex items-center gap-3 mt-1 text-[9px] opacity-80 flex-wrap">
            {resume.contacts.filter(c => c.value).map((c) => (
              <span key={c.id} className="flex items-center gap-1">
                {c.icon === 'email' ? '📧' : c.icon === 'phone' ? '📱' : c.icon === 'location' ? '📍' : '🔗'}
                {c.value}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <div className="flex items-center gap-3">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold text-white flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          {resume.firstName?.[0] || ''}
          {resume.lastName?.[0] || ''}
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            {resume.firstName} {resume.lastName}
          </h1>
          <p className="text-[11px]" style={{ color }}>
            {resume.jobTitle}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-2 text-[9px] text-gray-500 flex-wrap">
        {resume.contacts.filter(c => c.value).map((c) => (
          <span key={c.id} className="flex items-center gap-1">
            {c.icon === 'email' ? '📧' : c.icon === 'phone' ? '📱' : c.icon === 'location' ? '📍' : '🔗'}
            {c.value}
          </span>
        ))}
      </div>
    </div>
  );
}
