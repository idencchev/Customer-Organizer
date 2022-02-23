import React, { useEffect, useState } from 'react'
import { createCarInGarage, editCar, getCarById } from '../../api/data';
import { useUserStateValue } from '../../Context/UserStateProvider';
import CarsFormComponent from './CarsFormComponent/CarsFormComponent';

function EditCar(props) {

    const [{ username }] = useUserStateValue();
    const [showEditButton, setEditButton] = useState(true);
    const [carData, setCarData] = useState({
        id: null,
        garageDate: null,
        plateNumber: null,
        carMakeAndModel: null,
        ownerName: null,
        notes: null,
        ownerPhone: null,
        createdBy: null,
        jobDoneAndParts: null,
        mechanicName: null,
        archive: null,
    });

    const id = props.history.location.pathname.split("/").pop();

    useEffect(async () => {
        const { garageDate, plateNumber, carMakeAndModel, ownerName, notes, ownerPhone, jobDoneAndParts, mechanicName, archive } = await getCarById(id);
        setCarData({
            garageDate: garageDate,
            plateNumber: plateNumber,
            carMakeAndModel: carMakeAndModel,
            ownerName: ownerName,
            notes: notes,
            ownerPhone: ownerPhone,
            createdBy: username,
            jobDoneAndParts: jobDoneAndParts,
            mechanicName: mechanicName,
            archive: archive
        });
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
            await editCar(id, carData);
            if (carData.archive) {
                return props.history.push('/view/archive');
            }
            props.history.push('/view/garage');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <CarsFormComponent
            carData={carData}
            onSubmitHandler={onSubmitHandler}
            onChangeHandler={onChangeHandler}
            showEditButton={showEditButton}
        />
    );
};
export default EditCar;