import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tgth.mailer@gmail.com",
    pass: "szwn ljrk phnw shnc",
  },
} as SMTPTransport.Options);

type SendEmail = {
  subject: string;
  html: string;
};

export const sendEmail = async (mailOptions: SendEmail) => {
  const option = {
    from: { name: "TGTH", address: "tgth.mailer@gmail.com" },
    to: [
      // {
      //   name: "TGTH",
      //   address: "shuvo.brainiacs@gmail.com",
      // },
      {
        name: "TGTH",
        address: "sabur.aziz@tgth.com.au",
      },
      {
        name: "TGTH",
        address: "info@tgth.com.au",
      },
    ],
    ...mailOptions,
  };
  return await transporter.sendMail(option);
};
