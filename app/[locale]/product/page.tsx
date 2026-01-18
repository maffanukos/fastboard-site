import { getDictionary, type Locale } from "../../../lib/dictionaries";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const features = [
    {
      title:
        locale === "ru" ? "Интерактивные дашборды" : "Interactive dashboards",
      desc:
        locale === "ru"
          ? "Создание и публикация дашбордов для руководителей и команд."
          : "Create and publish dashboards for leadership and teams.",
    },
    {
      title:
        locale === "ru"
          ? "Единое пространство данных"
          : "Single data space",
      desc:
        locale === "ru"
          ? "Доступ к ключевым показателям, справочникам и витринам данных."
          : "Access to core KPIs, reference data and data marts.",
    },
    {
      title:
        locale === "ru" ? "Совместная работа" : "Collaboration",
      desc:
        locale === "ru"
          ? "Совместная работа над отчетами, комментарии и сценарии сессий."
          : "Collaborative work on reports, comments and workshop scenarios.",
    },
  ];

  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          {dict.product.title}
        </h1>
        <p className="max-w-2xl text-sm text-black/70">
          {dict.product.subtitle}
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
          >
            <h2 className="mb-2 text-sm font-semibold text-black">{f.title}</h2>
            <p className="text-[11px] text-black/70">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

