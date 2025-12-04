"use server";
import { DefaultActionFn } from "@/types/Form";
import { sendEmail } from "@/utils";

const contactUsAction: DefaultActionFn = async (_, formData) => {
  const recaptchaToken = formData.get("recaptchaToken") as string;
  const isHuman = await verifyRecaptcha(recaptchaToken);
  if (!isHuman) {
    return {
      error: undefined,
      success: false,
      message: "reCAPTCHA verification failed. Please try again.",
    };
  }

  const userData = {
    firstName: formData.get("firstName") || "",
    lastName: formData.get("lastName") || "",
    email: formData.get("email") || "",
    area: formData.get("area") || "",
    message: formData.get("message") || "",
  };
  const emailHtmlContent = `
  <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
    <h2 style="color: #333;">New Contact Form Submission</h2>
    <p><strong>First Name:</strong> ${userData.firstName}</p>
    <p><strong>Last Name:</strong> ${userData.lastName}</p>
    <p><strong>Email:</strong> ${userData.email}</p>
    <p><strong>Area:</strong> ${userData.area}</p>
    <p><strong>Message:</strong> ${userData.message}</p>
    <br/>
    <p style="color: #666;">This email was sent from the contact form on the TGTH website.</p>
  </div>
`;
  try {
    await sendEmail({
      subject: "TGTH Contact Form",
      html: emailHtmlContent,
    });
    return {
      error: undefined,
      success: true,
      message: "Your message has been sent! We’ll respond to you soon.",
    };
  } catch (error: any) {
    return {
      error,
      success: false,
      message: error?.message || "Something went wrong.",
    };
  }
};

export default contactUsAction;

export async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const secretKey = "6Lc1YPgqAAAAAAHcK6yfZG6UUTCxJUszm4KgGNVn";
    // RECAPTCHA_SECRET_KEY = 6Lc1YPgqAAAAAAHcK6yfZG6UUTCxJUszm4KgGNVn

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data = await response.json();
    // console.log("captcha data ======> ", data);

    return data.success && data.score >= 0.5;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}
