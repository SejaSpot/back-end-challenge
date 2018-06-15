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
module.exports.nextAuthors = author.next;
module.exports.previousAuthors = author.previous;

module.exports.getArticle = article.get;
module.exports.setArticle = article.set;
module.exports.createArticle = article.create;
module.exports.destroyArticle = article.destroy;
module.exports.nextArticles = article.next;
module.exports.previousArticles = article.previous;
module.exports.nextArticlesForAuthor = article.nextForAuthor;
module.exports.previousArticlesForAuthor = article.previousForAuthor;
module.exports.nextArticlesForCategory = article.nextForCategory;
module.exports.previousArticlesForCategory = article.previousForCategory;

module.exports.createCategory = category.create;
module.exports.getCategory = category.get;
module.exports.destroyCategory = category.destroy;
module.exports.nextCategories = category.next;
module.exports.previousCategories = category.previous;
module.exports.nextCategoriesForArticle = category.nextForArticle;
module.exports.previousCategoriesForArticle = category.previousForArticle;

module.exports.createCategorization = categorization.create;
module.exports.destroyCategorization = categorization.destroy;

module.exports.createSubcategory = subcategory.create;
module.exports.destroySubcategory = subcategory.destroy;
module.exports.getSubcategory = subcategory.get;
module.exports.nextSubcategories = subcategory.next;
module.exports.previousSubcategories = subcategory.previous;
module.exports.nextSubcategoriesForCategory = subcategory.nextForCategory;
module.exports.previousSubcategoriesForCategory =
  subcategory.previousForCategory;
