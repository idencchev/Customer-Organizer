const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config')

function auth(req, res, next) {
    let tokenFromCookie = req.cookies["x-auth-token"];
    if (tokenFromCookie) {
        jwt.verify(tokenFromCookie, JWT_SECRET, function (err, decoded) {
            if (err) {
                res.clearCookie("x-auth-token"); //fake cookie/token
            } else {
                req.user = decoded;
            }
        });
    }
    next();
};

function isAuthenticated(req, res, next) {
    if (!req.user) {
        return res.status(401).json({ errorData: 'Unauthorized' });
    }
    next();
};

function isAdmin(req, res, next) {
    console.log(req.user.isAdmin);
    if (!req.user.isAdmin) {
        return res.status(401).json({ errorData: 'You need admin permissions for this action!' });
    }
    next();
};

module.exports = {
    auth,
    isAuthenticated,
    isAdmin
}