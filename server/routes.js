const router = require('express').Router();
const authController = require('./controllers/authController');
const appointmentsController = require('./controllers/appointmentsController');


router.use('/auth', authController);
router.use('/appointments', appointmentsController);

module.exports = router;