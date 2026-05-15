import DashboardLayout from "../layouts/DashboardLayout";

import ReportsStats from "../components/reports/ReportsStats";

import ExportCenter from "../components/reports/ExportCenter";

import ReportsHistory from "../components/reports/ReportsHistory";

import AISummary from "../components/reports/AISummary";

function Reports() {

    return (

        <DashboardLayout>

            <div>

                <div className="mb-12">

                    <h1 className="text-5xl font-black text-white">

                        Reports Center

                    </h1>

                    <p className="mt-4 text-gray-400 text-xl">

                        Export analytics, synchronize cloud reports, and generate sustainability summaries

                    </p>

                </div>

                <ReportsStats />

                <ExportCenter />

                <ReportsHistory />

                <AISummary />

            </div>

        </DashboardLayout>
    );
}

export default Reports;