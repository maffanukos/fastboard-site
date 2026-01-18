import Image from "next/image";
import { type Locale } from "../../../../lib/dictionaries";
import CTAButtons from "../../../../components/CTAButtons";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";

export default async function CertificatesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const certificates = [
    {
      os: "Astra Linux",
      desc: "Полная совместимость с Astra Linux Special Edition, включая поддержку СКЗИ и средств защиты информации",
      image: "/certificates/astra-linux-6d968a.png",
      bullets: [
        "Поддержка всех версий Astra Linux SE",
        "Интеграция с системами мандатного контроля",
        "Сертифицированное шифрование данных",
        "Поддержка российских криптографических алгоритмов",
      ],
    },
    {
      os: "ALT Linux",
      desc: "Официальная сертификация на совместимость с ALT Linux для корпоративного использования",
      image: "/certificates/alt-linux-6d968a.png",
      bullets: [
        "Полная интеграция с ALT Linux SPT",
        "Поддержка системы управления пакетами",
        "Оптимизация под архитектуру ALTх",
        "Регулярные обновления безопасности",
      ],
    },
    {
      os: "РЕД ОС",
      desc: "Тестирование и подтверждение совместимости с РЕД ОС для промышленного применения",
      image: "/certificates/red-os.png",
      bullets: [
        "Поддержка РЕД ОС в промышленных средах",
        "Интеграция с системами мандатного контроля",
        "Сертифицированное шифрование данных",
        "Поддержка российских криптографических алгоритмов",
      ],
    },
    {
      os: "Astra Linux",
      desc: "Полная совместимость с Astra Linux Special Edition, включая поддержку СКЗИ и средств защиты информации",
      image: "/certificates/astra-linux-6d968a.png",
      bullets: [
        "Поддержка всех версий Astra Linux SE",
        "Интеграция с системами мандатного контроля",
        "Сертифицированное шифрование данных",
        "Поддержка российских криптографических алгоритмов",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#040d15] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Верхний подсвеченный фон - используем переменные из Figma: Glows/Lighter #0060E5, highlights/blur-wide 500px */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[614px] bg-[radial-gradient(circle_at_top,#0060E5_0,transparent_60%)] opacity-50 blur-[500px]" />

      <div className="relative mx-auto max-w-[1400px] px-[64px] pb-0 pt-0">
        {/* Хлебные крошки - Main/C/L: 13px, line-height: 120%, font-weight: 400, Text/secondary #ffffffb2 - по центру страницы */}
        <div className="flex items-center justify-center py-8">
          <Breadcrumbs
            items={[
              { label: "Главная", href: `/${locale}` },
              { label: "Продукт", href: `/${locale}/product` },
              { label: "Сертификаты" },
            ]}
          />
        </div>

        {/* Hero блок - Base/Block-outer-spaces/vertical: 96px, Base/Block-outer-spaces/horizontal: 64px - с Highlight-wide слоем */}
        <header className="relative flex flex-col items-center gap-[48px] px-[64px] py-[96px] text-center">
          {/* Highlight-wide слой из библиотеки компонентов - голубое свечение за текстом заголовка, размеры 1701x614, highlights/blur-wide: 500px, Glows/Lighter #0060E5 */}
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
          {/* Main/H1/LG: 48px, line-height: 110%, font-weight: 700, Text/pimary #ffffff */}
          <h1 className="relative z-10 max-w-[1100px] text-[48px] font-bold leading-[110%] text-white whitespace-normal">
            Fastboard — сертифицированная BI‑платформа для российской инфраструктуры
          </h1>
          {/* Main/Lead/L: 22px, line-height: 120%, font-weight: 400, Base/text-header-max-width: 800px */}
          <p className="relative z-10 max-w-[800px] text-[22px] leading-[120%] font-normal text-white whitespace-normal">
            Мы — вендор и разработчик продукта Fastboard и помогаем клиентам подобрать команду внедрения под запрос.
          </p>

          {/* Button/gap/lg: 12px между кнопками */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-[12px]">
            <CTAButtons />
          </div>
        </header>

        {/* Три круглые карточки - Base/Paddings/2xl: 48px (как остальные секции), Base/Paddings/xl: 32px, Base/Block-outer-spaces/vertical: 96px */}
        <section className="flex flex-nowrap justify-center items-start gap-[40px] px-[48px] py-[32px] pb-[96px]">
          {[
            {
              title: "Государственная сертификация",
              text: "Соответствие требованиям Минцифры",
              image: "/certificates/icon-state-certification.png",
              iconSize: 72,
            },
            {
              title: "Безопасность данных",
              text: "Возможность размещения на уровне и закрытом контуре",
              image: "/certificates/icon-data-security.png",
              iconSize: 85, // Щит визуально больше
            },
            {
              title: "Инфраструктурная независимость",
              text: "Соответствие требованиям Минцифры",
              image: "/certificates/icon-infrastructure.png",
              iconSize: 72,
            },
          ].map((item, idx) => (
            <div
              key={item.title}
              className="certificate-card-hover relative flex flex-shrink-0 flex-col items-center gap-[16px] px-3 text-center"
              style={{ width: '353.67px' }}
            >
              {/* Sert/img-sm: 155px, Glow/lighter #0060e5 */}
              <div className="relative mb-0 flex h-[155px] w-[155px] items-center justify-center overflow-visible">
                {/* Овальное свечение в нижней части иконки - Glow/lighter #0060e5, более овальное и внизу */}
                <div 
                  className="absolute bg-[#0060e5] opacity-20 blur-[20px]"
                  style={{
                    width: idx === 1 ? "140px" : "120px", // Щит - больше свечение
                    height: "50px",
                    bottom: "5px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    borderRadius: "50%",
                  }}
                />
                <div className="relative z-10 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={item.iconSize}
                    height={item.iconSize}
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
              {/* Main/H3/MD: 22px, line-height: 120%, font-weight: 700, Text/pimary #ffffff - без переносов */}
              <h2 className="text-[22px] font-bold leading-[120%] text-white whitespace-nowrap">
                {item.title}
              </h2>
              {/* Main/P/MD: 16px, line-height: 140%, font-weight: 400, Text/pimary #ffffff */}
              <p className="text-[16px] leading-[140%] font-normal text-white whitespace-normal break-words">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        {/* Официальная сертификация - первая секция - Base/Block-outer-spaces/vertical: 96px, Base/Paddings/2xl: 48px */}
        <section className="space-y-16 px-[48px] py-[96px]">
          <div className="space-y-8 text-center">
            {/* Main/H2/XL: 48px, line-height: 110%, font-weight: 700 */}
            <h2 className="text-[48px] font-bold leading-[110%] text-white whitespace-normal">
              Официальная сертификация
            </h2>
            {/* Main/Lead/L: 22px, line-height: 120%, font-weight: 400 */}
            <p className="text-[22px] leading-[120%] font-normal text-white whitespace-normal">
              Fastboard протестирован и сертифицирован для работы с ведущими
              российскими операционными системами.
            </p>
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            {certificates.map((item, certIdx) => (
              <article
                key={`${item.os}-${certIdx}`}
                className="certificate-article-hover flex flex-col items-center gap-[24px]"
              >
                {/* Base/Paddings/lg: 24px между элементами сертификата */}
                {/* Sert/Sertificate: 380px, Glows/Lighter #0060E5, Glows/Lighter 2 #0086E5, highlights/blur-wide: 500px */}
                <div className="certificate-frame-hover relative h-[536.68px] w-[380px]">
                  <div className="pointer-events-none absolute -inset-[40px] bg-[#0060E5] opacity-20 blur-[500px]" />
                  <div 
                    className="pointer-events-none absolute left-[3.98%] right-[4.82%] top-[101.73%] bottom-[-3%] bg-[#0086E5] opacity-15 blur-[12px]"
                  />
                  
                  <div className="relative h-full w-full rounded-[8px]">
                    <div
                      className="absolute inset-0 rounded-[8px]"
                      style={{
                        background: `linear-gradient(152.33deg, rgba(66, 76, 255, 0.2) 3.02%, rgba(0, 0, 0, 0.078) 16.3%, rgba(0, 0, 0, 0.108) 80.09%, rgba(66, 76, 255, 0.2) 95.09%), linear-gradient(20.29deg, rgba(0, 148, 253, 0.22) 6.18%, rgba(1, 1, 2, 0.02) 25.2%, rgba(12, 21, 27, 0.06) 85.26%, rgba(8, 104, 183, 0.43) 96.1%)`,
                        backdropFilter: "blur(10px)",
                        boxShadow: "inset 0px 0px 3.8px rgba(154, 221, 243, 0.43)",
                      }}
                    />
                    
                    <div
                      className="absolute inset-0 rounded-[8px]"
                      style={{
                        border: "1px solid transparent",
                        background: `linear-gradient(-44deg, rgba(255, 255, 255, 0.1) 10%, rgba(0, 239, 253, 0) 25%, rgba(11, 178, 242, 0) 90%, rgba(0, 177, 253, 0.85) 98%)`,
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                        padding: "1px",
                      }}
                    />

                    <div 
                      className="absolute overflow-hidden"
                      style={{
                        left: "4.23%",
                        right: "4.23%",
                        top: "calc(50% - 504.52px/2 - 0.34px)",
                        height: "504.52px",
                        borderRadius: "2.65348px",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={`Сертификат ${item.os}`}
                        width={348}
                        height={504}
                        className="h-full w-full object-contain"
                        unoptimized
                        style={{
                          filter: "drop-shadow(0px 9px 6.7px rgba(0, 0, 0, 0.4))",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Base/Paddings/sm: 12px между заголовком и описанием */}
                <div className="w-full max-w-[498.5px] space-y-[12px] text-center">
                  {/* Main/H2/SM: 22px, line-height: 120%, font-weight: 700 */}
                  <h3 className="text-[22px] font-bold leading-[120%] text-white whitespace-normal">
                    {item.os}
                  </h3>
                  {/* Main/P/SM: 15px, line-height: 140%, font-weight: 400 */}
                  <p className="text-[15px] leading-[140%] font-normal text-white whitespace-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Base/Paddings/sm: 12px между элементами списка, space-y-[5px] между строками */}
                {item.bullets.length > 0 && (
                  <ul className="mt-0 w-full max-w-[498.5px] space-y-[5px] text-left">
                    {item.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-[12px] text-[15px] leading-[140%] font-normal text-white"
                      >
                        <div className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center">
                          <svg
                            width="17"
                            height="12"
                            viewBox="0 0 17 12"
                            fill="none"
                            className="shrink-0"
                          >
                            <path
                              d="M1 5.5L6 10.5L16 0.5"
                              stroke={`url(#gradient-${item.os.replace(/\s+/g, '-')}-${certIdx}-${idx})`}
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id={`gradient-${item.os.replace(/\s+/g, '-')}-${certIdx}-${idx}`}
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="rgba(0, 239, 253, 1)"
                                />
                                <stop
                                  offset="33%"
                                  stopColor="rgba(11, 178, 242, 1)"
                                />
                                <stop
                                  offset="66%"
                                  stopColor="rgba(20, 131, 234, 1)"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="rgba(31, 70, 224, 1)"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Почему это важно - Base/Block-outer-spaces/vertical: 96px, Base/Paddings/2xl: 48px */}
        <section className="space-y-16 px-[48px] py-[96px]">
          <div className="space-y-8 text-center">
            {/* Main/H2/XL: 48px, line-height: 110%, font-weight: 700 */}
            <h2 className="text-[48px] font-bold leading-[110%] text-white whitespace-normal">
              Почему это важно?
            </h2>
            {/* Main/Lead/L: 22px, line-height: 120%, font-weight: 400 */}
            <p className="text-[22px] leading-[120%] font-normal text-white whitespace-normal">
              Как официальная сертификация помогает вашему бизнесу.
            </p>
          </div>

          {/* Двухколоночная структура: шестиугольники слева, тексты справа */}
          <div className="grid gap-[64px] md:grid-cols-2 items-center">
            {/* Левая колонка - шестиугольники с иконками */}
            <div className="relative flex flex-col items-center justify-center min-h-[400px]">
              <Image
                src="/certificates/icon-legal-security.png.png"
                alt="Почему это важно"
                width={400}
                height={400}
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Правая колонка - текстовые блоки */}
            <div className="flex flex-col gap-[32px]">
              {[
                {
                  title: "Юридическая безопасность",
                  text: "Защищает сайт от нелегальных требований регулирующих органов",
                },
                {
                  title: "Техническая совместимость",
                  text: "Гарантированная работа без конфликтов и ошибок интеграции",
                },
                {
                  title: "Импортозамещение",
                  text: "Полная независимость от зарубежных технологий и поставщиков",
                },
              ].map((item, idx) => (
                <div key={idx} className="why-important-item-hover space-y-[12px]">
                  {/* Main/H3/MD: 22px, line-height: 120%, font-weight: 700 */}
                  <h3 className="text-[22px] font-bold leading-[120%] text-white whitespace-normal">
                    {item.title}
                  </h3>
                  {/* Main/P/MD: 16px, line-height: 140%, font-weight: 400 */}
                  <p className="text-[16px] leading-[140%] font-normal text-white whitespace-normal">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Вторая секция Официальная сертификация - Base/Block-outer-spaces/vertical: 96px, Base/Paddings/2xl: 48px */}
        <section className="space-y-16 px-[48px] py-[96px]">
          <div className="space-y-8 text-center">
            {/* Main/H2/XL: 48px, line-height: 110%, font-weight: 700 */}
            <h2 className="text-[48px] font-bold leading-[110%] text-white whitespace-normal">
              Официальная сертификация
            </h2>
            {/* Main/Lead/L: 22px, line-height: 120%, font-weight: 400 */}
            <p className="text-[22px] leading-[120%] font-normal text-white whitespace-normal">
              Fastboard протестирован и сертифицирован для работы с ведущими
              российскими операционными системами.
            </p>
          </div>

          {/* Base/Paddings/md: 16px между карточками */}
          <div className="grid gap-[16px] md:grid-cols-3">
            {[
              {
                title: "Соответствие 152-ФЗ",
                text: "Более низкие требования к хранению данных и защите персональных данных",
                image: "/certificates/icon-152-fz.png.png",
              },
              {
                title: "Импортозамещение",
                text: "Легкое решение для перехода на отечественные BI-платформы",
                image: "/certificates/icon-import-substitution-card.png.png",
              },
              {
                title: "Госзакупки",
                text: "Включение в реестр Минпромторга для участия в госзакупках",
                image: "/certificates/icon-government-procurement.png.png",
              },
            ].map((item, idx) => (
              <article
                key={item.title}
                className="relative flex flex-col items-center gap-4 rounded-[20px] px-6 py-8 text-center overflow-visible"
                style={{
                  background: "rgba(21, 24, 30, 0.2)",
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Подсветка карточек - свечение снизу и вокруг */}
                <div className="pointer-events-none absolute -inset-[20px] rounded-[20px] bg-[radial-gradient(ellipse_at_bottom,#0060E5_0,transparent_70%)] opacity-40 blur-[60px]" />
                <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-[radial-gradient(circle_at_top,#0060E5_0,transparent_60%)] opacity-30 blur-[500px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-4 w-full">
                  {/* Sert/icon-card-size: 75px */}
                  <div className="flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={75}
                      height={75}
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  {/* Main/H3/SM: 20px, line-height: 120%, font-weight: 700 */}
                  <h3 className="text-[20px] font-bold leading-[120%] text-white whitespace-normal break-words">
                    {item.title}
                  </h3>
                  {/* Main/P/MD: 16px, line-height: 140%, font-weight: 400, Text/secondary для описания */}
                  <p className="text-[16px] leading-[140%] font-normal whitespace-normal break-words max-w-full" style={{ color: "rgba(255, 255, 255, 0.698)" }}>
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
