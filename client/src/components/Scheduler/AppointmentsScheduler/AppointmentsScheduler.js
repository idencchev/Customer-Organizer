import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { deleteAppointment, getAppointments } from '../../../api/data';
import { useUserStateValue } from '../../../Context/UserStateProvider';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import PlateNumberButton from '../PlateNumberButton';
import './AppointmentsScheduler.css';


function AppointmentsScheduler() {
    const [{ isAdmin }] = useUserStateValue();
    const [modalOpen, setModalOpen] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [modalData, setModalData] = useState({});

    useEffect(async () => {
        const data = await getAppointments();
        setAppointments(data);
    }, []);

    const onDeleteAppointment = async (id) => {
        try {
            await deleteAppointment(id);
            setAppointments(appointments.filter(appointment => appointment._id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    function tileContent({ date, view }) {
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const parseDate = `${year}-${(month + 1).toString().length !== 2 ? `0${month + 1}` : month + 1}-${day.toString().length !== 2 ? `0${day}` : day}`;

        // Add className to tiles in month view only
        if (view === 'month') {
            /* Check if a date React-Calendar wants to check is on the list of dates to add className to
               match the dates from DB with the dates from calendar and push the props in plate number button component
               id will be user for fetch on every single click
               plate number will be the name of the Tile Content(name of the button)
               setModalData will store the fetch data in the state and we will use her for the modal component */
            const findDate = appointments.filter(dDate => dDate.appointmentDate === parseDate);
            if (findDate) {
                return findDate.map(item => {
                    return <PlateNumberButton
                        key={item._id}
                        id={item._id}
                        plateNumber={item.plateNumber}
                        setOpenModal={setModalOpen}
                        setModalData={setModalData}
                    />
                });
            };
        };
    };

    return (
        <>
            {modalOpen && <AppointmentModal
                key={modalData._id}
                id={modalData._id}
                appointmentDate={modalData.appointmentDate}
                plateNumber={modalData.plateNumber}
                carMakeAndModel={modalData.carMakeAndModel}
                notes={modalData.notes}
                ownerName={modalData.ownerName}
                ownerPhone={modalData.ownerPhone}
                createdBy={modalData.createdBy}
                isAdmin={isAdmin}
                onDelete={onDeleteAppointment}
                setOpenModal={setModalOpen}
            />
            }
            <Calendar
                tileContent={tileContent}
            />
        </>
    );
};
export default AppointmentsScheduler;