"use strict";

const http = require("./http");

const createArticleMutation = `
  mutation createArticle ($input : ArticleInput!) {
    createArticle (input : $input) {
      id
      authorId
      author {
        id
        name
        bio
      }
      views
      title
      content
      createdAt
      updatedAt
      version
    }
  }
`;

const getArticleMutation = `
  mutation getArticle ($id : ID!) {
    getArticle (id : $id) {
      id
      authorId
      author {
        id
        name
        bio
      }
      views
      title
      content
      createdAt
      updatedAt
      version
    }
  }
`;

const destroyArticleMutation = `
  mutation destroyArticle ($id : ID!) {
    destroyArticle (id : $id) {
      id
      authorId
      author {
        id
        name
        bio
      }
      views
      title
      content
      createdAt
      updatedAt
      version
    }
  }
`;

const setArticleMutation = `
  mutation setArticle ($changes : ArticleChanges!) {
    setArticle (changes : $changes) {
      id
      createdAt
      content
      title
      views
      authorId
      author {
        id
        name
        bio
      }
      version
      updatedAt
    }
  }
`;

const destroy = id => http.query(destroyArticleMutation, { id });
const get = id => http.query(getArticleMutation, { id });
const create = input => http.query(createArticleMutation, { input });
const set = changes => http.query(setArticleMutation, { changes });

module.exports = { destroy, get, set, create };
