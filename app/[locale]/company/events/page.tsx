import Image from "next/image";
import Link from "next/link";
import { type Locale } from "../../../../lib/dictionaries";
import Button from "../../../../components/ui/Button";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const upcomingWebinars = [
    {
      id: 1,
      title: "Вебинар \"Принципы OBEYA дашбордов\"",
      date: "21 сентября",
      time: "20:00 МСК",
      description: "Буквально пару предложений для интриги. Короткие тезисы которые не оставят равнодушным и заставят посмотреть подробнее.",
      speakers: [
        { name: "Мария Гирда", role: "UX/UI-тельный дизайнер", avatar: "/webinars/speaker-1.jpg" },
        { name: "Станислав Колмаков", role: "UX/UI-тельный дизайнер", avatar: "/webinars/speaker-2.jpg" },
      ],
      additionalSpeakers: 2,
      image: "/webinars/0b789856bf3bbd3da7f3022f4d34662568faeac6.png",
      featured: true,
    },
    {
      id: 2,
      title: "Вебинар \"Принципы OBEYA дашбордов\"",
      date: "5 октября",
      time: "20:00 МСК",
      description: "Буквально пару предложений для интриги. Короткие тезисы которые не оставят равнодушным и заставят посмотреть подробнее.",
      speakers: [
        { name: "Мария Гирда", role: "UX/UI-тельный дизайнер", avatar: "/webinars/speaker-1.jpg" },
        { name: "Станислав Колмаков", role: "UX/UI-тельный дизайнер", avatar: "/webinars/speaker-2.jpg" },
      ],
      additionalSpeakers: 2,
      image: "/webinars/1523f902be23f67d5b3f34bd4a2c7b0d715d63c0.png",
      featured: false,
      size: "medium",
    },
    {
      id: 3,
      title: "Вебинар \"Принципы OBEYA дашбордов\"",
      date: "5 октября",
      type: "Открытый вебинар",
      speakers: [
        { name: "Мария Гирда", avatar: "/webinars/speaker-1.jpg" },
        { name: "Платон Котов", avatar: "/webinars/speaker-3.jpg" },
      ],
      additionalSpeakers: 4,
      image: "/webinars/2b0677b3bda8e1b8ab07083bcabc052a8ecd6cb9.png",
      featured: false,
      size: "small",
    },
    {
      id: 4,
      title: "Вебинар \"Принципы OBEYA дашбордов\"",
      date: "5 октября",
      type: "Открытый вебинар",
      speakers: [
        { name: "Мария Гирда", avatar: "/webinars/speaker-1.jpg" },
        { name: "Платон Котов", avatar: "/webinars/speaker-3.jpg" },
      ],
      additionalSpeakers: 4,
      image: "/webinars/385d0af2535eadfe64c7bd79790ac4d11e3b1363.png",
      featured: false,
      size: "small",
    },
  ];

  const pastWebinars = [
    {
      id: 5,
      title: "Вебинар \"Принципы OBEYA дашбордов\"",
      date: "5 дней назад",
      image: "/webinars/3b74831bdf68910e93f3aba74448d33d5a9e264b.png",
      speakers: [
        { name: "Мария Гирда", role: "UX/UI-дизайнер", avatar: "/webinars/speaker-1.jpg" },
        { name: "Станислав Колмаков", role: "UX/UI-дизайнер", avatar: "/webinars/speaker-2.jpg" },
      ],
    },
    {
      id: 6,
      title: "Вебинар \"Принципы OBEYA дашбордов\"",
      date: "Неделю назад",
      image: "/webinars/496c53a2a08342071ef1e8231615deab25643566.png",
      speakers: [
        { name: "Мария Гирда", role: "UX/UI-дизайнер", avatar: "/webinars/speaker-1.jpg" },
        { name: "Платон Котов", role: "Product Manager", avatar: "/webinars/speaker-3.jpg" },
      ],
    },
    {
      id: 7,
      title: "Вебинар \"Принципы OBEYA дашбордов\"",
      date: "2 месяца назад",
      image: "/webinars/72064f27b0917d82ba2a1394f033f6a70936a6db.png",
      speakers: [
        { name: "Мария Гирда", role: "UX/UI-дизайнер", avatar: "/webinars/speaker-1.jpg" },
        { name: "Станислав Колмаков", role: "UX/UI-дизайнер", avatar: "/webinars/speaker-2.jpg" },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#040d15] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Верхний подсвеченный фон - используем переменные из Figma: Glows/Lighter #0060E5, highlights/blur-wide 500px */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[614px] bg-[radial-gradient(circle_at_top,#0060E5_0,transparent_60%)] opacity-50 blur-[500px]" />

      <div className="relative mx-auto max-w-[1400px] px-[64px] pb-0 pt-0">
        {/* Хлебные крошки - Main/C/L: 13px, line-height: 120%, font-weight: 400, Text/secondary #ffffffb2 */}
        <div className="flex items-center justify-center py-8">
          <Breadcrumbs
            items={[
              { label: "Продукт", href: `/${locale}/product` },
              { label: "Вебинары" },
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
            Вебинары от команды Fastboard
          </h1>
        </header>

        {/* Поиск и фильтры */}
        <section className="relative space-y-8 pb-[64px]">
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
          
          <div className="relative z-10 space-y-8">
            {/* Поиск - Search/size: 52px, Search/radius: 16px, Search/text-size: 17px */}
            <div className="relative">
              <input
                type="text"
                placeholder="Q Поиск"
                className="w-full h-[52px] px-[12px] pl-[48px] rounded-[16px] bg-[#ffffff0d] border border-[#ffffff1a] text-[17px] leading-[140%] text-white placeholder:text-[#ffffff80] focus:outline-none focus:border-[#00bfff] transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="absolute left-[12px] top-1/2 transform -translate-y-1/2 pointer-events-none"
                style={{ color: "#ffffff80" }}
              >
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Фильтры - Дата и Тип - по центру */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {/* Фильтр по дате */}
              <div className="flex items-center gap-2">
                <span className="text-[13px] leading-[120%]" style={{ color: "rgba(255, 255, 255, 0.698)" }}>
                  Дата:
                </span>
                <button className="flex items-center gap-2 text-[13px] leading-[120%] text-[#00bfff] hover:text-[#00d9ff] transition-colors">
                  Сначала будущие
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Фильтр по типу */}
              <div className="flex items-center gap-2">
                <span className="text-[13px] leading-[120%]" style={{ color: "rgba(255, 255, 255, 0.698)" }}>
                  Тип:
                </span>
                <button className="flex items-center gap-2 text-[13px] leading-[120%] text-[#00bfff] hover:text-[#00d9ff] transition-colors">
                  Открытые
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Ближайшие вебинары */}
        <section className="space-y-6 pb-[64px]">
          {/* Главная карточка вебинара - большая горизонтальная */}
            {upcomingWebinars
              .filter((w) => w.featured)
              .map((webinar) => (
                <Link
                  key={webinar.id}
                  href={`/${locale}/company/events/${webinar.id}`}
                  className="relative rounded-[18px] overflow-hidden bg-[#ffffff0d] border border-[#ffffff1a] backdrop-filter backdrop-blur-[10px] hover:border-[#00bfff] transition-all group block"
                  style={{ minHeight: '400px' }}
                >
                  {/* Свечение для главной карточки */}
                  <div className="pointer-events-none absolute -inset-[20px] rounded-[18px] bg-[radial-gradient(ellipse_at_bottom,#0060E5_0,transparent_70%)] opacity-40 blur-[60px] -z-10 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Изображение - занимает всю карточку как фон */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={webinar.image}
                      alt={webinar.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0060E5] to-transparent opacity-30" />
                  </div>
                  
                  {/* Темный блок с размытием для контента слева - накладывается поверх изображения */}
                  <div className="absolute left-0 top-0 bottom-0 z-20 w-full md:w-1/2 p-[20px] flex flex-col justify-center space-y-6 bg-[#000000b2] backdrop-blur-[20px]" style={{ WebkitBackdropFilter: 'blur(20px)' }}>
                    {/* Когда */}
                    <div className="space-y-2">
                      <p className="text-[13px] leading-[120%] text-white" style={{ color: "rgba(255, 255, 255, 0.698)" }}>
                        Когда:
                      </p>
                      <div className="inline-flex items-center h-[26px] px-[13px] rounded-full bg-white text-[12px] font-medium leading-[100%] text-[#040d15] w-fit">
                        {webinar.date} {webinar.time}
                      </div>
                    </div>

                    {/* Спикеры */}
                    <div className="space-y-3">
                      <p className="text-[13px] leading-[120%] text-white" style={{ color: "rgba(255, 255, 255, 0.698)" }}>
                        Кто:
                      </p>
                      <div className="flex items-center gap-3 flex-wrap">
                        {webinar.speakers.map((speaker, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                              <div className="w-full h-full bg-gradient-to-br from-[#0060E5] to-[#0086E5] flex items-center justify-center text-white text-xs font-bold">
                                {speaker.name.charAt(0)}
                              </div>
                            </div>
                            <div>
                              <p className="text-[13px] leading-[120%] text-white font-medium">{speaker.name}</p>
                              {'role' in speaker && speaker.role && (
                                <p className="text-[10px] leading-[120%] text-white" style={{ color: "rgba(255, 255, 255, 0.698)" }}>
                                  {speaker.role}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                        {webinar.additionalSpeakers > 0 && (
                          <p className="text-[13px] leading-[120%] text-white" style={{ color: "rgba(255, 255, 255, 0.698)" }}>
                            И ещё {webinar.additionalSpeakers} {webinar.additionalSpeakers === 1 ? "двое" : "двое"}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Заголовок */}
                    <div className="space-y-2">
                      <p className="text-[13px] leading-[120%] text-white" style={{ color: "rgba(255, 255, 255, 0.698)" }}>
                        О чем:
                      </p>
                      <h2 className="text-[36px] font-bold leading-[120%] text-white">
                        {webinar.title}
                      </h2>
                    </div>

                    {/* Описание */}
                    <p className="text-[16px] leading-[140%] text-white" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                      {webinar.description}
                    </p>
                  </div>
                </Link>
              ))}

          {/* Средняя карточка */}
          {upcomingWebinars
              .filter((w) => w.size === "medium")
              .map((webinar) => (
                <Link
                  key={webinar.id}
                  href={`/${locale}/company/events/${webinar.id}`}
                  className="relative rounded-[18px] overflow-hidden bg-[#ffffff0d] border border-[#ffffff1a] backdrop-filter backdrop-blur-[10px] hover:border-[#00bfff] transition-all group block"
                  style={{ minHeight: '300px' }}
                >
                  {/* Свечение */}
                  <div className="pointer-events-none absolute -inset-[15px] rounded-[18px] bg-[radial-gradient(ellipse_at_bottom,#0060E5_0,transparent_70%)] opacity-0 group-hover:opacity-30 blur-[50px] -z-10 transition-opacity" />
                  
                  {/* Изображение - занимает всю карточку как фон */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={webinar.image}
                      alt={webinar.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0060E5] to-transparent opacity-30" />
                  </div>
                  
                  {/* Темный блок с размытием для контента слева - накладывается поверх изображения */}
                  <div className="absolute left-0 top-0 bottom-0 z-20 w-full md:w-2/3 p-[20px] flex flex-col justify-center space-y-4 bg-[#000000b2] backdrop-blur-[20px]" style={{ WebkitBackdropFilter: 'blur(20px)' }}>
                    <div className="space-y-2">
                      <p className="text-[13px] leading-[120%] text-white" style={{ color: "rgba(255, 255, 255, 0.698)" }}>
                        Когда:
                      </p>
                      <div className="inline-flex items-center h-[26px] px-[13px] rounded-full bg-white text-[12px] font-medium leading-[100%] text-[#040d15] w-fit">
                        {webinar.date} {webinar.time}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      {webinar.speakers.map((speaker, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                            <div className="w-full h-full bg-gradient-to-br from-[#0060E5] to-[#0086E5] flex items-center justify-center text-white text-xs font-bold">
                              {speaker.name.charAt(0)}
                            </div>
                          </div>
                          <div>
                            <p className="text-[13px] leading-[120%] text-white font-medium">{speaker.name}</p>
                            {'role' in speaker && speaker.role && (
                              <p className="text-[10px] leading-[120%] text-white" style={{ color: "rgba(255, 255, 255, 0.698)" }}>
                                {speaker.role}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                      {webinar.additionalSpeakers > 0 && (
                        <p className="text-[13px] leading-[120%] text-white" style={{ color: "rgba(255, 255, 255, 0.698)" }}>
                          И ещё {webinar.additionalSpeakers} {webinar.additionalSpeakers === 1 ? "двое" : "двое"}
                        </p>
                      )}
                    </div>
                    <h3 className="text-[22px] font-bold leading-[120%] text-white">
                      {webinar.title}
                    </h3>
                    <p className="text-[14px] leading-[140%] text-white" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                      {webinar.description}
                    </p>
                  </div>
                </Link>
              ))}

          {/* Две маленькие карточки в ряд */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingWebinars
                .filter((w) => w.size === "small")
                .map((webinar) => (
                  <Link
                    key={webinar.id}
                    href={`/${locale}/company/events/${webinar.id}`}
                    className="relative flex flex-col rounded-[18px] overflow-hidden bg-[#ffffff0d] border border-[#ffffff1a] backdrop-filter backdrop-blur-[10px] hover:border-[#00bfff] transition-all group block"
                    style={{ minHeight: '350px' }}
                  >
                    {/* Свечение */}
                    <div className="pointer-events-none absolute -inset-[10px] rounded-[18px] bg-[radial-gradient(ellipse_at_bottom,#0060E5_0,transparent_70%)] opacity-0 group-hover:opacity-25 blur-[40px] -z-10 transition-opacity" />
                    
                    {/* Изображение сверху - занимает всю карточку как фон */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={webinar.image}
                        alt={webinar.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0060E5] to-transparent opacity-30" />
                    </div>

                    {/* Темный блок с размытием для контента внизу - накладывается поверх изображения */}
                    <div className="relative z-20 mt-auto p-[20px] space-y-3 bg-[#000000b2] backdrop-blur-[20px]" style={{ WebkitBackdropFilter: 'blur(20px)' }}>
                      <div className="inline-flex items-center h-[26px] px-[13px] rounded-full bg-white text-[12px] font-medium leading-[100%] text-[#040d15] w-fit">
                        {webinar.date}
                      </div>
                      <p className="text-[13px] leading-[120%] text-white" style={{ color: "rgba(255, 255, 255, 0.698)" }}>
                        {webinar.type}
                      </p>
                      <h3 className="text-[22px] font-bold leading-[120%] text-white line-clamp-2">
                        {webinar.title}
                      </h3>
                      <p className="text-[14px] leading-[140%] text-white" style={{ color: "rgba(255, 255, 255, 0.698)" }}>
                        Спикеры: {webinar.speakers.map((s) => s.name).join(", ")} и еще {webinar.additionalSpeakers}
                      </p>
                    </div>
                  </Link>
                ))}
          </div>

          {/* Прошедшие вебинары */}
          <div className="space-y-6 pt-[64px]">
            <h2 className="text-[36px] font-bold leading-[120%] text-white">
              Прошедшие
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pastWebinars.map((webinar) => (
                <Link
                  key={webinar.id}
                  href={`/${locale}/company/events/${webinar.id}`}
                  className="relative flex flex-col rounded-[18px] overflow-hidden bg-[#ffffff0d] border border-[#ffffff1a] backdrop-filter backdrop-blur-[10px] hover:border-[#00bfff] transition-all group block"
                  style={{ minHeight: '300px' }}
                >
                  {/* Свечение */}
                  <div className="pointer-events-none absolute -inset-[10px] rounded-[18px] bg-[radial-gradient(ellipse_at_bottom,#0060E5_0,transparent_70%)] opacity-0 group-hover:opacity-25 blur-[40px] -z-10 transition-opacity" />
                  
                  {/* Изображение сверху - занимает всю карточку как фон */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={webinar.image}
                      alt={webinar.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0060E5] to-transparent opacity-30" />
                  </div>

                  {/* Темный блок с размытием для контента внизу - накладывается поверх изображения */}
                  <div className="relative z-20 mt-auto p-[20px] space-y-3 bg-[#000000b2] backdrop-blur-[20px]" style={{ WebkitBackdropFilter: 'blur(20px)' }}>
                    <div className="inline-flex items-center h-[26px] px-[13px] rounded-full bg-white text-[12px] font-medium leading-[100%] text-[#040d15] w-fit mb-2">
                      {webinar.date}
                    </div>
                    <h3 className="text-[22px] font-bold leading-[120%] text-white line-clamp-2 mb-3">
                      {webinar.title}
                    </h3>
                    {/* Спикеры */}
                    {webinar.speakers && webinar.speakers.length > 0 && (
                      <div className="flex items-center gap-2 flex-wrap">
                        {webinar.speakers.map((speaker, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                              {speaker.avatar ? (
                                <Image
                                  src={speaker.avatar}
                                  alt={speaker.name}
                                  width={32}
                                  height={32}
                                  className="object-cover"
                                  unoptimized
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-[#0060E5] to-[#0086E5] flex items-center justify-center text-white text-xs font-bold">
                                  {speaker.name.charAt(0)}
                                </div>
                              )}
                            </div>
                            <div>
                              <p className="text-[12px] leading-[120%] text-white font-medium">{speaker.name}</p>
                              {'role' in speaker && speaker.role && (
                                <p className="text-[10px] leading-[120%] text-white" style={{ color: "rgba(255, 255, 255, 0.698)" }}>
                                  {speaker.role}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
