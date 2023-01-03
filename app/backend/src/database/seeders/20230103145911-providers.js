'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    return queryInterface.bulkInsert(
      'providers',
      [
        {
          id: 1,
          name: 'CEDENTE 002',
          tradingName: 'CEDENTE 002 LTDA',
          cashforceTax: null,
          responsibleName: null,
          responsibleEmail: null,
          responsiblePosition: null,
          responsiblePhone: null,
          responsibleMobile: null,
          website: null,
          postalCode: null,
          address: null,
          number: null,
          complement: null,
          neighborhood: null,
          city: null,
          state: null,
          bank: null,
          bankAgency: null,
          account: null,
          documents: null,
          phoneNumber: null,
          situation: null,
          situationDate: null,
          createdAt: '2020-10-29 21:22:21',
          updatedAt: '2020-10-29 21:22:22',
          cnpjId: 2,
          email: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('providers', null, {});
  },
};
