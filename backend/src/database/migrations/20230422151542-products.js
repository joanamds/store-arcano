'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        primaryKey: true,
        autoIncrement: true,
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
        type: Sequelize.JSON,
        allowNull: true,
        defaultValue: null
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};