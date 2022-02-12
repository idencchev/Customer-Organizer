const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config')

function auth(req, res, next) {
    let authorizationHeader = req.get('X-Authorization');
    if (authorizationHeader) {
        let token = authorizationHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = decoded;
           
        } catch (error) {
            next();
        }
    }
    next(); 
};

function isAuthenticated(req, res, next) {

    if (!req.user) {
       return res.status(401).json({ errorData: 'Unauthorized' });
    }
    next();
};

module.exports = {
    auth,
    isAuthenticated
}