const express = require('express');
const router = express.Router();

const apiProductController = require('./apiProductController');

router.get('/', apiProductController.getProducts);
router.post('/search', apiProductController.searchProducts);

module.exports = router;
