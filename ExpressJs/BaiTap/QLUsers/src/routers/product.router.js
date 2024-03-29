const express = require('express');
const router = express.Router();

const controller = require('../controllers/product.controller');

router.get('/', controller.getProductByPage);
router.get('/add/:id', controller.addToCard);
module.exports = router;
