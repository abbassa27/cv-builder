const steps = [
  { num: "01", title: "سجّل دخولك", desc: "بحساب Google في ثانية واحدة." },
  { num: "02", title: "أدخل بياناتك", desc: "أملأ الأقسام: الشخصية، الخبرة، التعليم، المهارات." },
  { num: "03", title: "حمّل PDF", desc: "اضغط تصدير واحصل على ملفك جاهزاً." },
]

export default function Steps() {
  return (
    <section
      dir="rtl"
      className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 to-purple-700 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          {/* 🔥 FIX */}
          <h2 className="text-2xl md:text-4xl font-black mb-3">
            كيف يعمل؟
          </h2>

          <p className="text-sm md:text-lg text-indigo-200">
            3 خطوات بسيطة
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center space-y-2 md:space-y-3">

              {/* Circle */}
              <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-white/20 flex items-center justify-center text-lg md:text-2xl font-black mx-auto">
                {s.num}
              </div>

              {/* Title */}
              <h3 className="text-base md:text-xl font-bold">
                {s.title}
              </h3>

              {/* Desc */}
              <p className="text-sm md:text-base text-indigo-200 leading-relaxed">
                {s.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}