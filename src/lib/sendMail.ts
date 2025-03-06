import config from "@/config";
import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: config.google_smtp.id,
    pass: config.google_smtp.password,
  },
});

export type TMailConfig = {
  to: string[];
  subject: string;
  text?: string;
  html?: string;
};

export const sendMailWithNodeMailer = async ({
  to,
  subject,
  text,
  html,
}: TMailConfig) => {
  const res = await transporter.sendMail({
    from: config.google_smtp.id,
    to: to.join(","),
    subject,
    text,
    html,
  });
  return res;
};
