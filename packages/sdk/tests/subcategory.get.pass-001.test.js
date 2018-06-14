/* eslint-env node, jest, es6 */

"use strict";

const cuid = require("cuid");
const { Category, Subcategory } = require("./support");

test("should get a subcategory", async () => {
  expect.assertions(4);

  const categoryId = cuid();
  const subcategoryId = cuid();

  const input = {
    id: subcategoryId,
    categoryId
  };

  await Category.create({ id: categoryId });

  const subcategory = await Subcategory.create(input);
  expect(subcategory.body.data).not.toBeNull();
  expect(subcategory.body.data).toBeDefined();
  expect(subcategory.body.errors).toBeUndefined();

  const response = await Subcategory.get(
    subcategory.body.data.createSubcategory.id
  );

  expect(response.body.data.getSubcategory).toEqual(
    subcategory.body.data.createSubcategory
  );
});
