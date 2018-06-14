/* eslint-env node, jest, es6 */

"use strict";

const cuid = require("cuid");
const { Subcategory } = require("./support");

test("should fail to get inexistent subcategories", async () => {
  expect.assertions(2);

  const response = await Subcategory.get(cuid());
  expect(response.body.data).toBeNull();
  expect(response.body.errors).toBeDefined();
});
