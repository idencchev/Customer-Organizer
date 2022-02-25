import React, { useState } from "react";
import CarsFormComponent from "./CarsFormComponent/CarsFormComponent";
import { useUserStateValue } from "../../Context/UserStateProvider";
import { createCarInGarage } from "../../api/data";

function AddToGarage(props) {

    const [{ username }] = useUserStateValue();

    const [carData, setCarData] = useState({
        garageDate: '',
        plateNumber: '',
        carMakeAndModel: '',
        notes: '',
        ownerName: '',
        ownerPhone: '',
        jobDoneAndParts: '',
        mechanicName: '',
        createdBy: username
    });
    const [errMsgData, setErrMsgData] = useState({});

    const onChangeHandler = (e) => {
        setCarData((prevAppointmentData) => ({
            ...prevAppointmentData,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            carData['createdBy'] = username;
            const isValid = validate();
            isValid && await createCarInGarage(carData);
            isValid && props.history.push('/view/garage');
        } catch (error) {
            console.log(error);
        }
    }

    const validate = () => {
        const errorMsg = {};
        let isValid = true;
        console.log(carData);
        if (carData.garageDate === '') {
            errorMsg.appointmentDateErr = 'Please set a Date!';
            isValid = false;
        }

        if (carData.plateNumber === '') {
            errorMsg.plateNumberErr = 'Please set a Plate Number!';
            isValid = false;
        }

        if (carData.carMakeAndModel === '') {
            errorMsg.carMakeAndModelErr = 'Please set a Car Make And Model!';
            isValid = false;
        }

        if (carData.notes === '') {
            errorMsg.notesErr = 'Please set a Notes!';
            isValid = false;
        }

        if (carData.ownerName === '') {
            errorMsg.ownerNameErr = 'Please set a Customer\'s Name!';
            isValid = false;
        }

        if (carData.ownerPhone === '' || !/^\d+$/.test(carData.ownerPhone)) {
            errorMsg.ownerPhoneErr = 'Customer\'s Phone is required and must be a number!';
            isValid = false;
        }

        setErrMsgData(errorMsg);
        console.log(errorMsg);
        return isValid;
    }

    return (
        <CarsFormComponent
            onSubmitHandler={onSubmitHandler}
            onChangeHandler={onChangeHandler}
            errMsgData={errMsgData}
        />
    );
}

export default AddToGarage;