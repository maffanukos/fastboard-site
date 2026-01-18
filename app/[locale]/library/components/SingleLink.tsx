"use client";

export default function SingleLink() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Default Type</h3>
        <div className="flex flex-wrap items-center gap-6">
          <a href="#" className="text-lg text-white underline hover:text-[#00bfff]">
            Large Link
          </a>
          <a href="#" className="text-base text-white underline hover:text-[#00bfff]">
            Medium Link
          </a>
          <a href="#" className="text-sm text-white underline hover:text-[#00bfff]">
            Small Link
          </a>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Colored Type</h3>
        <div className="flex flex-wrap items-center gap-6">
          <a href="#" className="text-lg text-[#00bfff] underline hover:text-white">
            Large Link
          </a>
          <a href="#" className="text-base text-[#00bfff] underline hover:text-white">
            Medium Link
          </a>
          <a href="#" className="text-sm text-[#00bfff] underline hover:text-white">
            Small Link
          </a>
        </div>
      </div>
    </div>
  );
}
