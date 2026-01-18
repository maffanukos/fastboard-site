"use client";

import Image from "next/image";
import Link from "next/link";
import { useContactForm } from "./ContactFormProvider";

export default function ContactFormButton() {
  const { openForm } = useContactForm();

  return (
    <button
      onClick={openForm}
      className="flex items-center gap-2 text-[13px] leading-[120%] text-white hover:text-[#00bfff] transition-colors"
    >
      <Image src="/icons/airplane.svg" alt="" width={16} height={16} className="flex-shrink-0" unoptimized />
      Оставить заявку
    </button>
  );
}
