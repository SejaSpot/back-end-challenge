/* eslint-env node, jest */

'use strict';

const cuid = require ('cuid');
const { Author } = require ('./support');

test ("should create an author", async ( ) => {
  expect.assertions (7);

  const name = "Guy the Dude";
  const bio = "Hey bro!";

  const author = await Author.create ({ name, bio });

  expect (author.body.data).toBeDefined ( );
  expect (author.body.data.createAuthor.name).toEqual (name);
  expect (author.body.data.createAuthor.bio).toEqual (bio);
  expect (author.body.data.createAuthor.version).toEqual (0);
  expect (author.body.data.createAuthor.id).toBeDefined ( );
  expect (author.body.data.createAuthor.createdAt).toBeDefined ( );
  expect (author.body.data.createAuthor.updatedAt).toBeDefined ( );
});
