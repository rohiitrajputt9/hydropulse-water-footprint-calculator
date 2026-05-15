function TrendInsights() {

    return (

        <div className="mt-10 grid lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2 backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-[32px] p-10">

                <h2 className="text-4xl font-black text-white">

                    AI Trend Analysis

                </h2>

                <p className="mt-8 text-xl text-gray-300 leading-relaxed">

                    HydroPulse AI identified increased
                    outdoor water consumption during weekends.
                    Reducing garden usage by 15 liters/day
                    could improve monthly sustainability by 12%.

                </p>

            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-10">

                <h2 className="text-3xl font-bold text-white">

                    Risk Assessment

                </h2>

                <div className="mt-10 space-y-6">

                    <div className="flex items-center justify-between">

                        <span className="text-gray-400">

                            Indoor Usage

                        </span>

                        <span className="text-emerald-300 font-bold">

                            Stable

                        </span>

                    </div>

                    <div className="flex items-center justify-between">

                        <span className="text-gray-400">

                            Outdoor Usage

                        </span>

                        <span className="text-orange-300 font-bold">

                            Moderate

                        </span>

                    </div>

                    <div className="flex items-center justify-between">

                        <span className="text-gray-400">

                            Sustainability

                        </span>

                        <span className="text-cyan-300 font-bold">

                            Excellent

                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default TrendInsights;