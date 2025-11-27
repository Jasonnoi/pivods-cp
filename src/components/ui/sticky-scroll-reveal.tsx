"use client";

import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { GlowingEffect } from "./glowing-effect";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";


export interface StickyContentItem {
	title: string;
	hook: ReactNode;
	link: string;
	description: string;
	usage: {
		name: string;
		icon: ReactNode;
	}[];
	content: ReactNode;
}

interface StickyScrollProps {
	content: StickyContentItem[];
	contentClassName?: string;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({
	content,
	contentClassName,
}) => {
	const [activeCard, setActiveCard] = useState(0);
	const containerRef = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	const cardLength = content.length;

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		if (cardLength <= 1) return;

		const step = 1 / (cardLength - 1);
		const breakpoints = content.map((_, index) => index * step);

		const closestIndex = breakpoints.reduce((acc, bp, idx) => {
			return Math.abs(latest - bp) < Math.abs(latest - breakpoints[acc])
				? idx
				: acc;
		}, 0);

		setActiveCard(closestIndex);
	});

	return (
		<motion.div
			ref={containerRef}
			className="relative flex justify-between gap-5 max-lg:mt-28 mt-12 max-lg:flex-col"
		>
			{/* LEFT SIDE CONTENT */}
			<div className="w-4/6 max-lg:w-full min-lg:flex-1">
				{content.map((item, index) => (
					<div
						key={index}
						className={`${index !== content.length - 1 ? "mb-52" : ""
							} flex flex-col justify-center h-[30rem] max-lg:h-[45rem]`}
					>
						{/* Mobile Image */}
						<div className="w-full relative min-lg:hidden">
							<div className="absolute inset-0 bg-primary/50 blur-[200px] -z-10"></div>

							<div className="block h-84 w-full overflow-hidden">
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
										<div className="w-3/4 relative h-[300px]">
											{item.content ?? null}
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Text */}
						<span className="bg-primary/20 text-primary h-fit w-fit px-4 py-2 rounded-full text-[15px] backdrop-blur-md">
							{item.title}
						</span>

						<motion.h2
							initial={{ opacity: 0 }}
							animate={{ opacity: activeCard === index ? 1 : 0.3 }}
							className="text-4xl max-w-4xl font-bold my-6 text-white dark:text-gray-100"
						>
							{item?.hook || "Not Yet Available"}
						</motion.h2>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: activeCard === index ? 1 : 0.3 }}
							className="text-kg max-w-3xl text-slate-300"
						>
							{item.description}
						</motion.p>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: activeCard === index ? 1 : 0.3 }}
							className="text-slate-300"
						>
							{/* Usage */}
							<div className="max-w-3xl mt-5 grid grid-cols-2 gap-y-2 gap-x-5">
								{item.usage.map((usg, i) => (
									<div key={i} className="flex gap-2 items-center">
										{usg.icon}
										{usg.name}
									</div>
								))}
							</div>

							{/* Button */}
							<div className="flex items-center gap-2 mt-8">
								<Link
									className="px-6 py-3 w-fit rounded-xl bg-primary hover:bg-primary/80 text-white shadow-lg transition"
									href={item.link}
								>
									<span>Explore More</span>
								</Link>
								<div className="bg-primary-3 text-white p-3 rounded-full shadow-md">
									<ArrowUpRight size={20} />
								</div>
							</div>
						</motion.div>
					</div>
				))}
			</div>

			{/* RIGHT SIDE STICKY VISUAL */}
			<div className="sticky top-0 w-2/6 max-lg:hidden left-0">
				<div className="absolute inset-0 bg-primary/50 blur-[200px] -z-10"></div>

				<div
					className={`mt-[48px] sticky top-52 block h-100 w-full overflow-hidden ${contentClassName}`}
				>
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

						<div className="w-[90%] h-full relative">
							{content[activeCard].content ?? null}
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};
