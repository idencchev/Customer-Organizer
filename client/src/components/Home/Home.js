import React from "react";
import jwt_decode from "jwt-decode";
import './Home.css';

function Home() {
    let decode = '';
    const token = document.cookie.split('=')[1];

    if (token) {
        decode = jwt_decode(token);
    }
  
    return (
        <div className="home-component">
            <h1 className="home-h1">Welcome, {decode.username ? decode.username : 'Guest'}!</h1>
            <img className="home-img" src="https://i.ibb.co/LpRZTtL/tools.png" alt="..." />
        </div>
    );
}

export default Home;
