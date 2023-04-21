'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'title'
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'price',
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'category'
      },
      rating: {
        type: Sequelize.JSON
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};

