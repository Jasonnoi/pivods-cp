import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
};

export default function Button({ children, className = "", ...props }: ButtonProps) {
    return (
        <button
            className={`transition-all duration-200 font-medium cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
