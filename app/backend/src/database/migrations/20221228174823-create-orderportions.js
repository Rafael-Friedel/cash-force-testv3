'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orderportions', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nDup: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dVenc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cDup: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      availableToMarket: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('orderportions');
  },
};
