import React from 'react';
import './CarsFormComponent.css';

function CarsFormComponent({ carData, onSubmitHandler, onChangeHandler, showEditButton }) {

  return (
    <div className="add-car">
      <form className="add-car-form" onSubmit={onSubmitHandler}>
        <label htmlFor="garageDate">DATE</label>
        <input onChange={onChangeHandler} type="date" name="garageDate" defaultValue={carData?.garageDate} />

        <label htmlFor="plateNumber">PLATE NUMBER</label>
        <input onChange={onChangeHandler} type="text" placeholder="Example: RZ21PRG" name="plateNumber" defaultValue={carData?.plateNumber} />

        <label htmlFor="carMakeAndModel">CAR'S MAKE AND MODEL</label>
        <input onChange={onChangeHandler} type="text" placeholder="Example: VW 2.0 TDI PD" name="carMakeAndModel" defaultValue={carData?.carMakeAndModel} />

        <label htmlFor="notes">NOTES / TO DO</label>
        <textarea
          cols="40" rows="2"
          onChange={onChangeHandler}
          className="textarea-notes"
          placeholder="Example: Service, Change Clutch and etc."
          name="notes" defaultValue={carData?.notes} />

        <label htmlFor="ownerName">OWNER'S NAME</label>
        <input onChange={onChangeHandler} type="text" placeholder="Example: John Doe" name="ownerName" defaultValue={carData?.ownerName} />

        <label htmlFor="ownerPhone">OWNER'S PHONE</label>
        <input onChange={onChangeHandler} type="text" placeholder="Example: 07834205874" name="ownerPhone" defaultValue={carData?.ownerPhone} />

        <label htmlFor="jobDoneAndParts">JOB DONE AND PARTS</label>
        <textarea
          cols="40" rows="2"
          onChange={onChangeHandler}
          className="textarea-notes"
          placeholder="Example: Changed clutch, brake pads and etc."
          name="jobDoneAndParts" defaultValue={carData?.jobDoneAndParts} />

        <label htmlFor="mechanicName">MECHANIC</label>
        <input onChange={onChangeHandler} type="text" placeholder="Example: Viktor" name="mechanicName" defaultValue={carData?.mechanicName} />

        <button className="btn-submit-edit-app" type="submit">{showEditButton ? 'EDIT' : carData ? 'MOVE' : 'CREATE'}</button>
      </form>
    </div>
  )
}

export default CarsFormComponent;