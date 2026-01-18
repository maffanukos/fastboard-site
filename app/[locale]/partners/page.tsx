import { type Locale } from "../../../lib/dictionaries";

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const title =
    locale === "ru" ? "Партнёры Fastboard" : "Fastboard partners";

  const subtitle =
    locale === "ru"
      ? "Партнёрская экосистема: интеграторы, технологические партнёры и готовые решения."
      : "Partner ecosystem: integrators, technology partners and ready-made solutions.";

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-2xl text-sm text-black/70">{subtitle}</p>
      </header>
    </section>
  );
}

