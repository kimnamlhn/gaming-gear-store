var express = require('express');
var router = express.Router();

const indexController = require('./indexController');

/* GET home page. */
router.get('/', indexController.list);

module.exports = router;
