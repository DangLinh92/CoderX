const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.connect('mongodb://localhost:27017/mongoDemo', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        });

        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            // we're connected!
            console.log('connected to DB!!');
        });
    } catch (error) {
        console.log('connection error!!');
    }
}

module.exports = { connect };
