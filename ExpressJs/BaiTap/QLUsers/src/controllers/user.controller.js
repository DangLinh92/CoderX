const shortid = require('shortid');
const db = require('../lowdb');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.newUser = (req, res) => {
    return res.render('newUser');
};

module.exports.postNew = (req, res) => {
    var user = req.body;
    var userId = shortid.generate();
    var order = db.get('users').findLast().value().order;
    if (!isNaN(order)) {
        var odr = Number.parseInt(order) + 1;
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(user.password, salt, function (err, hash) {
                // Store hash in your password DB.
                db.get('users')
                    .push({
                        order: odr,
                        id: userId,
                        name: user.name,
                        email: user.email,
                        password: hash,
                        phone: user.phone,
                    })
                    .write();

                return res.redirect('/users/list');
            });
        });
    }
};
