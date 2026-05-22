import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { to, subject, message, attachments } = await req.json();

    // Create a Nodemailer transporter using Gmail's MAIL settings
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        ciphers: 'SSLv3',
      },
    });

    // Define email options
    const mailOptions = {
      name: process.env.MAIL_FROM_NAME || 'DMLearning',
      from: process.env.MAIL_FROM,
      to: to, // Recipient email address(es)
      subject: subject,
      html: `<p>${message}</p>`, // You can send HTML content
      attachments: attachments || [],
      // text: message, // Or plain text content
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Error sending email.' },
      { status: 500 }
    );
  }
}
