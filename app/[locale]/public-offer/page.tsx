import { notFound } from "next/navigation";
import { getDictionary, type Locale } from "../../../lib/dictionaries";
import Breadcrumbs from "../../../components/ui/Breadcrumbs";

export default async function PublicOfferPage({
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
    <div className="bg-[#040D15] flex flex-col items-center relative w-full min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Hero секция */}
      <div className="flex flex-col gap-[48px] items-center px-[64px] py-[96px] relative w-full overflow-visible">
        {/* Highlight-wide слой из библиотеки */}
        <div className="absolute -top-[400px] -bottom-[200px] left-0 right-0 flex items-center justify-center pointer-events-none">
          <div 
            className="absolute w-[1200px] h-[614px] blur-[150px]"
            style={{
              background: 'radial-gradient(ellipse, rgba(0, 96, 229, 0.3) 0%, rgba(0, 96, 229, 0.1) 50%, transparent 70%)'
            }}
          ></div>
        </div>
        
        {/* Хлебные крошки */}
        <div className="relative z-10">
          <Breadcrumbs
            items={[
              { label: locale === "ru" ? "Главная" : "Home", href: `/${locale}` },
              { label: locale === "ru" ? "Публичная оферта" : "Public Offer" },
            ]}
          />
        </div>
        
        <h1 className="relative z-10 font-bold leading-[110%] text-white text-[56px] text-center max-w-[900px] px-4">
          {locale === "ru" ? "Публичная оферта" : "Public Offer"}
        </h1>
      </div>

      {/* Контент страницы */}
      <div className="flex flex-col items-center px-[64px] pb-[96px] relative w-full max-w-[1000px]">
        <div className="flex flex-col gap-8 w-full">
          {/* Синее свечение на заднем фоне */}
          <div 
            className="pointer-events-none absolute -inset-x-[200px] -top-[100px] -bottom-[100px]"
            style={{
              background: 'radial-gradient(ellipse, #0060E5 0%, transparent 70%)',
              opacity: 0.2,
              filter: 'blur(500px)',
              zIndex: 0,
            }}
          />
          
          <div className="relative z-10 flex flex-col gap-6 text-white/90">
            <section className="space-y-4">
              <h2 className="text-[32px] font-bold leading-[110%] text-white mb-4">
                {locale === "ru" ? "1. Общие положения" : "1. General Provisions"}
              </h2>
              <p className="text-[16px] leading-[140%] text-white/80">
                {locale === "ru"
                  ? "Настоящая публичная оферта (далее — «Оферта») является официальным предложением ООО «Вин Солюшнс» (далее — «Исполнитель») заключить договор на оказание услуг на указанных ниже условиях."
                  : "This public offer (hereinafter referred to as the \"Offer\") is an official proposal by Wins Solutions LLC (hereinafter referred to as the \"Contractor\") to enter into a service agreement under the conditions specified below."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[32px] font-bold leading-[110%] text-white mb-4">
                {locale === "ru" ? "2. Предмет договора" : "2. Subject of the Agreement"}
              </h2>
              <p className="text-[16px] leading-[140%] text-white/80">
                {locale === "ru"
                  ? "Исполнитель обязуется оказать Заказчику услуги по предоставлению доступа к платформе Fastboard BI, а Заказчик обязуется оплатить эти услуги в порядке и на условиях, установленных настоящей Офертой."
                  : "The Contractor undertakes to provide the Customer with services for providing access to the Fastboard BI platform, and the Customer undertakes to pay for these services in the manner and under the conditions established by this Offer."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[32px] font-bold leading-[110%] text-white mb-4">
                {locale === "ru" ? "3. Права и обязанности сторон" : "3. Rights and Obligations of the Parties"}
              </h2>
              <div className="space-y-3">
                <p className="text-[16px] leading-[140%] text-white/80">
                  {locale === "ru"
                    ? "Исполнитель вправе:"
                    : "The Contractor has the right to:"}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-[16px] leading-[140%] text-white/80">
                  <li>
                    {locale === "ru"
                      ? "Требовать от Заказчика соблюдения условий настоящей Оферты"
                      : "Require the Customer to comply with the terms of this Offer"}
                  </li>
                  <li>
                    {locale === "ru"
                      ? "Приостановить оказание услуг в случае нарушения Заказчиком условий оплаты"
                      : "Suspend the provision of services in case of violation by the Customer of payment conditions"}
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-[32px] font-bold leading-[110%] text-white mb-4">
                {locale === "ru" ? "4. Стоимость услуг и порядок расчетов" : "4. Cost of Services and Payment Procedure"}
              </h2>
              <p className="text-[16px] leading-[140%] text-white/80">
                {locale === "ru"
                  ? "Стоимость услуг определяется в соответствии с действующими тарифами, размещенными на сайте Исполнителя. Оплата производится в порядке, предусмотренном выбранным тарифным планом."
                  : "The cost of services is determined in accordance with the current tariffs posted on the Contractor's website. Payment is made in the manner provided for by the selected tariff plan."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[32px] font-bold leading-[110%] text-white mb-4">
                {locale === "ru" ? "5. Ответственность сторон" : "5. Liability of the Parties"}
              </h2>
              <p className="text-[16px] leading-[140%] text-white/80">
                {locale === "ru"
                  ? "Стороны несут ответственность за неисполнение или ненадлежащее исполнение своих обязательств в соответствии с законодательством Российской Федерации."
                  : "The parties are liable for non-performance or improper performance of their obligations in accordance with the legislation of the Russian Federation."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[32px] font-bold leading-[110%] text-white mb-4">
                {locale === "ru" ? "6. Реквизиты Исполнителя" : "6. Contractor Details"}
              </h2>
              <div className="space-y-2 text-[16px] leading-[140%] text-white/80">
                <p>
                  {locale === "ru" ? "ООО «Вин Солюшнс»" : "Wins Solutions LLC"}
                </p>
                <p>
                  {locale === "ru" ? "ИНН: 765786578698" : "Tax ID: 765786578698"}
                </p>
                <p>
                  {locale === "ru" ? "ОГРН: 786876760762344" : "OGRN: 786876760762344"}
                </p>
                <p>
                  {locale === "ru" ? "Адрес: г. Краснодар, ул. Северная, 450" : "Address: Krasnodar, Severnaya St., 450"}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
