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

function AnalyticsCharts() {

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

    const pieData = [
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

        <div className="mt-10 grid lg:grid-cols-2 gap-10">

            {/* Area Chart */}

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-8">

                <h2 className="text-3xl font-bold text-white mb-10">

                    Weekly Trends

                </h2>

                <div className="h-[320px]">

                    <ResponsiveContainer width="100%" height="100%">

                        <AreaChart data={weeklyData}>

                            <defs>

                                <linearGradient id="analyticsGradient" x1="0" y1="0" x2="0" y2="1">

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
                                fill="url(#analyticsGradient)"
                                strokeWidth={4}
                            />

                        </AreaChart>

                    </ResponsiveContainer>

                </div>

            </div>

            {/* Pie Chart */}

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-8">

                <h2 className="text-3xl font-bold text-white mb-10">

                    Usage Categories

                </h2>

                <div className="h-[320px]">

                    <ResponsiveContainer width="100%" height="100%">

                        <PieChart>

                            <Pie
                                data={pieData}
                                dataKey="value"
                                outerRadius={120}
                            >

                                {
                                    pieData.map((entry, index) => (

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

            {/* Bar Chart */}

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-8">

                <h2 className="text-3xl font-bold text-white mb-10">

                    Monthly Comparison

                </h2>

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

            {/* Line Chart */}

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-8">

                <h2 className="text-3xl font-bold text-white mb-10">

                    AI Prediction Trends

                </h2>

                <div className="h-[320px]">

                    <ResponsiveContainer width="100%" height="100%">

                        <LineChart data={monthlyData}>

                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="#1E293B"
                            />

                            <XAxis
                                dataKey="month"
                                stroke="#94A3B8"
                            />

                            <Tooltip />

                            <Line
                                type="monotone"
                                dataKey="usage"
                                stroke="#8B5CF6"
                                strokeWidth={4}
                            />

                        </LineChart>

                    </ResponsiveContainer>

                </div>

            </div>

        </div>
    );
}

export default AnalyticsCharts;