"use strict";

const typeDefs = `
type AuthorConnection implements Connection {
  pageInfo   : PageInfo!
  totalCount : Int!

  edges : [AuthorEdge]!
  nodes : [Author]!
}

type AuthorEdge implements Edge {
  cursor : String!
  node   : Author!
}

type Author implements Node {
  id        : ID!
  name      : String!
  bio       : String!
  version   : Int!
  createdAt : String!
  updatedAt : String!

  nextArticles (first : Int!, after : String) :
    ArticleConnection! @cost(complexity: 3, multipliers: ["first"])
  previousArticles (last : Int!, before : String) :
    ArticleConnection! @cost(complexity: 3, multipliers: ["last"])
}

type AuthorPayload implements Node {
  id        : ID!
  name      : String!
  bio       : String!
  version   : Int!
  createdAt : String!
  updatedAt : String!

  nextArticles (first : Int!, after : String) :
    ArticleConnection! @cost(complexity: 3, multipliers: ["first"])
  previousArticles (last : Int!, before : String) :
    ArticleConnection! @cost(complexity: 3, multipliers: ["last"])
}

input AuthorInput {
  name : String!
  bio  : String!
}

input AuthorChanges {
  id   : ID!
  name : String
  bio  : String
}
`;

module.exports = typeDefs;
