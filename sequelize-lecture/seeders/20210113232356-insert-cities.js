'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Cities', [
      {
        city: 'New York City',
        state: 'New York'
      },
      {
        city: 'Los Angeles',
        state: 'California'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cities', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
  }
};
