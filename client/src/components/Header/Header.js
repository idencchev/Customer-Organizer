import React from "react";
import { Link } from "react-router-dom";
import { sideMenuHandler } from "../../utils/sideMenuHandler";
import './Header.css';

function Header() {

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
                <Link className="my-nav-link" to="/logout">LOGOUT</Link>
                <Link className="my-nav-link" to="/login">LOGIN</Link>
                <Link className="my-nav-link" to="/user/admin">ADMIN PANEL</Link>
            </div>
        </header>
    );
}

export default Header;
