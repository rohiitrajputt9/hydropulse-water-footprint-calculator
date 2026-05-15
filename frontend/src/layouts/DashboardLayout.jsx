import Sidebar from "../components/layout/Sidebar";

import Topbar from "../components/layout/Topbar";
import Footer from "../components/layout/Footer";

import {
    useContext
} from "react";

import {
    useNavigate
} from "react-router-dom";

import {
    AuthContext
} from "../context/AuthContext";

function DashboardLayout({ children }) {

      const navigate = useNavigate();

    const {
        logout
    } = useContext(AuthContext);

    return (

        <div className="flex bg-[#020617] min-h-screen">

            <Sidebar />

            <div className="flex-1 flex flex-col">

                <Topbar />

                <main className="p-8">

                    {children}

                </main>
                <Footer />

            </div>

        </div>
    );
}

export default DashboardLayout;