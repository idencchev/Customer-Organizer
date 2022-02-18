import React from "react";
import './AppointmentFormComponent.css'

function AppointmentFormComponent({ appointmentData, onSubmitHandler, onChangeHandler }) {

    return (
        <div className="add-appointment">
            <form className="add-appointment-form"onSubmit={onSubmitHandler}>
                    <label htmlFor="appointmentDate"><b>APPOINTMENT DATE</b></label>
                    <input onChange={onChangeHandler} type="text" placeholder="Example: 12.02.2022" name="appointmentDate" required defaultValue={appointmentData?.appointmentDate} />

                    <label htmlFor="plateNumber"><b>PLATE NUMBER</b></label>
                    <input onChange={onChangeHandler} type="text" placeholder="Example: RZ21PRG" name="plateNumber" defaultValue={appointmentData?.plateNumber} />

                    <label htmlFor="carMakeAndModel"><b>CAR'S MAKE AND MODEL</b></label>
                    <input onChange={onChangeHandler} type="text" placeholder="Example: VW 2.0 TDI PD" name="carMakeAndModel" defaultValue={appointmentData?.carMakeAndModel} />

                    <label htmlFor="notes"><b>NOTES / TO DO</b></label>
                    <textarea
                        cols="40" rows="2"
                        onChange={onChangeHandler}
                        className="textarea-notes"
                        placeholder="Example: Service, Change Clutch and etc."
                        name="notes" defaultValue={appointmentData?.notes} />

                    <label htmlFor="ownerName"><b>OWNER'S NAME</b></label>
                    <input onChange={onChangeHandler} type="text" placeholder="Example: John Doe" name="ownerName" defaultValue={appointmentData?.ownerName} />

                    <label htmlFor="ownerPhone"><b>OWNER'S PHONE</b></label>
                    <input onChange={onChangeHandler} type="text" placeholder="Example: 07834205874" name="ownerPhone" defaultValue={appointmentData?.ownerPhone} />

                    <button className="btn-submit" type="submit">{appointmentData ? 'EDIT' : 'BOOK'}</button>
            </form>
        </div>
    );
}

export default AppointmentFormComponent;