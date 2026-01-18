import { type Locale } from "../../../../lib/dictionaries";

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const title =
    locale === "ru"
      ? "Галерея решений на Fastboard"
      : "Solution gallery on Fastboard";

  const subtitle =
    locale === "ru"
      ? "Примеры дашбордов и рабочих пространств под разные сценарии управления и аналитики."
      : "Examples of dashboards and workspaces for different management and analytics scenarios.";

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-2xl text-sm text-black/70">{subtitle}</p>
      </header>
    </section>
  );
}

