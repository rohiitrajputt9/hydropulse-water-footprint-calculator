function DashboardStats({ analytics }) {

    const stats = [
        {
            title: "Total Usage",
            value: `${analytics.totalUsage}L`,
            color: "from-cyan-500/20 to-cyan-500/5",
            border: "border-cyan-500/20"
        },
        {
            title: "Eco Score",
            value: `${analytics.ecoScore}%`,
            color: "from-emerald-500/20 to-emerald-500/5",
            border: "border-emerald-500/20"
        },
        {
            title: "AI Prediction",
            value: `${analytics.prediction}L`,
            color: "from-purple-500/20 to-purple-500/5",
            border: "border-purple-500/20"
        },
        {
            title: "Water Saved",
            value: `${analytics.waterSaved}L`,
            color: "from-orange-500/20 to-orange-500/5",
            border: "border-orange-500/20"
        }
    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {
                stats.map((item, index) => (

                    <div
                        key={index}
                        className={`
                            bg-gradient-to-br
                            ${item.color}
                            border
                            ${item.border}
                            rounded-[30px]
                            p-8
                            backdrop-blur-xl
                            hover:scale-[1.03]
                            transition-all
                            duration-300
                            shadow-2xl
                        `}
                    >

                        <p className="text-gray-400 text-lg font-medium">

                            {item.title}

                        </p>

                        <h2 className="mt-5 text-5xl font-black text-white tracking-tight">

                            {item.value}

                        </h2>

                    </div>
                ))
            }

        </div>
    );
}

export default DashboardStats;