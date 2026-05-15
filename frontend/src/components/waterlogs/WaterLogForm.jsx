import {

    useState

} from "react";

import toast from "react-hot-toast";

import {

    createWaterLog

} from "../../services/waterLogsService";

function WaterLogForm({ fetchLogs }) {

    const [formData, setFormData] = useState({

        log_date: "",

        shower_minutes: "",

        dishwasher_loads: "",

        laundry_loads: "",

        cooking_liters: "",

        drinking_liters: "",

        garden_liters: "",

        carwash_liters: ""
    });

    const [loading, setLoading] = useState(false);

    // HANDLE INPUT

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value
        });
    };

    // HANDLE SUBMIT

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            // USER ID TEMPORARY
            // Later from JWT auth

          const payload = {

                ...formData
         };

            await createWaterLog(payload);

            toast.success("Water log added successfully");

            // RESET FORM

            setFormData({

                log_date: "",

                shower_minutes: "",

                dishwasher_loads: "",

                laundry_loads: "",

                cooking_liters: "",

                drinking_liters: "",

                garden_liters: "",

                carwash_liters: ""
            });

            // REFRESH TABLE

            fetchLogs();

        } catch (error) {

            console.log(error);

            toast.error("Failed to add water log");

        } finally {

            setLoading(false);
        }
    };

    return (

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-10">

            <div className="mb-10">

                <h2 className="text-4xl font-black text-white">

                    Add Water Usage

                </h2>

                <p className="mt-3 text-gray-400 text-lg">

                    Track daily indoor and outdoor water consumption

                </p>

            </div>

            <form
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-8"
            >

                {/* DATE */}

                <div>

                    <label className="block text-gray-300 mb-3 text-lg">

                        Date

                    </label>

                    <input
                        type="date"
                        name="log_date"
                        value={formData.log_date}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                    />

                </div>

                {/* SHOWER */}

                <div>

                    <label className="block text-gray-300 mb-3 text-lg">

                        Shower Minutes

                    </label>

                    <input
                        type="number"
                        name="shower_minutes"
                        value={formData.shower_minutes}
                        onChange={handleChange}
                        placeholder="Enter shower minutes"
                        className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                    />

                </div>

                {/* DISHWASHER */}

                <div>

                    <label className="block text-gray-300 mb-3 text-lg">

                        Dishwasher Loads

                    </label>

                    <input
                        type="number"
                        name="dishwasher_loads"
                        value={formData.dishwasher_loads}
                        onChange={handleChange}
                        placeholder="Enter dishwasher loads"
                        className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                    />

                </div>

                {/* LAUNDRY */}

                <div>

                    <label className="block text-gray-300 mb-3 text-lg">

                        Laundry Loads

                    </label>

                    <input
                        type="number"
                        name="laundry_loads"
                        value={formData.laundry_loads}
                        onChange={handleChange}
                        placeholder="Enter laundry loads"
                        className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                    />

                </div>

                {/* COOKING */}

                <div>

                    <label className="block text-gray-300 mb-3 text-lg">

                        Cooking Liters

                    </label>

                    <input
                        type="number"
                        name="cooking_liters"
                        value={formData.cooking_liters}
                        onChange={handleChange}
                        placeholder="Enter cooking liters"
                        className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                    />

                </div>

                {/* DRINKING */}

                <div>

                    <label className="block text-gray-300 mb-3 text-lg">

                        Drinking Liters

                    </label>

                    <input
                        type="number"
                        name="drinking_liters"
                        value={formData.drinking_liters}
                        onChange={handleChange}
                        placeholder="Enter drinking liters"
                        className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                    />

                </div>

                {/* GARDEN */}

                <div>

                    <label className="block text-gray-300 mb-3 text-lg">

                        Garden Liters

                    </label>

                    <input
                        type="number"
                        name="garden_liters"
                        value={formData.garden_liters}
                        onChange={handleChange}
                        placeholder="Enter garden liters"
                        className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                    />

                </div>

                {/* CARWASH */}

                <div>

                    <label className="block text-gray-300 mb-3 text-lg">

                        Car Wash Liters

                    </label>

                    <input
                        type="number"
                        name="carwash_liters"
                        value={formData.carwash_liters}
                        onChange={handleChange}
                        placeholder="Enter car wash liters"
                        className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                    />

                </div>

                {/* SUBMIT */}

                <div className="md:col-span-2">

                    <button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold text-lg disabled:opacity-50"
                    >

                        {
                            loading
                                ? "Adding Water Log..."
                                : "Add Water Log"
                        }

                    </button>

                </div>

            </form>

        </div>
    );
}

export default WaterLogForm;