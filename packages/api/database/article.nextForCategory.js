"use strict";

const { paginate } = require("./helper");
const { Article, Category, articleAttrs } = require("./models");

const nextForCategory = async (categoryId, first, after) => {
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

  return await paginate(Article, { first, after }, adjust);
};

module.exports = nextForCategory;
