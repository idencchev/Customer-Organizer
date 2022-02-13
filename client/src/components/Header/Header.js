import React from "react";
import { Link, useHistory } from "react-router-dom";
import { sideMenuHandler } from "../../utils/sideMenuHandler";
import './Header.css';

function Header() {
    const history = useHistory();

    function onLogoutHandler() {
        document.cookie = `x-auth-token= ;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        history.push('/');
    }

    return (
        <header className='my-header'>
            <div className="topnav" id="myTopnav">
                <Link to="/" className="active">VIKTOR'S AUTO CARE LTD</Link>
                <Link to="#" className="icon" onClick={sideMenuHandler}>
                    <i className="fa fa-bars"></i>
                </Link>
                <Link className="my-nav-link" to="/create/appointment">ADD APPOINTMENT</Link>
                <Link className="my-nav-link" to="/view/appointments">APPOINTMENTS</Link>
                <Link className="my-nav-link" to="/create/car">ADD ACTIVE CARS</Link>
                <Link className="my-nav-link" to="/view/cars">ACTIVE CARS</Link>
                <Link className="my-nav-link" to="/view/archive">ARCHIVE</Link>
                <Link onClick={onLogoutHandler} className="my-nav-link" to="/logout">LOGOUT</Link>
                <Link className="my-nav-link" to="/login">LOGIN</Link>
                <Link className="my-nav-link" to="/user/admin">ADMIN PANEL</Link>
            </div>
        </header>
    );
}

export default Header;
