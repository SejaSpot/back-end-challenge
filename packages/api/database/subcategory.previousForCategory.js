"use strict";

const { paginate } = require("./helper");
const { Subcategory, subcategoryAttrs, Category } = require("./models");

const previousForCategory = async (categoryId, last, before) => {
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

  return await paginate(Subcategory, { last, before }, adjust);
};

module.exports = previousForCategory;
