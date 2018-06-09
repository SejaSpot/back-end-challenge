"use strict";

module.exports = {
  // queryInterface * Sequelize -> promise
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Authors", {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      bio: {
        allowNull: false,
        type: Sequelize.STRING
      },
      version: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  // queryInterface * Sequelize -> promise
  down: queryInterface => {
    return queryInterface.dropTable("Authors");
  }
};
