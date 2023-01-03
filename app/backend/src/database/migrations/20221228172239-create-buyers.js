'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('buyers', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tradingName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cashforceTax: Sequelize.STRING,
      responsibleName: Sequelize.STRING,
      responsibleEmail: Sequelize.STRING,
      responsiblePosition: Sequelize.STRING,
      responsiblePhone: Sequelize.STRING,
      responsibleMobile: Sequelize.STRING,
      website: Sequelize.STRING,
      postalCode: Sequelize.STRING,
      address: Sequelize.STRING,
      number: Sequelize.STRING,
      complement: Sequelize.STRING,
      neighborhood: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      phoneNumber: Sequelize.STRING,
      situation: Sequelize.STRING,
      situationDate: Sequelize.STRING,
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
      confirm: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1,
      },
      email: {
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('buyers');
  },
};
