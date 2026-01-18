"use client";

export default function Bullet() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Bullet Types</h3>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-[#00bfff]"></div>
            <span className="text-sm text-white">Count</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white"></div>
            <span className="text-sm text-white">Point</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded border border-white/20">
              <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z" />
              </svg>
            </div>
            <span className="text-sm text-white">Icon</span>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Sizes</h3>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-[#00bfff]"></div>
            <span className="text-sm text-white">Large</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-[#00bfff]"></div>
            <span className="text-sm text-white">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#00bfff]"></div>
            <span className="text-sm text-white">Small</span>
          </div>
        </div>
      </div>
    </div>
  );
}
