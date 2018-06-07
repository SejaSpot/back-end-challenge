'use strict';

const database = require ('../database');

const getArticle = (root, args) =>
  database.getArticle (args.id);

const createArticle = (root, args) =>
  database.createArticle (args.input);

const setArticle = (root, args) =>
  database.setArticle (args.changes);

const destroyArticle = (root, args) =>
  database.destroyArticle (args.id);

module.exports.Query = { };

module.exports.Mutation = {
  getArticle, setArticle, createArticle, destroyArticle
};
