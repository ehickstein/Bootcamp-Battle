'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [{
      gameID: 1,
      score: 100,
      createdAt: "2018-11-01 12:38:00",
      updatedAt: "2018-11-01 12:38:00"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {});
  }
};
