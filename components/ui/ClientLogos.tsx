"use client";

import React, { useEffect, useState, useRef } from "react";
import Button from "./Button";
import { useContactForm } from "../ContactFormProvider";

interface ClientLogosProps {
  locale: "ru" | "en";
}

// Генерация рандомных SVG логотипов
const generateRandomLogo = (seed: number): React.ReactNode => {
  const types = ['circle', 'square', 'triangle', 'hexagon', 'star', 'diamond', 'wave', 'lines'];
  const type = types[seed % types.length];
  
  const size = 60;
  const center = size / 2;
  
  switch (type) {
    case 'circle':
      return <circle cx={center} cy={center} r={center * 0.7} fill="white" opacity="0.9" />;
    
    case 'square':
      const squareSize = size * 0.6;
      const squareOffset = (size - squareSize) / 2;
      return <rect x={squareOffset} y={squareOffset} width={squareSize} height={squareSize} fill="white" opacity="0.9" rx="4" />;
    
    case 'triangle':
      return <polygon points={`${center},${size * 0.15} ${size * 0.15},${size * 0.85} ${size * 0.85},${size * 0.85}`} fill="white" opacity="0.9" />;
    
    case 'hexagon':
      const hexRadius = center * 0.7;
      const hexPoints = Array.from({ length: 6 }, (_, i) => {
        const angle = (Math.PI / 3) * i;
        const x = center + hexRadius * Math.cos(angle);
        const y = center + hexRadius * Math.sin(angle);
        return `${x},${y}`;
      }).join(' ');
      return <polygon points={hexPoints} fill="white" opacity="0.9" />;
    
    case 'star':
      const starPoints = Array.from({ length: 10 }, (_, i) => {
        const angle = (Math.PI / 5) * i - Math.PI / 2;
        const radius = i % 2 === 0 ? center * 0.7 : center * 0.35;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        return `${x},${y}`;
      }).join(' ');
      return <polygon points={starPoints} fill="white" opacity="0.9" />;
    
    case 'diamond':
      return <polygon points={`${center},${size * 0.2} ${size * 0.2},${center} ${center},${size * 0.8} ${size * 0.8},${center}`} fill="white" opacity="0.9" />;
    
    case 'wave':
      return <path d={`M ${size * 0.1} ${center} Q ${size * 0.3} ${size * 0.3}, ${center} ${center} T ${size * 0.9} ${center}`} stroke="white" strokeWidth="3" fill="none" opacity="0.9" />;
    
    case 'lines':
      return (
        <>
          <line x1={size * 0.2} y1={size * 0.2} x2={size * 0.8} y2={size * 0.8} stroke="white" strokeWidth="2" opacity="0.9" />
          <line x1={size * 0.8} y1={size * 0.2} x2={size * 0.2} y2={size * 0.8} stroke="white" strokeWidth="2" opacity="0.9" />
        </>
      );
    
    default:
      return <circle cx={center} cy={center} r={center * 0.7} fill="white" opacity="0.9" />;
  }
};

const ROWS = 3;
const COLS = 6;
const TOTAL_CELLS = ROWS * COLS;

// Определяем, какие ячейки будут заполнены (примерно 60% ячеек, но минимум 1 в каждой строке)
const getFilledCells = (): number[] => {
  const filled: number[] = [];
  
  // Гарантируем минимум один логотип в каждой строке
  for (let row = 0; row < ROWS; row++) {
    const rowCells = Array.from({ length: COLS }, (_, col) => row * COLS + col);
    const randomCell = rowCells[Math.floor(Math.random() * rowCells.length)];
    filled.push(randomCell);
  }
  
  // Добавляем дополнительные логотипы до примерно 60% от общего количества
  const targetCount = Math.floor(TOTAL_CELLS * 0.6);
  const remainingCells = Array.from({ length: TOTAL_CELLS }, (_, i) => i)
    .filter(cell => !filled.includes(cell));
  
  const shuffled = [...remainingCells].sort(() => Math.random() - 0.5);
  const additionalCount = Math.max(0, targetCount - filled.length);
  filled.push(...shuffled.slice(0, additionalCount));
  
  return filled;
};

