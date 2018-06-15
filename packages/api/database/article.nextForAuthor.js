"use strict";

const { paginate } = require("./helper");
const { Article, Author, articleAttrs } = require("./models");

const nextForAuthor = async (authorId, first, after) => {
  const adjusted = {
    attributes: articleAttrs,
    include: [
      {
        model: Author,
        required: true,
        where: { id: authorId }
      }
    ]
  };

  const adjust = options => Object.assign({}, options, adjusted);

  return await paginate(Article, { first, after }, adjust);
};

module.exports = nextForAuthor;
