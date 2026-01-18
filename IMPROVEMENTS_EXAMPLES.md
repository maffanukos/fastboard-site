# Примеры улучшений кода

## 1. Унификация типов params

### ❌ Было (app/[locale]/page.tsx)
```typescript
export default async function HomePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);
  // ...
}
```

### ✅ Стало
```typescript
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  // ...
}
```

---

## 2. Вынос строк в словари

### ❌ Было (app/[locale]/layout.tsx)
```typescript
<div className="text-[13px] leading-[120%] font-normal text-white">
  Прогрессивная BI-система. Или другая рекламная или полезная информация.{" "}
  <Link href="#" className="text-[#00bfff] underline">
    Ссылка
  </Link>
</div>
```

### ✅ Стало (lib/dictionaries.ts)
```typescript
const dictionaries = {
  ru: {
    // ...
    header: {
      banner: "Прогрессивная BI-система. Или другая рекламная или полезная информация.",
      bannerLink: "Ссылка",
    },
  },
  en: {
    // ...
    header: {
      banner: "Progressive BI system. Or other advertising or useful information.",
      bannerLink: "Link",
    },
  },
};
```

### ✅ Использование (app/[locale]/layout.tsx)
```typescript
const dict = await getDictionary(locale);

<div className="text-[13px] leading-[120%] font-normal text-white">
  {dict.header.banner}{" "}
  <Link href="#" className="text-[#00bfff] underline">
    {dict.header.bannerLink}
  </Link>
</div>
```

---

## 3. Создание типов

### ✅ types/blog.ts
```typescript
export interface Article {
  id: number;
  title: string;
  date: string;
  description: string;
  tag: string;
  image: string;
  slug?: string;
  content?: string;
}

export interface BlogCategory {
  id: string;
  label: string;
  count?: number;
}
```

### ✅ Использование (app/[locale]/company/blog/page.tsx)
```typescript
import type { Article, BlogCategory } from "@/types/blog";

const featuredArticle: Article = {
  id: 1,
  title: "...",
  // ...
};

const categories: BlogCategory[] = [
  { id: "all", label: "Все" },
  { id: "economics", label: "Экономика" },
  // ...
];
```

---

## 4. Создание констант

### ✅ constants/colors.ts
```typescript
export const COLORS = {
  background: {
    primary: "#040D15",
    secondary: "#1C253A",
  },
  text: {
    primary: "#ffffff",
    secondary: "rgba(255, 255, 255, 0.7)",
    accent: "#00bfff",
  },
  glow: {
    lighter: "#0060E5",
    darker: "#023273",
  },
} as const;
```

### ✅ constants/sizes.ts
```typescript
export const GLOW_SIZES = {
  wide: {
    width: "1701px",
    height: "614px",
  },
  blur: {
    wide: "500px",
    medium: "250px",
    small: "150px",
  },
} as const;
```

### ✅ Использование
```typescript
import { COLORS, GLOW_SIZES } from "@/constants";

<div
  style={{
    background: `radial-gradient(ellipse, ${COLORS.glow.darker} 0%, transparent 70%)`,
    width: GLOW_SIZES.wide.width,
    height: GLOW_SIZES.wide.height,
    filter: `blur(${GLOW_SIZES.blur.small})`,
  }}
/>
```

---

## 5. Создание переиспользуемого компонента GlowEffect

### ✅ components/ui/GlowEffect.tsx
```typescript
import { COLORS, GLOW_SIZES } from "@/constants";

interface GlowEffectProps {
  variant?: "wide" | "narrow";
  color?: "lighter" | "darker";
  position?: "center" | "top" | "bottom";
  blur?: "small" | "medium" | "wide";
  opacity?: number;
  className?: string;
}

export default function GlowEffect({
  variant = "wide",
  color = "lighter",
  position = "center",
  blur = "wide",
  opacity = 0.9,
  className = "",
}: GlowEffectProps) {
  const glowColor = color === "lighter" ? COLORS.glow.lighter : COLORS.glow.darker;
  const blurValue = GLOW_SIZES.blur[blur];
  const size = variant === "wide" ? GLOW_SIZES.wide : { width: "500px", height: "500px" };

  const positionStyles = {
    center: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
    top: { top: 0, left: "50%", transform: "translateX(-50%)" },
    bottom: { bottom: 0, left: "50%", transform: "translateX(-50%)" },
  };

  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        ...positionStyles[position],
        width: size.width,
        height: size.height,
        background: `radial-gradient(ellipse, ${glowColor} 0%, transparent 70%)`,
        opacity,
        filter: `blur(${blurValue})`,
        zIndex: 0,
      }}
    />
  );
}
```

### ✅ Использование
```typescript
import GlowEffect from "@/components/ui/GlowEffect";

<header className="relative text-center pb-8">
  <GlowEffect
    variant="wide"
    color="darker"
    position="center"
    blur="small"
    opacity={0.9}
  />
  <h1 className="relative z-10">Блог</h1>
</header>
```

---

## 6. Замена <a> на <Link>

### ❌ Было
```typescript
<a
  href={`/${params.locale}/pricing`}
  className="..."
>
  {dict.home.ctaPrimary}
</a>
```

### ✅ Стало
```typescript
import Link from "next/link";

<Link
  href={`/${locale}/pricing`}
  className="..."
>
  {dict.home.ctaPrimary}
</Link>
```

---

## 7. Добавление обработки ошибок

### ✅ app/[locale]/company/blog/[id]/page.tsx
```typescript
import { notFound } from "next/navigation";
import type { Article } from "@/types/blog";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: Locale; id: string }>;
}) {
  const { locale, id } = await params;
  
  // В реальном приложении - запрос к API
  const article = await getArticle(id);
  
  if (!article) {
    notFound();
  }
  
  return (
    <article>
      <h1>{article.title}</h1>
      {/* ... */}
    </article>
  );
}
```

---

## 8. Валидация форм

### ✅ lib/validation.ts
```typescript
import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  company: z.string().min(1, "Название компании обязательно"),
  email: z.string().email("Некорректный email"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Некорректный номер телефона"),
  telegram: z.string().optional(),
});
```

### ✅ Использование в ContactForm.tsx
```typescript
import { contactFormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(contactFormSchema),
});
```

---

## 9. Создание утилит

### ✅ utils/format.ts
```typescript
export function formatDate(date: string | Date, locale: Locale = "ru"): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(dateObj);
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+$1 ($2) $3-$4-$5");
}
```

---

## 10. Разбиение globals.css

### ✅ app/globals.css (базовые стили)
```css
@import "tailwindcss";

:root {
  --background: #f5f5f7;
  --foreground: #050816;
}

body {
  background: #040D15;
  color: var(--foreground);
}
```

### ✅ app/components.css (стили компонентов)
```css
/* Кнопка с градиентной обводкой */
.btn-gradient-border {
  /* ... */
}

/* Header компонент */
.header-main-nav {
  /* ... */
}
```

### ✅ app/animations.css (анимации)
```css
@keyframes spark {
  /* ... */
}

.footer-spark {
  animation: spark 3s infinite;
}
```

### ✅ Импорт в layout.tsx
```typescript
import "./globals.css";
import "./components.css";
import "./animations.css";
```
