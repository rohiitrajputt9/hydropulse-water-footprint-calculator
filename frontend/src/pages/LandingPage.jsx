import { motion } from "framer-motion";
import StatsSection from "../components/sections/StatsSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import AnalyticsPreview from "../components/sections/AnalyticsPreview";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

function LandingPage() {

    return (

        <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">

            {/* Animated Background */}

            <div className="absolute inset-0">

                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />

                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />

            </div>

            {/* Navbar */}
            <header className="relative z-15 border-b border-white/5 bg-[#020617]/50 backdrop-blur-md sticky top-0">
                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                    <Link to="/" className="text-3xl font-black tracking-wide text-cyan-400">
                        HydroPulse
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 text-gray-300 font-semibold text-sm">
                        <a href="#features" className="hover:text-cyan-400 transition">
                            Features
                        </a>
                        <a href="#analytics" className="hover:text-cyan-400 transition">
                            Analytics
                        </a>
                        <a href="#contact" className="hover:text-cyan-400 transition">
                            Contact
                        </a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link
                            to="/login"
                            className="px-5 py-2.5 rounded-xl border border-white/10 hover:border-cyan-400/50 text-white font-semibold text-sm transition"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm transition shadow-lg shadow-cyan-500/10"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}

            <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 mb-8">

                        AI Powered Water Intelligence Platform

                    </div>

                    <h1 className="text-6xl lg:text-7xl font-black leading-tight">

                        Track Every Drop.
                        <br />

                        <span className="text-cyan-400">

                            Predict Every Trend.

                        </span>

                    </h1>

                    <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-2xl">

                        HydroPulse helps users monitor, analyze,
                        and predict water consumption using
                        advanced analytics, AI-driven insights,
                        and sustainability tracking.

                    </p>

                    <div className="mt-10 flex flex-wrap gap-6">

                        <Link
                            to="/register"
                            className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition text-center"
                        >

                            Start Tracking

                        </Link>

                        <Link
                            to="/login"
                            className="px-8 py-4 rounded-2xl border border-gray-700 hover:border-cyan-400 text-white font-bold text-lg transition text-center"
                        >

                            View Analytics

                        </Link>

                    </div>

                </motion.div>

                {/* Right Dashboard Preview */}

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >

                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">

                        <div className="flex items-center justify-between mb-8">

                            <div>

                                <h3 className="text-2xl font-bold">

                                    Water Analytics

                                </h3>

                                <p className="text-gray-400 mt-2">

                                    Real-time sustainability monitoring

                                </p>

                            </div>

                            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">

                                💧

                            </div>

                        </div>

                        <div className="grid grid-cols-2 gap-6">

                            <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">

                                <p className="text-gray-400">

                                    Daily Usage

                                </p>

                                <h2 className="text-4xl font-bold mt-3">

                                    173L

                                </h2>

                            </div>

                            <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20">

                                <p className="text-gray-400">

                                    Eco Score

                                </p>

                                <h2 className="text-4xl font-bold mt-3">

                                    82%

                                </h2>

                            </div>

                            <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">

                                <p className="text-gray-400">

                                    Prediction

                                </p>

                                <h2 className="text-4xl font-bold mt-3">

                                    160L

                                </h2>

                            </div>

                            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">

                                <p className="text-gray-400">

                                    Saved

                                </p>

                                <h2 className="text-4xl font-bold mt-3">

                                    24L

                                </h2>

                            </div>

                        </div>
                        

                    </div>
                    

                </motion.div>

            </section>


<div id="stats"><StatsSection /></div>
<div id="features"><FeaturesSection /></div>
<div id="analytics"><AnalyticsPreview /></div>

<section
    id="contact"
    className="relative z-10 py-32"
>

    <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-black text-white">
            Contact HydroPulse
        </h2>

        <p className="mt-6 text-xl text-gray-400">
            Build sustainable water intelligence systems.
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">

            <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-[400px] bg-[#0F172A] border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-cyan-400"
            />

            <button className="px-8 py-5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold">
                Contact Us
            </button>

        </div>

    </div>

</section>
    <Footer />

</div>
    );
    
}


export default LandingPage;