"use client";

export default function Search() {
  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Поиск..."
          className="h-[52px] w-full max-w-[720px] rounded-lg border border-white/20 bg-white/5 px-4 pr-12 text-white placeholder:text-white/50 focus:border-[#00bfff] focus:outline-none"
        />
        <svg
          className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-white/70">States:</p>
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Default"
            className="h-[52px] w-full max-w-[720px] rounded-lg border border-white/20 bg-white/5 px-4 text-white placeholder:text-white/50"
          />
          <input
            type="text"
            placeholder="Hover"
            className="h-[52px] w-full max-w-[720px] rounded-lg border border-white/30 bg-white/10 px-4 text-white placeholder:text-white/50"
          />
          <input
            type="text"
            placeholder="Active"
            className="h-[52px] w-full max-w-[720px] rounded-lg border border-[#00bfff] bg-white/5 px-4 text-white placeholder:text-white/50"
          />
          <input
            type="text"
            placeholder="Filled"
            value="Заполненное поле"
            className="h-[52px] w-full max-w-[720px] rounded-lg border border-white/20 bg-white/5 px-4 text-white placeholder:text-white/50"
          />
        </div>
      </div>
    </div>
  );
}
