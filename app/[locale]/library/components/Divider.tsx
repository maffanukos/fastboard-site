"use client";

export default function Divider() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Auto Width</h3>
        <div className="h-px w-full bg-white/10"></div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Fixed Width</h3>
        <div className="h-px w-[489px] bg-white/10"></div>
      </div>
    </div>
  );
}
