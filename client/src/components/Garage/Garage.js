import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { deleteCar, getAllCars, getArchive, moveToArchive } from "../../api/data.js";
import { useUserStateValue } from "../../Context/UserStateProvider.js";
import CarComponent from "./CarComponent/CarComponent.js";
import './Garage.css'

function Garage(props) {
    const [{ isAdmin }] = useUserStateValue();

    const [cars, setCars] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const carsPerPage = 4;
    const pagesVisited = pageNumber * carsPerPage;

    const pathname = props.history.location.pathname;

    useEffect(async () => {
        if (pathname === '/view/garage') {
            const data = await getAllCars();
            setCars(data);
        } else {
            const data = await getArchive();
            setCars(data);
        }

    }, [pathname]);

    const onDeleteCar = async (id) => {
        try {
            await deleteCar(id);
            setCars(cars.filter(car => car._id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    const move = async (id) => {
        await moveToArchive(id);
        setCars(cars.filter(car => car._id !== id));
    }

    const displayCars = cars
        .slice(pagesVisited, pagesVisited + carsPerPage)
        .map(item => {
            return <CarComponent
                key={item._id}
                id={item._id}
                garageDate={item.garageDate}
                plateNumber={item.plateNumber}
                carMakeAndModel={item.carMakeAndModel}
                notes={item.notes}
                ownerName={item.ownerName}
                ownerPhone={item.ownerPhone}
                createdBy={item.createdBy}
                jobDoneAndParts={item.jobDoneAndParts}
                mechanicName={item.mechanicName}
                isAdmin={isAdmin}
                onDelete={onDeleteCar}
                move={move}
            />
        });

    const pageCount = Math.ceil(cars.length / carsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <div className="view-cars">
            {displayCars}
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
export default Garage;