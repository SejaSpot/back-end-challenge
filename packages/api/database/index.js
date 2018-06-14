"use strict";

const author = require("./author");
const article = require("./article");
const category = require("./category");
const categorization = require("./categorization");
const subcategory = require("./subcategory");

module.exports.getAuthor = author.get;
module.exports.setAuthor = author.set;
module.exports.createAuthor = author.create;
module.exports.destroyAuthor = author.destroy;

module.exports.getArticle = article.get;
module.exports.setArticle = article.set;
module.exports.createArticle = article.create;
module.exports.destroyArticle = article.destroy;

module.exports.createCategory = category.create;
module.exports.getCategory = category.get;
module.exports.destroyCategory = category.destroy;

module.exports.createCategorization = categorization.create;
module.exports.destroyCategorization = categorization.destroy;

module.exports.createSubcategory = subcategory.create;
module.exports.destroySubcategory = subcategory.destroy;
module.exports.getSubcategory = subcategory.get;
