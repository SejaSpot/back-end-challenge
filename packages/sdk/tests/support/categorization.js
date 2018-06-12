"use strict";

const http = require("./http");

const addCategoryMutation = `
  mutation addCategory ($id : ID!, $categoryId : String!) {
    addCategory (id : $id, categoryId : $categoryId) {
      id
    }
  }
`;

const removeCategoryMutation = `
  mutation removeCategory ($id : ID!, $categoryId : String!) {
    removeCategory (id : $id, categoryId : $categoryId) {
      id
    }
  }
`;

const addCategory = (id, categoryId) =>
  http.query(addCategoryMutation, { id, categoryId });

const removeCategory = (id, categoryId) =>
  http.query(removeCategoryMutation, { id, categoryId });

module.exports.addCategory = addCategory;
module.exports.removeCategory = removeCategory;
