/* eslint-env node, jest, es6 */

"use strict";

const cuid = require("cuid");
const { Author } = require("./support");

test("should get an author", async () => {
  expect.assertions(5);

  const name = "Amelia Paladin";
  const bio = "I'm proud to be a developer!";

  const author = await Author.create({ name, bio });
  expect(author.body.errors).toBeUndefined();
  expect(author.body.data).toBeDefined();

  const result = await Author.get(author.body.data.createAuthor.id);
  expect(result.body.errors).toBeUndefined();
  expect(author.body.data).toBeDefined();

  expect(result.body.data.getAuthor).toEqual(author.body.data.createAuthor);
});

test("should fail to get inexistent authors", async () => {
  expect.assertions(2);

  const response = await Author.get(cuid());

  expect(response.body.data).toBeNull();
  expect(response.body.errors).toBeDefined();
});
