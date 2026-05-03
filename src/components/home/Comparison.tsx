import Link from 'next/link';

export default function Comparison() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            من{' '}
            <span className="text-red-500">ساعات من التوتر</span>{' '}
            إلى{' '}
            <span className="bg-gradient-to-l from-blue-600 to-green-500 bg-clip-text text-transparent">
              دقائق من النجاح
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
            ركز على نمو حياتك المهنية بينما تتولى منصتنا المدعومة بالذكاء الاصطناعي إنشاء السيرة الذاتية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Old Way */}
          <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
            <h3 className="text-lg font-bold text-red-600 mb-4">❌ الطريقة القديمة</h3>
            <div className="text-2xl font-bold text-red-500 mb-4">5-8 ساعات</div>
            <ul className="space-y-3">
              {[
                'البحث عن معايير التنسيق',
                'تصميم التخطيط يدوياً',
                'الكفاح مع الصياغة',
                'تخمين ما تريده أنظمة ATS',
                'انتظار التعليقات',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cviya Way */}
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-200 shadow-lg shadow-blue-100/50">
            <h3 className="text-lg font-bold text-blue-600 mb-4">✨ طريقة Cviya</h3>
            <div className="text-2xl font-bold text-blue-600 mb-4">15-30 دقيقة</div>
            <ul className="space-y-3">
              {[
                'اختيار من القوالب المحسنة',
                'استيراد التفاصيل الموجودة',
                'الحصول على ميزات مدعومة بالذكاء الاصطناعي',
                'معاينة في الوقت الفعلي',
                'تحميل السيرة الذاتية الجاهزة',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
            <div className="text-3xl font-extrabold text-blue-600">10x</div>
            <h4 className="font-semibold text-gray-900 mt-1">أسرع</h4>
            <p className="text-xs text-gray-500 mt-1">أنشئ سيرتك في دقائق، ليس ساعات</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
            <div className="text-3xl font-extrabold text-green-600">3x</div>
            <h4 className="font-semibold text-gray-900 mt-1">مقابلات أكثر</h4>
            <p className="text-xs text-gray-500 mt-1">مع تنسيقات متوافقة مع ATS</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
            <div className="text-3xl font-extrabold text-purple-600">95%</div>
            <h4 className="font-semibold text-gray-900 mt-1">رضا المستخدمين</h4>
            <p className="text-xs text-gray-500 mt-1">اقتراحات AI لمحتوى أفضل</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/builder"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25"
          >
            ابدأ مجاناً
            <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
