'use strict';

const fetchAPI = require("../api/fakeStore");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const carts = await fetchAPI('carts');
    const tableCarts = carts.map(cart => {
      return {
        id: cart.id,
        userId: cart.userId,
        date: cart.date,
        __v: cart.__v
      };
    });
    const tableCartItems = carts.flatMap(cart => {
      return cart.products.map(product => {
        return {
          cartId: cart.id,
          productId: product.productId,
          quantity: product.quantity
        };
      });
    });
    await queryInterface.bulkInsert('carts', tableCarts);
    await queryInterface.bulkInsert('cart_items', tableCartItems);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cart_items', null, {});
    await queryInterface.bulkDelete('carts', null, {});
  }
};