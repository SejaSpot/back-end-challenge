'use strict';

const database = require ('../database');

const getAuthor = (root, args) =>
  database.getAuthor (args.id);

const createAuthor = (root, args) =>
  database.createAuthor (args.input);

const setAuthor = (root, args) =>
  database.setAuthor (args.changes);

const destroyAuthor = (root, args) =>
  database.destroyAuthor (args.id);

module.exports.Query = {
  getAuthor,
};

module.exports.Mutation = {
  createAuthor,
  setAuthor,
  destroyAuthor
};
