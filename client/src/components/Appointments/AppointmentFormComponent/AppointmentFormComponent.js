import React from "react";
import './AppointmentFormComponent.css'

function AppointmentFormComponent({ appointmentData, onSubmitHandler, onChangeHandler }) {

    return (
        <div className="add-appointment">
            <form className="add-appointment-form"onSubmit={onSubmitHandler}>
                    <label htmlFor="appointmentDate">APPOINTMENT DATE</label>
                    <input onChange={onChangeHandler} type="date" name="appointmentDate" defaultValue={appointmentData?.appointmentDate} />

                    <label htmlFor="plateNumber">PLATE NUMBER</label>
                    <input onChange={onChangeHandler} type="text" placeholder="Example: RZ21PRG" name="plateNumber" defaultValue={appointmentData?.plateNumber} />

                    <label htmlFor="carMakeAndModel">CAR'S MAKE AND MODEL</label>
                    <input onChange={onChangeHandler} type="text" placeholder="Example: VW 2.0 TDI PD" name="carMakeAndModel" defaultValue={appointmentData?.carMakeAndModel} />

                    <label htmlFor="notes">NOTES / TO DO</label>
                    <textarea
                        cols="40" rows="2"
                        onChange={onChangeHandler}
                        className="textarea-notes"
                        placeholder="Example: Service, Change Clutch and etc."
                        name="notes" defaultValue={appointmentData?.notes} />

                    <label htmlFor="ownerName">CUSTOMER'S NAME</label>
                    <input onChange={onChangeHandler} type="text" placeholder="Example: John Doe" name="ownerName" defaultValue={appointmentData?.ownerName} />

                    <label htmlFor="ownerPhone">CUSTOMER'S PHONE</label>
                    <input onChange={onChangeHandler} type="text" placeholder="Example: 07834205874" name="ownerPhone" defaultValue={appointmentData?.ownerPhone} />

                    <button className="btn-submit-edit-app" type="submit">{appointmentData ? 'EDIT' : 'BOOK'}</button>
            </form>
        </div>
    );
}

export default AppointmentFormComponent;