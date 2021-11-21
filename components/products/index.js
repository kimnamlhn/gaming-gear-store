const express = require('express');
const router = express.Router();

const productController = require('./productController');

/* GET home page. */
router.get('/', productController.list);

router.get('/:productID', function(req, res, next) {
  res.render('user/productDetails', { title: 'Electro - Product Details' });
});

module.exports = router;