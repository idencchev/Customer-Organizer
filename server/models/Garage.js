const mongoose = require('mongoose');

const errorMsg = require('../utils/errorMessages');

const garageSchema = new mongoose.Schema({
    garageDate: {
        type: String,
        required: [true, errorMsg.GARAGEDATE_REQUIRED]
    },
    plateNumber: {
        type: String,
        required: [true, errorMsg.PLATE_REQUIRED]
    },
    carMakeAndModel: {
        type: String,
        required: [true, errorMsg.MAKEANDMODEL_REQUIRED]
    },
    ownerName: {
        type: String,
        required: [true, errorMsg.OWNER_REQUIRED]
    },
    notes: {
        type: String,
        required: [true, errorMsg.NOTES_REQUIRED]
    },
    ownerPhone: {
        type: Number,
        required: [true, errorMsg.PHONE_REQUIRED]
    },
    jobDoneAndParts: {
        type: String
    },
    mechanicName: {
        type: String
    },
    createdBy: {
        type: String
    },
    archive: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Garage', garageSchema);