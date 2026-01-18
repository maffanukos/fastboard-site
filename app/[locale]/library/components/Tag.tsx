"use client";

export default function Tag() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="inline-flex h-[42px] min-w-[100px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 text-sm font-medium text-white">
        Default
      </div>
      <div className="inline-flex h-[42px] min-w-[100px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 text-sm font-medium text-white">
        Hover
      </div>
      <div className="inline-flex h-[42px] min-w-[100px] items-center justify-center rounded-full border border-[#00bfff] bg-[#00bfff]/20 px-4 text-sm font-medium text-[#00bfff]">
        Selected
      </div>
      <div className="inline-flex h-[26px] min-w-[50px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-3 text-xs font-medium text-white">
        SM Default
      </div>
      <div className="inline-flex h-[26px] min-w-[50px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-3 text-xs font-medium text-white">
        SM Hover
      </div>
      <div className="inline-flex h-[26px] min-w-[50px] items-center justify-center rounded-full border border-[#00bfff] bg-[#00bfff]/20 px-3 text-xs font-medium text-[#00bfff]">
        SM Selected
      </div>
    </div>
  );
}
