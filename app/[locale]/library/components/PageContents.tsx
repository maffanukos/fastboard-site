"use client";

export default function PageContents() {
  return (
    <div className="space-y-6">
      <div className="w-full max-w-[250px] rounded-lg border border-white/10 bg-white/5 p-4">
        <div className="space-y-2">
          <div className="rounded px-3 py-2 text-sm font-semibold text-white bg-white/10">
            Active Section
          </div>
          <div className="rounded px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white">
            Section 1
          </div>
          <div className="rounded px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white">
            Section 2
          </div>
          <div className="rounded px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white">
            Section 3
          </div>
        </div>
      </div>
    </div>
  );
}
