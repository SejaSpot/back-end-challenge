"use strict";

const { Article, articleAttrs } = require("./models");
const { sync, project, notFound, check } = require("./helper");

const get = async id => {
  await sync();

  const attributes = articleAttrs;

  const result = await Article.findById(id);
  const reason = notFound("Article", id);
  check(result, reason);

  const updated = await result.increment("views", { by: 1 });
  check(updated, reason);

  return project(updated, attributes);
};

module.exports = get;
