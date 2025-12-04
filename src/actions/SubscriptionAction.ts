"use server";
import { DefaultActionFn } from "@/types/Form";
import { sendEmail, transporter } from "@/utils";

const subscriptionAction: DefaultActionFn = async (_, formData) => {
  const userData = {
    email: formData.get("email") || "",
  };

  try {
    const emailHtmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
      <h2 style="color: #333;">New Newsletter Subscription</h2>
      <p><strong>Email:</strong> ${userData.email}</p>
      <br/>
      <p style="color: #666;">This email was sent from the newsletter subscription form on the TGTH website.</p>
    </div>
  `;
    const mailOptions = {
      subject: "TGTH Newsletter Subscription",
      html: emailHtmlContent,
    };
    await sendEmail(mailOptions);
    await sendEmailToSubscriber(userData.email as string);
    // console.log("subscriptionAction end -> ", "Thank you for subscribing!");

    return {
      error: undefined,
      success: true,
      message: "Thank you for subscribing! You’ll receive our updates soon.",
    };
  } catch (error: any) {
    console.log(error);
    return {
      error,
      success: false,
      message: error?.message || "Something went wrong.",
    };
  }
};

export default subscriptionAction;

export const sendEmailToSubscriber = async (email: string) => {
  const option = {
    subject: "Welcome to TGTH - We're Excited to Have You!",
    from: { name: "TGTH", address: "tgth.mailer@gmail.com" },
    to: email,
    html: subscriberHtmlContent,
  };
  return await transporter.sendMail(option);
};

const subscriberHtmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to TGTH</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .email-container {
        width: 90%;
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
        margin: auto;
        border-radius: 8px;
        border: 1px solid #ddd;
      }
      .header {
        text-align: center;
        padding: 10px 0;
        background-color: #003366;
        color: white;
        border-radius: 8px 8px 0 0;
      }
      .content {
        padding: 20px;
        text-align: left;
        font-size: 16px;
        color: #333;
      }
      .content p {
        margin-bottom: 20px;
      }
      .social-links {
        margin: 20px 0;
        text-align: center;
      }
      .social-links a {
        margin: 0 10px;
        text-decoration: none;
        color: #003366;
        font-weight: bold;
      }
      .banner {
        margin-top: 20px;
        text-align: center;
        font-size: 14px;
        color: #777;
      }
      .contact-info {
        background-color: #003366;
        color: white;
        padding: 15px;
        margin-top: 20px;
        border-radius: 0 0 8px 8px;
        text-align: center;
      }
      .contact-info p {
        margin: 5px 0;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <h1>Welcome to TGTH!</h1>
      </div>
      <div class="content">
        <p>Hello,</p>
        <p>
          Thank you for subscribing to TGTH. We are thrilled to have you join
          our community!
        </p>
        <p>
          As part of our community, you'll have access to our newsletters,
          giving you insight into TGTH. Each edition will keep you informed
          about our latest initiatives, upcoming events, and special features
          designed to enhance your experience with us.
        </p>
        <p>
          To get started, feel free to explore our website and check out our
          social media channels:
        </p>
        <div class="social-links">
          <a href="https://www.instagram.com/teamglobaltalenthub/">Instagram</a>
          <a href="https://www.facebook.com/share/kG1zDMaN9aQZdTnn/?mibextid=LQQJ4d">Facebook</a>
          <a
            href="https://www.linkedin.com/company/teamglobaltalenthub/"
            target="_blank"
            >LinkedIn</a
          >
        </div>
        <p>
          Want to learn more about how TGTH can expand your business? Please
          contact us using the details below.
        </p>
      </div>
      <div class="contact-info">
        <p>
          Email:
          <a href="mailto:info@tgth.com.au" style="color: white"
            >info@tgth.com.au</a
          >
        </p>
        <p>Phone:   <a href="tel:+61 8 6326 2000" style="color: white"
            >+61 8 6326 2000</a
          >
        </p>
      </div>
      <!-- <div class="banner">
        <p>We’re here to help you succeed!</p>
      </div> -->
    </div>
  </body>
</html>
`;
