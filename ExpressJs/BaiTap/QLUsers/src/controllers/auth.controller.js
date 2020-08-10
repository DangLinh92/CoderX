const db = require('../lowdb');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.getLogin = (req, res) => {
    res.clearCookie('userId');
    return res.redirect('login');
};

var RetryCount = 0;
module.exports.postLogin = (req, res) => {
    console.log(RetryCount);
    RetryCount += 1;
    if (RetryCount > 5) {
        return res.render('login', {
            messageErr: 'Số lần nhập vượt quá 5 lần',
        });
    }
    var user = req.body;
    var userDb = db.get('users').find({ email: user.email }).value();
    if (userDb) {
        bcrypt.compare(user.password, userDb.password, function (err, result) {
            if (result) {
                res.cookie('userId', userDb.id, {
                    maxAge: 900000,
                    signed: true,
                });
                res.locals.userName = userDb.name;
                RetryCount = 0;
                return res.render('home', { users: db.get('users').value() });
            } else {
                return res.render('login');
            }
        });
    }
    //return res.render('login');
};
