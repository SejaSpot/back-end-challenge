/* eslint-env node, jest, es6 */

"use strict";

const { Author, Article } = require("./support");

test("should destroy article on author deletion", async () => {
  expect.assertions(14);

  const selenaSample = {
    name: "Selena Flower",
    bio: "Computer Scientist undergraduated in Deep Learning."
  };

  const selena = await Author.create(selenaSample);
  expect(selena.body.data).toBeDefined();
  expect(selena.body.errors).toBeUndefined();

  const adversarialSample = {
    title: "An introduction to Adversarial Learning",
    content: "(Wow, it is really complex and demands a strong background.)",
    authorId: selena.body.data.createAuthor.id
  };

  const adversarial = await Article.create(adversarialSample);
  expect(adversarial.body.data).toBeDefined();
  expect(adversarial.body.errors).toBeUndefined();

  const annaSample = {
    name: "Anna Milles",
    bio: "DevOps and Cloud consultant."
  };

  const anna = await Author.create(annaSample);
  expect(anna.body.data).toBeDefined();
  expect(anna.body.errors).toBeUndefined();

  const serverlessSample = {
    title: "Why Serverless is not the end of the road.",
    authorId: anna.body.data.createAuthor.id,
    content: "(Some really compelling argument here.)"
  };

  const serverless = await Article.create(serverlessSample);
  expect(serverless.body.data).toBeDefined();
  expect(serverless.body.errors).toBeUndefined();

  // cascade deletion
  const result1 = await Author.destroy(anna.body.data.createAuthor.id);
  expect(result1.body.data).toBeDefined();
  expect(result1.body.errors).toBeUndefined();

  // only the Anna article is deleted as well
  const result2 = await Article.get(serverless.body.data.createArticle.id);
  expect(result2.body.data).toBeNull();
  expect(result2.body.errors).toBeDefined();

  const result3 = await Article.get(adversarial.body.data.createArticle.id);
  expect(result3.body.data).toBeDefined();
  expect(result3.body.errors).toBeUndefined();
});
