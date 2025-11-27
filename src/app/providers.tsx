"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState, type ReactNode, type FC } from "react";

interface ProvidersProps {
    children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
        >
            {children}
        </ThemeProvider>
    );
};

export default Providers;
