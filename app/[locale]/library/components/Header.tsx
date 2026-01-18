"use client";

export default function Header() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-white">Header Component</div>
          <div className="flex items-center gap-4">
            <button className="text-sm text-white hover:text-[#00bfff]">Menu</button>
            <button className="h-[52px] rounded-full bg-gradient-to-r from-[#00bfff] to-[#00d4ff] px-6 text-base font-medium text-white">
              Try
            </button>
          </div>
        </div>
      </div>
      <p className="text-sm text-white/70">
        Адаптивный компонент с различными состояниями для разных экранов (lg, md, sm, xs)
      </p>
    </div>
  );
}
