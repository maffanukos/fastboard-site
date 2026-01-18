"use client";

export default function DropdownList() {
  return (
    <div className="space-y-4">
      <div className="w-full max-w-[720px] rounded-lg border border-white/20 bg-white/5 p-2">
        <div className="space-y-1">
          <div className="rounded px-4 py-2 text-sm text-white hover:bg-white/10">
            Option 1
          </div>
          <div className="rounded px-4 py-2 text-sm text-white hover:bg-white/10">
            Option 2
          </div>
          <div className="rounded bg-white/10 px-4 py-2 text-sm text-white">
            Active Option
          </div>
          <div className="rounded px-4 py-2 text-sm text-white hover:bg-white/10">
            Option 4
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="w-full max-w-[245px] rounded-lg border border-white/20 bg-white/5 p-2">
          <div className="rounded px-4 py-2 text-sm text-white hover:bg-white/10">
            Default
          </div>
        </div>
        <div className="w-full max-w-[245px] rounded-lg border border-white/20 bg-white/5 p-2">
          <div className="rounded bg-white/10 px-4 py-2 text-sm text-white">
            Hover
          </div>
        </div>
        <div className="w-full max-w-[245px] rounded-lg border border-white/20 bg-white/5 p-2">
          <div className="rounded bg-[#00bfff]/20 px-4 py-2 text-sm text-[#00bfff]">
            Active
          </div>
        </div>
      </div>
    </div>
  );
}
