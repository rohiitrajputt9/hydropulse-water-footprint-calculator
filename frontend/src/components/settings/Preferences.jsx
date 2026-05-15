import {

    useEffect,
    useState

} from "react";

import toast from "react-hot-toast";

function Preferences() {

    const [preferences, setPreferences] = useState({

        darkMode: true,

        emailNotifications: true,

        aiPredictions: true
    });

    // LOAD SAVED PREFERENCES

    useEffect(() => {

        const savedPreferences = localStorage.getItem(

            "hydropulse_preferences"
        );

        if (savedPreferences) {

            setPreferences(

                JSON.parse(savedPreferences)
            );
        }

    }, []);

    // TOGGLE SETTINGS

    const toggleSetting = (key) => {

        const updatedPreferences = {

            ...preferences,

            [key]: !preferences[key]
        };

        setPreferences(updatedPreferences);

        localStorage.setItem(

            "hydropulse_preferences",

            JSON.stringify(updatedPreferences)
        );

        toast.success(

            `${key} updated successfully`
        );
    };

    return (

        <div className="mt-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-10">

            {/* HEADER */}

            <div>

                <h2 className="text-4xl font-black text-white">

                    Preferences

                </h2>

                <p className="mt-3 text-gray-400 text-lg">

                    Configure dashboard behavior and smart features

                </p>

            </div>

            {/* SETTINGS */}

            <div className="mt-10 space-y-8">

                {/* DARK MODE */}

                <div className="flex items-center justify-between bg-[#0F172A] rounded-3xl p-6 border border-white/5">

                    <div>

                        <h3 className="text-2xl font-bold text-white">

                            Dark Mode

                        </h3>

                        <p className="mt-2 text-gray-400">

                            Enable futuristic HydroPulse dark interface

                        </p>

                    </div>

                    <button

                        onClick={() => toggleSetting("darkMode")}

                        className={`
                            px-6 py-3 rounded-2xl font-bold transition

                            ${
                                preferences.darkMode

                                    ? "bg-cyan-500 text-black"

                                    : "bg-white/10 text-white"
                            }
                        `}
                    >

                        {
                            preferences.darkMode

                                ? "Enabled"

                                : "Disabled"
                        }

                    </button>

                </div>

                {/* EMAIL NOTIFICATIONS */}

                <div className="flex items-center justify-between bg-[#0F172A] rounded-3xl p-6 border border-white/5">

                    <div>

                        <h3 className="text-2xl font-bold text-white">

                            Email Notifications

                        </h3>

                        <p className="mt-2 text-gray-400">

                            Receive sustainability alerts and updates

                        </p>

                    </div>

                    <button

                        onClick={() => toggleSetting("emailNotifications")}

                        className={`
                            px-6 py-3 rounded-2xl font-bold transition

                            ${
                                preferences.emailNotifications

                                    ? "bg-cyan-500 text-black"

                                    : "bg-white/10 text-white"
                            }
                        `}
                    >

                        {
                            preferences.emailNotifications

                                ? "Active"

                                : "Inactive"
                        }

                    </button>

                </div>

                {/* AI PREDICTIONS */}

                <div className="flex items-center justify-between bg-[#0F172A] rounded-3xl p-6 border border-white/5">

                    <div>

                        <h3 className="text-2xl font-bold text-white">

                            AI Predictions

                        </h3>

                        <p className="mt-2 text-gray-400">

                            Enable intelligent sustainability forecasting

                        </p>

                    </div>

                    <button

                        onClick={() => toggleSetting("aiPredictions")}

                        className={`
                            px-6 py-3 rounded-2xl font-bold transition

                            ${
                                preferences.aiPredictions

                                    ? "bg-cyan-500 text-black"

                                    : "bg-white/10 text-white"
                            }
                        `}
                    >

                        {
                            preferences.aiPredictions

                                ? "Enabled"

                                : "Disabled"
                        }

                    </button>

                </div>

            </div>

        </div>
    );
}

export default Preferences;