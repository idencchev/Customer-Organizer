const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { JWT_SECRET } = require('../config/config');

async function registerUser(data) {
    const checkUsername = await User.findOne({ username: data.username });

    if (checkUsername) {
        throw 'This username is already taken!';
    }

    if (data.password != data.rePass) {
        throw 'Passwords are not same!';
    }

    const user = new User({ username: data.username.toLowerCase().trim(), password: data.password.trim(), isAdmin: data.isAdmin });
    const { username, isAdmin, _id } = await user.save();
    return { username, isAdmin, _id }
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

    const token = jwt.sign({ id: _id, isAdmin: isAdmin, username: username }, JWT_SECRET, { expiresIn: '2d' });

    return {
        _id: _id,
        username: username,
        isAdmin: isAdmin,
        token: token
    }

}

async function deleteUser(id) {
    return await User.findByIdAndDelete(id);
}

async function getAllUsers() {
    const data = await User.find();

    return data
        .sort((a, b) => a.username.localeCompare(b.username))
        .map(x => {
            return { _id: x._id, username: x.username, isAdmin: x.isAdmin };
        });
}

module.exports = {
    registerUser,
    loginUser,
    deleteUser,
    getAllUsers
}