"use client";

export default function ArticleFooter() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
        <h3 className="mb-4 text-lg font-semibold text-white">Related Links</h3>
        <div className="space-y-2">
          <a href="#" className="block text-[#00bfff] underline hover:text-white">
            Related Article 1
          </a>
          <a href="#" className="block text-[#00bfff] underline hover:text-white">
            Related Article 2
          </a>
          <a href="#" className="block text-[#00bfff] underline hover:text-white">
            Related Article 3
          </a>
        </div>
      </div>
      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
        <h3 className="mb-4 text-lg font-semibold text-white">Partners</h3>
        <div className="flex flex-wrap gap-4">
          <div className="h-16 w-32 rounded border border-white/10 bg-white/5"></div>
          <div className="h-16 w-32 rounded border border-white/10 bg-white/5"></div>
          <div className="h-16 w-32 rounded border border-white/10 bg-white/5"></div>
        </div>
      </div>
    </div>
  );
}
