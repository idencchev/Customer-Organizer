const Garage = require('../models/Garage');

async function addInGarage(carData) {
    const result = new Garage(carData);
    return await result.save();
}

async function getAllCarsFromGarage() {
    const result = await Garage.find({ archive: false });
    return result.sort((a, b) => a.garageDate.localeCompare(b.garageDate));
}

async function getCarById(id) {
    return await Garage.findById(id);
}

async function deleteCar(id) {
    return await Garage.findByIdAndDelete({ _id: id });
}

async function editCarDetails(id, garageData) {
    return await Garage.findOneAndUpdate({ _id: id }, garageData);
}

async function moveToArchive(id) {
    return await Garage.findOneAndUpdate({ _id: id }, { archive: true });
}

async function getAllCarsFromArchive() {
    const result = await Garage.find({ archive: true });
    return result.sort((a, b) => a.garageDate.localeCompare(b.garageDate));
}

module.exports = {
    addInGarage,
    getAllCarsFromGarage,
    deleteCar,
    editCarDetails,
    getCarById,
    moveToArchive,
    getAllCarsFromArchive
}