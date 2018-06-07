/* eslint-env node, jest */

'use strict';

const { Author, Article } = require ('./support');

const billySample = {
  name: "Billy James",
  bio: "Whatever could I say here..."
};

const natashaSample = {
  name: "Natasha Rings",
  bio: "A dedicated tech writer and hobbyist developer."
};

test ("should be able to change the article", async ( ) => {
  expect.assertions (14);

  const billy = await Author.create (billySample);
  expect (billy.body.data).toBeDefined ();
  expect (billy.body.errors).toBeUndefined ();

  const articleSample = {
    title: "Go isn't popular anymore",
    authorId: billy.body.data.createAuthor.id,
    content: "Nowadays, emerging languages such as Pony and Perl 6 are..."
  };

  const article = await Article.create (articleSample);
  expect (article.body.data).toBeDefined ( );
  expect (article.body.errors).toBeUndefined ( );

  const natasha = await Author.create (natashaSample);
  expect (natasha.body.data).toBeDefined ();
  expect (natasha.body.errors).toBeUndefined ( );

  // ===========================================================================

  const changesSample = {
    authorId: natasha.body.data.createAuthor.id,
    title: "Go is fading out",
    id: article.body.data.createArticle.id
  };

  // createdAt here is discarded/ignored
  const changed = await Article.set (changesSample);
  expect (changed.body.data).toBeDefined ( );
  expect (changed.body.errors).toBeUndefined ( );

  expect (changed.body.data.setArticle.id).toEqual (
    article.body.data.createArticle.id
  );

  expect (changed.body.data.setArticle.authorId).toEqual (
    natasha.body.data.createAuthor.id
  );

  expect (changed.body.data.setArticle.title).toEqual (
    "Go is fading out"
  );

  expect (changed.body.data.setArticle.content).toEqual (
    article.body.data.createArticle.content
  );

  expect (changed.body.data.setArticle.id).toEqual (
    article.body.data.createArticle.id
  );

  expect (changed.body.data.setArticle.createdAt).toEqual (
    article.body.data.createArticle.createdAt
  );
});
