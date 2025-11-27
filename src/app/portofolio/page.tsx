"use client";
import { Footer } from "../../components/section";
import Image from "next/image";
import { layoutStyles } from "../style";
import { useState } from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import portofolioData from "../../mockupdata.js/portofolioData";
import { Pagination } from "../../components/global";
import { useRouter } from "next/navigation";
import { portfolioSchema } from "../../lib/json.ld";
import Head from "next/head";
import Script from "next/script";
export default function Portofolio() {
	const router = useRouter();
	const [currCategory, setCurrCategory] = useState("all");
	const [currentPage, setCurrentPage] = useState(1);
	const category = [
		{ label: "All", value: "all" },
		{ label: "Company Profile", value: "company-profile" },
		{ label: "Information System", value: "information-system" },
		{ label: "Mobile Application", value: "mobile-app" },
		{ label: "IoT Development", value: "iot-dev" },
	];

	// Filter data by category
	const filteredData = portofolioData.filter((item) => {
		const matchCategory =
			currCategory === "all"
				? true
				: item.category.value === currCategory;

		return matchCategory;
	});

	// Pagination setup
	const rowsPerPage = 6;
	const totalRows = filteredData.length;
	const startIndex = (currentPage - 1) * rowsPerPage;
	const paginatedData = filteredData.slice(
		startIndex,
		startIndex + rowsPerPage
	);

	return (
		<main>
			<Head>
				<title>
					Portfolio - Pivods Custom Software & Digital Projects
				</title>
				<meta
					name="description"
					content="Check out Pivods portfolio showcasing custom software, web development, mobile & desktop apps, AI, IoT, and data analytics projects."
				/>
				<meta
					name="keywords"
					content="Pivods, Portfolio, Custom Software, Web Development, Mobile Apps, Desktop Apps, AI, IoT, Data Analytics, Jasa Pembuatan Software, Jasa IT Profesional, Digital Agency Indonesia"
				/>
				<link rel="canonical" href="https://pivods.com/portfolio" />
				{/* OpenGraph */}
				<meta
					property="og:title"
					content="Portfolio | Pivods - Custom Software & Digital Projects"
				/>
				<meta
					property="og:description"
					content="Explore Pivods digital projects: custom software, mobile & desktop apps, AI, IoT, and data analytics."
				/>
				<meta
					property="og:url"
					content="https://pivods.com/portfolio"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://pivods.com/og-portfolio.png"
				/>
				{/* Twitter Card */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Pivods Portfolio - Custom Software & Digital Projects"
				/>
				<meta
					name="twitter:description"
					content="Showcasing Pivods projects in software, web, AI, IoT, and analytics solutions."
				/>
				<meta
					name="twitter:image"
					content="https://pivods.com/og-portfolio.png"
				/>
			</Head>

			{/* JSON-LD */}
			<Script type="application/ld+json" strategy="afterInteractive">
				{JSON.stringify(portfolioSchema)}
			</Script>
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
						Portofolio
					</h1>
					<p className="font-semibold text-center">
						We are grateful for the opportunity to share the best of
						what we have created.
					</p>
				</div>
			</section>

			<section id="our-portofolio" className="bg-background pt-24">
				<div className={`${layoutStyles.container} head-category`}>
					<div className="category flex w-full justify-center flex-col md:flex-row md:flex-wrap">
						{category.map((item, i) => {
							const isActive = currCategory === item.value;
							return (
								<div
									key={i}
									className={`cursor-pointer mx-3 text-sm font-medium border-b md:border-none pt-3 transition duration-300 ${isActive
										? "text-black dark:text-white"
										: "text-gray-800 dark:text-gray-500 hover:text-black dark:hover:text-white border-gray-700 hover:border-white"
										}`}
									onClick={() => {
										setCurrCategory(item.value),
											setCurrentPage(1);
									}}
								>
									{item.label}
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<section className="bg-background mb-24">
				<BentoGrid
					className={`${layoutStyles.container} md:grid-cols-2 bg-background pt-24 md:auto-rows-[30rem]`}
				>
					{paginatedData.map((item, i) => (
						<BentoGridItem
							key={i}
							title={item.title}
							description={item.description}
							header={
								<div className="relative w-full aspect-video rounded-md overflow-hidden">
									<Image
										src={item.header.src}
										alt={item.header.alt}
										fill
										className="object-cover opacity-100 lg:opacity-60 hover:opacity-100 transition duration-500 ease-in-out transform hover:scale-150 hover:translate-y-10 hover:rotate-5"
										priority
									/>
								</div>
							}
							icon={
								<>
									<span className="bg-primary/20 text-primary px-4 py-1 rounded-full text-xs mb-4 backdrop-blur-md border border-gray-300 dark:border-gray-700">
										{item.category.label}
									</span>
									<div className="my-5"></div>
								</>
							}
							button={true}
							className={`cursor-pointer`}
							onClick={() =>
								router.push(`/portofolio/${item.Id}`)
							}
						/>
					))}
				</BentoGrid>
				<Pagination
					totalRows={totalRows}
					rowsPerPage={rowsPerPage}
					currentPage={currentPage}
					onPageChange={(page) => {
						setCurrentPage(page);
						document
							.getElementById("our-portofolio")
							?.scrollIntoView({ behavior: "smooth" });
					}}
				/>
			</section>
			<Footer />
		</main>
	);
}
