"use strict";

module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "Author",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      bio: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      timestamps: true,
      charset: "utf8",
      paranoid: false,
      version: true,
      comment: "The data type representation for Blog Authors."
    }
  );

  Author.associate = () => {};

  return Author;
};
