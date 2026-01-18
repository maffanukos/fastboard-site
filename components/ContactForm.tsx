"use client";

import { useState, FormEvent } from "react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    telegram: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Отправка данных на сервер
    console.log("Form submitted:", formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="contact-form-modal relative w-full max-w-[600px] pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-white hover:text-[#00bfff] transition-colors z-10"
            aria-label="Закрыть"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L4 12M4 4L12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Form */}
          <form onSubmit={handleSubmit} className="contact-form-content">
            <h2 className="contact-form-title">
              Связаться с нами
            </h2>
            <p className="contact-form-description">
              Заполняя форму, вы регистрируетесь на двухдневный обучающий онлайн-интенсив по партнерским продуктам Fastboard
            </p>

            <div className="contact-form-fields">
              <div className="contact-form-field">
                <label htmlFor="fullName" className="contact-form-label">
                  ФИО
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="contact-form-input"
                  placeholder="Иванов Иван Иванович"
                  required
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="company" className="contact-form-label">
                  Компания
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="contact-form-input"
                  placeholder='ООО "Название"'
                  required
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="email" className="contact-form-label">
                  Почта
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-form-input"
                  placeholder="example@mail.ru"
                  required
                />
              </div>

              <div className="contact-form-field-group">
                <div className="contact-form-field">
                  <label htmlFor="phone" className="contact-form-label">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-form-input"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>

                <div className="contact-form-field">
                  <label htmlFor="telegram" className="contact-form-label">
                    Телеграм
                  </label>
                  <input
                    type="text"
                    id="telegram"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    className="contact-form-input"
                    placeholder="@username"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="contact-form-submit">
              Отправить
            </button>

            <p className="contact-form-consent">
              Нажимая кнопку, вы соглашаетесь на обработку своих персональных данных
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
