import { type Locale } from "../../../../lib/dictionaries";

export default async function IntegratorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const title =
    locale === "ru" ? "Интеграторы" : "Integrators";

  const subtitle =
    locale === "ru"
      ? "Партнёры, которые внедряют Fastboard под ключ."
      : "Partners who implement Fastboard turnkey.";

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-2xl text-sm text-black/70">{subtitle}</p>
      </header>
    </section>
  );
}

