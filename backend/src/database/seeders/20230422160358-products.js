'use strict';

const fetchAPI = require("../api/fakeStore");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = await fetchAPI('products');
    const productsWithJsonRating = products.map(product => {
      return {
        ...product,
        rating: JSON.stringify(product.rating)
      };
    });
    await queryInterface.bulkInsert('products', productsWithJsonRating);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
