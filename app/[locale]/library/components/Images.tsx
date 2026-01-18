"use client";

export default function Images() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Single Image</h3>
        <div className="relative h-[493px] w-full max-w-[850px] overflow-hidden rounded-lg border border-white/10 bg-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00bfff]/20 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-sm text-white/70">Image caption</div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Two Images</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-[493px] overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00bfff]/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-sm text-white/70">Image 1</div>
          </div>
          <div className="relative h-[493px] overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00bfff]/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-sm text-white/70">Image 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
