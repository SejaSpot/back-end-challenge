/* eslint-env node, jest, es6 */

"use strict";

const cuid = require("cuid");
const { Category } = require("./support");

test("should be able to destroy a category", async () => {
  expect.assertions(7);

  const id = cuid();
  const category = await Category.create({ id });
  expect(category.body.data).toBeDefined();
  expect(category.body.errors).toBeUndefined();

  const result = await Category.destroy(category.body.data.createCategory.id);
  expect(result.body.data).toBeDefined();
  expect(result.body.errors).toBeUndefined();

  expect(category.body.data.createCategory).toEqual(
    result.body.data.destroyCategory
  );

  const response = await Category.get(category.body.data.createCategory.id);

  expect(response.body.data).toBeNull();
  expect(response.body.errors).toBeDefined();
});

test("should fail to destroy inexistent categories", async () => {
  expect.assertions(2);

  const response = await Category.destroy(cuid());

  expect(response.body.data).toBeNull();
  expect(response.body.errors).toBeDefined();
});
