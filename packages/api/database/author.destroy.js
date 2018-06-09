"use strict";

const { Author, authorAttrs } = require("./models");
const { sync, check, project, notFound } = require("./helper");

const destroy = async id => {
  await sync();

  const attributes = authorAttrs;
  const author = await Author.findById(id);
  const reason = notFound("Author", id);
  check(author, reason);

  await author.destroy();

  return project(author, attributes);
};

module.exports = destroy;
