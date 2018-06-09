"use strict";

const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
  type Author {
    id        : ID!
    name      : String!
    bio       : String!
    version   : Int!
    createdAt : String!
    updatedAt : String!
  }

  type Article {
    id        : ID!
    authorId  : String!
    title     : String!
    content   : String!
    views     : Int!
    createdAt : String!
    updatedAt : String!
    version   : Int!
  }

  type AuthorPayload {
    id        : ID!
    name      : String!
    bio       : String!
    version   : Int!
    createdAt : String!
    updatedAt : String!
    root      : Query!
  }

  type ArticlePayload {
    id        : ID!
    authorId  : String!
    title     : String!
    content   : String!
    views     : Int!
    createdAt : String!
    updatedAt : String!
    version   : String!
    root      : Query!
  }

  input AuthorInput {
    name : String!
    bio  : String!
  }

  input ArticleInput {
    authorId : String!
    content  : String!
    title    : String!
  }

  input AuthorChanges {
    id   : ID!
    name : String
    bio  : String
  }

  input ArticleChanges {
    id       : ID!
    title    : String
    content  : String
    authorId : String
  }

  type Query {
    getAuthor (id : ID!) : Author!
  }

  type Mutation {
    createAuthor (input : AuthorInput!) : AuthorPayload!
    setAuthor (changes : AuthorChanges!) : AuthorPayload!
    destroyAuthor (id : ID!) : AuthorPayload!

    createArticle (input : ArticleInput!) : ArticlePayload!
    getArticle (id : ID!) : Article!
    setArticle (changes : ArticleChanges!) : ArticlePayload!
    destroyArticle (id : ID!) : ArticlePayload!
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});

module.exports = schema;
