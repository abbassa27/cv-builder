const features = [
  { icon: "⚡", title: "سريع وسهل", desc: "أنشئ سيرتك في أقل من 5 دقائق بواجهة بسيطة ومريحة." },
  { icon: "🎨", title: "قوالب احترافية", desc: "قوالب مصممة بعناية تناسب جميع المجالات الوظيفية." },
  { icon: "📄", title: "تصدير PDF فوري", desc: "حمّل سيرتك كـ PDF جاهز للإرسال في ثوانٍ." },
]

export default function Features() {
  return (
    <section id="features" dir="rtl" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-gray-900 mb-3">لماذا CV Builder؟</h2>
          <p className="text-gray-500 text-lg">كل ما تحتاجه في مكان واحد</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-gray-50 hover:bg-indigo-50 border border-transparent hover:border-indigo-200 rounded-2xl p-8 text-center transition-all duration-200 group">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700">{f.title}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
