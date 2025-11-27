import { Nav, WhatsAppButton } from "../../components/global";
import { Services, Footer } from "../../components/section";
import CtaBanner from "../../components/ui/cta-banner";
import Image from "next/image";
import { layoutStyles } from "../style";
import { CardDemo, Skeleton } from "../../components/ui/demo";
import Script from "next/script";
import { servicesSchema } from "../../lib/json.ld";
export const metadata = {
	title: "Our Services - Pivods Custom Software & IT Solutions",
	description:
		"Explore Pivods services including custom software, IT consulting, mobile & desktop apps, AI, IoT, and data analytics. We help businesses grow with technology.",
	keywords: [
		"Pivods",
		"Custom Software",
		"Software House Indonesia",
		"Digital Agency Indonesia",
		"IT Vendor",
		"IT Consultant",
		"IT Services",
		"Application Development",
		"Web Development",
		"Mobile Application",
		"Desktop Application",
		"AI",
		"IoT",
		"Data Analytics",
		"Jasa Pembuatan Software",
		"Jasa IT Profesional",
	],
	robots: { index: true, follow: true },
	alternates: {
		canonical: "https://pivods.com/services",
		languages: {
			"id-ID": "https://pivods.com/id/services",
			"en-US": "https://pivods.com/en/services",
		},
	},
	openGraph: {
		title: "Our Services | Pivods - Custom Software & IT Solutions",
		description:
			"Pivods provides custom software, IT consulting, AI, IoT, data analytics, and mobile & desktop apps for business growth.",
		url: "https://pivods.com/services",
		siteName: "Pivods",
		images: [
			{
				url: "https://pivods.com/og-services.png",
				width: 1200,
				height: 630,
				alt: "Pivods Services",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Pivods Services - Custom Software & IT Solutions",
		description:
			"IT consulting, custom software, AI, IoT, and analytics solutions from Pivods.",
		images: ["https://pivods.com/og-services.png"],
	},
};
export default function PivodsServices() {
	return (
		<>
			<Script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(servicesSchema),
				}}
				strategy="afterInteractive"
			/>
			<Nav />
			<main>
				<section className="h-[35vh] lg:h-[50vh] w-full flex justify-center items-center">
					<Image
						src="/Wave-line.png"
						alt="background-wave"
						fill
						className="object-cover -z-10 opacity-20"
						priority
					/>

					<div
						className={`${layoutStyles.container} flex flex-col items-center`}
					>
						<h1 className="text-3xl md:text-5xl font-bold mb-5 text-gray-900 dark:text-gray-100">
							Services
						</h1>
						<p className="font-semibold text-center max-w-2xl max-lg:w-full">
							Every challenge deserves the right solution. Our
							services are designed to{" "}
							<span className="text-primary">
								streamline operations
							</span>
							,{" "}
							<span className="text-primary">unlock growth</span>,
							and{" "}
							<span className="text-primary">
								future-proof your business
							</span>
							. Explore how we turn complexity into clarity.
						</p>
					</div>
				</section>
				<Skeleton />
				<Services />
				<CtaBanner
					ctaText={"Have You Found the Right Service Yet?"}
					smallText={
						<>
							If you already have, we’re ready to help bring it to
							life. If not, don’t worry — we offer{" "}
							<span className="font-semibold text-primary">
								free consultation
							</span>{" "}
							to uncover your challenges and design the right
							solution. Either way, we’ll make sure your business
							moves forward with clarity and confidence.
						</>
					}
				/>
				<Footer />
			</main>
			<WhatsAppButton />
		</>
	);
}
