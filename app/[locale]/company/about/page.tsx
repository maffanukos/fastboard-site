import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary, type Locale } from "../../../../lib/dictionaries";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import AchievementCubes from "../../../../components/ui/AchievementCubes";
import GridSquares from "../../../../components/ui/GridSquares";
import DashboardSlides from "../../../../components/ui/DashboardSlides";
import ClientLogos from "../../../../components/ui/ClientLogos";
import ValueSlider from "../../../../components/ui/ValueSlider";
import HistoryTimeline from "../../../../components/ui/HistoryTimeline";
import TeamSection from "../../../../components/ui/TeamSection";
import ContactSection from "../../../../components/ui/ContactSection";
import Button from "../../../../components/ui/Button";

export default async function AboutPage({
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
      <div className="flex flex-col gap-[48px] items-center px-0 py-[96px] relative w-full overflow-visible min-h-[500px]">
        {/* Сетка с квадратами слева */}
        <GridSquares />
        
        {/* Дашборды справа */}
        <DashboardSlides locale={locale as "ru" | "en"} />
        
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
              { label: locale === "ru" ? "Компания" : "Company" },
              { label: locale === "ru" ? "О нас" : "About us" },
            ]}
          />
        </div>
        
        <h1 className="relative z-10 font-bold leading-[110%] text-white text-[56px] text-center max-w-[900px] px-4 whitespace-pre-line">
          {locale === "ru" ? "О нас" : "About us"}
        </h1>
        
        <p className="absolute z-10 font-semibold leading-[130%] text-white text-[32px] text-left max-w-[900px] px-4 whitespace-pre-line flex flex-wrap justify-center items-start left-[101px] top-[270px]">
          {locale === "ru"
            ? "Мы создали BI\nчтобы радовать вас"
            : "We created BI\nto please you"}
        </p>
        
        <p className="absolute z-10 font-normal leading-[140%] text-white/80 text-[16px] text-left max-w-[400px] px-4 pt-6 whitespace-pre-line left-[101px] top-[353px]">
          {locale === "ru"
            ? "Предоставляем полный спектр услуг\nв BI: от аудита вашей компании\nдо разработки и реализации комплексных\nсистем дашбордов и отчетности"
            : "We provide a full range of services\nin BI: from auditing your company\nto developing and implementing complex\ndashboard and reporting systems"}
        </p>
      </div>

      {/* Секция "Fastboard в цифрах" / "Наши достижения" */}
      <div className="flex flex-col items-center px-[120px] py-[96px] relative w-full overflow-visible">
        <div className="flex flex-col gap-[64px] items-center max-w-[1400px] relative w-full overflow-visible">
          {/* Заголовок */}
          <div className="flex flex-col items-center gap-[24px] relative w-full">
            <h2 className="font-bold leading-[110%] text-white text-[48px] text-center">
              {locale === "ru" ? "Fastboard в цифрах:" : "Fastboard in numbers:"}
            </h2>
          </div>

          {/* Статистика с визуализацией 3D кубов */}
          <div className="flex flex-col gap-[48px] items-center relative w-full overflow-visible">
            <AchievementCubes locale={locale as "ru" | "en"} />
          </div>
        </div>
      </div>

      {/* Секция "Наши клиенты" / "Our Clients" */}
      <div className="flex flex-col items-center px-[120px] pt-0 pb-0 relative w-full overflow-visible">
        <div className="flex flex-col gap-[64px] items-center max-w-[1400px] relative w-full overflow-visible">
          {/* Заголовок и описание */}
          <div className="flex flex-col items-center gap-[24px] relative w-full">
            <h2 className="font-bold leading-[110%] text-white text-[48px] text-center">
              {locale === "ru" ? "Наши клиенты" : "Our Clients"}
            </h2>
            <p className="font-normal leading-[140%] text-white/80 text-[16px] text-center max-w-[800px]">
              {locale === "ru"
                ? "Нам интересны как стратегические многокомпонентные задачи, охватывающие все бизнес-процессы, так и локальные работы с тактическими целями."
                : "We are interested in both strategic multi-component tasks covering all business processes, and local work with tactical goals."}
            </p>
            <Link href={`/${locale}/product/gallery`}>
              <Button variant="primary" size="medium">
                {locale === "ru" ? "Смотреть кейсы" : "View Cases"}
              </Button>
            </Link>
          </div>

          {/* Сетка с логотипами клиентов */}
          <div className="w-full">
            <ClientLogos locale={locale as "ru" | "en"} />
          </div>
        </div>
      </div>

      {/* Секция "В нас ценят лучшее" / "We value the best" */}
      <div className="flex flex-col items-center px-[120px] py-[96px] relative w-full overflow-visible">
        <div className="flex flex-col gap-[64px] items-center max-w-[1400px] relative w-full overflow-visible">
          {/* Заголовок и описание */}
          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="font-bold leading-[110%] text-white text-[48px] text-center">
              {locale === "ru" ? "В нас ценят лучшее" : "We value the best"}
            </h2>
            <p className="font-normal leading-[140%] text-white/80 text-[16px] text-center max-w-[800px]">
              {locale === "ru"
                ? "За что бы мы ни брались, мы стараемся делать так, чтобы результатом стало правильное и интересное решение поставленной задачи."
                : "Whatever we undertake, we strive to ensure that the result is a correct and interesting solution to the task at hand."}
            </p>
          </div>

          {/* Слайдер с карточками */}
          <div className="w-full">
            <ValueSlider locale={locale as "ru" | "en"} />
          </div>
        </div>
      </div>

      {/* Секция "История" / "History" */}
      <HistoryTimeline locale={locale as "ru" | "en"} />

      {/* Секция "Люди" / "People" */}
      <TeamSection locale={locale as "ru" | "en"} />

      {/* Секция "Контакты" / "Contacts" */}
      <ContactSection locale={locale as "ru" | "en"} />
    </div>
  );
}

