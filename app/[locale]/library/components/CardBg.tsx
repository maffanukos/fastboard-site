"use client";

export default function CardBg() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Card Background</h3>
        <div className="flex flex-wrap gap-6">
          <div className="group relative h-[480px] w-[321px] rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10">
            <div className="space-y-4">
              <div className="h-20 w-20 rounded-lg bg-[#00bfff]/20"></div>
              <h4 className="text-xl font-semibold text-white">Card Title</h4>
              <p className="text-sm text-white/70">Card description text</p>
            </div>
          </div>
          <div className="relative h-[480px] w-[321px] rounded-xl border border-white/20 bg-white/10 p-6">
            <div className="space-y-4">
              <div className="h-20 w-20 rounded-lg bg-[#00bfff]/20"></div>
              <h4 className="text-xl font-semibold text-white">Card Title</h4>
              <p className="text-sm text-white/70">Card description text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
