import {
    LayoutDashboard,
    BarChart3,
    Droplets,
    FileText,
    Settings,
    Menu
} from "lucide-react";

import { Link } from "react-router-dom";

function Sidebar() {

    const menuItems = [
        {
            title: "Dashboard",
            icon: <LayoutDashboard size={22} />,
            path: "/dashboard"
        },
        {
            title: "Analytics",
            icon: <BarChart3 size={22} />,
            path: "/analytics"
        },
        {
            title: "Water Logs",
            icon: <Droplets size={22} />,
            path: "/water-logs"
        },
        {
            title: "Reports",
            icon: <FileText size={22} />,
            path: "/reports"
        },
        {
            title: "Settings",
            icon: <Settings size={22} />,
            path: "/settings"
        }
    ];

    return (

        <aside className="w-[280px] hidden lg:flex flex-col min-h-screen bg-[#020617] border-r border-white/10 p-8">

            {/* Logo */}

            <div className="mb-14">

                <h1 className="text-4xl font-black text-cyan-400">

                    HydroPulse

                </h1>

                <p className="mt-2 text-gray-500">

                    Water Intelligence Platform

                </p>

            </div>

            {/* Navigation */}

            <nav className="flex flex-col gap-4">

                {
                    menuItems.map((item, index) => (

                        <Link
                            key={index}
                            to={item.path}
                            className="group flex items-center gap-4 px-5 py-4 rounded-2xl text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-300"
                        >

                            {item.icon}

                            <span className="text-lg font-medium">

                                {item.title}

                            </span>

                        </Link>
                    ))
                }

            </nav>

            {/* Bottom Card */}

            <div className="mt-auto">

                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-6">

                    <h3 className="text-2xl font-bold text-white">

                        AI Prediction

                    </h3>

                    <p className="mt-4 text-gray-400 leading-relaxed">

                        HydroPulse AI predicts
                        14% lower water usage
                        next month.

                    </p>

                </div>

            </div>

        </aside>
    );
}

export default Sidebar;