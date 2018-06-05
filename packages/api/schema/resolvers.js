'use strict';

const author = require ('./author.resolver');

const Query = Object.assign (
  { },
  author.Query
);

const Mutation = Object.assign (
  { },
  author.Mutation
);

module.exports.Query = Query;
module.exports.Mutation = Mutation;
