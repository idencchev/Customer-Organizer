const router = require('express').Router();
const { registerUser, loginUser } = require('../services/authService');


router.post('/register', async (req, res) => {
    try {
        const userData = await registerUser(req.body);
        console.log(userData);
        res.status(201).json({ message: `${userData.username} has been created successfully.` });
    } catch (error) {
        return res.status(409).json({ error });
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await loginUser(req.body);
        res.status(200).json({ userData, message: `${userData.username} has been logget in successfully.` })
    } catch (error) {
        return res.status(403).json({ error });
    }
});

router.get('/logout', async (req, res) => {
    res.status(200).json('Logget out.')
});


module.exports = router;