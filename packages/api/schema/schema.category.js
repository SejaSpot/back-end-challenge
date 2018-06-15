"use strict";

const typeDefs = `
type CategoryConnection implements Connection {
  pageInfo   : PageInfo!
  totalCount : Int!

  edges : [CategoryEdge]!
  nodes : [Category]!
}

type CategoryEdge implements Edge {
  cursor : String!
  node   : Category!
}

type Category implements Node {
  id : ID!

  nextSubcategories (first : Int!, after : String) :
    SubcategoryConnection! @cost(complexity: 3, multipliers: ["first"])

  previousSubcategories (last : Int!, before : String) :
    SubcategoryConnection! @cost(complexity: 3, multipliers: ["last"])

  nextArticles (first : Int!, after : String) :
    ArticleConnection! @cost(complexity: 3, multipliers: ["first"])

  previousArticles (last : Int!, before : String) :
    ArticleConnection! @cost(complexity: 3, multipliers: ["last"])
}

type CategoryPayload implements Node {
  id : ID!

  nextSubcategories (first : Int!, after : String) :
    SubcategoryConnection! @cost(complexity: 3, multipliers: ["first"])

  previousSubcategories (last : Int!, before : String) :
    SubcategoryConnection! @cost(complexity: 3, multipliers: ["last"])

  nextArticles (first : Int!, after : String) :
    ArticleConnection! @cost(complexity: 3, multipliers: ["first"])

  previousArticles (last : Int!, before : String) :
    ArticleConnection! @cost(complexity: 3, multipliers: ["last"])
}

input CategoryInput {
  id : ID!
}
`;

module.exports = typeDefs;
