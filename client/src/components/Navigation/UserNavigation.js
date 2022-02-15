import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { clearUserData, getUserData } from "../../api/localStorageSetup.js";

function UserNavigation() {

    const [isLogget, setIsLogget] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const history = useHistory();

    useEffect(() => {
        const userData = getUserData();

        if (userData) {
            setIsLogget(true);
            setIsAdmin(userData.isAdmin);
        }
    }, []);

    const logoutHandler = () => {
        document.cookie = `x-auth-token= ;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        clearUserData();
        setIsLogget(false);
        setIsAdmin(false);
        history.push('/');
    };

    if (isLogget) {
        return (
            <div className="nav-user">
                <Link className="my-nav-link" to="/create/appointment">ADD APPOINTMENT</Link>
                <Link className="my-nav-link" to="/view/appointments">APPOINTMENTS</Link>
                <Link className="my-nav-link" to="/create/car">ADD ACTIVE CARS</Link>
                <Link className="my-nav-link" to="/view/cars">ACTIVE CARS</Link>
                <Link className="my-nav-link" to="/view/archive">ARCHIVE</Link>
                {isAdmin ?  <Link className="my-nav-link" to="/user/admin">ADMIN PANEL</Link> : null}
                <Link className="my-nav-link" to="/" onClick={logoutHandler}>LOGOUT</Link>
            </div>
        );
    }
    return <Link className="my-nav-link" to="/login">LOGIN</Link>
}

export default UserNavigation;