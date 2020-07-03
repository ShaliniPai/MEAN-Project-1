//Filename : User.js

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: { type: String, required: 'User name is required', unique: true },
    email: { type: String, lowercase: true, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, lowercase: true, required: true },
    role: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("user", UserSchema);