"use client";

export default function BlogCards() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Big Card</h3>
        <div className="group h-[432px] w-full max-w-[1228px] rounded-xl border border-white/10 bg-white/5 p-8 transition-all hover:border-white/20 hover:bg-white/10">
          <div className="space-y-4">
            <div className="h-48 w-full rounded-lg bg-gradient-to-br from-[#00bfff]/20 to-transparent"></div>
            <h4 className="text-2xl font-semibold text-white">Blog Post Title</h4>
            <p className="text-white/70">
              Blog post description that can be quite long and provides overview of the content.
            </p>
            <a href="#" className="inline-block text-[#00bfff] underline hover:text-white">
              Read more
            </a>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Small Cards</h3>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group h-[420px] rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div className="space-y-4">
                <div className="h-32 w-full rounded-lg bg-gradient-to-br from-[#00bfff]/20 to-transparent"></div>
                <h4 className="text-lg font-semibold text-white">Card Title {i}</h4>
                <p className="text-sm text-white/70">
                  Card description text that provides context.
                </p>
                <a href="#" className="inline-block text-sm text-[#00bfff] underline hover:text-white">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
