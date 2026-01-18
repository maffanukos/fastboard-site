export type Locale = "ru" | "en";

const dictionaries = {
  ru: {
    siteName: "Fastboard BI",
    product: {
      title: "Возможности Fastboard",
      subtitle:
        "Единая точка входа в данные компании: от дашбордов и отчетов до визуальных сценариев управления.",
    },
    blog: {
      title: "Блог Fastboard",
    },
    header: {
      banner: "Прогрессивная BI-система. Или другая рекламная или полезная информация.",
      bannerLink: "Ссылка",
      phone: "8 (800) 700-14-36",
    },
    home: {
      title: "Корпоративная BI‑система Fastboard",
      subtitle:
        "Отечественная BI‑платформа для визуального управления, аналитики и совместной работы с данными.",
      ctaPrimary: "Запросить демо",
      ctaSecondary: "Узнать больше о продукте",
      badge: "Корпоративная BI‑платформа",
      features: {
        platform: {
          title: "BI‑платформа",
          description: "Дашборды, отчеты и визуальное управление.",
        },
        teams: {
          title: "Команды",
          description: "Совместная работа над единым пространством данных.",
        },
        security: {
          title: "Безопасность",
          description: "Разграничение доступа и контроль использования.",
        },
      },
      dashboard: {
        label: "Пример дашборда",
        placeholder: "Здесь позже вставим реальную иллюстрацию из Figma‑макета.",
      },
    },
    nav: {
      menu: {
        product: {
          label: "Продукт",
          items: {
            features: "Возможности",
            gallery: "Галерея решений",
            docs: "Документация",
            training: "Обучение",
            certificates: "Сертификаты",
            roadmap: "Дорожная карта",
          },
        },
        implementation: {
          label: "Внедрение",
          items: {
            industryPractices: "Отраслевые практики",
            cases: "Кейсы",
          },
        },
        pricing: {
          label: "Стоимость",
          items: {
            plans: "Тарифы Fastboard",
            free: "Бесплатная версия",
            universities: "Специальное предложение для Вузов",
          },
        },
        partners: {
          label: "Партнеры",
          items: {
            integrators: "Интеграторы",
            technology: "Технологические партнеры",
            solutions: "Решения партнеров",
          },
        },
        company: {
          label: "Компания",
          items: {
            about: "О нас",
            blog: "Блог",
            news: "Новости",
            events: "Мероприятия",
          },
        },
        contacts: {
          label: "Контакты",
          items: {
            about: "О нас",
            events: "Мероприятия",
            news: "Новости",
            team: "Команда и компания",
          },
        },
      },
    },
  },
  en: {
    siteName: "Fastboard BI",
    home: {
      title: "Fastboard corporate BI platform",
      subtitle:
        "Domestic BI platform for visual management, analytics and data collaboration.",
      ctaPrimary: "Request a demo",
      ctaSecondary: "Learn more about the product",
      badge: "Corporate BI platform",
      features: {
        platform: {
          title: "BI platform",
          description: "Dashboards, reports and visual management.",
        },
        teams: {
          title: "Teams",
          description: "Collaboration on a unified data space.",
        },
        security: {
          title: "Security",
          description: "Access control and usage monitoring.",
        },
      },
      dashboard: {
        label: "Dashboard preview",
        placeholder: "We will insert a real illustration from the Figma design here later.",
      },
    },
    product: {
      title: "Fastboard capabilities",
      subtitle:
        "One entry point to your company data: from dashboards and reports to visual management scenarios.",
    },
    blog: {
      title: "Fastboard blog",
    },
    header: {
      banner: "Progressive BI system. Or other advertising or useful information.",
      bannerLink: "Link",
      phone: "8 (800) 700-14-36",
    },
    nav: {
      menu: {
        product: {
          label: "Product",
          items: {
            features: "Features",
            gallery: "Solutions Gallery",
            docs: "Documentation",
            training: "Training",
            certificates: "Certificates",
            roadmap: "Roadmap",
          },
        },
        implementation: {
          label: "Implementation",
          items: {
            industryPractices: "Industry Practices",
            cases: "Cases",
          },
        },
        pricing: {
          label: "Pricing",
          items: {
            plans: "Fastboard Plans",
            free: "Free Version",
            universities: "Special Offer for Universities",
          },
        },
        partners: {
          label: "Partners",
          items: {
            integrators: "Integrators",
            technology: "Technology Partners",
            solutions: "Partner Solutions",
          },
        },
        company: {
          label: "Company",
          items: {
            about: "About Us",
            blog: "Blog",
            news: "News",
            events: "Events",
          },
        },
        contacts: {
          label: "Contacts",
          items: {
            about: "About Us",
            events: "Events",
            news: "News",
            team: "Team and Company",
          },
        },
      },
    },
  },
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.ru;
}

