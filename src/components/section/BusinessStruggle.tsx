import { layoutStyles } from "../../app/style";
import Image from "next/image";
import { Globe, Settings, Users, BarChart2, ShieldAlert, Zap } from "lucide-react";
const problems = [
    {
        icon: <Globe size={15} />,
        header: "Online Presence",
        description:
            "Without a strong company profile or digital footprint, your business remains invisible to potential clients.",
    },
    {
        icon: <Settings size={15} />,
        header: "Inefficient Ops",
        description:
            "Manual processes and outdated workflows slow teams down, drain resources, and block scalability.",
    },
    {
        icon: <Users size={15} />,
        header: "Customer Trust",
        description:
            "Clients today expect instant response and seamless service — without automation, trust slips away.",
    },
    {
        icon: <BarChart2 size={15} />,
        header: "Data Insight",
        description:
            "Businesses collect data every day, but without analytics it remains unused — numbers without value.",
    },
    {
        icon: <ShieldAlert size={15} />,
        header: "System Risk",
        description:
            "When systems aren’t integrated or secured, mistakes and fraud risks multiply — costing time, money, and reputation.",
    },
    {
        icon: <Zap size={15} />,
        header: "Missed Chance",
        description:
            "Without innovation in AI, IoT, and modern apps, competitors move faster — leaving your business behind.",
    },
];
function BusinessStruggle() {
    return (
        <section
            id="Problems"
            className="relative w-full flex flex-col items-center justify-center text-center mt-24 pt-24"
        >
            <div className=" mx-auto w-full">
                <div
                    className={`${layoutStyles.container} w-full h-max flex gap-10 max-lg:flex-col`}
                >
                    <div className="w-1/2 max-lg:w-full flex gap-10">
                        <div className="w-full flex flex-col gap-y-5 items-start">
                            <span className="bg-primary/20 text-primary h-fit px-4 py-1 rounded-full text-[15px] backdrop-blur-md">
                                Why Your Businesses Struggle
                            </span>
                            <h2 className="text-4xl max-md:text-md font-bold  text-left text-white dark:text-gray-100">
                                The barrier isn’t your vision,{" "}
                                <span className="text-primary">
                                    it’s your complex, outdated systems
                                </span>
                            </h2>

                            <div className="mt-6 w-full relative h-40">
                                <Image
                                    src={"/struggle.jpg"}
                                    alt={"Why most business struggle"}
                                    className="object-cover object-center border-none opacity-70 backdrop-blur-md drop-shadow-[0_0_15px_#2b7475]"
                                    priority
                                    fill
                                />
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 w-full text-left">
                                It’s not just a system problem — outdated and complex tools hold
                                your business back. They slow down growth, inflate operational
                                costs, and drain efficiency. Instead of moving forward, your team
                                spends more time fixing problems than creating opportunities.{" "}
                                <span className=" font-semibold text-primary">
                                    It’s time to break the wall. Explore our services below and
                                    build the digital foundation your business truly deserves.
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 h-full max-lg:w-full max-lg:pl-0 grid grid-cols-2 gap-x-5 gap-y-10 relative max-md:grid-cols-2 max-lg:grid-cols-3 max-lg:gap-x-3 max-lg:gap-y-5">
                        <div className="absolute top-0 left-0 w-[80vw] max-w-[800px] aspect-square rounded-full bg-primary/30 blur-[25vw] -z-10"></div>
                        {/* Pain Point 1 */}
                        {problems.map((problem, index) => (
                            <div key={index} className="flex flex-col items-start gap-3 text-left">
                                <div className="w-full flex items-center gap-2">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                        {problem.icon}
                                    </div>
                                    <h4 className="text-primary text-[20px] font-semibold max-md:text-[15px]">
                                        {problem.header}
                                    </h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 w-full">
                                    {problem.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BusinessStruggle;
