import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWaterLogs } from "../../services/waterLogsService";

function ActivityTable() {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecentLogs = async () => {
            try {
                const data = await getWaterLogs();
                // Take the 5 most recent logs
                setLogs(data.slice(0, 5));
            } catch (error) {
                console.error("Failed to load recent activity:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecentLogs();
    }, []);

    return (
        <div className="mt-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-10 overflow-x-auto shadow-2xl">
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold text-white">
                    Recent Activity
                </h2>
                <Link to="/reports" className="px-5 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm transition cursor-pointer">
                    Export Report
                </Link>
            </div>

            {loading ? (
                <div className="text-center py-6 text-gray-400">Loading activity...</div>
            ) : logs.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-400 text-lg">No water usage logged yet.</p>
                    <Link to="/water-logs" className="mt-4 inline-block text-cyan-400 hover:underline">
                        Log Water Usage Now →
                    </Link>
                </div>
            ) : (
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-gray-400 border-b border-white/10">
                            <th className="pb-5">Log Date</th>
                            <th className="pb-5">Total Usage (L)</th>
                            <th className="pb-5">Distribution (Indoor / Outdoor)</th>
                            <th className="pb-5">Sustainability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((item) => (
                            <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition duration-200">
                                <td className="py-6 text-white font-medium">
                                    {new Date(item.log_date).toLocaleDateString(undefined, {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </td>
                                <td className="py-6 text-cyan-300 font-bold">
                                    {item.total_usage} L
                                </td>
                                <td className="py-6 text-gray-300">
                                    {item.indoor_usage} L / {item.outdoor_usage} L
                                </td>
                                <td className="py-6">
                                    <span className={`px-4 py-2 rounded-xl text-xs font-bold ${
                                        item.sustainability_status === "LOW"
                                            ? "bg-emerald-500/20 text-emerald-300"
                                            : item.sustainability_status === "AVERAGE"
                                            ? "bg-cyan-500/20 text-cyan-300"
                                            : "bg-red-500/20 text-red-300"
                                    }`}>
                                        {item.sustainability_status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ActivityTable;