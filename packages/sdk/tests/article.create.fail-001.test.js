/* eslint-env node, jest */

'use strict';

const cuid = require ('cuid');
const { Article } = require ('./support');

test ("should fail to create on inexistent authors", async ( ) => {
  expect.assertions (2);

  const input = {
    authorId: cuid ( ),
    title: "This article was written by anonymous",
    content: "We don't forget. We don't forgive. Expect us."
  };

  const result = await Article.create (input);
  expect (result.body.data).toBeNull ( );
  expect (result.body.errors).toBeDefined ( );
});
