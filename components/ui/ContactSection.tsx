"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import GlowEffect from "./GlowEffect";

interface ContactSectionProps {
  locale: "ru" | "en";
}

declare global {
  interface Window {
    ymaps: any;
  }
}

export default function ContactSection({ locale }: ContactSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  // Загрузка Яндекс.Карт API
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.ymaps) {
      window.ymaps.ready(() => {
        setMapLoaded(true);
      });
      return;
    }

    const script = document.createElement("script");
    // Получаем API ключ из переменной окружения (NEXT_PUBLIC_ для доступа на клиенте)
    const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY || '';
    
    if (!apiKey) {
      console.warn(
        '⚠️ Yandex Maps API key is not set. Please add NEXT_PUBLIC_YANDEX_MAPS_API_KEY to your .env.local file.\n' +
        'Get your API key at: https://developer.tech.yandex.ru/services/'
      );
    }
    
    const apiUrl = apiKey 
      ? `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`
      : `https://api-maps.yandex.ru/2.1/?lang=ru_RU`;
    script.src = apiUrl;
    script.async = true;
    script.onload = () => {
      if (window.ymaps) {
        window.ymaps.ready(() => {
          setMapLoaded(true);
        });
      }
    };
    script.onerror = () => {
      console.error("Failed to load Yandex Maps API");
    };
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Инициализация карты
  useEffect(() => {
    if (!mapLoaded || !mapRef.current || mapInstanceRef.current) return;

    window.ymaps.ready(() => {
      if (!mapRef.current) return;
      
      try {
        // Точные координаты офиса Winsolution: ул. Северная, 450, Краснодар
        // В Яндекс.Картах формат: [широта, долгота] (latitude, longitude)
        const coords = [45.037553, 38.991422]; // [широта, долгота]
        const addressText = locale === "ru" 
          ? "ул. Северная, 450, офис 201, 2 этаж, Краснодар, 350002"
          : "Severnaya st., 450, office 201, 2nd floor, Krasnodar, 350002";
        
        // Инициализируем карту напрямую с известными координатами и адресом
        initializeMap(coords, addressText);
        
        function initializeMap(coords: number[], addressText: string) {
          if (!mapRef.current) return;
          
          // Инициализация карты согласно документации Яндекс.Карт
          // Формат координат: [широта, долгота]
          const map = new window.ymaps.Map(mapRef.current, {
            center: coords, // [широта, долгота]
            zoom: 17,
            controls: [],
            type: 'yandex#map', // явно указываем тип карты
          });

          // Функция для применения grayscale фильтра
          const applyGrayscaleFilter = () => {
            const canvas = mapRef.current?.querySelector('canvas');
            if (canvas) {
              canvas.style.filter = "grayscale(100%)";
            }
          };

          // Ждем полной загрузки карты перед применением фильтра
          map.events.add('tilesloaded', () => {
            // Применяем grayscale фильтр после загрузки тайлов
            setTimeout(applyGrayscaleFilter, 200);
          });

          // Также применяем фильтр с задержкой на случай, если событие уже произошло
          setTimeout(applyGrayscaleFilter, 1500);

          // Принудительно обновляем карту после небольшой задержки
          setTimeout(() => {
            if (map && mapRef.current) {
              map.container.fitToViewport();
            }
          }, 500);

          // Скрываем цветные элементы управления карты
          const hideMapControls = () => {
            if (!mapContainerRef.current) return;
            
            // Скрываем кнопки управления внизу слева
            const controls = mapContainerRef.current.querySelectorAll('.ymaps-2-1-79-controls__bottom, .ymaps-2-1-79-controls__left');
            controls.forEach((el: any) => {
              if (el) el.style.display = 'none';
            });
            
            // Скрываем логотип Яндекс.Карт внизу справа
            const copyright = mapContainerRef.current.querySelectorAll('.ymaps-2-1-79-copyright, .ymaps-2-1-79-copyright__wrap');
            copyright.forEach((el: any) => {
              if (el) el.style.display = 'none';
            });
            
            // Скрываем ссылки "Как добраться", "Доехать на такси", "Создать свою карту"
            const links = mapContainerRef.current.querySelectorAll('a[href*="yandex.ru/maps"], a[href*="yandex.ru/constructor"]');
            links.forEach((el: any) => {
              if (el) el.style.display = 'none';
            });
          };

          // Скрываем элементы управления после загрузки карты
          setTimeout(hideMapControls, 1000);
          map.events.add('tilesloaded', () => {
            setTimeout(hideMapControls, 500);
          });

          // Используем ваш SVG файл сердечка
          const heartSvg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1470.38 1644.65"><defs><style>.d{fill:#1692ef;}</style></defs><g id="a"/><g id="b"><g id="c"><path class="d" d="M1450.65,198.28c-11.9-32.69-30.09-62.91-52.59-87.39-16.12-17.53-33.97-31.76-53.32-42.59-13.44-15.67-28.69-29.28-45.2-40.18-30.42-20.1-63.62-29.74-96.01-27.9-61.47,3.51-110.65,45.89-146.63,82.43-25.32,25.7-49.22,53.17-71.53,82.07-55.21,54.51-100.89,124.26-133.49,205.24-35.94,89.27-61.57,172.84-78.3,256.15-40.05-83.91-88.83-164.15-145.74-239.56-25.41-33.67-52.26-66.13-80.44-97.29-20.33-27.29-61.21-77.97-115.38-124.02-28.48-24.21-56-43.15-82.38-56.76-.35-.26-.69-.53-1.04-.79-48.96-36.79-122.71-83.56-197.67-65.12-49.74,12.23-92.29,52.49-113.82,107.69-12.99,33.3-17.55,68.46-18.54,101.97-38.48,115.31-9.06,288.68,15.45,375.9,51.42,183.02,147.44,364.4,285.39,539.12,112.1,141.98,252.12,280.05,416.57,410.83-12.01,14.35-24.24,28.87-36.69,43.55-4.99,5.88-4.26,14.7,1.62,19.69,2.63,2.23,5.83,3.31,9.03,3.31,3.96,0,7.9-1.68,10.66-4.93,12.67-14.94,25.11-29.72,37.33-44.32,3.92,3.06,7.84,6.11,11.79,9.16,.12,.09,.25,.17,.37,.26,.2,.14,.4,.29,.6,.42,.2,.13,.41,.25,.62,.37,.18,.11,.37,.21,.56,.31,.24,.12,.48,.24,.73,.34,.17,.07,.33,.15,.5,.22,.27,.11,.53,.2,.8,.29,.16,.05,.32,.11,.48,.15,.28,.08,.56,.15,.83,.21,.17,.04,.33,.08,.5,.11,.27,.05,.55,.09,.83,.12,.18,.02,.36,.05,.54,.06,.27,.02,.53,.03,.8,.04,.13,0,.26,.02,.39,.02,.1,0,.2,0,.3,0,.08,0,.17,0,.25,0,.07,0,.14,0,.21,0,.13,0,.26-.03,.39-.04,.29-.02,.59-.05,.88-.1,.19-.03,.37-.06,.56-.1,.28-.05,.56-.11,.84-.18,.18-.05,.36-.1,.53-.15,.28-.08,.56-.18,.84-.28,.16-.06,.32-.12,.48-.18,.29-.12,.57-.25,.86-.39,.14-.07,.28-.14,.42-.21,.29-.15,.57-.32,.85-.5,.12-.08,.25-.15,.37-.23,.27-.18,.54-.38,.8-.59,.12-.09,.24-.18,.36-.28,.24-.2,.47-.42,.7-.64,.13-.12,.26-.23,.38-.36,.2-.2,.38-.42,.57-.64,.11-.13,.24-.25,.35-.39,102.83-129.07,206.52-281.18,300.85-440.51,7.54-11.05,14.99-22.07,22.33-33.07,129.46-193.85,227.41-377.52,299.47-561.48,17.64-45.04,42.32-112.92,52.92-182.13,10.74-70.09,6.12-131.18-14.11-186.75Zm-83.14,275.89c-20.12,110.71-93.91,291.75-202.46,496.72-31.26,59.03-64.28,117.86-98.52,175.74-86.48,126.74-186.37,257.89-309.19,405.86-142.74-144.77-301-312.67-429.71-499.79-81.95-119.13-147.14-240.19-193.74-359.82-51.7-132.72-80.89-264.83-86.76-392.64-.63-13.72-1.03-28.15-.73-42.88,1.07-3.12,2.17-6.11,3.31-8.94,19.76-49.11,49.88-87.45,87.1-110.86,29.89-18.8,63.96-28.25,101.67-28.25,11.98,0,24.33,.95,37.02,2.87,19.32,2.91,39.3,10,59.37,20.16,68.93,52.09,132.83,110.58,190.93,174.69,.18,.25,.37,.5,.55,.74,93.13,125.92,172.64,279.43,229.92,443.94,2.15,6.18,8.31,10.05,14.82,9.28,6.5-.76,11.6-5.94,12.27-12.46,.81-7.97,1.7-15.91,2.66-23.84,1.91,4.87,3.81,9.74,5.66,14.63,2.4,6.32,8.98,10.02,15.63,8.77,6.65-1.25,11.45-7.07,11.39-13.84-.89-114,22.08-231.64,66.41-340.2,30.66-75.09,71.83-146.5,121.12-210.63,35.11-34.42,74.18-62.28,116.23-82.4,86.89-41.56,150-31.05,179.88-21.08,8.35,2.79,16.5,6.29,24.4,10.46,6.35,7.76,12.2,16,17.38,24.6,28.3,47.02,42.56,103.18,43.57,171.67,.92,62.13-9.15,126.84-20.17,187.5ZM1205.12,28.11c22.59-1.3,45.91,4.48,68.1,16.73-50.13-6.49-106.59,4.07-162.84,30.97-4.32,2.07-8.6,4.23-12.85,6.45,29.55-26.79,65.99-51.78,107.59-54.15Zm-442.38,659.99c-16.55-43.18-34.6-85.46-53.99-126.56,20.51,36.73,39.25,74.28,56.16,112.57-.75,4.66-1.48,9.33-2.17,14ZM157.6,69.7c7.97-1.96,17.36-3.53,28.56-3.53,17.24,0,38.76,3.75,65.92,15.56-48.37-2.56-92.05,8.22-130.15,32.19-24.24,15.25-45.74,35.88-63.82,61.02,1.5-4.89,3.16-9.73,5.02-14.51,17.96-46.04,54.16-80.8,94.47-90.72Zm183.74,1080.26C205.69,978.15,111.34,800.04,60.92,620.59c-22.36-79.57-31.83-154.94-32.55-218.84,13.46,99.12,40.06,200.06,79.49,301.27,47.38,121.63,113.58,244.61,196.75,365.51,82.66,120.16,177.17,232.26,271.96,335.41-88.37-82.72-167.05-167.63-235.22-253.98Zm435.76,422.54l-.04-.04c.46-.56,.92-1.11,1.39-1.67-.45,.57-.9,1.15-1.34,1.72Zm608.73-1015.53c-19,48.51-39.85,97.02-62.61,145.71,36.43-88.8,61.21-165.42,71.77-223.52h0c11.27-62.06,21.57-128.38,20.62-192.91-.79-53.61-9.28-100.39-25.78-141.71,14.26,18.51,26.05,39.89,34.58,63.3,41.67,114.48,3.89,240.73-38.57,349.14Z"/></g></g></svg>`;
          
          // Конвертируем SVG в data URI
          const heartDataUri = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(heartSvg)));

          // Создаем кастомный маркер с SVG сердечком
          const placemark = new window.ymaps.Placemark(
            coords,
            {
              balloonContentHeader: locale === "ru" ? "Офис Winsolution" : "Winsolution Office",
              balloonContentBody: addressText,
              balloonContentFooter: locale === "ru" 
                ? "ул. Северная, 450, офис 201, 2 этаж, Краснодар, 350002"
                : "Severnaya st., 450, office 201, 2nd floor, Krasnodar, 350002",
              hintContent: locale === "ru" ? "Офис Winsolution" : "Winsolution Office",
            },
            {
              iconLayout: 'default#image',
              iconImageHref: heartDataUri,
              iconImageSize: [64, 64], // Увеличиваем размер для лучшей видимости
              iconImageOffset: [-32, -64], // Центрируем сердечко на точке
            }
          );

          map.geoObjects.add(placemark);
          markerRef.current = { element: placemark, map: map };
          
          mapInstanceRef.current = map;
        }
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    });
  }, [mapLoaded, locale]);

  

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
      className="flex flex-col items-center px-[120px] pt-[96px] pb-0 relative w-full overflow-visible bg-[#040d15]"
    >
      {/* Подсветка сзади блока */}
      <div className="absolute pointer-events-none" style={{ 
        zIndex: 0,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
        <GlowEffect
          variant="wide"
          color="lighter"
          blur="wide"
          position="center"
          opacity={1.5}
          style={{
            width: '1400px',
            height: '800px',
          }}
        />
      </div>
      
      <div className="flex flex-col gap-[64px] items-center max-w-[1400px] relative w-full overflow-visible" style={{ height: "800px", zIndex: 1 }}>
        {/* Заголовок и описание по центру */}
        <div className="flex flex-col gap-[24px] items-center">
          <h2 className="font-bold leading-[110%] text-white text-[48px] text-center">
            {locale === "ru" ? "Контакты" : "Contacts"}
          </h2>
          <p className="font-normal leading-[140%] text-white/80 text-[16px] max-w-[600px] text-center whitespace-pre-line">
            {locale === "ru"
              ? "У нас очень уютный офис, приходите к нам на кофе или чай.\nЕще у нас есть печеньки."
              : "We have a very cozy office, come to us for coffee or tea.\nWe also have cookies."}
          </p>
        </div>

        {/* Карта с контактной информацией */}
        <div ref={mapContainerRef} className="relative w-full aspect-[16/9] min-h-[500px] overflow-hidden rounded-lg [&_.ymaps-2-1-79-copyright]:hidden [&_.ymaps-2-1-79-controls__bottom]:hidden [&_.ymaps-2-1-79-controls__left]:hidden [&_.ymaps-2-1-79-controls__right]:hidden [&_.ymaps-2-1-79-controls__top]:hidden [&_a[href*='yandex.ru/maps']]:hidden [&_a[href*='yandex.ru/constructor']]:hidden">
          {/* Карта (реальная карта Яндекс.Карт в сером цвете, интерактивная) */}
          <div ref={mapRef} className="absolute inset-0 w-full h-full" />

          {/* Карточка с контактной информацией справа */}
          <div
            className={`absolute top-6 right-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-[400px] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <h3 className="font-bold text-white text-xl mb-4">
              {locale === "ru" ? "Офис в Краснодаре" : "Office in Krasnodar"}
            </h3>
            <p className="font-normal text-white/90 text-sm mb-6 leading-relaxed">
              {locale === "ru"
                ? "ул. Северная, 450, офис 201, 2 этаж, Краснодар, 350002"
                : "Severnaya st., 450, office 201, 2nd floor, Krasnodar, 350002"}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+77777777777"
                className="font-normal text-white/90 text-sm hover:text-white transition-colors"
              >
                Тел: +7 (777) 777-77-77
              </a>
              <p className="font-normal text-white/90 text-sm">
                E-mail: <a href="mailto:mail@mail.com" className="text-white/90 hover:text-white transition-colors">mail@mail.com</a>
              </p>
              <p className="font-normal text-white/90 text-sm">
                {locale === "ru" ? "Пресс-служба" : "Press service"}: <a href="mailto:mail@mail.com" className="text-white/90 hover:text-white transition-colors">mail@mail.com</a>
              </p>
              <p className="font-normal text-white/90 text-sm">
                {locale === "ru" ? "Отдел кадров" : "HR department"}: <a href="mailto:mail@mail.com" className="text-white/90 hover:text-white transition-colors">mail@mail.com</a>
              </p>
              <p className="font-normal text-white/90 text-sm">
                {locale === "ru" ? "Тех. поддержка" : "Tech. support"}: <a href="mailto:mail@mail.com" className="text-white/90 hover:text-white transition-colors">mail@mail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
