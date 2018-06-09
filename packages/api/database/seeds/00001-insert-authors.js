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
          bio: "Passionate Front-end Developer, Game Development enthusiast."
        },
        {
          id: "amberite",
          name: "Emily Clouds",
          bio: "LGBT activist, gender-fluid ace girl, devotee of FP."
        },
        {
          id: "joe-the-big",
          name: "Joe Street",
          bio: "An old guy who can still beat some bugs around."
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
