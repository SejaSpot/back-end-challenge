"use strict";

const { Subcategory, subcategoryAttrs } = require("./models");
const { project, check, notFound, sync } = require("./helper");

const destroy = async id => {
  await sync();

  const attributes = subcategoryAttrs;
  const subcategory = await Subcategory.findById(id);
  const reason = notFound("Subcategory", id);
  check(subcategory, reason);

  await subcategory.destroy();
  return project(subcategory, attributes);
};

module.exports = destroy;
