"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("Categorizations", {
        articleId: {
          type: Sequelize.STRING,
          allowNull: false,
          autoIncrement: false,
          references: { model: "Articles", key: "id" },
          onDelete: "CASCADE"
        },
        categoryId: {
          type: Sequelize.STRING,
          allowNull: false,
          autoIncrement: false,
          references: { model: "Categories", key: "id" },
          onDelete: "CASCADE"
        }
      })
      .then(() =>
        queryInterface.addConstraint(
          "Categorizations",
          ["articleId", "categoryId"],
          {
            type: "unique",
            name: "categorizations_unique_constraint_on_foreign_keys"
          }
        )
      );
  },

  // queryInterface * Sequelize -> promise
  down: queryInterface => {
    return queryInterface.dropTable("Categorizations");
  }
};
