"use strict";

const { failedCreation, sync, project } = require("./helper");
const { Categorization, categorizationAttrs } = require("./models");

const create = async (articleId, categoryId) => {
  await sync();

  const fields = ["articleId", "categoryId"];
  const attributes = categorizationAttrs;

  const options = { fields, attributes };

  const input = { articleId, categoryId };

  try {
    const result = await Categorization.create(input, options);
    return project(result, attributes);
  } catch (why) {
    const id = `article: ${articleId}, category: ${categoryId}`;
    throw failedCreation("Categorization", id);
  }
};

module.exports = create;
