import React, { useState } from "react";
import CarsFormComponent from "./CarsFormComponent/CarsFormComponent";
import { useUserStateValue } from "../../Context/UserStateProvider";
import { createCarInGarage } from "../../api/data";

function AddToGarage(props) {

    const [carData, setCarData] = useState();
    const [{ username }] = useUserStateValue();

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
            await createCarInGarage(carData);
            props.history.push('/view/garage');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CarsFormComponent
            onSubmitHandler={onSubmitHandler}
            onChangeHandler={onChangeHandler}
        />
    );
}

export default AddToGarage;