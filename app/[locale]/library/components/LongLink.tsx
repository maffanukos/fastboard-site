"use client";

export default function LongLink() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Long Links</h3>
        <div className="space-y-2 max-w-[240px]">
          <a href="#" className="block text-lg text-white underline hover:text-[#00bfff]">
            Very long link text that can wrap to multiple lines
          </a>
          <a href="#" className="block text-base text-white underline hover:text-[#00bfff]">
            Medium long link text that wraps
          </a>
          <a href="#" className="block text-sm text-white underline hover:text-[#00bfff]">
            Small long link text
          </a>
        </div>
      </div>
    </div>
  );
}
