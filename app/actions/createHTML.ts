export const generateHTML = ({
  email,
  name,
  message,
}: {
  email: string;
  name: string;
  message: string;
}) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f4f4;
          color: #333;
          margin: 0;
          padding: 0;
        }

        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
          color: #6a5acd;
        }

        p {
          margin-bottom: 10px;
        }

        footer {
          margin-top: 20px;
          text-align: center;
          font-size: 12px;
          color: #888;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hola,</h1>
        <p>Este usuario nos ha escrito:</p>
        <p><strong>${name}</strong></p>
        <p>Su correo electrónico es: ${email}</p>
        <p>Su mensaje:</p>
        <p>${message}</p>
        <p>Saludos,</p>
      </div>
      <footer>
        Este correo electrónico fue generado automáticamente. Por favor, no responda a este correo.
      </footer>
    </body>
  </html>
`;
