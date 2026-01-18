"use client";

export default function SectionHeader() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-white">Section Title</h2>
        <p className="max-w-[800px] text-lg text-white/70">
          Section description text that can be quite long and provides context for the section content.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex h-[42px] items-center rounded-full border border-white/20 bg-white/5 px-4 text-sm text-white">
          Tag 1
        </span>
        <span className="inline-flex h-[42px] items-center rounded-full border border-white/20 bg-white/5 px-4 text-sm text-white">
          Tag 2
        </span>
        <span className="inline-flex h-[42px] items-center rounded-full border border-white/20 bg-white/5 px-4 text-sm text-white">
          Tag 3
        </span>
      </div>
    </div>
  );
}
