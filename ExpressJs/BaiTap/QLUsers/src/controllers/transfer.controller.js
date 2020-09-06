var db = require('../lowdb');
var shortId = require('shortid');
module.exports.create = function (req, res, next) {
    res.render('transferCreate', { csrfToken: req.csrfToken() });
};

module.exports.postCreate = function (req, res, next) {
    var id = shortId.generate();
    req.body.id = id;
    req.body.amount = parseInt(req.body.amount);
    db.get('transfers').push(req.body).write();
    return res.redirect('/transfer/create');
};
