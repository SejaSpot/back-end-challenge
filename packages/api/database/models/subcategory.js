"use strict";

module.exports = (sequelize, DataTypes) => {
  const Subcategory = sequelize.define(
    "Subcategory",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      charset: "utf8",
      timestamps: false,
      paranoid: false,
      version: false,
      comment: "The atomic/primitive subcategory type."
    }
  );

  Subcategory.associate = models => {
    Subcategory.belongsTo(models.Category, {
      foreignKey: "categoryId",
      targetKey: "id",
      onDelete: "CASCADE"
    });
  };

  return Subcategory;
};
