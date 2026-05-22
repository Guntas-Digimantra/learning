import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
      course?: string;
    };
    cc: string;
  };
}

export async function POST(req: NextRequest) {
  try {
    const data: EmailRequestBody = await req.json();
    const { mailOptions } = data;
    const firstName = mailOptions.text.name?.split(' ')[0] || 'there';

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
      mailOptions.text.institutionName && `Institution Name: ${mailOptions.text.institutionName}`,
      mailOptions.text.phone && `Phone: ${mailOptions.text.phone}`,
      mailOptions.text.program && `Program: ${mailOptions.text.program}`,
      mailOptions.text.course && `Selected Course: ${mailOptions.text.course}`,
      mailOptions.text.requirements && `Requirement: ${mailOptions.text.requirements}`,
    ].filter(Boolean);

    const emailText = emailFields.join('\n');

    const mailOptionsToYou = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: mailOptions.subject,
      text: emailText,
      cc: process.env.SMTP_CC,
    };

    await transporter.sendMail(mailOptionsToYou);

    const mailOptionsToUser = {
      from: process.env.SMTP_FROM,
      to: mailOptions.emailTo,
      subject: "🎉 You're In! Thanks for Connecting with DMLearning",
      html: `Hi ${firstName},<br/><br/>
Thank you for sharing your email with us — we're excited to have you join the <a href="https://learning.digimantra.com" target="_blank">DMLearning</a> community! 🙌<br/><br/>

You've just taken the first step toward learning in-demand tech skills and unlocking exciting career opportunities. Whether you're interested in Web Development, AI with Python, UI/UX Design, or Cloud Computing, we’ve got something built just for you.<br/><br/>

📚 <strong>What's next?</strong><br/>
Stay tuned! We'll soon send you updates about our upcoming courses, free resources, and exclusive learning opportunities — straight to your inbox.<br/><br/>

If you have any questions or want to get started right away, just hit reply. We're always here to help you learn, grow, and succeed.<br/><br/>

Thanks again for joining us!<br/>
Let's build something amazing together.<br/><br/>

Warm regards,<br/>
Team DMLearning<br/>
<em>Learn. Build. Grow.</em>`,
    };

    await transporter.sendMail(mailOptionsToUser);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
