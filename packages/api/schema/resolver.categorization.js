"use strict";

const database = require("../database");

// =============================================================================

const addCategory = async (root, args) => {
  await database.createCategorization(args.id, args.categoryId);

  return await database.getArticle(args.id);
};

const removeCategory = async (root, args) => {
  await database.destroyCategorization(args.id, args.categoryId);

  return await database.getArticle(args.id);
};

// =============================================================================

module.exports.Query = {};

module.exports.Mutation = {
  addCategory,
  removeCategory
};
