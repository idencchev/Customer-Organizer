import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createAppointment } from "../../api/data";
import AppointmentFormComponent from "./AppointmentFormComponent/AppointmentFormComponent";

function AddAppointment(props) {

    const { username } = useSelector((state) => state.account);

    const [appointmentData, setAppointmentData] = useState({
        appointmentDate: '',
        carMakeAndModel: '',
        plateNumber: '',
        notes: '',
        ownerName: '',
        ownerPhone: '',
        createdBy: username
    });

    const [errMsgData, setErrMsgData] = useState({});

    const onAddAppointmentHandler = (e) => {
        setAppointmentData((prevAppointmentData) => ({
            ...prevAppointmentData,
            [e.target.name]: e.target.value
        }));
    };

    const createAppointmentHandler = async (e) => {
        e.preventDefault();
        try {
            const isValid = validate();
            isValid && await createAppointment(appointmentData);
            isValid && props.history.push('/view/scheduler');
        } catch (error) {
            console.log(error);
        }
    }

    const validate = () => {
        const errorMsg = {};
        let isValid = true;

        if (appointmentData.appointmentDate === '') {
            errorMsg.appointmentDateErr = 'Please set a Date!';
            isValid = false;
        }

        if (appointmentData.plateNumber === '') {
            errorMsg.plateNumberErr = 'Please set a Plate Number!';
            isValid = false;
        }

        if (appointmentData.carMakeAndModel === '') {
            errorMsg.carMakeAndModelErr = 'Please set a Car Make And Model!';
            isValid = false;
        }

        if (appointmentData.notes === '') {
            errorMsg.notesErr = 'Please set a Notes!';
            isValid = false;
        }

        if (appointmentData.ownerName === '') {
            errorMsg.ownerNameErr = 'Please set a Customer\'s Name!';
            isValid = false;
        }

        if (appointmentData.ownerPhone === '' || !/^\d+$/.test(appointmentData.ownerPhone)) {
            errorMsg.ownerPhoneErr = 'Customer\'s Phone is required and must be a number!';
            isValid = false;
        }

        setErrMsgData(errorMsg);
        return isValid;
    }

    return (
        <AppointmentFormComponent
            onChangeHandler={onAddAppointmentHandler}
            onSubmitHandler={createAppointmentHandler}
            errMsgData={errMsgData}
        />
    );
}

export default AddAppointment;