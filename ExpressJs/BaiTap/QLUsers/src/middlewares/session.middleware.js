const shortid = require('shortid');
const db = require('../lowdb');

module.exports = function (req, res, next) {
    if (
        (req.signedCookies && !req.signedCookies.sessionId) ||
        !req.signedCookies
    ) {
        var sessionId = shortid.generate();
        res.cookie('sessionId', sessionId, { maxAge: 900000, signed: true });
        db.set('sessions', []).write();
        db.get('sessions').push({ id: sessionId }).write();
    }

    next();
};
