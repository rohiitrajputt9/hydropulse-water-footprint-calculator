function AIInsights({ analytics }) {

    // Dynamic AI Recommendation

    let recommendation =
        "Your water usage is balanced and sustainable.";

    let status = "Excellent";

    let statusColor = "text-emerald-400";

    if (analytics.averageUsage > 200) {

        recommendation =
            "HydroPulse AI detected very high daily water usage. Reducing outdoor consumption and optimizing shower duration could significantly improve sustainability metrics.";

        status = "Critical";

        statusColor = "text-red-400";

    } else if (analytics.averageUsage > 150) {

        recommendation =
            "HydroPulse AI recommends reducing outdoor usage by 10-15 liters/day to improve long-term sustainability performance and eco efficiency.";

        status = "Average";

        statusColor = "text-yellow-400";

    } else if (analytics.averageUsage > 100) {

        recommendation =
            "Your consumption trend is stable. Minor reductions in cooking and laundry usage can further improve your eco score.";

        status = "Good";

        statusColor = "text-cyan-400";
    }

    return (

        <div className="mt-12 grid lg:grid-cols-3 gap-8">

            {/* AI INSIGHTS PANEL */}

            <div className="lg:col-span-2 backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-[32px] p-10 shadow-2xl">

                <div className="flex items-center gap-5">

                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.25)]">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-cyan-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >

                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.75 3v2.25m4.5-2.25v2.25M9 9h6m-7.5 9h9A2.25 2.25 0 0018.75 15.75v-6A2.25 2.25 0 0016.5 7.5h-9A2.25 2.25 0 005.25 9.75v6A2.25 2.25 0 007.5 18zm1.5-4.5h.008v.008H9v-.008zm6 0h.008v.008H15v-.008z"
                            />

                        </svg>

                    </div>

                    <div>

                        <h2 className="text-4xl font-black text-white">

                            AI Sustainability Insights

                        </h2>

                        <p className="mt-2 text-gray-400 text-lg">

                            Intelligent recommendations powered by HydroPulse AI

                        </p>

                    </div>

                </div>

                <div className="mt-10 space-y-6">

                    <p className="text-xl text-gray-300 leading-relaxed">

                        {recommendation}

                    </p>

                    <div className="grid md:grid-cols-3 gap-5 mt-8">

                        {/* Prediction */}

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                            <p className="text-gray-400">

                                Monthly Prediction

                            </p>

                            <h2 className="mt-3 text-4xl font-black text-white">

                                {analytics.prediction}L

                            </h2>

                        </div>

                        {/* Water Saved */}

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                            <p className="text-gray-400">

                                Water Saved

                            </p>

                            <h2 className="mt-3 text-4xl font-black text-white">

                                {analytics.waterSaved}L

                            </h2>

                        </div>

                        {/* Average Usage */}

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                            <p className="text-gray-400">

                                Daily Average

                            </p>

                            <h2 className="mt-3 text-4xl font-black text-white">

                                {analytics.averageUsage}L

                            </h2>

                        </div>

                    </div>

                </div>

            </div>

            {/* EFFICIENCY SCORE */}

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-10 shadow-2xl">

                <h2 className="text-3xl font-black text-white">

                    Efficiency Score

                </h2>

                <p className="mt-2 text-gray-400">

                    AI-based sustainability evaluation

                </p>

                <div className="mt-10 flex items-center justify-center">

                    <div className="relative w-56 h-56 rounded-full border-[18px] border-cyan-500 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.3)]">

                        <div className="text-center">

                            <h2 className="text-6xl font-black text-white">

                                {analytics.ecoScore}%

                            </h2>

                            <p className={`mt-3 text-xl font-bold ${statusColor}`}>

                                {status}

                            </p>

                        </div>

                    </div>

                </div>

                {/* Sustainability Meter */}

                <div className="mt-10">

                    <div className="flex items-center justify-between mb-3">

                        <span className="text-gray-400">

                            Sustainability Level

                        </span>

                        <span className="text-cyan-400 font-bold">

                            {analytics.ecoScore}%

                        </span>

                    </div>

                    <div className="w-full h-4 bg-[#0F172A] rounded-full overflow-hidden">

                        <div
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-700"
                            style={{
                                width: `${analytics.ecoScore}%`
                            }}
                        />

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AIInsights;