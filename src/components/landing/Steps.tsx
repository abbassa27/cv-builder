const steps = [
  { num: "01", title: "سجّل دخولك", desc: "بحساب Google في ثانية واحدة." },
  { num: "02", title: "أدخل بياناتك", desc: "أملأ الأقسام: الشخصية، الخبرة، التعليم، المهارات." },
  { num: "03", title: "حمّل PDF", desc: "اضغط تصدير واحصل على ملفك جاهزاً." },
]

export default function Steps() {
  return (
    <section dir="rtl" className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black mb-3">كيف يعمل؟</h2>
          <p className="text-indigo-200 text-lg">3 خطوات بسيطة</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-black mx-auto">
                {s.num}
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="text-indigo-200">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
