"use client";

import { useContactForm } from "./ContactFormProvider";
import Button from "./ui/Button";

export default function CTAButtons() {
  const { openForm } = useContactForm();

  return (
    <>
      <Button size="large" onClick={openForm}>
        Начать бесплатно
      </Button>
      <Button variant="secondary" size="large" onClick={openForm}>
        Запросить демо
      </Button>
    </>
  );
}
