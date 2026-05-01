import Link from "next/link"

export default function Hero() {
  return (
    <section dir="rtl" className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
        {/* Text */}
        <div className="space-y-6">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1 rounded-full">
            🆓 مجاني 100% — بدون بطاقة بنكية
          </span>
          <h1 className="text-5xl font-black text-gray-900 leading-tight">
            أنشئ سيرتك الذاتية<br />
            <span className="text-indigo-600">في دقائق</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            منشئ السيرة الذاتية الاحترافي. صمم، خصص، وحمّل PDF جاهز للتوظيف بسهولة تامة.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/create-cv"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-3 rounded-full text-lg transition shadow-lg shadow-indigo-200">
              ابدأ الآن — مجاناً ←
            </Link>
            <Link href="#features"
              className="border border-gray-300 hover:border-indigo-400 text-gray-700 font-medium px-8 py-3 rounded-full text-lg transition">
              اكتشف المميزات
            </Link>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400 pt-2">
            <span>✅ بدون علامة مائية</span>
            <span>✅ تصدير PDF فوري</span>
            <span>✅ قوالب احترافية</span>
          </div>
        </div>

        {/* CV Preview Mockup */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="space-y-3">
              <div className="flex items-center gap-3 pb-3 border-b">
                <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-2xl">👤</div>
                <div>
                  <div className="h-4 w-32 bg-gray-800 rounded mb-1"></div>
                  <div className="h-3 w-24 bg-indigo-400 rounded"></div>
                </div>
              </div>
              {["الخبرة المهنية", "التعليم", "المهارات"].map((section) => (
                <div key={section}>
                  <div className="h-3 w-28 bg-indigo-600 rounded mb-2"></div>
                  <div className="space-y-1">
                    <div className="h-2 w-full bg-gray-100 rounded"></div>
                    <div className="h-2 w-4/5 bg-gray-100 rounded"></div>
                    <div className="h-2 w-3/5 bg-gray-100 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg">
            ⬇ جاهز للتحميل PDF
          </div>
        </div>
      </div>
    </section>
  )
}
