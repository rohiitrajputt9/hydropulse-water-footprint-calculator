import {

    useEffect,
    useState

} from "react";

import toast from "react-hot-toast";

function GoalsSettings() {

    const [monthlyGoal, setMonthlyGoal] = useState(5000);

    const [savedGoal, setSavedGoal] = useState(5000);

    // LOAD SAVED GOAL

    useEffect(() => {

        const storedGoal = localStorage.getItem(

            "hydropulse_monthly_goal"
        );

        if (storedGoal) {

            setMonthlyGoal(Number(storedGoal));

            setSavedGoal(Number(storedGoal));
        }

    }, []);

    // SAVE GOAL

    const handleSaveGoal = () => {

        localStorage.setItem(

            "hydropulse_monthly_goal",

            monthlyGoal
        );

        setSavedGoal(monthlyGoal);

        toast.success(

            "Monthly sustainability goal updated"
        );
    };

    // AI LOGIC

    let recommendation =
        "Excellent sustainability performance detected.";

    if (monthlyGoal > 7000) {

        recommendation =
            "High monthly target detected. Consider reducing outdoor water usage for better sustainability.";

    } else if (monthlyGoal > 5500) {

        recommendation =
            "Moderate sustainability goal. Reducing shower duration may improve water efficiency.";

    } else if (monthlyGoal < 4000) {

        recommendation =
            "Aggressive eco target detected. Excellent sustainability ambition!";
    }

    return (

        <div className="mt-10 grid lg:grid-cols-2 gap-10">

            {/* GOALS */}

            <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-[32px] p-10">

                <h2 className="text-4xl font-black text-white">

                    Sustainability Goals

                </h2>

                <p className="mt-4 text-gray-400 text-lg">

                    Configure smart monthly sustainability targets

                </p>

                <div className="mt-10">

                    <label className="block text-gray-300 mb-3 text-lg">

                        Monthly Water Limit (Liters)

                    </label>

                    <input
                        type="number"
                        value={monthlyGoal}
                        onChange={(e) => {

                            setMonthlyGoal(e.target.value);
                        }}
                        className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-5 py-5 text-white outline-none focus:border-cyan-400"
                    />

                    {/* GOAL STATUS */}

                    <div className="mt-6 bg-[#0F172A] rounded-2xl p-5 border border-white/5">

                        <p className="text-gray-400">

                            Current Monthly Goal
                        </p>

                        <h3 className="mt-2 text-4xl font-black text-cyan-400">

                            {savedGoal}L

                        </h3>

                    </div>

                    {/* BUTTON */}

                    <button

                        onClick={handleSaveGoal}

                        className="mt-6 w-full py-5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold text-lg"

                    >

                        Update Goal

                    </button>

                </div>

            </div>

            {/* AI RECOMMENDATION */}

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-10">

                <div className="flex items-center gap-5">

                    <div className="w-20 h-20 rounded-3xl bg-cyan-500/20 flex items-center justify-center">

                        <div className="w-10 h-10 rounded-2xl bg-cyan-400 flex items-center justify-center text-black font-black text-xl">

                            AI

                        </div>

                    </div>

                    <div>

                        <h2 className="text-4xl font-black text-white">

                            AI Recommendations

                        </h2>

                        <p className="mt-2 text-gray-400">

                            Intelligent sustainability insights

                        </p>

                    </div>

                </div>

                {/* AI CARD */}

                <div className="mt-10 bg-[#0F172A] rounded-3xl p-8 border border-white/5">

                    <p className="text-xl text-gray-300 leading-relaxed">

                        {recommendation}

                    </p>

                </div>

                {/* PERFORMANCE */}

                <div className="mt-8 grid grid-cols-2 gap-5">

                    <div className="bg-[#0F172A] rounded-2xl p-5 border border-white/5">

                        <p className="text-gray-400">

                            Sustainability Level
                        </p>

                        <h3 className="mt-2 text-2xl font-black text-cyan-400">

                            {
                                monthlyGoal < 4000

                                    ? "Excellent"

                                    : monthlyGoal < 6000

                                    ? "Moderate"

                                    : "High Usage"
                            }

                        </h3>

                    </div>

                    <div className="bg-[#0F172A] rounded-2xl p-5 border border-white/5">

                        <p className="text-gray-400">

                            Estimated Savings
                        </p>

                        <h3 className="mt-2 text-2xl font-black text-cyan-400">

                            {
                                monthlyGoal < 5000

                                    ? "25%"

                                    : "10%"
                            }

                        </h3>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default GoalsSettings;