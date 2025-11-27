import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
    Building2,
    Handshake,
    LineChart,
    ShieldCheck,
    Globe2,
    Trophy,
    Settings,
    Gauge,
    Database,
    ShieldAlert,
    Clock,
    TrendingUp,
    BarChart3,
    MessageSquare,
    Cpu,
    Users,
    LayoutDashboard,
    Activity,
    Box,
    Wrench,
    AlertTriangle,
    Star,
    BarChart,
    Smartphone,
    Monitor,
    ShoppingBag,
    BriefcaseBusiness,
    Layers,
} from "lucide-react";
import Image from "next/image";
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const clients = [
    {
        name: "Injourney Airpors",
        alt: "Injourney Airpors - Pivods Client",
        logo: "/clients/injourney.png"
    },
    {
        name: "PUPR",
        alt: "Ministry Of Housing Project - Pivods Client",
        logo: "/clients/pupr.png"
    },
    {
        name: "SRusun",
        alt: "Smart Housing - Pivods Client",
        logo: "/clients/srusun.png"
    },
    {
        name: "BBWS Citarum",
        alt: "BBWS Citarum - Pivods Client",
        logo: "/clients/bbws.png"
    },
    {
        name: "KSIP Agro",
        alt: "KSIP Agro - Pivods Client",
        logo: "/clients/ksip.png"
    },
    {
        name: "TEDx",
        alt: "TEDx - Pivods Client",
        logo: "/clients/tedx.png"
    },
    {
        name: "Multilink Trans",
        alt: "Multilink Trans - Pivods Client",
        logo: "/clients/multilink.png"
    },
    {
        name: "Jardin Cihampelas",
        alt: "Jardin Cihampelas - Pivods Client",
        logo: "/clients/jardin.png"
    },
    {
        name: "HMPSArs",
        alt: "Architecture Student Association - Pivods Client",
        logo: "/clients/hmpsars.png"
    },


]

