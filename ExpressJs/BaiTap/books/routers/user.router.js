const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controller');
const validate = require('../validate/user.validate');

router.get('/', controller.index);
router.get('/new', controller.new);
router.post('/new', validate.postCreate, controller.postNew);
router.get('/edit/:id', controller.edit);
router.post('/edit', controller.postEdit);
router.get('/delete/:id', controller.delete);

module.exports = router;