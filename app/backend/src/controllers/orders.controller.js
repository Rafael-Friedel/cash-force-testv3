const OrdersService = require('../services/orders.service.js');

class OrdersController {
  static async getAllOrders(_req, res) {
    const allOrders = await OrdersService.getAllOrders();
    res.status(200).json(allOrders);
  }
}
module.exports = OrdersController;
