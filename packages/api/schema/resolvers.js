"use strict";

const author = require("./author.resolver");
const article = require("./article.resolver");
const category = require("./category.resolver");
const categorization = require("./categorization.resolver");

const Query = Object.assign(
  {},
  author.Query,
  article.Query,
  category.Query,
  categorization.Query
);

const Mutation = Object.assign(
  {},
  author.Mutation,
  article.Mutation,
  category.Mutation,
  categorization.Mutation
);

module.exports.Query = Query;
module.exports.Mutation = Mutation;
