"use client";

import Button from "../../../../components/ui/Button";
import { useContactForm } from "../../../../components/ContactFormProvider";

interface PricingHeroButtonsProps {
  locale: string;
}

export default function PricingHeroButtons({ locale }: PricingHeroButtonsProps) {
  const { openForm } = useContactForm();

  return (
    <div className="relative z-10 flex items-center gap-[32px]">
      <Button size="large" onClick={openForm}>
        {locale === "ru" ? "Начать бесплатно" : "Start free"}
      </Button>
      <button 
        onClick={openForm}
        className="flex gap-[8px] items-center justify-center text-white font-medium text-[16px] leading-[140%] hover:text-[#00bfff] transition-colors cursor-pointer"
      >
        {locale === "ru" ? "Расчет стоимости" : "Calculate cost"}
      </button>
    </div>
  );
}
