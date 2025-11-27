import { Nav, WhatsAppButton } from "@/components/global";
export const metadata = {
    title: "Portfolio - Pivods Custom Software & Digital Projects",
    description:
        "Check out Pivods portfolio showcasing custom software, web development, mobile & desktop apps, AI, IoT, and data analytics projects.",
    keywords: [
        "Pivods", "Portfolio", "Case Study", "Custom Software", "Web Development",
        "Mobile Apps", "Desktop Apps", "AI Projects", "IoT Projects", "Data Analytics",
        "Jasa Pembuatan Software", "Jasa IT Profesional", "Digital Agency Indonesia"
    ],
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://pivods.com/portfolio",
        languages: { "id-ID": "https://pivods.com/id/portfolio", "en-US": "https://pivods.com/en/portfolio" },
    },
    openGraph: {
        title: "Portfolio | Pivods - Custom Software & Digital Projects",
        description: "Explore Pivods digital projects: custom software, mobile & desktop apps, AI, IoT, and analytics.",
        url: "https://pivods.com/portfolio",
        siteName: "Pivods",
        images: [{ url: "https://pivods.com/og-portfolio.png", width: 1200, height: 630, alt: "Pivods Portfolio" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pivods Portfolio - Custom Software & Digital Projects",
        description: "Showcasing Pivods projects in software, web, AI, IoT, and analytics solutions.",
        images: ["https://pivods.com/og-portfolio.png"],
    },
};
export default function Portofoliolayout({ children }) {
    return (
        <>
            <Nav />
            {children}
            <WhatsAppButton />
        </>
    );
}
