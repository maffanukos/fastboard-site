import { getDictionary, type Locale } from "../../../lib/dictionaries";
import LibraryComponents from "./components";

export default async function LibraryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <section className="mx-auto max-w-[1400px] px-[64px] py-12">
      <header className="mb-12 space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          {locale === "ru" ? "Библиотека компонентов" : "Component Library"}
        </h1>
        <p className="max-w-2xl text-sm text-white/70">
          {locale === "ru"
            ? "Визуальная библиотека всех компонентов дизайн-системы"
            : "Visual library of all design system components"}
        </p>
      </header>

      <LibraryComponents locale={locale} />
    </section>
  );
}
