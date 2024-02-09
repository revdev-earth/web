export const verificationContact = (
  name: string | null,
  email: string | null,
  message: string | null
) => {
  // Verificar que el nombre tenga al menos 3 caracteres
  if (!name || name.length < 3) {
    return {
      error: "Invalid input data.",
      message: "Invalid input data. Name should have at least 3 characters.",
      data: { name },
    };
  }

  // Verificar que el correo electrónico cumpla con las condiciones de un email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return {
      error: "Invalid input data.",
      message: "Invalid input data. Please provide a valid email address.",
      data: { email },
    };
  }

  // Verificar que el mensaje tenga al menos 5 caracteres
  if (!message || message.length < 5) {
    return {
      error: "Invalid input data.",
      message: "Invalid input data. Message should have at least 5 characters.",
      data: { message },
    };
  }

  return true;
};
