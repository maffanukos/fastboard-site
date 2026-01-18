import { type Locale, getDictionary } from "../../../../lib/dictionaries";

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const title =
    locale === "ru" ? "Возможности продукта" : "Product capabilities";

  const subtitle =
    locale === "ru"
      ? "Ключевые сценарии использования Fastboard для управления, аналитики и совместной работы."
      : "Key usage scenarios of Fastboard for management, analytics and collaboration.";

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-2xl text-sm text-black/70">{subtitle}</p>
      </header>
      {/* TODO: позже подровнять секции под точный макет Figma */}
    </section>
  );
}

