import {

    useContext,
    useState

} from "react";

import {

    Link,
    useNavigate

} from "react-router-dom";

import { ArrowLeft } from "lucide-react";

import toast from "react-hot-toast";

import {

    registerUser

} from "../services/authService";

import {

    AuthContext

} from "../context/AuthContext";

function Register() {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({

        full_name: "",

        email: "",

        password: "",

        daily_goal_liters: 150
    });

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

        if (formData.password.length < 6) {

            return toast.error(

                "Password must be at least 6 characters"
            );
        }

        try {

            setLoading(true);

            const data = await registerUser(formData);

            // AUTO LOGIN

            login(data);

            toast.success(

                "Registration Successful"
            );

            navigate("/dashboard");

        } catch (error) {

            console.log(error);

            toast.error(

                error?.response?.data?.message ||

                "Registration Failed"
            );

        } finally {

            setLoading(false);
        }
    };

    return (

        <div className="min-h-screen bg-slate-900 dark:bg-[#020617] relative overflow-hidden flex items-center justify-center px-4 transition-colors duration-300">

            {/* Back to Home Button */}
            <Link 
                to="/" 
                className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition duration-300 backdrop-blur-md text-sm font-semibold cursor-pointer"
            >
                <ArrowLeft size={16} />
                Back to Home
            </Link>

            {/* BACKGROUND */}

            <div className="absolute w-[350px] h-[350px] bg-cyan-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />

            <div className="absolute w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

            {/* CARD */}

            <div className="relative z-10 w-full max-w-sm backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[28px] p-6 shadow-2xl">

                {/* LOGO */}

                <div className="mb-5">

                    <h1 className="text-2xl font-black text-white">

                        HydroPulse

                    </h1>

                    <p className="text-gray-400 text-sm mt-1">

                        Sustainability Analytics Platform

                    </p>

                </div>

                {/* HEADER */}

                <div className="mb-6">

                    <h2 className="text-3xl font-black text-white">

                        Create Account

                    </h2>

                    <p className="mt-2 text-gray-400 text-sm">

                        Start your sustainability journey

                    </p>

                </div>

                {/* FORM */}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    {/* FULL NAME */}

                    <div>

                        <label className="block text-gray-300 mb-2 text-sm">

                            Full Name

                        </label>

                        <input
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                            className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 transition"
                        />

                    </div>

                    {/* EMAIL */}

                    <div>

                        <label className="block text-gray-300 mb-2 text-sm">

                            Email Address

                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                            className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 transition"
                        />

                    </div>

                    {/* PASSWORD */}

                    <div>

                        <label className="block text-gray-300 mb-2 text-sm">

                            Password

                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Create password"
                            className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 transition"
                        />

                    </div>

                    {/* DAILY GOAL */}

                    <div>

                        <label className="block text-gray-300 mb-2 text-sm">

                            Daily Goal (Liters)

                        </label>

                        <input
                            type="number"
                            name="daily_goal_liters"
                            value={formData.daily_goal_liters}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 transition"
                        />

                    </div>

                    {/* BUTTON */}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 transition text-black font-black text-sm shadow-[0_0_30px_rgba(6,182,212,0.3)] disabled:opacity-50"
                    >

                        {
                            loading

                                ? "Creating Account..."

                                : "Create Account"
                        }

                    </button>

                </form>

                {/* LOGIN LINK */}

                <p className="mt-5 text-center text-gray-400 text-sm">

                    Already have an account?

                    <Link
                        to="/login"
                        className="ml-2 text-cyan-400 hover:text-cyan-300 font-bold"
                    >

                        Login

                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Register;