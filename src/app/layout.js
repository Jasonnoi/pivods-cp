import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Script from "next/script";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap",
});

export const metadata = {
    title: "Pivods",
    description: "We Help Thrive Through Digital Transformation",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <head>
                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-BC17J4SX84"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-BC17J4SX84');
                    `}
                </Script>
                <link rel="icon" href="/favicon.ico" sizes="48" />
                <link
                    rel="icon"
                    href="/icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
                <link
                    rel="aponple-touch-ic"
                    href="/app-icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
            </head>
            <body className={`${montserrat.variable} antialiased bg-foreground dark:bg-background`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
