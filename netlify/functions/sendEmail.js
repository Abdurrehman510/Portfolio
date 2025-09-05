// Portfolio/netlify/functions/sendEmail.js

const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  const { name, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `📨 Website Contact | ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`,  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error sending email", error }),
    };
  }
};