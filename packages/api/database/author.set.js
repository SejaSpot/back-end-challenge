"use strict";

const { authorAttrs, Author } = require("./models");
const { sync, check, project, notFound } = require("./helper");

const set = async changes => {
  await sync();

  // we shouldn't change the primary key to not break caching
  // on the client-side, e.g, with Relay
  const fields = ["name", "bio"];
  const attributes = authorAttrs;
  const options = { fields, attributes };

  const author = await Author.findById(changes.id);
  const reason = notFound("Author", changes.id);
  check(author, reason);

  delete changes.id;
  const result = await author.update(changes, options);
  check(result, reason);

  return project(result, attributes);
};

module.exports = set;
