import React, { useState } from "react";
import { createAppointment } from "../../api/data";
import { useUserStateValue } from "../../Context/UserStateProvider";
import AppointmentFormComponent from "./AppointmentFormComponent/AppointmentFormComponent";

function AddAppointment(props) {

    const [appointmentData, setAppointmentData] = useState();
    const [{ username }] = useUserStateValue();

    const onAddAppointmentHandler = (e) => {
        setAppointmentData((prevAppointmentData) => ({
            ...prevAppointmentData,
            [e.target.name]: e.target.value
        }));
    };

    const createAppointmentHandler = async (e) => {
        e.preventDefault();
        try {
            appointmentData['createdBy'] = username;
            await createAppointment(appointmentData);
            props.history.push('/view/scheduler');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AppointmentFormComponent
            onChangeHandler={onAddAppointmentHandler}
            onSubmitHandler={createAppointmentHandler}
        />
    );
}

export default AddAppointment;