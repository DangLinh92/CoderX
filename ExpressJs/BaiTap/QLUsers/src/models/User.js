const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    order: Number,
    id: String,
    name: String,
    email: String,
    password: String,
    phone: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
