'use strict';

const author = require ('./author');

module.exports.getAuthor = author.get;
module.exports.setAuthor = author.set;
module.exports.createAuthor = author.create;
module.exports.destroyAuthor = author.destroy;
