const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SessionSchema = new Schema({
    id: String,
});

const Session = mongoose.model('Session', SessionSchema);

module.exports = Session;
