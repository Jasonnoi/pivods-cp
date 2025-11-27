"use client";

import { layoutStyles } from "../../style";
import { Footer } from "../../../components/section";
import portofolioData from "../../../mockupdata.js/portofolioData";
import Image from "next/image";
import { use } from "react";

// =========================
// TYPES
// =========================

interface DetailBlock {
    text: string;
}

interface PortofolioItem {
    Id: string;
    title: string;
    description: string;
    category: {
        label: string;
    };
    header: {
        src: string;
        alt: string;
    };
    summary: string;
    details?: DetailBlock[];
    button?: {
        label: string;
        link: string;
    };
    technologies?: string[];
}

// =========================
// COMPONENT: CONTENT
// =========================

function PortofolioContent({ content }: { content: PortofolioItem }) {
    if (!content) return null;

    return (
        <>
            <section className="pt-16 pb-8">
                <div
                    className={`${layoutStyles.container} grid md:grid-cols-2 gap-2 md:gap-10 items-start`}
                >
                    <div>
                        <h1 className="text-sm font-bold border-b border-primary pb-1 mb-5 w-max">
                            Summary
                        </h1>

                        <p className="text-md/8 font-semibold text-gray-700 dark:text-gray-300 mb-6">
                            {content.summary}
                        </p>

                        {content.details?.map((block, index) => (
                            <p
                                key={index}
                                className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
                            >
                                {block.text}
                            </p>
                        ))}

                        {content.button && (
                            <a
                                href={content.button.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-6 px-6 py-2 rounded-md bg-primary text-white font-medium shadow hover:bg-primary/90 transition"
                            >
                                {content.button.label}
                            </a>
                        )}
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="relative w-full aspect-video overflow-hidden">
                            <Image
                                src={content.header.src}
                                alt={content.header.alt}
                                fill
                                className="object-cover opacity-100 lg:opacity-80 hover:opacity-100 transition duration-500 ease-in-out transform hover:scale-150 hover:translate-y-10 hover:rotate-5"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-16">
                <div className={`${layoutStyles.container}`}>
                    <div className="border-t border-gray-700 mb-8"></div>

                    <div>
                        <h1 className="text-sm font-bold mb-3">Technologies</h1>
                        <ul className="list-disc pl-6 space-y-1 text-xs text-gray-800 dark:text-gray-200">
                            {content.technologies?.map((tech, i) => (
                                <li key={i}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

// =========================
// PAGE COMPONENT
// =========================

export default function PortofolioPostDetail({
    params,
}: {
    params: Promise<{ portofolioId: string }>;
}) {

    const { portofolioId } = use(params);

    const portofolio = (portofolioData as PortofolioItem[]).find(
        (item) => item.Id === portofolioId
    );

    if (!portofolio) {
        return <h1 className="text-center text-2xl py-20">Portofolio not found</h1>;
    }

    return (
        <main>
            <section className="h-[75vh] md:h-[65vh] w-full flex justify-center items-center relative">
                <Image
                    src={portofolio.header.src}
                    alt={portofolio.header.alt}
                    fill
                    className="object-cover -z-10 opacity-20"
                    priority
                />

                <div
                    className={`${layoutStyles.container} flex flex-col items-center relative z-10`}
                >
                    <span className="bg-primary/20 text-primary px-4 py-1 rounded-full text-xs mb-4 backdrop-blur-md border border-gray-300 dark:border-gray-700">
                        {portofolio.category.label}
                    </span>

                    <h1 className="text-3xl md:text-5xl font-bold mb-5 text-center text-gray-900 dark:text-gray-100 leading-relaxed">
                        {portofolio.title}
                    </h1>

                    <p className="font-semibold text-center mb-14 max-w-2xl text-gray-700 dark:text-gray-300">
                        {portofolio.description}
                    </p>
                </div>
            </section>

            <PortofolioContent content={portofolio} />

            <Footer />
        </main>
    );
}
