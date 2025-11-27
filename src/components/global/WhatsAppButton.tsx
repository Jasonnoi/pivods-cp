"use client";

import Image from "next/image";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/6281382189198"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer fixed bottom-6 right-6 z-50 bg-primary hover:bg-secondary text-white h-15 w-15 flex justify-center rounded-full shadow-lg transition transform hover:scale-110"
        >
            <Image src="/icons8-whatsapp.svg" alt="WhatsApp" width={45} height={45} priority />
        </a>
    );
}
