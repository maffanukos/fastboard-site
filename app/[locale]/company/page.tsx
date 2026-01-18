import { type Locale } from "../../../lib/dictionaries";

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const title =
    locale === "ru" ? "Компания Fastboard" : "Fastboard company";

  const subtitle =
    locale === "ru"
      ? "Кто мы, чем занимаемся и как помогаем компаниям работать с данными."
      : "Who we are, what we do and how we help companies work with data.";

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-2xl text-sm text-black/70">{subtitle}</p>
      </header>
    </section>
  );
}

