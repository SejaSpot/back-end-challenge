"use strict";

module.exports = {
  // queryInterface * Sequelize -> promise
  up: queryInterface => {
    return queryInterface.bulkInsert(
      "Subcategories",
      [
        { id: "Programming:concurrency", categoryId: "Programming" },
        { id: "Culture:diversity", categoryId: "Culture" },
        { id: "Culture:devops", categoryId: "Culture" },
        { id: "Project Management:deadlines", categoryId: "Project Management" }
      ],
      {}
    );
  },

  // queryInterface * Sequelize -> promise
  down: queryInterface => {
    return queryInterface.bulkDelete("Subcategories", null, {});
  }
};
