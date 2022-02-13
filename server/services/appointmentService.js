const Appointment = require('../models/Appointments');


async function addAppointment(appointment) {
    let user = new Appointment(appointment);
    return await user.save();

}

async function getAllAppointments() {
    return await Appointment.find();
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
    editAppointment
}