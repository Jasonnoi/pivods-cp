const portofolioData = [
    {
        Id: "multilink-trans-indonesia",
        category: { label: "Company Profile", value: "company-profile" },
        title: "Multilink Trans Indonesia",
        description:
            "PT Multilink Trans Indonesia is a leading logistics and forwarding company that specializes in providing comprehensive supply chain solutions tailored to meet the diverse needs of its clientele.",
        summary:
            "A sleek and responsive company profile website built to strengthen brand presence and highlight corporate services.",
        header: {
            src: "/portofolio/multilink-mockup.png",
            alt: "Multilink Company Profile Website",
        },
        details: [
            {
                type: "paragraph",
                text: "PT Multilink Trans Indonesia is a leading logistics and forwarding company that specializes in providing comprehensive supply chain solutions tailored to meet the diverse needs of its clientele. With a commitment to excellence, Multilink Trans Indonesia offers a wide range of services including international freight forwarding, customs clearance, and warehousing.",
            },
            {
                type: "paragraph",
                text: "We developed company profile website through modern design and user-friendly interface, which reflect the brand’s values and commitment to quality service. The site is meticulously crafted to highlight PT Multilink Trans Indonesia's key achievements, range of services, and positive client testimonials in a visually appealing and structured manner. By prioritizing performance and accessibility, the website ensures that potential clients can effortlessly navigate through the information they need. Additionally, the site features an innovative tracking tool that allows clients to monitor their shipments in real time, providing transparency and building trust in the shipping process. This combination of features facilitates a more efficient connection between the company and its clients, fostering business relationships and enhancing overall engagement. With functionalities that showcase the company's successes and detailed service offerings, the website serves as an essential tool for both existing and prospective clients, reinforcing Multilink's position as a trusted partner in logistics and forwarding.",
            },
        ],
        button: { label: "Visit Site", link: "https://multilink.co.id" },
        technologies: ["Figma", "HTML5", "CSS3", "WordPress", "PHP", "MySQL"],
    },

    {
        Id: "flood-control-management-system-sipbanja-2",
        category: { label: "Information System", value: "information-system" },
        title: "Flood Control Management System (SIPBANJA 2)",
        description:
            "An integrated flood monitoring and control information system with GIS support to improve disaster preparedness and response.",
        summary:
            "A powerful and intuitive flood monitoring system combining real-time data, geospatial mapping, and predictive analytics to enhance disaster management capabilities.",
        header: {
            src: "/portofolio/sipbanja2-map-mockup.png",
            alt: "Flood Control Management Information System",
        },
        details: [
            {
                type: "paragraph",
                text: "PT. Dinamaritama Konsultan Rekayasa is a civil engineering consultancy specializing in planning and supervision for infrastructure projects, particularly in water resources and transportation. Certified under multiple construction service classifications such as RE102, RE103, RE202, and RK002, the company serves both private and public sector clients across Indonesia. In collaboration with Indonesia's Ministry of Public Works and Housing (PUPR), particularly the Citarum River Basin Authority (BBWS Citarum), the firm commissioned the development of SIPBANJA-2—a flood control management system designed to support better disaster preparedness and response.",
            },
            {
                type: "paragraph",
                text: "SIPBANJA-2 is a web-based information system developed using React.js for the frontend, Express.js for the backend, Leaflet.js for interactive GIS-based mapping, and Tailwind CSS for modern and responsive styling. Building on the earlier SIPBANJA-1 module, which focused on internal management, this enhanced version provides real-time water level monitoring, geospatial visualization of flood-prone areas, automated early warning alerts, and historical data reporting. The system equips operational teams and government stakeholders with the tools needed to make quick, informed decisions during flood events, while also contributing to long-term disaster mitigation and infrastructure planning.",
            },
        ],
        button: null,
        technologies: ["React.js", "Express.js", "Leaflet.js", "Tailwind CSS", "Node.js"],
    },

    {
        Id: "flood-control-management-system-sipbanja-1",
        category: { label: "Mobile Application", value: "mobile-app" },
        title: "Flood Control Management System (SIPBANJA 1)",
        description:
            "A mobile app for flood monitoring and community reporting system, empowering citizens and field officers with real-time information.",
        summary:
            "A mobile-first flood monitoring and reporting application designed to support field officers in documenting river conditions with location-tagged images and structured data.",
        header: {
            src: "/portofolio/sipbanja1-dash-mockup.png",
            alt: "Flood Control Mobile Application",
        },
        details: [
            {
                type: "paragraph",
                text: "SIPBANJA-1 is a mobile application developed as part of the broader SIPBANJA system, aimed at improving flood monitoring and field data collection. This application is specifically designed for use by field officers from PT. Dinamaritama Konsultan Rekayasa and related government agencies. It enables officers to record river conditions directly from the field using structured forms, along with automated geolocation tagging. This ensures that every report is linked to its exact GPS coordinates, providing accurate spatial data for analysis and decision-making.",
            },
            {
                type: "paragraph",
                text: "One of the key features of the app is its ability to capture and upload images that are automatically tagged with the officer’s current location. These visual records, combined with condition reports and timestamp data, help create a reliable, real-time stream of flood-related information. The mobile-first interface ensures fast, intuitive use in the field—even in challenging environments. SIPBANJA-1 serves as a critical operational tool for improving situational awareness, supporting early warning systems, and enhancing coordination between central management and field teams.",
            },
        ],
        button: null,
        technologies: [
            "React Native",
            "Express.js",
            "Node.js",
            "REST API",
            "Tailwind CSS",
            "Google Maps API",
        ],
    },

    {
        Id: "s-rusun-smart-apartments-app",
        category: { label: "Mobile Application", value: "mobile-app" },
        title: "S-Rusun: Smart Apartments App",
        description:
            "A smart living mobile application designed for Rusunami residents, integrating digital services, IoT device control, and smart utilities management.",
        summary:
            "An integrated smart housing management platform with IoT, utility analytics, and AI-driven safety features, deployed in public housing projects across multiple Indonesian cities.",
        header: {
            src: "/portofolio/srusun-app-dash-mockup.png",
            alt: "Smart Apartments Mobile App",
        },
        details: [
            {
                type: "paragraph",
                text: "S-Rusun is a smart housing mobile application developed to enhance the quality of living for residents in Rusunami (low-cost public housing) by integrating digital services and intelligent infrastructure management. The app provides a seamless interface for daily needs, including utility bill payments, maintenance requests, resident communications, and smart home device control. It is part of a larger smart management ecosystem that supports operational efficiency and improved quality of life for public housing communities.",
            },
            {
                type: "paragraph",
                text: "Deployed in several major cities including Bandung, Surabaya, Semarang, and the new capital city IKN, S-Rusun combines IoT devices, centralized data warehousing, and big data analytics to manage residential environments effectively. Key features include real-time utility usage monitoring, gas leak detection systems, CCTV-based security analytics, and AI/ML-powered anomaly detection to identify utility fraud or potential hazards. The system aims to enhance convenience, safety, and sustainability in public housing through digital transformation and green technology infrastructure.",
            },
        ],
        button: null,
        technologies: [
            "React",
            "React Native",
            "Express.js",
            "Node.js",
            "IoT Integration",
            "MongoDB",
            "Tailwind CSS",
            "AI/ML",
            "Big Data",
        ],
    },

    {
        Id: "rusunami-file-management-system",
        category: { label: "Information System", value: "information-system" },
        title: "Rusunami File Management System",
        description:
            "A document and file management system tailored for Rusunami residents and administrators to digitize paperwork.",
        summary:
            "A document and file management system tailored for Rusunami residents and administrators to digitize paperwork.",
        header: {
            src: "/portofolio/jarrdin-member-mockup.png",
            alt: "Rusunami File Management System",
        },
        details: [
            {
                type: "paragraph",
                text: "Rusunami The Jarrdin Cihampelas is a public housing complex designed to provide affordable and sustainable residential units for middle to low-income families in Bandung. The development focuses on creating a comfortable living environment with integrated community facilities and services to support residents’ daily needs.",
            },
            {
                type: "paragraph",
                text: "To enhance administrative efficiency and improve residents’ access to important documents, we developed the Rusunami File Management System. This digital platform enables secure storage, easy retrieval, and sharing of essential paperwork such as ownership certificates, payment receipts, and community regulations, simplifying the management process for both residents and administrators.",
            },
        ],
        button: null,
        technologies: ["React.js", "Node.js", "MySQL", "Express.js", "Tailwind CSS"],
    },

    {
        Id: "smart-integrated-scale-system-ksip-agro",
        category: { label: "IoT Development", value: "iot-dev" },
        title: "Smart Integrated Scale System (KSIP Agro)",
        description:
            "An IoT-based smart weighing and receiving system integrated with Odoo ERP, improving efficiency, accuracy, and transparency.",
        summary:
            "An IoT-based smart weighing and receiving system integrated with Odoo ERP, improving efficiency, accuracy, and transparency.",
        header: { src: "/portofolio/ksipagro.jpg", alt: "Smart Integrated Scale IoT System" },
        details: [
            {
                type: "paragraph",
                text: "PT KSIP Solusi Mandiri (KSIP Agro) is an Indonesian exporter of fresh exotic fruits and vegetables established in 2013. The company, certified with ISO 22000 in 2024, is committed to delivering high-quality natural produce to the global market. One of its most critical operations is the goods receiving process, where products are weighed, adjusted for pallet weight, sorted into export-grade quality, and recorded for returns. Previously, this process was manual, often leading to inefficiencies, inaccuracies, and limited transparency with suppliers.",
            },
            {
                type: "paragraph",
                text: "To address these challenges, we developed the Smart Integrated Scale (SIS) system, an IoT-based solution that automates weighing and receiving by integrating digital scales, cameras, barcode printers, and Odoo ERP synchronization. Each weighing station is equipped with Raspberry Pi and ESP32 microcontrollers, connected to touchscreens and label printers, ensuring reliable offline operation with automatic data synchronization to the cloud and ERP system. The system captures product weight and images, generates barcodes, and provides real-time updates to suppliers via WhatsApp, significantly improving efficiency, accuracy, and transparency in KSIP Agro’s operations.",
            },
        ],
        button: null,
        technologies: [
            "Raspberry Pi",
            "ESP32",
            "Odoo ERP",
            "Node.js",
            "MySQL",
            "Express.js",
            "WhatsApp API",
        ],
    },

    {
        Id: "safety-multipurpose-box",
        category: { label: "IoT Development", value: "iot-dev" },
        title: "Safety Multipurpose Box",
        description:
            "A smart safety box with emergency tools, a public display, and multifunctional surveillance for public facilities.",
        summary:
            "A smart safety box with emergency tools, a public display, and multifunctional surveillance for public facilities.",
        header: { src: "/portofolio/bandara.jpeg", alt: "Safety Multipurpose Box" },
        details: [
            {
                type: "paragraph",
                text: "PT Angkasa Pura, as one of Indonesia’s leading airport operators, continuously seeks to improve passenger safety and public facility management. To support this initiative, the Safety Multipurpose Box was introduced as an integrated solution combining essential emergency equipment and modern digital technology. This system aims to ensure that safety resources such as gas masks, oxygen masks, AED defibrillators, and fire extinguishers are readily accessible in critical situations while also serving as an innovative information hub for airport visitors.",
            },
            {
                type: "paragraph",
                text: "The Safety Multipurpose Box is equipped with emergency response tools including AEDs, standard gas masks, and oxygen masks, paired with a Raspberry Pi-powered display that delivers real-time public information and advertisements. In addition, the system is integrated with CCTV cameras and real-time image processing to enhance surveillance, situational awareness, and safety management. By combining hardware, IoT components, and digital communication in one unit, the project provides PT Angkasa Pura with a multifunctional and scalable safety infrastructure for modern public facilities.",
            },
        ],
        button: null,
        technologies: [
            "Raspberry Pi",
            "IoT Sensors",
            "CCTV Integration",
            "Real-Time Image Processing",
            "React.js",
            "Node.js",
            "Express.js",
            "MySQL",
        ],
    },
];

export default portofolioData;
