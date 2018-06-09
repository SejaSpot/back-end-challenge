"use strict";

const author = require("./author");
const article = require("./article");

module.exports.getAuthor = author.get;
module.exports.setAuthor = author.set;
module.exports.createAuthor = author.create;
module.exports.destroyAuthor = author.destroy;

module.exports.getArticle = article.get;
module.exports.setArticle = article.set;
module.exports.createArticle = article.create;
module.exports.destroyArticle = article.destroy;
