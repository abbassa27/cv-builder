'use client';

import { useResumeStore } from '@/lib/store';
import RichTextEditor from './RichTextEditor';

export default function ExperienceSection() {
  const { resume, addExperience, updateExperience, removeExperience } = useResumeStore();

  return (
    <div className="space-y-4">
      {resume.experiences.map((exp, idx) => (
        <div key={exp.id} className="bg-gray-50 rounded-xl p-4 space-y-3 relative group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-400">خبرة {idx + 1}</span>
            <button
              onClick={() => removeExperience(exp.id)}
              className="text-xs text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              حذف
            </button>
          </div>
          <input
            type="text"
            placeholder="المسمى الوظيفي"
            value={exp.title}
            onChange={(e) => updateExperience(exp.id, { title: e.target.value })}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="الشركة"
            value={exp.company}
            onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="الموقع"
              value={exp.location}
              onChange={(e) => updateExperience(exp.id, { location: e.target.value })}
              className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="المدة (مثل: يناير 2020 - حتى الآن)"
              value={exp.duration}
              onChange={(e) => updateExperience(exp.id, { duration: e.target.value })}
              className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">الوصف</label>
            <RichTextEditor
              content={exp.description}
              onChange={(content) => updateExperience(exp.id, { description: content })}
            />
          </div>
        </div>
      ))}

      <button
        onClick={addExperience}
        className="w-full py-2.5 text-sm text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors font-medium"
      >
        + إضافة خبرة
      </button>
    </div>
  );
}
