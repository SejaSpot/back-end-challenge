'use strict';

const cuid = require ('cuid');
const { Article, articleAttrs } = require ('./models');
const { sync, project, failedCreation } = require ('./helper');

const create = async (input) => {
  await sync ( );

  const fields = ['title', 'content', 'authorId', 'views', 'id'];
  const attributes = articleAttrs;

  const options = { fields, attributes };

  const data = {
    title: input.title,
    content: input.content,
    authorId: input.authorId,
    views: 0,
    id: cuid(),
  };

  try {
    const result = await Article.create (data, options);
    return project (result, attributes);
  }
  catch (why) {
    throw failedCreation ('Article', data.id);
  }
};

module.exports = create;
