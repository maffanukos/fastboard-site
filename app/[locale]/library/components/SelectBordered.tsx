"use client";

export default function SelectBordered() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm text-white/70">Select Bordered</label>
        <select className="h-[42px] w-full max-w-[192px] rounded-lg border border-white/20 bg-white/5 px-4 text-sm text-white focus:border-[#00bfff] focus:outline-none">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-sm text-white/70">States</label>
        <div className="flex flex-wrap gap-4">
          <select className="h-[42px] w-full max-w-[192px] rounded-lg border border-white/20 bg-white/5 px-4 text-sm text-white">
            <option>Default</option>
          </select>
          <select className="h-[42px] w-full max-w-[192px] rounded-lg border border-white/30 bg-white/10 px-4 text-sm text-white">
            <option>Hover</option>
          </select>
          <select className="h-[42px] w-full max-w-[192px] rounded-lg border border-[#00bfff] bg-white/5 px-4 text-sm text-white">
            <option>Focus</option>
          </select>
          <select className="h-[42px] w-full max-w-[192px] rounded-lg border border-red-500/50 bg-white/5 px-4 text-sm text-white">
            <option>Error</option>
          </select>
          <select className="h-[42px] w-full max-w-[192px] rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white/40 cursor-not-allowed" disabled>
            <option>Disabled</option>
          </select>
        </div>
      </div>
    </div>
  );
}
