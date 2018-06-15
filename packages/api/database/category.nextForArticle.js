"use strict";

const { paginate } = require("./helper");
const { Category, Article, categoryAttrs } = require("./models");

const nextForArticle = async (articleId, first, after) => {
  const adjusted = {
    attributes: categoryAttrs,
    include: [
      {
        model: Article,
        as: "ArticlesForCategory",
        required: true,
        where: { id: articleId }
      }
    ]
  };

  const adjust = options => Object.assign({}, options, adjusted);

  return await paginate(Category, { first, after }, adjust);
};

module.exports = nextForArticle;
