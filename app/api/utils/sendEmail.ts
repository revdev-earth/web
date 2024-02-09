"use server";

import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { generateHTML } from "./generateHTML";

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    const { name, email, message } = data;

    const transport = nodemailer.createTransport({
      service: process.env.EMAIL_HOST,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Message from ${name} (${email})`,
      text: message,
      html: generateHTML({ name, email, message }),
    };

    await transport.sendMail(mailOptions);

    return { message: "Email sent successfully." };
  } catch (error) {
    console.log("sendEmail error: ", error);
    return { error: "Something went wrong with the email sending process." };
  }
};
