"use client";

import { useState, useEffect, useRef } from "react";

interface HistoryTimelineProps {
  locale: "ru" | "en";
}

interface TimelineItem {
  period: string;
  title: string;
  description: string;
}

const getTimelineItems = (locale: "ru" | "en"): TimelineItem[] => [
  {
    period: "// 2003-2003",
    title: locale === "ru" ? "СОЗДАЛИ ДЛЯ СЕБЯ" : "CREATED FOR OURSELVES",
    description: locale === "ru" 
      ? "Потому что клик был некрасив, в душа желала искусства в мире данных."
      : "Because the click was ugly, and the soul desired art in the world of data.",
  },
  {
    period: "// 2004-2025",
    title: locale === "ru" ? "ЧЕМ-ТО БЫЛИ ЗАНЯТЫ" : "WERE BUSY WITH SOMETHING",
    description: locale === "ru" 
      ? "Пилили таблицы."
      : "We were building tables.",
  },
  {
    period: "// 2025-2020",
    title: locale === "ru" ? "РАСШИРЕНИЕ ДОСТУПА" : "EXPANDING ACCESS",
    description: locale === "ru"
      ? "Помимо 12 релизов за год, мы предоставить доступ к нашей платформе более 1000 аналитикам. Бесплатно."
      : "In addition to 12 releases per year, we provided access to our platform to over 1000 analysts. For free.",
  },
  {
    period: "// 2028 - СЕГОДНЯ",
    title: locale === "ru" ? "200+ ИННОВАЦИЙ В ПРОДУКТЕ" : "200+ INNOVATIONS IN THE PRODUCT",
    description: locale === "ru"
      ? "Каждый наш релиз насыщен технологическим и функциональным улучшением продукта Fastboard. Чтобы ваша аналитика стала быстрой и мощной."
      : "Every one of our releases is packed with technological and functional improvements to the Fastboard product. So that your analytics become fast and powerful.",
  },
];

export default function HistoryTimeline({ locale }: HistoryTimelineProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineItems = getTimelineItems(locale);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseenter", handleMouseEnter);
      section.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseenter", handleMouseEnter);
        section.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full py-[96px] px-[120px]"
      style={{ cursor: isHovering ? "none" : "default" }}
    >
      {/* Кастомный курсор - стеклянная светящаяся лупа */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-[9999] transition-all duration-75 ease-out"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -50%)",
            willChange: "transform",
          }}
        >
          {/* Линза лупы */}
          <div
            className="relative"
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              border: "2.5px solid rgba(0, 212, 255, 0.9)",
              background: "radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.2) 0%, rgba(0, 212, 255, 0.1) 40%, rgba(0, 212, 255, 0.05) 70%, transparent 100%)",
              boxShadow: `
                0 0 25px rgba(0, 212, 255, 0.7),
                0 0 50px rgba(0, 212, 255, 0.4),
                inset 0 0 30px rgba(0, 212, 255, 0.15),
                inset 0 0 15px rgba(255, 255, 255, 0.1)
              `,
              backdropFilter: "blur(8px)",
            }}
          >
            {/* Внутреннее свечение */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 30%, transparent 60%)",
              }}
            />
            {/* Отражение света */}
            <div
              className="absolute top-3 left-3 w-4 h-4 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)",
              }}
            />
            {/* Внутренний круг для эффекта линзы */}
            <div
              className="absolute inset-[2px] rounded-full border"
              style={{
                borderColor: "rgba(0, 212, 255, 0.3)",
              }}
            />
          </div>
          {/* Ручка лупы */}
          <div
            className="absolute"
            style={{
              left: "52px",
              top: "52px",
              width: "5px",
              height: "32px",
              background: "linear-gradient(to bottom, rgba(0, 212, 255, 0.9) 0%, rgba(0, 212, 255, 0.6) 50%, rgba(0, 212, 255, 0.3) 100%)",
              borderRadius: "2px",
              transform: "rotate(-45deg)",
              transformOrigin: "top left",
              boxShadow: "0 0 15px rgba(0, 212, 255, 0.6), 0 0 8px rgba(0, 212, 255, 0.4)",
            }}
          />
        </div>
      )}

      <div className="flex flex-col items-center gap-[48px] max-w-[1400px] mx-auto">
        {/* Заголовок по центру */}
        <div className="flex flex-col items-center gap-[24px] w-full">
          <h2 className="font-bold leading-[110%] text-white text-[48px] text-center">
            {locale === "ru" ? "История" : "History"}
          </h2>
          <p className="font-normal leading-[140%] text-white/70 text-[16px] text-center max-w-[800px]">
            {locale === "ru"
              ? "Трогательные слова как мы пилили это для себя. А вышло так хорошо что мы решили показать наш продукт всему миру."
              : "Touching words about how we built this for ourselves. And it turned out so well that we decided to show our product to the whole world."}
          </p>
        </div>

        {/* Таймлайн */}
        <div className="relative w-full">
          {/* Горизонтальная линия таймлайна */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: "repeating-linear-gradient(to right, transparent, transparent 10px, rgba(255, 255, 255, 0.3) 10px, rgba(255, 255, 255, 0.3) 20px)",
            }}
          />

          {/* Элементы таймлайна - все под линией */}
          <div className="relative grid grid-cols-4 gap-8 pt-12">
            {timelineItems.map((item, index) => {
              const isHovered = hoveredIndex === index;
              const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
              
              return (
                <div key={index} className="relative">
                  {/* Вертикальная линия - выровнена по левой границе текста */}
                  <div
                    className="absolute top-0 pointer-events-auto"
                    style={{
                      left: "0",
                      transform: "translateY(-100%)",
                      width: "1px",
                      height: "40px",
                      background: "repeating-linear-gradient(to bottom, transparent, transparent 5px, rgba(255, 255, 255, 0.3) 5px, rgba(255, 255, 255, 0.3) 10px)",
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />
                  
                  {/* Невидимая область для hover вокруг линии (область таймлайна) */}
                  <div
                    className="absolute top-0 pointer-events-auto"
                    style={{
                      left: "-30px",
                      transform: "translateY(-100%)",
                      width: "60px",
                      height: "60px",
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />

                  {/* Текстовый блок - без pointer events */}
                  <div
                    className="flex flex-col gap-[16px] transition-all duration-300 ease-out pointer-events-none"
                    style={{
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                      opacity: isDimmed ? 0.3 : 1,
                    }}
                  >
                    <p 
                      className="font-normal leading-[140%] text-[#00bfff] transition-all duration-300"
                      style={{
                        fontSize: isHovered ? "16px" : "14px",
                      }}
                    >
                      {item.period}
                    </p>
                    <h3 
                      className="font-bold leading-[120%] text-white uppercase transition-all duration-300"
                      style={{
                        fontSize: isHovered ? "24px" : "20px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="font-normal leading-[140%] text-white/70 transition-all duration-300"
                      style={{
                        fontSize: isHovered ? "18px" : "16px",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
