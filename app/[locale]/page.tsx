import Link from "next/link";
import { getDictionary, type Locale } from "../../lib/dictionaries";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <section className="grid gap-10 md:grid-cols-[1.6fr,1.4fr] md:items-center">
      <div className="space-y-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-black/50">
          {locale === "ru"
            ? "Корпоративная BI‑платформа"
            : "Corporate BI platform"}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {dict.home.title}
        </h1>
        <p className="max-w-xl text-sm text-black/70">{dict.home.subtitle}</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/${locale}/pricing`}
            className="inline-flex h-[42px] items-center justify-center overflow-hidden rounded-full border border-[#00d4ff]/70 bg-gradient-to-t from-[#00bfff]/40 via-[#00bfff]/10 to-transparent px-6 text-base font-semibold text-white shadow-[0_0_30px_rgba(0,212,255,0.3)] backdrop-blur-md transition-all duration-200 hover:border-[#00d4ff] hover:from-[#00bfff]/50 hover:via-[#00bfff]/15 hover:shadow-[0_0_40px_rgba(0,212,255,0.5)]"
          >
            {dict.home.ctaPrimary}
          </Link>
          <Link
            href={`/${locale}/product`}
            className="inline-flex h-[42px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/10"
          >
            {dict.home.ctaSecondary}
          </Link>
        </div>
        <div className="grid gap-3 text-[11px] text-black/60 sm:grid-cols-3">
          <div>
            <p className="font-medium text-black">BI‑платформа</p>
            <p>Дашборды, отчеты и визуальное управление.</p>
          </div>
          <div>
            <p className="font-medium text-black">Команды</p>
            <p>Совместная работа над единым пространством данных.</p>
          </div>
          <div>
            <p className="font-medium text-black">Безопасность</p>
            <p>Разграничение доступа и контроль использования.</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.25em] text-black/40">
          {dict.home.dashboard.label}
        </p>
        <div className="h-40 rounded-xl bg-gradient-to-br from-sky-500/15 via-sky-400/5 to-transparent border border-black/5" />
        <p className="mt-4 text-[11px] text-black/50">
          {dict.home.dashboard.placeholder}
        </p>
      </div>
    </section>
  );
}

