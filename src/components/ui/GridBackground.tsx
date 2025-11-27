"use client";
import { cn } from "../../lib/utils";
import React, { useState, MouseEvent, HTMLAttributes, ReactNode } from "react";

interface GridBackgroundProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export function GridBackground({ children, className, ...props }: GridBackgroundProps) {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        setMouse({ x: e.clientX, y: e.clientY });
    };

    return (
        <div
            className="absolute h-screen w-full"
            onMouseMove={handleMouseMove}
            {...props}
        >
            <div
                className={cn("absolute inset-0 -z-10", "[background-size:40px_40px]", className)}
                style={{
                    backgroundImage: `linear-gradient(to right, color-mix(in srgb, var(--primary) 30%, transparent) 1px, transparent 1px),
                                    linear-gradient(to bottom, color-mix(in srgb, var(--primary) 30%, transparent) 1px, transparent 1px)`,
                    WebkitMaskImage: `radial-gradient(200px at ${mouse.x}px ${mouse.y}px, black 70%, transparent 100%)`,
                    maskImage: `radial-gradient(200px at ${mouse.x}px ${mouse.y}px, black 70%, transparent 100%)`,
                }}
            />

            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_3%,black)] dark:bg-black"></div>

            <div
                className="
                absolute top-25 md:top-0
                left-1/2 -translate-x-1/2
                w-[70vw] max-w-[800px] aspect-square 
                rounded-full bg-primary/30 
                blur-[20vw] sm:blur-[150px] 
                -z-10
                sm:left-0 sm:translate-x-0
            "
            ></div>

            <div
                className="
                absolute bottom-60 md:bottom-0 
                left-1/2 -translate-x-1/2
                w-[70vw] max-w-[600px] aspect-square 
                rounded-full bg-primary/20 
                blur-[15vw] sm:blur-[120px] 
                -z-10
                sm:right-0 sm:left-auto sm:translate-x-0
            "
            ></div>

            <div className="h-full w-full z-20">{children}</div>
        </div>
    );
}
