var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user/productList', { title: 'Electro - Product List' });
});

router.get('/:productID', function(req, res, next) {
  res.render('user/productDetails', { title: 'Electro - Product Details' });
});

module.exports = router;