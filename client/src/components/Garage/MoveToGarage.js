import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { createCarInGarage, deleteAppointment, getAppointmentById } from '../../api/data';
import CarsFormComponent from './CarsFormComponent/CarsFormComponent';

function MoveToGarage(props) {

    const { username } = useSelector((state) => state.account);

    const [carData, setCarData] = useState({
        garageDate: null,
        plateNumber: null,
        carMakeAndModel: null,
        ownerName: null,
        notes: null,
        ownerPhone: null,
        createdBy: null,
        jobDoneAndParts: null,
        mechanicName: null
    });

    const id = props.history.location.pathname.split("/").pop();

    useEffect(async () => {
        const { appointmentDate, plateNumber, carMakeAndModel, ownerName, notes, ownerPhone } = await getAppointmentById(id);
        setCarData({
            garageDate: appointmentDate,
            plateNumber: plateNumber,
            carMakeAndModel: carMakeAndModel,
            ownerName: ownerName,
            notes: notes,
            ownerPhone: ownerPhone,
            createdBy: username,
        })
    }, []);

    const onChangeHandler = (e) => {
        setCarData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            carData['createdBy'] = username;
            await createCarInGarage(carData);
            await deleteAppointment(id);
            props.history.push('/view/garage');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CarsFormComponent
            carData={carData}
            onSubmitHandler={onSubmitHandler}
            onChangeHandler={onChangeHandler}
        />
    )
}
export default MoveToGarage;