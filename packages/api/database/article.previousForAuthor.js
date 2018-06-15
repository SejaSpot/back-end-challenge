"use strict";

const { paginate } = require("./helper");
const { Article, Author, articleAttrs } = require("./models");

const previousForAuthor = async (authorId, last, before) => {
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

  return await paginate(Article, { last, before }, adjust);
};

module.exports = previousForAuthor;
