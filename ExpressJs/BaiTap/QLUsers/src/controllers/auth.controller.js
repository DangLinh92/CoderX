const db = require('../lowdb');

module.exports.getLogin = (req, res) => {
    res.clearCookie('userId');
    return res.redirect('login');
};

module.exports.postLogin = (req, res) => {
    var user = req.body;
    var userDb = db
        .get('users')
        .find({ email: user.email, password: user.password })
        .value();
    if (userDb) {
        res.cookie('userId', userDb.id, { maxAge: 900000, signed: true });
        res.locals.userName = userDb.name;
        return res.render('home', { users: db.get('users').value() });
    }

    return res.redirect('login');
};
