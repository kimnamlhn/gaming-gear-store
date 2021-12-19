const express = require('express');
const router = express.Router();

const cartController = require('./cartController');

router.get('/cart', cartController.list); // Product list

module.exports = router;
