const express = require('express');
const router = express.Router();

const productController = require('./productController');

router.get('/', productController.list); // Product list
router.get('/checkout', productController.checkout); // Product checkout
router.get('/:productID', productController.details); // Product details

module.exports = router;
