"use server";

import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { revalidatePath } from "next/cache";
import { z, ZodError } from "zod";
import { generateHTML } from "./createHTML";

interface EmailData {
  name: string;
  email: string;
  message: string;
}

const emailSchema = z.object({
  name: z.string().min(3),
  email: z.string().min(5),
  message: z.string().min(5),
});

export async function processForm(
  prevState: { message: string },
  formData: FormData
) {
  try {
    const validatedData = emailSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    await sendEmail(validatedData);
    revalidatePath("/");

    return {
      message: "Form data validated and email sent successfully.",
      status: "success",
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        message: "Validation failed for form data.",
        errors: error.errors,
        status: "error",
      };
    } else {
      console.error({ error });
      return {
        message: "Failed to process and send the email.",
        error,
        status: "error",
      };
    }
  }
}

const sendEmail = async (data: EmailData) => {
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
    console.error({ error });
    return { error: "Something went wrong with the email sending process." };
  }
};
