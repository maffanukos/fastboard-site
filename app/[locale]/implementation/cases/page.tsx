import { type Locale } from "../../../../lib/dictionaries";

export default async function CasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const title = locale === "ru" ? "Кейсы внедрения" : "Implementation cases";

  const subtitle =
    locale === "ru"
      ? "Реальные истории внедрения Fastboard в компаниях."
      : "Real stories of Fastboard implementation in companies.";

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-2xl text-sm text-black/70">{subtitle}</p>
      </header>
    </section>
  );
}

