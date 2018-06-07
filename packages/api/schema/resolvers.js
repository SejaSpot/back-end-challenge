'use strict';

const author = require ('./author.resolver');
const article = require ('./article.resolver');

const Query = Object.assign (
  { },
  author.Query,
  article.Query
);

const Mutation = Object.assign (
  { },
  author.Mutation,
  article.Mutation
);

module.exports.Query = Query;
module.exports.Mutation = Mutation;
