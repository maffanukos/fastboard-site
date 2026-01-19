import { notFound } from "next/navigation";
import { getDictionary, type Locale } from "../../../lib/dictionaries";
import Breadcrumbs from "../../../components/ui/Breadcrumbs";

export default async function PrivacyPolicyPage({
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
              { label: locale === "ru" ? "Политика обработки данных" : "Privacy Policy" },
            ]}
          />
        </div>
        
        <h1 className="relative z-10 font-bold leading-[110%] text-white text-[56px] text-center max-w-[900px] px-4">
          {locale === "ru" ? "Политика обработки персональных данных" : "Personal Data Processing Policy"}
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
                  ? "Настоящая Политика обработки персональных данных (далее — «Политика») разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки и защиты персональных данных пользователей платформы Fastboard BI."
                  : "This Personal Data Processing Policy (hereinafter referred to as the \"Policy\") is developed in accordance with Federal Law No. 152-FZ of July 27, 2006 \"On Personal Data\" and determines the procedure for processing and protecting personal data of Fastboard BI platform users."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[32px] font-bold leading-[110%] text-white mb-4">
                {locale === "ru" ? "2. Основные понятия" : "2. Basic Concepts"}
              </h2>
              <div className="space-y-3">
                <p className="text-[16px] leading-[140%] text-white/80">
                  <strong className="text-white">
                    {locale === "ru" ? "Персональные данные" : "Personal data"}
                  </strong>
                  {" — "}
                  {locale === "ru"
                    ? "любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу."
                    : "any information relating to a directly or indirectly identified or identifiable individual."}
                </p>
                <p className="text-[16px] leading-[140%] text-white/80">
                  <strong className="text-white">
                    {locale === "ru" ? "Обработка персональных данных" : "Processing of personal data"}
                  </strong>
                  {" — "}
                  {locale === "ru"
                    ? "любое действие с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, передачу, обезличивание, блокирование, удаление, уничтожение."
                    : "any action with personal data, including collection, recording, systematization, accumulation, storage, clarification, extraction, use, transfer, depersonalization, blocking, deletion, destruction."}
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-[32px] font-bold leading-[110%] text-white mb-4">
                {locale === "ru" ? "3. Цели обработки персональных данных" : "3. Purposes of Personal Data Processing"}
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4 text-[16px] leading-[140%] text-white/80">
                <li>
                  {locale === "ru"
                    ? "Предоставление доступа к платформе Fastboard BI"
                    : "Providing access to the Fastboard BI platform"}
                </li>
                <li>
                  {locale === "ru"
                    ? "Обработка запросов и обращений пользователей"
                    : "Processing user requests and inquiries"}
                </li>
                <li>
                  {locale === "ru"
                    ? "Информирование о новых возможностях и обновлениях платформы"
                    : "Informing about new features and platform updates"}
                </li>
                <li>
                  {locale === "ru"
                    ? "Выполнение обязательств по договорам оказания услуг"
                    : "Fulfillment of obligations under service agreements"}
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-[32px] font-bold leading-[110%] text-white mb-4">
                {locale === "ru" ? "4. Состав обрабатываемых персональных данных" : "4. Composition of Processed Personal Data"}
              </h2>
              <p className="text-[16px] leading-[140%] text-white/80">
                {locale === "ru"
                  ? "ООО «Вин Солюшнс» обрабатывает следующие категории персональных данных:"
                  : "Wins Solutions LLC processes the following categories of personal data:"}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-[16px] leading-[140%] text-white/80">
                <li>
                  {locale === "ru"
                    ? "Фамилия, имя, отчество"
                    : "Last name, first name, patronymic"}
                </li>
                <li>
                  {locale === "ru"
                    ? "Контактные данные (телефон, электронная почта)"
                    : "Contact information (phone, email)"}
                </li>
                <li>
                  {locale === "ru"
                    ? "Данные организации (наименование, ИНН, ОГРН)"
                    : "Organization data (name, tax ID, OGRN)"}
                </li>
                <li>
                  {locale === "ru"
                    ? "Данные об использовании платформы (логи доступа, статистика использования)"
                    : "Platform usage data (access logs, usage statistics)"}
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-[32px] font-bold leading-[110%] text-white mb-4">
                {locale === "ru" ? "5. Меры по защите персональных данных" : "5. Measures to Protect Personal Data"}
              </h2>
              <p className="text-[16px] leading-[140%] text-white/80">
                {locale === "ru"
                  ? "ООО «Вин Солюшнс» принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного доступа, уничтожения, изменения, блокирования, копирования, предоставления, распространения, а также от иных неправомерных действий."
                  : "Wins Solutions LLC takes necessary legal, organizational and technical measures to protect personal data from unauthorized access, destruction, modification, blocking, copying, provision, distribution, as well as from other unlawful actions."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[32px] font-bold leading-[110%] text-white mb-4">
                {locale === "ru" ? "6. Права субъектов персональных данных" : "6. Rights of Personal Data Subjects"}
              </h2>
              <p className="text-[16px] leading-[140%] text-white/80">
                {locale === "ru"
                  ? "Субъект персональных данных имеет право:"
                  : "The personal data subject has the right to:"}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-[16px] leading-[140%] text-white/80">
                <li>
                  {locale === "ru"
                    ? "Получать информацию, касающуюся обработки его персональных данных"
                    : "Receive information regarding the processing of their personal data"}
                </li>
                <li>
                  {locale === "ru"
                    ? "Требовать уточнения персональных данных, их блокирования или уничтожения"
                    : "Require clarification, blocking or destruction of personal data"}
                </li>
                <li>
                  {locale === "ru"
                    ? "Отозвать согласие на обработку персональных данных"
                    : "Withdraw consent to the processing of personal data"}
                </li>
                <li>
                  {locale === "ru"
                    ? "Обжаловать действия или бездействие оператора в уполномоченный орган по защите прав субъектов персональных данных"
                    : "Appeal the actions or inaction of the operator to the authorized body for the protection of the rights of personal data subjects"}
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-[32px] font-bold leading-[110%] text-white mb-4">
                {locale === "ru" ? "7. Контактная информация" : "7. Contact Information"}
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
                <p>
                  {locale === "ru" ? "Email: MAIL@MAIL.RU" : "Email: MAIL@MAIL.RU"}
                </p>
                <p>
                  {locale === "ru" ? "Телефон: +7499 111-22-33" : "Phone: +7499 111-22-33"}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
