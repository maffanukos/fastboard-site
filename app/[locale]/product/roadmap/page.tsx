import { type Locale } from "../../../../lib/dictionaries";

export default async function RoadmapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const title =
    locale === "ru"
      ? "Дорожная карта развития Fastboard"
      : "Fastboard product roadmap";

  const subtitle =
    locale === "ru"
      ? "Планы развития платформы и фокусы ближайших релизов."
      : "Platform development plans and focus of upcoming releases.";

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-2xl text-sm text-black/70">{subtitle}</p>
      </header>
    </section>
  );
}

