const express = require('express');
const router = express.Router();

const apiOrderController = require('./apiOrderController');

router.get('/', apiUserController.getOrderList);
router.get('/admin', apiUserController.getOrderListAdmin);

module.exports = router;
