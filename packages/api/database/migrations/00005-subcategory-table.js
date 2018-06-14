"use strict";

module.exports = {
  // queryInterface * Sequelize -> promise
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Subcategories", {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: { model: "Categories", key: "id" },
        onDelete: "CASCADE"
      }
    });
  },

  // queryInterface * Sequelize -> promise
  down: queryInterface => {
    return queryInterface.dropTable("Subcategories");
  }
};
