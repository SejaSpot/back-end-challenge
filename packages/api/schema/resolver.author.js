"use strict";

const database = require("../database");

// =============================================================================

const getAuthor = (root, args) => database.getAuthor(args.id);

const nextAuthors = (root, args) =>
  database.nextAuthors(args.first, args.first);

const previousAuthors = (_root, args) =>
  database.previousAuthors(args.last, args.before);

// =============================================================================

const createAuthor = (root, args) => database.createAuthor(args.input);

const setAuthor = (root, args) => database.setAuthor(args.changes);

const destroyAuthor = (root, args) => database.destroyAuthor(args.id);

// =============================================================================

const nextArticles = (root, args) =>
  database.nextArticlesForAuthor(root.id, args.first, args.after);

const previousArticles = (root, args) =>
  database.previousArticlesForAuthor(root.id, args.last, args.before);

// =============================================================================

module.exports.Query = {
  getAuthor,
  nextAuthors,
  previousAuthors
};

module.exports.Mutation = {
  createAuthor,
  setAuthor,
  destroyAuthor
};

module.exports.Author = {
  nextArticles,
  previousArticles
};

module.exports.AuthorPayload = {
  nextArticles,
  previousArticles
};
