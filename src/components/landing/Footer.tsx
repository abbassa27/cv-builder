import Link from "next/link"

export default function Footer() {
  return (
    <>
      {/* CTA */}
      <section
        dir="rtl"
        className="py-16 md:py-24 bg-white text-center"
      >
        <div className="max-w-2xl mx-auto px-4 md:px-6 space-y-4 md:space-y-6">

          {/* 🔥 FIX */}
          <h2 className="text-2xl md:text-4xl font-black text-gray-900">
            جاهز لبناء سيرتك؟
          </h2>

          <p className="text-sm md:text-lg text-gray-500">
            انضم الآن وابدأ مجاناً — لا حاجة لبطاقة بنكية
          </p>

          {/* 🔥 FIX: button mobile */}
          <Link
            href="/create-cv"
            className="block md:inline-block w-full md:w-auto text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-xl transition shadow-xl shadow-indigo-200"
          >
            ابدأ الآن ←
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer
        dir="rtl"
        className="bg-gray-900 text-gray-400 py-6 md:py-8 text-center text-xs md:text-sm px-4"
      >
        <p>© 2026 CV Builder — جميع الحقوق محفوظة</p>
      </footer>
    </>
  )
}