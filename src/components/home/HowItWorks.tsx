const steps = [
  {
    num: '01',
    title: 'استورد أو ابدأ من الصفر',
    description: 'ارفع سيرتك القديمة وسيستخرج الذكاء الاصطناعي كل تفصيلة — أو انطلق مع معالجنا الموجَّه خطوة بخطوة.',
    icon: '📤',
  },
  {
    num: '02',
    title: 'اختيار وتخصيص',
    description: 'اختر من بين القوالب الاحترافية وخصص الألوان والخطوط والتخطيط لتناسب أسلوبك الشخصي.',
    icon: '🎨',
  },
  {
    num: '03',
    title: 'تحرير مع معاينة مباشرة',
    description: 'أضف وحرر وحسّن محتواك مع معاينة فورية. شاهد بالضبط كيف ستبدو سيرتك الذاتية.',
    icon: '✏️',
  },
  {
    num: '04',
    title: 'حمّل وتقدّم اليوم',
    description: 'صدّر PDF احترافياً — بدون علامة مائية ولا رسوم. شارك رابط سيرتك أو أرسل الملف مباشرة.',
    icon: '🚀',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200 mb-4">
            🔄 كيف يعمل
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            استخراج، تخصيص، إنشاء وتحميل
          </h2>
          <p className="mt-4 text-base text-gray-500">
            100% مجاني • بدون علامة مائية • بدون بطاقة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -left-4 w-8 h-0.5 bg-blue-200" />
              )}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-2xl shadow-lg shadow-blue-500/25">
                  {step.icon}
                </div>
                <span className="text-xs font-bold text-blue-500 mb-2 block">{step.num}</span>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-500 flex-wrap">
          <span className="flex items-center gap-1.5">🎯 محسّن لأنظمة ATS</span>
          <span className="flex items-center gap-1.5">👁️ معاينة مباشرة</span>
          <span className="flex items-center gap-1.5">🤖 محسّن بالذكاء الاصطناعي</span>
          <span className="flex items-center gap-1.5">📥 تحميل مجاني 100%</span>
        </div>
      </div>
    </section>
  );
}
