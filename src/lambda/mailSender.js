import nodemailer from 'nodemailer';

export async function handler(event, context, callback) {
  const body = JSON.parse(event.body);
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  transporter.sendMail(
    {
      from: `${body.name} <${body.mail}>`,
      to: process.env.MAIL_RECIVER,
      subject: '大璽網站 - 客戶詢問',
      text: `姓名：${body.name} 電話：${body.phobe} 電郵： ${body.mail} 備註：${
        body.remarks
      }`,
      html: `
      <div>
      <b>姓名：${body.name}</b>
      <br />
      <b>電話：${body.phone || '客戶未留'}</b>
      <br />
      <b>電郵：${body.mail || '客戶未留'}</b>
      <br />
      <b>備註：${body.remarks || '無，請直接聯繫'}</b>
      </div>
      `,
    },
    (err, info) => {
      if (err) {
        return console.log(err);
      }
      callback(null, { statusCode: 200, body: 'Mail sent!' });
      console.log('Message %s sent: %s', info.messageId, info.response);
    }
  );
  return;
}

export default handler;
