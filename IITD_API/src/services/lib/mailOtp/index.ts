import nodemailer from "nodemailer";
import { logger } from "@src/logger";

const user = process.env.EMAIL_USERNAME;
const pass = process.env.EMAIL_APP_PASS;
const host = process.env.EMAIL_HOST;
const port = process.env.EMAIL_PORT;

export const generateTransporter = () => {
  let transporter = nodemailer.createTransport({
    service: host === "smtp.gmail.com" ? "gmail" : null,
    host: host,
    port: port,
    secure: false,
    auth: {
      user: user,
      pass: pass,
    },
  });

  return transporter;
};

async function sendOTPOnEmail({ to, subject, html }: { to: string, subject: string, html: string }) {
  try {
    const transporter = generateTransporter();
    await transporter.sendMail({
      from: 'Shop@Ease.com',
      to: to,
      subject: subject,
      html: html,
    });
    return {
      success: true,
      message: "OTP sent to your email address",
    };
  } catch (err:any) {
    logger.error(`Error while sending OTP email: ${err.message}`, { __filename });
    throw err;
  }
}

export { sendOTPOnEmail };
