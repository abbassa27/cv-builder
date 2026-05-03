'use client';

import { useResumeStore } from '@/lib/store';
import EditorPanel from '@/components/editor/EditorPanel';
import CVPreview from '@/components/preview/CVPreview';
import EditorToolbar from '@/components/editor/EditorToolbar';
import Link from 'next/link';

export default function EditorPage() {
  const { resume } = useResumeStore();
  const displayName = resume.firstName && resume.lastName
    ? `${resume.firstName} ${resume.lastName}`
    : 'سيرة ذاتية جديدة';

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 flex-shrink-0">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-l from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Cviya
          </span>
        </Link>
        <span className="text-sm text-gray-500 hidden sm:block">{displayName}</span>
        <div className="flex items-center gap-2">
          <Link href="/builder" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            الإعدادات
          </Link>
        </div>
      </header>

      {/* Main Editor Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Preview Panel (Left in RTL) */}
        <div className="flex-1 overflow-auto bg-gray-200 p-4 sm:p-6 flex items-start justify-center">
          <CVPreview />
        </div>

        {/* Form Panel (Right in RTL) */}
        <div className="w-full sm:w-[400px] lg:w-[440px] bg-white border-s border-gray-200 overflow-y-auto flex-shrink-0">
          <EditorPanel />
        </div>
      </div>

      {/* Bottom Toolbar */}
      <EditorToolbar />
    </div>
  );
}
