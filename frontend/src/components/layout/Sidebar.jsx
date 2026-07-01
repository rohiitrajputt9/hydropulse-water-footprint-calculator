import {
    LayoutDashboard,
    BarChart3,
    Droplets,
    FileText,
    Settings,
    X
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }) {
    const location = useLocation();

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
        <>
            {/* Mobile Sidebar Backdrop Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 z-45 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar drawer panel */}
            <aside className={`
                fixed top-0 bottom-0 left-0 z-50 w-[280px] flex flex-col bg-white dark:bg-[#020617] border-r border-slate-200 dark:border-white/10 p-8 transition-transform duration-300 ease-in-out
                lg:translate-x-0 lg:static lg:h-auto
                ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}>
                {/* Brand Logo & Close Action */}
                <div className="flex items-center justify-between mb-14">
                    <div>
                        <h1 className="text-3xl font-black text-cyan-500 dark:text-cyan-400">
                            HydroPulse
                        </h1>
                        <p className="mt-2 text-gray-500 text-xs">
                            Water Intelligence Platform
                        </p>
                    </div>
                    {/* Close Button on Mobile */}
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-gray-500 dark:text-gray-300 hover:text-cyan-500 hover:border-cyan-500 dark:hover:text-cyan-400 dark:hover:border-cyan-400 transition cursor-pointer"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Sidebar Menu Items */}
                <nav className="flex flex-col gap-3">
                    {menuItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={index}
                                to={item.path}
                                onClick={() => setIsOpen(false)} // Auto-close drawer on click in mobile
                                className={`
                                    group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 border-l-4
                                    ${isActive 
                                        ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500 font-bold" 
                                        : "text-gray-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-cyan-500/5 hover:text-cyan-500 dark:hover:text-cyan-300 border-transparent"
                                    }
                                `}
                            >
                                {item.icon}
                                <span className="text-lg font-medium">
                                    {item.title}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                {/* AI info card at the bottom (hidden on small screen views) */}
                <div className="mt-auto hidden sm:block">
                    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/10 rounded-3xl p-6">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                            AI Prediction
                        </h3>
                        <p className="mt-3 text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                            HydroPulse AI predicts 14% lower water usage next month.
                        </p>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;