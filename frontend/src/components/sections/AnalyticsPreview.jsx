import {
    ResponsiveContainer,
    AreaChart,
    Area,
    LineChart,
    Line,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    XAxis,
    CartesianGrid
} from "recharts";

function AnalyticsPreview() {

    const weeklyData = [
        { day: "Mon", usage: 120 },
        { day: "Tue", usage: 150 },
        { day: "Wed", usage: 170 },
        { day: "Thu", usage: 140 },
        { day: "Fri", usage: 210 },
        { day: "Sat", usage: 160 },
        { day: "Sun", usage: 110 }
    ];

    const monthlyData = [
        { month: "Jan", usage: 3200 },
        { month: "Feb", usage: 2800 },
        { month: "Mar", usage: 3500 },
        { month: "Apr", usage: 3900 },
        { month: "May", usage: 3000 }
    ];

    const categoryData = [
        {
            name: "Indoor",
            value: 75
        },
        {
            name: "Outdoor",
            value: 25
        }
    ];

    const COLORS = [
        "#06B6D4",
        "#2563EB"
    ];

    return (

        <section id="analytics" className="relative z-10 py-32">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-24">

                    <div className="inline-flex items-center px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-8">

                        AI Analytics Dashboard

                    </div>

                    <h2 className="text-6xl font-black text-white leading-tight">

                        Intelligent Water
                        <br />

                        Analytics Platform

                    </h2>

                    <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">

                        Analyze water consumption patterns,
                        monitor sustainability metrics,
                        and visualize intelligent AI-driven insights
                        with real-time dashboard analytics.

                    </p>

                </div>

                {/* Top Analytics Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-14">

                    <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/20 rounded-3xl p-8">

                        <p className="text-cyan-300 text-lg">

                            Daily Usage

                        </p>

                        <h2 className="mt-4 text-5xl font-black text-white">

                            173L

                        </h2>

                    </div>

                    <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 rounded-3xl p-8">

                        <p className="text-blue-300 text-lg">

                            Sustainability Score

                        </p>

                        <h2 className="mt-4 text-5xl font-black text-white">

                            82%

                        </h2>

                    </div>

                    <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 rounded-3xl p-8">

                        <p className="text-purple-300 text-lg">

                            AI Prediction

                        </p>

                        <h2 className="mt-4 text-5xl font-black text-white">

                            160L

                        </h2>

                    </div>

                    <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8">

                        <p className="text-emerald-300 text-lg">

                            Water Saved

                        </p>

                        <h2 className="mt-4 text-5xl font-black text-white">

                            24L

                        </h2>

                    </div>

                </div>

                {/* Main Charts Grid */}

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Area Chart */}

                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-8">

                        <div className="flex items-center justify-between mb-10">

                            <div>

                                <h3 className="text-3xl font-bold text-white">

                                    Weekly Trends

                                </h3>

                                <p className="mt-2 text-gray-400">

                                    Daily water consumption analytics

                                </p>

                            </div>

                            <div className="px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">

                                +12%

                            </div>

                        </div>

                        <div className="h-[320px]">

                            <ResponsiveContainer width="100%" height="100%">

                                <AreaChart data={weeklyData}>

                                    <defs>

                                        <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">

                                            <stop
                                                offset="5%"
                                                stopColor="#06B6D4"
                                                stopOpacity={0.8}
                                            />

                                            <stop
                                                offset="95%"
                                                stopColor="#06B6D4"
                                                stopOpacity={0}
                                            />

                                        </linearGradient>

                                    </defs>

                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#1E293B"
                                    />

                                    <XAxis
                                        dataKey="day"
                                        stroke="#94A3B8"
                                    />

                                    <Tooltip />

                                    <Area
                                        type="monotone"
                                        dataKey="usage"
                                        stroke="#06B6D4"
                                        fillOpacity={1}
                                        fill="url(#colorUsage)"
                                        strokeWidth={4}
                                    />

                                </AreaChart>

                            </ResponsiveContainer>

                        </div>

                    </div>

                    {/* Pie Chart */}

                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-8">

                        <div className="mb-10">

                            <h3 className="text-3xl font-bold text-white">

                                Usage Distribution

                            </h3>

                            <p className="mt-2 text-gray-400">

                                Indoor vs outdoor usage analysis

                            </p>

                        </div>

                        <div className="h-[320px]">

                            <ResponsiveContainer width="100%" height="100%">

                                <PieChart>

                                    <Pie
                                        data={categoryData}
                                        dataKey="value"
                                        outerRadius={120}
                                    >

                                        {
                                            categoryData.map((entry, index) => (

                                                <Cell
                                                    key={index}
                                                    fill={COLORS[index]}
                                                />
                                            ))
                                        }

                                    </Pie>

                                    <Tooltip />

                                </PieChart>

                            </ResponsiveContainer>

                        </div>

                    </div>

                </div>

                {/* Bottom Grid */}

                <div className="grid lg:grid-cols-3 gap-10 mt-10">

                    {/* Bar Chart */}

                    <div className="lg:col-span-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-8">

                        <div className="mb-10">

                            <h3 className="text-3xl font-bold text-white">

                                Monthly Consumption

                            </h3>

                            <p className="mt-2 text-gray-400">

                                Water usage across recent months

                            </p>

                        </div>

                        <div className="h-[320px]">

                            <ResponsiveContainer width="100%" height="100%">

                                <BarChart data={monthlyData}>

                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#1E293B"
                                    />

                                    <XAxis
                                        dataKey="month"
                                        stroke="#94A3B8"
                                    />

                                    <Tooltip />

                                    <Bar
                                        dataKey="usage"
                                        fill="#06B6D4"
                                        radius={[10, 10, 0, 0]}
                                    />

                                </BarChart>

                            </ResponsiveContainer>

                        </div>

                    </div>

                    {/* AI Insights Panel */}

                    <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-[32px] p-8">

                        <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-3xl mb-8">

                            🤖

                        </div>

                        <h3 className="text-3xl font-bold text-white leading-snug">

                            AI Sustainability Insights

                        </h3>

                        <p className="mt-6 text-gray-300 leading-relaxed text-lg">

                            HydroPulse AI predicts
                            a 14% reduction in water
                            usage if outdoor consumption
                            decreases by 10 liters/day.

                        </p>

                        <div className="mt-10 space-y-5">

                            <div className="flex items-center justify-between">

                                <span className="text-gray-400">

                                    Prediction Accuracy

                                </span>

                                <span className="text-cyan-300 font-bold">

                                    92%

                                </span>

                            </div>

                            <div className="flex items-center justify-between">

                                <span className="text-gray-400">

                                    Efficiency Score

                                </span>

                                <span className="text-emerald-300 font-bold">

                                    Excellent

                                </span>

                            </div>

                            <div className="flex items-center justify-between">

                                <span className="text-gray-400">

                                    Risk Level

                                </span>

                                <span className="text-orange-300 font-bold">

                                    Moderate

                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default AnalyticsPreview;