/* eslint-env node, jest, es6 */

"use strict";

const cuid = require("cuid");
const { Category } = require("./support");

test("should get a category", async () => {
  expect.assertions(5);

  const id = cuid();
  const category = await Category.create({ id });

  expect(category.body.data).toBeDefined();
  expect(category.body.errors).toBeUndefined();

  const result = await Category.get(category.body.data.createCategory.id);

  expect(category.body.data).toBeDefined();
  expect(category.body.errors).toBeUndefined();

  expect(category.body.data.createCategory).toEqual(
    result.body.data.getCategory
  );
});

test("should fail to get inexistent categories", async () => {
  expect.assertions(2);

  const response = await Category.get(cuid());

  expect(response.body.data).toBeNull();
  expect(response.body.errors).toBeDefined();
});
