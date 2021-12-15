const express = require('express');
const router = express.Router();

const apiProductController = require('./apiProductController');

router.get('/', apiProductController.getProducts);

module.exports = router;