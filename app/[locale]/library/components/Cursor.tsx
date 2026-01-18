"use client";

export default function Cursor() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex h-5 w-5 items-center justify-center">
          <div className="h-3 w-3 rounded-full border-2 border-white"></div>
        </div>
        <span className="text-sm text-white">Cursor indicator</span>
      </div>
    </div>
  );
}
