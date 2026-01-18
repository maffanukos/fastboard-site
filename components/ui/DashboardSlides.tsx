"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface DashboardSlideProps {
  locale: "ru" | "en";
}

export default function DashboardSlides({ locale }: DashboardSlideProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Три дашборда с позиционированием как в Figma
  // Используем изображения из макета, если они есть, иначе используем существующее
  const dashboards = [
    {
      id: 1,
      // Центральный дашборд (передний план) - самый крупный и четкий
      src: "/dashboards/dashboard_1.png", // Первый дашборд из макета
      fallbackSrc: "/dashboards/f5c8294ae51b66f97c287dbc485c071ba533518c.png",
      offsetX: 250, // Левее (положительное значение увеличивает right, сдвигая влево)
      offsetY: 70, // Ниже на 50px (было 20, стало 70)
      rotation: -8, // Поворот против часовой стрелки (примерно -7° до -10°)
      zIndex: 3, // Самый высокий z-index (передний план)
      width: 320, // Уменьшено на 20% (было 400)
      height: 400, // Уменьшено на 20% (было 500)
      opacity: 1,
      // Специальные стили для изображения
      imageStyle: {
        borderRadius: "10px",
      },
    },
    {
      id: 2,
      // Левый фоновый дашборд - меньше по размеру, значительно левее и выше центрального
      src: "/dashboards/dashboard_2.png", // Второй дашборд из макета
      fallbackSrc: "/dashboards/f5c8294ae51b66f97c287dbc485c071ba533518c.png",
      offsetX: 0, // Не используется, так как используется left
      offsetY: 80, // Выше центрального дашборда
      rotation: -20, // Повернут вправо на 30 градусов (было -50, стало -20)
      zIndex: 2, // Средний z-index
      width: 228,
      height: 102,
      opacity: 1,
      // Специальные стили для изображения
      imageStyle: {
        width: "246px",
        height: "140px",
        position: "absolute" as const,
        left: "-150px", // Значительно левее центрального
        top: "100px",
        opacity: 1,
        borderRadius: "10px",
      },
    },
    {
      id: 3,
      // Правый фоновый дашборд - правее и немного ниже центрального, полупрозрачный
      src: "/dashboards/dashboard_3.png", // Третий дашборд из макета
      fallbackSrc: "/dashboards/f5c8294ae51b66f97c287dbc485c071ba533518c.png",
      offsetX: -150, // Скорректировано для видимости (было -230)
      offsetY: 40, // Немного ниже центрального
      rotation: 7.5, // Поворот по часовой стрелке (примерно +5° до +10°)
      zIndex: 1, // Самый низкий z-index (задний план)
      width: 400,
      height: 500,
      opacity: 0.4, // Увеличено для лучшей видимости (было 0.2)
      // Специальные стили для изображения
      imageStyle: {
        borderRadius: "10px",
      },
    },
  ];

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
        threshold: 0.1, // Срабатывает когда видно 10% элемента
        rootMargin: "0px 0px -100px 0px", // Небольшая задержка перед запуском
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute right-[300px] top-[120px] pointer-events-none overflow-visible z-10"
    >
      <div className="relative w-[500px] h-[600px]">
        {dashboards.map((dashboard, index) => {
          const isHovered = hoveredId === dashboard.id;
          const baseTransform = `rotate(${dashboard.rotation}deg)`;
          const hoverTransform = `scale(1.1) rotate(${dashboard.rotation}deg)`;
          const initialTransform = `translateX(200%) rotate(${dashboard.rotation}deg)`;
          
          return (
          <div
            key={dashboard.id}
            className="absolute cursor-pointer pointer-events-auto"
            style={{
              left: dashboard.id === 2 ? "330px" : undefined, // Левее на 80px (было 410px)
              right: dashboard.id !== 2 ? `${dashboard.offsetX}px` : undefined,
              top: `${dashboard.offsetY}px`,
              width: `${dashboard.width}px`,
              height: `${dashboard.height}px`,
              transform: !isVisible 
                ? initialTransform
                : isHovered 
                  ? hoverTransform 
                  : baseTransform,
              transformOrigin: "center center",
              zIndex: dashboard.zIndex,
              opacity: isVisible ? dashboard.opacity : 0,
              borderColor: dashboard.id === 2 ? "rgba(0, 0, 0, 0)" : undefined,
              borderImage: dashboard.id === 2 ? "none" : undefined,
              borderStyle: dashboard.id === 2 ? "none" : undefined,
              color: dashboard.id === 2 ? "var(--color-sky-500)" : undefined,
              borderRadius: "10px",
              overflow: "hidden",
              transition: isHovered 
                ? "transform 300ms ease-out, opacity 1000ms ease-out" 
                : "transform 1000ms ease-out, opacity 1000ms ease-out",
              transitionDelay: !isVisible ? `${index * 150}ms` : undefined,
            }}
            onMouseEnter={() => {
              if (isVisible) {
                setHoveredId(dashboard.id);
              }
            }}
            onMouseLeave={() => {
              setHoveredId(null);
            }}
          >
            <Image
              src={dashboard.src}
              alt={`Dashboard ${dashboard.id}`}
              width={dashboard.width}
              height={dashboard.height}
              className="w-full h-full object-contain transition-transform duration-300"
              style={{
                opacity: dashboard.opacity,
                ...(dashboard.imageStyle || {}),
              }}
              onError={(e) => {
                // Если изображение не найдено, используем fallback
                const target = e.target as HTMLImageElement;
                if (target.src !== new URL(dashboard.fallbackSrc, window.location.origin).href) {
                  target.src = dashboard.fallbackSrc;
                }
              }}
              unoptimized
              priority={dashboard.id === 1}
            />
          </div>
          );
        })}
      </div>
    </div>
  );
}
