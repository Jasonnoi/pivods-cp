"use client";

import { layoutStyles } from "../../app/style";
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Footer() {
	const menu = [
		{ name: "Home", href: "#" },
		{ name: "About", href: "/testdark" },
		{ name: "Services", href: "#" },
		{ name: "Portofolio", href: "#" },
		{ name: "Blog", href: "#" },
	];
	return (
		<footer className="bg-gradient-to-b from-background to-primary/20  text-gray-300 py-12">
			<div className={layoutStyles.container}>
				{/* Top Section */}
				<div className="flex flex-col items-center text-center space-y-6">
					{/* Logo */}
					<div>
						<Image
							src="/Secondary_Logo.png"
							alt="Pivods Logo"
							width={150}
							height={45}
							priority
						/>
					</div>

					{/* Company Info */}
					<div>
						<p className="font-semibold text-white">
							PT Jembatan Digital Inovatif
						</p>
						<address className="not-italic text-xs leading-relaxed mt-2">
							Jl. Bumi Sukagalih Permai Blok D No 52, <br />
							Bandung 40115, Indonesia <br />
							Phone:{" "}
							<a
								href="tel:+62-813-82189198"
								className="text-primary hover:underline"
							>
								+62-813-82189198
							</a>{" "}
							<br />
							Email:{" "}
							<a
								href="mailto:info@pivods.com"
								className="text-primary hover:underline"
							>
								info@pivods.com
							</a>
						</address>
					</div>

					{/* Social Links */}
					<ul className="flex space-x-5 mt-4">
						<li>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-primary"
							>
								<FontAwesomeIcon icon={faFacebook} />
								<span className="sr-only">Facebook</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-primary"
							>
								<FontAwesomeIcon icon={faTwitter} />
								<span className="sr-only">Twitter</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-primary"
							>
								<FontAwesomeIcon icon={faYoutube} />
								<span className="sr-only">Youtube</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-primary"
							>
								<FontAwesomeIcon icon={faLinkedin} />
								<span className="sr-only">Linkedin</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-primary"
							>
								<FontAwesomeIcon icon={faInstagram} />
								<span className="sr-only">Instagram</span>
							</a>
						</li>
					</ul>
				</div>

				{/* Bottom Section */}
				<div className="mt-10 border-t border-gray-700 pt-6 flex flex-col gap-3 lg:flex-row items-center justify-between text-xs">
					<div className="flex space-x-8">
						{menu.map((item, i) => (
							<div
								key={i}
								className="relative group cursor-pointer"
							>
								<a
									href={item.href}
									className="text-gray-800 dark:text-gray-300 transition-colors duration-300 group-hover:text-black dark:group-hover:text-white"
								>
									{item.name}
								</a>
								<span
									className="
                            absolute left-0 -bottom-1 h-[1px] w-full
                            bg-black dark:bg-white
                            scale-x-0 group-hover:scale-x-100
                            origin-right group-hover:origin-left
                            transition-transform duration-300
                            "
								/>
							</div>
						))}
					</div>

					<p className="text-gray-400 text-center md:text-right">
						Copyright © 2025 PT Jembatan Digital Inovatif. All
						rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
