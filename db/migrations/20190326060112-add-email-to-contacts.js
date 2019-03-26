'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Contacts',
      'addEmail',
      Sequelize.STRING
  )},

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Contacts', 'addEmail')
  }
};
