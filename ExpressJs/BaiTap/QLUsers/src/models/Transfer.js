const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TransferSchema = new Schema({
    id: String,
    account: String,
    amount: String,
    _csrf: String,
});

const Transfer = mongoose.model('Transfer', TransferSchema);

module.exports = Transfer;
