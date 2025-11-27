import { cn } from "../../lib/utils";
import React from "react";
import { Button } from "../global";

// Props untuk BentoGrid
interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ className, children, ...props }) => {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

// Props untuk BentoGridItem
interface BentoGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    title: string;
    description: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    button?: boolean;
    textButton?: string;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
    className,
    title,
    description,
    header,
    icon,
    button = false,
    textButton = "View more",
    ...props
}) => {
    return (
        <div
            className={cn(
                "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
                className
            )}
            {...props}
        >
            {header}

            <div className="transition duration-200 group-hover/bento:translate-x-2">
                {icon}

                <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
                    {title}
                </div>

                <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
                    {description}
                </div>

                {button && (
                    <Button className="w-full mt-5 md:w-auto px-6 py-2 rounded-md bg-primary text-white text-xs font-semibold shadow-md hover:shadow-lg hover:bg-primary/90 transition duration-300 ease-in-out">
                        {textButton}
                    </Button>
                )}
            </div>
        </div>
    );
};
