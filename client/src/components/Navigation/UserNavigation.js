import React from "react";
import { Link, useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";
import { logoutUser } from "../../api/data";

function UserNavigation() {
    const { isVerified, isAdmin } = useSelector((state) => state.account);

    const dispatch = useDispatch();
    const { logout } = bindActionCreators(actions, dispatch);

    const history = useHistory();

    const logoutHandler = async () => {
        await logoutUser();
        logout();
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