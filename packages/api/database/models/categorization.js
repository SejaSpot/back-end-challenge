"use strict";

module.exports = sequelize => {
  const Categorization = sequelize.define(
    "Categorization",
    {},
    {
      timestamps: false,
      charset: "utf8",
      paranoid: false,
      version: false,
      comment: "The generated relation for the many-to-many Article<=>Category."
    }
  );

  Categorization.associate = () => {};

  return Categorization;
};
