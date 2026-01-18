import { type Locale } from "../../../../lib/dictionaries";

export default async function TechnologyPartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const title =
    locale === "ru"
      ? "Технологические партнёры"
      : "Technology partners";

  const subtitle =
    locale === "ru"
      ? "Платформы и технологии, с которыми Fastboard глубоко интегрирован."
      : "Platforms and technologies deeply integrated with Fastboard.";

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-2xl text-sm text-black/70">{subtitle}</p>
      </header>
    </section>
  );
}

