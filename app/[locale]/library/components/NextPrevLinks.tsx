"use client";

export default function NextPrevLinks() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white hover:text-[#00bfff]">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Previous</span>
        </a>
        <a href="#" className="flex items-center gap-2 text-white hover:text-[#00bfff]">
          <span>Next</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
