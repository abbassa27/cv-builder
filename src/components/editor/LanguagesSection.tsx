'use client';

import { useResumeStore } from '@/lib/store';
import { LANGUAGE_LEVELS } from '@/lib/constants';

export default function LanguagesSection() {
  const { resume, addLanguage, updateLanguage, removeLanguage } = useResumeStore();

  return (
    <div className="space-y-3">
      {resume.languages.map((lang, idx) => (
        <div key={lang.id} className="flex items-center gap-2 group">
          <input
            type="text"
            placeholder="اللغة"
            value={lang.name}
            onChange={(e) => updateLanguage(lang.id, { name: e.target.value })}
            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <select
            value={lang.level}
            onChange={(e) => updateLanguage(lang.id, { level: e.target.value })}
            className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            {LANGUAGE_LEVELS.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
          <button
            onClick={() => removeLanguage(lang.id)}
            className="w-8 h-8 rounded-lg text-red-400 hover:bg-red-50 flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
          >
            ✕
          </button>
        </div>
      ))}

      <button
        onClick={addLanguage}
        className="w-full py-2.5 text-sm text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors font-medium"
      >
        + إضافة لغة
      </button>
    </div>
  );
}
