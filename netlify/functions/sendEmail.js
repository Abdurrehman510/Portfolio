// Portfolio/netlify/functions/sendEmail.js

const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  // Check for the correct HTTP method
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const { name, email, company, message } = JSON.parse(event.body);

    // Basic validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Name, email, and message are required." }),
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.VITE_CONTACT_EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.VITE_CONTACT_EMAIL}>`, // Use your own email to avoid spam filters
      replyTo: email, // Set the user's email as the reply-to address
      to: process.env.VITE_CONTACT_EMAIL,
      subject: `📨 Website Contact | ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error sending email", error: error.message }),
    };
  }
};
