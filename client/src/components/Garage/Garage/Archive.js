import React, { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { deleteCar, getArchive } from "../../../api/data";
import CarComponent from "../CarComponent/CarComponent";
import './Garage.css'

function Garage() {
    const { isAdmin } = useSelector((state) => state.account);

    const [archive, setArchive] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);

    const inputEl = useRef("");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [noResults, setNoResults] = useState(false);

    const carsPerPage = 4;
    const pagesVisited = pageNumber * carsPerPage;


    useEffect(async () => {
        const data = await getArchive();
        setArchive(data);
    }, []);

    const onDeleteCar = async (id) => {
        try {
            await deleteCar(id);
            setArchive(archive.filter(car => car._id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    const searchHandler = (searchTerm) => {
        setSearchTerm(searchTerm);
        if (searchTerm !== "") {
            const newCarList = archive.filter((car) => {
                return Object.values(car)
                    .join(" ")
                    .toLowerCase()
                    .includes(searchTerm);
            });

            if (!newCarList.length) {
                setNoResults(true);
            } else {
                setNoResults(false);
                setSearchResults(newCarList);
            }
        } else {
            setSearchResults(archive);
        }
    };

    const getSearchTerm = () => {
        searchHandler(inputEl.current.value);
    };

    const displaySearchResults = searchResults.length ? searchResults
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
            />
        }) : null;

    const displayArchive = archive
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
            />
        });

    const pageCount = Math.ceil(searchResults.length ? searchResults.length / carsPerPage : archive.length / carsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <div className="search">
                <input
                    ref={inputEl}
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                    value={searchTerm}
                    onChange={getSearchTerm}
                />
                <i className="fa fa-search"></i>
            </div>

            {noResults ? <h2 className="not-found-search">This item has been not found at the Archive!</h2> :
                <div className="view-cars">
                    {displaySearchResults ? displaySearchResults : displayArchive}
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
            }
        </>
    );
}
export default Garage;