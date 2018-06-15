"use strict";

const database = require("../database");

// =============================================================================

const getCategory = (_root, args) => database.getCategory(args.id);

const nextCategories = (_root, args) =>
  database.nextCategories(args.first, args.after);

const previousCategories = (_root, args) =>
  database.previousCategories(args.last, args.before);

// =============================================================================

const destroyCategory = (root, args) => database.destroyCategory(args.id);

const createCategory = (root, args) => database.createCategory(args.input);

// =============================================================================

const nextSubcategories = (root, args) =>
  database.nextSubcategoriesForCategory(root.id, args.first, args.after);

const previousSubcategories = (root, args) =>
  database.previousSubcategoriesForCategory(root.id, args.last, args.before);

const nextArticles = (root, args) =>
  database.nextArticlesForCategory(root.id, args.first, args.after);

const previousArticles = (root, args) =>
  database.previousArticlesForCategory(root.id, args.last, args.before);

// =============================================================================

module.exports.Query = {
  getCategory,
  nextCategories,
  previousCategories
};

module.exports.Mutation = {
  destroyCategory,
  createCategory
};

module.exports.Category = {
  nextSubcategories,
  previousSubcategories,
  nextArticles,
  previousArticles
};

module.exports.CategoryPayload = {
  nextSubcategories,
  previousSubcategories,
  nextArticles,
  previousArticles
};
