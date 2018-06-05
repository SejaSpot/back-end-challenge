'use strict';

const cuid = require ('cuid');
const { Author, authorAttrs } = require ('./models');
const { sync, project } = require ('./helper');

const create = async (input) => {
  await sync ( );

  const data = {
    name: input.name,
    bio: input.bio,
    id: cuid ( )
  };

  const fields = ['name', 'bio', 'id'];
  const attributes = authorAttrs;
  const options = { fields, attributes };

  const result = await Author.create (data, options);
  return project (result, attributes);
};

module.exports = create;
