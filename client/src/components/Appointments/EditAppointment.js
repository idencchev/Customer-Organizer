import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { editAppointment, getAppointmentById } from "../../api/data";
import AppointmentFormComponent from "./AppointmentFormComponent/AppointmentFormComponent";

function EditAppointment(props) {

    const { username } = useSelector((state) => state.account);

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
        const { appointmentDate, plateNumber, carMakeAndModel, ownerName, notes, ownerPhone } = await getAppointmentById(id);
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

    const onChangeHandler = (e) => {
        setAppointmentData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const onEditHandler = async (e) => {
        e.preventDefault();
        try {
            await editAppointment(id, appointmentData);
            props.history.push('/view/scheduler');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AppointmentFormComponent
            appointmentData={appointmentData}
            onChangeHandler={onChangeHandler}
            onSubmitHandler={onEditHandler}
        />
    )
}

export default EditAppointment;