'use client';

import { useResumeStore } from '@/lib/store';

export default function ProfileSection() {
  const { resume, setResume } = useResumeStore();

  const updateContact = (id: string, value: string) => {
    setResume({
      contacts: resume.contacts.map((c) =>
        c.id === id ? { ...c, value } : c
      ),
    });
  };

  const addContact = () => {
    setResume({
      contacts: [
        ...resume.contacts,
        { id: Date.now().toString(), icon: 'link', value: '' },
      ],
    });
  };

  const removeContact = (id: string) => {
    setResume({
      contacts: resume.contacts.filter((c) => c.id !== id),
    });
  };

  return (
    <div className="space-y-4">
      {/* Photo placeholder */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs cursor-pointer hover:bg-gray-50 transition-colors flex-shrink-0">
          الصورة
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="الاسم الأول"
              value={resume.firstName}
              onChange={(e) => setResume({ firstName: e.target.value })}
              className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="اسم العائلة"
              value={resume.lastName}
              onChange={(e) => setResume({ lastName: e.target.value })}
              className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <input
            type="text"
            placeholder="المسمى الوظيفي"
            value={resume.jobTitle}
            onChange={(e) => setResume({ jobTitle: e.target.value })}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Contact Links */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-gray-500">معلومات الاتصال</label>
        {resume.contacts.map((contact) => (
          <div key={contact.id} className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-xs text-gray-500 flex-shrink-0">
              {contact.icon === 'email' ? '📧' : contact.icon === 'phone' ? '📱' : contact.icon === 'location' ? '📍' : '🔗'}
            </span>
            <input
              type="text"
              value={contact.value}
              onChange={(e) => updateContact(contact.id, e.target.value)}
              placeholder={
                contact.icon === 'email' ? 'البريد الإلكتروني' :
                contact.icon === 'phone' ? 'رقم الهاتف' :
                contact.icon === 'location' ? 'الموقع الجغرافي' : 'رابط'
              }
              className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {contact.icon !== 'email' && contact.icon !== 'phone' && contact.icon !== 'location' && (
              <button
                onClick={() => removeContact(contact.id)}
                className="w-8 h-8 rounded-lg text-red-400 hover:bg-red-50 flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            )}
          </div>
        ))}
        <button
          onClick={addContact}
          className="w-full py-2 text-xs text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
        >
          + إضافة رابط
        </button>
      </div>

      {/* Quick add buttons */}
      <div className="flex flex-wrap gap-2">
        {['لينكدإن', 'GitHub', 'الموقع الإلكتروني', 'تويتر / X'].map((label) => (
          <button
            key={label}
            onClick={() =>
              setResume({
                contacts: [
                  ...resume.contacts,
                  { id: Date.now().toString(), icon: 'link', value: '' },
                ],
              })
            }
            className="px-3 py-1 text-xs rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
