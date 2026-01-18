"use client";

import Button from "../../../../components/ui/Button";
import { useContactForm } from "../../../../components/ContactFormProvider";

interface PricingCardButtonProps {
  variant?: "ui" | "primary" | "secondary";
  children: React.ReactNode;
}

export default function PricingCardButton({ variant = "ui", children }: PricingCardButtonProps) {
  const { openForm } = useContactForm();

  return (
    <Button variant={variant} size="medium" className="w-full" onClick={openForm}>
      {children}
    </Button>
  );
}
