'use strict';

const cuid = require ('cuid');
const { Article, articleAttrs } = require ('./models');
const { sync, project, notFound, check } = require ('./helper');

const destroy = async (id) => {
  await sync ( );

  const attributes = articleAttrs;
  const options = { attributes };

  const article = await Article.findById (id);
  const reason = notFound ('Article', id);
  check (article, reason);

  await article.destroy ( );

  return project (article, attributes);
};

module.exports = destroy;
