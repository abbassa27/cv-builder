import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badges */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200">
              ✨ منشئ سيرة ذاتية مدعوم بالذكاء الاصطناعي
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
              أنشئ سيرتك الذاتية في 5 دقائق
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            أنشئ سيرتك الذاتية{' '}
            <span className="bg-gradient-to-l from-blue-600 to-purple-600 bg-clip-text text-transparent">
              مجاناً
            </span>
            ، في دقائق
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            أسهل منشئ سيرة ذاتية على الإنترنت. حسّن سيرتك الذاتية الحالية بسرعة، أو ابدأ
            بنموذج سيرة ذاتية — مجاني 100%، تحميل غير محدود، بدون علامة مائية، بدون بطاقة ائتمان.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/builder"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              أنشئ سيرتي الذاتية ✨
            </Link>
            <Link
              href="/templates"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-gray-700 bg-white rounded-xl hover:bg-gray-50 transition-all border border-gray-200 shadow-sm"
            >
              📄 استكشف القوالب
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              بدون علامة مائية
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              بدون بطاقة ائتمان
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              تنزيلات غير محدودة
            </span>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-100 flex items-center justify-center text-xl">
              🎯
            </div>
            <h3 className="font-bold text-gray-900">متوافق مع ATS</h3>
            <p className="text-sm text-gray-500 mt-1">
              مُحسّن لأنظمة تتبع المتقدمين لضمان رؤية سيرتك الذاتية
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-purple-100 flex items-center justify-center text-xl">
              🤖
            </div>
            <h3 className="font-bold text-gray-900">مدعوم بالذكاء الاصطناعي</h3>
            <p className="text-sm text-gray-500 mt-1">
              اقتراحات ذكية لتحسين وتنقيح المحتوى الخاص بك
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-green-100 flex items-center justify-center text-xl">
              🎁
            </div>
            <h3 className="font-bold text-gray-900">مجاني 100%</h3>
            <p className="text-sm text-gray-500 mt-1">
              كل قالب وقسم وتنزيل مجاني — بدون رسوم على الإطلاق
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
