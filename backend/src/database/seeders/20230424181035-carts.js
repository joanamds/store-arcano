'use strict';

const fetchAPI = require("../api/fakeStore");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const carts = await fetchAPI('carts');
    await queryInterface.bulkInsert('carts', carts);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};