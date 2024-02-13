'use client';
import { useTranslation } from 'react-i18next';

import { useFormState } from 'react-dom';
import { processForm } from '@/app/actions/email';
import { useEffect, useState } from 'react';

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-5 md:px-6 pt-16 md:pt-20 lg:pt-32 pb-8">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-20 w-full">
        <div className="w-full md:w-1/2 lg:mt-10">
          <div className="flex flex-col gap-8">
            <h3 className="text-3xl font-semibold">{t('section7.title')}</h3>
            <p>{t('section4.text')}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Contact />
        </div>
      </div>
    </section>
  );
};

const initialState = {
  message: '',
  status: ''
};

const Contact = () => {
  const [state, formAction] = useFormState(processForm, initialState);
  const [sending, setSending] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const manageAction = (data: FormData) => {
    setSending(true);
    formAction(data);
  };

  useEffect(() => {
    if (state.status) {
      setSending(false);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 4000);
    }
  }, [state]);

  console.log({ state });

  if (!state) return null;

  return (
    <form action={manageAction}>
      <p
        aria-live="polite"
        className={`sr-only ${
          state.status === 'error' ? 'text-red-600' : 'text-green-600'
        }`}
        role="status">
        {state.message}
      </p>

      {state.status === 'success' && showMessage && (
        <p className="text-green-600 mb-4">¡Formulario enviado con éxito!</p>
      )}

      {state.status === 'error' && showMessage && (
        <p className="text-red-600 mb-4">Error al enviar el formulario.</p>
      )}

      <div className="flex flex-col lg:flex-row lg:space-x-4">
        <div className="flex-1 mb-4">
          <label htmlFor="name" className="mb-1 body-small opacity-90">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            className="input bg-gray-100"
            type="text"
          />
        </div>
        <div className="flex-1 mb-4">
          <label htmlFor="email" className="mb-1 body-small opacity-90">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            className="input bg-gray-100"
            type="text"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="mb-1 body-small opacity-90">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          className="input bg-gray-100"
          rows={5}></textarea>
      </div>
      <div className="text-right">
        <button
          className={`website-button lg w-36 ${
            sending ? 'opacity-50 cursor-not-allowed' : ''
          } bg-blue-900 text-white border border-blue-900 rounded px-4 py-2 transition-all hover:bg-blue-950 active:bg-blue-950 focus:outline-none focus:ring focus:border-blue-300`}
          disabled={sending}>
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ContactSection;
