import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, type Locale } from "../../../lib/dictionaries";
import Breadcrumbs from "../../../components/ui/Breadcrumbs";

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locale || (locale !== "ru" && locale !== "en")) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);

  return (
    <div className="relative min-h-screen bg-[#040D15] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Верхний подсвеченный фон - используем переменные из Figma: Glows/Lighter #0060E5, highlights/blur-wide 500px */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[614px] bg-[radial-gradient(circle_at_top,#0060E5_0,transparent_60%)] opacity-50 blur-[500px]" />

      <div className="relative mx-auto max-w-[1400px] px-[64px] pb-0 pt-0">
        {/* Хлебные крошки - Main/C/L: 13px, line-height: 120%, font-weight: 400, Text/secondary #ffffffb2 */}
        <div className="flex items-center justify-center py-8">
          <Breadcrumbs
            items={[
              { label: locale === "ru" ? "Главная" : "Home", href: `/${locale}` },
              { label: dict.nav.menu.pricing.label },
            ]}
          />
        </div>

        {/* Заголовок страницы - Main/H1/LG: 48px, line-height: 110%, font-weight: 700 */}
        <header className="relative text-center py-[96px] pb-[64px]">
          {/* Highlight-wide слой из библиотеки компонентов - голубое свечение за текстом заголовка */}
          <div 
            className="absolute pointer-events-none"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '1701px',
              height: '614px',
              background: 'radial-gradient(ellipse, #0060E5 0%, transparent 70%)',
              opacity: 0.6,
              filter: 'blur(500px)',
              zIndex: 0,
            }}
          />
          <h1 className="relative z-10 text-[48px] font-bold leading-[110%] text-white whitespace-normal">
            {locale === "ru" ? "Стоимость Fastboard" : "Fastboard Pricing"}
          </h1>
        </header>

        {/* Контент страницы */}
        <section className="relative space-y-16 pb-[96px]">
          {/* Синее свечение на заднем фоне секции */}
          <div 
            className="pointer-events-none absolute -inset-x-[200px] -top-[100px] -bottom-[100px]"
            style={{
              background: 'radial-gradient(ellipse, #0060E5 0%, transparent 70%)',
              opacity: 0.3,
              filter: 'blur(500px)',
              zIndex: 0,
            }}
          />
          
          <div className="relative z-10">
            {/* Описание */}
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <p className="text-[17px] leading-[140%] text-white/70">
                {locale === "ru"
                  ? "Тарифы и специальные условия использования платформы."
                  : "Plans and special conditions for using the platform."}
              </p>
            </div>

            {/* Карточки тарифов */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Тариф 1 - Тарифы Fastboard */}
              <Link
                href={`/${locale}/pricing/plans`}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:border-white/20"
              >
                <h3 className="text-[24px] font-semibold leading-[110%] text-white mb-4">
                  {dict.nav.menu.pricing.items.plans}
                </h3>
                <p className="text-[13px] leading-[120%] text-white/60 mb-6">
                  {locale === "ru"
                    ? "Базовые тарифные планы платформы."
                    : "Core pricing plans of the platform."}
                </p>
                <div className="text-[17px] leading-[140%] text-white font-medium">
                  {locale === "ru" ? "Подробнее →" : "Learn more →"}
                </div>
              </Link>

              {/* Тариф 2 - Бесплатная версия */}
              <Link
                href={`/${locale}/pricing/free`}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:border-white/20"
              >
                <h3 className="text-[24px] font-semibold leading-[110%] text-white mb-4">
                  {dict.nav.menu.pricing.items.free}
                </h3>
                <p className="text-[13px] leading-[120%] text-white/60 mb-6">
                  {locale === "ru"
                    ? "Возможности и ограничения бесплатного тарифа."
                    : "Capabilities and limitations of the free plan."}
                </p>
                <div className="text-[17px] leading-[140%] text-white font-medium">
                  {locale === "ru" ? "Подробнее →" : "Learn more →"}
                </div>
              </Link>

              {/* Тариф 3 - Специальное предложение для Вузов */}
              <Link
                href={`/${locale}/pricing/universities`}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:border-white/20"
              >
                <h3 className="text-[24px] font-semibold leading-[110%] text-white mb-4">
                  {dict.nav.menu.pricing.items.universities}
                </h3>
                <p className="text-[13px] leading-[120%] text-white/60 mb-6">
                  {locale === "ru"
                    ? "Условия использования Fastboard в учебных заведениях."
                    : "Conditions for using Fastboard in educational institutions."}
                </p>
                <div className="text-[17px] leading-[140%] text-white font-medium">
                  {locale === "ru" ? "Подробнее →" : "Learn more →"}
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

