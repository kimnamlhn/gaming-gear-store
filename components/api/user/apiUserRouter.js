const express = require('express');
const router = express.Router();

const apiUserController = require('./apiUserController');

router.get('/', apiUserController.getUserList);

module.exports = router;
