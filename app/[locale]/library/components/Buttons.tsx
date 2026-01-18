"use client";

export default function Buttons() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Primary</h3>
        <div className="flex flex-wrap items-center gap-4">
          {/* Large - Default */}
          <button className="h-[52px] overflow-hidden rounded-full border border-[#00d4ff]/70 bg-gradient-to-t from-[#00bfff]/40 via-[#00bfff]/10 to-transparent px-9 text-lg font-medium text-white backdrop-blur-md shadow-[0_0_30px_rgba(0,212,255,0.3)]">
            Large
          </button>
          {/* Medium - Default */}
          <button className="h-[42px] overflow-hidden rounded-full border border-[#00d4ff]/70 bg-gradient-to-t from-[#00bfff]/40 via-[#00bfff]/10 to-transparent px-6 text-base font-semibold text-white backdrop-blur-md shadow-[0_0_30px_rgba(0,212,255,0.3)]">
            Medium
          </button>
          {/* Small - Default */}
          <button className="h-[36px] overflow-hidden rounded-full border border-[#00d4ff]/70 bg-gradient-to-t from-[#00bfff]/40 via-[#00bfff]/10 to-transparent px-4 text-sm font-semibold text-white backdrop-blur-md shadow-[0_0_30px_rgba(0,212,255,0.3)]">
            Small
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Secondary</h3>
        <div className="flex flex-wrap items-center gap-4">
          <button className="h-[52px] rounded-full border border-white/20 bg-white/5 px-9 text-lg font-medium text-white backdrop-blur-sm hover:border-white/30 hover:bg-white/10">
            Large
          </button>
          <button className="h-[42px] rounded-full border border-white/20 bg-white/5 px-6 text-base font-semibold text-white backdrop-blur-sm hover:border-white/30 hover:bg-white/10">
            Medium
          </button>
          <button className="h-[36px] rounded-full border border-white/20 bg-white/5 px-4 text-sm font-semibold text-white backdrop-blur-sm hover:border-white/30 hover:bg-white/10">
            Small
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">States</h3>
        <div className="flex flex-wrap items-center gap-4">
          {/* Default - умеренное свечение внутри */}
          <button className="relative h-[52px] overflow-hidden rounded-full border border-[#00d4ff]/70 bg-gradient-to-t from-[#00bfff]/40 via-[#00bfff]/10 to-transparent px-9 text-lg font-medium text-white backdrop-blur-md shadow-[0_0_30px_rgba(0,212,255,0.3)]">
            Default
          </button>
          {/* Hover - максимальное яркое свечение */}
          <button className="relative h-[52px] rounded-full border border-[#00d4ff] bg-[#00bfff]/20 px-9 text-lg font-medium text-white backdrop-blur-md before:absolute before:inset-x-0 before:bottom-0 before:h-[75%] before:-z-10 before:rounded-full before:bg-gradient-to-t before:from-[#00d4ff] before:via-[#00bfff]/70 before:to-transparent before:blur-2xl">
            Hover
          </button>
          {/* Clicked - слабое свечение */}
          <button className="relative h-[52px] rounded-full border border-[#00a3cc]/70 bg-[#008fb3]/20 px-9 text-lg font-medium text-white backdrop-blur-md before:absolute before:inset-x-0 before:bottom-0 before:h-[60%] before:-z-10 before:rounded-full before:bg-gradient-to-t before:from-[#00a3cc]/50 before:via-[#008fb3]/25 before:to-transparent before:blur-xl">
            Clicked
          </button>
          {/* Disabled - практически без свечения */}
          <button className="h-[52px] rounded-full border border-[#666666] bg-[#444444]/20 px-9 text-lg font-medium text-white/30 backdrop-blur-sm cursor-not-allowed">
            Disabled
          </button>
        </div>
      </div>
    </div>
  );
}
