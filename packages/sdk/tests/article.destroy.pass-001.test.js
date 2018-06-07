/* eslint-env node, jest */

'use strict';

const { Author, Article } = require ('./support');

test ("should be able to destroy articles", async ( ) => {
  expect.assertions (7);

  const authorSample = {
    name: "Clearly a click-baiter",
    bio: "Hello, I'm not a click-baiter!"
  };

  const author = await Author.create (authorSample);
  expect (author.body.data).toBeDefined ( );
  expect (author.body.errors).toBeUndefined ( );

  const articleSample = {
    title: "Obama is a secret Soviet Lisp Programmer!",
    authorId: author.body.data.createAuthor.id,
    content: "Buy this cup of coffee with only 0.25 dollars!"
  };

  const article = await Article.create (articleSample);
  expect (article.body.data).toBeDefined ( );
  expect (article.body.errors).toBeUndefined ( );

  const result = await Article.destroy (article.body.data.createArticle.id);
  expect (result.body.data).toBeDefined ( );
  expect (result.body.errors).toBeUndefined ( );

  expect (result.body.data.destroyArticle).toEqual (
    article.body.data.createArticle
  );
});
