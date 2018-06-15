"use strict";

const { paginate } = require("./helper");
const { Article, Category, articleAttrs } = require("./models");

const previousForCategory = async (categoryId, last, before) => {
  const adjusted = {
    attributes: articleAttrs,
    include: [
      {
        model: Category,
        as: "CategoriesForArticle",
        required: true,
        where: { id: categoryId }
      }
    ]
  };

  const adjust = options => Object.assign({}, options, adjusted);

  return await paginate(Article, { last, before }, adjust);
};

module.exports = previousForCategory;
