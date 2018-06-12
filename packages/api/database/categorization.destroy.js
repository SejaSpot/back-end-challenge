"use strict";

const { notFound, sync, check } = require("./helper");
const { Categorization } = require("./models");

const destroy = async (articleId, categoryId) => {
  await sync();

  const options = {
    where: { articleId, categoryId }
  };

  const result = await Categorization.findOne(options);
  const id = `article: ${articleId}, category: ${categoryId}`;
  const reason = notFound("Categorization", id);
  check(result, reason);

  await result.destroy();

  return result;
};

module.exports = destroy;
