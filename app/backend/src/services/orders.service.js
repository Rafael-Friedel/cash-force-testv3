const { order } = require('../database/models');

class OrdersService {
  static async getAllOrders() {
    const allOrders = await order.findAll();
    return allOrders;
  }
}

module.exports = OrdersService;
