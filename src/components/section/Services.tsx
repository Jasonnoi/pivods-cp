import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { layoutStyles } from "../../app/style";
import { services } from "../../lib/utils";
export default function Services() {
	return (
		<section id="Services" className="mt-24">
			<div className={layoutStyles.container}>
				<div className="text-center">
					<div className="sticky top-0 right-0 left-0 z-10 max-w-3xl mx-auto text-center w-full">
						<span className="bg-primary/20 text-primary h-fit px-4 py-1 rounded-full text-[15px] backdrop-blur-md">
							Our Services
						</span>
						<h2 className="text-4xl font-bold my-6 text-black dark:text-white">
							We Make Technology
							<span className="text-primary">
								{" "}
								That Drives Growth
							</span>
						</h2>

						<p className="text-gray-500 dark:text-gray-400 leading-relaxed">
							Transform your business with technology that solves
							real challenges and drives measurable growth. From
							smart websites to IoT, AI, and automation — get
							solutions that help you scale faster.
						</p>
					</div>
				</div>
				<StickyScroll content={services} />
			</div>
		</section>
	);
}
