import { type Locale } from "../../../../lib/dictionaries";

export default async function TrainingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const title =
    locale === "ru" ? "Обучение Fastboard" : "Fastboard training";

  const subtitle =
    locale === "ru"
      ? "Программы обучения для администраторов, аналитиков и команд заказчика."
      : "Training programs for administrators, analysts and customer teams.";

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-2xl text-sm text-black/70">{subtitle}</p>
      </header>
    </section>
  );
}

