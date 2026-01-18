"use client";

import { useContactForm } from "./ContactFormProvider";
import Button from "./ui/Button";

export default function TryButton() {
  const { openForm } = useContactForm();

  return (
    <Button size="medium" className="hidden md:inline-flex" onClick={openForm}>
      Попробовать
    </Button>
  );
}
