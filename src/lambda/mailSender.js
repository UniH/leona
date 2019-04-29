import nodemailer from 'nodemailer';

export function handler(event, context, callback) {
  try {
    const body = JSON.parse(event.body);
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    console.log('New mail:', body);
    console.log('Time: ', new Date());

    const mailOptions = {
      from: `${body.name} <${body.mail}>`,
      to: process.env.MAIL_RECIVER,
      bcc: process.env.BCC,
      subject: '大璽網站 - 客戶詢問',
      text: `姓名：${body.name} 電話：${body.phobe} 電郵： ${body.mail} 備註：${
        body.remarks
      }`,
      html: `
    <div>
    <b>你好，有新的客戶想了解大璽：</b>
    <br>
    <b>姓名：${body.name}</b>
    <br>
    <b>電話：${body.phone || '客戶未留'}</b>
    <br>
    <b>電郵：${body.mail || '客戶未留'}</b>
    <br>
    <b>聯絡事項：${body.remarks || '無，請直接聯繫'}</b>
    </div>
    `,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        const response = {
          statusCode: 500,
          body: JSON.stringify({
            error: err.message,
          }),
        };
        console.log('error', err);
        return callback(null, response);
      }
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: `Email processed succesfully!`,
        }),
      };
      console.log('mail sent');
      console.log('response', response);
      callback(null, response);
    });
  } catch (e) {
    console.log('error', e);
  }
}

export default handler;
