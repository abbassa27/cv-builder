import Link from 'next/link';

const features = [
  {
    icon: '🧠',
    title: 'ذكاء اصطناعي يكتب بأسلوبك',
    description: 'يتعلم سياق مسيرتك المهنية ويقترح نقاطاً وصِيَغ إنجازات تجعل المُوظِّفين يتوقفون عن التمرير.',
  },
  {
    icon: '📐',
    title: 'تنسيق مثالي، تلقائياً',
    description: 'تتضبط الهوامش والتباعد تلقائياً بحيث تبدو سيرتك دائماً مصقولة — سواء كانت صفحة أو ثلاث.',
  },
  {
    icon: '🎯',
    title: 'قوالب متوافقة مع أنظمة ATS',
    description: 'كل قالب مُختبر مع أنظمة ATS الرائدة لضمان تجاوز سيرتك للفحص الآلي ووصولها للموظفين.',
  },
  {
    icon: '📥',
    title: 'PDF وصورة بنقرة واحدة',
    description: 'حمِّل PDF نظيفاً جاهزاً للطباعة أو شارك سيرتك كصورة. ما تراه هو ما ستحصل عليه.',
  },
  {
    icon: '🌍',
    title: 'اكتب بأي لغة',
    description: 'دعم أصيل للعربية والإنجليزية والفرنسية والإسبانية — مع تخطيط RTL كامل للعربية.',
  },
  {
    icon: '🔒',
    title: 'بياناتك، محمية بالكامل',
    description: 'بياناتك مُشفَّرة ومحفوظة محلياً. لا نبيع معلوماتك ولا نشاركها مع أطراف ثالثة أبداً.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200 mb-4">
            ⚡ ميزات قوية
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            كل الأدوات التي تحتاجها لكتابة{' '}
            <span className="bg-gradient-to-l from-blue-600 to-purple-600 bg-clip-text text-transparent">
              سيرة ذاتية تحصل على مقابلات
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            من الكتابة بالذكاء الاصطناعي إلى تحسين ATS وتصدير PDF فوري — كل شيء في مكان واحد، مجاناً تماماً.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/builder"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25"
          >
            إنشاء سيرتي الذاتية مجاناً
            <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
