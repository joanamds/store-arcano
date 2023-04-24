'use strict';

const fetchAPI = require("../api/fakeStore");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await fetchAPI('users');
    const usersWithJsonGeo = users.map(user => {
      return {
        ...user,
        name: JSON.stringify(user.name),
        address: JSON.stringify(user.address)
      };
    });
    await queryInterface.bulkInsert('users', usersWithJsonGeo);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};