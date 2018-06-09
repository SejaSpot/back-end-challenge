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
        allowNull: true,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  // queryInterface * Sequelize -> promise
  down: queryInterface => {
    return queryInterface.dropTable("Authors");
  }
};
