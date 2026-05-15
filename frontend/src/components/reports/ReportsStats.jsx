import {

    useEffect,
    useState

} from "react";

import {

    getAnalytics

} from "../../services/analyticsService";

function ReportsStats() {

    const [analytics, setAnalytics] = useState(null);

    // FETCH ANALYTICS

    useEffect(() => {

        fetchAnalytics();

    }, []);

    const fetchAnalytics = async () => {

        try {

            const data = await getAnalytics();

            setAnalytics(data);

        } catch (error) {

            console.log(error);
        }
    };

    // LOADING

    if (!analytics) {

        return (

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

                {
                    [1, 2, 3, 4].map((item) => (

                        <div
                            key={item}
                            className="h-[180px] rounded-[32px] bg-white/5 animate-pulse"
                        />
                    ))
                }

            </div>
        );
    }

    // STATS

    const stats = [

        {
            title: "Total Water Usage",

            value: `${analytics.totalUsage || 0}L`,

            color: "from-cyan-500/20 to-cyan-500/5",

            border: "border-cyan-500/20"
        },

        {
            title: "Average Usage",

            value: `${analytics.averageUsage || 0}L`,

            color: "from-blue-500/20 to-blue-500/5",

            border: "border-blue-500/20"
        },

        {
            title: "Total Reports",

            value: analytics.totalLogs || 0,

            color: "from-purple-500/20 to-purple-500/5",

            border: "border-purple-500/20"
        },

        {
            title: "Eco Score",

            value: `${analytics.ecoScore || 0}%`,

            color: "from-emerald-500/20 to-emerald-500/5",

            border: "border-emerald-500/20"
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

export default ReportsStats;