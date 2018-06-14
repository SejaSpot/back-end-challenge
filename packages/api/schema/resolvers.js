"use strict";

const author = require("./author.resolver");
const article = require("./article.resolver");
const category = require("./category.resolver");
const categorization = require("./categorization.resolver");
const subcategory = require("./subcategory.resolver");

const Query = Object.assign(
  {},
  author.Query,
  article.Query,
  category.Query,
  categorization.Query,
  subcategory.Query
);

const Mutation = Object.assign(
  {},
  author.Mutation,
  article.Mutation,
  category.Mutation,
  categorization.Mutation,
  subcategory.Mutation
);

module.exports.Query = Query;
module.exports.Mutation = Mutation;
