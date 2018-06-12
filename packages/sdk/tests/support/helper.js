"use strict";

const cuid = require("cuid");
const Author = require("./author");
const Article = require("./article");
const Category = require("./category");

const createAuthor = async index => {
  return await Author.create({
    name: `Bot #${index}`,
    bio: `This is a bot #${index}`
  });
};

const createArticle = async (index, authorId) => {
  return await Article.create({
    title: `This is a click-bait #${index}`,
    content: `Yadda yadda yadda... again for the ${index} time.`,
    authorId
  });
};

const createCategory = async () => {
  return await Category.create({ id: cuid() });
};

module.exports.createAuthor = createAuthor;
module.exports.createArticle = createArticle;
module.exports.createCategory = createCategory;
