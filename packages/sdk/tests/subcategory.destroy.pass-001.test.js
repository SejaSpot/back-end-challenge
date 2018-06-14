/* eslint-env node, jest, es6 */

"use strict";

const cuid = require("cuid");
const { Category, Subcategory } = require("./support");

test("should be able to destroy subcategories", async () => {
  expect.assertions(9);

  const categoryId = cuid();
  const subcategoryId = cuid();

  await Category.create({ id: categoryId });

  const input = {
    id: subcategoryId,
    categoryId
  };

  const subcategory = await Subcategory.create(input);
  expect(subcategory.body.data).not.toBeNull();
  expect(subcategory.body.data).toBeDefined();
  expect(subcategory.body.errors).toBeUndefined();

  const result = await Subcategory.destroy(
    subcategory.body.data.createSubcategory.id
  );

  expect(result.body.data).not.toBeNull();
  expect(result.body.data).toBeDefined();
  expect(result.body.errors).toBeUndefined();

  expect(subcategory.body.data.createSubcategory).toEqual(
    result.body.data.destroySubcategory
  );

  const promise = await Subcategory.get(
    subcategory.body.data.createSubcategory.id
  );

  expect(promise.body.data).toBeNull();
  expect(promise.body.errors).toBeDefined();
});
