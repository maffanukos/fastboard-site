"use client";

export default function List() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="mt-1 h-2 w-2 rounded-full bg-[#00bfff]"></div>
          <div>
            <p className="text-white">List item with bullet point</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-1 h-2 w-2 rounded-full bg-[#00bfff]"></div>
          <div>
            <p className="text-white">Another list item</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-1 h-2 w-2 rounded-full bg-[#00bfff]"></div>
          <div>
            <p className="text-white">Third list item</p>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white">With Title</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-[#00bfff]"></div>
            <div>
              <p className="text-white">List item 1</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-[#00bfff]"></div>
            <div>
              <p className="text-white">List item 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
