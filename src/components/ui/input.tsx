"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";
import { Search } from "lucide-react";

// Tambahkan tipe props
export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    isSearch?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, isSearch = false, ...props }, ref) => {
        const radius = 100; // besar radius hover glow
        const [visible, setVisible] = React.useState(false);

        const mouseX = useMotionValue(0);
        const mouseY = useMotionValue(0);

        function handleMouseMove({
            currentTarget,
            clientX,
            clientY,
        }: React.MouseEvent<HTMLDivElement>) {
            const { left, top } = currentTarget.getBoundingClientRect();
            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
        }

        return (
            <motion.div
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
                            #00aaad,
                            transparent 80%
                        )
                    `,
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                className="w-full group/input rounded-lg p-[2px] transition duration-300"
            >
                <div className="relative w-full">
                    {/* Search icon */}
                    {isSearch && (
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 z-20" />
                    )}

                    <input
                        ref={ref}
                        type={type}
                        className={cn(
                            `shadow-input dark:placeholder-text-neutral-600
                            flex h-10 w-full rounded-md border-none bg-gray-50
                            ${isSearch ? "pl-10 pr-3" : "px-3"}
                            py-2 text-xs text-black transition duration-400
                            group-hover/input:shadow-none file:border-0 file:bg-transparent
                            file:text-sm file:font-medium placeholder:text-neutral-400
                            focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none
                            disabled:cursor-not-allowed disabled:opacity-50
                            dark:bg-zinc-900/90 backdrop-blur-lg dark:text-white dark:shadow-[0px_0px_1px_1px_#404040]
                            dark:focus-visible:ring-neutral-600`,
                            className
                        )}
                        {...props}
                    />
                </div>
            </motion.div>
        );
    }
);

Input.displayName = "Input";

export { Input };
