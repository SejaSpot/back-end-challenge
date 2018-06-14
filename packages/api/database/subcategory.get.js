"use strict";

const { Subcategory, subcategoryAttrs } = require("./models");
const { project, check, notFound, sync } = require("./helper");

const get = async id => {
  await sync();

  const attributes = subcategoryAttrs;
  const result = await Subcategory.findById(id);
  const reason = notFound("Subcategory", id);
  check(result, reason);

  return project(result, attributes);
};

module.exports = get;
