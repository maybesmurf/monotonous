import nodemailer from "nodemailer";
import { config } from "@monotonous/conf";

export const transport = nodemailer.createTransport({
  host: config.mailer.host,
  port: config.mailer.port,
  ignoreTLS: true,
});

export function sendEmail(message: Record<string, string | number | boolean>) {
  return transport.sendMail(message);
}
