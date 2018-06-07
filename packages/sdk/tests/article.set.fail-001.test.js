/* eslint-env node, jest */

'use strict';

const cuid = require ('cuid');
const { Article } = require ('./support');

test ("should fail to change inexistent articles", async ( ) => {
  expect.assertions (2);

  const changes = {
    id: cuid ( ),
    title: "Something which seems click-bait"
  };

  const result = await Article.set (changes);
  expect (result.body.data).toBeNull ( );
  expect (result.body.errors).toBeDefined ( );
});
