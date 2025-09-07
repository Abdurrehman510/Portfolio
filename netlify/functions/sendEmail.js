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

    // Enhanced validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Name, email, and message are required." }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Please provide a valid email address." }),
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.VITE_CONTACT_EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Get current date and time for the email
    const now = new Date();
    const dateTime = now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    // Professional HTML email template
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333; background-color: #f7f7f7;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f7f7f7">
        <tr>
          <td align="center" style="padding: 40px 20px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="max-width: 600px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
              <!-- Header -->
              <tr>
                <td bgcolor="#4f46e5" style="padding: 30px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">New Website Inquiry</h1>
                  <p style="color: #e0e7ff; margin: 10px 0 0; font-size: 16px;">You've received a new message from your portfolio website</p>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 30px;">
                  <p style="margin: 0 0 20px; color: #666; font-size: 14px;">Received on: ${dateTime}</p>
                  
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td width="30%" style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #4f46e5;">Name</td>
                      <td width="70%" style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #4f46e5;">Email</td>
                      <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></td>
                    </tr>
                    ${company ? `
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #4f46e5;">Company</td>
                      <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${company}</td>
                    </tr>
                    ` : ''}
                  </table>
                  
                  <h2 style="color: #4f46e5; margin: 30px 0 15px; font-size: 18px;">Message</h2>
                  <div style="background-color: #f8fafc; padding: 20px; border-radius: 6px; border-left: 4px solid #4f46e5;">
                    <p style="margin: 0; line-height: 1.6; color: #475569;">${message.replace(/\n/g, '<br>')}</p>
                  </div>
                </td>
              </tr>
              
              <!-- Action -->
              <tr>
                <td style="padding: 0 30px 30px; text-align: center;">
                  <a href="mailto:${email}" style="display: inline-block; background-color: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">Reply to ${name.split(' ')[0]}</a>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td bgcolor="#f8fafc" style="padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                  <p style="margin: 0; color: #64748b; font-size: 12px;">
                    This message was sent from the contact form on your portfolio website. 
                    Please do not reply to this automated message.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

    // Plain text version for email clients that don't support HTML
    const textTemplate = `
NEW WEBSITE INQUIRY
===================

You've received a new message from your portfolio website.

Received on: ${dateTime}

CONTACT DETAILS:
----------------
Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}

MESSAGE:
--------
${message}

--
This message was sent from the contact form on your portfolio website.
Please do not reply to this automated message.
    `;

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.VITE_CONTACT_EMAIL}>`,
      replyTo: `${name} <${email}>`,
      to: process.env.VITE_CONTACT_EMAIL,
      subject: `New Contact: ${name} ${company ? `from ${company}` : ''}`,
      text: textTemplate,
      html: htmlTemplate,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'High'
      }
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
      body: JSON.stringify({ 
        message: "Error sending email", 
        error: process.env.NODE_ENV === "development" ? error.message : "Please try again later." 
      }),
    };
  }
};