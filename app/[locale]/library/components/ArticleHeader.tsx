"use client";

export default function ArticleHeader() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-white/70">
          <span>Home</span>
          <span>/</span>
          <span>Blog</span>
          <span>/</span>
          <span className="text-white">Article</span>
        </div>
        <h1 className="text-4xl font-bold text-white">Article Title</h1>
        <p className="text-xl text-white/70">Article subtitle or lead text</p>
        <div className="flex items-center gap-4 text-sm text-white/70">
          <span>Date: 01.01.2024</span>
          <span>•</span>
          <span>Author Name</span>
        </div>
        <button className="h-[52px] rounded-full bg-gradient-to-r from-[#00bfff] to-[#00d4ff] px-9 text-lg font-medium text-white hover:opacity-90">
          Action Button
        </button>
      </div>
    </div>
  );
}
