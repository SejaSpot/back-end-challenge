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

  type Category {
    id : ID!
  }

  type Subcategory {
    id : ID!
    categoryId : String!
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

  type CategoryPayload {
    id : ID!
  }

  type SubcategoryPayload {
    id : ID!
    categoryId : String!
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

  input CategoryInput {
    id : ID!
  }

  input SubcategoryInput {
    id : ID!
    categoryId : String!
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
    getCategory (id: ID!) : Category!
    getSubcategory (id : ID!) : Subcategory!
  }

  type Mutation {
    createAuthor (input : AuthorInput!) : AuthorPayload!
    setAuthor (changes : AuthorChanges!) : AuthorPayload!
    destroyAuthor (id : ID!) : AuthorPayload!

    createArticle (input : ArticleInput!) : ArticlePayload!
    getArticle (id : ID!) : Article!
    setArticle (changes : ArticleChanges!) : ArticlePayload!
    destroyArticle (id : ID!) : ArticlePayload!

    addCategory (id : ID!, categoryId : String) : ArticlePayload!
    removeCategory (id : ID!, categoryId : String) : ArticlePayload!

    createCategory (input : CategoryInput!) : CategoryPayload!
    destroyCategory (id : ID!) : CategoryPayload!

    createSubcategory (input : SubcategoryInput!) : SubcategoryPayload!
    destroySubcategory (id : ID!) : SubcategoryPayload!
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
