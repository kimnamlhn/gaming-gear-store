const express = require('express');
const router = express.Router();

const productController = require('./productController');

/* GET home page. */
router.get('/', productController.list);

router.get('/:productID', productController.details);

module.exports = router;