import type { ReactNode } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { getDictionary, type Locale } from "../../lib/dictionaries";
import Button from "../../components/ui/Button";
import Navigation from "../../components/Navigation";
import { ContactFormProvider } from "../../components/ContactFormProvider";
import ContactFormButton from "../../components/ContactFormButton";
import TryButton from "../../components/TryButton";
import Footer from "../../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fastboard BI — Корпоративная BI‑система",
  description:
    "Корпоративный сайт компании‑разработчика отечественной BI‑системы Fastboard.",
};

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const currentLocale = locale as Locale;
  const otherLocale = currentLocale === "ru" ? "en" : "ru";

  return (
    <html lang={currentLocale}>
      <body
        className={`${inter.variable} font-sans antialiased bg-[#040D15] text-white`}
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <ContactFormProvider>
          <div className="min-h-screen flex flex-col" style={{ overflowX: 'hidden' }}>
          {/* Шапка - точная копия из макета Figma */}
          <header className="sticky top-0 z-[1000]">
            {/* Верхняя полоса с контактами - темный фон */}
            <div className="header-top-bar">
              <div className="mx-auto flex max-w-[1400px] items-center justify-between px-[64px] py-2">
                {/* Main/C/L: 13px, line-height: 120%, font-weight: 400, Text/pimary #ffffff */}
                <div className="text-[13px] leading-[120%] font-normal text-white">
                  {dict.header.banner}{" "}
                  <Link href="#" className="text-[#00bfff] underline">
                    {dict.header.bannerLink}
                  </Link>
                </div>
                <div className="flex items-center gap-6">
                  <ContactFormButton />
                  <Link href="#" className="flex items-center gap-2 text-[13px] leading-[120%] text-white">
                    {/* Иконка телефона из Figma */}
                    <Image src="/icons/phone.svg" alt="" width={16} height={16} className="flex-shrink-0" unoptimized />
                    {dict.header.phone}
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Основное меню - компонент из библиотеки Figma - full width */}
            <div className="header-main-nav">
              <div className="mx-auto max-w-[1400px] px-[64px] py-4">
                <div className="grid grid-cols-3 items-center">
                  {/* Логотип слева */}
                  <Link href={`/${currentLocale}`} className="flex items-center justify-start">
                    {/* Логотип из Figma - Header/logo-width: 150px */}
                    <Image
                      src="/logo.svg"
                      alt="Fastboard"
                      width={150}
                      height={25}
                      className="h-auto"
                      priority
                      unoptimized
                    />
                  </Link>
                  
                  {/* Навигация по центру */}
                  <div className="flex items-center justify-center">
                    <Navigation currentLocale={currentLocale} dict={dict} />
                  </div>
                  
                  {/* Кнопка справа */}
                  <div className="flex items-center justify-end gap-3">
                    {/* Кнопка "Попробовать" вместо переключателя языка */}
                    <TryButton />
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 bg-[#040D15]">
            {children}
          </main>
          <Footer />
        </div>
        </ContactFormProvider>
      </body>
    </html>
  );
}

