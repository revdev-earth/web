"use server";

import { revalidatePath } from "next/cache";
import { z, ZodError } from "zod";
import { sendEmail } from "../api/utils/sendEmail";

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

    const sentEmail = await sendEmail(validatedData);

    if (sentEmail.error)
      return {
        message: "Failed to process and send the email.",
        error: "Failed to process and send the email.",
        status: "error",
      };

    revalidatePath("/");

    return {
      message: "Form data validated and email sent successfully.",
      status: "success",
    };
  } catch (error) {
    console.log("processForm error: ", error);
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
