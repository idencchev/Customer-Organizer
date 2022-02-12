const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/config');
const errorMsg = require('../utils/errorMessages');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, errorMsg.USERNAME_REQUIRED],
        lowercase: true,
        minlength: [4, errorMsg.USERNAME_LENGTH]
    },
    password: {
        type: String,
        required: [true, errorMsg.PASSWORD_REQUIRED],
        minlength: [6, errorMsg.PASSWORD_LENGTH]
    },
    isAdmin: {
        type: Boolean,
    },
});

userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    next();
});

module.exports = mongoose.model('User', userSchema);