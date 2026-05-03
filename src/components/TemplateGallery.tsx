'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TEMPLATES } from '@/lib/constants';

type Filter = 'all' | 'single' | 'two-col';

export default function TemplateGallery() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = TEMPLATES.filter((t) => {
    if (filter === 'all') return true;
    if (filter === 'single') return t.layout === 'single';
    return t.layout !== 'single';
  });

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Browse Templates</h2>
            <p className="text-sm text-gray-500">{filtered.length} templates available</p>
          </div>
          <div className="flex gap-2">
            {(['all', 'single', 'two-col'] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  filter === f
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {f === 'all' ? 'الكل' : f === 'single' ? 'عمود واحد' : 'عمودين'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((template) => (
            <Link
              key={template.id}
              href={`/builder?template=${template.id}`}
              className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center">
                <div className="w-full max-w-[200px] bg-white rounded-lg shadow-lg p-4 text-[8px] leading-tight">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100" />
                    <div>
                      <div className="font-bold text-[10px]">أحمد المنصوري</div>
                      <div className="text-blue-600 text-[7px]">مهندس برمجيات</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="font-bold text-blue-600 text-[8px] border-b border-blue-200 pb-0.5 mb-1">نبذة شخصية</div>
                      <div className="h-4 bg-gray-100 rounded" />
                    </div>
                    <div>
                      <div className="font-bold text-blue-600 text-[8px] border-b border-blue-200 pb-0.5 mb-1">الخبرات</div>
                      <div className="space-y-1">
                        <div className="h-3 bg-gray-100 rounded" />
                        <div className="h-3 bg-gray-100 rounded w-4/5" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-blue-600 text-[8px] border-b border-blue-200 pb-0.5 mb-1">التعليم</div>
                      <div className="h-3 bg-gray-100 rounded w-3/4" />
                    </div>
                    <div>
                      <div className="font-bold text-blue-600 text-[8px] border-b border-blue-200 pb-0.5 mb-1">المهارات</div>
                      <div className="flex gap-1 flex-wrap">
                        <span className="px-1 py-0.5 bg-blue-50 rounded text-[6px]">React</span>
                        <span className="px-1 py-0.5 bg-blue-50 rounded text-[6px]">Node.js</span>
                        <span className="px-1 py-0.5 bg-blue-50 rounded text-[6px]">Python</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900">{template.nameAr}</h3>
                <p className="text-sm text-gray-500 mt-1">{template.descriptionAr}</p>
                <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                  {template.tag}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">لم يعجبك أي قالب؟</h3>
          <p className="text-gray-500 text-sm mb-4">
            ابدأ بصفحة فارغة وبناء سيرتك من الصفر — تحكم كامل في كل قسم وأسلوب.
          </p>
          <Link
            href="/builder"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            ابدأ من الصفر
            <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
