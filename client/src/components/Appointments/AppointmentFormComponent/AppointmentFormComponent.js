import React from "react";
import './AppointmentFormComponent.css'

function AppointmentFormComponent({ appointmentData, onSubmitHandler, onChangeHandler, errMsgData }) {

    return (
        <div className="add-appointment">
            <form className="add-appointment-form" onSubmit={onSubmitHandler}>
                <label htmlFor="appointmentDate">APPOINTMENT DATE</label>
                <input onChange={onChangeHandler} type="date" name="appointmentDate" defaultValue={appointmentData?.appointmentDate} />
                {errMsgData?.appointmentDateErr ? <p className="error-msg">{errMsgData?.appointmentDateErr}</p> : null}

                <label htmlFor="plateNumber">PLATE NUMBER</label>
                <input onChange={onChangeHandler} type="text" placeholder="Example: RZ21PRG" name="plateNumber" defaultValue={appointmentData?.plateNumber} />
                {errMsgData?.plateNumberErr ? <p className="error-msg">{errMsgData?.plateNumberErr}</p> : null}

                <label htmlFor="carMakeAndModel">CAR'S MAKE AND MODEL</label>
                <input onChange={onChangeHandler} type="text" placeholder="Example: VW 2.0 TDI PD" name="carMakeAndModel" defaultValue={appointmentData?.carMakeAndModel} />
                {errMsgData?.carMakeAndModelErr ? <p className="error-msg">{errMsgData?.carMakeAndModelErr}</p> : null}

                <label htmlFor="notes">NOTES / TO DO</label>
                <textarea
                    cols="40" rows="2"
                    onChange={onChangeHandler}
                    className="textarea-notes"
                    placeholder="Example: Service, Change Clutch and etc."
                    name="notes" defaultValue={appointmentData?.notes} />
                {errMsgData?.notesErr ? <p className="error-msg">{errMsgData?.notesErr}</p> : null}

                <label htmlFor="ownerName">CUSTOMER'S NAME</label>
                <input onChange={onChangeHandler} type="text" placeholder="Example: John Doe" name="ownerName" defaultValue={appointmentData?.ownerName} />
                {errMsgData?.ownerNameErr ? <p className="error-msg">{errMsgData?.ownerNameErr}</p> : null}

                <label htmlFor="ownerPhone">CUSTOMER'S PHONE</label>
                <input onChange={onChangeHandler} type="text" placeholder="Example: 07834205874" name="ownerPhone" defaultValue={appointmentData?.ownerPhone} />
                {errMsgData?.ownerPhoneErr ? <p className="error-msg">{errMsgData?.ownerPhoneErr}</p> : null}

                <button className="btn-submit-edit-app" type="submit">{appointmentData ? 'EDIT' : 'BOOK'}</button>
            </form>
        </div>
    );
}

export default AppointmentFormComponent;