import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";


const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465, // Use port 587 for secure connections with TLS
    secure: true, // Use `true` for port 465
    logger: true,
    debug: true,
    secureConnection: false,
    auth: {
        user: "growthifysender@gmail.com", // Replace with your Gmail address
        pass: "Grothify@14", // Replace with your generated app password (recommended)
    },
    tls: {
        rejectUnauthorized: true, //
    }
});

export async function POST(req = NextRequest, res = NextResponse) {
    try {
        const { name, email, message } = req.body;

        const mailOptions = {
            from: "growthifysender@gmail.com", // Your email address
            to: "growthifyservices@gmail.com", // Recipient email address
            subject: "Form Submission from Your Website",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Form submitted successfully!" }, {
            status: 200,
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: error }, {
            status: 500,
        });
    }

}
