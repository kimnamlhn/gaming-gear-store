const express = require('express');
const router = express.Router();

const apiOrderController = require('./apiOrderController');

router.get('/', apiOrderController.getOrderList);
router.get('/admin', apiOrderController.getOrderListAdmin);
router.get('/admin/:orderID', apiOrderController.getOrderDetailAdmin);

module.exports = router;
