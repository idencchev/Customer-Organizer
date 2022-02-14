import React from "react";
import { Link } from "react-router-dom";

function AdminNavigation() {
    return (

        <div className="nav-admin">
            <Link className="my-nav-link" to="/user/admin">ADMIN PANEL</Link>
        </div>

    )
}

export default AdminNavigation;
