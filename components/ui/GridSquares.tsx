"use client";

import { useEffect, useState } from "react";

export default function GridSquares() {
  const [squares, setSquares] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Создаем сетку с ячейками 60px
    const cellSize = 60;
    const containerWidth = 1600;
    const containerHeight = 200;
    const cols = Math.floor(containerWidth / cellSize);
    const rows = Math.floor(containerHeight / cellSize);
    const totalCells = cols * rows;
    
    // Создаем массив всех возможных ячеек
    const allCells: Array<{ col: number; row: number }> = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        allCells.push({ col: i, row: j });
      }
    }

    // Функция для создания квадрата в случайной ячейке
    const createSquare = (cellIndex: number): { id: number; x: number; y: number; size: number; delay: number; duration: number } => {
      const cell = allCells[cellIndex];
      const cellX = cell.col * cellSize;
      const cellY = cell.row * cellSize;
      
      const maxSize = cellSize * 0.8;
      const minSize = cellSize * 0.2;
      let size = minSize + Math.random() * (maxSize - minSize);
      
      // Ограничиваем размер, чтобы квадрат не выходил за пределы контейнера
      const maxOffsetX = Math.min(cellSize - size, containerWidth - cellX - size);
      const maxOffsetY = Math.min(cellSize - size, containerHeight - cellY - size);
      
      const offsetX = Math.max(0, Math.min(maxOffsetX, Math.random() * (cellSize - size)));
      const offsetY = Math.max(0, Math.min(maxOffsetY, Math.random() * (cellSize - size)));
      
      // Финальная проверка координат
      const finalX = Math.min(cellX + offsetX, containerWidth - size);
      const finalY = Math.min(cellY + offsetY, containerHeight - size);
      
      return {
        id: Date.now() + Math.random(),
        x: Math.max(0, finalX),
        y: Math.max(0, finalY),
        size: size,
        delay: 0,
        duration: 2 + Math.random() * 3, // Длительность от 2 до 5 секунд
      };
    };

    // Инициализируем несколько квадратов
    const initialSquares: Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }> = [];
    const initialCount = Math.min(8, totalCells);
    const usedCells = new Set<number>();
    
    for (let i = 0; i < initialCount; i++) {
      let cellIndex;
      do {
        cellIndex = Math.floor(Math.random() * totalCells);
      } while (usedCells.has(cellIndex));
      usedCells.add(cellIndex);
      initialSquares.push(createSquare(cellIndex));
    }
    
    setSquares(initialSquares);

    // Беспрерывно добавляем и удаляем квадраты
    const interval = setInterval(() => {
      setSquares((prev) => {
        // Удаляем случайный квадрат (если есть)
        if (prev.length > 0 && Math.random() < 0.5) {
          const indexToRemove = Math.floor(Math.random() * prev.length);
          return prev.filter((_, idx) => idx !== indexToRemove);
        }
        
        // Добавляем новый квадрат в случайную ячейку
        if (prev.length < 15) { // Максимум 15 квадратов одновременно
          const cellIndex = Math.floor(Math.random() * totalCells);
          return [...prev, createSquare(cellIndex)];
        }
        
        return prev;
      });
    }, 800); // Каждые 0.8 секунды

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute w-[1600px] h-[200px] pointer-events-none z-0">
      <div className="relative w-full h-full flex flex-wrap mt-[200px] mb-[200px]">
        {/* Сетка */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Синие квадраты */}
        {squares.map((square) => (
          <div
            key={square.id}
            className="absolute flex"
            style={{
              left: `${square.x}px`,
              top: `${square.y}px`,
              width: `${square.size}px`,
              height: `${square.size}px`,
              backgroundColor: 'rgba(0, 170, 255, 0.2)',
              animation: `squarePulse ${square.duration}s ease-in-out infinite`,
              boxShadow: '0 0 12px rgba(0, 170, 255, 0.6)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
