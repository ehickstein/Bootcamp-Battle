'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      charname: "John Doe",
      class: "Human",
      stat1: 5,
      stat2: 5,
      stat3: 5,
      createdAt: "2018-11-01 12:38:00",
      updatedAt: "2018-11-01 12:38:00"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
