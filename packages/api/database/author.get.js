'use strict';

const cuid = require ('cuid');
const { Author, authorAttrs } = require ('./models');
const { sync, check, project, notFound } = require ('./helper');

const get = async (id) => {
  await sync ( );

  const attributes = authorAttrs;

  const options = { attributes };

  const result = await Author.findById (id);
  const reason = notFound ('Author', id);
  check (result, reason);

  return project (result, attributes);
};

module.exports = get;
