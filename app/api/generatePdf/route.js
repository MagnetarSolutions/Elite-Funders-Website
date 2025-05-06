import generatePDF from "@/utils/generatePDF";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { htmlContent, recipientEmail } = await req.json();

    const outputPath = path.join(process.cwd(), "document.pdf");

    // Generate PDF and save to file
    await generatePDF(htmlContent, outputPath);

    // Send email with PDF attachment
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: "Your PDF Document",
      text: "Please find the attached PDF document.",
      attachments: [
        {
          filename: "document.pdf",
          path: outputPath,
          contentType: "application/pdf",
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    // Optionally, delete the file after sending the email
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
