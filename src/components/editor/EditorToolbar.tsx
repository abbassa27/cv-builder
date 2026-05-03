'use client';

import { useState, useCallback } from 'react';
import { useResumeStore } from '@/lib/store';
import { THEME_COLORS, LAYOUT_OPTIONS } from '@/lib/constants';
import type { LayoutType, ExperienceLayout } from '@/lib/types';

const EXP_LAYOUTS: { id: ExperienceLayout; label: string }[] = [
  { id: 'default', label: 'افتراضي' },
  { id: 'timeline', label: 'خط زمني' },
  { id: 'card', label: 'بطاقات' },
  { id: 'traditional', label: 'تقليدي' },
  { id: 'journey', label: 'رحلة' },
  { id: 'modern', label: 'عصري' },
  { id: 'compact', label: 'مضغوط' },
  { id: 'stepladder', label: 'سلّمي' },
  { id: 'creative', label: 'إبداعي' },
];

export default function EditorToolbar() {
  const { color, setColor, layout, setLayout, experienceLayout, setExperienceLayout } =
    useResumeStore();
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const [exporting, setExporting] = useState(false);

  const togglePanel = (panel: string) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  const handleExportPDF = useCallback(async () => {
    setExporting(true);
    try {
      const el = document.getElementById('cv-preview-container');
      if (!el) return;

      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).default;

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;

      pdf.addImage(imgData, 'PNG', imgX, 0, imgWidth * ratio, imgHeight * ratio);
      pdf.save('cv.pdf');
    } catch (err) {
      console.error('PDF export failed:', err);
    } finally {
      setExporting(false);
    }
  }, []);

  return (
    <>
      {/* Popup panels */}
      {activePanel && (
        <div className="absolute bottom-14 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 p-4 max-h-60 overflow-y-auto">
          {activePanel === 'colors' && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">اختر اللون</h4>
              <div className="flex flex-wrap gap-2">
                {THEME_COLORS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => { setColor(c.value); setActivePanel(null); }}
                    title={c.name}
                    className={`w-8 h-8 rounded-full transition-all ${
                      color === c.value ? 'ring-2 ring-offset-2 ring-blue-500 scale-110' : 'hover:scale-110'
                    }`}
                    style={{ backgroundColor: c.value }}
                  />
                ))}
              </div>
            </div>
          )}
          {activePanel === 'layout' && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">تخطيط الصفحة</h4>
              <div className="flex flex-wrap gap-2">
                {LAYOUT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => { setLayout(opt.id as LayoutType); setActivePanel(null); }}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      layout === opt.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {opt.nameAr}
                  </button>
                ))}
              </div>
            </div>
          )}
          {activePanel === 'expLayout' && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">تخطيط الخبرات</h4>
              <div className="flex flex-wrap gap-2">
                {EXP_LAYOUTS.map((el) => (
                  <button
                    key={el.id}
                    onClick={() => { setExperienceLayout(el.id); setActivePanel(null); }}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      experienceLayout === el.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {el.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Toolbar */}
      <div className="h-12 bg-white border-t border-gray-200 flex items-center justify-between px-4 flex-shrink-0 relative">
        <div className="flex items-center gap-2">
          <button
            onClick={() => togglePanel('colors')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-100 transition-colors"
          >
            <span className="w-4 h-4 rounded-full border border-gray-200" style={{ backgroundColor: color }} />
            <span className="hidden sm:inline text-gray-600">اللون</span>
          </button>
          <button
            onClick={() => togglePanel('layout')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors"
          >
            📐 <span className="hidden sm:inline">التخطيط</span>
          </button>
          <button
            onClick={() => togglePanel('expLayout')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors"
          >
            📋 <span className="hidden sm:inline">تخطيط الخبرات</span>
          </button>
        </div>

        <button
          onClick={handleExportPDF}
          disabled={exporting}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {exporting ? (
            <>
              <span className="animate-spin">⏳</span>
              جاري التصدير...
            </>
          ) : (
            <>📥 تحميل PDF</>
          )}
        </button>
      </div>
    </>
  );
}
