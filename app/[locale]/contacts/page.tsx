import { notFound } from "next/navigation";
import { getDictionary, type Locale } from "../../../lib/dictionaries";
import Breadcrumbs from "../../../components/ui/Breadcrumbs";
import ContactSection from "../../../components/ui/ContactSection";

export default async function ContactsPage({
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
              { label: locale === "ru" ? "Контакты" : "Contacts" },
            ]}
          />
        </div>
        
        <h1 className="relative z-10 font-bold leading-[110%] text-white text-[56px] text-center max-w-[900px] px-4">
          {locale === "ru" ? "Контакты" : "Contacts"}
        </h1>
        
        <p className="relative z-10 font-normal leading-[140%] text-white/80 text-[18px] text-center max-w-[600px] px-4">
          {locale === "ru"
            ? "Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить на ваши вопросы и помочь с выбором решения."
            : "Contact us in any convenient way. We are always ready to answer your questions and help you choose a solution."}
        </p>
      </div>

      {/* Секция контактов с картой */}
      <ContactSection locale={locale as "ru" | "en"} />
    </div>
  );
}
