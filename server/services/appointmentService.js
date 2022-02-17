const Appointment = require('../models/Appointments');


async function addAppointment(appointmentData) {
    let appointment = new Appointment(appointmentData);
    return await appointment.save();

}

async function getAllAppointments() {
    return await Appointment.find();
}

async function getAppointmentById(id) {
    return await Appointment.findById(id);
}

async function deleteAppointment(id) {
    return await Appointment.findByIdAndDelete({ _id: id });
}

async function editAppointment(id, appointment) {
    return await Appointment.findOneAndUpdate(id, appointment, { new: true });
}

module.exports = {
    addAppointment,
    getAllAppointments,
    deleteAppointment,
    editAppointment,
    getAppointmentById
}