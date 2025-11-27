import { Nav, WhatsAppButton } from "../../components/global";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Timeline } from "../../components/ui/timeline";
import { Footer, About, FreeConsultation } from "../../components/section";
import { layoutStyles } from "../style";
import { clients } from "../../lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { GlowingEffect } from "../../components/ui/glowing-effect";
import CtaBanner from "../../components/ui/cta-banner";
import { aboutSchema } from "../../lib/json.ld";
import Script from "next/script";
export const metadata = {
	title: "About Us - Pivods Custom Software & Digital Innovation Solutions",
	description:
		"Pivods is a software house and digital agency from Indonesia, specializing in custom software development, mobile & desktop applications, information systems, AI, IoT, and data analytics solutions. We empower businesses with cutting-edge technology and digital innovation.",
	keywords: [
		// Brand & Positioning
		"Pivods",
		"Digital Innovation Pioneer",
		"Software House Indonesia",
		"Digital Agency Indonesia",
		"IT Solutions Partner",
		"Cutting Edge Technologies",
		// Core Service Keywords (English)
		"Custom Software",
		"Custom Software Development",
		"Application Development",
		"Web & App Development",
		"Mobile Application Development",
		"Desktop Application Development",
		"Information System Development",
		"Data Analytics Dashboard",
		"Machine Learning Development",
		"AI Automation",
		"IoT Development",
		"Digital Transformation Solutions",
		"Business Technology Solutions",
		// Core Service Keywords (Indonesian)
		"Jasa Pembuatan Software",
		"Jasa Pembuatan Aplikasi",
		"Jasa Pembuatan Website",
		"Website Company Profile",
		"Sistem Informasi",
		"Dashboard Data Analytics",
		"Pengembangan Aplikasi Mobile",
		"Pengembangan Aplikasi Desktop",
		"Jasa IT Profesional",
		"Solusi Teknologi Bisnis",
		"Startup IT Partner",
		"Jasa Website Murah Berkualitas",
	],
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://pivods.com/about",
		languages: {
			"id-ID": "https://pivods.com/id/about",
			"en-US": "https://pivods.com/en/about",
		},
	},
	openGraph: {
		title: "About Us | Pivods - Custom Software & Digital Innovation",
		description:
			"Discover Pivods, a software house and digital agency from Indonesia delivering custom software, mobile & desktop applications, AI, IoT, and digital transformation solutions for businesses.",
		url: "https://pivods.com/about",
		siteName: "Pivods",
		images: [
			{
				url: "https://pivods.com/og-about.png",
				width: 1200,
				height: 630,
				alt: "About Pivods - Custom Software & Digital Innovation",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "About Pivods - Custom Software & Digital Innovation",
		description:
			"Software house and digital agency from Indonesia, providing custom software, AI, IoT, and digital transformation solutions for business growth.",
		images: ["https://pivods.com/og-about.png"],
	},
};

export default function AboutUs() {
	const data = [
		{
			title: "Step 1",
			content: (
				<div>
					<p className="mb-4 text-xs font-bold uppercase text-neutral-800 md:text-sm dark:text-neutral-200">
						Understand Your Needs
					</p>
					<p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
						We start by listening to your goals and challenges, then
						turn them into clear requirements.
					</p>
				</div>
			),
		},
		{
			title: "Step 2",
			content: (
				<div>
					<p className="mb-4 text-xs font-bold uppercase text-neutral-800 md:text-sm dark:text-neutral-200">
						Design & Build Together
					</p>
					<p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
						We create the blueprint and develop your solution step
						by step, keeping you involved throughout.
					</p>
				</div>
			),
		},
		{
			title: "Step 3",
			content: (
				<div>
					<p className="mb-4 text-xs font-bold uppercase text-neutral-800 md:text-sm dark:text-neutral-200">
						Launch & Support
					</p>
					<p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
						We deploy your product and stay with you to ensure
						smooth operation and continuous improvement.
					</p>
				</div>
			),
		},
	];

	return (
		<>
			<Script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(aboutSchema),
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
							About
						</h1>
						<p className="font-semibold text-center">
							Let’s deepen our introduction — would you like to
							start?
						</p>
					</div>
				</section>
				<About />
				<section className="min-h-max w-full">
					<div
						className={`${layoutStyles.container} relative py-10 md:pt-50`}
					>
						{/* Content */}
						<div className="flex flex-wrap md:flex-nowrap items-start justify-center gap-6 md:gap-12 mx-auto relative">
							<div className="w-full relative">
								<div className="absolute inset-0 bg-primary/50 blur-[200px] -z-10"></div>
								<div className="block h-84 w-full overflow-hidden list-none items-center justify-center">
									<div className="relative h-full p-1 md:p-2">
										<GlowingEffect
											blur={0}
											borderWidth={3}
											spread={80}
											glow={true}
											disabled={false}
											proximity={64}
											inactiveZone={0.01}
										/>
										<div className="w-full flex items-center justify-center">
											<div className="w-full relative h-[400px]">
												<Image
													src={"/vision.png"}
													alt={
														"Pivods Vision, Mission, and Value"
													}
													className="object-contain w-full z-20 object-center border-none drop-shadow-[0_0_15px_#2b7475]"
													priority
													fill
												/>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="w-full text-left relative">
								<span className="bg-primary/20 text-primary h-fit px-4 py-2 rounded-full text-[15px] backdrop-blur-md">
									What Pivods Stand For
								</span>
								<h2 className="text-4xl max-md:text-md font-bold my-6 text-left text-white dark:text-gray-100">
									We’re not Just a Vendor,{" "}
									<span className="text-primary">
										But a Long-term Partner.{" "}
									</span>
								</h2>

								<p className="mb-3 text-gray-300 text-start">
									At Pivods, technology is more than tools —
									it{" "}
									<span className="font-semibold text-primary">
										drives growth
									</span>
									,{" "}
									<span className="font-semibold text-primary">
										cuts cost
									</span>
									, and{" "}
									<span className="font-semibold text-primary">
										unlocks opportunities
									</span>
									. Guided by our vision of{" "}
									<span className="font-semibold text-primary">
										accelerating Indonesia’s digital
										transformation
									</span>
									, we act as a{" "}
									<span className="font-semibold text-primary">
										strategic partner
									</span>{" "}
									delivering adaptive software, automation,
									and{" "}
									<span className="font-semibold text-primary">
										context-driven innovation
									</span>
									. We believe in{" "}
									<span className="font-semibold text-primary">
										long-term partnerships
									</span>{" "}
									that help businesses{" "}
									<span className="font-semibold text-primary">
										lead with confidence
									</span>{" "}
									in the digital era. Our{" "}
									<span className="font-semibold text-primary">
										Core Values
									</span>{" "}
									are shown below.
								</p>

								<div className="grid grid-cols-2 gap-4">
									<div className="flex items-center gap-3">
										<CheckCircle
											color="#00aaad"
											size={20}
										/>
										<span className="text-gray-300">
											Customer-centric innovation.
										</span>
									</div>

									<div className="flex items-center gap-3">
										<CheckCircle
											color="#00aaad"
											size={20}
										/>
										<span className="text-gray-300">
											Affordabality with quality.
										</span>
									</div>

									<div className="flex items-center gap-3">
										<CheckCircle
											color="#00aaad"
											size={20}
										/>
										<span className="text-gray-300">
											Agility and speed.
										</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle
											color="#00aaad"
											size={20}
										/>
										<span className="text-gray-300">
											Integrity and transparency
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className=" w-full overflow-hidden">
					<div className="flex items-center gap-1 w-full justify-center">
						<FontAwesomeIcon
							icon={faStar}
							className="text-yellow-400"
						/>
						<FontAwesomeIcon
							icon={faStar}
							className="text-yellow-400"
						/>
						<FontAwesomeIcon
							icon={faStar}
							className="text-yellow-400"
						/>
						<FontAwesomeIcon
							icon={faStar}
							className="text-yellow-400"
						/>
						<FontAwesomeIcon
							icon={faStar}
							className="text-yellow-400"
						/>
					</div>
					<p className="text-gray-600 mt-3 dark:text-gray-400 text-center">
						Trusted by over 100 companies and organizations
					</p>
					<div className="flex items-center gap-x-10 mt-1 max-md:gap-x-5 animate-marquee">
						{clients.concat(clients).map((client, index) => (
							<div
								key={index}
								className="w-28 h-28 max-md:w-20 max-md:h-20 relative opacity-40 flex-shrink-0"
							>
								<Image
									src={client.logo}
									alt={client.alt}
									className="object-contain"
									priority
									fill
								/>
							</div>
						))}
					</div>
				</div>
				<CtaBanner
					ctaText={"Ready to Grow with the Right Partner?"}
					smallText={
						<>
							We’re more than a service provider — we’re your{" "}
							<span className="font-semibold text-primary">
								strategic partner
							</span>
							. From tackling outdated systems to unlocking new
							opportunities, our{" "}
							<span className="font-semibold text-primary">
								free consultation
							</span>{" "}
							helps you chart the path toward efficiency, growth,
							and long-term success. Let’s move forward, together.
						</>
					}
				/>

				<section className="bg-background mb-24">
					<div className={`${layoutStyles.container}`}>
						<Timeline
							data={data}
							title={
								"Our Steps to Bring Your Vision Into Reality"
							}
							description={
								"We know trusting a software team is a big decision. That’s why we created a simple, proven path that shows exactly how we’ll work with you — from idea to launch — so you can move forward with confidence."
							}
						/>
					</div>
				</section>
				<FreeConsultation />

				<Footer />
			</main>
			<WhatsAppButton />
		</>
	);
}
