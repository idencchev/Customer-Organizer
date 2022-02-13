import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider.js";
import './ActiveCars.css'

function ActiveCars() {
    const [{ user }, dicpatch] = useStateValue();
    console.log(user);
    return (
        <div className="add-appointment">ActiveCars page</div>
    );
}

export default ActiveCars;
