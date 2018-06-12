/* eslint-env node, jest, es6 */

"use strict";

const cuid = require("cuid");
const { Category } = require("./support");

test("should create a category", async () => {
  expect.assertions(3);

  const id = cuid();
  const category = await Category.create({ id });

  expect(category.body.data).toBeDefined();
  expect(category.body.errors).toBeUndefined();
  expect(category.body.data.createCategory.id).toEqual(id);
});

test("should fail creation on duplicated categories", async () => {
  expect.assertions(4);

  const id = cuid();
  const category = await Category.create({ id });

  expect(category.body.data).toBeDefined();
  expect(category.body.errors).toBeUndefined();

  const result = await Category.create({ id });

  expect(result.body.data).toBeNull();
  expect(result.body.errors).toBeDefined();
});
