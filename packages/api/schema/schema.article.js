"use strict";

const typeDefs = `
type ArticleConnection implements Connection {
  pageInfo   : PageInfo!
  totalCount : Int!

  edges : [ArticleEdge]!
  nodes : [Article]!
}

type ArticleEdge implements Edge {
  cursor : String!
  node   : Article!
}

type Article implements Node {
  id        : ID!
  authorId  : String!
  author    : Author!
  title     : String!
  content   : String!
  views     : Int!
  createdAt : String!
  updatedAt : String!
  version   : Int!

  nextCategories (first : Int!, after : String) :
    CategoryConnection! @cost(complexity: 3, multipliers: ["first"])

  previousCategories (last : Int!, before : String) :
    CategoryConnection! @cost(complexity: 3, multipliers: ["last"])
}

type ArticlePayload implements Node {
  id        : ID!
  authorId  : String!
  author    : Author!
  title     : String!
  content   : String!
  views     : Int!
  createdAt : String!
  updatedAt : String!
  version   : String!

  nextCategories (first : Int!, after : String) :
    CategoryConnection! @cost(complexity: 3, multipliers: ["first"])

  previousCategories (last : Int!, before : String) :
    CategoryConnection! @cost(complexity: 3, multipliers: ["last"])
}

input ArticleInput {
  authorId : String!
  content  : String!
  title    : String!
}

input ArticleChanges {
  id       : ID!
  title    : String
  content  : String
  authorId : String
}
`;

module.exports = typeDefs;
