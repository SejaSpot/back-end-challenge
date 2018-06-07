/* eslint-env node, jest */

'use strict';

const { Author, Article } = require ('./support');

const authorSample = {
  name: "Victoria Alms",
  bio: "Game developer and game designer.",
};

test ("should get an article", async ( ) => {
  expect.assertions (14);

  const author = await Author.create (authorSample);
  expect (author.body.data).toBeDefined ( );
  expect (author.body.errors).toBeUndefined ( );

  const articleSample = {
    title: "Escape the Reality game realeased!",
    authorId: author.body.data.createAuthor.id,
    content: "Check it out at http://escape-the-reality.com..."
  };

  const article = await Article.create (articleSample);
  expect (article.body.data).toBeDefined ( );
  expect (article.body.errors).toBeUndefined ( );

  const result1 = await Article.get (article.body.data.createArticle.id);
  expect (article.body.data).toBeDefined ();
  expect (article.body.errors).toBeUndefined ();

  expect (result1.body.data.getArticle.authorId).toEqual (
    article.body.data.createArticle.authorId
  );

  expect (result1.body.data.getArticle.title).toEqual (
    article.body.data.createArticle.title
  );

  expect (result1.body.data.getArticle.content).toEqual (
    article.body.data.createArticle.content
  );

  expect (result1.body.data.getArticle.createdAt).toEqual (
    article.body.data.createArticle.createdAt
  );

  expect (result1.body.data.getArticle.views).toEqual (1);

  // ===========================================================================

  const result2 = await Article.get (result1.body.data.getArticle.id);
  expect (result2.body.data).toBeDefined ( );
  expect (result2.body.errors).toBeUndefined ( );
  expect (result2.body.data.getArticle.views).toEqual (2);
});
