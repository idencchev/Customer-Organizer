import React from "react";
import { getUserData } from "../../api/localStorageSetup.js";
import { useUserStateValue } from "../../Context/UserStateProvider.js";
import './Home.css';

function Home() {
    const [{ user }] = useUserStateValue();
    return (
        <div className="home-component">
            <h1 className="home-h1">Welcome, {user ? user : 'Guest'}!</h1>
            <img className="home-img" src="https://i.ibb.co/LpRZTtL/tools.png" alt="..." />
        </div>
    );
}

export default Home;
