import Link from "next/link";
import ImageWithBasePath from "../../../../components/ui/ImageWithBasePath";
import { notFound } from "next/navigation";
import { getDictionary, type Locale } from "../../../../lib/dictionaries";
import Button from "../../../../components/ui/Button";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import GlowEffect from "../../../../components/ui/GlowEffect";
import PricingHeroButtons from "./PricingHeroButtons";
import PricingCardButton from "./PricingCardButton";

export default async function PlansPage({
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
    <div className="bg-[#040d15] flex flex-col items-center relative w-full" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Hero секция */}
      <div className="flex flex-col gap-[48px] items-center px-0 py-[96px] relative w-full overflow-visible">
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
              { label: locale === "ru" ? "Стоимость" : "Pricing" },
            ]}
          />
        </div>
        
        <h1 className="relative z-10 font-bold leading-[110%] text-white text-[56px] text-center max-w-[900px] px-4 whitespace-pre-line">
          {locale === "ru" ? "Прозрачные тарифы\nдля вашего бизнеса" : "Transparent pricing\nfor your business"}
        </h1>
        
        <p className="relative z-10 font-normal leading-[120%] text-white/70 text-[22px] text-center max-w-[900px] px-4 whitespace-pre-line">
          {locale === "ru"
            ? "Российская BI-платформа с гибкой системой ценообразования\nи полным соответствием требованиям законодательства РФ"
            : "Russian BI platform with flexible pricing system\nand full compliance with Russian legislation"}
        </p>
        
        <PricingHeroButtons locale={locale} />
      </div>

      {/* Секция тарифных планов */}
      <div className="flex flex-col items-center px-[48px] py-[96px] relative w-full">
        <div className="flex flex-col gap-[64px] items-center max-w-[1061px] relative w-full">
          <div className="flex flex-col gap-0 items-start relative w-full">
            <div className="flex flex-col items-center relative w-full">
              <p className="font-bold leading-[1.1] relative text-[48px] text-center text-white w-full">
                {locale === "ru" ? "Тарифные планы" : "Tariff Plans"}
              </p>
            </div>
          </div>
          
          {/* 4 карточки тарифов */}
          <div className="content-start flex flex-wrap gap-[32px] h-[738px] items-start justify-center relative w-[1063px]">
            {/* Карточка 1 - Демо */}
            <div className="pricing-card content-start flex flex-[1_0_0] flex-wrap gap-[35px] h-[703px] items-start min-h-px min-w-px overflow-clip px-[16px] py-[32px] relative rounded-[10px]">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px min-w-px relative">
                <div className="content-stretch flex flex-col gap-[16px] items-center relative w-full">
                  <div className="flex flex-col font-bold font-[var(--headings,normal)] justify-center leading-[0] min-w-full relative text-white text-[20px] text-center w-[min-content]">
                    <p className="leading-[1.2]">{locale === "ru" ? "Демо" : "Demo"}</p>
                  </div>
                  <div className="gradient-border content-stretch flex items-center justify-center overflow-clip px-[8px] py-[5px] relative">
                    <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative text-white text-[9px]">
                      <p className="leading-[1.2]">{locale === "ru" ? "Месяц" : "Month"}</p>
                    </div>
                  </div>
                  <p className="font-normal leading-[1.2] min-w-full not-italic relative text-[12px] text-[rgba(255,255,255,0.7)] text-center w-[min-content]">
                    {locale === "ru" ? "Предоставляет ограниченный  период использования" : "Provides limited usage period"}
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-0 items-center relative w-full">
                  <div className="flex flex-col font-normal font-[var(--leadings,normal)] h-[102px] justify-center leading-[0] relative text-white text-[22px] text-center w-full">
                    <p className="leading-[1.2]">0 ₽</p>
                  </div>
                </div>
                <PricingCardButton>
                  {locale === "ru" ? "Начать бесплатно" : "Start free"}
                </PricingCardButton>
                <div className="h-[1px] relative w-[118px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
                  <p className="font-normal leading-[1.2] not-italic relative text-[12px] text-[rgba(255,255,255,0.7)] w-full">
                    {locale === "ru"
                      ? "Для небольших команд и некомерческих проектов. Доступны базовые возможности включая:"
                      : "For small teams and non-commercial projects. Basic features available including:"}
                  </p>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
                    <div className="content-stretch flex gap-[8px] items-center relative w-full">
                      <div className="content-stretch flex flex-col items-start justify-center relative w-[22px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#00D4FF"/>
                        </svg>
                      </div>
                      <p className="flex-[1_0_0] font-normal leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-white">
                        {locale === "ru" ? "Пункт 1" : "Item 1"}
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative w-full">
                      <div className="content-stretch flex flex-col items-start justify-center relative w-[22px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#00D4FF"/>
                        </svg>
                      </div>
                      <p className="flex-[1_0_0] font-normal leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-white">
                        {locale === "ru" ? "Пункт 2" : "Item 2"}
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative w-full">
                      <div className="content-stretch flex flex-col items-start justify-center relative w-[22px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#00D4FF"/>
                        </svg>
                      </div>
                      <p className="flex-[1_0_0] font-normal leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-white">
                        {locale === "ru" ? "Пункт 3" : "Item 3"}
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative w-full">
                      <div className="content-stretch flex flex-col items-start justify-center relative w-[22px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#00D4FF"/>
                        </svg>
                      </div>
                      <p className="flex-[1_0_0] font-normal leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-white">
                        {locale === "ru" ? "Федерация учетных записей и SSO" : "Account federation and SSO"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Карточка 2 - Пользовательский */}
            <div className="pricing-card content-start flex flex-[1_0_0] flex-wrap gap-[35px] h-[703px] items-start min-h-px min-w-px overflow-clip px-[16px] py-[32px] relative rounded-[10px]">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px min-w-px relative">
                <div className="content-stretch flex flex-col gap-[16px] items-center relative w-full">
                  <div className="flex flex-col font-bold font-[var(--headings,normal)] justify-center leading-[0] min-w-full relative text-white text-[20px] text-center w-[min-content]">
                    <p className="leading-[1.2]">{locale === "ru" ? "Пользовательский" : "User"}</p>
                  </div>
                  <div className="gradient-border content-stretch flex items-center justify-center overflow-clip px-[8px] py-[5px] relative">
                    <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative text-white text-[9px]">
                      <p className="leading-[1.2]">{locale === "ru" ? "Месяц" : "Month"}</p>
                    </div>
                  </div>
                  <p className="font-normal leading-[1.2] min-w-full not-italic relative text-[12px] text-[rgba(255,255,255,0.7)] text-center w-[min-content]">
                    {locale === "ru" ? "Делаем скидки на количество от 50 голов" : "Discounts for 50+ users"}
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-0 items-center relative w-full">
                  <div className="content-stretch flex flex-col font-normal font-[var(--leadings,normal)] items-start leading-[0] relative text-[0px] text-white">
                    <div className="flex flex-col h-[51px] justify-center relative w-full">
                      <p className="leading-[1.2]">
                        <span className="text-[28px]">1 500 ₽ </span>
                        <span className="font-normal not-italic text-[12px]">/ зритель</span>
                      </p>
                    </div>
                    <div className="flex flex-col h-[51px] justify-center relative w-full">
                      <p className="leading-[1.2]">
                        <span className="text-[28px]">2 000 ₽ </span>
                        <span className="font-normal not-italic text-[12px]">/ разработчик</span>
                      </p>
                    </div>
                  </div>
                </div>
                <PricingCardButton>
                  {locale === "ru" ? "Начать бесплатно" : "Start free"}
                </PricingCardButton>
                <div className="h-[1px] relative w-[118px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
                  <p className="font-normal leading-[1.2] min-w-full not-italic relative text-[12px] text-[rgba(255,255,255,0.7)] w-[min-content]">
                    {locale === "ru"
                      ? "Цена лицензии определяется количеством пользователей, которые могут одновременно использовать ПО."
                      : "License price is determined by the number of users who can simultaneously use the software."}
                  </p>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
                    <div className="content-stretch flex gap-[8px] items-center relative w-full">
                      <div className="content-stretch flex flex-col items-start justify-center relative w-[22px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#00D4FF"/>
                        </svg>
                      </div>
                      <p className="flex-[1_0_0] font-normal leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-white">
                        {locale === "ru" ? "Создание чартов и дашбордов" : "Create charts and dashboards"}
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative">
                      <div className="content-stretch flex flex-col items-start justify-center relative w-[22px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#00D4FF"/>
                        </svg>
                      </div>
                      <p className="flex-[1_0_0] font-normal leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-white">
                        {locale === "ru" ? "Описание модели данных" : "Data model description"}
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative w-full">
                      <div className="content-stretch flex flex-col items-start justify-center relative w-[22px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#00D4FF"/>
                        </svg>
                      </div>
                      <p className="flex-[1_0_0] font-normal leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-white">
                        {locale === "ru" ? "Ролевая модель прав доступа" : "Role-based access model"}
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative w-full">
                      <div className="content-stretch flex flex-col items-start justify-center relative w-[22px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#00D4FF"/>
                        </svg>
                      </div>
                      <p className="flex-[1_0_0] font-normal leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-white">
                        {locale === "ru" ? "Аутентификация с помощью Яндекс ID" : "Yandex ID authentication"}
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative w-full">
                      <div className="content-stretch flex flex-col items-start justify-center relative w-[22px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#00D4FF"/>
                        </svg>
                      </div>
                      <p className="flex-[1_0_0] font-normal leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-white">
                        {locale === "ru" ? "Базовая техническая поддержа" : "Basic technical support"}
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative w-full">
                      <div className="content-stretch flex flex-col items-start justify-center relative w-[22px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#00D4FF"/>
                        </svg>
                      </div>
                      <p className="flex-[1_0_0] font-normal leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-white">
                        {locale === "ru" ? "Аутентификация с помощью Яндекс ID" : "Yandex ID authentication"}
                      </p>
                    </div>
                  </div>
                  {/* Градиентные подсветки из Figma */}
                  <div className="absolute bottom-[-88.05px] flex h-[223.059px] items-center justify-center right-[-77.02px] w-[287.359px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "2735" } as React.CSSProperties}>
                    <div className="flex-none rotate-[15.508deg]">
                      <div className="h-[161.147px] relative w-[253.502px]">
                        <div className="absolute inset-[-310.28%_-197.24%]">
                          <ImageWithBasePath
                            src="/figma-assets/cfe01d6c1c1cad5ca28bf9ee41d6c5ae15db34b3.svg"
                            alt=""
                            width={253}
                            height={161}
                            className="block max-w-none size-full"
                            unoptimized
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Карточка 3 - Корпоративный */}
            <div className="pricing-card content-start flex flex-[1_0_0] flex-wrap gap-[35px] h-[703px] items-start min-h-px min-w-px overflow-clip px-[16px] py-[32px] relative rounded-[10px]">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px min-w-px relative">
                <div className="content-stretch flex flex-col gap-[16px] items-center relative w-full">
                  <div className="flex flex-col font-bold font-[var(--headings,normal)] justify-center leading-[0] min-w-full relative text-white text-[20px] text-center w-[min-content]">
                    <p className="leading-[1.2]">{locale === "ru" ? "Корпоративный" : "Corporate"}</p>
                  </div>
                  <div className="gradient-border content-stretch flex items-center justify-center overflow-clip px-[8px] py-[5px] relative">
                    <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative text-white text-[9px]">
                      <p className="leading-[1.2]">{locale === "ru" ? "Месяц" : "Month"}</p>
                    </div>
                  </div>
                  <p className="font-normal leading-[1.2] min-w-full not-italic relative text-[12px] text-[rgba(255,255,255,0.7)] text-center w-[min-content]">
                    {locale === "ru" ? "Делаем скидки на количество от 50 голов" : "Discounts for 50+ users"}
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-0 items-center relative w-full">
                  <div className="flex flex-col font-normal font-[var(--leadings,normal)] h-[102px] justify-center leading-[0] relative text-white text-[22px] text-center w-full">
                    <p className="leading-[1.2]">{locale === "ru" ? "от 200 ₽" : "from 200 ₽"}</p>
                  </div>
                </div>
                <PricingCardButton>
                  {locale === "ru" ? "Оставить заявку" : "Leave request"}
                </PricingCardButton>
                <div className="h-[1px] relative w-[118px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
                  <p className="font-normal leading-[1.2] not-italic relative text-[12px] text-[rgba(255,255,255,0.7)] w-full">
                    {locale === "ru"
                      ? "Цена лицензии определяется количеством пользователей, которые могут одновременно использовать ПО."
                      : "License price is determined by the number of users who can simultaneously use the software."}
                  </p>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
                    {[
                      locale === "ru" ? "Чарты в Editor" : "Charts in Editor",
                      locale === "ru" ? "Конструктор отчетов" : "Report builder",
                      locale === "ru" ? "Стилизация интерфейса" : "Interface styling",
                      locale === "ru" ? "Федерация учетных записей и SSO" : "Account federation and SSO",
                      locale === "ru" ? "Безопасное встраивание чартов" : "Secure chart embedding",
                      locale === "ru" ? "Контроль публикаций" : "Publication control",
                      locale === "ru" ? "SLA и приоритетная поддержка" : "SLA and priority support",
                    ].map((item, idx) => (
                      <div key={idx} className="content-stretch flex gap-[8px] items-center relative w-full">
                        <div className="content-stretch flex flex-col items-start justify-center relative w-[22px]">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#00D4FF"/>
                          </svg>
                        </div>
                        <p className="flex-[1_0_0] font-normal leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-white">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Карточка 4 - Бессрочная */}
            <div className="pricing-card content-start flex flex-[1_0_0] flex-wrap gap-[35px] h-[703px] items-start min-h-px min-w-px overflow-clip px-[16px] py-[32px] relative rounded-[10px]">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px min-w-px relative">
                <div className="content-stretch flex flex-col gap-[16px] items-center relative w-full">
                  <div className="flex flex-col font-bold font-[var(--headings,normal)] justify-center leading-[0] min-w-full relative text-white text-[22px] text-center w-[min-content]">
                    <p className="leading-[1.2]">{locale === "ru" ? "Бессрочная" : "Perpetual"}</p>
                  </div>
                  <div className="gradient-border content-stretch flex items-center justify-center overflow-clip px-[8px] py-[5px] relative">
                    <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative text-white text-[9px]">
                      <p className="leading-[1.2]">{locale === "ru" ? "Год" : "Year"}</p>
                    </div>
                  </div>
                  <p className="font-normal leading-[1.2] min-w-full not-italic relative text-[12px] text-[rgba(255,255,255,0.7)] text-center w-[min-content]">
                    {locale === "ru" ? "За активного пользователя, минимум 100" : "Per active user, minimum 100"}
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-0 items-center relative w-full">
                  <div className="flex flex-col font-normal font-[var(--leadings,normal)] h-[102px] justify-center leading-[0] relative text-white text-[22px] text-center w-full">
                    <p className="leading-[1.2]">{locale === "ru" ? "По запросу" : "On request"}</p>
                  </div>
                </div>
                <PricingCardButton>
                  {locale === "ru" ? "Оставить заявку" : "Leave request"}
                </PricingCardButton>
                <div className="h-[1px] relative w-[118px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
                  <p className="font-normal leading-[1.2] not-italic relative text-[12px] text-[rgba(255,255,255,0.7)] w-full">
                    {locale === "ru"
                      ? "Цена лицензии определяется количеством пользователей, которые могут одновременно использовать ПО."
                      : "License price is determined by the number of users who can simultaneously use the software."}
                  </p>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
                    {[
                      locale === "ru" ? "Разворачивание в любой инфраструктуре" : "Deployment in any infrastructure",
                      locale === "ru" ? "Обеспечение закрытого контура" : "Closed loop provision",
                      locale === "ru" ? "Документация по администрированию" : "Administration documentation",
                      locale === "ru" ? "Регулярные обновления и поддержа" : "Regular updates and support",
                      locale === "ru" ? "Реестр отечественного ПО" : "Domestic software registry",
                    ].map((item, idx) => (
                      <div key={idx} className="content-stretch flex gap-[8px] items-center relative w-full">
                        <div className="content-stretch flex flex-col items-start justify-center relative w-[22px]">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#00D4FF"/>
                          </svg>
                        </div>
                        <p className="flex-[1_0_0] font-normal leading-[1.2] min-h-px min-w-px not-italic relative text-[12px] text-white">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Секция "Цена развертывания не зависит от способа" */}
      <div className="content-stretch flex flex-col h-[917.423px] items-center px-[48px] py-[96px] relative w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-0 items-center max-w-[1061px] min-h-px min-w-px relative w-full">
          <div className="content-stretch flex flex-col gap-[64px] items-start relative w-full">
            <div className="content-stretch flex flex-col gap-[32px] items-center relative text-white text-center w-full">
              <p className="font-bold font-[var(--headings,normal)] leading-[110%] relative text-[48px] w-full">
                {locale === "ru" ? "Цена развертывания не зависит от способа" : "Deployment price doesn't depend on method"}
              </p>
              <p className="font-normal font-[var(--leadings,normal)] leading-[120%] relative text-[22px] w-full">
                {locale === "ru" ? "Как официальная сертификация помогает вашему бизнесу" : "How official certification helps your business"}
              </p>
            </div>
            <div className="content-center flex flex-wrap gap-[113px_64px] items-center relative w-full overflow-visible">
              {/* Highlight за картинкой справа - компонент GlowEffect из CTA блока */}
              <div className="absolute pointer-events-none" style={{ 
                zIndex: 0,
                left: '75%', // Центр подсветки по центру картинки (картинка справа, её центр примерно на 75% ширины контейнера)
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}>
                <GlowEffect
                  variant="wide"
                  color="lighter"
                  blur="wide"
                  position="center"
                  opacity={1.5}
                  style={{
                    width: '1200px',
                    height: '636px',
                  }}
                />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative z-10">
                <p className="font-bold font-[var(--headings,normal)] leading-[120%] relative text-[28px] text-white w-full">
                  {locale === "ru" ? "Варианты развертывания:" : "Deployment options:"}
                </p>
                <div className="content-stretch flex flex-col gap-[32px] h-[204px] items-center relative w-full">
                  <div className="content-stretch flex gap-[24px] items-start justify-center relative w-full">
                    <div className="relative size-[75px] flex-shrink-0">
                      <ImageWithBasePath
                        src="/figma-assets/server-icon.svg"
                        alt=""
                        width={75}
                        height={75}
                        className="w-full h-full object-contain"
                        unoptimized
                      />
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative text-white">
                      <div className="flex flex-col font-bold font-[var(--headings,normal)] justify-center leading-[120%] relative text-[22px] w-full">
                        <p>{locale === "ru" ? "Сервер" : "Server"}</p>
                      </div>
                      <p className="font-normal leading-[140%] not-italic relative text-[16px] w-full">
                        {locale === "ru" ? "Создание индивидуальных панелей мониторинга под ваши бизнес-метрики" : "Create custom monitoring dashboards for your business metrics"}
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-start justify-center relative w-full">
                    <div className="relative size-[75px] flex-shrink-0">
                      <ImageWithBasePath
                        src="/figma-assets/cloud-icon.svg"
                        alt=""
                        width={75}
                        height={75}
                        className="w-full h-full object-contain"
                        unoptimized
                      />
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative text-white">
                      <div className="flex flex-col font-bold font-[var(--headings,normal)] justify-center leading-[120%] relative text-[22px] w-full">
                        <p>{locale === "ru" ? "Облако" : "Cloud"}</p>
                      </div>
                      <p className="font-normal leading-[140%] not-italic relative text-[16px] w-full">
                        {locale === "ru" ? "Подключение и настройка источников данных: CRM, ERP, базы данных, облачные сервисы" : "Connect and configure data sources: CRM, ERP, databases, cloud services"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[1_0_0] min-h-px min-w-px relative z-10" style={{ width: '498.5px', height: '497.423px' }}>
                <ImageWithBasePath
                  src="/figma-assets/887f80c6627032462208f7fd66347fdbfb69a864.png"
                  alt=""
                  width={463}
                  height={462}
                  className="w-full h-full object-contain"
                  style={{
                    mixBlendMode: 'plus-lighter',
                  }}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Секция "Дополнительные услуги" */}
      <div className="content-stretch flex flex-col items-center px-0 py-[96px] relative w-full">
        <div className="content-stretch flex flex-col gap-0 items-center max-w-[1061px] relative w-full">
          <div className="content-stretch flex flex-col gap-[64px] items-start relative w-full">
            <div className="content-stretch flex flex-col gap-[32px] items-center relative text-center w-full">
              <p className="font-bold font-[var(--headings,normal)] leading-[1.1] relative text-[48px] text-white w-full">
                {locale === "ru" ? "Дополнительные услуги" : "Additional services"}
              </p>
              <div className="font-normal font-[var(--leadings,normal)] leading-[1.2] relative text-[22px] text-white w-full">
                <p className="mb-[22px]">
                  {locale === "ru" ? "Расширьте функциональность вашей BI-платформы." : "Expand your BI-platform's functionality."}
                </p>
                <p>
                  {locale === "ru" ? "Команда бизнес - спецназа:" : "Team of business specialists:"}
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[24px] items-center relative w-full">
              {[
                { 
                  title: locale === "ru" ? "Интеграция данных" : "Data integration",
                  desc: locale === "ru" ? "Подключение и настройка источников данных: CRM, ERP, базы данных, облачные сервисы" : "Connect and configure data sources: CRM, ERP, databases, cloud services",
                  icon: "/figma-assets/fce3ec7f4d45c1c7c1b4d91a94e9e21e66ee4c8f.svg"
                },
                { 
                  title: locale === "ru" ? "Соответствие 152-ФЗ" : "152-FZ Compliance",
                  desc: locale === "ru" ? "Создание индивидуальных панелей мониторинга под ваши бизнес-метрики" : "Create custom monitoring dashboards for your business metrics",
                  icon: "/figma-assets/1dc96c12e98e6bbeb3ea1d14e2cb7b5797ef3f65.svg"
                },
                { 
                  title: locale === "ru" ? "Обучение сотрудников" : "Employee training",
                  desc: locale === "ru" ? "Проведение тренингов и воркшопов для вашей команды" : "Conduct trainings and workshops for your team",
                  icon: "/figma-assets/07c9ed7e5e7a15e55cd8b638f40ee5ec2b74959c.svg"
                },
                { 
                  title: locale === "ru" ? "Техническая поддержка" : "Technical support",
                  desc: locale === "ru" ? "Консультации и помощь в решении задач по работе с платформой" : "Consultations and help with platform tasks",
                  icon: "/figma-assets/78cbd4e6aa7e8e1ccd8df69f0ff8b14764d3f055.svg"
                },
              ].map((service, idx) => (
                <div key={idx} className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-full items-center min-h-[375px] min-w-px px-[24px] py-[32px] relative service-card-border overflow-visible">
                    {/* Highlight внутри карточки - Glow/lighter в верхнем левом углу */}
                    <div className="absolute pointer-events-none inset-0 overflow-hidden rounded-[20px]" style={{ 
                      zIndex: 0,
                    }}>
                      <div className="absolute" style={{
                        left: '0',
                        top: '0',
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(ellipse, #0060E5 0%, rgba(0, 96, 229, 0.6) 25%, rgba(0, 96, 229, 0.3) 50%, transparent 75%)',
                        filter: 'blur(50px)',
                        opacity: 0.7,
                        transform: 'translate(-25%, -25%)',
                      }} />
                    </div>
                    <div className="content-stretch flex flex-col gap-[24px] items-center px-0 py-[24px] relative w-full z-10">
                      <div className="content-stretch flex items-center justify-center relative">
                        <ImageWithBasePath
                          src={service.icon}
                          alt=""
                          width={75}
                          height={75}
                          className="block object-contain"
                          style={{ width: '75px', height: '75px' }}
                          unoptimized
                        />
                      </div>
                      <div className="content-stretch flex flex-col gap-[16px] h-[112px] items-start relative text-white text-center w-full">
                        <div className="flex flex-col font-bold font-[var(--headings,normal)] justify-center leading-[0] relative text-[20px] w-full">
                          <p className="leading-[1.2]">{service.title}</p>
                        </div>
                        <p className="font-normal leading-[1.4] not-italic relative text-[16px] w-full">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Секция CTA */}
      <div className="content-stretch flex flex-col gap-[10px] items-center px-0 py-[96px] relative w-full overflow-visible">
        <div className="content-stretch flex flex-col gap-0 items-center max-w-[1400px] px-[64px] py-0 relative w-full overflow-visible">
          {/* Highlight за блоком CTA - за фоном страницы */}
          <div className="absolute pointer-events-none" style={{ 
            zIndex: 0,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
            <GlowEffect
              variant="wide"
              color="lighter"
              blur="wide"
              position="center"
              opacity={1.5}
              style={{
                width: '1200px',
                height: '636px',
              }}
            />
          </div>
          <div className="content-stretch flex flex-col gap-[32px] items-center px-0 py-[48px] relative w-full" style={{ zIndex: 1 }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
              <ImageWithBasePath
                src="/figma-assets/c9a86127f4ad1bfc366ad2ab07f56b1c5bebe055.png"
                alt=""
                width={1400}
                height={500}
                className="absolute h-[297.55%] left-[-27.18%] max-w-none top-[-99.63%] w-[127.27%]"
                unoptimized
              />
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start justify-center max-w-[800px] px-[64px] py-0 relative text-center w-full">
              <p className="font-bold font-[var(--headings,normal)] leading-[1.1] relative text-[36px] text-white w-full">
                {locale === "ru" ? "Готовы начать работу с комфортной системой?" : "Ready to start working with a comfortable system?"}
              </p>
              <p className="font-normal leading-[1.4] not-italic relative text-[17px] text-white w-full">
                {locale === "ru" ? "Получите бесплатную консультацию  и демонстрацию платформы уже сегодня" : "Get a free consultation and platform demonstration today"}
              </p>
            </div>
            <Button size="large">
              {locale === "ru" ? "Запросить Демо" : "Request Demo"}
            </Button>
          </div>
        </div>
      </div>

      {/* Секция "А если был опыт с другой компанией?" */}
      <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[1400px] px-0 py-[96px] relative w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[1061px] relative w-full">
          <p className="font-bold font-[var(--headings,normal)] leading-[1.2] relative text-[28px] text-white w-full">
            {locale === "ru" ? "А если был опыт с другой компанией?" : "What if you had experience with another company?"}
          </p>
          <div className="font-normal leading-[1.4] not-italic relative text-[17px] text-white w-full">
            <p className="mb-[17px]">
              {locale === "ru"
                ? "Многие российские компании сегодня либо остались без привычных инструментов аналитики, либо разочаровались в альтернативах — в том числе и в отечественных BI-решениях. Если ваш эксперимент с другой системой не оправдал ожиданий, Fastboard предлагает вам безрисковый путь в надёжную и полноценную аналитику данных."
                : "Many Russian companies today have either been left without familiar analytics tools or have been disappointed in alternatives, including domestic BI solutions. If your experiment with another system didn't meet expectations, Fastboard offers you a risk-free path to reliable and comprehensive data analytics."}
            </p>
            <p className="mb-[17px]">
              {locale === "ru"
                ? "В рамках специальной программы Fastboard гарантирует комфортный и безопасный переход — независимо от того, с какой BI-системы вы мигрируете: будь то ушедший с рынка западный продукт или российское решение, которое не справилось с вашими задачами."
                : "As part of a special program, Fastboard guarantees a comfortable and safe transition — regardless of which BI system you're migrating from: whether it's a Western product that left the market or a Russian solution that didn't meet your needs."}
            </p>
            <p className="mb-[17px]">
              {locale === "ru"
                ? "Fastboard — это современное on-premise BI-решение, созданное в России и уже доказавшее свою эффективность у сотен компаний. Оно включает всё необходимое для полноценной аналитики: мощный ETL, гибкую визуализацию, поддержку неограниченного числа пользователей и полный контроль над данными."
                : "Fastboard is a modern on-premise BI solution created in Russia and already proven effective by hundreds of companies. It includes everything needed for comprehensive analytics: powerful ETL, flexible visualization, support for unlimited users, and full control over data."}
            </p>
            <p className="mb-[17px]">
              {locale === "ru" ? "Главное преимущество — отсутствие финансового риска" : "Main advantage — no financial risk"}
            </p>
            <p className="mb-[17px]">
              {locale === "ru"
                ? "Вы платите только в том случае, если после завершения миграции решите остаться с Fastboard. До этого — система предоставляется бесплатно, без ограничений по функциональности и количеству пользователей."
                : "You only pay if, after completing the migration, you decide to stay with Fastboard. Until then, the system is provided free of charge, without restrictions on functionality or number of users."}
            </p>
            <p>
              {locale === "ru" ? "Условия участия в программе" : "Program participation terms"}
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
            {[
              { 
                num: "1",
                text: locale === "ru" ? "Постепенно отказаться от использования физических дата‑центров и перейти на облачную платформу. Поводом стали проблемы с инфраструктурой из‑за стареющего парка собственных серверов." : "Gradually abandon physical data centers and move to a cloud platform. The reason was infrastructure problems due to an aging fleet of own servers."
              },
              { 
                num: "2",
                text: locale === "ru" ? "Снизить риск использования международных лицензионных продуктов — перейти на Open Source либо другие доступные решения." : "Reduce the risk of using international licensed products — switch to Open Source or other available solutions."
              },
              { 
                num: "3",
                text: locale === "ru" ? "Перевести всю отчётность компании на один BI‑инструмент для удобства поддержки и развития." : "Transfer all company reporting to one BI tool for ease of support and development."
              },
            ].map((item, idx) => (
              <div key={idx} className="content-stretch flex gap-[12px] items-start max-w-[850px] relative w-full">
                <div className="content-stretch flex flex-col items-start justify-center relative size-[24px]">
                  <div className="aspect-[22/22] border border-[#00effd] border-solid content-stretch flex flex-col items-center justify-center relative rounded-[40px] w-full">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative text-white text-[14px] text-center">
                      <p className="leading-[1.4]">{item.num}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                  <p className="font-normal leading-[1.4] not-italic relative text-[17px] text-white w-full">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="font-normal leading-[1.4] not-italic relative text-[17px] text-white w-full">
            <p className="mb-[17px]">
              {locale === "ru"
                ? "В «Ренессанс страхование» рассматривали несколько решений, доступных на рынке, но они или не удовлетворяли все потребности компании, или требовали приобретать дорогостоящую лицензию. По итогам поисков и тестов предложение Yandex Cloud оказалось для «Ренессанс страхование» оптимальным и технически удобным."
                : "Renaissance Insurance considered several solutions available on the market, but they either did not meet all the company's needs or required purchasing an expensive license. Based on the search and testing results, Yandex Cloud's proposal turned out to be optimal and technically convenient for Renaissance Insurance."}
            </p>
            <p>
              {locale === "ru"
                ? "Страховые компании работают с большим количеством персональных данных. Их необходимо правильно хранить и защищать. Платформа Yandex Cloud и все её сервисы соответствуют современным российским и международным стандартам безопасности, что имеет критическое значение при работе с такой информацией. В частности, это касается выполнения требований федерального закона № 152 «О персональных данных». Клиенты Yandex Cloud могут обрабатывать в облаке любые категории персональных данных."
                : "Insurance companies work with a large amount of personal data. They need to be properly stored and protected. The Yandex Cloud platform and all its services comply with modern Russian and international security standards, which is critical when working with such information. In particular, this concerns compliance with the requirements of Federal Law No. 152 'On Personal Data'. Yandex Cloud clients can process any categories of personal data in the cloud."}
            </p>
          </div>
        </div>
      </div>

      {/* Секция "Почему выбирают нас?" */}
      <div className="content-stretch flex flex-col items-center px-0 py-[96px] relative w-full">
        <div className="content-stretch flex flex-col gap-0 items-center max-w-[1061px] relative w-full">
          <div className="content-stretch flex flex-col gap-[64px] items-start relative w-full">
            <div className="content-stretch flex flex-col gap-[32px] items-center relative text-white text-center w-full">
              <p className="font-bold font-[var(--headings,normal)] leading-[1.1] relative text-[48px] w-full">
                {locale === "ru" ? "Почему выбирают нас?" : "Why choose us?"}
              </p>
              <p className="font-normal font-[var(--leadings,normal)] leading-[1.2] relative text-[22px] w-full">
                {locale === "ru" ? "Российская BI-платформа, созданная с учетом потребностей отечественного бизнеса" : "Russian BI platform created with the needs of domestic business in mind"}
              </p>
            </div>
            <div className="content-stretch flex gap-[24px] items-center relative w-full">
              {[
                { 
                  title: locale === "ru" ? "Безопасность данных" : "Data security",
                  desc: locale === "ru" ? "Все данные хранятся на серверах в России с соблюдением требований ФЗ-152" : "All data is stored on servers in Russia with compliance to FZ-152 requirements",
                  icon: "/figma-assets/icon-data-security.svg"
                },
                { 
                  title: locale === "ru" ? "Высокая продуктивность" : "High productivity",
                  desc: locale === "ru" ? "Обработка миллионов строк данных за секунды благодаря оптимизированной архитектуре" : "Process millions of data rows in seconds thanks to optimized architecture",
                  icon: "/figma-assets/icon-high-productivity.svg"
                },
                { 
                  title: locale === "ru" ? "Русскоязычная поддержка" : "Russian language support",
                  desc: locale === "ru" ? "Команда экспертов всегда готова помочь на русском языке" : "Team of experts always ready to help in Russian",
                  icon: "/figma-assets/icon-russian-support.svg"
                },
                { 
                  title: locale === "ru" ? "Сертифицированное решение" : "Certified solution",
                  desc: locale === "ru" ? "Платформа сертифицирована Минцифры России и соответствует всем требованиям" : "Platform is certified by Russian Ministry of Digital Development and meets all requirements",
                  icon: "/figma-assets/icon-certified.svg"
                },
              ].map((feature, idx) => (
                <div key={idx} className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-full items-center min-h-[375px] min-w-px px-[24px] py-[32px] relative service-card-border overflow-visible">
                    {/* Highlight внутри карточки - Glow/lighter в верхнем левом углу */}
                    <div className="absolute pointer-events-none inset-0 overflow-hidden rounded-[20px]" style={{ 
                      zIndex: 0,
                    }}>
                      <div className="absolute" style={{
                        left: '0',
                        top: '0',
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(ellipse, #0060E5 0%, rgba(0, 96, 229, 0.6) 25%, rgba(0, 96, 229, 0.3) 50%, transparent 75%)',
                        filter: 'blur(50px)',
                        opacity: 0.7,
                        transform: 'translate(-25%, -25%)',
                      }} />
                    </div>
                    <div className="content-stretch flex flex-col gap-[24px] items-center px-0 py-[24px] relative w-full z-10">
                      <div className="content-stretch flex items-center justify-center relative">
                        <ImageWithBasePath
                          src={feature.icon}
                          alt=""
                          width={75}
                          height={75}
                          className="block object-contain"
                          style={{ width: '75px', height: '75px' }}
                          unoptimized
                        />
                      </div>
                      <div className="content-stretch flex flex-col gap-[16px] h-[112px] items-start relative text-white text-center w-full">
                        <div className="flex flex-col font-bold font-[var(--headings,normal)] justify-center leading-[0] relative text-[20px] w-full">
                          <p className="leading-[1.2]">{feature.title}</p>
                        </div>
                        <p className="font-normal leading-[1.4] not-italic relative text-[16px] w-full">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
