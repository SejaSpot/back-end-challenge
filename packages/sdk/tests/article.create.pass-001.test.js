/* eslint-env node, jest, es6 */

"use strict";

const { Author, Article } = require("./support");

test("should be able to create articles", async () => {
  expect.assertions(10);

  const authorSample = {
    name: "Jeniffer Lion",
    bio: "The most creative tech writer."
  };

  const author = await Author.create(authorSample);
  expect(author.body.data).toBeDefined();
  expect(author.body.errors).toBeUndefined();

  const articleSample = {
    title: "Java is finally dead",
    content: "Hooray!",
    authorId: author.body.data.createAuthor.id
  };

  const article = await Article.create(articleSample);
  expect(article.body.data).toBeDefined();
  expect(article.body.errors).toBeUndefined();

  expect(article.body.data.createArticle.authorId).toEqual(
    author.body.data.createAuthor.id
  );

  expect(article.body.data.createArticle.views).toEqual(0);

  expect(article.body.data.createArticle.title).toEqual("Java is finally dead");

  expect(article.body.data.createArticle.content).toEqual("Hooray!");

  expect(article.body.data.createArticle.createdAt).toEqual(
    article.body.data.createArticle.updatedAt
  );

  expect(article.body.data.createArticle.author.id).toEqual(
    author.body.data.createAuthor.id
  );
});
