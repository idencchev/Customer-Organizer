import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useUserStateValue } from "../../Context/UserStateProvider.js";
import { logoutUser } from "../../api/data.js";

function UserNavigation() {

    const [{ isVerified, isAdmin }, dispatch] = useUserStateValue();

    const history = useHistory();

    const logoutHandler = async () => {
        await logoutUser();
        dispatch({ type: 'LOGOUT' })
        history.push('/');
    };

    if (isVerified) {
        return (
            <div className="nav-user">
                <Link className="my-nav-link" to="/create/appointment">ADD APPOINTMENT</Link>
                <Link className="my-nav-link" to="/view/scheduler">SCHEDULER</Link>
                <Link className="my-nav-link" to="/create/car">ADD TO GARAGE</Link>
                <Link className="my-nav-link" to="/view/garage">GARAGE</Link>
                <Link className="my-nav-link" to="/view/archive">ARCHIVE</Link>
                {isAdmin ? <Link className="my-nav-link" to="/user/admin">ADMIN PANEL</Link> : null}
                <Link className="my-nav-link" to="/" onClick={logoutHandler}>LOGOUT</Link>
            </div>
        );
    }
    return <Link className="my-nav-link" to="/login">LOGIN</Link>
}

export default UserNavigation;