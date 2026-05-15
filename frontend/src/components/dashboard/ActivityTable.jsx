function ActivityTable() {

    const activities = [
        {
            activity: "Shower Usage",
            liters: "40L",
            status: "Normal"
        },
        {
            activity: "Laundry",
            liters: "35L",
            status: "High"
        },
        {
            activity: "Dishwasher",
            liters: "20L",
            status: "Low"
        },
        {
            activity: "Garden Watering",
            liters: "60L",
            status: "Critical"
        }
    ];

    return (

        <div className="mt-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-10 overflow-x-auto">

            <div className="flex items-center justify-between mb-10">

                <h2 className="text-3xl font-bold text-white">

                    Recent Activity

                </h2>

                <button className="px-5 py-3 rounded-2xl bg-cyan-500 text-black font-bold">

                    Export Report

                </button>

            </div>

            <table className="w-full">

                <thead>

                    <tr className="text-left text-gray-400 border-b border-white/10">

                        <th className="pb-5">Activity</th>
                        <th className="pb-5">Usage</th>
                        <th className="pb-5">Status</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        activities.map((item, index) => (

                            <tr
                                key={index}
                                className="border-b border-white/5"
                            >

                                <td className="py-6 text-white">

                                    {item.activity}

                                </td>

                                <td className="py-6 text-cyan-300">

                                    {item.liters}

                                </td>

                                <td className="py-6">

                                    <span className="px-4 py-2 rounded-xl bg-white/5 text-gray-300">

                                        {item.status}

                                    </span>

                                </td>

                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    );
}

export default ActivityTable;