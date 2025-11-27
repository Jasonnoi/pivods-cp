"use client";
import { Button } from "../global";
import { GridBackground } from "../ui/GridBackground";
import Image from "next/image";
import { clients } from "../../lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
    return (
        <section id="Hero" className="relative min-h-screen text-center">
            {/* <Spotlight /> */}
            <GridBackground>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[80%] flex flex-col items-center justify-center w-full">
                    <span className="bg-primary/20 text-primary px-4 py-1 rounded-full text-sm mb-4 backdrop-blur-md border border-gray-300 dark:border-gray-700">
                        🚀 Empowering Innovation
                    </span>

                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                        Transform Ideas Into <span className="text-primary">Impact</span>
                        <br className="hidden md:block" />
                        With Next-Gen Digital Solutions
                    </h1>

                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-8 text-center">
                        From startups to enterprises, we craft scalable solutions that unlock growth
                        — blending creativity, technology, and strategy to help you lead in the
                        digital era.
                    </p>

                    <Button
                        onClick={() => {
                            document
                                .getElementById("FreeConsultation")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-6 py-3 rounded-xl bg-primary hover:bg-primary/80 text-white shadow-lg transition"
                    >
                        Contact Us
                    </Button>
                </div>

                <div className="absolute bottom-16 left-0 w-full overflow-hidden">
                    <div className="flex items-center gap-1 w-full justify-center">
                        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
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
            </GridBackground>
        </section>
    );
}
