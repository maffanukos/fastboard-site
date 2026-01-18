"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

export default function Footer() {
  return (
    <footer className="footer-container relative">
      {/* Анимация искр сверху */}
      <div className="footer-sparks" style={{ overflow: 'visible' }}>
        {Array.from({ length: 30 }).map((_, i) => {
          // Детерминированный генератор случайных чисел на основе индекса
          // Используем простую хеш-функцию для создания псевдослучайных значений
          const seed = i * 2654435761; // Простое число для хорошего распределения
          const random1 = ((seed % 10000) / 10000);
          const random2 = (((seed * 2) % 10000) / 10000);
          const random3 = (((seed * 3) % 10000) / 10000);
          
          return (
            <div
              key={i}
              className="footer-spark"
              style={{
                left: `${random1 * 100}%`,
                animationDelay: `${random2 * 3}s`,
                animationDuration: `${3 + random3 * 2}s`,
              }}
            />
          );
        })}
      </div>

      {/* Статичный градиент снизу - три эллипса как в Figma */}
      <div className="footer-gradient">
        <div className="footer-gradient-ellipse footer-gradient-ellipse-1" />
        <div className="footer-gradient-ellipse footer-gradient-ellipse-2" />
        <div className="footer-gradient-ellipse footer-gradient-ellipse-3" />
      </div>

      {/* Основной контент футера */}
      <div className="footer-content-wrapper">
        <div className="footer-content">
        {/* Левая секция */}
        <div className="footer-section" style={{ gridRow: '1 / 3' }}>
          {/* Логотип */}
          <div className="footer-logo">
            <Image
              src="/logo.svg"
              alt="Fastboard"
              width={150}
              height={25}
              className="h-auto"
              unoptimized
            />
          </div>

          {/* Юридическая информация */}
          <div className="footer-legal">
            <p>ООО "Вин Солюшнс" 2025. Ваш лучший BI</p>
            <p>ИНН 765786578698 ОГРН 786876760762344</p>
          </div>

          {/* Навигация */}
          <div className="footer-nav-section">
            <h3 className="footer-nav-heading">навигация</h3>
            <div className="footer-nav-links">
              <div className="footer-nav-column">
                <Link href="/ru/product/features">Возможности платформы</Link>
                <Link href="/ru/implementation/industry-practices">Отраслевые практики</Link>
                <Link href="/ru/product/gallery">Галерея решений</Link>
                <Link href="/ru/pricing">Стоимость</Link>
                <Link href="/ru/product/training">Курсы</Link>
              </div>
              <div className="footer-nav-column">
                <Link href="/ru/company/about">О компании</Link>
                <Link href="/ru/product/docs">Документация</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Правая секция */}
        <div className="footer-section footer-section-right">
          <h3 className="footer-nav-heading">контакты</h3>
          <div className="footer-contacts">
            <p className="footer-contact-item">+7499 111-22-33</p>
            <p className="footer-contact-item">MAIL@MAIL.RU</p>
          </div>
          <div className="footer-news-button-wrapper">
            <Button size="medium" className="footer-news-button">
              <span className="footer-news-text">Самые свежие новости</span>
              {/* Иконка мегафона из public/icons/ */}
              <Image
                src="/icons/megaphone.svg.svg"
                alt=""
                width={20}
                height={20}
                className="footer-news-icon"
                unoptimized
              />
            </Button>
          </div>
        </div>
      </div>

        {/* Нижняя секция с ссылками */}
        <div className="footer-bottom">
          <Link href="/ru/public-offer" className="footer-bottom-link">
            Публичная оферта
          </Link>
          <Link href="/ru/privacy-policy" className="footer-bottom-link">
            Политика обработки данных
          </Link>
          <p className="footer-bottom-text">
            Сами сделали сайт. Красивый как и наш BI
          </p>
        </div>
      </div>
    </footer>
  );
}
