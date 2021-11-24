const express = require('express');
const router = express.Router();

const accountController = require('./accountController');

/* GET home page. */
router.get('/login', accountController.login);

router.get('/register', accountController.register);

module.exports = router;