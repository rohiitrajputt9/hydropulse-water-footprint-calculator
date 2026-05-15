import {

    Bell,
    Search,
    User

} from "lucide-react";

import {

    useContext

} from "react";

import {

    useNavigate

} from "react-router-dom";

import {

    AuthContext

} from "../../context/AuthContext";

function Topbar() {

    const navigate = useNavigate();

    const {

        logout,
        user

    } = useContext(AuthContext);

    return (

        <header className="h-[90px] border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl flex items-center justify-between px-8">

            {/* SEARCH */}

            <div className="hidden md:flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 w-[350px]">

                <Search
                    size={20}
                    className="text-gray-400"
                />

                <input
                    type="text"
                    placeholder="Search analytics..."
                    className="bg-transparent outline-none text-white w-full"
                />

            </div>

            {/* RIGHT SECTION */}

            <div className="flex items-center gap-5 ml-auto">

                {/* NOTIFICATION */}

                <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-300 transition">

                    <Bell size={20} />

                </button>

                {/* USER PROFILE */}

                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-4 py-2">

                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">

                        <User size={22} />

                    </div>

                    <div className="hidden md:block">

                        <h3 className="text-white font-semibold">

                            {
                                user?.user?.full_name ||

                                "HydroPulse User"
                            }

                        </h3>

                        <p className="text-gray-400 text-sm">

                            {
                                user?.user?.email ||

                                "Sustainability Analyst"
                            }

                        </p>

                    </div>

                </div>

                {/* LOGOUT */}

                <button

                    onClick={() => {

                        logout();

                        navigate("/login");
                    }}

                    className="
                        px-5 py-3
                        rounded-2xl
                        bg-red-500/20
                        border border-red-500/20
                        text-red-300
                        hover:bg-red-500/30
                        transition
                    "
                >

                    Logout

                </button>

            </div>

        </header>
    );
}

export default Topbar;