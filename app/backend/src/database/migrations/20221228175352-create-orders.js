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
      emissionDate: {
        type: Sequelize.STRING,
      },
      pdfFile: {
        type: Sequelize.STRING,
      },
      emitedTo: {
        type: Sequelize.STRING,
      },
      nNf: {
        type: Sequelize.STRING,
      },
      CTE: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.STRING,
      },
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
          model: 'CNPJS',
          key: 'id',
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      buyerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Buyers',
          key: 'id',
        },
      },
      providerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Providers',
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
