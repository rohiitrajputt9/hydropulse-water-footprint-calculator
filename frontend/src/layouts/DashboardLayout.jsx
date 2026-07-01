import { useState, useEffect } from "react";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import Footer from "../components/layout/Footer";

function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    // APPLY THEME
    useEffect(() => {
        if (theme === "light") {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="flex bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white min-h-screen transition-colors duration-300">
            {/* Sidebar drawer containing navigation links */}
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            
            {/* Main content wrapper */}
            <div className="flex-1 flex flex-col min-w-0">
                <Topbar 
                    toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
                    theme={theme} 
                    toggleTheme={toggleTheme} 
                />
                
                <main className="p-4 md:p-8 flex-1">
                    {children}
                </main>
                
                <Footer />
            </div>
        </div>
    );
}

export default DashboardLayout;