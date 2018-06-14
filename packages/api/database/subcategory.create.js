"use strict";

const { Subcategory, subcategoryAttrs } = require("./models");
const { project, failedCreation, sync } = require("./helper");

const create = async body => {
  await sync();

  const data = {
    id: body.categoryId + ":" + body.id,
    categoryId: body.categoryId
  };

  const fields = ["id", "categoryId"];
  const attributes = subcategoryAttrs;
  const options = { fields, attributes };

  try {
    const result = await Subcategory.create(data, options);
    return project(result, attributes);
  } catch (why) {
    throw failedCreation("Subcategory", body.id);
  }
};

module.exports = create;
