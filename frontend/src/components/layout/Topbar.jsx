import { Bell, Search, User, Menu, Sun, Moon } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Topbar({ toggleSidebar, theme, toggleTheme }) {
    const navigate = useNavigate();
    const { logout, user } = useContext(AuthContext);

    return (
        <header className="h-[90px] border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl flex items-center justify-between px-6 md:px-8 sticky top-0 z-30 transition-colors duration-300">
            {/* Mobile Hamburger Toggle */}
            <button 
                onClick={toggleSidebar}
                className="lg:hidden p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-gray-500 dark:text-gray-300 hover:text-cyan-500 hover:border-cyan-500 dark:hover:text-cyan-400 dark:hover:border-cyan-400 transition mr-4 cursor-pointer"
            >
                <Menu size={22} />
            </button>

            {/* SEARCH */}
            <div className="hidden md:flex items-center gap-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-3 w-[260px] lg:w-[320px]">
                <Search size={20} className="text-gray-400" />
                <input
                    type="text"
                    placeholder="Search analytics..."
                    className="bg-transparent outline-none text-slate-800 dark:text-white w-full text-sm placeholder-gray-400"
                />
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-3 md:gap-4 ml-auto">
                {/* THEME TOGGLE */}
                <button 
                    onClick={toggleTheme}
                    className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-300 transition cursor-pointer"
                    title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* NOTIFICATION */}
                <button className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-300 transition">
                    <Bell size={20} />
                </button>

                {/* USER PROFILE */}
                <div className="flex items-center gap-3 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-3 py-2">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-300">
                        <User size={20} />
                    </div>
                    <div className="hidden sm:block">
                        <h3 className="text-slate-800 dark:text-white font-semibold text-sm leading-none">
                            {user?.user?.full_name || "HydroPulse User"}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 leading-none">
                            {user?.user?.email || "Sustainability Analyst"}
                        </p>
                    </div>
                </div>

                {/* LOGOUT */}
                <button
                    onClick={() => {
                        logout();
                        navigate("/login");
                    }}
                    className="px-4 py-2.5 rounded-2xl bg-red-500/10 dark:bg-red-500/20 border border-red-500/20 text-red-600 dark:text-red-300 hover:bg-red-500/20 dark:hover:bg-red-500/30 transition text-sm font-semibold cursor-pointer"
                >
                    Logout
                </button>
            </div>
        </header>
    );
}

export default Topbar;