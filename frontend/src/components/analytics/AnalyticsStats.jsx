function AnalyticsStats() {

    const stats = [
        {
            title: "Monthly Usage",
            value: "3,240L",
            color: "from-cyan-500/20 to-cyan-500/5",
            border: "border-cyan-500/20"
        },
        {
            title: "Daily Average",
            value: "173L",
            color: "from-blue-500/20 to-blue-500/5",
            border: "border-blue-500/20"
        },
        {
            title: "Sustainability",
            value: "82%",
            color: "from-emerald-500/20 to-emerald-500/5",
            border: "border-emerald-500/20"
        },
        {
            title: "Efficiency",
            value: "Excellent",
            color: "from-purple-500/20 to-purple-500/5",
            border: "border-purple-500/20"
        }
    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {
                stats.map((item, index) => (

                    <div
                        key={index}
                        className={`bg-gradient-to-br ${item.color} border ${item.border} rounded-[32px] p-8 backdrop-blur-xl`}
                    >

                        <p className="text-gray-400 text-lg">

                            {item.title}

                        </p>

                        <h2 className="mt-5 text-5xl font-black text-white">

                            {item.value}

                        </h2>

                    </div>
                ))
            }

        </div>
    );
}

export default AnalyticsStats;