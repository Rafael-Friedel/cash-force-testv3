'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      orderNfId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderPath: {
        type: Sequelize.STRING,
        unique: true,
      },
      orderFileName: {
        type: Sequelize.STRING,
        unique: true,
      },
      orderOriginalName: {
        type: Sequelize.STRING,
        unique: true,
      },
      emissionDate: Sequelize.STRING,
      pdfFile: Sequelize.STRING,
      emitedTo: Sequelize.STRING,
      nNf: Sequelize.STRING,
      CTE: Sequelize.STRING,
      value: Sequelize.STRING,
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cnpjs',
          key: 'id',
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      buyerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'buyers',
          key: 'id',
        },
      },
      providerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'providers',
          key: 'id',
        },
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
      deliveryReceipt: Sequelize.STRING,
      cargoPackingList: Sequelize.STRING,
      deliveryCtrc: Sequelize.STRING,
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('orders');
  },
};
