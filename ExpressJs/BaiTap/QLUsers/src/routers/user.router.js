const express = require('express');
const router = express.Router();
const db = require('../lowdb');
const controller = require('../controllers/user.controller');

router.get('/list', (req, res) => {
    var users = db.get('users').value();
    return res.render('home', { users: users });
});
router.get('/new', controller.newUser);
router.post('/new', controller.postNew);

module.exports = router;
