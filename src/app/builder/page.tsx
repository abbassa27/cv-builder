'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { useResumeStore } from '@/lib/store';
import { THEME_COLORS, TEMPLATES, LAYOUT_OPTIONS, FONTS } from '@/lib/constants';
import type { LayoutType } from '@/lib/types';

export default function BuilderPage() {
  const router = useRouter();
  const {
    color, setColor,
    layout, setLayout,
    font, setFont,
    templateId, setTemplateId,
    loadSampleData, resetResume,
  } = useResumeStore();

  const [startMode, setStartMode] = useState<'example' | 'blank'>('example');

  const handleStart = () => {
    if (startMode === 'example') {
      loadSampleData();
    } else {
      resetResume();
    }
    router.push('/editor');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900">أنشئ سيرتك الذاتية</h1>
            <p className="text-gray-500 mt-2">اختر القالب والتخطيط والأسلوب</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-8">
            {/* Start Mode */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">ابدأ بـ</label>
              <div className="flex gap-3">
                {[
                  { id: 'example' as const, label: 'مثال', icon: '📋', desc: 'بيانات تجريبية' },
                  { id: 'blank' as const, label: 'فارغ', icon: '📄', desc: 'قالب فارغ' },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setStartMode(mode.id)}
                    className={`flex-1 p-4 rounded-xl border-2 transition-all text-center ${
                      startMode === mode.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-1">{mode.icon}</div>
                    <div className="font-semibold text-sm">{mode.label}</div>
                    <div className="text-xs text-gray-500">{mode.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Template Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">القالب</label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {TEMPLATES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTemplateId(t.id);
                      setLayout(t.layout);
                    }}
                    className={`p-3 rounded-xl border-2 transition-all text-center ${
                      templateId === t.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-xs font-medium truncate">{t.nameAr}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Layout Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">التخطيط</label>
              <div className="flex gap-2 flex-wrap">
                {LAYOUT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setLayout(opt.id as LayoutType)}
                    className={`px-4 py-2.5 rounded-xl border-2 transition-all text-sm ${
                      layout === opt.id
                        ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {opt.nameAr}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">اللون</label>
              <div className="flex gap-2 flex-wrap">
                {THEME_COLORS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setColor(c.value)}
                    title={c.name}
                    className={`w-8 h-8 rounded-full transition-all ${
                      color === c.value
                        ? 'ring-2 ring-offset-2 ring-blue-500 scale-110'
                        : 'hover:scale-110'
                    }`}
                    style={{ backgroundColor: c.value }}
                  />
                ))}
              </div>
            </div>

            {/* Font Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">الخط</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {FONTS.map((f) => (
                  <button
                    key={f.name}
                    onClick={() => setFont(f.name)}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      font === f.name
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-lg font-semibold" style={{ fontFamily: f.name }}>Aa</div>
                    <div className="text-xs text-gray-600 font-medium mt-1">{f.name}</div>
                    <div className="text-xs text-gray-400">{f.descriptionAr}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Start Button */}
            <button
              onClick={handleStart}
              className="w-full py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              ✏️ ابدأ البناء
            </button>

            <div className="text-center text-sm text-gray-400 flex items-center justify-center gap-4">
              <span className="text-green-500">●</span> Free forever
              <span>·</span>
              <span>لا حساب مطلوب</span>
              <span>·</span>
              <span>مجاني للأبد</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
