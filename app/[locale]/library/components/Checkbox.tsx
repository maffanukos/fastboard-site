"use client";

export default function Checkbox() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Unchecked</h3>
        <div className="flex flex-wrap items-center gap-6">
          <label className="flex items-center gap-2 text-sm text-white">
            <input type="checkbox" className="h-5 w-5 rounded border-white/20 bg-white/5" />
            <span>Default</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-white">
            <input type="checkbox" className="h-5 w-5 rounded border-[#00bfff] bg-white/5 ring-2 ring-[#00bfff]/50" />
            <span>Focus</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-white">
            <input type="checkbox" className="h-5 w-5 rounded border-red-500/50 bg-white/5" />
            <span>Error</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-white">
            <input type="checkbox" disabled className="h-5 w-5 rounded border-white/10 bg-white/5 opacity-50" />
            <span className="opacity-50">Disabled</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-white">
            <input type="checkbox" className="h-5 w-5 rounded border-white/30 bg-white/10" />
            <span>Hover</span>
          </label>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Checked</h3>
        <div className="flex flex-wrap items-center gap-6">
          <label className="flex items-center gap-2 text-sm text-white">
            <input type="checkbox" checked className="h-5 w-5 rounded border-[#00bfff] bg-[#00bfff]" />
            <span>Default</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-white">
            <input type="checkbox" checked className="h-5 w-5 rounded border-[#00bfff] bg-[#00bfff] ring-2 ring-[#00bfff]/50" />
            <span>Focus</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-white">
            <input type="checkbox" checked disabled className="h-5 w-5 rounded border-white/10 bg-white/10 opacity-50" />
            <span className="opacity-50">Disabled</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-white">
            <input type="checkbox" checked className="h-5 w-5 rounded border-[#00bfff] bg-[#00bfff] opacity-80" />
            <span>Hover</span>
          </label>
        </div>
      </div>
    </div>
  );
}
