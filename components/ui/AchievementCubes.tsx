"use client";

import { useState, useEffect } from "react";

interface AchievementCubesProps {
  locale: "ru" | "en";
}

interface Cube {
  id: string;
  position: { x: number; y: number }; // Позиция в процентах от центра
  size: number; // Размер куба в пикселях
  hasText?: boolean; // Есть ли текст рядом
  text?: {
    prefix?: string; // Текст перед цифрой (например, "БОЛЕЕ")
    number: string; // Цифра (например, "10", "750", "90")
    suffix: string; // Текст после цифры (например, "ЛЕТ", "НА РЫНКЕ")
    position: 'left' | 'right' | 'top' | 'bottom'; // Позиция текста относительно куба
  };
}

export default function AchievementCubes({ locale }: AchievementCubesProps) {
  const [hoveredCube, setHoveredCube] = useState<string | null>(null);
  const [winnersCount, setWinnersCount] = useState(10);

  // Счетчик для куба с призерами (от 10 до 33, затем останавливается)
  useEffect(() => {
    const interval = setInterval(() => {
      setWinnersCount((prev) => {
        if (prev >= 33) {
          return 33; // Останавливаемся на 33
        }
        return prev + 1;
      });
    }, 500); // Увеличивается каждые 0.5 секунды (быстрее)

    return () => clearInterval(interval);
  }, []);

  const cubes: Cube[] = [
    // Центральный большой куб с текстом
    {
      id: "center",
      position: { x: 0, y: 0 },
      size: 144, // 180 * 0.8
      hasText: true,
      text: {
        prefix: locale === "ru" ? "БОЛЕЕ" : "MORE THAN",
        number: "10",
        suffix: locale === "ru" ? "ЛЕТ\nНА РЫНКЕ" : "YEARS\nON THE MARKET",
        position: 'top',
      },
    },
    // Декоративные кубы вокруг - более хаотичное расположение
    {
      id: "decor1",
      position: { x: -28, y: -15 },
      size: 88, // 110 * 0.8
      hasText: true,
      text: {
        prefix: locale === "ru" ? "СЕЙЧАС" : "NOW",
        number: "2 400",
        suffix: locale === "ru" ? "ПОДПИСЧИКОВ ЧИТАЮТ\nНАШ ТЕЛЕГРАММ" : "SUBSCRIBERS READ\nOUR TELEGRAM",
        position: 'left',
      },
    },
    {
      id: "decor2",
      position: { x: 32, y: -10 },
      size: 76, // 95 * 0.8
    },
    // Куб с текстом про призеров (верхний правый)
    {
      id: "winners",
      position: { x: 35, y: -25 },
      size: 96, // 120 * 0.8
      hasText: true,
      text: {
        prefix: locale === "ru" ? "ПРИЗЕРЫ В" : "WINNERS IN",
        number: "30",
        suffix: locale === "ru" ? "НОМИНАЦИЯХ" : "NOMINATIONS",
        position: 'right',
      },
    },
    // Кубы с текстом слева
    {
      id: "projects",
      position: { x: -42, y: 20 },
      size: 112, // 140 * 0.8
      hasText: true,
      text: {
        prefix: locale === "ru" ? "БОЛЕЕ" : "MORE THAN",
        number: "750",
        suffix: locale === "ru" ? "УСПЕШНО\nРЕАЛИЗОВАННЫХ\nПРОЕКТОВ" : "SUCCESSFULLY\nIMPLEMENTED\nPROJECTS",
        position: 'left',
      },
    },
    {
      id: "decor3",
      position: { x: -48, y: 5 },
      size: 64, // 80 * 0.8
    },
    {
      id: "decor4",
      position: { x: -32, y: -3 },
      size: 60, // 75 * 0.8
    },
    // Кубы с текстом справа
    {
      id: "experience",
      position: { x: 40, y: 22 },
      size: 108, // 135 * 0.8
      hasText: true,
      text: {
        prefix: locale === "ru" ? "ОПЫТ\nКОМАНДЫ" : "TEAM\nEXPERIENCE",
        number: "900",
        suffix: locale === "ru" ? "ЛЕТ СОВОКУПНО" : "YEARS CUMULATIVE",
        position: 'right',
      },
    },
    {
      id: "decor5",
      position: { x: 45, y: 3 },
      size: 72, // 90 * 0.8
    },
    {
      id: "decor6",
      position: { x: 35, y: -6 },
      size: 64, // 80 * 0.8
    },
    // Дополнительные декоративные кубы
    {
      id: "decor7",
      position: { x: -15, y: 28 },
      size: 52, // 65 * 0.8
    },
    {
      id: "decor8",
      position: { x: 18, y: 30 },
      size: 48, // 60 * 0.8
    },
    {
      id: "decor9",
      position: { x: -6, y: -20 },
      size: 68, // 85 * 0.8
    },
    {
      id: "decor10",
      position: { x: 10, y: -22 },
      size: 60, // 75 * 0.8
    },
  ];

  // Вычисляем смещение для центрирования при наведении
  const getHoverTransform = (cube: Cube) => {
    if (hoveredCube === cube.id) {
      // Для левых кубов уменьшаем масштаб и не смещаем, чтобы текст не выходил за границы
      const isLeftCube = cube.position.x < 0;
      if (isLeftCube) {
        // Левые кубы только немного увеличиваются и выдвигаются, но не смещаются
        return {
          translateX: '0%',
          translateZ: '80px',
          scale: 1.1, // Меньше масштаб для левых кубов
        };
      }
      // Правые кубы могут смещаться и увеличиваться больше
      const offsetX = -cube.position.x * 0.5;
      return {
        translateX: `${offsetX}%`,
        translateZ: '100px',
        scale: 1.15,
      };
    }
    return {
      translateX: '0%',
      translateZ: '0px',
      scale: 1,
    };
  };

  // Поворот всей схемы при наведении
  const containerRotation = (() => {
    if (!hoveredCube) return { rotateY: '0deg', rotateX: '0deg' };
    
    // Находим наведенный куб
    const hoveredCubeData = cubes.find(c => c.id === hoveredCube);
    if (!hoveredCubeData) return { rotateY: '0deg', rotateX: '0deg' };
    
    // Если куб слева от центра (x < 0), поворачиваем вправо
    // Если куб справа от центра (x > 0), поворачиваем влево
    if (hoveredCubeData.position.x < 0) {
      return { rotateY: '5deg', rotateX: '-2deg' }; // Поворот вправо для левых кубов
    } else if (hoveredCubeData.position.x > 0) {
      return { rotateY: '-5deg', rotateX: '-2deg' }; // Поворот влево для правых кубов
    } else {
      // Центральный куб - без поворота или минимальный
      return { rotateY: '0deg', rotateX: '-2deg' };
    }
  })();

  return (
    <div className="relative w-full min-h-[450px] flex items-center justify-center overflow-visible" style={{ perspective: '1000px', padding: '50px 250px' }}>
      {/* Контейнер для 3D пространства */}
      <div 
        className="relative w-full" 
        style={{ 
          height: '450px',
          transformStyle: 'preserve-3d',
          transform: `rotateY(${containerRotation.rotateY}) rotateX(${containerRotation.rotateX})`,
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Декоративные линии от центрального куба к другим кубам */}
        {(() => {
          try {
            // Находим центральный куб
            const centerCube = cubes.find(c => c.id === "center");
            if (!centerCube) return null;
            
            // Позиция центрального куба в процентах
            const centerX = 50 + centerCube.position.x; // 50% (центр) + смещение
            const centerY = 50 + centerCube.position.y;
            
            // Выбираем несколько других кубов для соединения (5-9 кубов, исключая центральный)
            const otherCubes = cubes.filter(c => c.id !== "center").slice(0, 7);
            if (otherCubes.length === 0) return null;
            
            // Приблизительное преобразование размера куба из пикселей в проценты
            // Используем фиксированный процент для радиуса куба
            // Это обеспечит, что линии будут доходить до края куба
            const centerCubeRadiusPercent = 1.5; // Фиксированный процент для радиуса центрального куба
            
            // Создаем линии от центрального куба к другим кубам
            const lines: Array<{ from: { x: number; y: number }, to: { x: number; y: number } }> = [];
            
            otherCubes.forEach((cube) => {
              // Позиция центра целевого куба в процентах
              const targetCenterX = 50 + cube.position.x;
              const targetCenterY = 50 + cube.position.y;
              
              // Вычисляем направление от центрального куба к целевому
              const dx = targetCenterX - centerX;
              const dy = targetCenterY - centerY;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance === 0) return; // Пропускаем, если кубы в одной точке
              
              // Нормализуем вектор направления
              const dirX = dx / distance;
              const dirY = dy / distance;
              
              // Радиус целевого куба в процентах
              const targetCubeRadiusPercent = 1.2; // Фиксированный процент для радиуса целевого куба
              
              // Точка начала линии - от края центрального куба
              const fromX = centerX + dirX * centerCubeRadiusPercent;
              const fromY = centerY + dirY * centerCubeRadiusPercent;
              
              // Точка конца линии - до края целевого куба
              const toX = targetCenterX - dirX * targetCubeRadiusPercent;
              const toY = targetCenterY - dirY * targetCubeRadiusPercent;
              
              lines.push({
                from: { x: fromX, y: fromY },
                to: { x: toX, y: toY }
              });
            });
            
            return (
              <>
                {/* Линии от центра к другим кубам */}
                {lines.map((line, idx) => {
                  const dx = line.to.x - line.from.x;
                  const dy = line.to.y - line.from.y;
                  const length = Math.sqrt(dx * dx + dy * dy);
                  const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                  
                  if (!isFinite(length) || !isFinite(angle)) return null;
                  
                  return (
                    <div 
                      key={`line-wrapper-${idx}`}
                      className="absolute pointer-events-none"
                      style={{
                        left: `${line.from.x}%`,
                        top: `${line.from.y}%`,
                        width: `${length}%`,
                        height: '2px',
                        transformOrigin: '0 50%',
                        transform: `rotate(${angle}deg) translateZ(-100px)`,
                        transformStyle: 'preserve-3d',
                        zIndex: 0,
                      }}
                    >
                      {/* Линия */}
                      <div
                        className="absolute inset-0"
                        style={{
                          height: '2px',
                          background: 'linear-gradient(to right, transparent, rgba(0, 212, 255, 0.4), rgba(0, 212, 255, 0.4), transparent)',
                        }}
                      />
                      {/* Анимированная точка, бегущая по линии */}
                      <div
                        key={`line-point-${idx}`}
                        className="absolute line-point-animate"
                        style={{
                          top: '50%',
                          width: '10px',
                          height: '10px',
                          transformStyle: 'preserve-3d',
                          zIndex: 100,
                          borderRadius: '50%',
                          background: 'radial-gradient(circle, rgba(0, 212, 255, 1) 0%, rgba(0, 212, 255, 0.7) 50%, transparent 100%)',
                          boxShadow: '0 0 15px rgba(0, 212, 255, 1), 0 0 30px rgba(0, 212, 255, 0.6)',
                          animationDelay: `${idx * 0.3}s`,
                          willChange: 'left, transform, opacity',
                        }}
                      />
                    </div>
                  );
                })}
                
                {/* Точки на концах линий (у других кубов) */}
                {lines.map((line, idx) => {
                  if (!isFinite(line.to.x) || !isFinite(line.to.y)) return null;
                  
                  return (
                    <div
                      key={`point-${idx}`}
                      className="absolute pointer-events-none"
                      style={{
                        left: `${line.to.x}%`,
                        top: `${line.to.y}%`,
                        width: '8px',
                        height: '8px',
                        transform: 'translate(-50%, -50%) translateZ(-100px)',
                        transformStyle: 'preserve-3d',
                        zIndex: 0,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.7) 0%, rgba(0, 212, 255, 0.3) 70%, transparent 100%)',
                        boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
                      }}
                    />
                  );
                })}
              </>
            );
          } catch (error) {
            console.error('Error rendering decorative lines:', error);
            return null;
          }
        })()}

        {cubes.map((cube, index) => {
          const isHovered = hoveredCube === cube.id;
          const baseZIndex = isHovered ? 50 : 10 - index;
          const zIndex = cube.id === 'winners' ? baseZIndex + 1 : baseZIndex;
          const cubeDepth = cube.size * 0.5; // Глубина куба
          const hoverTransform = getHoverTransform(cube);

          return (
            <div
              key={cube.id}
              className={`absolute ${!isHovered ? 'cube-float' : ''}`}
              style={{
                left: `calc(50% + ${cube.position.x}%)`,
                top: `calc(50% + ${cube.position.y}%)`,
                transform: `translate(-50%, -50%) translateX(${hoverTransform.translateX}) translateZ(${hoverTransform.translateZ}) scale(${hoverTransform.scale})`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: zIndex,
                animationDelay: `${index * 0.15}s`,
              }}
              onMouseEnter={() => setHoveredCube(cube.id)}
              onMouseLeave={() => setHoveredCube(null)}
            >
              {/* 3D Куб - все 6 граней */}
              <div 
                className="relative" 
                style={{ 
                  width: `${cube.size}px`, 
                  height: `${cube.size}px`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Передняя грань */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-[rgba(0,96,229,0.8)] to-[rgba(0,96,229,0.4)] border border-[rgba(0,212,255,0.5)] backdrop-blur-sm"
                  style={{
                    transform: `translateZ(${cubeDepth}px)`,
                    boxShadow: isHovered 
                      ? '0 0 25px rgba(0, 212, 255, 0.4), inset 0 0 15px rgba(0, 212, 255, 0.2)' 
                      : '0 0 20px rgba(0, 212, 255, 0.3)',
                  }}
                />

                {/* Задняя грань */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-[rgba(0,96,229,0.5)] to-[rgba(0,96,229,0.2)] border border-[rgba(0,212,255,0.3)]"
                  style={{
                    transform: `rotateY(180deg) translateZ(${cubeDepth}px)`,
                  }}
                />

                {/* Правая грань */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-[rgba(0,96,229,0.6)] to-[rgba(0,96,229,0.2)] border border-[rgba(0,212,255,0.4)]"
                  style={{
                    transform: `rotateY(90deg) translateZ(${cubeDepth}px)`,
                  }}
                />

                {/* Левая грань */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-[rgba(0,96,229,0.6)] to-[rgba(0,96,229,0.2)] border border-[rgba(0,212,255,0.4)]"
                  style={{
                    transform: `rotateY(-90deg) translateZ(${cubeDepth}px)`,
                  }}
                />

                {/* Верхняя грань */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-[rgba(0,96,229,0.7)] to-[rgba(0,96,229,0.3)] border border-[rgba(0,212,255,0.4)]"
                  style={{
                    transform: `rotateX(90deg) translateZ(${cubeDepth}px)`,
                  }}
                />

                {/* Нижняя грань */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-[rgba(0,96,229,0.4)] to-[rgba(0,96,229,0.1)] border border-[rgba(0,212,255,0.3)]"
                  style={{
                    transform: `rotateX(-90deg) translateZ(${cubeDepth}px)`,
                  }}
                />
              </div>

              {/* Текст рядом с кубом в стиле инфографики */}
              {cube.hasText && cube.text && (
                <div
                  className="absolute pointer-events-none"
                  style={{
                    ...(cube.text.position === 'left' && {
                      right: '100%',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      marginRight: '24px',
                      textAlign: 'right',
                      maxWidth: '350px',
                      whiteSpace: 'pre-line',
                      wordBreak: 'normal',
                      overflowWrap: 'break-word',
                      height: (cube.id === 'projects' || cube.id === 'decor1') ? `${cube.size}px` : 'auto',
                      maxHeight: (cube.id === 'projects' || cube.id === 'decor1') ? `${cube.size}px` : 'auto',
                      display: (cube.id === 'projects' || cube.id === 'decor1') ? 'flex' : 'block',
                      ...(cube.id === 'projects' || cube.id === 'decor1' ? {
                        flexDirection: 'column' as const,
                        justifyContent: 'center' as const,
                      } : {}),
                      boxSizing: (cube.id === 'projects' || cube.id === 'decor1') ? 'border-box' : 'content-box',
                      overflow: (cube.id === 'projects' || cube.id === 'decor1') ? 'hidden' : 'visible',
                    }),
                    ...(cube.text.position === 'right' && {
                      left: '100%',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      marginLeft: '24px',
                      textAlign: 'left',
                      maxWidth: '320px',
                      whiteSpace: 'pre-line',
                      wordBreak: 'normal',
                      overflowWrap: 'break-word',
                      height: `${cube.size}px`,
                      maxHeight: `${cube.size}px`,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxSizing: 'border-box',
                      overflow: 'hidden',
                    }),
                    ...(cube.text.position === 'top' && {
                      top: '50%',
                      left: '50%',
                      transform: cube.id === 'center' ? `translate(-50%, -50%) translateZ(${cube.size * 0.5 + 20}px)` : 'translateX(-50%)',
                      marginBottom: cube.id === 'center' ? 0 : '24px',
                      textAlign: 'center',
                      maxWidth: '280px',
                      whiteSpace: 'pre-line',
                      wordBreak: 'normal',
                      overflowWrap: 'break-word',
                      height: cube.id === 'center' ? `${cube.size}px` : 'auto',
                      maxHeight: cube.id === 'center' ? `${cube.size}px` : 'auto',
                      display: cube.id === 'center' ? 'flex' : 'block',
                      ...(cube.id === 'center' ? { flexDirection: 'column' as const } : {}),
                      justifyContent: cube.id === 'center' ? 'center' : 'normal',
                      boxSizing: cube.id === 'center' ? 'border-box' : 'content-box',
                      overflow: cube.id === 'center' ? 'hidden' : 'visible',
                      zIndex: cube.id === 'center' ? 200 : 'auto',
                      transformStyle: cube.id === 'center' ? 'preserve-3d' : 'flat',
                    }),
                    ...(cube.text.position === 'bottom' && {
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      marginTop: '24px',
                      textAlign: 'center',
                      maxWidth: '280px',
                      whiteSpace: 'pre-line',
                      wordBreak: 'normal',
                      overflowWrap: 'break-word',
                      height: cube.id === 'center' ? `${cube.size}px` : 'auto',
                    }),
                  }}
                >
                  {/* Префикс (текст перед цифрой) */}
                  {cube.text.prefix && (
                    <div 
                      className={`font-bold text-white ${cube.id === 'decor1' ? 'text-[11px] leading-[1.1]' : (cube.id === 'projects' || cube.id === 'experience' || cube.id === 'center' || cube.id === 'winners') ? 'text-[14px] leading-[1.1]' : 'text-[18px] leading-[120%]'}`} 
                      style={{ whiteSpace: 'pre-line', wordBreak: 'normal', overflowWrap: 'break-word', marginBottom: 0 }}
                    >
                      {cube.text.prefix}
                    </div>
                  )}
                  
                  {/* Цифра */}
                  <div className="relative inline-block" style={{ marginBottom: 0 }}>
                    <div 
                      className={`font-bold leading-[1] ${cube.id === 'center' ? 'text-white' : 'text-[#00bfff]'} ${cube.id === 'projects' ? 'text-[56px]' : cube.id === 'experience' ? 'text-[60px]' : cube.id === 'center' ? 'text-[56px]' : cube.id === 'winners' ? 'text-[48px]' : cube.id === 'decor1' ? 'text-[36px]' : 'text-[32px]'}`} 
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {cube.id === 'winners' ? winnersCount : cube.text.number}
                    </div>
                  </div>
                  
                  {/* Суффикс (текст после цифры) */}
                  <div 
                    className={`font-normal text-white ${cube.id === 'decor1' ? 'text-[10px] leading-[1.2]' : (cube.id === 'projects' || cube.id === 'experience' || cube.id === 'center' || cube.id === 'winners') ? 'text-[12px] leading-[1.2]' : 'text-[16px] leading-[140%]'}`} 
                    style={{ 
                      whiteSpace: (cube.id === 'experience' && cube.text.suffix?.includes('ЛЕТ СОВОКУПНО')) ? 'nowrap' : 'pre-line', 
                      wordBreak: 'normal', 
                      overflowWrap: 'break-word', 
                      marginTop: 0 
                    }}
                  >
                    {cube.text.suffix}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
