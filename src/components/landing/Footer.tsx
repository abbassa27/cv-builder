import Link from "next/link"

export default function Footer() {
  return (
    <>
      {/* CTA */}
      <section dir="rtl" className="py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="text-4xl font-black text-gray-900">جاهز لبناء سيرتك؟</h2>
          <p className="text-gray-500 text-lg">انضم الآن وابدأ مجاناً — لا حاجة لبطاقة بنكية</p>
          <Link href="/create-cv"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-10 py-4 rounded-full text-xl transition shadow-xl shadow-indigo-200">
            ابدأ الآن ←
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer dir="rtl" className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <p>© 2026 CV Builder — جميع الحقوق محفوظة</p>
      </footer>
    </>
  )
}
