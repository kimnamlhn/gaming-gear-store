const express = require('express');
const router = express.Router();

const apiUserController = require('./apiUserController');

router.get('/', apiUserController.getUserList);
router.get('/admin', apiUserController.getAdminList);

module.exports = router;
