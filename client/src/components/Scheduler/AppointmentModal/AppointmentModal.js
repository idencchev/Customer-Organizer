import React from "react";
import { Link } from "react-router-dom";
import "./AppointmentModal.css";

function AppointmentModal({ setOpenModal,
  id,
  appointmentDate,
  plateNumber,
  carMakeAndModel,
  notes,
  ownerName,
  ownerPhone,
  createdBy,
  isAdmin,
  onDelete }) {

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="title">
          <h1>{plateNumber}</h1>
        </div>

        <div className="appointment-component">
          <p>Date: <span className="appointment-span">{appointmentDate?.split('-').reverse().join('/')}</span> </p>
          <p>Car Make And Model: <span className="appointment-span">{carMakeAndModel}</span></p>
          <p>Notes: <span className="appointment-span">{notes}</span></p>
          <p>Owner's Name: <span className="appointment-span">{ownerName}</span></p>
          <p>Owner's Phone: <span className="appointment-span">{ownerPhone}</span></p>
          <p>Booked by: <span className="appointment-span">{createdBy}</span></p>
        </div>

        <div className="footer">
          <Link className="edit-appointment" to={`/edit/appointments/${id}`}>Edit</Link>
          <Link className="edit-appointment" to={`/create/car/${id}`}>Move to Garrage</Link>
          {isAdmin ? <button onClick={() => { onDelete(id); setOpenModal(false) }} className="delete-appointment">Delete</button> : null}
        </div>
      </div>
    </div>
  );
}

export default AppointmentModal;