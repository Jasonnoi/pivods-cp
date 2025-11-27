import { sendConsultation } from "../../../lib/sendEmail";
import { NextResponse } from "next/server";

interface ConsultationRequest {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
}

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as ConsultationRequest;

        const { name, email, phone, company, message } = body;

        if (!name || !email || !phone || !company || !message) {
            return NextResponse.json(
                { success: false, message: "All fields are required" },
                { status: 400 }
            );
        }

        // Optional: email format validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { success: false, message: "Invalid email format" },
                { status: 400 }
            );
        }

        await sendConsultation({ name, email, phone, company, message });

        return NextResponse.json({
            success: true,
            message: "Consultation sent successfully",
        });
    } catch (error) {
        console.error("Error sending consultation:", error);

        return NextResponse.json(
            { success: false, message: "Failed to send consultation" },
            { status: 500 }
        );
    }
}
