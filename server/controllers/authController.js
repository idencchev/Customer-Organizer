const router = require('express').Router();
const { SALT_ROUNDS, JWT_SECRET } = require('../config/config');



router.post('/register', async (req, res) => {
    try {

        res.status(201).json({ message: `${req.body?.username} has been created successfully.` });
    } catch (error) {
        return res.status(409).send({ message: error });
    }
});

router.post('/login', async (req, res) => {
    try {

        res.status(200).json({ userdata: req.body, message: `${req.body?.username} has been logget in successfully.` })
    } catch (error) {
        return res.status(403).send({ message: error });
    }
});

router.get('/logout', async (req, res) => {
    res.status(200).json('Logget out.')
});


module.exports = router;