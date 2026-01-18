"use client";

export default function Breadcrumbs() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-white/70">
        <span>Home</span>
        <span>/</span>
        <span>Category</span>
        <span>/</span>
        <span className="text-white">Current Page</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-white/70">
        <span className="hover:text-white">Home</span>
        <span>/</span>
        <span className="text-white">Current Page</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-white/70">
        <span className="hover:text-white">Home</span>
        <span>/</span>
        <span className="hover:text-white">Category</span>
        <span>/</span>
        <span className="hover:text-white">Subcategory</span>
        <span>/</span>
        <span className="text-white">Current Page</span>
      </div>
    </div>
  );
}
