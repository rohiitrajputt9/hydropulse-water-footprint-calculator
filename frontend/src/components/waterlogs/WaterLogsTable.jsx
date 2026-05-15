import {

    useMemo,
    useState

} from "react";

import toast from "react-hot-toast";

import {

    deleteWaterLog

} from "../../services/waterLogsService";

function WaterLogsTable({

    logs,
    fetchLogs

}) {

    const [search, setSearch] = useState("");

    const [filter, setFilter] = useState("All");

    // DELETE LOG

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(

            "Are you sure you want to delete this water log?"
        );

        if (!confirmDelete) return;

        try {

            await deleteWaterLog(id);

            toast.success("Water log deleted successfully");

            fetchLogs();

        } catch (error) {

            console.log(error);

            toast.error("Failed to delete water log");
        }
    };

    // FILTERED LOGS

    const filteredLogs = useMemo(() => {

        return logs.filter((item) => {

            const matchesSearch =

                item.sustainability_status
                    ?.toLowerCase()
                    .includes(search.toLowerCase())

                ||

                item.log_date
                    ?.toString()
                    .includes(search);

            const category =

                Number(item.outdoor_usage) >
                Number(item.indoor_usage)

                    ? "Outdoor"

                    : "Indoor";

            const matchesFilter =

                filter === "All"

                    ? true

                    : filter === category;

            return matchesSearch && matchesFilter;
        });

    }, [logs, search, filter]);

    return (

        <div className="mt-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-10 overflow-x-auto shadow-2xl">

            {/* HEADER */}

            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

                <div>

                    <h2 className="text-4xl font-black text-white">

                        Water Logs

                    </h2>

                    <p className="mt-2 text-gray-400 text-lg">

                        Live sustainability tracking records

                    </p>

                </div>

                {/* SEARCH + FILTER */}

                <div className="flex flex-col md:flex-row gap-4">

                    <input
                        type="text"
                        placeholder="Search by date or status..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-[#0F172A] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                    />

                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="bg-[#0F172A] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                    >

                        <option>All</option>
                        <option>Indoor</option>
                        <option>Outdoor</option>

                    </select>

                </div>

            </div>

            {/* TABLE */}

            <table className="w-full min-w-[1100px]">

                <thead>

                    <tr className="text-left text-gray-400 border-b border-white/10">

                        <th className="pb-5">Date</th>

                        <th className="pb-5">Indoor Usage</th>

                        <th className="pb-5">Outdoor Usage</th>

                        <th className="pb-5">Total Usage</th>

                        <th className="pb-5">Status</th>

                        <th className="pb-5">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        filteredLogs.length > 0 ? (

                            filteredLogs.map((item) => (

                                <tr
                                    key={item.id}
                                    className="border-b border-white/5 hover:bg-white/5 transition-all"
                                >

                                    {/* DATE */}

                                    <td className="py-6 text-white font-medium">

                                        {
                                            new Date(item.log_date)
                                                .toLocaleDateString()
                                        }

                                    </td>

                                    {/* INDOOR */}

                                    <td className="py-6 text-cyan-300 font-semibold">

                                        {item.indoor_usage}L

                                    </td>

                                    {/* OUTDOOR */}

                                    <td className="py-6 text-blue-300 font-semibold">

                                        {item.outdoor_usage}L

                                    </td>

                                    {/* TOTAL */}

                                    <td className="py-6 text-white font-bold">

                                        {item.total_usage}L

                                    </td>

                                    {/* STATUS */}

                                    <td className="py-6">

                                        <span
                                            className={`
                                                px-4
                                                py-2
                                                rounded-full
                                                text-sm
                                                font-bold

                                                ${
                                                    item.sustainability_status === "LOW"
                                                        ? "bg-emerald-500/20 text-emerald-300"

                                                        : item.sustainability_status === "AVERAGE"
                                                        ? "bg-yellow-500/20 text-yellow-300"

                                                        : "bg-red-500/20 text-red-300"
                                                }
                                            `}
                                        >

                                            {item.sustainability_status}

                                        </span>

                                    </td>

                                    {/* ACTIONS */}

                                    <td className="py-6">

                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="px-5 py-2 rounded-xl bg-red-500/20 text-red-300 hover:bg-red-500/30 transition"
                                        >

                                            Delete

                                        </button>

                                    </td>

                                </tr>
                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="6"
                                    className="py-16 text-center text-gray-400 text-xl"
                                >

                                    No water logs found

                                </td>

                            </tr>
                        )
                    }

                </tbody>

            </table>

        </div>
    );
}

export default WaterLogsTable;