const nodemailer = require("nodemailer");

// fungsi mengirim data consultation ke email menggunakan nodemailer
async function sendConsultation({ name, email, phone, company, message }) {
    // Set up Nodemailer transport
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    // Email masuk ke tim
    await transporter.sendMail({
        from: process.env.EMAIL_ADDRESS,
        to: "dustintris.work@gmail.com",
        subject: `Free Consultation Request from ${name}`,
        text: `
New consultation request received:

Name    : ${name}
Email   : ${email}
Phone   : ${phone}
Company : ${company}
Message : ${message}
        `,
    });

    // Auto-reply ke client
    await transporter.sendMail({
        from: process.env.EMAIL_ADDRESS,
        to: email,
        subject: "Thank you for your request – Pivods by PT Jembatan Digital Inovatif",
        text: `Hi ${name},\n\nThank you for reaching out to us for a free consultation. Our team will get back to you shortly to schedule a session.\n\nBest regards,\nPT Jembatan Digital Inovatif`,
    });

    return true;
}

module.exports = { sendConsultation };
