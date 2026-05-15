import {

    useEffect,
    useState,
    useContext

} from "react";

import toast from "react-hot-toast";

import {

    getProfile,
    updateProfile,
    changePassword

} from "../../services/userService";

import {

    AuthContext

} from "../../context/AuthContext";

function ProfileSettings() {

    const { login } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const [passwordLoading, setPasswordLoading] = useState(false);

    const [profileData, setProfileData] = useState({

        full_name: "",

        email: "",

        daily_goal_liters: 150
    });

    const [passwordData, setPasswordData] = useState({

        currentPassword: "",

        newPassword: ""
    });

    // FETCH PROFILE

    useEffect(() => {

        fetchProfile();

    }, []);

    const fetchProfile = async () => {

        try {

            const data = await getProfile();

            setProfileData(data);

        } catch (error) {

            console.log(error);

            toast.error("Failed to load profile");
        }
    };

    // HANDLE PROFILE INPUT

    const handleChange = (e) => {

        setProfileData({

            ...profileData,

            [e.target.name]: e.target.value
        });
    };

    // HANDLE PASSWORD INPUT

    const handlePasswordChange = (e) => {

        setPasswordData({

            ...passwordData,

            [e.target.name]: e.target.value
        });
    };

    // UPDATE PROFILE

    const handleProfileUpdate = async () => {

        try {

            setLoading(true);

            const response = await updateProfile(profileData);

            toast.success(response.message);

            // UPDATE LOCAL STORAGE USER

            const oldUser = JSON.parse(

                localStorage.getItem("user")
            );

            const updatedUser = {

                ...oldUser,

                user: {

                    ...oldUser.user,

                    full_name: profileData.full_name,

                    email: profileData.email,

                    daily_goal_liters:
                        profileData.daily_goal_liters
                }
            };

            login(updatedUser);

        } catch (error) {

            console.log(error);

            toast.error(

                error?.response?.data?.message ||

                "Profile update failed"
            );

        } finally {

            setLoading(false);
        }
    };

    // CHANGE PASSWORD

    const handlePasswordUpdate = async () => {

        if (passwordData.newPassword.length < 6) {

            return toast.error(

                "Password must be at least 6 characters"
            );
        }

        try {

            setPasswordLoading(true);

            const response = await changePassword(

                passwordData
            );

            toast.success(response.message);

            setPasswordData({

                currentPassword: "",

                newPassword: ""
            });

        } catch (error) {

            console.log(error);

            toast.error(

                error?.response?.data?.message ||

                "Password update failed"
            );

        } finally {

            setPasswordLoading(false);
        }
    };

    return (

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-10">

            {/* HEADER */}

            <div className="flex items-center gap-6 mb-10">

                <div className="w-24 h-24 rounded-3xl bg-cyan-500/20 flex items-center justify-center text-4xl">

                    👤

                </div>

                <div>

                    <h2 className="text-4xl font-black text-white">

                        Profile Settings

                    </h2>

                    <p className="mt-2 text-gray-400">

                        Manage personal information and account details

                    </p>

                </div>

            </div>

            {/* PROFILE FORM */}

            <div className="grid md:grid-cols-2 gap-8">

                {/* FULL NAME */}

                <div>

                    <label className="block text-gray-300 mb-3 text-lg">

                        Full Name

                    </label>

                    <input
                        type="text"
                        name="full_name"
                        value={profileData.full_name}
                        onChange={handleChange}
                        className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                    />

                </div>

                {/* EMAIL */}

                <div>

                    <label className="block text-gray-300 mb-3 text-lg">

                        Email Address

                    </label>

                    <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleChange}
                        className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                    />

                </div>

                {/* DAILY GOAL */}

                <div>

                    <label className="block text-gray-300 mb-3 text-lg">

                        Daily Goal (Liters)

                    </label>

                    <input
                        type="number"
                        name="daily_goal_liters"
                        value={profileData.daily_goal_liters}
                        onChange={handleChange}
                        className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                    />

                </div>

            </div>

            {/* SAVE BUTTON */}

            <button

                onClick={handleProfileUpdate}

                disabled={loading}

                className="mt-10 px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold text-lg"

            >

                {

                    loading

                        ? "Saving..."

                        : "Save Changes"
                }

            </button>

            {/* PASSWORD SECTION */}

            <div className="mt-14 border-t border-white/10 pt-10">

                <h3 className="text-3xl font-black text-white mb-8">

                    Change Password

                </h3>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* CURRENT PASSWORD */}

                    <div>

                        <label className="block text-gray-300 mb-3 text-lg">

                            Current Password

                        </label>

                        <input
                            type="password"
                            name="currentPassword"
                            value={passwordData.currentPassword}
                            onChange={handlePasswordChange}
                            className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                        />

                    </div>

                    {/* NEW PASSWORD */}

                    <div>

                        <label className="block text-gray-300 mb-3 text-lg">

                            New Password

                        </label>

                        <input
                            type="password"
                            name="newPassword"
                            value={passwordData.newPassword}
                            onChange={handlePasswordChange}
                            className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                        />

                    </div>

                </div>

                {/* PASSWORD BUTTON */}

                <button

                    onClick={handlePasswordUpdate}

                    disabled={passwordLoading}

                    className="mt-8 px-8 py-4 rounded-2xl bg-red-500 hover:bg-red-400 transition text-white font-bold text-lg"

                >

                    {

                        passwordLoading

                            ? "Updating..."

                            : "Update Password"
                    }

                </button>

            </div>

        </div>
    );
}

export default ProfileSettings;