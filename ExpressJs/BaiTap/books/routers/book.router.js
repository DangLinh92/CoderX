const express = require('express');
const router = express.Router();

const controller = require('../controllers/book.controller');

router.get('/', controller.get);
router.get('/new', controller.new);
router.post('/new', controller.postNew);
router.get('/edit/:id', controller.edit);
router.post('/edit', controller.postEdit);
router.get('/delete/:id', controller.delete);

module.exports = router;