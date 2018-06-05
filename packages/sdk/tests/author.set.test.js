/* eslint-env node, jest */

'use strict';

const cuid = require ('cuid');
const { Author } = require ('./support');

test ("should be able to update an author info", async ( ) => {
  expect.assertions (9);

  const name = "Mike Nick";
  const bio = "Blockchain developer which doesn't invest in BTC.";

  const author = await Author.create ({ name, bio });
  expect (author.body.data).toBeDefined ( );
  expect (author.body.errors).toBeUndefined ( );

  const updatedAuthor = await Author.set ({
    id: author.body.data.createAuthor.id,
    bio: "Actually, I'm investing now in BTC."
  });

  expect (updatedAuthor.body.data).toBeDefined ( );
  expect (updatedAuthor.body.errors).toBeUndefined ( );

  expect (author.body.data.createAuthor.id).toEqual (
    updatedAuthor.body.data.setAuthor.id
  );

  expect (author.body.data.createAuthor.name).toEqual (
    updatedAuthor.body.data.setAuthor.name
  );

  expect (author.body.data.createAuthor.createdAt).toEqual (
    updatedAuthor.body.data.setAuthor.createdAt
  );

  expect (author.body.data.createAuthor.bio).not.toEqual (
    updatedAuthor.body.data.setAuthor.bio
  );

  const result = await Author.get(author.body.data.createAuthor.id);

  expect (result.body.data.getAuthor).toEqual (
    updatedAuthor.body.data.setAuthor
  );
});

test ("should fail while updating inexistent authors", async ( ) => {
  expect.assertions (2);

  const changes = { id: cuid ( ), name: "Big Joe" };
  const response = await Author.set(changes);

  expect (response.body.data).toBeNull ( );
  expect (response.body.errors).toBeDefined ( );
});
