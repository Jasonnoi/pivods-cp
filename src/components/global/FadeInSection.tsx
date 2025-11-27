"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInSectionProps {
	children: ReactNode;
	direction?: Direction;
	delay?: number;
}

export default function FadeInSection({
	children,
	direction = "up",
	delay = 0,
}: FadeInSectionProps) {
	const { ref, inView } = useInView({
		triggerOnce: false,
		threshold: 0.2,
	});

	const variants: Variants = {
		hidden: {
			opacity: 0,
			x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
			y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
			transition: { duration: 0.6 },
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: { duration: 0.6, delay },
		},
	};

	return (
		<motion.div
			ref={ref}
			variants={variants}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
		>
			{children}
		</motion.div>
	);
}
