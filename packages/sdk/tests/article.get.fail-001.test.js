/* eslint-env node, jest */

'use strict';

const cuid = require ('cuid');
const { Article } = require ('./support');

test ("should fail to get inexistent articles", async ( ) => {
  expect.assertions (2);

  const result = await Article.get (cuid ( ));
  expect (result.body.data).toBeNull ( );
  expect (result.body.errors).toBeDefined ( );
});
