import { Moon, Sun } from "lucide-react";

function Header({ darkMode, setDarkMode }) {

    return (

        <header className="bg-white dark:bg-gray-900 shadow-md">

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <h1 className="text-2xl font-bold text-blue-600">
                    HydroPulse
                </h1>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
                >

                    {
                        darkMode
                            ? <Sun className="text-yellow-400" />
                            : <Moon className="text-gray-800" />
                    }

                </button>

            </div>

        </header>
    );
}

export default Header;