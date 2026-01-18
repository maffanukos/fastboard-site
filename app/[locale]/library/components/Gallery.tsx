"use client";

export default function Gallery() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="group relative h-[200px] overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00bfff]/20 to-transparent"></div>
            <div className="absolute bottom-2 left-2 text-xs text-white/70">Image {i}</div>
          </div>
        ))}
      </div>
      <p className="text-sm text-white/70">Gallery with multiple images in grid layout</p>
    </div>
  );
}
