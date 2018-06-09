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
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      authorId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: { model: "Authors", key: "id" },
        onDelete: "CASCADE"
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
    return queryInterface.dropTable("Articles");
  }
};
