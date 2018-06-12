"use strict";

const { Category, categoryAttrs } = require("./models");
const { sync, notFound, check, project } = require("./helper");

const get = async id => {
  await sync();

  const attributes = categoryAttrs;

  const result = await Category.findById(id);
  const reason = notFound("Category", id);
  check(result, reason);

  return project(result, attributes);
};

module.exports = get;
