import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#020617] mt-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
                    {/* Brand Section */}
                    <div>
                        <h2 className="text-3xl font-black text-cyan-500 dark:text-cyan-400">
                            HydroPulse
                        </h2>
                        <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                            Intelligent water footprint analytics platform powered by AI-driven
                            sustainability insights and advanced real-time monitoring.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-5">
                            Navigation
                        </h3>
                        <div className="flex flex-col gap-3.5 text-sm">
                            <Link
                                to="/dashboard"
                                className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
                            >
                                Dashboard
                            </Link>
                            <Link
                                to="/analytics"
                                className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
                            >
                                Analytics
                            </Link>
                            <Link
                                to="/water-logs"
                                className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
                            >
                                Water Logs
                            </Link>
                            <Link
                                to="/reports"
                                className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
                            >
                                Reports
                            </Link>
                        </div>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-5">
                            Connect
                        </h3>
                        <div className="flex items-center gap-4">
                            {/* GitHub */}
                            <a
                                href="https://github.com/rohiitrajputt9"
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-300 hover:text-cyan-500 hover:border-cyan-500/40 dark:hover:text-cyan-400 dark:hover:border-cyan-400/40 transition duration-300 text-xl"
                            >
                                <FaGithub />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-300 hover:text-cyan-500 hover:border-cyan-500/40 dark:hover:text-cyan-400 dark:hover:border-cyan-400/40 transition duration-300 text-xl"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-12 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-gray-400">
                    <p className="text-center md:text-left">
                        © 2026 HydroPulse. Developed by Rohit Rajput. All rights reserved.
                    </p>
                    <p className="text-center md:text-right">
                        Built with React, Tailwind CSS, Node.js & PostgreSQL
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;