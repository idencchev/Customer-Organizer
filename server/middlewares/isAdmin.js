const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config')

function isAdmin(req, res, next) {
    if (!req.user) {
       return res.status(401).json({ errorData: 'You need admin permissions for this action!' });
    }
    next();
};

module.exports = {
    auth,
    isAdmin
}