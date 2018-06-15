"use strict";

const typeDefs = `
type SubcategoryConnection implements Connection {
  pageInfo   : PageInfo!
  totalCount : Int!

  edges : [SubcategoryEdge]!
  nodes : [Subcategory]!
}

type SubcategoryEdge implements Edge {
  cursor : String!
  node   : Subcategory!
}

type Subcategory implements Node {
  id : ID!
  categoryId : String!
  category : Category!
}

type SubcategoryPayload implements Node {
  id : ID!
  categoryId : String!
  category : Category!
}

input SubcategoryInput {
  id : ID!
  categoryId : String!
}
`;

module.exports = typeDefs;