export const services = [
    {
        title: "Company Profile",
        hook: (
            <>
                Your Company Profile, Your Gateway to{" "}
                <span className="text-primary">Business Trust</span>
            </>
        ),
        link: "/services/company-profile",
        description:
            "A strong company profile website is your first impression in the digital world. It builds credibility, earns trust, and shows professionalism. Every company profile built by Pivods is SEO-friendly, making it easier for potential clients to find your business online. With better visibility and higher trust, your company profile becomes a growth engine — attracting more buyers, partners, and opportunities.",
        usage: [
            {
                name: "Stronger Brand Identity",
                icon: <Building2 size={20} color="#00aaad" />,
            },
            {
                name: "Business Credibility",
                icon: <Handshake size={20} color="#00aaad" />,
            },
            {
                name: "Investor Confidence",
                icon: <LineChart size={20} color="#00aaad" />,
            },
            {
                name: "Customer Trust",
                icon: <ShieldCheck size={20} color="#00aaad" />,
            },
            {
                name: "Global Visibility",
                icon: <Globe2 size={20} color="#00aaad" />,
            },
            {
                name: "Competitive Advantage",
                icon: <Trophy size={20} color="#00aaad" />,
            },
        ],
        content: (
            <Image
                src={"/services/laptop.png"}
                alt={"Pivods Company Profile Services"}
                className="object-contain w-full z-20 object-center border-none drop-shadow-[0_0_15px_#2b7475]"
                priority
                fill
            />
        ),
    },
    {
        title: "Information System",
        hook: (
            <>
                Boost Business Efficiency with{" "}
                <span className="text-primary">
                    Smart Information Systems
                </span>
            </>
        ),
        link: "/services/information-system",
        description:
            "An effective information system streamlines your workflow, reduces errors, and empowers smarter decisions. At Pivods, we design custom information systems that automate processes, secure data, and improve overall productivity. From finance and HR to inventory and operations, our solutions help businesses cut costs, prevent fraud, and scale with confidence.",
        usage: [
            {
                name: "Process Automation",
                icon: <Settings size={20} color="#00aaad" />,
            },
            {
                name: "Operational Efficiency",
                icon: <Gauge size={20} color="#00aaad" />,
            },
            {
                name: "Centralized Data",
                icon: <Database size={20} color="#00aaad" />,
            },
            {
                name: "Fraud Prevention",
                icon: <ShieldAlert size={20} color="#00aaad" />,
            },
            {
                name: "Cost & Time Savings",
                icon: <Clock size={20} color="#00aaad" />,
            },
            {
                name: "Scalable Growth",
                icon: <TrendingUp size={20} color="#00aaad" />,
            },
        ],
        content: (
            <Image
                src={"/services/information-system.png"}
                alt={"Pivods AI Agent Overflow System Services"}
                className="object-contain w-full z-20 object-center border-none drop-shadow-[0_0_15px_#2b7475]"
                priority
                fill
            />
        ),
    },
    {
        title: "AI Agent Overflow System",
        hook: (
            <>
                Extend Your Team with{" "}
                <span className="text-primary">AI Agents</span>
            </>
        ),
        link: "/services/ai-agent-overflow",
        description:
            "AI Agent Overflow System is your extra workforce in the digital era. More than just customer support, our AI agents can manage repetitive tasks, process data, monitor transactions, detect fraud, and collaborate with human teams in real time. With Pivods, you get scalable efficiency, reduced costs, and round-the-clock productivity — without hiring more staff.",
        usage: [
            {
                name: "Automated Customer Interaction",
                icon: <MessageSquare size={20} color="#00aaad" />,
            },
            {
                name: "Data Processing & Reporting",
                icon: <BarChart3 size={20} color="#00aaad" />,
            },
            {
                name: "Fraud & Risk Detection",
                icon: <ShieldAlert size={20} color="#00aaad" />,
            },
            {
                name: "Workflow Automation",
                icon: <Cpu size={20} color="#00aaad" />,
            },
            {
                name: "24/7 Business Operations",
                icon: <Clock size={20} color="#00aaad" />,
            },
            {
                name: "Seamless Human Collaboration",
                icon: <Users size={20} color="#00aaad" />,
            },
        ],
        content: (
            <Image
                src={"/services/ai-agent.png"}
                alt={"Pivods AI Agent Overflow System Services"}
                className="object-contain w-full z-20 object-center border-none drop-shadow-[0_0_15px_#2b7475]"
                priority
                fill
            />
        ),
    },
    {
        title: "Data Analytics & Dashboard",
        hook: (
            <>
                Turn Your Data into{" "}
                <span className="text-primary">Smart Decisions</span>
            </>
        ),
        link: "/services/data-analytics-dashboard",
        description:
            "Data is only valuable when it’s transformed into action. With Pivods’ Data Analytics and Dashboard solutions, your raw numbers become clear insights you can rely on. From sales performance and customer behavior to operational efficiency, we build real-time dashboards that empower leaders to make faster, smarter, and data-driven decisions.",
        usage: [
            {
                name: "Business Performance Tracking",
                icon: <LineChart size={20} color="#00aaad" />,
            },
            {
                name: "Customer Behavior Insight",
                icon: <Users size={20} color="#00aaad" />,
            },
            {
                name: "Operational Efficiency",
                icon: <Gauge size={20} color="#00aaad" />,
            },
            {
                name: "Predictive Analytics",
                icon: <TrendingUp size={20} color="#00aaad" />,
            },
            {
                name: "Fraud & Risk Monitoring",
                icon: <ShieldAlert size={20} color="#00aaad" />,
            },
            {
                name: "Real-time Executive Dashboard",
                icon: <LayoutDashboard size={20} color="#00aaad" />,
            },
        ],
        content: (
            <Image
                src={"/services/dashboard.png"}
                alt="Pivods Data Analytics & Dashboard Service"
                className="object-contain w-full z-20 object-center border-none drop-shadow-[0_0_15px_#2b7475]"
                priority
                fill
            />
        ),
    },
    {
        title: "IoT Development",
        hook: (
            <>
                Connect the Physical and Digital with{" "}
                <span className="text-primary">IoT Solutions</span>
            </>
        ),
        link: "/services/iot-development",
        description:
            "IoT is more than connecting devices — it’s about creating smart ecosystems that improve efficiency, safety, and customer experience. From smart utilities and industrial monitoring to real-time asset tracking, Pivods builds scalable IoT systems that integrate seamlessly with your business operations.",
        usage: [
            {
                name: "Smart Utilities Monitoring",
                icon: <Activity size={20} color="#00aaad" />,
            },
            {
                name: "Industrial Automation",
                icon: <Cpu size={20} color="#00aaad" />,
            },
            {
                name: "Real-time Asset Tracking",
                icon: <Box size={20} color="#00aaad" />,
            },
            {
                name: "Predictive Maintenance",
                icon: <Wrench size={20} color="#00aaad" />,
            },
            {
                name: "Safety & Compliance",
                icon: <ShieldCheck size={20} color="#00aaad" />,
            },
            {
                name: "Fraud & Anomaly Detection",
                icon: <AlertTriangle size={20} color="#00aaad" />,
            },
        ],
        content: (
            <Image
                src={"/services/iot-services.png"}
                alt={"Pivods IoT Development Services"}
                className="object-contain w-full z-20 object-center border-none drop-shadow-[0_0_15px_#2b7475] "
                priority
                fill
            />
        ),
    },
    {
        title: "Machine Learning Development",
        hook: (
            <>
                Unlock the Power of{" "}
                <span className="text-primary">Intelligent Systems</span>
            </>
        ),
        link: "/services/machine-learning",
        description:
            "Machine Learning transforms data into intelligence. At Pivods, we design and deploy ML models that predict trends, automate decisions, and uncover hidden opportunities. From recommendation engines to fraud detection and demand forecasting, we help your business stay ahead with data-driven intelligence.",
        usage: [
            {
                name: "Predictive Modeling",
                icon: <TrendingUp size={20} color="#00aaad" />,
            },
            {
                name: "Recommendation Systems",
                icon: <Star size={20} color="#00aaad" />,
            },
            {
                name: "Fraud Detection",
                icon: <ShieldAlert size={20} color="#00aaad" />,
            },
            {
                name: "Customer Segmentation",
                icon: <Users size={20} color="#00aaad" />,
            },
            {
                name: "Demand Forecasting",
                icon: <BarChart size={20} color="#00aaad" />,
            },
            {
                name: "Process Automation",
                icon: <Cpu size={20} color="#00aaad" />,
            },
        ],
        content: (
            <Image
                src={"/services/brain.png"}
                alt={"Pivods Machine Learning Services"}
                className="object-contain w-full z-20 object-center border-none drop-shadow-[0_0_15px_#2b7475]"
                priority
                fill
            />
        ),
    },
    {
        title: "Mobile & Desktop Application",
        hook: (
            <>
                Build Apps that{" "}
                <span className="text-primary">Empower Users</span>
            </>
        ),
        link: "/services/mobile-desktop-apps",
        description:
            "Your business deserves applications that are fast, reliable, and user-friendly. Pivods creates mobile and desktop apps tailored to your needs — from internal systems that boost productivity to customer-facing apps that drive engagement. With seamless UX and scalable architecture, your apps are built for growth.",
        usage: [
            {
                name: "Cross-Platform Apps",
                icon: <Smartphone size={20} color="#00aaad" />,
            },
            {
                name: "Desktop Productivity Tools",
                icon: <Monitor size={20} color="#00aaad" />,
            },
            {
                name: "E-commerce & Marketplace",
                icon: <ShoppingBag size={20} color="#00aaad" />,
            },
            {
                name: "Custom Business Apps",
                icon: <BriefcaseBusiness size={20} color="#00aaad" />,
            },
            {
                name: "Scalable Architecture",
                icon: <Layers size={20} color="#00aaad" />,
            },
            {
                name: "User Engagement & Retention",
                icon: <Users size={20} color="#00aaad" />,
            },
        ],
        content: (
            <Image
                src={"/services/mobile.png"}
                alt={"Pivods Mobile & Desktop Application Services"}
                className="object-contain w-full z-20 object-center border-none drop-shadow-[0_0_15px_#2b7475]"
                priority
                fill
            />
        ),
    },
];