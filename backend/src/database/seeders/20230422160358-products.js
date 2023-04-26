'use strict';

const fetchAPI = require("../api/fakeStore");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = await fetchAPI('products');
    await queryInterface.bulkInsert('Products', products);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
