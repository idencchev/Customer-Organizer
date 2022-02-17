import React from "react";
import { Link } from "react-router-dom";
import './AppointmentComponent.css';

function AppointmentComponent({
    id,
    appointmentDate,
    plateNumber,
    carMakeAndModel,
    notes,
    ownerName,
    ownerPhone,
    createdBy,
    isAdmin,
    onDelete
}) {

    return (
        <div className="appointment-component">
            <h1>Date: {appointmentDate}</h1>
            <p>Plate Number: {plateNumber}</p>
            <p>Car Make And Model: {carMakeAndModel}</p>
            <p className="notes">Notes: {notes} </p>
            <p>Owner's Name: {ownerName}</p>
            <p>Owner's Phone: {ownerPhone}</p>
            <h4>Booked by: {createdBy}</h4>
            <Link className="edit-appointment" to={`/edit/appointments/${id}`}>Edit</Link>
            {isAdmin ? <button onClick={() => onDelete(id)} className="delete-appointment">Delete</button> : null}
        </div>
    );
}

export default AppointmentComponent;
