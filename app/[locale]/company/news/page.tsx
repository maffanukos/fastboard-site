import type { Locale } from "../../../../lib/dictionaries";

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const title =
    locale === "ru" ? "Новости Fastboard" : "Fastboard news";

  const subtitle =
    locale === "ru"
      ? "Актуальные новости о продукте, компании и индустрии BI."
      : "Latest news about the product, company and BI industry.";

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-2xl text-sm text-black/70">{subtitle}</p>
      </header>
      {/* TODO: позже подровнять секции под точный макет Figma */}
    </section>
  );
}
