/* eslint-env node, jest, es6 */

"use strict";

const cuid = require("cuid");
const { Categorization } = require("./support");
const helper = require("./support/helper");

it("should fail on inexistent categories", async () => {
  expect.assertions(6);

  const author1 = await helper.createAuthor(1);
  expect(author1.body.data).toBeDefined();
  expect(author1.body.errors).toBeUndefined();

  const article1 = await helper.createArticle(
    1,
    author1.body.data.createAuthor.id
  );

  expect(article1.body.data).toBeDefined();
  expect(article1.body.errors).toBeUndefined();

  const articleId = article1.body.data.createArticle.id;
  const categoryId = cuid();

  const response = await Categorization.addCategory(articleId, categoryId);
  expect(response.body.data).toBeNull();
  expect(response.body.errors).toBeDefined();
});
