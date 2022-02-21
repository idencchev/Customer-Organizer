import React from "react";
import { Link, useHistory } from "react-router-dom";
import './CarComponent.css';

function CarComponent({
    id,
    garageDate,
    plateNumber,
    carMakeAndModel,
    notes,
    ownerName,
    ownerPhone,
    createdBy,
    isAdmin,
    onDelete,
    jobDoneAndParts,
    mechanicName,
    move
}) {

    const history = useHistory();

    return (
        <div className="car-container">
            <div className="title">
                <h1>{garageDate?.split('-').reverse().join('/')}</h1>
            </div>
            <div className="car-component">
                <p>Plate Number: <span className="car-span">{plateNumber}</span></p>
                <p>Car Make And Model: <span className="car-span">{carMakeAndModel}</span></p>
                <p>Notes: <span className="car-span">{notes}</span></p>
                <p>Owner's Name: <span className="car-span">{ownerName}</span></p>
                <p>Owner's Phone: <span className="car-span">{ownerPhone}</span></p>
                <p>Job Done And Parts: <span className="car-span">{jobDoneAndParts}</span></p>
                <p>Mechanic: <span className="car-span">{mechanicName}</span></p>
                <p>Created by: <span className="car-span">{createdBy}</span></p>
            </div>
            <div className="footer">
                {history.location.pathname === '/view/archive' ? isAdmin ? <Link className="edit-car" to={`/edit/car/${id}`}>Edit</Link> : null : null}
                {history.location.pathname === '/view/garage' ? <Link className="edit-car" to={`/edit/car/${id}`}>Edit</Link> : null}
                {history.location.pathname === '/view/garage' ? <button onClick={() => { move(id) }} className="delete-car">Move to Archive</button> : null}
                {isAdmin ? <button onClick={() => { onDelete(id) }} className="delete-car">Delete</button> : null}
            </div>
        </div>
    );
}

export default CarComponent;
