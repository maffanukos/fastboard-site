import { type Locale } from "../../../../lib/dictionaries";

export default async function FreePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const title =
    locale === "ru"
      ? "Бесплатная версия Fastboard"
      : "Fastboard free version";

  const subtitle =
    locale === "ru"
      ? "Возможности и ограничения бесплатного тарифа."
      : "Capabilities and limitations of the free plan.";

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-2xl text-sm text-black/70">{subtitle}</p>
      </header>
    </section>
  );
}

