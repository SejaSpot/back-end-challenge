/* eslint-env node, jest, es6 */

"use strict";

const cuid = require("cuid");
const { Category, Subcategory } = require("./support");

test("should destroy subcategory on category deletion", async () => {
  expect.assertions(15);

  const categoryId1 = cuid();
  const categoryId2 = cuid();
  const subcategoryId1 = cuid();
  const subcategoryId2 = cuid();

  await Category.create({ id: categoryId2 });
  await Category.create({ id: categoryId1 });

  const input1 = {
    id: subcategoryId1,
    categoryId: categoryId1
  };

  const input2 = {
    id: subcategoryId2,
    categoryId: categoryId2
  };

  const output2 = {
    id: categoryId2 + ":" + subcategoryId2,
    categoryId: categoryId2,
    category: { id: categoryId2 }
  };

  const subcategory1 = await Subcategory.create(input1);
  expect(subcategory1.body.data).not.toBeNull();
  expect(subcategory1.body.data).toBeDefined();
  expect(subcategory1.body.errors).toBeUndefined();

  const subcategory2 = await Subcategory.create(input2);
  expect(subcategory2.body.data).not.toBeNull();
  expect(subcategory2.body.data).toBeDefined();
  expect(subcategory2.body.errors).toBeUndefined();

  // cascade deletion
  const response1 = await Category.destroy(categoryId1);
  expect(response1.body.data).not.toBeNull();
  expect(response1.body.data).toBeDefined();
  expect(response1.body.errors).toBeUndefined();

  // only the subcategory 1 is deleted
  const response2 = await Subcategory.get(
    subcategory1.body.data.createSubcategory.id
  );
  expect(response2.body.data).toBeNull();
  expect(response2.body.errors).toBeDefined();

  const response3 = await Subcategory.get(
    subcategory2.body.data.createSubcategory.id
  );
  expect(response3.body.data).not.toBeNull();
  expect(response3.body.data).toBeDefined();
  expect(response3.body.errors).toBeUndefined();

  expect(response3.body.data.getSubcategory).toEqual(output2);
});
