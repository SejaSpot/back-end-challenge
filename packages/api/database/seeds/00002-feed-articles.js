"use strict";

module.exports = {
  // queryInterface * Sequelize -> promise
  up: queryInterface => {
    return queryInterface.bulkInsert(
      "Articles",
      [
        {
          id: "another-intro-to-monads",
          title: "Just Another Introduction to Monads on the Web",
          authorId: "amberite",
          content: "Monads are just burritos.",
          views: 12
        },
        {
          id: "cpp-templates-on-2018",
          authorId: "joe-the-big",
          title: "C++ Template Meta-Programming - The 2018 Way",
          content: "TODO",
          views: 500
        },
        {
          id: "raii-ftw",
          views: 232,
          content: "Yadda yadda yadda...",
          authorId: "joe-the-big",
          title: "Resource Acquisition is Initialization for the Winner!"
        },
        {
          id: "scrum-vs-lean",
          views: 589,
          title: "Scrum VS. Lean - Why not both?",
          content: "(wow that's quite a good article)",
          authorId: "amberite"
        }
      ],
      {}
    );
  },

  // queryInterface * Sequelize -> promise
  down: queryInterface => {
    return queryInterface.bulkDelete("Articles", null, {});
  }
};
