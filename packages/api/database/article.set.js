"use strict";

const { Article, articleAttrs } = require("./models");
const { sync, project, notFound, check } = require("./helper");

const set = async changes => {
  await sync();

  // we shouldn't update the primary key / ID, neither the views -
  // this latter is updated automatically per get/retrieve
  const fields = ["title", "content", "authorId"];
  const id = changes.id;
  const attributes = articleAttrs;

  const options = { fields, attributes };

  const article = await Article.findById(id);
  const reason = notFound("Article", id);
  check(article, reason);

  const result = await article.update(changes, options);
  check(result, reason);

  return project(result, attributes);
};

module.exports = set;
