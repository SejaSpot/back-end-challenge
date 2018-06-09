"use strict";

module.exports = {
  // queryInterface * Sequelize -> promise
  up: queryInterface => {
    return queryInterface.bulkInsert(
      "Authors",
      [
        {
          id: "mike-the-purple",
          name: "John Mike Hanson",
          bio: "Passionate Front-end Developer, Game Development enthusiast.",
          version: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "amberite",
          name: "Emily Clouds",
          bio: "LGBT activist, gender-fluid ace girl, devotee of FP.",
          version: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "joe-the-big",
          name: "Joe Street",
          bio: "An old guy who can still beat some bugs around.",
          version: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  // queryInterface * Sequelize -> promise
  down: queryInterface => {
    return queryInterface.bulkDelete("Authors", null, {});
  }
};
