const router = require('express').Router();
const authController = require('./controllers/authController');
const appointmentsController = require('./controllers/appointmentController');
const garageController = require('./controllers/garageController');

router.use('/auth', authController);
router.use('/appointments', appointmentsController);
router.use('/garage', garageController);

module.exports = router;