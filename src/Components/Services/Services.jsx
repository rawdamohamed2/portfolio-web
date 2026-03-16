import React from 'react';
import {
    PencilRuler,
    Smartphone,
    Settings,
    PenTool,
    LifeBuoy,
    Rocket
} from 'lucide-react'; // Using Lucide icons for a clean look

const services = [
    {
        title: "Development",
        desc: "Building robust backends with Node.js and .NET C# and dynamic frontends with Next.js.",
        icon: <PencilRuler className="w-8 h-8 text-white" />,
    },
    {
        title: "Responsive Design",
        desc: "Ensuring your applications look flawless on every screen size, from mobile to desktop.",
        icon: <Smartphone className="w-8 h-8 text-white" />,
    },
    {
        title: "Web Design",
        desc: "Crafting beautiful, user-centric interfaces using modern Tailwind CSS patterns.",
        icon: <Settings className="w-8 h-8 text-white" />,
    },
    {
        title: "Creative Design",
        desc: "Innovative UI/UX solutions tailored to your brand's unique identity and goals.",
        icon: <PenTool className="w-8 h-8 text-white" />,
    },
    {
        title: "Quick Support",
        desc: "Reliable maintenance and technical support for your full-stack ecosystem.",
        icon: <LifeBuoy className="w-8 h-8 text-white" />,
    },
    {
        title: "Branding Identity",
        desc: "Launching your digital presence with high-performance Next.js deployments.",
        icon: <Rocket className="w-8 h-8 text-white" />,
    },
];

const Services = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                {/* Header */}
                <h2 className="py-2 text-4xl font-bold text-center relative after:content-['']
                        after:block lg:after:w-[27%] md:after:w-[30%] sm:after:w-[40%] after:w-full after:mx-auto after:h-[0.2px]
                        after:bg-hoverBtn md:after:mt-6 after:mt-4 tracking-widest mb-2">
                    <span className={'text-effectColor'}>My</span> Services
                </h2>
                <div className="flex justify-center items-center gap-2 mb-6">
                    <div className="h-0.5 w-12 bg-effectColor"></div>
                    <div className="w-2 h-2 rounded-full border-2 border-effectColor"></div>
                    <div className="h-0.5 w-12 bg-effectColor"></div>
                </div>
                <p className="text-secondfontColor max-w-2xl mx-auto mb-16">
                    I provide full-stack solutions ranging from frontend polish with React to
                    scalable enterprise logic with .NET and Node.js.
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-cricleColor rounded-2xl p-10 shadow-sm hover:shadow-ld hover:shadow-effectColor transition-shadow duration-300 flex flex-col items-center  text-center"
                        >
                            {/* Bloob-style Icon Container */}
                            <div className="relative mb-6">
                                <div className="bg-effectColor w-16 h-16 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] flex items-center justify-center transform rotate-12">
                                    <div className="transform -rotate-12">
                                        {service.icon}
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-lg font-bold  mb-4">
                                {service.title}
                            </h3>
                            <p className="text-secondfontColor text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Services
