import { type Locale } from "../../../../lib/dictionaries";

export default async function UniversitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const title =
    locale === "ru"
      ? "Специальное предложение для вузов"
      : "Special offer for universities";

  const subtitle =
    locale === "ru"
      ? "Условия использования Fastboard в учебных заведениях."
      : "Conditions for using Fastboard in educational institutions.";

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-2xl text-sm text-black/70">{subtitle}</p>
      </header>
    </section>
  );
}

