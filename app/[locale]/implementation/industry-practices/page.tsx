import { type Locale } from "../../../../lib/dictionaries";

export default async function IndustryPracticesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const title =
    locale === "ru"
      ? "Отраслевые практики внедрения"
      : "Industry implementation practices";

  const subtitle =
    locale === "ru"
      ? "Подходы к внедрению Fastboard в разных отраслях."
      : "Implementation approaches for different industries.";

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-2xl text-sm text-black/70">{subtitle}</p>
      </header>
    </section>
  );
}

