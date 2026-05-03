'use client';

import { useResumeStore } from '@/lib/store';

export default function CertificatesSection() {
  const { resume, addCertificate, updateCertificate, removeCertificate } = useResumeStore();

  return (
    <div className="space-y-3">
      {resume.certificates.map((cert, idx) => (
        <div key={cert.id} className="bg-gray-50 rounded-xl p-4 space-y-3 group relative">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-400">شهادة {idx + 1}</span>
            <button
              onClick={() => removeCertificate(cert.id)}
              className="text-xs text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              حذف
            </button>
          </div>
          <input
            type="text"
            placeholder="اسم الشهادة"
            value={cert.name}
            onChange={(e) => updateCertificate(cert.id, { name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="الجهة المصدرة"
            value={cert.issuer}
            onChange={(e) => updateCertificate(cert.id, { issuer: e.target.value })}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      ))}

      <button
        onClick={addCertificate}
        className="w-full py-2.5 text-sm text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors font-medium"
      >
        + إضافة شهادة
      </button>
    </div>
  );
}
