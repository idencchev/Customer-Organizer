const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config')

function auth(req, res, next) {
    let authorizationHeader = req.get('X-Authorization');
    if (authorizationHeader) {
        let token = authorizationHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            console.log(decoded);
            req.user = decoded;
        } catch (error) {
            next();
        }

    }
    next(); 
};

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