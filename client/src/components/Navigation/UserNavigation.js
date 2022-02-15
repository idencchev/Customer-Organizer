import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { clearUserData, getUserData } from "../../api/localStorageSetup.js";
import { useStateValue } from "../../Context/StateProvider.js";
import AdminNavigation from "./AdminNavigation.js";

function UserNavigation() {

    const [user, setUser] = useState();

    const userData = getUserData();

    useEffect(() => {
        if (userData) {
            return setUser(userData);
        }
        setUser();
    }, []);

    const logoutHandler = () => {
        document.cookie = `x-auth-token= ;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        clearUserData();
        setUser();
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
                <Link className="my-nav-link" to="/logout" onClick={logoutHandler}>LOGOUT</Link>
            </div>

        );
    } else {
        return (
            <Link className="my-nav-link" to="/login">LOGIN</Link>
        )
    }

}

export default UserNavigation;
