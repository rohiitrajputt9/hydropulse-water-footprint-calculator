import {

    useEffect,
    useState

} from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import WaterLogForm from "../components/waterlogs/WaterLogForm";

import WaterLogsTable from "../components/waterlogs/WaterLogsTable";

import {

    getWaterLogs

} from "../services/waterLogsService";

import toast from "react-hot-toast";

function WaterLogs() {

    const [logs, setLogs] = useState([]);

    const [loading, setLoading] = useState(true);

    // FETCH WATER LOGS

    const fetchLogs = async () => {

        try {

            const data = await getWaterLogs();

            setLogs(data);

        } catch (error) {

            console.log(error);

            toast.error("Failed to fetch water logs");

        } finally {

            setLoading(false);
        }
    };

    useEffect(() => {

        fetchLogs();

    }, []);

    return (

        <DashboardLayout>

            <div>

                {/* HEADER */}

                <div className="mb-12">

                    <h1 className="text-5xl font-black text-white">

                        Water Logs

                    </h1>

                    <p className="mt-4 text-gray-400 text-xl">

                        Monitor, analyze and manage sustainability records

                    </p>

                </div>

                {/* FORM */}

                <WaterLogForm fetchLogs={fetchLogs} />

                {/* TABLE */}

                {
                    loading ? (

                        <div className="mt-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-10 text-center">

                            <h2 className="text-3xl font-black text-white">

                                Loading Water Logs...

                            </h2>

                        </div>

                    ) : (

                        <WaterLogsTable
                            logs={logs}
                            fetchLogs={fetchLogs}
                        />

                    )
                }

            </div>

        </DashboardLayout>
    );
}

export default WaterLogs;