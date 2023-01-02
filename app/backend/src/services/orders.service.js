const { order, CNPJ, user, buyer, provider } = require('../database/models');

class OrdersService {
  static async getAllOrders() {
    const allOrders = await order.findAll({
      include: [
        {
          model: user,
          attributes: ['name'],
        },
        {
          model: buyer,
          attributes: ['name'],
        },
        {
          model: CNPJ,
          attributes: ['cnpj'],
        },
        {
          model: provider,
          attributes: ['name'],
        },
      ],
      raw: true,
      nest: true,
    });
    return allOrders;
  }
}

module.exports = OrdersService;
