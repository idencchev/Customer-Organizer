import React from "react";
import { Link } from "react-router-dom";
import { sideMenuHandler } from "../../utils/sideMenuHandler";
import './Header.css';
import UserNavigation from "../Navigation/UserNavigation.js";

function Header() {

    return (
        <header className='my-header'>
            <div className="topnav" id="myTopnav">
                <div className="nav_left">
                    <Link to="/" className="active">VIKTOR'S AUTO CARE LTD</Link>
                    <Link to="#" className="icon" onClick={sideMenuHandler}>
                        <i className="fa fa-bars"></i>
                    </Link>
                </div>
                <UserNavigation />
            </div>
        </header>
    );
}

export default Header;
