/* eslint-env node, jest, es6 */

"use strict";

const cuid = require("cuid");
const { Category, Subcategory } = require("./support");

test("should create a subcategory", async () => {
  expect.assertions(8);

  const categoryId = cuid();
  const subcategoryId = cuid();

  const category = await Category.create({ id: categoryId });
  expect(category.body.data).not.toBeNull();
  expect(category.body.data).toBeDefined();
  expect(category.body.errors).toBeUndefined();

  const subcategory = await Subcategory.create({
    id: subcategoryId,
    categoryId
  });

  expect(subcategory.body.data).not.toBeNull();
  expect(subcategory.body.data).toBeDefined();
  expect(subcategory.body.errors).toBeUndefined();

  expect(subcategory.body.data.createSubcategory.id).toEqual(
    categoryId + ":" + subcategoryId
  );

  expect(subcategory.body.data.createSubcategory.categoryId).toEqual(
    categoryId
  );
});
