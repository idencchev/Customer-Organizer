const mongoose = require('mongoose');

const errorMsg = require('../utils/errorMessages');

const appointmentsSchema = new mongoose.Schema({
    appointmentDate: {
        type: String,
        required: [true, errorMsg.APPOINTMENTDATE_REQUIRED]
    },
    plateNumber: {
        type: String,
        required: [true, errorMsg.PLATE_REQUIRED],
        lowercase: false
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
        required: [true, errorMsg.OWNER_REQUIRED]
    },
    ownerPhone: {
        type: Number,
        required: [true, errorMsg.PHONE_REQUIRED]
    },
    createdBy: {
        type: mongoose.Types.ObjectId
    }
});


module.exports = mongoose.model('Appointment', appointmentsSchema);