import nodemailer from "nodemailer";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const { formData } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${formData.name}" <${formData.email}>`,
      to: process.env.EMAIL_USER,
      subject: `📨 Website Contact | ${formData.name}`,
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully!" }),
    };
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error sending email", error: error.message }),
    };
  }
}
