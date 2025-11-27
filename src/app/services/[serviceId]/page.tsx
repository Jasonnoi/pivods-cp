import { layoutStyles } from "../../style";
import Image from "next/image";
import { pivodsServices } from "../../../lib/detailservice";
import { notFound } from "next/navigation";
import { Footer } from "../../../components/section";
import Link from "next/link";
import { use } from "react";

type ServiceId = keyof typeof pivodsServices;

export default async function DetailServices({
    params,
}: {
    params: Promise<{ serviceId: ServiceId }>;
}) {
    const { serviceId } = use(params);
    const service = pivodsServices[serviceId];

    // Jika serviceId tidak ditemukan → 404
    if (!service) {
        notFound();
    }

    return (
        <>
            <section className={layoutStyles.container}>
                <section className="h-[35vh] lg:h-[50vh] w-full flex justify-center items-center">
                    <Image
                        src="/Wave-line.png"
                        alt="background-wave"
                        fill
                        className="object-cover -z-10 opacity-20"
                        priority
                    />

                    <div className={`${layoutStyles.container} flex flex-col items-center`}>
                        <h1 className="text-3xl md:text-5xl font-bold mb-5 text-gray-900 dark:text-gray-100">
                            {`${service.header} Services`}
                        </h1>
                        <p className="font-semibold text-center max-w-2xl max-lg:w-full">
                            Every challenge deserves the right solution. Our services are designed
                            to <span className="text-primary">streamline operations</span>,{" "}
                            <span className="text-primary">unlock growth</span>, and{" "}
                            <span className="text-primary">future-proof your business</span>.
                            Explore how we turn complexity into clarity.
                        </p>
                    </div>
                </section>
                <div className="wraper">
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-8 max-lg:col-span-12 max-lg:py-20">
                            <div className="w-full h-80 relative">
                                <Image
                                    src={service.bannerImage}
                                    alt={`Pivods Service For ${service.header} 1`}
                                    fill
                                    className="object-cover object-center rounded-md"
                                    priority
                                />
                            </div>
                            {service.title}
                            {service.whatIs}
                            {service.trends}

                            <div className="grid grid-cols-12 gap-3 mt-3">
                                <div className="col-span-6 col:col-span-12">
                                    <div className="w-full h-40 bg-white relative rounded-md">
                                        <Image
                                            src={service.flexImages[0]}
                                            alt={`Pivods Service For ${service.header} 2`}
                                            fill
                                            className="object-cover object-center rounded-md"
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="col-span-6 col:col-span-12">
                                    <div className="w-full h-40 bg-white relative rounded-md">
                                        <Image
                                            src={service.flexImages[1]}
                                            alt={`Pivods Service For ${service.header} 3`}
                                            fill
                                            className="object-cover object-center rounded-md"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mt-[40px]">
                                <h3 className="font-medium font-base-font text-white text-[35px] leading-[130.5%] mb-[20px] md:text-[25px]">
                                    Why your Businesses Need{" "}
                                    <span className="text-primary font-semibold">
                                        {service.header}
                                    </span>
                                </h3>
                                <div className="w-full h-full gap-5 grid grid-cols-3 max-md:grid-cols-2 max-lg:grid-cols-3 max-lg:gap-x-3 max-lg:gap-y-5">
                                    {/* Pain Point 1 */}
                                    {service.importance.map((problem, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-start gap-3 bg-primary/20 rounded-md p-3 text-left"
                                        >
                                            <div className="w-full flex items-center gap-2">
                                                <div className="p-3 rounded-xl bg-primary/10 ">
                                                    {problem.icon}
                                                </div>
                                                <h4 className=" text-[20px] font-semibold max-md:text-[15px]">
                                                    {problem.header}
                                                </h4>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 w-full">
                                                {problem.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="max-w-[590px] mt-[40px] relative">
                                <div className="absolute top-0 left-0 w-[80vw] max-w-[800px] aspect-square rounded-full bg-primary/30 blur-[25vw] -z-10"></div>

                                <h3 className="font-medium font-base-font text-white text-[35px] leading-[130.5%] mb-[20px] md:text-[25px]">
                                    Our <span className="text-primary">Capabilities</span>
                                </h3>
                                <p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
                                    Massa volutpat odio facilisis purus sit elementum. Non, sed
                                    velit dictum quam. Id risus pharetra est, at rhoncus, nec
                                    ullamcorper tincidunt. Id aliquet duis sollicitudin diam.
                                </p>
                                <ul>
                                    <li className="py-[10px] text-white pl-[35px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-primary before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
                                        Non saed velit dictum quam risus pharetra esta.
                                    </li>
                                    <li className="py-[10px] text-white pl-[35px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-primary before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
                                        Id risus pharetra est, at rhoncus, nec ullamcorper
                                        tincidunt.
                                    </li>
                                    <li className="py-[10px] text-white pl-[35px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-primary before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
                                        Hac nibh fermentum nisi, platea condimentum cursus.
                                    </li>
                                    <li className="py-[10px] text-white pl-[35px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-primary before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
                                        Massa volutpat odio facilisis purus sit elementum.
                                    </li>
                                    <li className="py-[10px] text-white pl-[35px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-primary before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
                                        Elit curabitur amet risus bibendum.
                                    </li>
                                </ul>
                            </div>
                            <h3 className="font-medium mt-[40px] font-base-font text-white text-[35px] leading-[130.5%] mb-[20px] md:text-[25px] ">
                                Why Our Clients — and{" "}
                                <span className="text-primary font-semibold">
                                    You Should Choose Pivods
                                </span>
                            </h3>
                            <div className="w-full grid mt-[40px] grid-cols-2 gap-5 relative">
                                <div className="w-full border-1 border-primary p-5 flex flex-col gap-2 rounded-md">
                                    <h1 className="text-primary text-[25px]">01</h1>
                                    <h1 className="text-[25px]">Tailored Solutions</h1>
                                    <p className="text-[16px] font-normal text-[#D8D8D8]">
                                        We don’t believe in one-size-fits-all. Every solution is{" "}
                                        <span className="text-primary font-semibold">
                                            custom-built
                                        </span>{" "}
                                        to match your business goals and challenges.
                                    </p>
                                </div>
                                <div className="w-full border-1 border-primary p-5 flex flex-col gap-2 rounded-md">
                                    <h1 className="text-primary text-[25px]">02</h1>
                                    <h1 className="text-[25px]">On-Time Guaranteed</h1>
                                    <p className="text-[16px] font-normal text-[#D8D8D8]">
                                        Deadlines matter. With{" "}
                                        <span className="text-primary font-semibold">
                                            proven workflows
                                        </span>{" "}
                                        and reliable project management, we ensure your project is
                                        delivered{" "}
                                        <span className="text-primary font-semibold">
                                            right on schedule
                                        </span>
                                        .
                                    </p>
                                </div>
                                <div className="w-full border-1 border-primary p-5 flex flex-col gap-2 rounded-md">
                                    <h1 className="text-primary text-[25px]">03</h1>
                                    <h1 className="text-[25px]">Scalable & Future-Proof</h1>
                                    <p className="text-[16px] font-normal text-[#D8D8D8] ">
                                        Our services are designed to{" "}
                                        <span className="text-primary font-semibold">
                                            grow with you
                                        </span>
                                        , so you never outgrow your technology.
                                    </p>
                                </div>
                                <div className="w-full border-1 border-primary p-5 flex flex-col gap-2 rounded-md">
                                    <h1 className="text-primary text-[25px]">04</h1>
                                    <h1 className="text-[25px]">Trusted Partnership</h1>
                                    <p className="text-[16px] font-normal text-[#D8D8D8] ">
                                        We act as your{" "}
                                        <span className="text-primary font-semibold">
                                            long-term partner
                                        </span>
                                        , ensuring every step brings measurable impact.
                                    </p>
                                </div>
                            </div>

                            <div className="max-w-[590px] mt-[40px]">
                                <h3 className="font-medium font-base-font text-white text-[35px] leading-[130.5%] mb-[20px] md:text-[25px]">
                                    Our{" "}
                                    <span className="text-primary font-semibold">Work Process</span>
                                </h3>
                                <ul>
                                    <li className="py-[10px] text-white pl-[35px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-primary before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
                                        Discovery & Planning — We start by understanding your goals
                                        and mapping out the right strategy.
                                    </li>
                                    <li className="py-[10px] text-white pl-[35px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-primary before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
                                        Design & Development — Turning ideas into sleek, functional,
                                        and scalable solutions.
                                    </li>
                                    <li className="py-[10px] text-white pl-[35px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-primary before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
                                        Testing & Launch — Rigorous QA ensures everything runs
                                        smoothly before going live.
                                    </li>
                                    <li className="py-[10px] text-white pl-[35px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-primary before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
                                        Maintain & Support — Continuous updates, improvements, and
                                        reliable support to keep your business running seamlessly.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-4 pl-10 max-lg:col-span-12 max-lg:pl-0">
                            <div className="">
                                <div className="">
                                    <h3
                                        className="text-[23px] relative text-white text-left font-base-font capitalize pb-[20px] font-bold
                            before:content-[''] before:bg-primary before:w-[55px] before:absolute before:h-[4px] before:left-0 before:bottom-0 before:rounded-[10px]
                            after:content-[''] after:bg-[#383636] after:w-[80%] after:absolute after:h-[4px] after:left-[65px] after:bottom-0 after:rounded-[10px]
                            "
                                    >
                                        Other <span className="text-primary">Services</span>
                                    </h3>
                                    <ul>
                                        <li className="text-[16px] mt-[15px] group transition-all pt-[6px] relative">
                                            <Link
                                                href="service-single.html"
                                                className="text-[#D8D8D8] group hover:text-primary text-[16px] font-semibold block transition-all"
                                            >
                                                Web Development{" "}
                                                <span className="inline-block w-[30px] h-[30px] leading-[30px] bg-[#2c2c2c] hover:bg-primary transition-all absolute right-0 text-center rounded-[50%] text-[18px]">
                                                    5
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="text-[16px] mt-[15px] group transition-all pt-[6px] relative">
                                            <Link
                                                href="service-single.html"
                                                className="text-[#D8D8D8] group hover:text-primary text-[16px] font-semibold block transition-all"
                                            >
                                                App Development{" "}
                                                <span className="inline-block w-[30px] h-[30px] leading-[30px] bg-[#2c2c2c] hover:bg-primary transition-all absolute right-0 text-center rounded-[50%] text-[18px]">
                                                    7
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="text-[16px] mt-[15px] group transition-all pt-[6px] relative">
                                            <Link
                                                href="service-single.html"
                                                className="text-[#D8D8D8] group hover:text-primary text-[16px] font-semibold block transition-all"
                                            >
                                                Software Development{" "}
                                                <span className="inline-block w-[30px] h-[30px] leading-[30px] bg-[#2c2c2c] hover:bg-primary transition-all absolute right-0 text-center rounded-[50%] text-[18px]">
                                                    3
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="text-[16px] mt-[15px] group transition-all pt-[6px] relative">
                                            <Link
                                                href="service-single.html"
                                                className="text-[#D8D8D8] group hover:text-primary text-[16px] font-semibold block transition-all"
                                            >
                                                Social Media Marketing{" "}
                                                <span className="inline-block w-[30px] h-[30px] leading-[30px] bg-[#2c2c2c] absolute right-0 text-center rounded-[50%] text-[18px]">
                                                    8
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="text-[16px] mt-[15px] group transition-all pt-[6px] relative">
                                            <Link
                                                href="service-single.html"
                                                className="text-[#D8D8D8] group hover:text-primary text-[16px] font-semibold block transition-all"
                                            >
                                                Graphic Design{" "}
                                                <span className="inline-block w-[30px] h-[30px] leading-[30px] bg-[#2c2c2c] hover:bg-primary transition-all absolute right-0 text-center rounded-[50%] text-[18px]">
                                                    6
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="text-[16px] mt-[15px] group transition-all pt-[6px] relative">
                                            <Link
                                                href="service-single.html"
                                                className="text-[#D8D8D8] group hover:text-primary text-[16px] font-semibold block transition-all"
                                            >
                                                Brand Identity{" "}
                                                <span className="inline-block w-[30px] h-[30px] leading-[30px] bg-[#2c2c2c] hover:bg-primary transition-all absolute right-0 text-center rounded-[50%] text-[18px]">
                                                    2
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