export default function ClientLogos({ locale }: ClientLogosProps) {
  const { openForm } = useContactForm();
  const [filledCells, setFilledCells] = useState<number[]>([]);
  const [visibleCells, setVisibleCells] = useState<Set<number>>(new Set());
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [animationState, setAnimationState] = useState<{
    stage: 0 | 1 | 2 | 3; // 0 - нет анимации, 1 - первый текст, 2 - второй текст, 3 - кнопка
    cellIndex: number | null;
    visible: boolean;
  }>({
    stage: 0,
    cellIndex: null,
    visible: false,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver для запуска анимации при просмотре секции
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isSectionVisible) {
            setIsSectionVisible(true);
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
  }, [isSectionVisible]);

  useEffect(() => {
    // Не запускаем анимацию, пока секция не видна
    if (!isSectionVisible) return;

    // Определяем заполненные ячейки один раз
    const filled = getFilledCells();
    setFilledCells(filled);
    
    // Постепенно показываем логотипы с задержкой
    filled.forEach((cellIndex, index) => {
      setTimeout(() => {
        setVisibleCells(prev => new Set([...prev, cellIndex]));
      }, index * 100); // Задержка 100мс между каждым логотипом
    });

    // Начинаем анимацию после того, как все логотипы показаны
    const animationStartDelay = filled.length * 100 + 1000; // 1 секунда после последнего логотипа
    
    // Получаем список пустых ячеек
    const emptyCells = Array.from({ length: TOTAL_CELLS }, (_, i) => i)
      .filter(cell => !filled.includes(cell));

    if (emptyCells.length === 0) return;

    // Функция для получения случайной пустой ячейки
    const getRandomEmptyCell = (): number => {
      return emptyCells[Math.floor(Math.random() * emptyCells.length)];
    };

    // Функция для запуска цикла анимации
    const runAnimationCycle = () => {
      // Этап 1: "тут может быть ваша компания"
      const cellIndex1 = getRandomEmptyCell();
      setAnimationState({ stage: 1, cellIndex: cellIndex1, visible: true });
      
      // Исчезает через 3 секунды
      setTimeout(() => {
        setAnimationState(prev => ({ ...prev, visible: false }));
        
        // Этап 2: "или тут. Мы рады работать с вами" (через 500мс после исчезновения первого)
        setTimeout(() => {
          const cellIndex2 = getRandomEmptyCell();
          setAnimationState({ stage: 2, cellIndex: cellIndex2, visible: true });
          
          // Исчезает через 3 секунды
          setTimeout(() => {
            setAnimationState(prev => ({ ...prev, visible: false }));
            
            // Этап 3: кнопка "стать клиентом" (через 500мс после исчезновения второго)
            setTimeout(() => {
              const cellIndex3 = getRandomEmptyCell();
              setAnimationState({ stage: 3, cellIndex: cellIndex3, visible: true });
              
              // После показа кнопки, через 4 секунды начинаем новый цикл
              setTimeout(() => {
                setAnimationState({ stage: 0, cellIndex: null, visible: false });
                // Запускаем новый цикл через небольшую паузу
                setTimeout(() => {
                  runAnimationCycle();
                }, 1000);
              }, 4000);
            }, 500);
          }, 3000);
        }, 500);
      }, 3000);
    };

    // Запускаем первый цикл анимации
    setTimeout(() => {
      runAnimationCycle();
    }, animationStartDelay);
  }, [isSectionVisible]);

  // Генерируем позиции для кружочков на пересечениях
  const intersectionPoints: Array<{ row: number; col: number }> = [];
  for (let row = 1; row < ROWS; row++) {
    for (let col = 1; col < COLS; col++) {
      intersectionPoints.push({ row, col });
    }
  }

  return (
    <div ref={sectionRef} className="w-full relative">
      {/* Сетка */}
      <div className="grid grid-cols-6 relative">
        {Array.from({ length: TOTAL_CELLS }).map((_, index) => {
          const row = Math.floor(index / COLS);
          const col = index % COLS;
          const isFilled = filledCells.includes(index);
          const isVisible = visibleCells.has(index);
          
          return (
            <div
              key={index}
              className={`
                relative flex items-center justify-center p-8 min-h-[75px]
                ${row < ROWS - 1 ? 'border-b border-white/10' : ''}
                ${col < COLS - 1 ? 'border-r border-white/10' : ''}
              `}
            >
              {/* Логотип с анимацией */}
              {isFilled && (
                <div
                  className={`transition-all duration-500 ease-out ${
                    isVisible 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-90'
                  }`}
                >
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[60px] h-[60px]"
                  >
                    {generateRandomLogo(index)}
                  </svg>
                </div>
              )}

              {/* Анимация в пустых ячейках */}
              {!isFilled && animationState.cellIndex === index && (
                <div
                  className={`transition-all duration-700 ease-in-out text-center ${
                    animationState.stage === 3 || animationState.visible
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                  }`}
                >
                  {animationState.stage === 1 && (
                    <p className="text-white/80 text-sm font-medium">
                      {locale === "ru" ? "тут может быть ваша компания" : "your company could be here"}
                    </p>
                  )}
                  {animationState.stage === 2 && (
                    <p className="text-white/80 text-sm font-medium">
                      {locale === "ru" ? "или тут. Мы рады работать с вами" : "or here. We're happy to work with you"}
                    </p>
                  )}
                  {animationState.stage === 3 && (
                    <Button
                      variant="primary"
                      size="small"
                      onClick={openForm}
                      className="whitespace-nowrap"
                    >
                      {locale === "ru" ? "Стать клиентом" : "Become a client"}
                    </Button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Кружочки на пересечениях */}
      <div className="absolute inset-0 pointer-events-none">
        {intersectionPoints.map((point, index) => {
          const cellWidth = 100 / COLS;
          const cellHeight = 100 / ROWS;
          const left = `${point.col * cellWidth}%`;
          const top = `${point.row * cellHeight}%`;
          
          return (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left,
                top,
                width: '8px',
                height: '8px',
              }}
            >
              <div
                className="w-full h-full rounded-full bg-white/30"
                style={{
                  boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
