import DashboardLayout from "../layouts/DashboardLayout";

import DashboardStats from "../components/dashboard/DashboardStats";

import DashboardCharts from "../components/dashboard/DashboardCharts";

import AIInsights from "../components/dashboard/AIInsights";

import ActivityTable from "../components/dashboard/ActivityTable";

import {
    useEffect,
    useState
} from "react";

import {
    getAnalytics
} from "../services/analyticsService";

function Dashboard() {

    const [analytics, setAnalytics] = useState(null);

    useEffect(() => {

        const fetchAnalytics = async () => {

            try {

                const data = await getAnalytics();

                setAnalytics(data);

            } catch (error) {

                console.log(error);
            }
        };

        fetchAnalytics();

    }, []);

    if (!analytics) {

        return (

            <div className="min-h-screen bg-[#020617] flex items-center justify-center">

                <h1 className="text-4xl font-black text-white">

                    Loading Analytics...

                </h1>

            </div>
        );
    }

    return (

        <DashboardLayout>

            <div>

                <div className="mb-12">

                    <h1 className="text-5xl font-black text-white">

                        Dashboard

                    </h1>

                    <p className="mt-4 text-gray-400 text-xl">

                        Welcome back to HydroPulse Analytics Platform

                    </p>

                </div>

                <DashboardStats analytics={analytics} />

                <DashboardCharts analytics={analytics} />

                <AIInsights analytics={analytics} />

                <ActivityTable />

            </div>

        </DashboardLayout>
    );
}

export default Dashboard;