import { NextRequest, NextResponse } from "next/server"; 
import nodemailer from "nodemailer";

interface EmailRequestBody {
  mailOptions: {
    subject: string;
    emailTo: string;
    text: {
      name?: string;
      email?: string;
      phone?: string;
      requirements?: string;
      institutionName?: string;
      program?: string;
      state?: string;
      city?: string;
      course?: string;
      semester?: string;
      pursuingCourse?: string;
    };
    cc: string;
  };
}

export async function POST(req: NextRequest) {
  try {
    const data: EmailRequestBody = await req.json();

    const { mailOptions } = data;

    // Configure the SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailFields = [
      mailOptions.text.name && `Name: ${mailOptions.text.name}`,
      mailOptions.text.email && `Email: ${mailOptions.text.email}`,
      mailOptions.text.institutionName &&
        `Institution Name: ${mailOptions.text.institutionName}`,
      mailOptions.text.phone && `Phone: ${mailOptions.text.phone}`,
      mailOptions.text.state && `State: ${mailOptions.text.state}`,
      mailOptions.text.city && `City: ${mailOptions.text.city}`,
      mailOptions.text.program && `Program: ${mailOptions.text.program}`,
      mailOptions.text.pursuingCourse &&
        `Pursuing Course: ${mailOptions.text.pursuingCourse}`,
      mailOptions.text.semester && `Semester: ${mailOptions.text.semester}`,
      mailOptions.text.course && `Selected Course: ${mailOptions.text.course}`,
      mailOptions.text.requirements &&
        `Requirement: ${mailOptions.text.requirements}`,
    ].filter(Boolean);

    const emailText = emailFields.join("\n");

    // Email options
    const mailOptionsFinal = {
      from: process.env.SMTP_FROM,
      to: mailOptions.emailTo ? mailOptions.emailTo : process.env.SMTP_TO,
      subject: mailOptions.subject,
      text: emailText,
      cc: process.env.SMTP_CC,
    };

    // Send email
    await transporter.sendMail(mailOptionsFinal);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
