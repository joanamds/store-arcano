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
      description: {
        type: Sequelize.STRING(900),
        allowNull: false,
        field: 'description'
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'category'
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'image',
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