"use strict";

const http = require("./http");

const getAuthorQuery = `
  query getAuthor ($id : ID!) {
    getAuthor (id : $id) {
      id
      name
      bio
      version
      createdAt
      updatedAt
    }
  }
`;

const createAuthorMutation = `
  mutation createAuthor ($input : AuthorInput!) {
    createAuthor (input : $input) {
      id
      name
      bio
      version
      createdAt
      updatedAt
    }
  }
`;

const destroyAuthorMutation = `
  mutation destroyAuthor ($id : ID!) {
    destroyAuthor (id : $id) {
      id
      name
      bio
      version
      createdAt
      updatedAt
    }
  }
`;

const setAuthorMutation = `
  mutation setAuthor ($changes : AuthorChanges!) {
    setAuthor (changes : $changes) {
      id
      name
      bio
      version
      createdAt
      updatedAt
    }
  }
`;

const get = id => http.query(getAuthorQuery, { id });
const create = input => http.query(createAuthorMutation, { input });
const destroy = id => http.query(destroyAuthorMutation, { id });
const set = changes => http.query(setAuthorMutation, { changes });

module.exports.get = get;
module.exports.create = create;
module.exports.set = set;
module.exports.destroy = destroy;
