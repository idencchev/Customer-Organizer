const router = require('express').Router();

const { addAppointment, getAllAppointments, deleteAppointment, editAppointment, getAppointmentById } = require('../services/appointmentService.js');
const { isAuthenticated, isAdmin } = require('../middlewares/auth');

router.post('/create',  isAuthenticated, async (req, res) => {
  try {

    const appointmentData = await addAppointment(req.body);
    res.status(201).json({ message: `${appointmentData.plateNumber} was booked for ${appointmentData.appointmentDate} successfully.` });

  } catch (error) {
    return res.status(409).json({ error });
  }
});

router.get('/', isAuthenticated, async (req, res) => {
  try {

    const appointmentsData = await getAllAppointments(req.body);
    res.status(200).json(appointmentsData);

  } catch (error) {
    return res.status(409).json({ error });
  }

});

router.get('/:id', isAuthenticated, async (req, res) => {
  try {

    const appointmentsData = await getAppointmentById(req.params.id);
    res.status(200).json(appointmentsData);

  } catch (error) {
    return res.status(409).json({ error });
  }

});

router.put('/:id', isAuthenticated, async (req, res) => {
  try {

    const appointmentsData = await editAppointment(req.params.id, req.body);
    res.status(200).json({ message: `${appointmentsData.plateNumber} has been edited!` });

  } catch (error) {
    return res.status(409).json({ error });
  }

});

router.delete('/:id', [isAuthenticated, isAdmin], async (req, res) => {
  try {

    const appointmentsData = await deleteAppointment(req.params.id);
    res.status(200).json({ message: `${appointmentsData.plateNumber} has been deleted!` });

  } catch (error) {
    return res.status(204).json({ error });
  }

});





module.exports = router;