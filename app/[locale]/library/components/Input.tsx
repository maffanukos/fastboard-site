"use client";

export default function Input() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Medium Size</h3>
        <div className="flex flex-wrap gap-4">
          <div className="space-y-2">
            <label className="text-sm text-white/70">Default</label>
            <input
              type="text"
              placeholder="Placeholder"
              className="h-[42px] w-full max-w-[192px] rounded-lg border border-white/20 bg-white/5 px-4 text-sm text-white placeholder:text-white/50 focus:border-[#00bfff] focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-white/70">Hover</label>
            <input
              type="text"
              placeholder="Placeholder"
              className="h-[42px] w-full max-w-[192px] rounded-lg border border-white/30 bg-white/10 px-4 text-sm text-white placeholder:text-white/50"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-white/70">Focus</label>
            <input
              type="text"
              placeholder="Placeholder"
              className="h-[42px] w-full max-w-[192px] rounded-lg border border-[#00bfff] bg-white/5 px-4 text-sm text-white placeholder:text-white/50 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-white/70">Error</label>
            <input
              type="text"
              placeholder="Placeholder"
              className="h-[42px] w-full max-w-[192px] rounded-lg border border-red-500/50 bg-white/5 px-4 text-sm text-white placeholder:text-white/50"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-white/70">Disabled</label>
            <input
              type="text"
              placeholder="Placeholder"
              disabled
              className="h-[42px] w-full max-w-[192px] rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white/40 placeholder:text-white/20 cursor-not-allowed"
            />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Large Size</h3>
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Placeholder"
            className="h-[52px] w-full max-w-[192px] rounded-lg border border-white/20 bg-white/5 px-4 text-base text-white placeholder:text-white/50 focus:border-[#00bfff] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Placeholder"
            className="h-[52px] w-full max-w-[192px] rounded-lg border border-white/30 bg-white/10 px-4 text-base text-white placeholder:text-white/50"
          />
          <input
            type="text"
            placeholder="Placeholder"
            className="h-[52px] w-full max-w-[192px] rounded-lg border border-[#00bfff] bg-white/5 px-4 text-base text-white placeholder:text-white/50 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
