"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Locale } from "../lib/dictionaries";

interface NavigationProps {
  currentLocale: Locale;
  dict: {
    nav: {
      menu: {
        product: {
          label: string;
          items: {
            features: string;
            gallery: string;
            docs: string;
            training: string;
            certificates: string;
            roadmap: string;
          };
        };
        implementation: {
          label: string;
          items: {
            industryPractices: string;
            cases: string;
          };
        };
        pricing: {
          label: string;
          items: {
            plans: string;
            free: string;
            universities: string;
          };
        };
        partners: {
          label: string;
          items: {
            integrators: string;
            technology: string;
            solutions: string;
          };
        };
        company: {
          label: string;
          items: {
            about: string;
            blog: string;
            news: string;
            events: string;
          };
        };
        contacts: {
          label: string;
          items: {
            about: string;
            events: string;
            news: string;
            team: string;
          };
        };
      };
    };
  };
}

export default function Navigation({ currentLocale, dict }: NavigationProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menuItems = [
    {
      label: dict.nav.menu.product.label,
      href: `/${currentLocale}/product`,
      submenu: [
        { label: dict.nav.menu.product.items.features, href: `/${currentLocale}/product/features` },
        { label: dict.nav.menu.product.items.gallery, href: `/${currentLocale}/product/gallery` },
        { label: dict.nav.menu.product.items.docs, href: `/${currentLocale}/product/docs` },
        { label: dict.nav.menu.product.items.training, href: `/${currentLocale}/product/training` },
        { label: dict.nav.menu.product.items.certificates, href: `/${currentLocale}/product/certificates` },
        { label: dict.nav.menu.product.items.roadmap, href: `/${currentLocale}/product/roadmap` },
      ],
    },
    {
      label: dict.nav.menu.implementation.label,
      href: `/${currentLocale}/implementation`,
      submenu: [
        { label: dict.nav.menu.implementation.items.industryPractices, href: `/${currentLocale}/implementation/industry-practices` },
        { label: dict.nav.menu.implementation.items.cases, href: `/${currentLocale}/implementation/cases` },
      ],
    },
    {
      label: dict.nav.menu.pricing.label,
      href: `/${currentLocale}/pricing`,
      submenu: [
        { label: dict.nav.menu.pricing.items.plans, href: `/${currentLocale}/pricing/plans` },
        { label: dict.nav.menu.pricing.items.free, href: `/${currentLocale}/pricing/free` },
        { label: dict.nav.menu.pricing.items.universities, href: `/${currentLocale}/pricing/universities` },
      ],
    },
    {
      label: dict.nav.menu.partners.label,
      href: `/${currentLocale}/partners`,
      submenu: [
        { label: dict.nav.menu.partners.items.integrators, href: `/${currentLocale}/partners/integrators` },
        { label: dict.nav.menu.partners.items.technology, href: `/${currentLocale}/partners/technology` },
        { label: dict.nav.menu.partners.items.solutions, href: `/${currentLocale}/partners/solutions` },
      ],
    },
    {
      label: dict.nav.menu.company.label,
      href: `/${currentLocale}/company`,
      submenu: [
        { label: dict.nav.menu.company.items.about, href: `/${currentLocale}/company/about` },
        { label: dict.nav.menu.company.items.blog, href: `/${currentLocale}/company/blog` },
        { label: dict.nav.menu.company.items.news, href: `/${currentLocale}/company/news` },
        { label: dict.nav.menu.company.items.events, href: `/${currentLocale}/company/events` },
      ],
    },
    {
      label: dict.nav.menu.contacts.label,
      href: `/${currentLocale}/contacts`,
      // Нет submenu для Контакты
    },
  ];

  const handleMouseEnter = (itemLabel: string, hasSubmenu: boolean) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (hasSubmenu) {
      setHoveredItem(itemLabel);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 500); // Задержка 500ms перед закрытием
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Overlay для размытия фона когда меню открыто */}
      {hoveredItem && (
        <div 
          className="nav-dropdown-overlay"
          onClick={() => setHoveredItem(null)}
        />
      )}
      <nav className="hidden gap-0 text-[17px] leading-[140%] font-normal text-white md:flex">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className="nav-dropdown relative"
            onMouseEnter={() => handleMouseEnter(item.label, !!item.submenu)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={item.href}
              className={`nav-link px-6 py-2 hover:text-white/80 transition-colors block ${
                pathname === item.href ? "active" : ""
              }`}
            >
              {item.label}
            </Link>
            {item.submenu && (
              <div 
                className={`nav-dropdown-menu ${hoveredItem === item.label ? "show" : ""}`}
                onMouseEnter={() => handleMouseEnter(item.label, true)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Заголовок секции */}
                <div className="nav-dropdown-header">
                  <h3 className="nav-dropdown-title">{item.label}</h3>
                  <p className="nav-dropdown-description">Решить, начать, приступить, к кнопкам и ми к вам</p>
                </div>
                
                {/* Сетка пунктов меню */}
                <div className="nav-dropdown-menu-grid">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="nav-dropdown-item"
                    >
                      <span className="nav-dropdown-item-title">{subItem.label}</span>
                      <span className="nav-dropdown-item-desc">Lorem ipsum dolor sit amet consectetur sollicitudin.</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
