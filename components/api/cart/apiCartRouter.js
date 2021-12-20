const express = require('express');
const router = express.Router();

const apiCartController = require('./apiCartController');

router.get('/', apiCartController.getCart);
router.post('/add-to-cart', apiCartController.addToCart);

module.exports = router;
