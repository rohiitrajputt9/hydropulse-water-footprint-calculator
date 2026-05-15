import {

    useContext,
    useState

} from "react";

import {

    Link,
    useNavigate

} from "react-router-dom";

import toast from "react-hot-toast";

import {

    AuthContext

} from "../context/AuthContext";

import {

    loginUser

} from "../services/authService";

function Login() {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({

        email: "",

        password: ""
    });

    // HANDLE INPUT

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value
        });
    };

    // HANDLE LOGIN

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const data = await loginUser(formData);

            login(data);

            toast.success(

                "Login Successful"
            );

            navigate("/dashboard");

        } catch (error) {

            console.log(error);

            toast.error(

                error?.response?.data?.message ||

                "Login Failed"
            );

        } finally {

            setLoading(false);
        }
    };

    return (

        <div className="min-h-screen bg-[#020617] relative overflow-hidden flex items-center justify-center px-4">

            {/* BACKGROUND EFFECTS */}

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

                        Welcome Back

                    </h2>

                    <p className="mt-2 text-gray-400 text-sm">

                        Login to continue your sustainability journey

                    </p>

                </div>

                {/* FORM */}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

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
                            placeholder="Enter password"
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

                                ? "Logging In..."

                                : "Login"
                        }

                    </button>

                </form>

                {/* REGISTER LINK */}

                <p className="mt-5 text-center text-gray-400 text-sm">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="ml-2 text-cyan-400 hover:text-cyan-300 font-bold"
                    >

                        Register

                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Login;