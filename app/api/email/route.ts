import { verificationContact } from "../utils/verificationContact";
import { sendEmail } from "../utils/sendEmail";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const verification = verificationContact(name, email, message);

  if (verification !== true) return Response.json(verification);

  const sentEmail = await sendEmail({ name, email, message });

  if (sentEmail.error) {
    return Response.json({
      message: "Email no sent",
      error: "Email no sent",
      status: "error",
    });
  } else {
    return Response.json({ message: "Email sent", status: "success" });
  }
}
