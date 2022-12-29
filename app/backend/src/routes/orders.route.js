const { Router } = require('express');
const OrdersController = require('../controllers/orders.controller.js');

const router = Router();

router.route('/').get(OrdersController.getAllOrders);

module.exports = router;
