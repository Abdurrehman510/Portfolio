import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/api/contact', async (req, res) => {
  const { name, email, company, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `📨 Website Contact | ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`,
    html: `
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4; padding:20px 0;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; font-family:Arial, sans-serif;">
        
        <tr>
          <td bgcolor="#004aad" align="center" style="padding:20px; color:#ffffff; font-size:20px; font-weight:bold;">
            New Contact Form Submission
          </td>
        </tr>
        
        <tr>
          <td style="padding:20px; color:#333333; font-size:15px; line-height:1.5;">
            <p style="margin:0 0 10px;">You have received a new message:</p>
            <p style="margin:0 0 6px;"><strong>Name:</strong> ${name}</p>
            <p style="margin:0 0 6px;"><strong>Email:</strong> <a href="mailto:${email}" style="color:#004aad; text-decoration:none;">${email}</a></p>
            <p style="margin:0 0 6px;"><strong>Company:</strong> ${company || 'N/A'}</p>
            <p style="margin:15px 0 5px; font-weight:bold; color:#004aad;">Message:</p>
            <table width="100%" cellpadding="10" cellspacing="0" border="0" style="background-color:#f9f9f9;">
              <tr>
                <td style="border-left:4px solid #004aad; font-size:14px; line-height:1.5; color:#333333;">
                  ${message.replace(/\n/g, '<br>')}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <tr>
          <td bgcolor="#f1f1f1" align="center" style="padding:15px; font-size:12px; color:#777777;">
            <p style="margin:0;">This email was generated from your website contact form.</p>
            <p style="margin:5px 0 0;">&copy; ${new Date().getFullYear()} Your Company</p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});


app.get('/api/resume', (req, res) => {
  const file = path.join(__dirname, 'Abdurrehman_Narmawala_Resume.pdf');
  res.download(file, 'Abdurrehman_Narmawala_Resume.pdf', (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(500).send('Error downloading file.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});