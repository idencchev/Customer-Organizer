import React, { useState } from "react";
import { createAppointment } from "../../api/data.js";
import { getUserData } from "../../api/localStorageSetup.js";
import './AddAppointment.css'

function AddAppointment(props) {

    const [appointmentData, setAppointmentData] = useState();

    const onAddAppointmentHandler = (e) => {
        setAppointmentData((prevAppointmentData) => ({
            ...prevAppointmentData,
            [e.target.name]: e.target.value
        }));
    };

    const createAppointmentHandler = async (e) => {
        e.preventDefault();
        try {
            await createAppointment(appointmentData);
            props.history.push('/view/appointments');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="add-appointment">

            <form onSubmit={createAppointmentHandler}>
                <div className="container-add-appointment">
                    <label htmlFor="appointmentDate"><b>APPOINTMENT DATE</b></label>
                    <input onChange={onAddAppointmentHandler} type="text" placeholder="Example: 12.02.2022" name="appointmentDate" required />

                    <label htmlFor="plateNumber"><b>PLATE NUMBER</b></label>
                    <input onChange={onAddAppointmentHandler} type="text" placeholder="Example: RZ21PRG" name="plateNumber" required />

                    <label htmlFor="carMakeAndModel"><b>CAR'S MAKE AND MODEL</b></label>
                    <input onChange={onAddAppointmentHandler} type="text" placeholder="Example: VW 2.0 TDI PD" name="carMakeAndModel" required />

                    <label htmlFor="notes"><b>NOTES / TO DO</b></label>
                    <textarea
                        cols="40" rows="2"
                        onChange={onAddAppointmentHandler}
                        className="textarea-notes"
                        placeholder="Example: Service, Change Clutch and etc."
                        name="notes" required />


                    <label htmlFor="ownerName"><b>OWNER'S NAME</b></label>
                    <input onChange={onAddAppointmentHandler} type="text" placeholder="Example: John Doe" name="ownerName" required />

                    <label htmlFor="ownerPhone"><b>OWNER'S PHONE</b></label>
                    <input onChange={onAddAppointmentHandler} type="text" placeholder="Example: 07834205874" name="ownerPhone" required />

                    <button className="btn-submit" type="submit">BOOK</button>

                </div>
            </form>
        </div>
    );
}

export default AddAppointment;
