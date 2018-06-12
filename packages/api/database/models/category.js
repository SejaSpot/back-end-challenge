"use strict";

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
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
      timestamps: false,
      paranoid: false,
      charset: "utf8",
      version: false,
      comment: "The atomic/primitive category type."
    }
  );

  Category.associate = models => {
    Category.belongsToMany(models.Article, {
      through: models.Categorization,
      as: "ArticlesForCategory",
      foreignKey: "categoryId"
    });
  };

  return Category;
};
