"use strict";

module.exports = {
  // queryInterface * Sequelize -> promise
  up: queryInterface => {
    return queryInterface.bulkInsert(
      "Categorizations",
      [
        { articleId: "another-intro-to-monads", categoryId: "Programming" },
        { articleId: "cpp-templates-on-2018", categoryId: "Programming" },
        { articleId: "scrum-vs-lean", categoryId: "Culture" }
      ],
      {}
    );
  },

  // queryInterface * Sequelize -> promise
  down: queryInterface => {
    return queryInterface.bulkDelete("Categorizations", null, {});
  }
};
