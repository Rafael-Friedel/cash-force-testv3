'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      tax: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tariff: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      adValorem: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      float: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      iof: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expiresIn: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      paymentStatusSponsor: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      paymentStatusProvider: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
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
      sponsorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sponsors',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('offers');
  },
};
