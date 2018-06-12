/* eslint-env node, jest, es6 */

"use strict";

const cuid = require("cuid");
const { Categorization } = require("./support");

it("fails to create on both inexistent article & category", async () => {
  expect.assertions(2);

  const response = await Categorization.addCategory(cuid(), cuid());

  expect(response.body.data).toBeNull();
  expect(response.body.errors).toBeDefined();
});
