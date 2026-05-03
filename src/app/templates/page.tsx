import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TemplateGallery from '@/components/TemplateGallery';

export default function TemplatesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-b from-blue-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200 mb-4">
              ✨ 6 Professional Templates
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              قوالب السيرة الذاتية
            </h1>
            <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
              اختر من مجموعتنا من القوالب المصممة بشكل احترافي والمتوافقة مع ATS.
              كل قالب قابل للتخصيص بالكامل وجاهز لمساعدتك في الحصول على وظيفة أحلامك.
            </p>
            <div className="mt-6 flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-gray-900">6</div>
                <div className="text-sm text-gray-500">Templates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-gray-900">100%</div>
                <div className="text-sm text-gray-500">Free</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-gray-900">AI</div>
                <div className="text-sm text-gray-500">Powered</div>
              </div>
            </div>
          </div>
        </section>
        <TemplateGallery />
      </main>
      <Footer />
    </>
  );
}
