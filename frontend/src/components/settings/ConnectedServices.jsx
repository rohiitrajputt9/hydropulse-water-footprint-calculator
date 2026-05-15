import {

    useEffect,
    useState

} from "react";

import toast from "react-hot-toast";

function ConnectedServices() {

    const [services, setServices] = useState({

        googleSheets: false,

        aiEngine: true,

        csvExport: false,

        iotSync: false
    });

    // LOAD SAVED SERVICES

    useEffect(() => {

        const savedServices = localStorage.getItem(

            "hydropulse_services"
        );

        if (savedServices) {

            setServices(

                JSON.parse(savedServices)
            );
        }

    }, []);

    // TOGGLE SERVICE

    const toggleService = (service) => {

        const updatedServices = {

            ...services,

            [service]: !services[service]
        };

        setServices(updatedServices);

        localStorage.setItem(

            "hydropulse_services",

            JSON.stringify(updatedServices)
        );

        toast.success(

            `${service} updated successfully`
        );
    };

    return (

        <div className="mt-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-10">

            {/* HEADER */}

            <div>

                <h2 className="text-4xl font-black text-white">

                    Connected Services

                </h2>

                <p className="mt-3 text-gray-400 text-lg">

                    Manage integrations, cloud sync and smart services

                </p>

            </div>

            {/* SERVICES */}

            <div className="mt-10 grid md:grid-cols-2 gap-8">

                {/* GOOGLE SHEETS */}

                <div className="bg-[#0F172A] rounded-3xl p-8 border border-white/5">

                    <div className="flex items-center justify-between">

                        <div>

                            <h3 className="text-3xl font-bold text-white">

                                Google Sheets

                            </h3>

                            <p className="mt-3 text-gray-400">

                                Export analytics directly to spreadsheets

                            </p>

                        </div>

                        <button

                            onClick={() => {

                                toggleService("googleSheets");
                            }}

                            className={`
                                px-5 py-3 rounded-2xl font-bold transition

                                ${
                                    services.googleSheets

                                        ? "bg-emerald-500/20 text-emerald-300"

                                        : "bg-white/10 text-white"
                                }
                            `}
                        >

                            {
                                services.googleSheets

                                    ? "Connected"

                                    : "Connect"
                            }

                        </button>

                    </div>

                </div>

                {/* AI ENGINE */}

                <div className="bg-[#0F172A] rounded-3xl p-8 border border-white/5">

                    <div className="flex items-center justify-between">

                        <div>

                            <h3 className="text-3xl font-bold text-white">

                                AI Engine

                            </h3>

                            <p className="mt-3 text-gray-400">

                                Intelligent sustainability predictions

                            </p>

                        </div>

                        <button

                            onClick={() => {

                                toggleService("aiEngine");
                            }}

                            className={`
                                px-5 py-3 rounded-2xl font-bold transition

                                ${
                                    services.aiEngine

                                        ? "bg-cyan-500/20 text-cyan-300"

                                        : "bg-white/10 text-white"
                                }
                            `}
                        >

                            {
                                services.aiEngine

                                    ? "Active"

                                    : "Disabled"
                            }

                        </button>

                    </div>

                </div>

                {/* CSV EXPORT */}

                <div className="bg-[#0F172A] rounded-3xl p-8 border border-white/5">

                    <div className="flex items-center justify-between">

                        <div>

                            <h3 className="text-3xl font-bold text-white">

                                CSV Export

                            </h3>

                            <p className="mt-3 text-gray-400">

                                Download analytics and reports instantly

                            </p>

                        </div>

                        <button

                            onClick={() => {

                                toggleService("csvExport");
                            }}

                            className={`
                                px-5 py-3 rounded-2xl font-bold transition

                                ${
                                    services.csvExport

                                        ? "bg-orange-500/20 text-orange-300"

                                        : "bg-white/10 text-white"
                                }
                            `}
                        >

                            {
                                services.csvExport

                                    ? "Enabled"

                                    : "Enable"
                            }

                        </button>

                    </div>

                </div>

                {/* IoT SYNC */}

                <div className="bg-[#0F172A] rounded-3xl p-8 border border-white/5">

                    <div className="flex items-center justify-between">

                        <div>

                            <h3 className="text-3xl font-bold text-white">

                                IoT Device Sync

                            </h3>

                            <p className="mt-3 text-gray-400">

                                Connect smart water monitoring devices

                            </p>

                        </div>

                        <button

                            onClick={() => {

                                toggleService("iotSync");
                            }}

                            className={`
                                px-5 py-3 rounded-2xl font-bold transition

                                ${
                                    services.iotSync

                                        ? "bg-purple-500/20 text-purple-300"

                                        : "bg-white/10 text-white"
                                }
                            `}
                        >

                            {
                                services.iotSync

                                    ? "Connected"

                                    : "Connect"
                            }

                        </button>

                    </div>

                </div>

            </div>

            {/* STATUS */}

            <div className="mt-10 bg-[#0F172A] rounded-3xl p-8 border border-white/5">

                <h3 className="text-2xl font-black text-white">

                    Integration Status
                </h3>

                <div className="mt-6 grid md:grid-cols-4 gap-5">

                    <div className="bg-white/5 rounded-2xl p-5">

                        <p className="text-gray-400">

                            Active Services
                        </p>

                        <h2 className="mt-2 text-4xl font-black text-cyan-400">

                            {
                                Object.values(services)

                                    .filter(Boolean)

                                    .length
                            }

                        </h2>

                    </div>

                    <div className="bg-white/5 rounded-2xl p-5">

                        <p className="text-gray-400">

                            Cloud Sync
                        </p>

                        <h2 className="mt-2 text-2xl font-black text-emerald-400">

                            {
                                services.googleSheets

                                    ? "Enabled"

                                    : "Disabled"
                            }

                        </h2>

                    </div>

                    <div className="bg-white/5 rounded-2xl p-5">

                        <p className="text-gray-400">

                            AI Status
                        </p>

                        <h2 className="mt-2 text-2xl font-black text-cyan-400">

                            {
                                services.aiEngine

                                    ? "Online"

                                    : "Offline"
                            }

                        </h2>

                    </div>

                    <div className="bg-white/5 rounded-2xl p-5">

                        <p className="text-gray-400">

                            Export System
                        </p>

                        <h2 className="mt-2 text-2xl font-black text-orange-400">

                            {
                                services.csvExport

                                    ? "Ready"

                                    : "Inactive"
                            }

                        </h2>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ConnectedServices;