"use strict";

const { Category, categoryAttrs } = require("./models");
const { sync, project, failedCreation } = require("./helper");

const create = async input => {
  await sync();

  const fields = ["id"];
  const attributes = categoryAttrs;
  const options = { fields, attributes };

  try {
    const result = await Category.create(input, options);
    return project(result, attributes);
  } catch (why) {
    throw failedCreation("Category", input.id);
  }
};

module.exports = create;
