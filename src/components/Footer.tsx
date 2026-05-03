import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <span className="text-2xl font-bold bg-gradient-to-l from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Cviya
            </span>
            <p className="mt-3 text-sm text-gray-500 max-w-md">
              منشئ سيرة ذاتية مجاني 100% - بدون علامة مائية، بدون بطاقة ائتمان. قابل للتخصيص بالكامل مع أدوات ذكاء اصطناعي.
            </p>
          </div>

          <div>
            <h6 className="font-semibold text-gray-900 mb-3">الدعم</h6>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-gray-700 transition-colors">من نحن</Link></li>
              <li><Link href="#" className="hover:text-gray-700 transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-gray-900 mb-3">السياسات</h6>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-gray-700 transition-colors">الشروط والأحكام</Link></li>
              <li><Link href="#" className="hover:text-gray-700 transition-colors">سياسة الخصوصية</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Cviya, جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
