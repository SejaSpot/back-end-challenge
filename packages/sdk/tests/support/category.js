"use strict";

const http = require("./http");

const getCategoryQuery = `
  query getCategory ($id : ID!) {
    getCategory (id : $id) {
      id
    }
  }
`;

const createCategoryMutation = `
  mutation createCategory ($input : CategoryInput!) {
    createCategory (input : $input) {
      id
    }
  }
`;

const destroyCategoryMutation = `
  mutation destroyCategory ($id : ID!) {
    destroyCategory (id : $id) {
      id
    }
  }
`;

const get = id => http.query(getCategoryQuery, { id });
const create = input => http.query(createCategoryMutation, { input });
const destroy = id => http.query(destroyCategoryMutation, { id });

module.exports.get = get;
module.exports.create = create;
module.exports.destroy = destroy;
