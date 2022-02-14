import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sideMenuHandler } from "../../utils/sideMenuHandler";
import { useStateValue } from "../../Context/StateProvider";
import './Header.css';
import UserNavigation from "../Navigation/UserNavigation.js";
import AdminNavigation from "../Navigation/AdminNavigation.js";

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
