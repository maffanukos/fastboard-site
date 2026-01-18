import { type Locale } from "../../../../lib/dictionaries";

export default async function DocsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const title =
    locale === "ru"
      ? "Документация по Fastboard"
      : "Fastboard documentation";

  const subtitle =
    locale === "ru"
      ? "Сборник руководств, методичек и технических материалов по работе с платформой."
      : "Collection of guides, playbooks and technical materials on how to work with the platform.";

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-2xl text-sm text-black/70">{subtitle}</p>
      </header>
    </section>
  );
}

