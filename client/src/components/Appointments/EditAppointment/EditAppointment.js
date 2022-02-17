import React, { useEffect, useState } from "react";
import { editAppointment, getAppointmentById } from "../../../api/data";
import { useUserStateValue } from "../../../Context/UserStateProvider";

function EditAppointment(props) {

    const [{ username }] = useUserStateValue();

    const [appointmentData, setAppointmentData] = useState({
        appointmentDate: null,
        plateNumber: null,
        carMakeAndModel: null,
        ownerName: null,
        notes: null,
        ownerPhone: null,
        createdBy: null,
    });

    const id = props.history.location.pathname.split("/").pop();

    useEffect(async () => {
        const { appointmentDate, plateNumber, carMakeAndModel, ownerName, notes, ownerPhone, createdBy } = await getAppointmentById(id);
        setAppointmentData({
            appointmentDate: appointmentDate,
            plateNumber: plateNumber,
            carMakeAndModel: carMakeAndModel,
            ownerName: ownerName,
            notes: notes,
            ownerPhone: ownerPhone,
            createdBy: username,
        })
    }, []);

    const onChangeHandler = async (e) => {
        setAppointmentData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const onEditHandler = async (e) => {
        e.preventDefault();
        try {
            await editAppointment(id, appointmentData);
            props.history.push('/view/appointments');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="add-appointment">

            <form onSubmit={onEditHandler}>
                <div className="container-add-appointment">
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

                    <button className="btn-submit" type="submit">EDIT</button>

                </div>
            </form>
        </div>
    )
}

export default EditAppointment;
