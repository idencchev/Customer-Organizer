import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { deleteAppointment, getAppointments } from "../../api/data";
import { useUserStateValue } from "../../Context/UserStateProvider";
import AppointmentComponent from './AppointmentComponent/AppointmentComponent'
import './Appointments.css'

function Appointments() {

    const [{ isAdmin }] = useUserStateValue();

    const [appointments, setAppointments] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const appointmentsPerPage = 4;
    const pagesVisited = pageNumber * appointmentsPerPage;


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

    const displayAppointments = appointments
        .slice(pagesVisited, pagesVisited + appointmentsPerPage)
        .map(item => {
            return <AppointmentComponent
                key={item._id}
                id={item._id}
                appointmentDate={item.appointmentDate}
                plateNumber={item.plateNumber}
                carMakeAndModel={item.carMakeAndModel}
                notes={item.notes}
                ownerName={item.ownerName}
                ownerPhone={item.ownerPhone}
                createdBy={item.createdBy}
                isAdmin={isAdmin}
                onDelete={onDeleteAppointment}
            />
        });

    const pageCount = Math.ceil(appointments.length / appointmentsPerPage);


    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <div className="view-appointment">
            {displayAppointments}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                initialSelected={2}
            />
        </div>
    );
}

export default Appointments;
