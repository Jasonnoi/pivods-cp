"use client";

import { ThreeDMarquee } from "../ui/3d-marquee";
import { BackgroundBeamsWithCollision } from "../ui/backgrounds-beams-with-collision";

export default function Portfolio() {
    const images = [
        "/portofolio/black.jpg",
        "/portofolio/black.jpg",
        "/portofolio/black.jpg",
        "/portofolio/srusun-adm-dashboard.png",
        "/portofolio/srusun-adm-login.png",
        "/portofolio/srusun-adm-resident.png",
        "/portofolio/srusun-adm-dlt.png",
        "/portofolio/black.jpg",
        "/portofolio/black.jpg",
        "/portofolio/black.jpg",
        "/portofolio/black.jpg",

        "/portofolio/sipbanja2-map.png",
        "/portofolio/sipbanja2-login.png",
        "/portofolio/sipbanja2-lap.png",
        "/portofolio/sipbanja2-dash.png",
        "/portofolio/black.jpg",
        "/portofolio/black.jpg",
        "/portofolio/black.jpg",
        "/portofolio/black.jpg",

        "/portofolio/multilink-2.png",
        "/portofolio/multilink.png",
        "/portofolio/multilink-3.png",
        "/portofolio/multilink-4.png",
        "/portofolio/black.jpg",
        "/portofolio/black.jpg",
        "/portofolio/black.jpg",
        "/portofolio/black.jpg",
        "/portofolio/black.jpg",
        "/portofolio/black.jpg",

        "/portofolio/jarrdin-member.png",
        "/portofolio/jarrdin-member-2.png",
        "/portofolio/black.jpg",
    ];
    return (
        <section
            id="Portfolio"
            className="relative min-h-screen w-full flex flex-col items-center justify-center text-center mt-24"
        >
            <BackgroundBeamsWithCollision>
                <div className="absolute top-0 z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">
                        <span className="text-primary">Our</span> Portfolio
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                        Pivods also known as Pioneer Inovasi Digital is a software house product.
                        Founded in 2022, we have successfully delivered over 150 projects across
                        various sectors, helping
                    </p>
                </div>
                <ThreeDMarquee images={images} />
            </BackgroundBeamsWithCollision>
        </section>
    );
}
