"use strict";

const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");
const schemaAuthor = require("./schema.author");
const schemaArticle = require("./schema.article");
const schemaCategory = require("./schema.category");
const schemaSubcategory = require("./schema.subcategory");
const schemaRelay = require("./schema.relay");

const typeDefs = `
  ${schemaArticle}
  ${schemaAuthor}
  ${schemaCategory}
  ${schemaSubcategory}
  ${schemaRelay}

  type Query {
    getAuthor (id : ID!) : Author!
    getCategory (id: ID!) : Category!
    getSubcategory (id : ID!) : Subcategory!

    nextAuthors (first : Int!, after : String) :
      AuthorConnection! @cost(complexity: 3, multipliers: ["first"])
    previousAuthors (last : Int!, before : String) :
      AuthorConnection! @cost(complexity: 3, multipliers: ["last"])

    nextArticles (first : Int!, after : String) :
      ArticleConnection! @cost(complexity: 3, multipliers: ["first"])
    previousArticles (last : Int!, before : String) :
      ArticleConnection! @cost(complexity: 3, multipliers: ["last"])

    nextCategories (first : Int!, after : String) :
      CategoryConnection! @cost(complexity: 3, multipliers: ["first"])
    previousCategories (last : Int!, before : String) :
      CategoryConnection! @cost(complexity: 3, multipliers: ["last"])

    nextSubcategories (first : Int!, after : String) :
      SubcategoryConnection! @cost(complexity: 3, multipliers: ["first"])
    previousSubcategories (last : Int!, before : String) :
      SubcategoryConnection! @cost(complexity: 3, multipliers: ["last"])
  }

  type Mutation {
    createAuthor (input : AuthorInput!) : AuthorPayload! @cost(complexity: 2)

    setAuthor (changes : AuthorChanges!) : AuthorPayload! @cost(complexity: 2)
    destroyAuthor (id : ID!) : AuthorPayload! @cost(complexity: 2)

    createArticle (input : ArticleInput!) : ArticlePayload! @cost(complexity: 2)
    getArticle (id : ID!) : Article! @cost(complexity: 2)
    setArticle (changes : ArticleChanges!) :
      ArticlePayload! @cost(complexity: 2)
    destroyArticle (id : ID!) : ArticlePayload! @cost(complexity: 2)

    addCategory (id : ID!, categoryId : String) :
      ArticlePayload! @cost(complexity: 2)
    removeCategory (id : ID!, categoryId : String) :
      ArticlePayload! @cost(complexity: 2)

    createCategory (input : CategoryInput!) :
      CategoryPayload! @cost(complexity: 2)
    destroyCategory (id : ID!) : CategoryPayload! @cost(complexity: 2)

    createSubcategory (input : SubcategoryInput!) :
      SubcategoryPayload! @cost(complexity: 2)
    destroySubcategory (id : ID!) : SubcategoryPayload! @cost(complexity: 2)
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
