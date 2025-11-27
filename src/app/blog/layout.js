import { Nav, WhatsAppButton } from "@/components/global";
export const metadata = {
    title: "Blog - Pivods Insights on IT, Software & Digital Innovation",
    description:
        "Read Pivods blog for insights on IT consulting, software development, AI, IoT, data analytics, and digital transformation.",
    keywords: [
        "Pivods", "Blog", "IT Insights", "Software Development", "Custom Software",
        "AI", "IoT", "Data Analytics", "Digital Innovation", "Jasa IT Profesional",
        "Konsultan IT", "IT Vendor", "Digital Agency Indonesia"
    ],
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://pivods.com/blog",
        languages: { "id-ID": "https://pivods.com/id/blog", "en-US": "https://pivods.com/en/blog" },
    },
    openGraph: {
        title: "Blog | Pivods - IT, Software & Digital Innovation Insights",
        description: "Read Pivods articles on IT consulting, custom software, AI, IoT, and analytics.",
        url: "https://pivods.com/blog",
        siteName: "Pivods",
        images: [{ url: "https://pivods.com/og-blog.png", width: 1200, height: 630, alt: "Pivods Blog" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pivods Blog - IT & Digital Innovation Insights",
        description: "Articles on IT consulting, software development, AI, IoT, and analytics from Pivods.",
        images: ["https://pivods.com/og-blog.png"],
    },
};
export default function Bloglayout({ children }) {
    return (
        <>
            <Nav />
            {children}
            <WhatsAppButton />
        </>
    );
}
