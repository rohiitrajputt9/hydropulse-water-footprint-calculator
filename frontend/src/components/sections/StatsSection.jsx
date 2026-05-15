import CountUp from "react-countup";

function StatsSection() {

    const stats = [
        {
            value: 25000,
            label: "Liters Tracked"
        },
        {
            value: 1200,
            label: "Active Users"
        },
        {
            value: 89,
            label: "Sustainability Score"
        },
        {
            value: 35,
            label: "Water Saved %"
        }
    ];

    return (

        <section className="relative z-10 py-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

                    {
                        stats.map((item, index) => (

                            <div
                                key={index}
                                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 text-center"
                            >

                                <h2 className="text-5xl font-black text-cyan-400">

                                   {item.value}

                                    +

                                </h2>

                                <p className="mt-4 text-gray-400 text-lg">

                                    {item.label}

                                </p>

                            </div>
                        ))
                    }

                </div>

            </div>

        </section>
    );
}

export default StatsSection;