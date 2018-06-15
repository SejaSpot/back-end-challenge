"use strict";

const database = require("../database");

// =============================================================================

const getSubcategory = (_root, args) => database.getSubcategory(args.id);

const nextSubcategories = (_root, args) =>
  database.nextSubcategories(args.first, args.after);

const previousSubcategories = (_root, args) =>
  database.previousSubcategories(args.last, args.before);

// =============================================================================

const createSubcategory = (_root, args) =>
  database.createSubcategory(args.input);

const destroySubcategory = (_root, args) =>
  database.destroySubcategory(args.id);

// =============================================================================

const category = root => database.getCategory(root.categoryId);

// =============================================================================

module.exports.Query = {
  getSubcategory,
  nextSubcategories,
  previousSubcategories
};

module.exports.Mutation = {
  createSubcategory,
  destroySubcategory
};

module.exports.Subcategory = {
  category
};

module.exports.SubcategoryPayload = {
  category
};
