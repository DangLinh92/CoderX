const express = require('express');
const multer = require('multer');

const router = express.Router();
const db = require('../lowdb');
const controller = require('../controllers/user.controller');

const upload = multer({ dest: './src/public/uploads/' });

router.get('/list', (req, res) => {
    var users = db.get('users').value();
    return res.render('home', { users: users });
});
router.get('/new', controller.newUser);
router.post(
    '/new',
    upload.single('avatar'),
    controller.CloudinaryPost,
    controller.postNew,
);

module.exports = router;
