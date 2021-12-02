const express = require('express');
const router = express.Router();

const productController = require('./productController');
const commentController = require('../comment/commentController');

router.get('/', productController.list); // Product list
router.get('/checkout', productController.checkout); // Product checkout
router.get('/:productID', productController.details); // Product details
router.post('/:productID/submitcomment', commentController.addComment);

module.exports = router;