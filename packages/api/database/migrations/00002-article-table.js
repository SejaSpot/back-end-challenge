"use strict";

module.exports = {
  // queryInterface * Sequelize -> promise
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Articles", {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      views: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      authorId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: { model: "Authors", key: "id" },
        onDelete: "CASCADE"
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
    return queryInterface.dropTable("Articles");
  }
};
