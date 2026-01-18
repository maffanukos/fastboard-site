"use client";

export default function Switcher() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Default</h3>
        <div className="flex flex-wrap items-center gap-6">
          <label className="flex items-center gap-2 text-sm text-white">
            <div className="relative h-5 w-10 rounded-full bg-[#00bfff]">
              <div className="absolute right-1 top-1 h-3 w-3 rounded-full bg-white transition-transform"></div>
            </div>
            <span>On</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-white">
            <div className="relative h-5 w-10 rounded-full bg-white/20">
              <div className="absolute left-1 top-1 h-3 w-3 rounded-full bg-white transition-transform"></div>
            </div>
            <span>Off</span>
          </label>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">With Description</h3>
        <div className="flex flex-wrap items-start gap-6">
          <div className="flex items-start gap-2">
            <div className="relative h-5 w-10 rounded-full bg-[#00bfff]">
              <div className="absolute right-1 top-1 h-3 w-3 rounded-full bg-white transition-transform"></div>
            </div>
            <div>
              <div className="text-sm text-white">On</div>
              <div className="text-xs text-white/70">Description text</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="relative h-5 w-10 rounded-full bg-white/20">
              <div className="absolute left-1 top-1 h-3 w-3 rounded-full bg-white transition-transform"></div>
            </div>
            <div>
              <div className="text-sm text-white">Off</div>
              <div className="text-xs text-white/70">Description text</div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Disabled</h3>
        <div className="flex flex-wrap items-center gap-6">
          <label className="flex items-center gap-2 text-sm text-white opacity-50">
            <div className="relative h-5 w-10 rounded-full bg-white/10">
              <div className="absolute right-1 top-1 h-3 w-3 rounded-full bg-white/50"></div>
            </div>
            <span>On Disabled</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-white opacity-50">
            <div className="relative h-5 w-10 rounded-full bg-white/10">
              <div className="absolute left-1 top-1 h-3 w-3 rounded-full bg-white/50"></div>
            </div>
            <span>Off Disabled</span>
          </label>
        </div>
      </div>
    </div>
  );
}
