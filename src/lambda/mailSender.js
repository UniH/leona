import nodemailer from "nodemailer";

async function sendMail() {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo", <foo@example.com>',
    to: process.env.MAIL_RECIVER,
    subject: "hello",
    text: "hello world",
    html: "<b>Hello world</b>",
  });

  console.log("message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

export default sendMail;
