const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');
const { isAuthenticated, isAdmin } = require('../middlewares/auth');
const { registerUser, loginUser, deleteUser, getAllUsers } = require('../services/authService');

router.post('/register', [isAuthenticated, isAdmin], async (req, res) => {
    try {
        const userData = await registerUser(req.body);
        res.status(201).json({ userData, message: `${userData.username} has been created successfully.` });

    } catch (error) {
        return res.status(409).json({ error });
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await loginUser(req.body);
        res.cookie('x-auth-token', userData.token, { httpOnly: true });
        res.status(200).json({ userData, message: `${userData.username} has been logget in successfully.` })

    } catch (error) {
        return res.status(403).json({ error });
    }
});

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie('x-auth-token');
    res.status(200).json('Logget out.');
});

router.get('/users', [isAuthenticated, isAdmin], async (req, res) => {
    try {
        const userData = await getAllUsers();
        res.status(200).json(userData);

    } catch (error) {
        return res.status(403).json({ error });
    }
});

router.post('/verify', async (req, res, next) => {

    let isVerified = false;
    let tokenFromCookie = req.cookies["x-auth-token"];

    if (tokenFromCookie) {
        jwt.verify(tokenFromCookie, JWT_SECRET, (err, decoded) => {
            if (err) {
                res.clearCookie('x-auth-token');
                res.json({ isVerified });
                return;
            } else {
                isVerified = true;
                res.status(200).json({
                    id: decoded.id,
                    isAdmin: decoded.isAdmin,
                    username: decoded.username,
                    isVerified
                });
                return;
            }
        });
    } else {
        res.json({ isVerified });
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