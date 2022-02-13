const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { SALT_ROUNDS, JWT_SECRET } = require('../config/config');

async function registerUser(data) {
    let checkUsername = await User.findOne({ username: data.username });

    if (checkUsername) {
        throw 'This username is already taken!';
    }

    if (data.password != data.rePass) {
        throw 'Passwords are not same!';
    }

    let user = new User({ username: data.username.toLowerCase().trim(), password: data.password.trim(), isAdmin: false });
    return await user.save();
}

async function loginUser(data) {

    const { _id, username, password, isAdmin } = await User.findOne({ username: data.username.toLowerCase() }) || {};

    if (username == undefined) {
        throw 'This username does not exist!';
    }

    const match = await bcrypt.compare(data.password, password);

    if (!match) {
        throw 'Wrong password!';
    }

    const token = jwt.sign({ id: _id, isAdmin: isAdmin }, JWT_SECRET, { expiresIn: '2d' });

    return {
        _id: _id,
        username: username,
        isAdmin: isAdmin,
        token: token
    }

}

module.exports = {
    registerUser,
    loginUser
}