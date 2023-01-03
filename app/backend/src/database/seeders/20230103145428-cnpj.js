'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    return queryInterface.bulkInsert(
      'cnpjs',
      [
        {
          id: 1,
          cnpj: '00000000000001',
          companyType: '2',
          createdAt: '2020-10-29 21:20:33',
          updatedAt: '2020-10-29 21:20:33',
        },
        {
          id: 2,
          cnpj: '00000000000002',
          companyType: '1',
          createdAt: '2020-10-29 21:20:33',
          updatedAt: '2020-10-29 21:20:33',
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('cnpjs', null, {});
  },
};
