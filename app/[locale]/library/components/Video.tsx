"use client";

export default function Video() {
  return (
    <div className="space-y-6">
      <div className="relative h-[493px] w-full max-w-[850px] overflow-hidden rounded-lg border border-white/10 bg-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00bfff]/20 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 text-sm text-white/70">Video caption</div>
      </div>
      <p className="text-sm text-white/70">Video player component with play button overlay</p>
    </div>
  );
}
