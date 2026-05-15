import {
    Brain,
    BarChart3,
    Droplets,
    ShieldCheck,
    CloudRain,
    Database
} from "lucide-react";

function FeaturesSection() {

    const features = [
        {
            icon: <Brain size={36} />,
            title: "AI Prediction Engine",
            description:
                "Predict future water usage patterns using intelligent analytics."
        },
        {
            icon: <BarChart3 size={36} />,
            title: "Advanced Analytics",
            description:
                "Track daily, weekly, and monthly consumption trends."
        },
        {
            icon: <Droplets size={36} />,
            title: "Water Monitoring",
            description:
                "Log and monitor indoor and outdoor water usage efficiently."
        },
        {
            icon: <ShieldCheck size={36} />,
            title: "Sustainability Scoring",
            description:
                "Measure environmental impact with smart eco scoring."
        },
        {
            icon: <CloudRain size={36} />,
            title: "Real-Time Insights",
            description:
                "Receive smart recommendations to reduce water waste."
        },
        {
            icon: <Database size={36} />,
            title: "Google Sheets Sync",
            description:
                "Synchronize analytics and reports directly with cloud sheets."
        }
    ];

    return (

       <section id="features" className="relative z-10 py-28">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">

                    <h2 className="text-5xl font-black text-white">

                        Powerful Features

                    </h2>

                    <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">

                        HydroPulse combines AI analytics,
                        sustainability intelligence,
                        and advanced monitoring tools.

                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {
                        features.map((feature, index) => (

                            <div
                                key={index}
                                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-cyan-400/40 transition-all duration-500"
                            >

                                <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">

                                    {feature.icon}

                                </div>

                                <h3 className="mt-8 text-2xl font-bold text-white">

                                    {feature.title}

                                </h3>

                                <p className="mt-5 text-gray-400 leading-relaxed text-lg">

                                    {feature.description}

                                </p>

                            </div>
                        ))
                    }

                </div>

            </div>

        </section>
    );
}

export default FeaturesSection;