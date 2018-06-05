'use strict';

const { makeExecutableSchema } = require ('graphql-tools');
const resolvers = require ('./resolvers');

const typeDefs = `
  type Author {
    id        : ID!
    name      : String!
    bio       : String!
    version   : Int!
    createdAt : String!
    updatedAt : String!
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

  input AuthorInput {
    name : String!
    bio  : String!
  }

  input AuthorChanges {
    id   : ID!
    name : String
    bio  : String
  }

  type Query {
    getAuthor (id : ID!) : Author!
  }

  type Mutation {
    createAuthor (input : AuthorInput!) : AuthorPayload!
    setAuthor (changes : AuthorChanges!) : AuthorPayload!
    destroyAuthor (id : ID!) : AuthorPayload!
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions :{
    requireResolversForResolveType: false
  },
});

module.exports = schema;
