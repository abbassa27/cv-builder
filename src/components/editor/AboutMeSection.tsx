'use client';

import { useResumeStore } from '@/lib/store';
import RichTextEditor from './RichTextEditor';

export default function AboutMeSection() {
  const { resume, setResume } = useResumeStore();

  return (
    <div>
      <p className="text-xs text-gray-400 mb-2">اكتب نبذة مختصرة عن نفسك وخبراتك المهنية</p>
      <RichTextEditor
        content={resume.aboutMe}
        onChange={(content) => setResume({ aboutMe: content })}
      />
    </div>
  );
}
