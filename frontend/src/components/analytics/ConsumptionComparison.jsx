function ConsumptionComparison() {

    return (

        <div className="mt-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-10">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                <div>

                    <h2 className="text-4xl font-black text-white">

                        Sustainability Benchmark

                    </h2>

                    <p className="mt-3 text-gray-400 text-lg">

                        Compare current usage against recommended sustainability standards

                    </p>

                </div>

                <div className="px-6 py-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">

                    <span className="text-cyan-300 font-bold text-xl">

                        18% Better Than Average

                    </span>

                </div>

            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8">

                <div className="bg-[#0F172A] rounded-3xl p-8">

                    <p className="text-gray-400 text-lg">

                        Your Average

                    </p>

                    <h2 className="mt-4 text-5xl font-black text-white">

                        173L

                    </h2>

                </div>

                <div className="bg-[#0F172A] rounded-3xl p-8">

                    <p className="text-gray-400 text-lg">

                        National Average

                    </p>

                    <h2 className="mt-4 text-5xl font-black text-white">

                        210L

                    </h2>

                </div>

                <div className="bg-[#0F172A] rounded-3xl p-8">

                    <p className="text-gray-400 text-lg">

                        Recommended

                    </p>

                    <h2 className="mt-4 text-5xl font-black text-white">

                        150L

                    </h2>

                </div>

            </div>

        </div>
    );
}

export default ConsumptionComparison;