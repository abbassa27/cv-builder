'use client';

import { useState } from 'react';
import { useResumeStore } from '@/lib/store';

export default function SkillsSection() {
  const { resume, addSkill, removeSkill } = useResumeStore();
  const [input, setInput] = useState('');

  const handleAdd = () => {
    const trimmed = input.trim();
    if (trimmed && !resume.skills.includes(trimmed)) {
      addSkill(trimmed);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="space-y-3">
      <p className="text-xs text-gray-400">اكتب مهارة ثم اضغط Enter</p>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="أضف مهارة..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          إضافة
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {resume.skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-sm group"
          >
            {skill}
            <button
              onClick={() => removeSkill(skill)}
              className="text-blue-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* Quick add suggestions */}
      <div className="border-t border-gray-100 pt-3">
        <p className="text-xs text-gray-400 mb-2">اقتراحات سريعة</p>
        <div className="flex flex-wrap gap-1.5">
          {['JavaScript', 'Python', 'React', 'Node.js', 'TypeScript', 'SQL', 'Git', 'Docker', 'AWS', 'Figma'].map((s) => (
            <button
              key={s}
              onClick={() => {
                if (!resume.skills.includes(s)) addSkill(s);
              }}
              disabled={resume.skills.includes(s)}
              className="px-2.5 py-1 text-xs rounded-md bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              + {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
