"use client";

export default function Slider() {
  return (
    <div className="space-y-6">
      <div className="relative h-[442px] w-full max-w-[850px] overflow-hidden rounded-lg border border-white/10 bg-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00bfff]/20 to-transparent"></div>
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          <div className="h-2 w-2 rounded-full bg-white"></div>
          <div className="h-2 w-2 rounded-full bg-white/50"></div>
          <div className="h-2 w-2 rounded-full bg-white/50"></div>
        </div>
        <div className="absolute bottom-4 right-4 text-sm text-white/70">1 / 3</div>
      </div>
      <p className="text-sm text-white/70">Slider with navigation bullets and image counter</p>
    </div>
  );
}
