"use client";

export default function Highlights() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Wide Highlight</h3>
        <div className="relative h-[600px] w-full max-w-[1200px] overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00bfff]/20 via-[#00bfff]/10 to-transparent blur-3xl"></div>
          <div className="relative z-10 p-8">
            <p className="text-white">Wide highlight content</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Middle Highlight</h3>
        <div className="relative h-[444px] w-full max-w-[600px] overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00bfff]/20 via-[#00bfff]/10 to-transparent blur-3xl"></div>
          <div className="relative z-10 p-8">
            <p className="text-white">Middle highlight content</p>
          </div>
        </div>
      </div>
    </div>
  );
}
