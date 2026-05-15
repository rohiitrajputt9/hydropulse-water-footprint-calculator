import {

    Routes,
    Route,
    Navigate

} from "react-router-dom";

import {

    useContext

} from "react";

import {

    AuthContext

} from "./context/AuthContext";

import LandingPage from "./pages/LandingPage";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import Analytics from "./pages/Analytics";

import WaterLogs from "./pages/WaterLogs";

import Reports from "./pages/Reports";

import Settings from "./pages/Settings";

import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {

    const { user } = useContext(AuthContext);

    return (

        <Routes>

            {/* LANDING PAGE */}

            <Route
                path="/"
                element={<LandingPage />}
            />

            {/* LOGIN */}

            <Route
                path="/login"
                element={

                    user

                        ? <Navigate to="/dashboard" />

                        : <Login />
                }
            />

            {/* REGISTER */}

            <Route
                path="/register"
                element={

                    user

                        ? <Navigate to="/dashboard" />

                        : <Register />
                }
            />

            {/* DASHBOARD */}

            <Route
                path="/dashboard"
                element={

                    <ProtectedRoute>

                        <Dashboard />

                    </ProtectedRoute>
                }
            />

            {/* ANALYTICS */}

            <Route
                path="/analytics"
                element={

                    <ProtectedRoute>

                        <Analytics />

                    </ProtectedRoute>
                }
            />

            {/* WATER LOGS */}

            <Route
                path="/water-logs"
                element={

                    <ProtectedRoute>

                        <WaterLogs />

                    </ProtectedRoute>
                }
            />

            {/* REPORTS */}

            <Route
                path="/reports"
                element={

                    <ProtectedRoute>

                        <Reports />

                    </ProtectedRoute>
                }
            />

            {/* SETTINGS */}

            <Route
                path="/settings"
                element={

                    <ProtectedRoute>

                        <Settings />

                    </ProtectedRoute>
                }
            />

            {/* FALLBACK */}

            <Route
                path="*"
                element={

                    <Navigate to="/" />
                }
            />

        </Routes>
    );
}

export default App;