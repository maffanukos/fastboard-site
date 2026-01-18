import { type Locale } from "../../../../lib/dictionaries";

export default async function PartnerSolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const title =
    locale === "ru"
      ? "Решения партнёров"
      : "Partner solutions";

  const subtitle =
    locale === "ru"
      ? "Готовые решения и надстройки на базе Fastboard."
      : "Ready-made solutions and add-ons built on top of Fastboard.";

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-2xl text-sm text-black/70">{subtitle}</p>
      </header>
    </section>
  );
}

