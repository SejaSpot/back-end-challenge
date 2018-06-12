"use strict";

const { Category, categoryAttrs } = require("./models");
const { sync, check, project, notFound } = require("./helper");

const destroy = async id => {
  await sync();

  const attributes = categoryAttrs;
  const category = await Category.findById(id);
  const reason = notFound("Category", id);
  check(category, reason);

  await category.destroy();

  return project(category, attributes);
};

module.exports = destroy;
