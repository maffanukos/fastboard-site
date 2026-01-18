"use client";

export default function SelectStringify() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <select className="h-[24px] rounded border border-white/20 bg-transparent px-2 text-sm text-white focus:border-[#00bfff] focus:outline-none">
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <select className="h-[24px] rounded border border-white/30 bg-white/10 px-2 text-sm text-white">
          <option>Hover</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <select className="h-[24px] rounded border border-[#00bfff] bg-white/5 px-2 text-sm text-white">
          <option>Opened</option>
        </select>
      </div>
    </div>
  );
}
