/* eslint-env node, jest, es6 */

"use strict";

const cuid = require("cuid");
const { Author } = require("./support");

test("should be able to destroy an author", async () => {
  expect.assertions(7);

  const name = "Chris James";
  const bio = "I have 20 years of hardware design. Huge fan of FPGAs.";

  const author = await Author.create({ name, bio });
  expect(author.body.data).toBeDefined();
  expect(author.body.errors).toBeUndefined();

  const result = await Author.destroy(author.body.data.createAuthor.id);
  expect(author.body.data).toBeDefined();
  expect(author.body.errors).toBeUndefined();
  expect(author.body.data.createAuthor).toEqual(result.body.data.destroyAuthor);

  const inexistent = await Author.get(author.id);
  expect(inexistent.body.data).toBeUndefined();
  expect(inexistent.body.errors).toBeDefined();
});

test("should fail to destroy inexistent authors", async () => {
  expect.assertions(2);

  const response = await Author.destroy(cuid());

  expect(response.body.data).toBeNull();
  expect(response.body.errors).toBeDefined();
});
