import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale } from "../../../../../lib/dictionaries";
import type { Webinar } from "../../../../../types/events";
import Button from "../../../../../components/ui/Button";
import Breadcrumbs from "../../../../../components/ui/Breadcrumbs";

// Генерируем статические параметры для всех возможных ID вебинаров
export function generateStaticParams() {
  // Возвращаем список всех возможных ID вебинаров из списка вебинаров
  // В реальном приложении это может быть запрос к API или базе данных
  const webinarIds = ['1', '2', '3', '4', '5', '6', '7'];
  const locales: Locale[] = ['ru', 'en'];
  
  return locales.flatMap(locale => 
    webinarIds.map(id => ({ locale, id }))
  );
}

export default async function WebinarPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;

  if (!locale || !id || (locale !== "ru" && locale !== "en")) {
    notFound();
  }

  // Моковые данные вебинара - в реальном приложении здесь будет запрос к API
  const webinar: Webinar = {
    id: id,
    title: "Excel жил. Excel жив. Excel будет жить.",
    description: "Буквально пару предложений для интриги. Короткие тезисы которые не оставят равнодушным и заставят посмотреть подробнее. Подробное описание вебинара о том, как Excel продолжает оставаться важным инструментом в современном бизнесе, несмотря на появление новых технологий.",
    // Для embed нужен специальный ID, который можно получить из кнопки "Поделиться" -> "Встроить" на странице видео
    // В примере использован ID "vlIEIKDOnzbY", но для вашего видео нужен правильный embed ID
    videoEmbedId: "vlIEIKDOnzbY", // Замените на правильный embed ID из вашего видео
    videoThumbnail: "/webinars/video-thumbnail.jpg",
    type: "Открытый вебинар",
    speakers: [
      { name: "Имяспикера Фамилия", role: "Кем работает пользователь", avatar: "/webinars/speakers/speaker-1.png" },
      { name: "Имяспикера Фамилия", role: "Кем работает пользователь", avatar: "/webinars/speakers/speaker-2.png" },
      { name: "Имяспикера Фамилия", role: "Кем работает пользователь", avatar: "/webinars/speakers/speaker-3.png" },
    ],
    learnPoints: [
      "Почему оффлайн не учитывает трудоемкость и как найти идеальное число правди...",
      "Как выйти из режима нажимать на кнопки и перестать быть рабом таблиц;",
      "Какие инструменты помогут автоматизировать рутинные задачи;",
      "Как построить эффективную систему аналитики без Excel.",
    ],
    program: [
      "Роль Excel в современном бизнесе (где он незаменим, а где тормозит рост)",
      "«Изнанка/изнаночка по почте» vs. «единый/общий подход» или новости/порядок в данных",
      "Автоматизация процессов: от простых формул до сложных макросов",
      "Интеграция Excel с современными BI-системами",
      "Практические кейсы и примеры использования",
    ],
    targetAudience: [
      "Специалистам по данным и аналитикам, уставшим от бесконечных сводных таблиц",
      "Финансистам и маркетологам, которым трудно читать отчеты В2С/В2В",
      "Руководителям, которые хотят оптимизировать процессы в компании",
    ],
    materialsUrl: "#",
    relatedWebinars: {
      upcoming: [
        {
          id: 1,
          title: "Вебинар \"Принципы OBEYA дашбордов\"",
          date: "Завтра",
          image: "/webinars/0b789856bf3bbd3da7f3022f4d34662568faeac6.png",
          speakers: [{ name: "Мария Гирда", role: "UX/UI-дизайнер" }],
        },
        {
          id: 2,
          title: "Вебинар \"Принципы OBEYA дашбордов\"",
          date: "5 октября",
          image: "/webinars/1523f902be23f67d5b3f34bd4a2c7b0d715d63c0.png",
          speakers: [{ name: "Станислав Колмаков", role: "UX/UI-дизайнер" }],
        },
      ],
      past: [
        {
          id: 5,
          title: "Вебинар \"Принципы OBEYA дашбордов\"",
          date: "1 день назад",
          image: "/webinars/3b74831bdf68910e93f3aba74448d33d5a9e264b.png",
        },
        {
          id: 6,
          title: "Вебинар \"Принципы OBEYA дашбордов\"",
          date: "Неделю назад",
          image: "/webinars/496c53a2a08342071ef1e8231615deab25643566.png",
        },
        {
          id: 7,
          title: "Вебинар \"Принципы OBEYA дашбордов\"",
          date: "2 недели назад",
          image: "/webinars/72064f27b0917d82ba2a1394f033f6a70936a6db.png",
        },
      ],
    },
  };

  return (
    <div className="relative min-h-screen bg-[#040d15] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Синее свечение на заднем фоне */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[614px] bg-[radial-gradient(circle_at_top,#0060E5_0,transparent_60%)] opacity-50 blur-[500px]" />
      <div 
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-[500px]"
        style={{
          background: 'radial-gradient(ellipse, #0060E5 0%, transparent 70%)',
          opacity: 0.3,
          filter: 'blur(500px)',
        }}
      />
      <div 
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-[500px]"
        style={{
          background: 'radial-gradient(ellipse, #0060E5 0%, transparent 70%)',
          opacity: 0.3,
          filter: 'blur(500px)',
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-[64px] pb-0 pt-0">
        {/* Хлебные крошки */}
        <div className="flex items-center justify-center py-8">
          <Breadcrumbs
            items={[
              { label: "Главная", href: `/${locale}/company/events` },
              { label: "Вебинары", href: `/${locale}/company/events` },
              { label: webinar.title },
            ]}
          />
        </div>

        {/* Табы */}
        <div className="flex items-center justify-center gap-8 pb-8">
          <button className="text-[17px] leading-[140%] text-white border-b-2 border-white pb-2">
            Открытый вебинар
          </button>
          <button className="text-[17px] leading-[140%] text-white opacity-50 hover:opacity-100 transition-opacity pb-2">
            Записанные мероприятия
          </button>
        </div>

        {/* Заголовок и описание */}
        <header className="text-center py-[64px]">
          <h1 className="text-[48px] font-bold leading-[110%] text-white mb-6">
            {webinar.title}
          </h1>
          <p className="max-w-[850px] mx-auto text-[17px] leading-[140%] text-white opacity-80">
            {webinar.description}
          </p>
        </header>

        {/* Видео плеер с эффектом embilight */}
        <div className="relative w-full max-w-[1200px] mx-auto mb-[96px]">
          {/* Эффект подсветки (embilight) вокруг видео - несколько слоев для реалистичного эффекта */}
          <div 
            className="absolute -inset-[40px] rounded-[18px] pointer-events-none -z-10"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at center, rgba(0, 191, 255, 0.5) 0%, rgba(0, 96, 229, 0.4) 25%, rgba(0, 134, 229, 0.2) 50%, transparent 75%)',
              filter: 'blur(80px)',
              opacity: 0.9,
            }}
          />
          <div 
            className="absolute -inset-[30px] rounded-[18px] pointer-events-none -z-10"
            style={{
              background: 'radial-gradient(ellipse 70% 50% at center, rgba(0, 191, 255, 0.4) 0%, rgba(0, 96, 229, 0.3) 30%, transparent 70%)',
              filter: 'blur(60px)',
              opacity: 0.7,
            }}
          />
          <div 
            className="absolute -inset-[20px] rounded-[18px] pointer-events-none -z-10"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at center, rgba(0, 134, 229, 0.3) 0%, transparent 60%)',
              filter: 'blur(40px)',
              opacity: 0.5,
            }}
          />
          
          <div className="relative aspect-video rounded-[18px] overflow-hidden bg-[#000000b2] shadow-[0_0_100px_rgba(0,191,255,0.4),0_0_200px_rgba(0,96,229,0.2)]">
            <iframe
              width="100%"
              height="100%"
              src={`https://dzen.ru/embed/${webinar.videoEmbedId}?from_block=partner&from=zen&mute=0&autoplay=0&tv=0`}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture; encrypted-media"
              data-testid="embed-iframe"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
            />
          </div>
        </div>

        {/* Спикеры */}
        <section className="text-center mb-[96px]">
          <h2 className="text-[28px] font-bold leading-[120%] text-white mb-12">
            Спикеры
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {webinar.speakers.map((speaker, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center rounded-[18px] bg-[#ffffff0d] border border-[#ffffff1a] backdrop-filter backdrop-blur-[10px]"
                style={{ 
                  padding: '50px 24px',
                  width: '280px',
                  height: '320px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex-shrink-0 mb-6" style={{ backgroundColor: '#1C253A' }}>
                  {speaker.avatar ? (
                    <Image
                      src={speaker.avatar}
                      alt={speaker.name}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0060E5] to-[#0086E5] flex items-center justify-center text-white text-2xl font-bold">
                      {speaker.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <p className="text-[17px] leading-[140%] text-white font-medium mb-2">{speaker.name}</p>
                  <p className="text-[14px] leading-[140%]" style={{ color: "rgba(255, 255, 255, 0.698)" }}>
                    {speaker.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* За 60 минут вы узнаете */}
        <section className="max-w-[850px] mx-auto mb-[96px]">
          <h2 className="text-[28px] font-bold leading-[120%] text-white mb-8">
            За 60 минут вы узнаете:
          </h2>
          <ul className="space-y-4">
            {webinar.learnPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#00bfff] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                    <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[17px] leading-[140%] text-white font-normal flex-1">{point}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Программа */}
        <section className="max-w-[850px] mx-auto mb-[96px]">
          <h2 className="text-[28px] font-bold leading-[120%] text-white mb-8">
            Программа
          </h2>
          <ol className="space-y-4">
            {webinar.program.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#00bfff] flex items-center justify-center flex-shrink-0 font-bold text-white text-[16px] mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-[17px] leading-[140%] text-white font-normal flex-1">{item}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Кому будет полезно */}
        <section className="max-w-[850px] mx-auto mb-[96px]">
          <h2 className="text-[28px] font-bold leading-[120%] text-white mb-8">
            Кому будет полезно
          </h2>
          <ul className="space-y-4">
            {webinar.targetAudience.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#00bfff] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                    <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[17px] leading-[140%] text-white font-normal flex-1">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Полезные ссылки */}
        <section className="mb-[96px]">
          <h2 className="text-[48px] font-bold leading-[110%] text-white text-center mb-12">
            Полезные ссылки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
            {/* Подписка на новости */}
            <div className="rounded-[18px] bg-[#ffffff0d] border border-[#ffffff1a] p-8 backdrop-filter backdrop-blur-[10px]">
              <div className="w-12 h-12 rounded-full bg-[#00bfff] flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" />
                  <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-[22px] font-bold leading-[120%] text-white mb-4">
                Подпишитесь на новости
              </h3>
              <p className="text-[16px] leading-[140%] text-white mb-6" style={{ color: "rgba(255, 255, 255, 0.698)" }}>
                Регулярно получайте свежие вебинары из дигитального принтера. Только лучшее.
              </p>
              <Button size="large">
                Подписаться
              </Button>
            </div>

            {/* Материалы вебинара */}
            <div className="rounded-[18px] bg-[#ffffff0d] border border-[#ffffff1a] p-8 backdrop-filter backdrop-blur-[10px]">
              <h3 className="text-[22px] font-bold leading-[120%] text-white mb-6">
                Материалы вебинара здесь
              </h3>
              <Link 
                href={webinar.materialsUrl}
                className="inline-flex items-center gap-2 text-[18px] leading-[140%] text-[#00bfff] hover:text-[#00d9ff] transition-colors"
              >
                Перейти к материалам
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M5 13L13 5M13 5H5M13 5V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Мы в социальных сетях */}
        <section className="mb-[96px]">
          <div className="rounded-[18px] bg-[#ffffff0d] border border-[#ffffff1a] p-8 backdrop-filter backdrop-blur-[10px] max-w-[1200px] mx-auto">
            <h2 className="text-[28px] font-bold leading-[120%] text-white mb-8 text-center">
              Мы в социальных сетях
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF0000] border border-[#ffffff1a] hover:opacity-90 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-[16px] leading-[140%] text-white font-medium">YouTube</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C253A] border border-[#ffffff1a] hover:opacity-90 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-[16px] leading-[140%] text-white font-medium">Дзен</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C253A] border border-[#ffffff1a] hover:opacity-90 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm5.894 7.737l-1.98 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.12l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
                <span className="text-[16px] leading-[140%] text-white font-medium">Вконтакте</span>
              </button>
            </div>
          </div>
        </section>

        {/* Другие вебинары */}
        <section className="mb-[96px]">
          <h2 className="text-[48px] font-bold leading-[110%] text-white text-center mb-12">
            Другие вебинары
          </h2>

          {/* Будущие вебинары */}
          <div className="mb-16">
            <h3 className="text-[28px] font-bold leading-[120%] text-white mb-8">
              Будущие
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webinar.relatedWebinars.upcoming.map((item) => (
                <Link
                  key={item.id}
                  href={`/${locale}/company/events/${item.id}`}
                  className="relative flex flex-col rounded-[18px] overflow-hidden bg-[#ffffff0d] border border-[#ffffff1a] backdrop-filter backdrop-blur-[10px] hover:border-[#00bfff] transition-all group"
                >
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0060E5] to-transparent opacity-30" />
                  </div>
                  <div className="relative z-20 -mt-[80px] p-[20px] space-y-3 bg-[#000000b2] backdrop-blur-[20px]" style={{ WebkitBackdropFilter: 'blur(20px)' }}>
                    <div className="inline-flex items-center h-[26px] px-[13px] rounded-full bg-white text-[12px] font-medium leading-[100%] text-[#040d15] w-fit">
                      {item.date}
                    </div>
                    <h4 className="text-[22px] font-bold leading-[120%] text-white line-clamp-2">
                      {item.title}
                    </h4>
                    {item.speakers && item.speakers.length > 0 && (
                      <p className="text-[14px] leading-[140%] text-white" style={{ color: "rgba(255, 255, 255, 0.698)" }}>
                        {item.speakers.map((s) => s.name).join(", ")}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Прошедшие вебинары */}
          <div>
            <h3 className="text-[28px] font-bold leading-[120%] text-white mb-8">
              Прошедшие
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {webinar.relatedWebinars.past.map((item) => (
                <Link
                  key={item.id}
                  href={`/${locale}/company/events/${item.id}`}
                  className="relative flex flex-col rounded-[18px] overflow-hidden bg-[#ffffff0d] border border-[#ffffff1a] backdrop-filter backdrop-blur-[10px] hover:border-[#00bfff] transition-all group"
                >
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0060E5] to-transparent opacity-30" />
                  </div>
                  <div className="relative z-20 -mt-[80px] p-[20px] space-y-3 bg-[#000000b2] backdrop-blur-[20px]" style={{ WebkitBackdropFilter: 'blur(20px)' }}>
                    <div className="inline-flex items-center h-[26px] px-[13px] rounded-full bg-white text-[12px] font-medium leading-[100%] text-[#040d15] w-fit">
                      {item.date}
                    </div>
                    <h4 className="text-[22px] font-bold leading-[120%] text-white line-clamp-2">
                      {item.title}
                    </h4>
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
