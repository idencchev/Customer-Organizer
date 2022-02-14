import React from "react";
import './Home.css';

function Home() {
    const username = JSON.parse(localStorage.getItem('userData'))?.username;
    return (
        <div className="home-component">
            <h1 className="home-h1">Welcome, {username ? username : 'Guest'}!</h1>
            <img className="home-img" src="https://i.ibb.co/LpRZTtL/tools.png" alt="..." />
        </div>
    );
}

export default Home;
