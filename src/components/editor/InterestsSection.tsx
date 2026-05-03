'use client';

import { useState } from 'react';
import { useResumeStore } from '@/lib/store';

export default function InterestsSection() {
  const { resume, addInterest, removeInterest } = useResumeStore();
  const [input, setInput] = useState('');

  const handleAdd = () => {
    const trimmed = input.trim();
    if (trimmed && !resume.interests.includes(trimmed)) {
      addInterest(trimmed);
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
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="أضف اهتمام..."
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
        {resume.interests.map((interest) => (
          <span
            key={interest}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-purple-50 text-purple-700 text-sm group"
          >
            {interest}
            <button
              onClick={() => removeInterest(interest)}
              className="text-purple-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
