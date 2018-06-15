"use strict";

const { paginate } = require("./helper");
const { Subcategory, Category, subcategoryAttrs } = require("./models");

const nextForCategory = async (categoryId, first, after) => {
  const adjusted = {
    attributes: subcategoryAttrs,
    include: [
      {
        model: Category,
        required: true,
        where: { id: categoryId }
      }
    ]
  };

  const adjust = options => Object.assign({}, options, adjusted);

  return await paginate(Subcategory, { first, after }, adjust);
};

module.exports = nextForCategory;
