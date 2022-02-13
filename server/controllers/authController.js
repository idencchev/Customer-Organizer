const router = require('express').Router();
const { isAuthenticated, isAdmin } = require('../middlewares/auth');
const { registerUser, loginUser } = require('../services/authService');
const { COOKIE_NAME } = require('../config/config');


router.post('/register', [isAuthenticated, isAdmin], async (req, res) => {
    try {
        const userData = await registerUser(req.body);

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

router.get('/logout', isAuthenticated, async (req, res) => {

    res.status(200).json('Logget out.')
});


module.exports = router;