/* eslint-env node, jest, es6 */

"use strict";

const cuid = require("cuid");
const { Categorization } = require("./support");
const helper = require("./support/helper");

it("should fail to categorize inexistent articles", async () => {
  expect.assertions(4);

  const category1 = await helper.createCategory();
  expect(category1.body.data).toBeDefined();
  expect(category1.body.errors).toBeUndefined();

  const articleId = cuid();
  const categoryId = category1.body.data.createCategory.id;

  const response = await Categorization.addCategory(articleId, categoryId);
  expect(response.body.data).toBeNull();
  expect(response.body.errors).toBeDefined();
});
