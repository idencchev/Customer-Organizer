import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useUserStateValue } from "../../Context/UserStateProvider.js";

function UserNavigation() {

    const [{ isAuthenticated, isAdmin }, dispatch] = useUserStateValue();

    const history = useHistory();

    const logoutHandler = () => {
        document.cookie = `x-auth-token= ;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        dispatch({ type: 'LOGOUT' })
        history.push('/');
    };

    if (isAuthenticated) {
        return (
            <div className="nav-user">
                <Link className="my-nav-link" to="/create/appointment">ADD APPOINTMENT</Link>
                <Link className="my-nav-link" to="/view/appointments">APPOINTMENTS</Link>
                <Link className="my-nav-link" to="/create/car">ADD ACTIVE CARS</Link>
                <Link className="my-nav-link" to="/view/cars">ACTIVE CARS</Link>
                <Link className="my-nav-link" to="/view/archive">ARCHIVE</Link>
                {isAdmin ? <Link className="my-nav-link" to="/user/admin">ADMIN PANEL</Link> : null}
                <Link className="my-nav-link" to="/" onClick={logoutHandler}>LOGOUT</Link>
            </div>
        );
    }
    return <Link className="my-nav-link" to="/login">LOGIN</Link>
}

export default UserNavigation;