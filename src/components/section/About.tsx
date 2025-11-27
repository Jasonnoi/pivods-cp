"use client";

import { layoutStyles } from "../../app/style";
import Image from "next/image";
export default function About({ active = "", className = "", imgSize = "" }) {
    return (
        <section
            id="About"
            className={`relative w-full flex flex-col items-center justify-center text-center mt-20 ${className}`}
        >
            <div className={`${layoutStyles.container}`}>
                <div className={`w-full h-max flex gap-10 max-lg:flex-col-reverse`}>
                    <div className="w-1/2 max-lg:w-full flex gap-10 relative">
                        <div className="absolute top-0 left-0 w-[80vw] max-w-[800px] aspect-square rounded-full bg-primary/30 blur-[25vw] -z-10"></div>

                        <div className="flex flex-col gap-2 items-center max-md:hidden">
                            <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                            <div className="w-[1px] h-full bg-white/80"></div>
                        </div>
                        <div className="w-full flex flex-col gap-y-5 items-start">
                            <span className="bg-primary/20 text-primary h-fit px-4 py-2 rounded-full text-[15px] backdrop-blur-md">
                                About Pivods
                            </span>
                            <h2 className="text-4xl max-md:text-md font-bold mb-6 text-left text-white dark:text-gray-100">
                                Your Partner in{" "}
                                <span className="text-primary">Cutting-Edge Technologies</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-8 text-left">
                                For more than 3 years, Pivods part of PT Jembatan Digital Inovatif
                                has been building powerful digital ecosystems for global clients.
                                From sleek landing pages and corporate websites to advanced
                                technologies like IoT, Machine Learning, Big Data, and automation,
                                we specialize in creating solutions that move businesses forward.
                                <br />
                                <br />
                                Our mission is simple: combine innovation and reliability to deliver
                                digital transformation that matters turning ambitious visions into
                                sustainable impact.
                            </p>
                            {active !== "about" && (
                                <div className="grid grid-cols-3 max-lg:gap-3 gap-8">
                                    <div className="text-center md:text-left">
                                        <h2 className="text-3xl font-bold text-white">
                                            100
                                            <span className="text-primary-3">+</span>
                                        </h2>
                                        <p className="mt-2 text-white/60">
                                            Projects Successfully Delivered
                                        </p>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h2 className="text-3xl font-bold text-white">
                                            98
                                            <span className="text-primary-3">%</span>
                                        </h2>
                                        <p className="mt-2 text-white/60">
                                            Client Satisfaction Rate
                                        </p>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h2 className="text-3xl font-bold text-white">
                                            15
                                            <span className="text-primary-3">+</span>
                                        </h2>
                                        <p className="mt-2 text-white/60">
                                            Global Business Partners
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-1/2 h-full max-lg:w-full pl-10 max-lg:pl-0 flex items-center justify-end text-black">
                        <div
                            className={`w-full h-[27rem] rounded-xl relative overflow-hidden border-none ${imgSize}`}
                        >
                            {/* <div className=" top-0 left-0 w-full h-full bg-gradient-to-t from-transparent  absolute z-10"></div> */}
                            <Image
                                src={"/cuttingedge.jpg"}
                                alt={"Pivods cutting edge tech"}
                                className="object-cover object-center rounded-xl border-none opacity-80"
                                priority
                                fill
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
