import DashboardLayout from "../layouts/DashboardLayout";

import ProfileSettings from "../components/settings/ProfileSettings";

import GoalsSettings from "../components/settings/GoalsSettings";

function Settings() {

    return (

        <DashboardLayout>

            <div>

                <div className="mb-12">

                    <h1 className="text-5xl font-black text-white">

                        Settings

                    </h1>

                    <p className="mt-4 text-gray-400 text-xl">

                        Configure account preferences and sustainability controls

                    </p>

                </div>

                <ProfileSettings />

                <GoalsSettings />

            </div>

        </DashboardLayout>
    );
}

export default Settings;