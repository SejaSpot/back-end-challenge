"use strict";

const { Author, authorAttrs } = require("./models");
const { sync, check, project, notFound } = require("./helper");

const get = async id => {
  await sync();

  const attributes = authorAttrs;

  const result = await Author.findById(id);
  const reason = notFound("Author", id);
  check(result, reason);

  return project(result, attributes);
};

module.exports = get;
