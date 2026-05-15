import {

    useContext

} from "react";

import {

    Navigate,
    useLocation

} from "react-router-dom";

import {

    AuthContext

} from "../../context/AuthContext";

function ProtectedRoute({ children }) {

    const { user } = useContext(AuthContext);

    const location = useLocation();

    // NOT LOGGED IN

    if (!user) {

        return (

            <Navigate

                to="/login"

                state={{

                    from: location
                }}

                replace
            />
        );
    }

    // AUTHORIZED

    return children;
}

export default ProtectedRoute;