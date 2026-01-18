import Image from "next/image";

type BulletIconProps = {
  className?: string;
  propValue?: "UI-icon";
};

export default function BulletIcon({ className = "", propValue = "UI-icon" }: BulletIconProps) {
  if (propValue === "UI-icon") {
    return (
      <div className={`flex items-start justify-center relative shrink-0 w-[22px] ${className}`}>
        <div className="aspect-[24/24] relative shrink-0 w-full">
          <div className="absolute inset-[24.98%_12.5%_25.02%_16.66%]">
            <Image
              src="/figma-assets/6952e0ed67d6d8e47c4eff34b6e839f3ecb48d12.svg"
              alt=""
              width={24}
              height={24}
              className="block max-w-none size-full"
              unoptimized
            />
          </div>
        </div>
      </div>
    );
  }
  return null;
}
