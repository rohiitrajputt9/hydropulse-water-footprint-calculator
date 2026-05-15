import DashboardLayout from "../layouts/DashboardLayout";

import AnalyticsStats from "../components/analytics/AnalyticsStats";

import AnalyticsCharts from "../components/analytics/AnalyticsCharts";

import TrendInsights from "../components/analytics/TrendInsights";

import ConsumptionComparison from "../components/analytics/ConsumptionComparison";

function Analytics() {

    return (

        <DashboardLayout>

            <div>

                <div className="mb-12">

                    <h1 className="text-5xl font-black text-white">

                        Analytics Center

                    </h1>

                    <p className="mt-4 text-gray-400 text-xl">

                        Advanced water consumption analytics and AI-driven sustainability insights

                    </p>

                </div>

                <AnalyticsStats />

                <AnalyticsCharts />

                <TrendInsights />

                <ConsumptionComparison />

            </div>

        </DashboardLayout>
    );
}

export default Analytics;