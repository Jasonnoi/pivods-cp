import { Nav, WhatsAppButton } from "@/components/global";
import { Footer } from "@/components/section";
export default function Bloglayout({ children }) {
    return (
        <>
            <Nav />
            {children}
            <WhatsAppButton />
        </>
    );
}
