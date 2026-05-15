import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {

    return (

        <footer className="border-t border-white/10 bg-[#020617] mt-20">

            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid lg:grid-cols-3 gap-14">

                    {/* Brand Section */}

                    <div>

                        <h2 className="text-4xl font-black text-cyan-400">

                            HydroPulse

                        </h2>

                        <p className="mt-6 text-gray-400 leading-relaxed text-lg">

                            Intelligent water footprint analytics
                            platform powered by AI-driven
                            sustainability insights and advanced
                            real-time monitoring.

                        </p>

                    </div>

                    {/* Navigation */}

                    <div>

                        <h3 className="text-2xl font-bold text-white mb-6">

                            Navigation

                        </h3>

                        <div className="flex flex-col gap-5">

                            <Link
                                to="/dashboard"
                                className="text-gray-400 hover:text-cyan-400 transition"
                            >
                                Dashboard
                            </Link>

                            <Link
                                to="/analytics"
                                className="text-gray-400 hover:text-cyan-400 transition"
                            >
                                Analytics
                            </Link>

                            <Link
                                to="/water-logs"
                                className="text-gray-400 hover:text-cyan-400 transition"
                            >
                                Water Logs
                            </Link>

                            <Link
                                to="/reports"
                                className="text-gray-400 hover:text-cyan-400 transition"
                            >
                                Reports
                            </Link>

                        </div>

                    </div>

                    {/* Connect Section */}

                    <div>

                        <h3 className="text-2xl font-bold text-white mb-6">

                            Connect

                        </h3>

                        <div className="flex items-center gap-5">

                            {/* GitHub */}

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300 text-2xl"
                            >

                                <FaGithub />

                            </a>

                            {/* LinkedIn */}

                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300 text-2xl"
                            >

                                <FaLinkedin />

                            </a>

                            {/* Email */}

                            <a
                                href="mailto:example@gmail.com"
                                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300 text-2xl"
                            >

                                <FaEnvelope />

                            </a>

                        </div>

                    </div>

                </div>

                {/* Bottom Footer */}

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">

                    <p className="text-gray-500 text-center md:text-left">

                        © 2026 HydroPulse. All rights reserved.

                    </p>

                    <p className="text-gray-500 text-center md:text-right">

                        Built with React, Tailwind CSS, Node.js & MySQL

                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;