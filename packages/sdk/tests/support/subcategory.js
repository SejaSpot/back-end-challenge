"use strict";

const http = require("./http");

const getSubcategoryQuery = `
  query getSubcategory ($id : ID!) {
    getSubcategory (id : $id) {
      id
      categoryId
    }
  }
`;

const destroySubcategoryMutation = `
  mutation destroySubcategory ($id : ID!) {
    destroySubcategory (id : $id) {
      id
      categoryId
    }
  }
`;

const createSubcategoryMutation = `
  mutation createSubcategory ($input : SubcategoryInput!) {
    createSubcategory (input : $input) {
      id
      categoryId
    }
  }
`;

const get = id => http.query(getSubcategoryQuery, { id });
const create = input => http.query(createSubcategoryMutation, { input });
const destroy = id => http.query(destroySubcategoryMutation, { id });

module.exports.get = get;
module.exports.create = create;
module.exports.destroy = destroy;
