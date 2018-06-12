/* eslint-env node, jest, es6 */

"use strict";

const { Categorization } = require("./support");
const helper = require("./support/helper");

it("should be able to categorize articles", async () => {
  expect.assertions(10);

  const author1 = await helper.createAuthor(1);
  expect(author1.body.data).toBeDefined();
  expect(author1.body.errors).toBeUndefined();

  const article1 = await helper.createArticle(
    1,
    author1.body.data.createAuthor.id
  );
  expect(article1.body.data).toBeDefined();
  expect(article1.body.errors).toBeUndefined();

  const category1 = await helper.createCategory();
  expect(category1.body.data).not.toBeNull();
  expect(category1.body.errors).toBeUndefined();

  const articleId = article1.body.data.createArticle.id;
  const categoryId = category1.body.data.createCategory.id;

  const response1 = await Categorization.addCategory(articleId, categoryId);
  expect(response1.body.data).not.toBeNull();
  expect(response1.body.errors).toBeUndefined();

  // violates uniqueness constraint
  const response2 = await Categorization.addCategory(articleId, categoryId);
  expect(response2.body.data).toBeNull();
  expect(response2.body.errors).toBeDefined();
});
