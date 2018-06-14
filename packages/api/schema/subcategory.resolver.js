"use strict";

const database = require("../database");

// =============================================================================

const getSubcategory = (_root, args) => database.getSubcategory(args.id);

// =============================================================================

const createSubcategory = (_root, args) =>
  database.createSubcategory(args.input);

const destroySubcategory = (_root, args) =>
  database.destroySubcategory(args.id);

// =============================================================================

module.exports.Query = {
  getSubcategory
};

module.exports.Mutation = {
  createSubcategory,
  destroySubcategory
};
