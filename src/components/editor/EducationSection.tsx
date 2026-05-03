'use client';

import { useResumeStore } from '@/lib/store';

export default function EducationSection() {
  const { resume, addEducation, updateEducation, removeEducation } = useResumeStore();

  return (
    <div className="space-y-4">
      {resume.educations.map((edu, idx) => (
        <div key={edu.id} className="bg-gray-50 rounded-xl p-4 space-y-3 relative group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-400">تعليم {idx + 1}</span>
            <button
              onClick={() => removeEducation(edu.id)}
              className="text-xs text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              حذف
            </button>
          </div>
          <input
            type="text"
            placeholder="المؤسسة التعليمية"
            value={edu.institution}
            onChange={(e) => updateEducation(edu.id, { institution: e.target.value })}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="الدرجة العلمية"
            value={edu.degree}
            onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="الموقع"
              value={edu.location}
              onChange={(e) => updateEducation(edu.id, { location: e.target.value })}
              className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="المدة (مثل: 2016 - 2020)"
              value={edu.duration}
              onChange={(e) => updateEducation(edu.id, { duration: e.target.value })}
              className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <textarea
            placeholder="وصف إضافي (اختياري)"
            value={edu.description}
            onChange={(e) => updateEducation(edu.id, { description: e.target.value })}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={2}
          />
        </div>
      ))}

      <button
        onClick={addEducation}
        className="w-full py-2.5 text-sm text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors font-medium"
      >
        + إضافة تعليم
      </button>
    </div>
  );
}
