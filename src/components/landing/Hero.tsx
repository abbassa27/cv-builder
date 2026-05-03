import Link from "next/link"

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-10 md:py-20">

        {/* Text */}
        <div className="space-y-4 md:space-y-6 text-center md:text-right">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-xs md:text-sm font-semibold px-3 md:px-4 py-1 rounded-full">
            🆓 مجاني 100% — بدون بطاقة بنكية
          </span>

          {/* 🔥 FIX: بدون كسر الديسكتوب */}
          <h1 className="text-2xl md:text-5xl font-black text-gray-900 leading-tight">
            أنشئ سيرتك الذاتية<br />
            <span className="text-indigo-600">في دقائق</span>
          </h1>

          <p className="text-sm md:text-lg text-gray-500 leading-relaxed">
            منشئ السيرة الذاتية الاحترافي. صمم، خصص، وحمّل PDF جاهز للتوظيف بسهولة تامة.
          </p>

          {/* 🔥 FIX: buttons mobile */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              href="/create-cv"
              className="w-full sm:w-auto text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 md:px-8 py-3 rounded-full text-sm md:text-lg transition shadow-lg shadow-indigo-200"
            >
              ابدأ الآن — مجاناً ←
            </Link>

            <Link
              href="#features"
              className="w-full sm:w-auto text-center border border-gray-300 hover:border-indigo-400 text-gray-700 font-medium px-6 md:px-8 py-3 rounded-full text-sm md:text-lg transition"
            >
              اكتشف المميزات
            </Link>
          </div>

          {/* 🔥 FIX: wrap features */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-6 text-xs md:text-sm text-gray-400 pt-2">
            <span>✅ بدون علامة مائية</span>
            <span>✅ تصدير PDF فوري</span>
            <span>✅ قوالب احترافية</span>
          </div>
        </div>

        {/* CV Preview Mockup */}
        <div className="relative mt-6 md:mt-0">

          {/* 🔥 FIX: scale mobile */}
          <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 border border-gray-100 rotate-1 hover:rotate-0 transition-transform duration-300 scale-[0.95] md:scale-100">
            <div className="space-y-3">
              <div className="flex items-center gap-3 pb-3 border-b">
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-full bg-indigo-100 flex items-center justify-center text-xl md:text-2xl">
                  👤
                </div>
                <div>
                  <div className="h-3 md:h-4 w-24 md:w-32 bg-gray-800 rounded mb-1"></div>
                  <div className="h-2 md:h-3 w-20 md:w-24 bg-indigo-400 rounded"></div>
                </div>
              </div>

              {["الخبرة المهنية", "التعليم", "المهارات"].map((section) => (
                <div key={section}>
                  <div className="h-2 md:h-3 w-20 md:w-28 bg-indigo-600 rounded mb-2"></div>
                  <div className="space-y-1">
                    <div className="h-2 w-full bg-gray-100 rounded"></div>
                    <div className="h-2 w-4/5 bg-gray-100 rounded"></div>
                    <div className="h-2 w-3/5 bg-gray-100 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 🔥 FIX: position mobile */}
          <div className="absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 bg-indigo-600 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1 md:py-2 rounded-xl shadow-lg">
            ⬇ جاهز للتحميل PDF
          </div>

        </div>
      </div>
    </section>
  )
}