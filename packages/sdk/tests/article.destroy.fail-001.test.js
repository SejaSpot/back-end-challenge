/* eslint-env node, jest */

'use strict';

const cuid = require ('cuid');
const { Article } = require ('./support');

test ("should fail to destroy inexistent articles", async ( ) => {
  expect.assertions (2);

  const result = await Article.destroy (cuid ());
  expect (result.body.data).toBeNull ( );
  expect (result.body.errors).toBeDefined ( );
});
