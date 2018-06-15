"use strict";

const typeDefs = `
"""
Interface which identifies all the objects within this GraphQL schema.
"""
interface Node {
  """
  We implement ID as a CUID on most times, but there are exceptions!
  """
  id : ID!
}

"""
This interface must be extended with _edges_ and _nodes_ on implementation.
"""
interface Connection {
  pageInfo   : PageInfo!
  totalCount : Int!
}

"""
This interface must be extended with _node_ on implementation.
"""
interface Edge {
  cursor : String!
}

"""
Object which gives additional information/metadata for current paging.
"""
type PageInfo {
  hasNextPage     : Boolean!
  hasPreviousPage : Boolean!

  """
  The first cursor on this page. Used to paginate backwards.
  """
  startCursor : String

  """
  The last cursor on this page. Used to paginate forwards.
  """
  endCursor : String
}
`;

module.exports = typeDefs;
