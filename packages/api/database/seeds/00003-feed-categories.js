"use strict";

module.exports = {
  // queryInterface * Sequelize -> promise
  up: queryInterface => {
    return queryInterface.bulkInsert(
      "Categories",
      [{ id: "Programming" }, { id: "Culture" }, { id: "Project Management" }],
      {}
    );
  },

  // queryInterface * Sequelize -> promise
  down: queryInterface => {
    return queryInterface.bulkDelete("Categories", null, {});
  }
};
