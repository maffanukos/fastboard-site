"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { useContactForm } from "../ContactFormProvider";

interface ValueSliderProps {
  locale: "ru" | "en";
}

interface Card {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  buttonAction?: "link" | "form";
}

const getCards = (locale: "ru" | "en"): Card[] => [
  {
    title: "Полный цикл BI услуг",
    description: "От подготовки вашей инфраструктуры до поиска инсайтов для вашего бизнеса",
    buttonText: "Обсудить ваш проект",
    buttonAction: "form",
  },
  {
    title: "Признание BRICS",
    description: "От подготовки вашей инфраструктуры до поиска инсайтов для вашего бизнеса",
    buttonText: "Наши награды",
    buttonHref: `/${locale}/company/blog/2`,
    buttonAction: "link",
  },
  {
    title: "Возможности для бизнеса",
    description: "Каждую функцию Fastboard мы скрупулезно соотносим к реалиям Российского бизнеса. И делаем так, чтобы вы получали удовольствия от владения продуктом.",
    buttonText: "Начать бесплатно",
    buttonHref: `/${locale}/product/features`,
    buttonAction: "link",
  },
  {
    title: "Партнёрство и доверие",
    description: "Мы тщательно подходим к процессу создания партнерских отношений. Мы выбираем не деньги, а честность, скиллы и опыт.",
    buttonText: "Стать партнером",
    buttonHref: `/${locale}/partners`,
    buttonAction: "link",
  },
  {
    title: "Техническая поддержка",
    description: "Наша команда экспертов всегда готова помочь вам с любыми вопросами по использованию платформы и оптимизации ваших процессов.",
    buttonText: "Связаться с нами",
    buttonAction: "form",
  },
  {
    title: "Обучение и сертификация",
    description: "Предоставляем комплексные программы обучения для вашей команды, чтобы максимально эффективно использовать возможности Fastboard.",
    buttonText: "Узнать больше",
    buttonHref: `/${locale}/product/training`,
    buttonAction: "link",
  },
];

export default function ValueSlider({ locale }: ValueSliderProps) {
  const { openForm } = useContactForm();
  const cards = getCards(locale);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3.5;
  const gap = 24; // gap между карточками в px
  const maxIndex = Math.max(0, Math.ceil(cards.length - cardsPerView));
  const [glowAngles, setGlowAngles] = useState<number[]>(cards.map(() => 0));

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Вычисляем угол от центра карточки до курсора
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
    
    // Обновляем угол для этой карточки
    setGlowAngles((prev) => {
      const newAngles = [...prev];
      newAngles[index] = angle;
      return newAngles;
    });
  };

  const handleMouseLeave = (index: number) => {
    setGlowAngles((prev) => {
      const newAngles = [...prev];
      newAngles[index] = 0;
      return newAngles;
    });
  };

  // Ширина одной карточки для 3.5 карточек
  // Учитываем gap между карточками (3 gap'а для 4 карточек, но показываем 3.5)
  const gapsCount = Math.ceil(cardsPerView) - 1; // 3 gap'а
  const cardWidth = `calc((100% - ${gapsCount * gap}px) / ${cardsPerView})`;

  return (
    <div className="w-full">
      {/* Навигация */}
      <div className="flex justify-end mb-6 gap-2">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className={`
            flex items-center justify-center w-10 h-10 rounded-lg border transition-all
            ${currentIndex === 0
              ? 'border-white/10 bg-white/5 opacity-50 cursor-not-allowed'
              : 'border-white/20 bg-white/5 hover:border-white/30 hover:bg-white/10 cursor-pointer'
            }
          `}
          aria-label="Previous"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          disabled={currentIndex >= maxIndex}
          className={`
            flex items-center justify-center w-10 h-10 rounded-lg border transition-all
            ${currentIndex >= maxIndex
              ? 'border-white/10 bg-white/5 opacity-50 cursor-not-allowed'
              : 'border-white/20 bg-white/5 hover:border-white/30 hover:bg-white/10 cursor-pointer'
            }
          `}
          aria-label="Next"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Слайдер с карточками */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentIndex} * (${cardWidth} + ${gap}px)))`,
          }}
        >
          {cards.map((card, index) => {
            // Определяем, является ли карточка последней частично видимой (3.5 карточки)
            const lastFullyVisibleIndex = currentIndex + Math.floor(cardsPerView);
            const isPartiallyVisible = index === lastFullyVisibleIndex;
            
            return (
              <div
                key={index}
                className="flex-shrink-0 relative"
                style={{ width: cardWidth }}
              >
                <div
                  className="service-card-border group flex flex-col gap-[24px] h-full items-center min-h-[375px] px-[24px] py-[32px] relative overflow-visible"
                  onMouseMove={(e) => handleMouseMove(index, e)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {/* Highlight внутри карточки - Glow/lighter с анимацией по углу мыши */}
                  <div className="absolute pointer-events-none inset-0 overflow-hidden rounded-[20px]" style={{ 
                    zIndex: 0,
                  }}>
                    <div
                      className="card-glow absolute transition-transform duration-300 ease-out"
                      style={{
                        left: '0',
                        top: '0',
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(ellipse, #0060E5 0%, rgba(0, 96, 229, 0.6) 25%, rgba(0, 96, 229, 0.3) 50%, transparent 75%)',
                        filter: 'blur(50px)',
                        opacity: 0.7,
                        transform: `translate(-25%, -25%) rotate(${glowAngles[index]}deg)`,
                        transformOrigin: 'center center',
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-[24px] items-center px-0 pt-[24px] pb-0 relative w-full z-10 h-full" style={{ height: '314px' }}>
                    <div className="flex flex-col gap-[16px] items-start relative text-white text-left w-full flex-1">
                      {/* Заголовок */}
                      <div className="flex flex-col font-bold justify-center leading-[120%] relative text-[20px] w-full">
                        <h3 className="leading-[120%] text-center">{card.title}</h3>
                      </div>

                      {/* Описание */}
                      <p className="font-normal leading-[140%] not-italic relative text-[16px] w-full text-left" style={{ color: "rgba(255, 255, 255, 0.698)" }}>
                        {card.description}
                      </p>
                    </div>

                    {/* Кнопка внизу */}
                    <div className="w-full mt-auto">
                      {card.buttonAction === "form" ? (
                        <Button 
                          variant="secondary" 
                          size="small" 
                          className="w-full"
                          onClick={(e) => {
                            e.preventDefault();
                            openForm();
                          }}
                        >
                          {card.buttonText}
                        </Button>
                      ) : (
                        <Link href={card.buttonHref || "#"} className="block w-full">
                          <Button variant="secondary" size="small" className="w-full">
                            {card.buttonText}
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Градиент для последней частично видимой карточки */}
                {isPartiallyVisible && (
                  <div
                    className="absolute top-0 bottom-0 right-0 pointer-events-none z-20"
                    style={{
                      width: '500px',
                      background: 'linear-gradient(to left, #040d15 0%, rgba(4, 13, 21, 0.98) 10%, rgba(4, 13, 21, 0.9) 25%, rgba(4, 13, 21, 0.7) 45%, rgba(4, 13, 21, 0.5) 65%, rgba(4, 13, 21, 0.25) 80%, rgba(4, 13, 21, 0.1) 90%, transparent 100%)',
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
