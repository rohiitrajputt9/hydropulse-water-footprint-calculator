import {

    useEffect,
    useState

} from "react";

import {

    ResponsiveContainer,

    AreaChart,
    Area,

    BarChart,
    Bar,

    PieChart,
    Pie,
    Cell,

    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend

} from "recharts";

import {

    getWeeklyTrends,
    getMonthlyTrends,
    getCategoryBreakdown

} from "../../services/analyticsService";

function DashboardCharts({ analytics }) {

    const [weeklyData, setWeeklyData] = useState([]);

    const [monthlyData, setMonthlyData] = useState([]);

    const [pieData, setPieData] = useState([]);

    // FETCH ALL ANALYTICS

    useEffect(() => {

        fetchCharts();

    }, []);

    const fetchCharts = async () => {

        try {

            // WEEKLY TRENDS

            const weekly = await getWeeklyTrends();

            const formattedWeekly = weekly.map((item) => ({

                day: new Date(item.date)
                    .toLocaleDateString("en-US", {

                        weekday: "short"
                    }),

                usage: Number(item.totalUsage)
            }));

            setWeeklyData(formattedWeekly);

            // MONTHLY TRENDS

            const monthly = await getMonthlyTrends();

            const formattedMonthly = monthly.map((item) => ({

                month: item.month,

                usage: Number(item.totalUsage)
            }));

            setMonthlyData(formattedMonthly);

            // CATEGORY BREAKDOWN

            const category = await getCategoryBreakdown();

            setPieData([

                {

                    name: "Indoor",

                    value: Number(category.indoorUsage)
                },

                {

                    name: "Outdoor",

                    value: Number(category.outdoorUsage)
                }
            ]);

        } catch (error) {

            console.log(error);
        }
    };

    const COLORS = [

        "#06B6D4",

        "#2563EB"
    ];

    return (

        <div className="grid xl:grid-cols-3 gap-8 mt-12">

            {/* WEEKLY AREA CHART */}

            <div className="xl:col-span-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-8 shadow-2xl">

                <div className="mb-10">

                    <h2 className="text-3xl font-black text-white">

                        Weekly Water Usage

                    </h2>

                    <p className="mt-2 text-gray-400">

                        Real historical SQL trend analysis

                    </p>

                </div>

                <div className="h-[350px]">

                    <ResponsiveContainer width="100%" height="100%">

                        <AreaChart data={weeklyData}>

                            <defs>

                                <linearGradient
                                    id="usageGradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >

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

                            <YAxis
                                stroke="#94A3B8"
                            />

                            <Tooltip />

                            <Area
                                type="monotone"
                                dataKey="usage"
                                stroke="#06B6D4"
                                fill="url(#usageGradient)"
                                strokeWidth={4}
                            />

                        </AreaChart>

                    </ResponsiveContainer>

                </div>

            </div>

            {/* PIE CHART */}

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-8 shadow-2xl">

                <h2 className="text-3xl font-black text-white">

                    Usage Distribution

                </h2>

                <p className="mt-2 text-gray-400">

                    Indoor vs Outdoor usage analytics

                </p>

                <div className="h-[350px] mt-8">

                    <ResponsiveContainer width="100%" height="100%">

                        <PieChart>

                            <Pie
                                data={pieData}
                                dataKey="value"
                                outerRadius={110}
                                label
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

                            <Legend />

                        </PieChart>

                    </ResponsiveContainer>

                </div>

            </div>

            {/* MONTHLY BAR CHART */}

            <div className="xl:col-span-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-8 shadow-2xl">

                <div className="mb-10">

                    <h2 className="text-3xl font-black text-white">

                        Monthly Consumption Trends

                    </h2>

                    <p className="mt-2 text-gray-400">

                        Real SQL-based monthly aggregation

                    </p>

                </div>

                <div className="h-[350px]">

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

                            <YAxis
                                stroke="#94A3B8"
                            />

                            <Tooltip />

                            <Bar
                                dataKey="usage"
                                fill="#06B6D4"
                                radius={[12, 12, 0, 0]}
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

            </div>

        </div>
    );
}

export default DashboardCharts;