"use strict";

const author = require("./resolver.author");
const article = require("./resolver.article");
const category = require("./resolver.category");
const categorization = require("./resolver.categorization");
const subcategory = require("./resolver.subcategory");

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

module.exports.Article = article.Article;
module.exports.ArticlePayload = article.ArticlePayload;
module.exports.Author = author.Author;
module.exports.AuthorPayload = author.AuthorPayload;
module.exports.Category = category.Category;
module.exports.CategoryPayload = category.CategoryPayload;
module.exports.Subcategory = subcategory.Subcategory;
module.exports.SubcategoryPayload = subcategory.SubcategoryPayload;
module.exports.Query = Query;
module.exports.Mutation = Mutation;
