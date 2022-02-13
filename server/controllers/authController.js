const router = require('express').Router();
const { isAuthenticated, isAdmin } = require('../middlewares/auth');
const { registerUser, loginUser, deleteUser, getAllUsers } = require('../services/authService');

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

router.get('/users', [isAuthenticated, isAdmin], async (req, res) => {
    try {
        const userData = await getAllUsers();
        res.status(200).json(userData);

    } catch (error) {
        return res.status(403).json({ error });
    }
});

router.delete('/users/:id', [isAuthenticated, isAdmin], async (req, res) => {
    try {
        const userData = await deleteUser(req.params.id);
        res.status(200).json({ message: `${userData.username} has been deleted in successfully.` })

    } catch (error) {
        return res.status(403).json({ error });
    }
});

module.exports = router;