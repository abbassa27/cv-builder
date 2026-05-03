import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "منشئ سيرة ذاتية مجاني ومتوافق مع ATS | Cviya",
  description:
    "أنشئ سيرة ذاتية احترافية خلال دقائق مع Cviya. مجاني 100%، بدون علامة مائية، وبدون بطاقة ائتمان.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${notoArabic.variable}`}>
      <body className="antialiased bg-white text-gray-900 font-[family-name:var(--font-arabic)]">
        {children}
      </body>
    </html>
  );
}
