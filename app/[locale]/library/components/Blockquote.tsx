"use client";

export default function Blockquote() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Crop Style</h3>
        <blockquote className="border-l-4 border-[#00bfff] bg-white/5 p-6">
          <p className="text-lg italic text-white">
            "This is a blockquote text that represents an important quote or citation from the content."
          </p>
          <footer className="mt-4 text-sm text-white/70">— Author Name</footer>
        </blockquote>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Wide Style</h3>
        <blockquote className="bg-gradient-to-r from-[#00bfff]/20 to-transparent p-8">
          <p className="text-lg italic text-white">
            "Wide blockquote that spans the full width with gradient background."
          </p>
          <footer className="mt-4 text-sm text-white/70">— Author Name</footer>
        </blockquote>
      </div>
    </div>
  );
}
