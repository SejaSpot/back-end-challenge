/* eslint-env node, jest, es6 */

"use strict";

const cuid = require("cuid");
const { Subcategory } = require("./support");

test("should fail to create on inexistent category", async () => {
  expect.assertions(2);

  const categoryId = cuid();
  const subcategoryId = cuid();

  const input = {
    id: subcategoryId,
    categoryId
  };

  const response = await Subcategory.create(input);
  expect(response.body.data).toBeNull();
  expect(response.body.errors).toBeDefined();
});
