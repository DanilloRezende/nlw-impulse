import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer"


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f89dfa162f473d",
      pass: "24642e6e6783de"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData){
            await transport.sendMail({
        from: "Equipe Feedget <oi>",
        to: "Danillo Rezende <dan.rezende91@gmail.com>",
        subject,
        html: body,
    });
    }
}