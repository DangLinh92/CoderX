const shortid = require('shortid');

module.exports.postCreate = function(req, res, next) {
    let name = req.body.name;
    if (name.length >= 10) {
        res.render('userViews/addUser', { userName: name, error_text: 'name is over max length' });
        return;
    }
    next();
}