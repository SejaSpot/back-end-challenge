"use strict";

const database = require("../database");

// =============================================================================

const nextArticles = (_root, args) =>
  database.nextArticles(args.first, args.after);

const previousArticles = (_root, args) =>
  database.previousArticles(args.last, args.before);

// =============================================================================

const getArticle = (_root, args) => database.getArticle(args.id);

const createArticle = (_root, args) => database.createArticle(args.input);

const setArticle = (_root, args) => database.setArticle(args.changes);

const destroyArticle = (_root, args) => database.destroyArticle(args.id);

// =============================================================================

const author = root => database.getAuthor(root.authorId);

const nextCategories = (root, args) =>
  database.nextCategoriesForArticle(root.id, args.first, args.after);

const previousCategories = (root, args) =>
  database.previousCategoriesForArticle(root.id, args.last, args.before);

// =============================================================================

module.exports.Query = {
  nextArticles,
  previousArticles
};

module.exports.Mutation = {
  getArticle,
  setArticle,
  createArticle,
  destroyArticle
};

module.exports.Article = {
  author,
  nextCategories,
  previousCategories
};

module.exports.ArticlePayload = {
  author,
  nextCategories,
  previousCategories
};
