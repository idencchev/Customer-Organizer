import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { clearUserData, getUserData } from "../../api/localStorageSetup.js";
import AdminNavigation from "./AdminNavigation.js";

function UserNavigation(props) {

    const [user, setUser] = useState();

    const history = useHistory();
    const userData = getUserData();

    useEffect(() => {
        if (userData) {
            return setUser(userData);
        }
    }, []);

    const logoutHandler = () => {
        document.cookie = `x-auth-token= ;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        clearUserData();
        setUser();
        history.push('/');
    };

    if (user) {
        return (
            <div className="nav-user">
                <Link className="my-nav-link" to="/create/appointment">ADD APPOINTMENT</Link>
                <Link className="my-nav-link" to="/view/appointments">APPOINTMENTS</Link>
                <Link className="my-nav-link" to="/create/car">ADD ACTIVE CARS</Link>
                <Link className="my-nav-link" to="/view/cars">ACTIVE CARS</Link>
                <Link className="my-nav-link" to="/view/archive">ARCHIVE</Link>
                {user.isAdmin ? <AdminNavigation /> : null}
                <Link className="my-nav-link" to="/" onClick={logoutHandler}>LOGOUT</Link>
            </div>
        );
    }
    return <Link className="my-nav-link" to="/login">LOGIN</Link>
}

export default UserNavigation;