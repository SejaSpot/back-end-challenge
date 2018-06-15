"use strict";

const { paginate } = require("./helper");
const { Category, categoryAttrs, Article } = require("./models");

const previousForArticle = async (articleId, last, before) => {
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

  paginate(Category, { last, before }, adjust);
};

module.exports = previousForArticle;
