"use client";

export default function Cookie() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Cookie Consent</h3>
            <p className="text-sm text-white/70">
              Мы используем cookies для улучшения работы сайта
            </p>
          </div>
          <div className="flex gap-3">
            <button className="h-[42px] rounded-full border border-white/20 bg-transparent px-6 text-sm font-medium text-white hover:bg-white/10">
              Отклонить
            </button>
            <button className="h-[42px] rounded-full bg-gradient-to-r from-[#00bfff] to-[#00d4ff] px-6 text-sm font-medium text-white hover:opacity-90">
              Принять
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
