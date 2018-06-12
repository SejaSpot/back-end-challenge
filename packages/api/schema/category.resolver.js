"use strict";

const database = require("../database");

const getCategory = (root, args) => database.getCategory(args.id);

const destroyCategory = (root, args) => database.destroyCategory(args.id);

const createCategory = (root, args) => database.createCategory(args.input);

module.exports.Query = {
  getCategory
};

module.exports.Mutation = {
  destroyCategory,
  createCategory
};
