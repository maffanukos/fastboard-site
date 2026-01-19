import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale } from "../../../../lib/dictionaries";
import type { Article } from "../../../../types/blog";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locale || (locale !== "ru" && locale !== "en")) {
    notFound();
  }

  const categories = [
    "Все",
    "Экономика",
    "Энергетика",
    "Маркетинг",
    "Здравохранение",
    "Госсектор",
    "Финанасы",
    "Аналитика",
    "Частный бизнес",
  ];

  const featuredArticle = {
    id: 1,
    title: "Миграция в Fastboard: опыт «Ренессанс Страхование»",
    date: "21 сентября",
    description: "Отраслевые практики помогают компаниям адаптироваться и улучшать свои процессы. В этой статье мы расскажем о том, как компании используют Fastboard для оптимизации работы и повышения эффективности.",
    tag: "Маркетинг",
    image: "/blog/featured-article.jpg",
  };

  const articles: Article[] = [
    {
      id: 2,
      title: "Миграция в Fastboard: опыт «Ренессанс Страхование»",
      date: "21 сентября",
      description: "Отраслевые практики помогают компаниям адаптироваться и улучшать свои процессы.",
      tag: "Политика",
      image: "/blog/article-1.jpg",
    },
    {
      id: 3,
      title: "Миграция в Fastboard: опыт «Ренессанс Страхование»",
      date: "21 сентября",
      description: "Отраслевые практики помогают компаниям адаптироваться и улучшать свои процессы.",
      tag: "Маркетинг",
      image: "/blog/article-2.jpg",
    },
    {
      id: 4,
      title: "Миграция в Fastboard: опыт «Ренессанс Страхование»",
      date: "21 сентября",
      description: "Отраслевые практики помогают компаниям адаптироваться и улучшать свои процессы.",
      tag: "Маленький тэг",
      image: "/blog/article-3.jpg",
    },
    {
      id: 5,
      title: "Миграция в Fastboard: опыт «Ренессанс Страхование»",
      date: "21 сентября",
      description: "Отраслевые практики помогают компаниям адаптироваться и улучшать свои процессы.",
      tag: "Экономика",
      image: "/blog/article-4.jpg",
    },
    {
      id: 6,
      title: "Миграция в Fastboard: опыт «Ренессанс Страхование»",
      date: "21 сентября",
      description: "Отраслевые практики помогают компаниям адаптироваться и улучшать свои процессы.",
      tag: "Аналитика",
      image: "/blog/article-5.jpg",
    },
    {
      id: 7,
      title: "Миграция в Fastboard: опыт «Ренессанс Страхование»",
      date: "21 сентября",
      description: "Отраслевые практики помогают компаниям адаптироваться и улучшать свои процессы.",
      tag: "Маркетинг",
      image: "/blog/article-6.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#040D15]">
      {/* Верхний подсвеченный фон - используем переменные из Figma: Glows/Lighter #0060E5, highlights/blur-wide 500px - должен начинаться от самого верха страницы */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[614px] bg-[radial-gradient(circle_at_top,#0060E5_0,transparent_60%)] opacity-50 blur-[400px]" style={{ zIndex: 0 }} />
      
      <div className="relative mx-auto max-w-[1400px] px-[64px] py-[96px]">
        {/* Breadcrumbs */}
        <div className="text-center mb-6">
          <p className="text-[13px] leading-[120%] text-white/70">
            Продукт {'>'} Отраслевые практики {'>'}
          </p>
        </div>

        {/* Page Title */}
        <header className="relative text-center pb-8">
          {/* Highlight-wide слой из библиотеки компонентов - голубое свечение за текстом заголовка, размеры 1701x614, highlights/blur-wide: 500px, Glows/Lighter #0060E5 */}
          <div 
            className="absolute pointer-events-none"
            style={{
              top: '100%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '1701px',
              height: '614px',
              background: 'radial-gradient(ellipse, #023273 0%, transparent 70%)',
              opacity: 0.9,
              filter: 'blur(150px)',
              zIndex: 0,
            }}
          />
          <h1 className="relative z-10 text-[48px] font-bold leading-[110%] text-white whitespace-normal">
            Блог
          </h1>
        </header>

        {/* Search Bar */}
        <div className="max-w-[850px] mx-auto mb-8 relative">
          {/* Background Glow */}
          <div 
            className="absolute -inset-[20px] rounded-[16px] pointer-events-none -z-10"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at center, rgba(0, 191, 255, 0.3) 0%, rgba(0, 96, 229, 0.2) 25%, transparent 70%)',
              filter: 'blur(60px)',
              opacity: 0.6,
            }}
          />
          <div className="relative">
            <div className="absolute left-[12px] top-1/2 -translate-y-1/2 z-10">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                  stroke="rgba(255, 255, 255, 0.5)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 19L14.65 14.65"
                  stroke="rgba(255, 255, 255, 0.5)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Поиск"
              className="w-full h-[52px] pl-[44px] pr-[12px] rounded-[16px] bg-[#ffffff0d] text-white text-[17px] leading-[140%] placeholder:text-white/50 focus:outline-none transition-colors relative z-10"
              style={{ lineHeight: '52px' }}
            />
          </div>
        </div>

        {/* Sorting and Filters */}
        <div className="max-w-[1400px] mx-auto mb-12">
          {/* Sorting */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <span className="text-[17px] leading-[140%] text-white/70">Сортировка:</span>
              <div className="relative flex items-center">
                <select className="appearance-none bg-transparent text-[#00bfff] text-[17px] leading-[140%] pr-6 cursor-pointer focus:outline-none flex items-center">
                  <option>Сначала свежие</option>
                  <option>Сначала старые</option>
                  <option>По популярности</option>
                </select>
                <div className="absolute right-0 pointer-events-none flex items-center" style={{ height: '100%' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className={`px-8 py-3 rounded-[18px] text-[16px] leading-[100%] font-medium transition-colors ${
                  idx === 0
                    ? "bg-[#00bfff] text-white"
                    : "bg-[#ffffff0d] border border-[#00bfff] text-white hover:bg-[#ffffff1a]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Белая полоска-разделитель после фильтров */}
        <div className="w-full h-px bg-white/30 mb-16" />

        {/* Featured Article */}
        <div className="max-w-[1400px] mx-auto mb-16">
          <Link
            href={`/${locale}/company/blog/${featuredArticle.id}`}
            className="relative flex flex-col md:flex-row gap-6 transition-all group"
          >
            {/* Свечение для featured статьи */}
            <div className="pointer-events-none absolute -inset-[20px] rounded-[18px] bg-[radial-gradient(ellipse_at_bottom,#0060E5_0,transparent_70%)] opacity-40 blur-[60px] -z-10 group-hover:opacity-60 transition-opacity" />
            
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-[400px] md:h-auto rounded-[18px] overflow-hidden">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center relative z-10">
              <p className="text-[13px] leading-[120%] text-white/70 mb-4">
                {featuredArticle.date}
              </p>
              <h2 className="text-[36px] font-bold leading-[120%] text-white mb-4">
                {featuredArticle.title}
              </h2>
              <p className="text-[17px] leading-[140%] text-white/70 mb-6">
                {featuredArticle.description}
              </p>
              <div className="inline-flex">
                <span className="px-[13px] py-[8px] rounded-[18px] bg-[#ffffff0d] text-white text-[12px] leading-[100%] font-medium">
                  {featuredArticle.tag}
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Белая полоска-разделитель после featured статьи */}
        <div className="w-full h-px bg-white/20 mb-12" />

        {/* Articles Grid */}
        <div className="max-w-[1400px] mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/${locale}/company/blog/${article.id}`}
                className="relative flex flex-col transition-all group"
              >
                {/* Свечение для карточек статей */}
                <div className="pointer-events-none absolute -inset-[15px] rounded-[18px] bg-[radial-gradient(ellipse_at_bottom,#0060E5_0,transparent_70%)] opacity-0 group-hover:opacity-30 blur-[50px] -z-10 transition-opacity" />
                {/* Image */}
                <div className="relative w-full h-[200px] rounded-[18px] overflow-hidden mb-4">
                  <ImageWithBasePath
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col flex-1">
                  <p className="text-[13px] leading-[120%] text-white/70 mb-3">
                    {article.date}
                  </p>
                  <h3 className="text-[20px] font-bold leading-[120%] text-white mb-3 flex-1">
                    {article.title}
                  </h3>
                  <p className="text-[15px] leading-[140%] text-white/70 mb-4">
                    {article.description}
                  </p>
                  <div className="inline-flex">
                    <span className="px-[13px] py-[8px] rounded-[18px] bg-[#ffffff0d] text-white text-[12px] leading-[100%] font-medium">
                      {article.tag}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Белая полоска-разделитель после сетки статей */}
        <div className="w-full h-px bg-white/30 mb-12" />

        {/* Show More Button */}
        <div className="text-center">
          <button className="px-[36px] py-[16px] rounded-full bg-[#ffffff0d] border border-[#00bfff] text-white text-[18px] leading-[120%] font-medium hover:bg-[#ffffff1a] transition-colors">
            Показать еще
          </button>
        </div>
      </div>
    </div>
  );
}
