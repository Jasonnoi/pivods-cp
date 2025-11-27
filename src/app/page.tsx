export const metadata = {
    title: "Pivods - Pioneer Inovasi Digital | IT Solutions & Cutting Edge Technologies",
    description:
        "Pivods adalah agency pionir inovasi digital di Indonesia. Pivods is a digital innovation pioneer agency providing Company Profile, Information System, AI Agent Overflow System, Data Analytics & Dashboard, IoT Development, Machine Learning Development, Mobile & Desktop Applications.",
    keywords: [
        // Brand & Positioning
        "Pivods",
        "Pioneer Inovasi Digital",
        "Digital Innovation Pioneer",
        "Cutting Edge Technologies",
        "Software House Indonesia",
        "Software Agency Indonesia",
        "Jasa IT",
        // Service Keywords
        "Company Profile Website",
        "Jasa Pembuatan Company Profile",
        "Information System",
        "Sistem Informasi",
        "AI Agent Overflow System",
        "AI Automation System",
        "Data Analytics",
        "Dashboard Development",
        "IoT Development",
        "Internet of Things",
        "Machine Learning Development",
        "ML Development",
        "Mobile Application Development",
        "Desktop Application Development",
        "App Development",
        // Marketing Keywords
        "Jasa Pembuatan Web",
        "Jasa Website",
        "Landing Page",
        "Compro",
        "Profil Perusahaan",
        "Business Website",
    ],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://pivods.com/",
        languages: {
            "id-ID": "https://pivods.com/id",
            "en-US": "https://pivods.com/en",
        },
    },
    openGraph: {
        title: "Pivods - Pioneer Inovasi Digital | Cutting Edge IT Solutions",
        description:
            "Pivods adalah pionir inovasi digital yang bergerak di bidang jasa IT dengan 7 layanan: Company Profile, Information System, AI Agent Overflow System, Data Analytics & Dashboard, IoT Development, Machine Learning Development, Mobile & Desktop Applications.",
        url: "https://pivods.com/",
        siteName: "Pivods",
        images: [
            {
                url: "https://pivods.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "Pivods - Pioneer Inovasi Digital",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pivods - Pioneer Inovasi Digital",
        description: "Agency IT pionir inovasi digital dengan layanan cutting edge technologies.",
        images: ["https://pivods.com/og-image.png"],
    },
};
import { Nav, WhatsAppButton } from "../components/global";
import {
	Portfolio,
	Hero,
	Services,
	FreeConsultation,
	Footer,
	About,
	BusinessStruggle,
} from "../components/section";
import { homeSchema } from "../lib/json.ld";
import CtaBanner from "../components/ui/cta-banner";
export default function Home() {
    return (
        <>
            <Nav />
            <main>
                <Hero />
                <About />
                <BusinessStruggle />
                <CtaBanner
                    ctaText={"Ready to Break Those Challenges?"}
                    smallText={
                        <>
                            Don’t worry — we offer{" "}
                            <span className="font-semibold text-primary">free consultation</span>.
                            Our team will help you address outdated systems, inefficiencies, and
                            missed opportunities so your business can finally move forward with
                            confidence.
                        </>
                    }
                />
                <Services />
                <CtaBanner
                    ctaText={"Have You Found the Right Service Yet?"}
                    smallText={
                        <>
                            If you already have, we’re ready to help bring it to life. If not, don’t
                            worry — we offer{" "}
                            <span className="font-semibold text-primary">free consultation</span> to
                            uncover your challenges and design the right solution. Either way, we’ll
                            make sure your business moves forward with clarity and confidence.
                        </>
                    }
                />
                <Portfolio />
                <FreeConsultation />
                <Footer />
            </main>
            <WhatsAppButton />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
            />
        </>
    );
}
