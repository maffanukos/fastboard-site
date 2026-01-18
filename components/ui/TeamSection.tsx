"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "./Button";
import { useContactForm } from "../ContactFormProvider";

interface TeamSectionProps {
  locale: "ru" | "en";
}

// Речевые пузыри с позициями
const speechBubbles = [
  { text: "css", color: "bg-purple-300/90", left: "10%", top: "20%" },
  { text: "robots.txt", color: "bg-pink-300/90", left: "25%", top: "15%" },
  { text: "<div>", color: "bg-purple-300/90", left: "35%", top: "30%" },
  { text: "🐿️", color: "bg-green-300/90", left: "55%", top: "25%" },
  { text: "Doj", color: "bg-yellow-300/90", left: "70%", top: "20%" },
  { text: "</div>", color: "bg-purple-300/90", left: "40%", top: "60%" },
];

export default function TeamSection({ locale }: TeamSectionProps) {
  const { openForm } = useContactForm();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center px-[120px] py-[96px] relative w-full overflow-visible bg-[#040d15]"
    >
      <div className="flex flex-col gap-[64px] items-center max-w-[1400px] relative w-full overflow-visible">
        {/* Заголовок и описание по центру */}
        <div className="flex flex-col items-center gap-[24px] w-full">
          <h2 className="font-bold leading-[110%] text-white text-[48px] text-center">
            {locale === "ru" ? "Люди" : "People"}
          </h2>
          <p className="font-normal leading-[140%] text-white/80 text-[16px] text-center max-w-[800px]">
            {locale === "ru"
              ? "Мы коллектив Дата аналитиков, BI разработчиков, инноваторов - лучших в своем деле специалистов. И сегодня мы продолжаем делать Fastboard, вкладывая в него весь свой опыт и желания. И ваши желания тоже."
              : "We are a collective of Data analysts, BI developers, innovators - the best specialists in their field. And today we continue to make Fastboard, investing all our experience and desires into it. And your desires too."}
          </p>
        </div>

        {/* Изображение офиса с оверлеями */}
        <div className="relative w-full aspect-[16/9] max-h-[600px] overflow-hidden rounded-lg">
          {/* Основное изображение офиса (черно-белое) */}
          <div className="absolute inset-0">
            <Image
              src="/images/928b72848c647c854782e264c99eaf77ed5248c8.png"
              alt="Office"
              fill
              className="object-cover grayscale"
              unoptimized
              priority
            />
          </div>

          {/* Речевые пузыри */}
          {speechBubbles.map((bubble, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{
                left: bubble.left,
                top: bubble.top,
                transitionDelay: `${500 + index * 100}ms`,
              }}
            >
              {/* Пузырь */}
              <div className={`relative rounded-2xl px-3 py-2 text-sm font-medium text-gray-900 ${bubble.color} shadow-lg`}>
                {bubble.text}
                {/* Хвостик пузыря (SVG) */}
                <svg
                  className="absolute -bottom-2 left-4 w-4 h-3"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12L8 0L16 12H0Z"
                    className={bubble.color.replace('/90', '')}
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
                  />
                </svg>
              </div>
            </div>
          ))}

          {/* Кнопка "Присоединиться к команде" внизу справа */}
          <div
            className={`absolute bottom-6 right-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "1200ms" }}
          >
            <Button
              variant="primary"
              size="medium"
              onClick={openForm}
            >
              <span className="flex items-center gap-2">
                {locale === "ru" ? "Присоединиться к команде" : "Join the team"}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
