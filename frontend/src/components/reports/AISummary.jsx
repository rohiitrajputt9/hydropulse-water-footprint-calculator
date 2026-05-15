import {

    useEffect,
    useState

} from "react";

import {

    getAnalytics

} from "../../services/analyticsService";

function AISummary() {

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

            <div className="mt-10 h-[350px] rounded-[32px] bg-white/5 animate-pulse" />
        );
    }

    // AI LOGIC

    let sustainabilityRating = "A+";

    if (analytics.averageUsage > 220) {

        sustainabilityRating = "C";

    } else if (analytics.averageUsage > 180) {

        sustainabilityRating = "B";

    } else if (analytics.averageUsage > 140) {

        sustainabilityRating = "A";
    }

    const efficiency = analytics.ecoScore || 0;

    const estimatedSavings = Math.max(

        0,

        Math.round(

            6000 - analytics.totalUsage
        )
    );

    // DYNAMIC AI SUMMARY

    let aiSummary =
        "HydroPulse AI detected strong sustainability performance. Your recent analytics indicate efficient water utilization and balanced indoor/outdoor consumption.";

    if (analytics.averageUsage > 200) {

        aiSummary =
            "HydroPulse AI detected high water consumption patterns. Reducing shower duration and optimizing outdoor usage may significantly improve sustainability performance.";

    } else if (analytics.averageUsage > 150) {

        aiSummary =
            "HydroPulse AI identified moderate sustainability efficiency. Small reductions in cooking and outdoor water usage can improve eco performance.";

    } else if (analytics.averageUsage < 100) {

        aiSummary =
            "Excellent eco-efficiency detected. Your water consumption trends demonstrate highly sustainable usage patterns and optimized resource management.";
    }

    return (

        <div className="mt-10 backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-[32px] p-10">

            {/* HEADER */}

            <div className="flex items-center gap-5">

                <div className="w-20 h-20 rounded-3xl bg-cyan-500/20 flex items-center justify-center">

                    <div className="w-10 h-10 rounded-2xl bg-cyan-400 flex items-center justify-center text-black font-black text-xl">

                        AI

                    </div>

                </div>

                <div>

                    <h2 className="text-4xl font-black text-white">

                        AI Report Summary

                    </h2>

                    <p className="mt-2 text-gray-400">

                        Intelligent sustainability insights generated from analytics

                    </p>

                </div>

            </div>

            {/* AI METRICS */}

            <div className="mt-10 grid lg:grid-cols-3 gap-8">

                {/* RATING */}

                <div className="bg-[#0F172A] rounded-3xl p-8 border border-white/5">

                    <p className="text-gray-400 text-lg">

                        Sustainability Rating

                    </p>

                    <h2 className="mt-5 text-5xl font-black text-cyan-400">

                        {sustainabilityRating}

                    </h2>

                </div>

                {/* SAVINGS */}

                <div className="bg-[#0F172A] rounded-3xl p-8 border border-white/5">

                    <p className="text-gray-400 text-lg">

                        Estimated Savings

                    </p>

                    <h2 className="mt-5 text-5xl font-black text-emerald-400">

                        {estimatedSavings}L

                    </h2>

                </div>

                {/* EFFICIENCY */}

                <div className="bg-[#0F172A] rounded-3xl p-8 border border-white/5">

                    <p className="text-gray-400 text-lg">

                        Efficiency Score

                    </p>

                    <h2 className="mt-5 text-5xl font-black text-blue-400">

                        {efficiency}%

                    </h2>

                </div>

            </div>

            {/* AI SUMMARY */}

            <div className="mt-10 bg-[#0F172A] rounded-3xl p-8 border border-white/5">

                <h3 className="text-3xl font-black text-white">

                    AI Sustainability Analysis

                </h3>

                <p className="mt-6 text-xl text-gray-300 leading-relaxed">

                    {aiSummary}

                </p>

            </div>

            {/* RECOMMENDATIONS */}

            <div className="mt-8 grid md:grid-cols-3 gap-6">

                <div className="bg-[#0F172A] rounded-2xl p-6 border border-white/5">

                    <h3 className="text-2xl font-bold text-white">

                        Shower Optimization
                    </h3>

                    <p className="mt-3 text-gray-400">

                        Reducing shower duration by 3 minutes may save approximately 80L weekly.

                    </p>

                </div>

                <div className="bg-[#0F172A] rounded-2xl p-6 border border-white/5">

                    <h3 className="text-2xl font-bold text-white">

                        Outdoor Efficiency
                    </h3>

                    <p className="mt-3 text-gray-400">

                        Smart garden scheduling could reduce outdoor consumption significantly.

                    </p>

                </div>

                <div className="bg-[#0F172A] rounded-2xl p-6 border border-white/5">

                    <h3 className="text-2xl font-bold text-white">

                        Sustainability Trend
                    </h3>

                    <p className="mt-3 text-gray-400">

                        Current analytics indicate improving sustainability consistency over time.

                    </p>

                </div>

            </div>

        </div>
    );
}

export default AISummary;