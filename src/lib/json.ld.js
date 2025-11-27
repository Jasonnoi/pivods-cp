export const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pivods",
    "url": "https://pivods.com",
    "logo": "https://pivods.com/logo.png",
    "description": "Pivods - Pioneer Inovasi Digital | Digital Innovation Pioneer Agency.",
    "keywords": [
        "Pivods",
        "Pioneer Inovasi Digital",
        "Digital Innovation Pioneer",
        "Software House",
        "Software Agency",
        "Jasa Pembuatan Web",
        "Company Profile Website",
        "Information System",
        "AI Agent Overflow System",
        "Data Analytics",
        "Dashboard Development",
        "IoT Development",
        "Machine Learning Development",
        "Mobile Application",
        "Desktop Application",
        "Landing Page",
        "Compro",
        "Cutting Edge Technologies"
    ],
    "sameAs": [
        "https://www.linkedin.com/company/pivods",
        "https://twitter.com/pivods",
        "https://www.instagram.com/pivods_"
    ],
    "service": [
        {
            "@type": "Service",
            "name": "Company Profile Website",
            "description": "Jasa pembuatan website company profile profesional. Professional company profile website development."
        },
        {
            "@type": "Service",
            "name": "Information System",
            "description": "Sistem informasi siap pakai untuk bisnis. Ready-to-use information system solutions."
        },
        {
            "@type": "Service",
            "name": "AI Agent Overflow System",
            "description": "Sistem AI untuk automasi dan efisiensi bisnis. AI agent overflow system for automation."
        },
        {
            "@type": "Service",
            "name": "Data Analytics & Dashboard",
            "description": "Analitik data dan dashboard interaktif. Data analytics & interactive dashboards."
        },
        {
            "@type": "Service",
            "name": "IoT Development",
            "description": "Pengembangan solusi Internet of Things. IoT development for smart systems."
        },
        {
            "@type": "Service",
            "name": "Machine Learning Development",
            "description": "Pengembangan sistem machine learning. Machine learning development for business intelligence."
        },
        {
            "@type": "Service",
            "name": "Mobile & Desktop Application",
            "description": "Aplikasi mobile & desktop. Mobile and desktop application development."
        }
    ]
};

export const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us - Pivods",
    "url": "https://pivods.com/about",
    "description":
        "Learn more about Pivods, a software house, IT vendor, and digital agency from Indonesia. We provide custom software development, IT consulting, mobile & desktop applications, AI, IoT, and data analytics solutions.",
    "mainEntity": {
        "@type": "Organization",
        "name": "Pivods",
        "url": "https://pivods.com",
        "logo": "https://pivods.com/logo.png",
        "foundingDate": "2023",
        "foundingLocation": {
            "@type": "Place",
            "name": "Indonesia"
        },
        "description":
            "Pivods is a digital innovation pioneer from Indonesia, acting as an IT vendor, IT consultant, and software house. We provide IT solutions such as custom software, company profile websites, information systems, AI, IoT, machine learning, and mobile & desktop applications.",
        "keywords": [
            // Brand & Positioning
            "Pivods",
            "Digital Innovation Pioneer",
            "Software House Indonesia",
            "Digital Agency Indonesia",
            "Cutting Edge Technologies",
            // IT Vendor & Consultant
            "IT Vendor",
            "IT Consultant",
            "IT Consulting Services",
            "IT Services Company",
            "IT Solutions Provider",
            "Vendor IT Indonesia",
            "Konsultan IT",
            "Jasa Konsultasi IT",
            "Perusahaan Jasa IT",
            // Core Service Keywords (English)
            "Custom Software",
            "Custom Software Development",
            "Application Development",
            "Web & App Development",
            "Mobile Application Development",
            "Desktop Application Development",
            "Information System Development",
            "Data Analytics Dashboard",
            "Machine Learning Development",
            "AI Automation",
            "IoT Development",
            "Digital Transformation Solutions",
            // Core Service Keywords (Indonesian)
            "Jasa Pembuatan Software",
            "Jasa Pembuatan Aplikasi",
            "Jasa Pembuatan Website",
            "Website Company Profile",
            "Sistem Informasi",
            "Dashboard Data Analytics",
            "Pengembangan Aplikasi Mobile",
            "Pengembangan Aplikasi Desktop",
            "Jasa IT Profesional",
            "Solusi Teknologi Bisnis",
            "Startup IT Partner",
            "Jasa Website Murah Berkualitas"
        ],
        "sameAs": [
            "https://www.linkedin.com/company/pivods",
            "https://twitter.com/pivods",
            "https://www.instagram.com/pivods_"
        ],
        "service": [
            {
                "@type": "Service",
                "name": "IT Consulting",
                "description": "Professional IT consultant and advisory services to support business growth."
            },
            {
                "@type": "Service",
                "name": "Custom Software Development",
                "description": "Tailored software solutions to meet unique business needs."
            },
            {
                "@type": "Service",
                "name": "Mobile & Desktop Applications",
                "description": "Development of mobile and desktop apps to support business operations."
            },
            {
                "@type": "Service",
                "name": "Information System",
                "description": "Business-ready information system solutions."
            },
            {
                "@type": "Service",
                "name": "AI & Machine Learning",
                "description": "AI automation and machine learning development for business intelligence."
            },
            {
                "@type": "Service",
                "name": "IoT Development",
                "description": "Internet of Things solutions for smarter business processes."
            },
            {
                "@type": "Service",
                "name": "Data Analytics & Dashboard",
                "description": "Interactive dashboards and analytics for business insights."
            }
        ]
    }
};
export const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Pivods Services",
    "url": "https://pivods.com/services",
    "description": "Pivods offers IT services including custom software, AI, IoT, and data analytics solutions.",
    "mainEntity": [
        { "@type": "Service", "name": "Custom Software Development", "description": "Tailored software solutions for your business." },
        { "@type": "Service", "name": "IT Consulting", "description": "Professional IT consulting and advisory services." },
        { "@type": "Service", "name": "Mobile & Desktop Applications", "description": "Development of apps to support business operations." },
        { "@type": "Service", "name": "AI & Machine Learning", "description": "AI automation and machine learning solutions." },
        { "@type": "Service", "name": "IoT Development", "description": "Internet of Things solutions for smart business processes." },
        { "@type": "Service", "name": "Data Analytics & Dashboard", "description": "Interactive dashboards and data insights." }
    ]
};



export const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Pivods Portfolio",
    "url": "https://pivods.com/portfolio",
    "description": "Showcase of Pivods projects including custom software, web development, mobile & desktop apps, AI, IoT, and data analytics.",
    "mainEntity": [
        { "@type": "CreativeWork", "name": "Company Profile Website", "description": "Professional company profile website development." },
        { "@type": "CreativeWork", "name": "Mobile & Desktop Application", "description": "Apps developed for business productivity." },
        { "@type": "CreativeWork", "name": "AI Agent System", "description": "AI-based automation and solutions." },
        { "@type": "CreativeWork", "name": "IoT Projects", "description": "Smart IoT systems for business optimization." },
        { "@type": "CreativeWork", "name": "Data Analytics Dashboards", "description": "Interactive dashboards for insights." }
    ]
};
