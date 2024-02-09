"use client";

import { FormEvent, useState } from "react";
import LoadingIcon from "./LoadingIcon";

const ContactSection = () => (
  <section className="container mx-auto px-5 md:px-6 pt-16 md:pt-20 lg:pt-32 pb-8">
    <div className="flex flex-col md:flex-row gap-10 lg:gap-20 w-full">
      <div className="w-full md:w-1/2 lg:mt-10">
        <div className="flex flex-col gap-8">
          <h3 className="text-3xl font-semibold">Contáctanos</h3>
          <p>
            Comunícate con nosotros utilizando el formulario de contacto a
            continuación. Esperamos con interés escuchar de ti y ayudarte con
            tus necesidades de construcción.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Contact />
      </div>
    </div>
  </section>
);

const initialState = {
  message: "",
  status: "",
};

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/email", {
      method: "POST",
      body: formData,
    });

    const data: {
      status: "error" | "success";
      message: "string";
      error?: string;
    } = await response.json();

    setStatus(data.status);
    setMessage(data.message);
    setSending(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <p
        aria-live="polite"
        className={`sr-only ${
          status === "error" ? "text-red-600" : "text-green-600"
        }`}
        role="status"
      >
        {message}
      </p>

      {status === "success" && (
        <p className="text-green-600 mb-4">¡Formulario enviado con éxito!</p>
      )}

      {status === "error" && (
        <p className="text-red-600 mb-4">
          Error al enviar el formulario intentalo de nuevo.
        </p>
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
          rows={5}
        ></textarea>
      </div>
      <div className="text-right">
        <button
          className={`website-button lg w-36 ${
            sending ? "opacity-50 cursor-not-allowed" : ""
          } bg-blue-900 text-white border border-blue-900 rounded px-4 py-2 transition-all hover:bg-blue-950 active:bg-blue-950 focus:outline-none focus:ring focus:border-blue-300`}
          disabled={sending}
        >
          {sending ? <LoadingIcon /> : "Enviar"}
        </button>
      </div>
    </form>
  );
};

export default ContactSection;
