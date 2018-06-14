"use strict";

const Sequelize = require("sequelize");
const config = require("../config");
const author = require("./author");
const article = require("./article");
const category = require("./category");
const subcategory = require("./subcategory");
const categorization = require("./categorization");
const cls = require("continuation-local-storage");

const namespace = cls.createNamespace("spot-challenge-sequelize-namespace");

Sequelize.useCLS(namespace);

const connect = () => {
  const DATABASE_URL = process.env.DATABASE_URL;

  if (DATABASE_URL === null || DATABASE_URL === undefined) {
    const NODE_ENV = process.env.NODE_ENV || "development";

    return new Sequelize(
      config[NODE_ENV].database,
      config[NODE_ENV].username,
      config[NODE_ENV].password,
      config[NODE_ENV]
    );
  } else {
    return new Sequelize(DATABASE_URL);
  }
};

const sequelize = connect();

const transaction = procedure => sequelize.transaction(procedure);

const models = {
  Author: author(sequelize, Sequelize),
  Article: article(sequelize, Sequelize),
  Category: category(sequelize, Sequelize),
  Categorization: categorization(sequelize, Sequelize),
  Subcategory: subcategory(sequelize, Sequelize)
};

models.Author.associate(models);
models.Article.associate(models);
models.Category.associate(models);
models.Categorization.associate(models);
models.Subcategory.associate(models);

module.exports = models;
module.exports.connection = sequelize;
module.exports.connect = connect;
module.exports.namespace = namespace;
module.exports.transaction = transaction;

module.exports.authorAttrs = [
  "id",
  "name",
  "bio",
  "createdAt",
  "updatedAt",
  "version"
];

module.exports.articleAttrs = [
  "id",
  "authorId",
  "title",
  "content",
  "views",
  "createdAt",
  "updatedAt",
  "version"
];

module.exports.categoryAttrs = ["id"];
module.exports.categorizationAttrs = ["articleId", "categoryId"];
module.exports.subcategoryAttrs = ["id", "categoryId"];
