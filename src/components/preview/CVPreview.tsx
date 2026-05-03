'use client';

import { useResumeStore } from '@/lib/store';
import PreviewHeader from './PreviewHeader';
import PreviewSections from './PreviewSections';

export default function CVPreview() {
  const { color, layout, font } = useResumeStore();

  const isSidebar = layout === 'left' || layout === 'right' || layout === 'left-header' || layout === 'right-header' || layout === 'split';
  const isHeader = layout === 'header' || layout === 'left-header' || layout === 'right-header';

  return (
    <div
      id="cv-preview-container"
      className="cv-preview bg-white shadow-2xl"
      style={{
        width: '210mm',
        minHeight: '297mm',
        fontFamily: font || 'Inter, sans-serif',
        maxWidth: '100%',
      }}
    >
      {/* Header Layout */}
      {isHeader && (
        <div style={{ backgroundColor: color, color: '#fff' }} className="p-6">
          <PreviewHeader headerMode />
        </div>
      )}

      {/* Sidebar Layout */}
      {isSidebar ? (
        <div className="flex" style={{ minHeight: isHeader ? 'auto' : '297mm' }}>
          {/* Sidebar */}
          <div
            className={`w-[35%] p-5 ${layout === 'right' || layout === 'right-header' ? 'order-2' : 'order-1'}`}
            style={{ backgroundColor: color, color: '#fff' }}
          >
            {!isHeader && <PreviewHeader headerMode={false} sidebarMode />}
            <SidebarSections />
          </div>

          {/* Main content */}
          <div className={`flex-1 p-6 ${layout === 'right' || layout === 'right-header' ? 'order-1' : 'order-2'}`}>
            {!isHeader && !isSidebar && <PreviewHeader headerMode={false} />}
            <PreviewSections mainOnly />
          </div>
        </div>
      ) : (
        /* Single column layout */
        <div className="p-6">
          {!isHeader && <PreviewHeader headerMode={false} />}
          <PreviewSections />
        </div>
      )}
    </div>
  );
}

function SidebarSections() {
  const { resume, sectionVisibility, color } = useResumeStore();

  const lightColor = color + '33';

  return (
    <div className="mt-4 space-y-4 text-[9px]">
      {/* Contact Info */}
      {resume.contacts.length > 0 && (
        <div>
          <h3 className="text-[10px] font-bold border-b border-white/30 pb-1 mb-2 uppercase tracking-wide">
            معلومات الاتصال
          </h3>
          <div className="space-y-1.5">
            {resume.contacts.filter(c => c.value).map((contact) => (
              <div key={contact.id} className="flex items-center gap-1.5 opacity-90">
                <span className="text-[8px]">
                  {contact.icon === 'email' ? '📧' : contact.icon === 'phone' ? '📱' : contact.icon === 'location' ? '📍' : '🔗'}
                </span>
                <span className="break-all">{contact.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {sectionVisibility.skills && resume.skills.length > 0 && (
        <div>
          <h3 className="text-[10px] font-bold border-b border-white/30 pb-1 mb-2 uppercase tracking-wide">
            المهارات
          </h3>
          <div className="flex flex-wrap gap-1">
            {resume.skills.map((skill) => (
              <span
                key={skill}
                className="px-1.5 py-0.5 rounded text-[8px]"
                style={{ backgroundColor: lightColor }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {sectionVisibility.languages && resume.languages.length > 0 && (
        <div>
          <h3 className="text-[10px] font-bold border-b border-white/30 pb-1 mb-2 uppercase tracking-wide">
            اللغات
          </h3>
          <div className="space-y-1">
            {resume.languages.map((lang) => (
              <div key={lang.id} className="flex justify-between">
                <span>{lang.name}</span>
                <span className="opacity-70 text-[8px]">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interests */}
      {sectionVisibility.interests && resume.interests.length > 0 && (
        <div>
          <h3 className="text-[10px] font-bold border-b border-white/30 pb-1 mb-2 uppercase tracking-wide">
            الاهتمامات
          </h3>
          <div className="flex flex-wrap gap-1">
            {resume.interests.map((interest) => (
              <span key={interest} className="px-1.5 py-0.5 rounded text-[8px]" style={{ backgroundColor: lightColor }}>
                {interest}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Certificates */}
      {sectionVisibility.certificates && resume.certificates.length > 0 && (
        <div>
          <h3 className="text-[10px] font-bold border-b border-white/30 pb-1 mb-2 uppercase tracking-wide">
            الشهادات
          </h3>
          <div className="space-y-1">
            {resume.certificates.map((cert) => (
              <div key={cert.id}>
                <div className="font-medium">{cert.name}</div>
                <div className="opacity-70 text-[7px]">{cert.issuer}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
