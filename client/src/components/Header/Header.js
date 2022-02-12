import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Viktor's Auto Care Limited</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item user"><Link className="nav-link" to="/create/appointment">Add Appointment</Link></li>
                            <li className="nav-item user"><Link className="nav-link" to="/view/appointments">Appointments</Link></li>
                            <li className="nav-item user"><Link className="nav-link" to="/create/car">Add Car In Garage</Link></li>
                            <li className="nav-item user"><Link className="nav-link" to="/view/cars">Cars Currently In The Garage</Link></li>
                            <li className="nav-item user"><Link className="nav-link" to="/view/archive/search">Search in Archive</Link></li>
                            <li id="logout" className="nav-item user"><Link className="nav-link" to="/logout">Logout</Link></li>
                            <li className="nav-item guest"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item guest"><Link className="nav-link" to="/register">Register</Link></li>
                            <li className="nav-item guest"><Link className="nav-link" to="/admin">Admin Panel</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
