'use strict';

module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true
      }
    },
    views: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        min: 0
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
  }, {
    timestamps: true,
    paranoid: false,
    charset: 'utf8',
    version: true,
    comment: "The Article / Blog Post data type."
  });

  Article.associate = (models) => {
    Article.belongsTo (models.Author, {
      foreignKey: 'authorId',
      targetKey: 'id',
      onDelete: 'CASCADE'
    });

/*
    Article.belongsToMany (models.Category, {
      through: models.Categorization,
      as: 'CategoriesForArticle',
      foreignKey: 'articleId'
    });
*/
  };

  return Article;
};
