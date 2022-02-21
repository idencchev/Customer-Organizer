const Appointment = require('../models/Appointments');


async function addAppointment(appointmentData) {
    const appointment = new Appointment(appointmentData);
    return await appointment.save();

}

async function getAllAppointments() {
    const result = await Appointment.find();

    return result.sort((a, b) => a.appointmentDate.localeCompare(b.appointmentDate));
}

async function getAppointmentById(id) {
    return await Appointment.findById(id);
}

async function deleteAppointment(id) {
    return await Appointment.findByIdAndDelete({ _id: id });
}

async function editAppointment(id, appointment) {
    return await Appointment.findOneAndUpdate({ _id: id }, appointment);
}

module.exports = {
    addAppointment,
    getAllAppointments,
    deleteAppointment,
    editAppointment,
    getAppointmentById
}